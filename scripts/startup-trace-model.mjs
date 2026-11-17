// Chrome complete events use monotonic microseconds. Category coverage is inclusive; categories may overlap.
export function summarizeStartupTrace(events) {
 const startMarks=events.filter(e=>e.name==='sb-profile-start'&&Number.isFinite(e.ts));
 const readyMarks=events.filter(e=>e.name==='sb-profile-ready'&&Number.isFinite(e.ts));
 const pairs=readyMarks.flatMap(ready=>startMarks.filter(start=>start.pid===ready.pid&&start.tid===ready.tid&&start.ts<ready.ts).map(start=>({start,ready})));
 if(pairs.length!==1)throw new Error('Expected exactly one start/ready trace marker pair on the same renderer thread');
 const {start,ready}=pairs[0],origin=start.ts,end=ready.ts;
 const intervals=events.filter(e=>e.ph==='X'&&e.pid===start.pid&&e.tid===start.tid&&Number.isFinite(e.ts)&&Number.isFinite(e.dur)&&e.dur>0&&e.ts<end&&e.ts+e.dur>origin).map(e=>({name:e.name,start:Math.max(e.ts,origin),end:Math.min(e.ts+e.dur,end)}));
 const ms=n=>Math.round(n/100)/10;
 const union=arr=>{
  const sorted=arr.slice().sort((a,b)=>a.start-b.start||b.end-a.end),out=[];
  for(const a of sorted){
   const last=out.at(-1);
   if(last&&a.start<=last.end)last.end=Math.max(last.end,a.end);
   else out.push({start:a.start,end:a.end});
  }
  return out;
 };
 const duration=arr=>union(arr).reduce((total,e)=>total+e.end-e.start,0);
 const groups={
  script:new Set(['EvaluateScript','FunctionCall','EventDispatch','TimerFire','FireAnimationFrame','RunMicrotasks','v8.run','V8.Execute']),
  style:new Set(['UpdateLayoutTree','RecalculateStyles','RecalculateStyle']),
  layout:new Set(['Layout']),
  paint:new Set(['PrePaint','Paint','PaintSetup','CompositeLayers']),
  parse:new Set(['ParseHTML','ParseAuthorStyleSheet'])
 };
 const categories=Object.fromEntries(Object.entries(groups).map(([name,names])=>{
  const filtered=intervals.filter(e=>names.has(e.name));
  return [name,{events:filtered.length,coveredMs:ms(duration(filtered))}];
 }));
 const tasks=intervals.filter(e=>e.name==='RunTask'||e.name==='ThreadControllerImpl::RunTask');
 // Nested task wrappers are counted once; adjacent independent tasks stay separate.
 const outer=[];
 for(const t of tasks.slice().sort((a,b)=>a.start-b.start||b.end-a.end)){
  const last=outer.at(-1);
  if(last&&t.start<last.end){last.end=Math.max(last.end,t.end);}
  else outer.push({start:t.start,end:t.end});
 }
 const longTasks=outer.filter(t=>t.end-t.start>50000).sort((a,b)=>(b.end-b.start)-(a.end-a.start)).map(t=>({
  startMs:ms(t.start-origin),durationMs:ms(t.end-t.start),
  categories:Object.fromEntries(Object.entries(groups).map(([name,names])=>[name,ms(duration(intervals.filter(e=>names.has(e.name)&&e.start<t.end&&e.end>t.start).map(e=>({start:Math.max(e.start,t.start),end:Math.min(e.end,t.end)}))))]))
 }));
 return {windowMs:ms(end-origin),renderer:{pid:start.pid,tid:start.tid},categories,taskEvents:tasks.length,longTasks,blockingMs:ms(outer.reduce((n,t)=>n+Math.max(0,t.end-t.start-50000),0))};
}
