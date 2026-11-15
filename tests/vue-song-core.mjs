import assert from 'node:assert/strict';

// Actual IndexedDB transactions, exercised with both Vue and the native fallback.
export async function checkSongCore(page,vue){
 const result=await page.evaluate(async()=>{
  const songs=SUNOBOOM_CORE.songs,master=SUNOBOOM_CORE.productions,before=application.exportBackup();
  const audio=new File([new Uint8Array([82,73,70,70,212])],'old.wav',{type:'audio/wav'});
  const cover=new File(['old-cover'],'cover.png',{type:'image/png'});
  const get=document.getElementById,set=Storage.prototype.setItem;
  let id;
  function check(value,message){if(!value)throw Error(message);}
  try{
   document.getElementById=()=>{throw Error('command read HTML');};
   const created=await songs.execute('save',{title:'Без HTML 212',audio,cover,embeddedCover:null});check(created.ok,created.error);id=created.value.id;
   const original=await songs.readAudio(id,'original');check(await original.text()===await audio.text(),'old audio bytes changed');
   const work=master.execute('create',{type:'song',id});check(work.ok,work.error);
   check(master.execute('stage',{id:work.value.id,step:'listening',status:'done'}).ok,'headless stage');
   const repeat=master.execute('create',{type:'song',id});check(repeat.existing&&repeat.value.id===work.value.id,'duplicate Master work');
   document.getElementById=get;
   const stored=localStorage.getItem(SUNOBOOM_CORE.keys.songs);
   Storage.prototype.setItem=function(key,value){if(key===SUNOBOOM_CORE.keys.songs)throw Error('injected quota');return set.call(this,key,value);};
   const failed=await songs.execute('save',{id,title:'Failed',audio,cover:new File(['replacement'],'new.png',{type:'image/png'})});
   check(!failed.ok,'quota unexpectedly succeeded');check(songs.get(id).title==='Без HTML 212','in-memory state changed');
   check(localStorage.getItem(SUNOBOOM_CORE.keys.songs)===stored,'JSON changed after quota');
   check(await(await songs.readCover(id)).text()==='old-cover','old cover overwritten despite failed metadata');
   const db=await new Promise((resolve,reject)=>{const r=indexedDB.open('sunoboom-song-media-v1',1);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});
   const keys=await new Promise((resolve,reject)=>{const tx=db.transaction('files');const r=tx.objectStore('files').getAllKeys();r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});db.close();
   check(keys.filter(key=>String(key).startsWith(id+':')).length===2,'orphaned version file after quota');
   const removed=await songs.execute('remove',{id});check(!removed.ok&&!!(await songs.readAudio(id,'original')),'failed removal lost old bytes');
   Storage.prototype.setItem=set;
   const added=await songs.execute('version.add',{id,file:audio,label:'Финальный дубль'});check(added.ok,added.error);
   return {id,versionId:added.meta.version.id,owner:songs===SUNOBOOM_CORE.createSongs(),workId:work.value.id};
  }catch(error){if(id){Storage.prototype.setItem=set;await songs.execute('remove',{id});}throw error;}
  finally{document.getElementById=get;Storage.prototype.setItem=set;application.importBackup(before);}
 });
 assert.equal(result.owner,true);
 try{
  await page.evaluate(()=>{
   window.__song212URLs={create:URL.createObjectURL,revoke:URL.revokeObjectURL,created:[],revoked:[]};
   URL.createObjectURL=function(blob){const url=window.__song212URLs.create.call(this,blob);window.__song212URLs.created.push(url);return url;};
   URL.revokeObjectURL=function(url){window.__song212URLs.revoked.push(url);return window.__song212URLs.revoke.call(this,url);};
  });
  await page.evaluate(id=>SUNOBOOM_MY_SONGS.openCard(id),result.id);
  await page.waitForFunction(vue=>document.getElementById('sb-vue-song-detail')?.hasAttribute('data-v-app')===vue,vue);
  await page.waitForFunction(()=>document.querySelector('#sb-vue-song-detail audio')?.src.startsWith('blob:'));
  assert.match(await page.locator('#app').textContent(),/Финальный дубль/);
  // A failed UI save keeps the user's draft and the original metadata.
  await page.locator('[data-sbsong-action="edit"]').first().click();
  await page.locator('#sbsong-save-form [name="title"]').fill('Несохранённая песня 212');
  await page.evaluate(()=>{window.__song212Set=Storage.prototype.setItem;Storage.prototype.setItem=function(key,value){if(key===SUNOBOOM_CORE.keys.songs)throw Error('UI quota');return window.__song212Set.call(this,key,value);};});
  try{
   await page.locator('#sbsong-submit').click();
   await page.waitForFunction(()=>document.getElementById('sbsong-notice')?.textContent.includes('Не удалось сохранить'));
   assert.equal(await page.locator('#sbsong-save-form [name="title"]').inputValue(),'Несохранённая песня 212');
   assert.equal(await page.evaluate(id=>SUNOBOOM_CORE.songs.get(id).title,result.id),'Без HTML 212');
  }finally{await page.evaluate(()=>{Storage.prototype.setItem=window.__song212Set;delete window.__song212Set;});}
 }finally{
  const released=await page.evaluate(async id=>{
   await SUNOBOOM_CORE.songs.execute('remove',{id});go('home');
   window.dispatchEvent(new Event('pagehide'));
   const urls=window.__song212URLs;
   if(!urls)return false;
   URL.createObjectURL=urls.create;URL.revokeObjectURL=urls.revoke;delete window.__song212URLs;
   return urls.created.length>0&&urls.created.every(url=>urls.revoked.filter(x=>x===url).length===1);
  },result.id);
  assert.equal(released,true,'player/cover/preview URL lifecycle leaked or revoked twice');
 }
 console.log(`Songs/Master domain, real IDB rollback, draft and URL cleanup ${vue?'Vue':'native'} PASS`);
}
