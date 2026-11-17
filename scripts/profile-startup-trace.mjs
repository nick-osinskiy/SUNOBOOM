import {chromium} from 'playwright';
import {summarizeStartupTrace} from './startup-trace-model.mjs';

const url=process.argv[2]||'http://127.0.0.1:8765/';
const runs=Number(process.argv[3]||3);
if(!Number.isInteger(runs)||runs<1)throw new Error('runs must be a positive integer');
const browser=await chromium.launch({headless:true});
const samples=[];
try{
 for(let i=0;i<runs;i++){
  const context=await browser.newContext({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  try{
   const page=await context.newPage(),cdp=await context.newCDPSession(page);
   const events=[];
   await cdp.send('Network.enable');
   await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});
   await cdp.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:200000,uploadThroughput:93750,connectionType:'cellular4g'});
   await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});
   await page.addInitScript(()=>{
    if(window!==window.top)return;
    performance.mark('sb-profile-start');
    const check=()=>{
     if(window.SUNOBOOM_SHELL?.active)performance.mark('sb-profile-ready');
     else requestAnimationFrame(check);
    };
    requestAnimationFrame(check);
   });
   cdp.on('Tracing.dataCollected',({value})=>{for(const event of value)events.push(event);});
   const completed=new Promise(resolve=>cdp.once('Tracing.tracingComplete',resolve));
   await cdp.send('Tracing.start',{categories:'toplevel,devtools.timeline,blink.user_timing,disabled-by-default-devtools.timeline',transferMode:'ReportEvents'});
   try{
    await page.goto(url,{waitUntil:'load',timeout:90000});
    await page.waitForFunction(()=>performance.getEntriesByName('sb-profile-ready').length===1,undefined,{timeout:90000});
   }finally{
    await cdp.send('Tracing.end');
   }
   let timeout;
   try{
    const result=await Promise.race([completed,new Promise((_,reject)=>{timeout=setTimeout(()=>reject(new Error('Tracing completion timeout')),30000);})]);
    if(result.dataLossOccurred)throw new Error('Chromium reported trace data loss');
   }finally{clearTimeout(timeout);}
   const timing=await page.evaluate(()=>({readyMs:performance.getEntriesByName('sb-profile-ready')[0].startTime,fcpMs:performance.getEntriesByName('first-contentful-paint')[0]?.startTime??null}));
   const sample={run:i+1,...timing,...summarizeStartupTrace(events)};
   samples.push(sample);console.log(JSON.stringify(sample));
  }finally{await context.close();}
 }
 const median=values=>{const ordered=values.slice().sort((a,b)=>a-b);const mid=Math.floor(ordered.length/2);return ordered.length%2?ordered[mid]:(ordered[mid-1]+ordered[mid])/2;};
 const medianKey=key=>samples.some(s=>s[key]===null)?null:median(samples.map(s=>s[key]));
 const summary={url,runs,chromium:browser.version(),profile:'375x812; cold cache; 1.6 Mbps down; 150 ms latency; CPU 4x; trace enabled',readyMs:medianKey('readyMs'),fcpMs:medianKey('fcpMs'),windowMs:medianKey('windowMs'),blockingMs:medianKey('blockingMs'),categories:Object.fromEntries(Object.keys(samples[0].categories).map(key=>[key,median(samples.map(s=>s.categories[key].coveredMs))]))};
 console.log(JSON.stringify({summary}));
}finally{await browser.close();}
