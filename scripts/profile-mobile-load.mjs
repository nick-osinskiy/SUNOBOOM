import {chromium} from 'playwright';
const url=process.argv[2]||'http://127.0.0.1:8765/';
const runs=Number(process.argv[3]||3),samples=[];
if(!Number.isInteger(runs)||runs<1)throw new Error('runs must be a positive integer');
const browser=await chromium.launch({headless:true});
try{
 for(let i=0;i<runs;i++){
  const context=await browser.newContext({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const page=await context.newPage(),cdp=await context.newCDPSession(page);
  await cdp.send('Network.enable');await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});
  await cdp.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:200000,uploadThroughput:93750,connectionType:'cellular4g'});
  await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});await cdp.send('Performance.enable');
  await page.addInitScript(()=>{
   window.__loadProfile={longTasks:[],lcp:0,ready:0};
   new PerformanceObserver(list=>{for(const e of list.getEntries())window.__loadProfile.longTasks.push({start:e.startTime,duration:e.duration});}).observe({type:'longtask',buffered:true});
   new PerformanceObserver(list=>{for(const e of list.getEntries())window.__loadProfile.lcp=e.startTime;}).observe({type:'largest-contentful-paint',buffered:true});
   const ready=()=>{if(window.SUNOBOOM_SHELL?.active){window.__loadProfile.ready=performance.now();}else requestAnimationFrame(ready);};requestAnimationFrame(ready);
  });
  await page.goto(url,{waitUntil:'load',timeout:90000});await page.waitForFunction(()=>window.__loadProfile.ready>0,undefined,{timeout:90000});await page.waitForTimeout(200);
  const sample=await page.evaluate(()=>{
   const nav=performance.getEntriesByType('navigation')[0],p=window.__loadProfile;
   const resources=performance.getEntriesByType('resource').map(r=>({name:r.name.split('/').at(-1),type:r.initiatorType,bytes:r.encodedBodySize,decoded:r.decodedBodySize,duration:Math.round(r.duration),start:Math.round(r.startTime)}));
   const vue=resources.filter(r=>/^sunoboom-vue\.js(?:\?|$)/.test(r.name));
   return {vueFetches:vue.length,vueStartMs:vue[0]?.start,vueLoadMs:vue[0]?.duration,readyMs:Math.round(p.ready),fcpMs:Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime||0),lcpMs:Math.round(p.lcp),domContentLoadedMs:Math.round(nav.domContentLoadedEventEnd),documentBytes:nav.encodedBodySize,resourceBytes:resources.reduce((n,r)=>n+r.bytes,0),longTasks:p.longTasks.length,blockingMs:Math.round(p.longTasks.reduce((n,e)=>n+Math.max(0,e.duration-50),0)),largest:resources.sort((a,b)=>b.bytes-a.bytes).slice(0,12)};
  });
  const metrics=await cdp.send('Performance.getMetrics');sample.cpu=Object.fromEntries(metrics.metrics.filter(m=>['ScriptDuration','TaskDuration','LayoutDuration','RecalcStyleCount'].includes(m.name)).map(m=>[m.name,m.value]));samples.push(sample);
  console.log(JSON.stringify({run:i+1,...sample}));await context.close();
 }
 const median=key=>samples.map(s=>s[key]).sort((a,b)=>a-b)[Math.floor(samples.length/2)];
 console.log(JSON.stringify({summary:{runs,url,profile:'375x812; cold cache; 1.6 Mbps down / 0.75 Mbps up; 150ms latency; 4x CPU slowdown',readyMs:median('readyMs'),fcpMs:median('fcpMs'),lcpMs:median('lcpMs'),blockingMs:median('blockingMs'),documentBytes:median('documentBytes'),resourceBytes:median('resourceBytes')}}));
}finally{await browser.close();}
