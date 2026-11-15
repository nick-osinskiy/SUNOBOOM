/* Canonical song metadata and file commands. No form, player or DOM access. */
(function(root){
 'use strict';
 function create({json,media,workspace,getGenre=id=>({name:id}),extractCover=async()=>null,now=()=>Date.now(),random=()=>Math.random()}){
  const KEY='sunoboom-my-songs-v1';let records=[],tail=Promise.resolve();
  const clean=(s,max=120)=>String(s??'').replace(/[\u0000-\u001f]/g,' ').trim().slice(0,max);
  const safeURL=value=>{try{const u=new URL(String(value||'').trim());return u.protocol==='https:'?u.href:'';}catch{return '';}};
  const isWave=file=>/\.(wav|wave)$/i.test(file?.name||'')||/^(audio\/(?:x-)?wav|audio\/wave)$/i.test(file?.type||'');
  const maxAudioBytes=file=>isWave(file)?500*1024*1024:150*1024*1024;
  const audioLimitMessage=file=>isWave(file)?'WAV не должен превышать 500 МБ. Проверь свободное место в браузере.':'Размер аудиофайла не должен превышать 150 МБ.';
  const mimeAudio=file=>file&&((file.type||'').startsWith('audio/')||/\.(mp3|wav|wave|m4a|aac|ogg|opus|flac)$/i.test(file.name||''));
  const mimeImage=file=>file&&(/^(image\/(jpeg|png|webp|gif))$/.test(file.type||'')||/\.(jpg|jpeg|png|webp|gif)$/i.test(file.name||''));
  function sanitizeVersions(raw){
   if(!Array.isArray(raw))return [];const used=new Set();
   return raw.slice(0,100).filter(v=>v&&typeof v==='object').map(v=>({id:clean(v.id,60),label:clean(v.label,90),notes:clean(v.notes,800),fileName:clean(v.fileName,180),bytes:Math.max(0,Number(v.bytes)||0),addedAt:Number(v.addedAt)||now()})).filter(v=>v.id&&/^(original|v-[a-z0-9-]+)$/.test(v.id)&&!used.has(v.id)&&used.add(v.id));
  }
  function versions(song){if(!song)return [];const current=sanitizeVersions(song.versions);return current.length||!song.hasAudio?current:[{id:'original',label:'Исходная запись',notes:'',fileName:'',bytes:0,addedAt:song.createdAt||now()}];}
  const activeVersion=song=>versions(song).find(v=>v.id===song?.activeVersionId)||versions(song)[0]||null;
  const audioKey=(id,version)=>version==='original'?id+':audio':id+':version:'+version;
  const id=prefix=>prefix+now().toString(36)+'-'+random().toString(36).slice(2,9);
  const versionName=(file,index)=>clean((file?.name||'').replace(/\.[^.]+$/,''),90)||'Версия '+index;
  const get=id=>records.find(x=>x.id===id)||null;
  const unique=(base,exists)=>{let value=base,n=0;while(exists(value))value=base+'-'+(++n);return value;};
  const fail=(error,code='validation')=>({ok:false,error,code});
  const ok=(value,meta={})=>({ok:true,value,meta});
  try{const saved=json.read(KEY,[]);if(Array.isArray(saved))records=saved.filter(x=>x&&typeof x==='object'&&typeof x.id==='string').slice(0,500).map(x=>({id:clean(x.id,90),passportId:clean(x.passportId,100),title:clean(x.title,120),artist:clean(x.artist,120),genre:clean(x.genre,80),album:clean(x.album,120),description:clean(x.description,700),createdAt:Number(x.createdAt)||now(),updatedAt:Number(x.updatedAt)||now(),audioUrl:safeURL(x.audioUrl),listenUrl:safeURL(x.listenUrl),coverUrl:safeURL(x.coverUrl),hasAudio:x.hasAudio===true,hasCover:x.hasCover===true,versions:sanitizeVersions(x.versions),activeVersionId:clean(x.activeVersionId,60)}));}catch{}
  async function commit(next,puts=[],deletes=[]){
   const previous=records;let written=false;
   try{
    const write=()=>{json.write(KEY,next);written=true;};
    if(puts.length||deletes.length)await media.commitBatch({puts,deletes:[...new Set(deletes)]},write);else write();
    records=next;return {ok:true};
   }catch(error){
    let recoveryError;
    if(written)try{json.write(KEY,previous);}catch(e){recoveryError=e;}
    return {...fail(error.message||'Не удалось сохранить карточку.','storage'),cause:error,recoveryError};
   }
  }
  const replace=(song)=>records.some(x=>x.id===song.id)?records.map(x=>x.id===song.id?song:x):[song,...records];
  const readCover=async(file,payload)=>{try{return payload?.embeddedCover!==undefined?await payload.embeddedCover:await extractCover(file);}catch{return null;}};
  async function save(p){
   const title=clean(p.title,120),audio=p.audio,cover=p.cover;
   if(!title)return fail('Укажи название песни.');
   if(audio&&(!mimeAudio(audio)||audio.size>maxAudioBytes(audio)))return fail(!mimeAudio(audio)?'Выбери аудиофайл MP3, M4A, WAV или другой поддерживаемый формат.':audioLimitMessage(audio));
   if(cover&&(!mimeImage(cover)||cover.size>10*1024*1024))return fail('Для обложки выбери JPG, PNG, WEBP или GIF до 10 МБ.');
   const raw=Object.fromEntries(['audioUrl','listenUrl','coverUrl'].map(key=>[key,clean(p[key],700)])),urls=Object.fromEntries(Object.entries(raw).map(([key,value])=>[key,value?safeURL(value):'']));
   if(Object.keys(raw).some(key=>raw[key]&&!urls[key]))return fail('Внешние ссылки должны начинаться с https://');
   const before=get(p.id),all=versions(before);
   if(audio&&all.length>=100)return fail('В одной карточке можно хранить до 100 аудиоверсий.');
   const songId=before?.id||unique(id('song-'),get),auto=audio&&!cover?await readCover(audio,p):null,selectedCover=cover||(!before?.hasCover?auto:null);
   const added=audio?unique(all.length?id('v-'):'original',value=>all.some(v=>v.id===value)):null;
   const nextVersions=audio?[...all,{id:added,label:versionName(audio,all.length+1),notes:'',fileName:clean(audio.name,180),bytes:audio.size,addedAt:now()}]:all;
   const next={id:songId,passportId:before?.passportId||'',title,artist:clean(p.artist,120),genre:clean(p.genre,80),album:clean(p.album,120),description:clean(p.description,700),...urls,hasAudio:nextVersions.length>0,hasCover:!!(before?.hasCover||selectedCover),versions:nextVersions,activeVersionId:before?.activeVersionId||nextVersions[0]?.id||'',createdAt:before?.createdAt||now(),updatedAt:now()};
   const puts=[];if(audio)puts.push([audioKey(songId,added),audio]);if(selectedCover)puts.push([songId+':cover',selectedCover]);
   const result=await commit(replace(next),puts);if(!result.ok)return result;
   if(next.artist)workspace?.execute('songArtist.save',{name:next.artist});
   return ok(next,{autoCoverUsed:!!auto&&!cover,hadVersions:all.length,addedVersionId:added,coverChanged:!!selectedCover});
  }
  async function addVersion(p){
   const song=get(p.id),file=p.file;if(!song||!file)return fail('Выбери MP3, M4A, WAV или другой аудиофайл.');
   if(!mimeAudio(file)||file.size>maxAudioBytes(file))return fail(!mimeAudio(file)?'Неподдерживаемый тип аудиофайла.':audioLimitMessage(file));
   const all=versions(song);if(all.length>=100)return fail('В одной карточке можно хранить до 100 аудиоверсий.');
   const versionId=unique(all.length?id('v-'):'original',value=>all.some(v=>v.id===value));
   const version={id:versionId,label:clean(p.label,90)||versionName(file,all.length+1),notes:clean(p.notes,800),fileName:clean(file.name,180),bytes:file.size,addedAt:now()};
   const cover=!song.hasCover&&!song.coverUrl&&!isWave(file)?await readCover(file,p):null;
   const next={...song,versions:[...all,version],hasAudio:true,activeVersionId:activeVersion(song)?.id||versionId,updatedAt:now(),...(cover?{hasCover:true}:{})};
   const puts=[[audioKey(song.id,versionId),file]];if(cover)puts.push([song.id+':cover',cover]);
   const result=await commit(replace(next),puts);return result.ok?ok(next,{version,coverChanged:!!cover}):result;
  }
  async function run(name,p){
   if(name==='save')return save(p);
   if(name==='version.add')return addVersion(p);
   const song=get(p.id);
   if(name==='passport.import'){
    const data=workspace.state,track=(data.tracks||[]).find(t=>t.id===p.id);if(!track)return fail('Паспорт трека не найден.');
    const title=clean(track.title,120);if(!title)return fail('Укажи название в Паспорте трека.');
    const found=records.find(s=>s.passportId===p.id),url=safeURL(track.audioUrl),direct=/\.(mp3|wav|m4a|aac|ogg|flac)(?:[?#]|$)/i.test(url),project=(data.projects||[]).find(x=>x.id===track.projectId),stamp=now();
    const next={id:found?.id||unique(id('song-'),get),passportId:p.id,title,artist:clean(track.artist,120),genre:clean(getGenre(track.genre)?.name||track.genre,80),album:clean(project?.title||'',120),description:clean(track.notes||track.arrangement||'',700),audioUrl:direct?url:found?.audioUrl||'',listenUrl:direct?found?.listenUrl||'':url||found?.listenUrl||'',coverUrl:safeURL(track.coverUrl)||found?.coverUrl||'',hasAudio:found?.hasAudio||false,hasCover:found?.hasCover||false,versions:found?.versions||[],activeVersionId:found?.activeVersionId||'',createdAt:found?.createdAt||stamp,updatedAt:stamp};
    const result=await commit(replace(next));return result.ok?ok(next):result;
   }
   if(!song)return fail('Песня не найдена.');
   const all=versions(song),version=all.find(v=>v.id===p.versionId);
   if(name==='remove'){
    const keys=all.map(v=>audioKey(song.id,v.id));if(song.hasAudio)keys.push(song.id+':audio');if(song.hasCover)keys.push(song.id+':cover');
    const result=await commit(records.filter(s=>s.id!==song.id),[],keys);return result.ok?ok(song):result;
   }
   if(!version)return fail('Аудиоверсия не найдена.');
   let next;
   if(name==='version.save')next={...song,versions:all.map(v=>v.id===version.id?{...v,label:clean(p.label,90)||'Версия',notes:clean(p.notes,800)}:v),updatedAt:now()};
   else if(name==='version.main')next={...song,activeVersionId:version.id,updatedAt:now()};
   else if(name==='version.remove'){
    const remaining=all.filter(v=>v.id!==version.id);next={...song,versions:remaining,hasAudio:remaining.length>0,activeVersionId:remaining.some(v=>v.id===song.activeVersionId)?song.activeVersionId:remaining[0]?.id||'',updatedAt:now()};
   }else return fail('Неизвестная команда песни.');
   const result=await commit(replace(next),[],name==='version.remove'?[audioKey(song.id,version.id)]:[]);return result.ok?ok(next):result;
  }
  function execute(name,payload={}){const input={...payload};const result=tail.then(()=>run(name,input)).catch(error=>({...fail(error.message||'Не удалось сохранить.','storage'),cause:error}));tail=result.then(()=>{});return result;}
  function createUrlScope({createURL,revokeURL}){
   const owned=new Set();return Object.freeze({create(blob){const url=createURL(blob);owned.add(url);return url;},release(url){if(owned.delete(url))revokeURL(url);},releaseAll(){for(const url of owned)revokeURL(url);owned.clear();},get size(){return owned.size;}});
  }
  return Object.freeze({get records(){return records;},get,execute,versions,activeVersion,audioKey,clean,safeURL,isWave,maxAudioBytes,audioLimitMessage,mimeAudio,mimeImage,sanitizeVersions,versionName,createUrlScope,
   readAudio:(id,versionId)=>media.get(audioKey(id,versionId)),readCover:id=>media.get(id+':cover'),
   getCards:()=>records.map(x=>({id:x.id,title:x.title,artist:x.artist,genre:x.genre,passportId:x.passportId,hasAudio:x.hasAudio,hasCover:x.hasCover,versionCount:versions(x).length,audioUrl:x.audioUrl,listenUrl:x.listenUrl}))});
 }
 root.SUNOBOOM_SONGS_FACTORY=Object.freeze({create});
})(globalThis);
