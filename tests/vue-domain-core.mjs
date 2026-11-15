import assert from 'node:assert/strict';

export async function checkDomainCore(page,vue){
 const before=await page.evaluate(()=>structuredClone(data));
 try{
  const created=await page.evaluate(()=>{
   const get=document.getElementById;
   document.getElementById=()=>{throw Error('domain command read HTML');};
   try{
    const result=application.execute('project.create',{title:'Без HTML 211',genre:GENRES[0].id});
    return {ok:result.ok,id:result.value.id,owner:application.state===data};
   }finally{document.getElementById=get;}
  });
  assert.equal(created.ok,true);assert.equal(created.owner,true);
  await page.evaluate(id=>{view.selectedProject=id;go('projects');},created.id);
  await page.waitForFunction(({vue})=>{
   const el=document.getElementById('sb-vue-project-detail');return el&&el.hasAttribute('data-v-app')===vue;
  },{vue});
  assert.match(await page.locator('#sb-vue-project-detail').textContent(),/Без HTML 211/);
  await page.locator('#project-notes').fill('Из формы 211');
  await page.locator('[data-action="save-project"]').click();
  assert.equal(await page.evaluate(id=>application.state.projects.find(p=>p.id===id).notes,created.id),'Из формы 211');
  // A failed JSON transaction must not reset the user's still-unsaved input.
  await page.evaluate(()=>{
   window.__core211Set=Storage.prototype.setItem;
   Storage.prototype.setItem=function(key,value){if(key==='sunoboom-v1')throw Error('test quota');return window.__core211Set.call(this,key,value);};
  });
  try{
   await page.locator('#project-notes').fill('Несохранённый черновик 211');
   await page.locator('[data-action="save-project"]').click();
   assert.equal(await page.locator('#project-notes').inputValue(),'Несохранённый черновик 211');
   assert.equal(await page.evaluate(id=>data.projects.find(p=>p.id===id).notes,created.id),'Из формы 211');
   assert.equal(await page.evaluate(()=>application.state===data),true);
  }finally{await page.evaluate(()=>{Storage.prototype.setItem=window.__core211Set;delete window.__core211Set;});}
  await page.locator('[data-action="save-project"]').click();
  assert.equal(await page.evaluate(id=>JSON.parse(localStorage.getItem('sunoboom-v1')).projects.find(p=>p.id===id).notes,created.id),'Несохранённый черновик 211');
  // Seed the original DB/store/key layout outside the new repository first.
  const media=await page.evaluate(async()=>{
   const db=await new Promise((resolve,reject)=>{const req=indexedDB.open('sunoboom-song-media-v1',1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('files'))req.result.createObjectStore('files');};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});
   const key='compat211:audio',bytes=new Uint8Array([82,73,70,70,211,0]);
   await new Promise((resolve,reject)=>{const tx=db.transaction('files','readwrite');tx.objectStore('files').put(new Blob([bytes],{type:'audio/wav'}),key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});db.close();
   const stored=await SUNOBOOM_CORE.repositories.media.get(key);
   const result={type:stored.type,bytes:[...new Uint8Array(await stored.arrayBuffer())]};
   await SUNOBOOM_CORE.repositories.media.delete(key);return result;
  });
  assert.deepEqual(media,{type:'audio/wav',bytes:[82,73,70,70,211,0]});
  console.log(`Shared domain commands, quota/draft rollback and original IDB keys ${vue?'Vue':'native'} PASS`);
 }finally{
  await page.evaluate(before=>{application.importBackup({app:'SUNOBOOM',data:before});view.selectedProject=null;go('home');},before);
 }
}
