import assert from 'node:assert/strict';

export async function checkDirectPages(browser,base){
 const context=await browser.newContext(),page=await context.newPage(),errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 try{
  await page.goto(base,{waitUntil:'networkidle'});await page.waitForFunction(()=>window.SUNOBOOM_SHELL?.active);
  await page.evaluate(()=>{
   const inputs=SUNOBOOM_VIEW_INPUTS;
   window.SUNOBOOM_VIEW_INPUTS={get active(){return inputs.active;},field:inputs.field,named:inputs.named,withInputs(values,run){
    return inputs.withInputs(values,()=>{
     const get=document.getElementById;
     document.getElementById=()=>{throw Error('Page model attempted to read rendered native fields');};
     try{return run();}finally{document.getElementById=get;}
    });
   }};
   window.__native217=chrome;
   chrome=()=>{throw Error('Native page renderer was called during a healthy Vue render');};
  });
  for(const nav of ['home','account','ideas','saved','projects','events','myprompts','myideas','catalog','studio','player','producer','tracks','artists','songs','mixer']){
   await page.evaluate(nav=>go(nav),nav);
   await page.waitForFunction(()=>!document.querySelector('[data-sb-vue-page]')?.hasAttribute('data-sb-page-fallback'));
   assert.equal(await page.evaluate(()=>SUNOBOOM_SHELL.snapshot().nativeFallbacks),0,nav);
   assert.equal(await page.locator('[data-sb-native-stage],[data-sb-native-fallback]').count(),0);
  }
  await page.evaluate(()=>{
   const api=SUNOBOOM_LEGACY_GENRE;
   window.SUNOBOOM_LEGACY_GENRE={...api,tabContent(){throw Error('Unused native genre HTML was generated');}};
   openGenre('reggae-ska');
  });
  for(const tab of ['ideas','prompts','artists','overview']){
   await page.locator('.genre-side-item[data-tab="'+tab+'"]').click();
   await page.waitForFunction(tab=>view.tab===tab,tab);
  }
  const linked=await page.evaluate(()=>{
   const dna=application.execute('dna.save',{name:'Linked artist 217'}).value;
   const track=application.execute('track.save',{title:'Linked track 217',artistDnaId:dna.id}).value;
   view.sbTrackSelected=track.id;view.sbTrackEdit=null;go('tracks');return {dna:dna.id,track:track.id};
  });
  await page.locator('[data-action="tp-edit"]').click();
  assert.equal(await page.locator('#tp-dna').inputValue(),linked.dna);
  await page.locator('#tp-title').fill('Linked track edited 217');await page.locator('[data-action="tp-save"]').click();
  assert.equal(await page.evaluate(id=>data.tracks.find(item=>item.id===id).artistDnaId,linked.track),linked.dna);
  await page.locator('[data-action="dna-open-from-track"]').click();await page.waitForFunction(()=>view.nav==='artists');
  assert.equal(await page.evaluate(()=>SUNOBOOM_SHELL.snapshot().nativeFallbacks),0);
  await page.evaluate(()=>{chrome=window.__native217;go('projects');});
  await page.locator('#p-title').fill('Fallback draft 217');
  await page.evaluate(()=>{
   window.__creator217=SUNOBOOM_LEGACY_PROJECT_CREATOR;
   window.__title217=document.getElementById('p-title');
   window.SUNOBOOM_LEGACY_PROJECT_CREATOR={snapshot(){throw Error('intentional direct snapshot failure');}};
   render();
  });
  await page.locator('[data-sb-native-page-fallback]').waitFor();
  assert.equal(await page.evaluate(()=>document.getElementById('p-title')===window.__title217),true);
  assert.equal(await page.locator('#p-title').inputValue(),'Fallback draft 217');
  assert.equal(await page.evaluate(()=>SUNOBOOM_SHELL.snapshot().nativeFallbacks),1);
  await page.evaluate(()=>{window.SUNOBOOM_LEGACY_PROJECT_CREATOR=window.__creator217;go('home');});
  await page.locator('#sb-vue-dashboard').waitFor();assert.equal(await page.locator('[data-sb-native-page-fallback]').count(),0);
  assert.deepEqual(errors,[]);
  console.log('16 direct Vue pages with native HTML forbidden, lazy native recovery and draft/node identity PASS');
 }finally{await context.close();}

 const delayed=await browser.newContext();let release;
 const gate=new Promise(resolve=>release=resolve);
 await delayed.route('**/dist/vue/*.js*',async route=>{await gate;await route.continue();});
 const editor=await delayed.newPage();
 try{
  await editor.goto(base+'#/songs/new',{waitUntil:'domcontentloaded'});
  await editor.locator('#sbsong-save-form [name="title"]').fill('File draft 217');
  await editor.locator('#sbsong-save-form [name="audio"]').setInputFiles({name:'draft217.wav',mimeType:'audio/wav',buffer:Buffer.from('RIFF217 draft audio')});
  await editor.evaluate(()=>{window.__audio217=document.querySelector('#sbsong-save-form [name="audio"]');window.__fileClicks217=0;window.__audio217.addEventListener('click',()=>window.__fileClicks217++);});
  release();await editor.waitForFunction(()=>window.SUNOBOOM_SHELL?.active);
  await editor.locator('[data-sb-file-boundary]').waitFor();
  assert.equal(await editor.locator('#sbsong-save-form [name="title"]').inputValue(),'File draft 217');
  for(let i=0;i<2;i++){
   assert.equal(await editor.evaluate(()=>document.querySelector('#sbsong-save-form [name="audio"]')===window.__audio217&&window.__audio217.files[0]?.name==='draft217.wav'),true);
   if(!i){await editor.evaluate(()=>render());await editor.waitForTimeout(30);}
  }
  assert.equal(await editor.evaluate(()=>SUNOBOOM_SHELL.snapshot().nativeFallbacks),0);
  console.log('Delayed song editor handoff: same selected file element/FileList and draft, direct rerender PASS');
 }finally{release();await delayed.close();}
 for(const kind of ['dna','producer','settings']){
  const c=await browser.newContext(),p=await c.newPage();let done;const wait=new Promise(resolve=>done=resolve);
  await c.route('**/dist/vue/*.js*',async route=>{await wait;await route.continue();});
  try{
   await p.goto(base,{waitUntil:'domcontentloaded'});
   if(kind==='dna')await p.evaluate(()=>{view.sbDnaEdit='new';go('artists');});
   if(kind==='producer')await p.evaluate(()=>{SUNOBOOM_CORE.productions.execute('create',{title:'Saved 217'});go('producer');});
   if(kind==='settings')await p.evaluate(()=>{go('account');SUNOBOOM_LEGACY_SETTINGS.open();});
   const id=kind==='dna'?'dna-name':kind==='producer'?'sbpc-title':'sbs-name';
   await p.locator('#'+id).fill('Unsent '+kind+' 217');
   const baseline=await p.evaluate(()=>localStorage.getItem('sunoboom-v1'));
   done();await p.waitForFunction(()=>window.SUNOBOOM_SHELL?.active);
   assert.equal(await p.locator('#'+id).inputValue(),'Unsent '+kind+' 217');
   if(kind==='dna'){await p.locator('#dna-mood').fill('Keep unsent name');assert.equal(await p.locator('#dna-name').inputValue(),'Unsent dna 217');}
   if(kind==='producer'){await p.locator('#sbpc-artist').fill('Keep unsent title');assert.equal(await p.locator('#sbpc-title').inputValue(),'Unsent producer 217');}
   assert.equal(await p.evaluate(()=>localStorage.getItem('sunoboom-v1')),baseline,'handoff never autosaves '+kind);
  }finally{done();await c.close();}
 }
 console.log('Delayed DNA, Master and settings drafts survive reactive handoff without autosave PASS');

}
