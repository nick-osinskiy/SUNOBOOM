import assert from 'node:assert/strict';

export async function checkStage2Acceptance(browser,base){
 for(const vue of [true,false]){
  const context=await browser.newContext({viewport:vue?{width:1440,height:900}:{width:375,height:812},isMobile:!vue,hasTouch:!vue});
  if(!vue)await context.route('**/dist/vue/sunoboom-vue.js*',route=>route.abort());
  await context.addInitScript(()=>{
   if(!localStorage.getItem('sunoboom-v1')){
    localStorage.setItem('sunoboom-v1',JSON.stringify({profileName:'Старый профиль',projects:[{id:'project-old',title:'Проект',future:{keep:true}}],favorites:[],savedIdeas:[],savedGeneratedIdeas:[],manualIdeas:[],savedPrompts:[],artistDNAs:[{id:'dna-old',name:'Артист'}],tracks:[{id:'track-old',title:'Трек',projectId:'project-old',artistDnaId:'dna-old',versions:[{id:'version-old',label:'Старый дубль'}]}],futureRoot:{keep:true}}));
    localStorage.setItem('sunoboom-my-songs-v1',JSON.stringify([{id:'legacy214',title:'Старое аудио 214',passportId:'track-old',hasAudio:true,hasCover:false,createdAt:123}]));
    localStorage.setItem('sunoboom-artist-profile-favorites-v1',JSON.stringify(['кино']));
   }
  });
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  try{
   await page.goto(base,{waitUntil:'networkidle'});
   await page.waitForFunction(()=>!!window.SUNOBOOM_MY_SONGS&&!!window.SUNOBOOM_PAGE_STATE);
   await page.evaluate(async()=>{
    const db=await new Promise((resolve,reject)=>{const r=indexedDB.open('sunoboom-song-media-v1',1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains('files'))r.result.createObjectStore('files');};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});
    await new Promise((resolve,reject)=>{const tx=db.transaction('files','readwrite');tx.objectStore('files').put(new Blob([new Uint8Array([82,73,70,70,214,0])],{type:'audio/wav'}),'legacy214:audio');tx.oncomplete=resolve;tx.onabort=()=>reject(tx.error);});db.close();
   });
   const result=await page.evaluate(async()=>{
    const owner=data,songs=SUNOBOOM_CORE.songs,backup=application.exportBackup();
    const get=document.getElementById,query=document.querySelector,queryAll=document.querySelectorAll;
    document.getElementById=document.querySelector=document.querySelectorAll=()=>{throw Error('page model read HTML');};
    try{
     view.nav='account';const account=SUNOBOOM_LEGACY_ACCOUNT_HOME.snapshot(),page=SUNOBOOM_PAGE_STATE.snapshot();
     const header=SUNOBOOM_LEGACY_HEADER.snapshot();
     const idea=application.execute('idea.save',{title:'Без HTML 214',genre:'alternative-rock',pitch:'Сюжет'});view.nav='myideas';const collection=SUNOBOOM_LEGACY_IDEA_COLLECTIONS.snapshot();
     const recent=application.execute('genre.recent',{id:'alternative-rock'}),tags=application.execute('performance.preferences',{intensity:4});
     const favorite=SUNOBOOM_CORE.preferences.execute('artist.favorite.toggle',{key:'new artist'});
     const restored=application.importBackup(backup);
     const bytes=[...new Uint8Array(await(await songs.readAudio('legacy214','original')).arrayBuffer())];
     return {header:header.breadcrumb,actions:collection.groups[0].items.find(x=>x.id===idea.value.id).actions.map(x=>x.name),ok:recent.ok&&tags.ok&&favorite.ok&&restored.ok,owner:data===owner&&owner===application.state,tiles:account.tiles.length,key:page.key,bytes,links:data.tracks[0],future:data.futureRoot,song:songs.get('legacy214')};
    }finally{document.getElementById=get;document.querySelector=query;document.querySelectorAll=queryAll;}
   });
   assert.equal(result.ok,true);assert.equal(result.header,'Личный кабинет');assert.ok(result.actions.includes('pc-from-idea'));assert.ok(result.actions.includes('tp-from-idea'));assert.equal(result.owner,true);assert.equal(result.tiles,11);assert.equal(result.key,'account');
   assert.deepEqual(result.bytes,[82,73,70,70,214,0]);assert.equal(result.links.projectId,'project-old');assert.equal(result.links.artistDnaId,'dna-old');assert.equal(result.links.versions[0].id,'version-old');assert.equal(result.song.passportId,'track-old');assert.equal(result.song.id,'legacy214');assert.deepEqual(result.future,{keep:true});
   await page.evaluate(()=>go('account'));
   await page.waitForFunction(vue=>document.getElementById('sb-vue-account-home')?.hasAttribute('data-v-app')===vue,vue);
   assert.equal(await page.locator('.account-grid .account-tile').count(),11);
   assert.deepEqual(errors,[]);
   console.log(`Stage 2 acceptance: DOM-free page data, legacy JSON/IDB bytes, IDs, links, backup and single owners ${vue?'Vue desktop':'native mobile'} PASS`);
  }finally{await context.close();}
 }
}
