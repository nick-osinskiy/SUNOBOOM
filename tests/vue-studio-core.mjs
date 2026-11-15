import assert from 'node:assert/strict';

export async function checkStudioCore(browser,base){
 for(const [vue,mobile]of [[true,false],[true,true],[false,true]]){
  const context=await browser.newContext({viewport:mobile?{width:375,height:812}:{width:1440,height:900},isMobile:mobile,hasTouch:mobile});
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  if(!vue)await page.route('**/dist/vue/sunoboom-vue.js*',route=>route.abort());
  try{
   await page.goto(base,{waitUntil:'networkidle'});
   await page.waitForFunction(()=>!!window.SUNOBOOM_ARRANGER&&!!window.SUNOBOOM_LEGACY_SETTINGS);
   const direct=await page.evaluate(()=>{
    const get=document.getElementById;
    document.getElementById=()=>{throw Error('core read HTML');};
    try{
     const {studio,arrangement,mixer,preferences,auditor}=SUNOBOOM_CORE;
     const results=[studio.execute('field',{key:'genre',value:'alternative-rock'}),arrangement.execute('preset',{name:'blank'}),arrangement.execute('add',{type:'custom',title:'Без HTML 213'}),preferences.execute('appearance.set',{key:'theme',value:'forest'}),mixer.execute('equal')];
     const before=studio.state.extra;arrangement.prepareTransfer();
     return {ok:results.every(x=>x.ok),owner:builder===studio.state,previewIsolated:before===studio.state.extra,lyrics:arrangement.generatedLyrics(),report:auditor.inspect('90 BPM, 140 BPM',null).issues.length};
    }finally{document.getElementById=get;}
   });
   assert.equal(direct.ok,true);assert.equal(direct.owner,true);assert.equal(direct.previewIsolated,true);assert.match(direct.lyrics,/Без HTML 213/);assert.ok(direct.report>0);
   await page.evaluate(()=>go('studio'));
   await page.waitForFunction(vue=>document.querySelector('.studio-grid')?.hasAttribute('data-v-app')===vue,vue);
   assert.match(await page.locator('#sba-arranger').textContent(),/Без HTML 213/);
   // A quota failure must preserve the previous musical state, JSON and input draft.
   const baseline=await page.evaluate(()=>({draft:SUNOBOOM_CORE.arrangement.exportDraft(),json:localStorage.getItem(SUNOBOOM_CORE.keys.arrangement)}));
   await page.evaluate(()=>{window.__studio213Set=Storage.prototype.setItem;Storage.prototype.setItem=function(key,value){if([SUNOBOOM_CORE.keys.arrangement,SUNOBOOM_CORE.keys.settings].includes(key))throw Error('quota');return window.__studio213Set.call(this,key,value);};});
   try{
    const input=page.locator('[data-sba-field="customName"]').last();await input.fill('Несохранённый блок 213');
    await page.waitForFunction(()=>document.getElementById('sba-message')?.textContent.includes('Не удалось сохранить'));
    assert.equal(await input.inputValue(),'Несохранённый блок 213');
    assert.deepEqual(await page.evaluate(()=>SUNOBOOM_CORE.arrangement.exportDraft()),baseline.draft);
    assert.equal(await page.evaluate(()=>localStorage.getItem(SUNOBOOM_CORE.keys.arrangement)),baseline.json);
    await page.evaluate(()=>go('account'));
    await page.locator('[data-sbs-action="open"]').click();
    await page.locator('#sbs-theme').selectOption('pink');
    assert.equal(await page.locator('#sbs-theme').inputValue(),'forest');
    assert.equal(await page.evaluate(()=>SUNOBOOM_CORE.preferences.appearance.theme),'forest');
   }finally{await page.evaluate(()=>{Storage.prototype.setItem=window.__studio213Set;delete window.__studio213Set;});}
   await page.locator('#sbs-theme').selectOption('ocean');
   assert.equal(await page.evaluate(()=>document.documentElement.dataset.sbTheme),'ocean');
   const saved=await page.evaluate(()=>({draft:SUNOBOOM_CORE.arrangement.exportDraft(),settings:{...SUNOBOOM_CORE.preferences.appearance}}));
   await page.reload({waitUntil:'networkidle'});
   assert.deepEqual(await page.evaluate(()=>({draft:SUNOBOOM_CORE.arrangement.exportDraft(),settings:{...SUNOBOOM_CORE.preferences.appearance}})),saved);
   assert.deepEqual(errors,[]);
   console.log(`Studio/arranger/mixer/preferences commands, quota/draft and reload ${vue?'Vue':'native'} ${mobile?'mobile':'desktop'} PASS`);
  }finally{await context.close();}
 }
}
