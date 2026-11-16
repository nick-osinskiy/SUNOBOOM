import assert from 'node:assert/strict';

export async function checkStartupRenderBatch(browser,base){
 for(const mobile of [false,true]){
  const context=await browser.newContext({viewport:mobile?{width:375,height:812}:{width:1440,height:900}});
  await context.route('**/dist/vue/*.js*',route=>route.abort());
  await context.addInitScript(()=>{
   window.__startupWrites=0;
   const html=Object.getOwnPropertyDescriptor(Element.prototype,'innerHTML');
   Object.defineProperty(Element.prototype,'innerHTML',{...html,set(value){
    if(this.id==='app')window.__startupWrites++;
    return html.set.call(this,value);
   }});
  });
  const page=await context.newPage();
  try{
   await page.goto(base,{waitUntil:'networkidle'});
   assert.ok(await page.evaluate(()=>window.__startupWrites<=12),'inline extension installation must not repeatedly replace the whole app');
   assert.equal(await page.locator('.dash-panel').count(),3,'the final dashboard replaces the initial preview');
   assert.equal(await page.evaluate(()=>findGenre('ska-punk').family),'Ска','all later catalogue extensions are installed');
   assert.equal(await page.evaluate(()=>{go('projects');return !!document.getElementById('p-title');}),true,'ordinary navigation remains synchronous');
   await page.locator('#p-title').fill('Native startup draft');
   assert.equal(await page.evaluate(()=>{
    const node=document.getElementById('p-title'),writes=window.__startupWrites;
    sbFlushStartupRender();
    return node===document.getElementById('p-title')&&node.value==='Native startup draft'&&writes===window.__startupWrites;
   }),true,'the completed startup batch cannot replace subsequent drafts');
   console.log(`Bounded startup writes, complete native dashboard/catalogue and synchronous actions ${mobile?'mobile':'desktop'} PASS`);
  }finally{await context.close();}
 }
}
