/* Shared by the native UI and Vue. This module never reads HTML or owns routing. */
(function installCore(root){
 'use strict';
 const KEYS=Object.freeze({workspace:'sunoboom-v1',songs:'sunoboom-my-songs-v1',media:'sunoboom-song-media-v1',arrangement:'sunoboom-arrangement-v066',settings:'sunoboom-ui-settings-v1',player:'sunoboom-player-lab-v060-prefs',favorites:'sunoboom-artist-profile-favorites-v1'});
 const clone=value=>structuredClone(value);
 const str=value=>String(value??'');
 const text=(value,max)=>str(value).trim().slice(0,max);
 const selectedDays=event=>Array.isArray(event?.reminderDays)?[...new Set(event.reminderDays.map(Number).filter(n=>Number.isInteger(n)&&n>=0&&n<=365))].sort((a,b)=>b-a):event?.remind===false?[]:[1,0];
 function dayDiff(a,b){
  const parts=s=>str(s).split('-').map(Number),x=parts(a),y=parts(b);
  if(x.length!==3||y.length!==3||[...x,...y].some(n=>!Number.isFinite(n)))return NaN;
  return Math.round((Date.UTC(x[0],x[1]-1,x[2])-Date.UTC(y[0],y[1]-1,y[2]))/86400000);
 }
 function date7(value){
  if(!/^\d{4}-\d\d-\d\d$/.test(value||''))return '';
  const [y,m,d]=value.split('-').map(Number),day=new Date(Date.UTC(y,m-1,d));
  if(day.getUTCFullYear()!==y||day.getUTCMonth()!==m-1||day.getUTCDate()!==d)return '';
  day.setUTCDate(day.getUTCDate()+7);return day.toISOString().slice(0,10);
 }
 const https=value=>{try{const url=new URL(str(value));return url.protocol==='https:'?url.href:'';}catch{return '';}};
 function createJsonRepository(storage){
  return Object.freeze({
   read(key,fallback){const raw=storage?.getItem(key);if(!storage)throw Error('Хранилище недоступно');return raw?JSON.parse(raw):clone(fallback);},
   write(key,value){if(!storage)throw Error('Хранилище недоступно');storage.setItem(key,JSON.stringify(value));return true;}
  });
 }
 function createMediaRepository(indexedDB){
  let pending;
  function database(){
   if(pending)return pending;
   pending=new Promise((resolve,reject)=>{
    if(!indexedDB){reject(Error('Хранилище файлов недоступно.'));return;}
    const req=indexedDB.open(KEYS.media,1);
    req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('files'))req.result.createObjectStore('files');};
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error||Error('IndexedDB error'));
    req.onblocked=()=>reject(Error('База файлов заблокирована другой вкладкой.'));
   }).catch(error=>{pending=null;throw error;});
   return pending;
  }
  async function operation(mode,key,value){
   const db=await database();
   return new Promise((resolve,reject)=>{
    let tx;try{tx=db.transaction('files',mode==='get'?'readonly':'readwrite');}catch(error){reject(error);return;}
    const store=tx.objectStore('files'),req=mode==='get'?store.get(key):mode==='delete'?store.delete(key):store.put(value,key);
    let result;req.onsuccess=()=>{result=req.result;};req.onerror=()=>reject(req.error||Error('Ошибка хранения файла'));
    tx.oncomplete=()=>resolve(result);tx.onabort=()=>reject(tx.error||Error('Запись прервана'));tx.onerror=()=>reject(tx.error||Error('Ошибка транзакции'));
   });
  }
  async function commitBatch({puts=[],deletes=[]},commit){
   const db=await database();
   return new Promise((resolve,reject)=>{
    let tx,failure;
    try{tx=db.transaction('files','readwrite');}catch(error){reject(error);return;}
    const store=tx.objectStore('files');let pending=puts.length+deletes.length;
    const finish=()=>{try{commit();}catch(error){failure=error;tx.abort();}};
    const watch=req=>{req.onsuccess=()=>{if(--pending===0)finish();};req.onerror=()=>{failure=req.error;};};
    try{for(const [key,value] of puts)watch(store.put(value,key));for(const key of deletes)watch(store.delete(key));if(!pending)finish();}
    catch(error){failure=error;tx.abort();}
    tx.oncomplete=()=>resolve();tx.onabort=()=>reject(failure||tx.error||Error('Запись прервана'));tx.onerror=()=>{failure||=tx.error;};
   });
  }
  return Object.freeze({get:key=>operation('get',key),put:(key,value)=>operation('put',key,value),delete:key=>operation('delete',key),commitBatch});
 }
 function createWorkspace({repository,defaults,getGenre,now=()=>Date.now(),random=()=>Math.random(),date=()=>new Date().toLocaleDateString('ru-RU')}){
  let saved;try{saved=repository.read(KEYS.workspace,{});}catch{saved={};}
  const state={...clone(defaults),...saved};
  for(const key of ['events','tracks','artistDNAs'])if(!Array.isArray(state[key]))state[key]=[];
  if(!state.notificationRead||typeof state.notificationRead!=='object'||Array.isArray(state.notificationRead))state.notificationRead={};
  const performanceDefaults={mode:'smart',intensity:3,density:'balanced',melisma:true,falsetto:true,harmonies:true,noWhisper:true,noRasp:true,source:'auto',artistId:''};
  const performancePreferences=()=>({...performanceDefaults,...(state.performanceTagSettings&&typeof state.performanceTagSettings==='object'?state.performanceTagSettings:{})});
  const items=key=>Array.isArray(state[key])?state[key]:[];
  const find=(key,id)=>items(key).find(item=>item?.id===id);
  const fresh=(prefix,n=5)=>prefix+now()+'-'+random().toString(36).slice(2,2+n);
  const fail=error=>({ok:false,error});
  const ok=value=>({ok:true,value});
  const restore=value=>{for(const key of Object.keys(state))delete state[key];Object.defineProperties(state,Object.getOwnPropertyDescriptors(value));};
  function reminders(today){
   const candidates=[];
   for(const event of items('events').filter(e=>e&&e.title&&/^\d{4}-\d\d-\d\d$/.test(e.date||''))){
    if(event.remind===false)continue;
    const until=dayDiff(event.date,today);if(!Number.isInteger(until)||until<0)continue;
    for(const days of selectedDays(event))if(until<=days)candidates.push({...event,phase:until===0?'today':until===1?'tomorrow':'upcoming',daysUntil:until,reminderDaysBefore:days,key:String(event.id)+'|'+event.date+'|'+(days===0?'today':days===1?'tomorrow':'before-'+days)});
   }
   return candidates.sort((a,b)=>a.date.localeCompare(b.date)||(a.time||'').localeCompare(b.time||'')||b.reminderDaysBefore-a.reminderDaysBefore);
  }
  const commands={
   'genre.recent'(p){state.recent=[p.id,...(state.recent||[]).filter(id=>id!==p.id)].slice(0,8);return ok(p.id);},
   'performance.preferences'(p){const next={...performancePreferences(),...clone(p)};next.intensity=Math.max(1,Math.min(5,Math.round(Number(next.intensity)||1)));state.performanceTagSettings=next;return ok(next);},
   'songArtist.save'(p){
    const clean=value=>str(value).replace(/[\u0000-\u001f]/g,' ').trim().slice(0,120),key=value=>clean(value).normalize('NFKC').toLocaleLowerCase('ru');
    const name=clean(p.name);if(!name)return fail('Введи имя артиста или название проекта.');
    const artists=items('songArtists').filter(a=>a&&typeof a.name==='string'&&a.name.trim());
    if(artists.some(a=>key(a.name)===key(name)))return fail('Этот артист уже сохранён в твоём списке.');
    if(items('artistDNAs').some(a=>key(a?.name)===key(name)))return fail('Этот артист уже есть в «ДНК артиста» и доступен для выбора.');
    const base='sba-'+now().toString(36)+'-'+random().toString(36).slice(2,8);let id=base,n=0;while(artists.some(a=>a.id===id))id=base+'-'+(++n);
    const item={id,name,createdAt:now()};
    state.songArtists=[...artists,item].slice(-500);return ok(item);
   },
   'songArtist.remove'(p){state.songArtists=items('songArtists').filter(a=>a?.id!==p.id);return ok(p.id);},
   'profile.save'(p){const name=text(p.name,60);if(!name)return fail('Введи имя для профиля');state.profileName=name;return ok(name);},
   'project.create'(p){const title=text(p.title,80);if(!title)return fail('Введи название проекта');let stamp=now();while(find('projects','p'+stamp))stamp++;const item={id:'p'+stamp,title,genre:p.genre,date:date(),notes:''};(state.projects||(state.projects=[])).unshift(item);return ok(item);},
   'project.save'(p){const item=find('projects',p.id);if(item)item.notes=str(p.notes);return ok(item||null);},
   'project.remove'(p){state.projects=items('projects').filter(x=>x.id!==p.id);return ok(p.id);},
   'idea.save'(p){
    const title=text(p.title,100),pitch=text(p.pitch,3000),lyrics=str(p.lyrics);
    if(!title||(!pitch&&!lyrics.trim()))return fail('Нужно название и хотя бы сюжет или текст песни');
    const info={title,pitch,hook:text(p.hook,240),genre:p.genre,lyrics:lyrics.slice(0,20000),sunoLyrics:str(p.sunoLyrics).slice(0,25000),sunoStyle:str(p.sunoStyle).slice(0,1000)};
    let item=find('manualIdeas',p.id);if(item)Object.assign(item,info);else{item={id:fresh('mi-'),...info,date:date()};(state.manualIdeas||(state.manualIdeas=[])).push(item);}return ok(item);
   },
   'idea.remove'(p){state.manualIdeas=items('manualIdeas').filter(x=>x.id!==p.id);return ok(p.id);},
   'prompt.save'(p){
    const title=text(p.title,100),value=str(p.text).trim();if(!title||!value)return fail('Заполни название и текст промпта');if(value.length>1000)return fail('Промпт не должен превышать 1000 символов');
    const info={title,text:value,genre:getGenre(p.genreId).name};let item=find('savedPrompts',p.id);
    if(item)Object.assign(item,info);else{item={id:fresh('mp-'),...info,mood:'свой',date:date()};state.savedPrompts.push(item);}return ok(item);
   },
   'prompt.add'(p){const item={id:String(now())+'-'+random().toString(36).slice(2,6),genre:p.genre,mood:p.mood,date:date(),text:p.text};state.savedPrompts.push(item);return ok(item);},
   'prompt.remove'(p){state.savedPrompts=items('savedPrompts').filter(x=>x.id!==p.id);return ok(p.id);},
   'event.save'(p){
    const title=text(p.title,120),eventDate=str(p.date);if(!title||!/^\d{4}-\d\d-\d\d$/.test(eventDate))return fail('Укажи название и дату события');
    if(!Array.isArray(p.reminderDays)||p.reminderDays.some(n=>!Number.isInteger(n)||n<0||n>365))return fail('Свой срок: от 1 до 365 дней');
    const days=[...new Set(p.reminderDays)].sort((a,b)=>b-a);
    state.events=items('events');let item=state.events.find(e=>String(e.id)===String(p.id||''));
    if(item&&(item.date!==eventDate||JSON.stringify(selectedDays(item))!==JSON.stringify(days)))for(const key of Object.keys(state.notificationRead||{}))if(key.startsWith(String(item.id)+'|'))delete state.notificationRead[key];
    const info={title,date:eventDate,time:str(p.time),type:p.type||'other',notes:text(p.notes,1200),remind:days.length>0,reminderDays:days};
    if(item)Object.assign(item,info,{updatedAt:now()});else{item={id:fresh('ev-'),...info,createdAt:now()};state.events.push(item);}return ok(item);
   },
   'event.remove'(p){state.events=items('events').filter(e=>String(e.id)!==String(p.id));return ok(p.id);},
   'notification.read'(p){if(p.key)(state.notificationRead||(state.notificationRead={}))[p.key]=true;return ok(p.key);},
   'notification.readAll'(p){for(const item of reminders(p.today))if(!state.notificationRead?.[item.key])(state.notificationRead||(state.notificationRead={}))[item.key]=true;return ok(null);},
   'track.save'(p){
    const title=text(p.title,120),coverUrl=str(p.coverUrl).trim(),audioUrl=str(p.audioUrl).trim();if(!title)return fail('Укажи название трека');
    if((coverUrl&&!https(coverUrl))||(audioUrl&&!https(audioUrl)))return fail('Ссылки должны использовать https://');
    const releaseOverride=!!p.releaseOverride,submittedAt=str(p.submittedAt),releaseAt=releaseOverride?str(p.releaseAt):date7(submittedAt);if(releaseOverride&&!releaseAt)return fail('Укажи ручную дату релиза');
    const info={title,artist:text(p.artist,120),status:str(p.status),genre:str(p.genre),projectId:str(p.projectId),ideaId:str(p.ideaId),promptId:str(p.promptId),publisher:text(p.publisher,120),submittedAt,releaseOverride,releaseAt,coverUrl,audioUrl,authors:str(p.authors).slice(0,250),isrc:str(p.isrc).slice(0,24),arrangement:str(p.arrangement).slice(0,4000),lyricsDraft:str(p.lyricsDraft).slice(0,20000),stylePrompt:str(p.stylePrompt).slice(0,1000),notes:str(p.notes).slice(0,5000),updatedAt:now()};
    if('artistDnaId' in p)info.artistDnaId=find('artistDNAs',p.artistDnaId)?p.artistDnaId:'';
    state.tracks=items('tracks');let item=find('tracks',p.id);if(item)Object.assign(item,info);else{item={id:fresh('tr-'),...info,versions:[],createdAt:now()};state.tracks.unshift(item);}return ok(item);
   },
   'track.releaseEvent'(p){
    const track=find('tracks',p.id);if(!track)return ok(null);
    const value=track.releaseAt||(!track.releaseOverride?date7(track.submittedAt):'');if(!value)return fail('Укажи дату передачи или дату релиза');
    state.events=items('events');const eventId='track-release-'+p.id;let event=state.events.find(e=>e.id===eventId);
    const info={title:('Релиз: '+track.title).slice(0,120),date:value,time:'',type:'release',notes:('Исполнитель: '+(track.artist||'не указан')+'. Издательство: '+(track.publisher||'не указано')+'. Создано из паспорта трека.').slice(0,1200),remind:true,reminderDays:event?.reminderDays||[3,1,0],trackId:p.id};
    if(event){if(event.date!==value)for(const key of Object.keys(state.notificationRead||{}))if(key.startsWith(eventId+'|'))delete state.notificationRead[key];Object.assign(event,info);}
    else{event={id:eventId,...info,createdAt:now()};state.events.push(event);}return ok(event);
   },
   'track.remove'(p){state.tracks=items('tracks').filter(t=>t.id!==p.id);return ok(p.id);},
   'track.version.add'(p){
    const item=find('tracks',p.id);if(!item)return ok(null);const label=text(p.label,100),url=str(p.url).trim();if(!label)return fail('Назови версию трека');if(url&&!https(url))return fail('Ссылка должна использовать https://');
    item.versions=Array.isArray(item.versions)?item.versions:[];item.versions.push({id:fresh('v-',4),label,url,notes:text(p.notes,300),date:date()});item.updatedAt=now();return ok(item);
   },
   'track.version.remove'(p){const item=find('tracks',p.id);if(item)item.versions=(item.versions||[]).filter(v=>v.id!==p.versionId);return ok(item||null);},
   'dna.save'(p){
    const fields={name:120,otherGenres:240,timbre:350,delivery:350,mood:250,instruments:550,production:500,signature:450,themes:800,extra:650,visual:1500,portrait:2000};
    const info=Object.fromEntries(Object.entries(fields).map(([key,max])=>[key,text(p[key],max)]));
    for(const key of ['projectId','genre','vocal','language','tempoMin','tempoMax'])info[key]=str(p[key]);
    for(const key of ['noWhisper','noRasp','noLive','noChoir'])info[key]=!!p[key];
    if(!info.name)return fail('Укажи имя артиста');if(info.portrait&&!https(info.portrait))return fail('Для портрета нужна ссылка HTTPS');
    const from=info.tempoMin?Number(info.tempoMin):null,to=info.tempoMax?Number(info.tempoMax):null;
    if((from!==null&&(!Number.isInteger(from)||from<40||from>240))||(to!==null&&(!Number.isInteger(to)||to<40||to>240))||(from!==null&&to!==null&&from>to))return fail('Проверь диапазон BPM: от 40 до 240, нижняя граница не больше верхней');
    info.updatedAt=now();state.artistDNAs=items('artistDNAs');let item=find('artistDNAs',p.id);
    if(item)Object.assign(item,info);else{item={id:fresh('dna-'),...info,createdAt:now()};state.artistDNAs.unshift(item);}return ok(item);
   },
   'dna.remove'(p){state.artistDNAs=items('artistDNAs').filter(a=>a.id!==p.id);for(const track of items('tracks'))if(track.artistDnaId===p.id)track.artistDnaId='';return ok(p.id);},
   'favorite.toggle'(p){state.favorites=state.favorites.includes(p.id)?state.favorites.filter(x=>x!==p.id):[...state.favorites,p.id];return ok(p.id);},
   'idea.favorite.toggle'(p){state.savedIdeas=state.savedIdeas.includes(p.key)?state.savedIdeas.filter(x=>x!==p.key):[...state.savedIdeas,p.key];return ok(p.key);},
   'generated.save'(p){state.savedGeneratedIdeas=items('savedGeneratedIdeas');if(p.item&&!state.savedGeneratedIdeas.some(x=>x.id===p.item.id))state.savedGeneratedIdeas.unshift(clone(p.item));return ok(p.item||null);},
   'generated.remove'(p){state.savedGeneratedIdeas=items('savedGeneratedIdeas').filter(x=>x.id!==p.id);return ok(p.id);},
   'structure.save'(p){state.savedStructures=items('savedStructures');if(p.item&&!state.savedStructures.some(x=>x.id===p.item.id))state.savedStructures.unshift(clone(p.item));return ok(p.item||null);},
   'structure.remove'(p){state.savedStructures=items('savedStructures').filter(x=>x.id!==p.id);return ok(p.id);}
  };
  function execute(name,payload={}){
   const command=commands[name];if(!command)return fail('Неизвестная команда');
   const before=clone(state);
   try{const result=command(payload);if(!result.ok)return result;repository.write(KEYS.workspace,state);return result;}
   catch(error){restore(before);return {ok:false,error:'Не удалось сохранить. Проверь свободное место в браузере.',code:'storage',cause:error};}
  }
  function importBackup(parsed){
   const value=parsed?.data;
   if(parsed?.app!=='SUNOBOOM'||!value||!['favorites','savedPrompts','savedIdeas','projects'].every(key=>Array.isArray(value[key])))return fail('Неверный формат');
   const before=clone(state);
   try{const imported=clone(value);restore({...clone(defaults),...imported,savedGeneratedIdeas:Array.isArray(imported.savedGeneratedIdeas)?imported.savedGeneratedIdeas:[]});repository.write(KEYS.workspace,state);return ok(state);}
   catch(error){restore(before);return fail('Не удалось импортировать файл');}
  }
  return Object.freeze({state,execute,performancePreferences,reminders,importBackup,exportBackup:()=>({exportedAt:new Date(now()).toISOString(),app:'SUNOBOOM',data:clone(state)}),persist:()=>repository.write(KEYS.workspace,state),helpers:Object.freeze({selectedDays,dayDiff,date7,https})});
 }
 function createKernel({storage,indexedDB,...deps}={}){
  const json=createJsonRepository(storage),media=createMediaRepository(indexedDB);let workspace,songs,productions,studio,arrangement,preferences,mixer,auditor;
  return Object.freeze({keys:KEYS,repositories:Object.freeze({json,media}),
   createWorkspace(options){return workspace||(workspace=createWorkspace({repository:json,...deps,...options}));},
   createSongs(options={}){return songs||(songs=root.SUNOBOOM_SONGS_FACTORY.create({json,media,workspace,...deps,...options}));},
   createProductions(options={}){return productions||(productions=root.SUNOBOOM_PRODUCTIONS_FACTORY.create({workspace,getSongs:()=>songs?.getCards()||[],...deps,...options}));},
   createStudio(options={}){return studio||(studio=root.SUNOBOOM_STUDIO_FACTORY.create({...deps,...options}));},
   createArrangement(options={}){return arrangement||(arrangement=root.SUNOBOOM_ARRANGEMENT_FACTORY.create({json,studio,...deps,...options}));},
   createPreferences(options={}){return preferences||(preferences=root.SUNOBOOM_PREFERENCES_FACTORY.create({json,...deps,...options}));},
   createMixer(options={}){return mixer||(mixer=root.SUNOBOOM_MIXER_FACTORY.create({workspace,studio,...deps,...options}));},
   createAuditor(options={}){return auditor||(auditor=root.SUNOBOOM_AUDITOR_FACTORY.create({...deps,...options}));},
   get auditor(){return auditor;},get mixer(){return mixer;},get studio(){return studio;},get arrangement(){return arrangement;},get preferences(){return preferences;},
   get workspace(){return workspace;},get songs(){return songs;},get productions(){return productions;}
  });
 }
 root.SUNOBOOM_CORE_FACTORY=Object.freeze({createKernel,createWorkspace,createJsonRepository,createMediaRepository,keys:KEYS});
 let storage,indexedDB;try{storage=root.localStorage;}catch{}try{indexedDB=root.indexedDB;}catch{}
 root.SUNOBOOM_CORE=createKernel({storage,indexedDB});
})(globalThis);
