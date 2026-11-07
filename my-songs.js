/* SUNOBOOM • My Songs v0.89: take library, WAV and in-card A/B comparison. */
(function installSunoboomSongs(){
 "use strict";
 if(typeof account!=="function"||typeof render!=="function"||typeof chrome!=="function"||typeof go!=="function")return;
 const KEY="sunoboom-my-songs-v1", DB_NAME="sunoboom-song-media-v1", SHARE_PREFIX="#sb-song=";
 const esc=s=>escapeHTML(String(s??""));
 const clean=(s,max=120)=>String(s??"").replace(/[\u0000-\u001f]/g," ").trim().slice(0,max);
 const safeURL=value=>{try{const u=new URL(String(value||"").trim());return u.protocol==="https:"?u.href:"";}catch(e){return "";}};
 const state={editId:null,selectedId:null,showForm:false,search:"",notice:"",confirmDelete:null,shared:null,loading:false,coverScanToken:0,coverScanFile:null,coverScanPromise:null,autoCoverBlob:null,coverPreviewURL:"",showArtistManager:false,artistManagerFilter:"",artistPickerOpen:false,artistShowAll:false,genrePickerOpen:false,genreShowAll:false,genreFamily:"Все",playVersionId:null,compareOpen:false,compareAId:null,compareBId:null};
 const thumbs=new Map();
 const activeAudioURLs=new Set();
 let songs=[];
  const WAV_LIMIT=500*1024*1024, OTHER_AUDIO_LIMIT=150*1024*1024;
  const isWave=file=>/\.(wav|wave)$/i.test(file?.name||"")||/^(audio\/(?:x-)?wav|audio\/wave)$/i.test(file?.type||"");
  const maxAudioBytes=file=>isWave(file)?WAV_LIMIT:OTHER_AUDIO_LIMIT;
  const audioLimitMessage=file=>isWave(file)?"WAV не должен превышать 500 МБ. Проверь свободное место в браузере.":"Размер аудиофайла не должен превышать 150 МБ.";
  function sanitizeVersions(raw){
    if(!Array.isArray(raw))return [];
    const used=new Set();
    return raw.slice(0,100).filter(v=>v&&typeof v==="object").map(v=>({
      id:clean(v.id,60),label:clean(v.label,90),notes:clean(v.notes,800),
      fileName:clean(v.fileName,180),bytes:Math.max(0,Number(v.bytes)||0),
      addedAt:Number(v.addedAt)||Date.now()
    })).filter(v=>v.id&&/^(original|v-[a-z0-9-]+)$/.test(v.id)&&!used.has(v.id)&&used.add(v.id));
  }
  function songVersions(song){
    if(!song)return [];
    const current=sanitizeVersions(song.versions);
    if(current.length||!song.hasAudio)return current;
    // Preserve existing audio keys from older releases without copying/overwriting media.
    return [{id:"original",label:"Исходная запись",notes:"",fileName:"",bytes:0,addedAt:song.createdAt||Date.now()}];
  }
  const activeVersion=song=>songVersions(song).find(v=>v.id===song?.activeVersionId)||songVersions(song)[0]||null;
  const audioKey=(songId,versionId)=>versionId==="original"?songId+":audio":songId+":version:"+versionId;
  const newVersionId=()=>"v-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,9);
  const audioSize=bytes=>bytes?(bytes/1048576).toFixed(1)+" МБ":"Размер не указан";
  const versionName=(file,index)=>clean((file?.name||"").replace(/\.[^.]+$/,""),90)||"Версия "+index;
  function resetTakeView(){state.playVersionId=null;state.compareOpen=false;state.compareAId=null;state.compareBId=null;}

 try{const saved=JSON.parse(localStorage.getItem(KEY)||"[]");if(Array.isArray(saved))songs=saved.filter(x=>x&&typeof x==="object"&&typeof x.id==="string").slice(0,500).map(x=>({
   id:clean(x.id,90),passportId:clean(x.passportId,100),title:clean(x.title,120),artist:clean(x.artist,120),genre:clean(x.genre,80),
   album:clean(x.album,120),description:clean(x.description,700),createdAt:Number(x.createdAt)||Date.now(),
   updatedAt:Number(x.updatedAt)||Date.now(),audioUrl:safeURL(x.audioUrl),listenUrl:safeURL(x.listenUrl),coverUrl:safeURL(x.coverUrl),
   hasAudio:x.hasAudio===true,hasCover:x.hasCover===true,versions:sanitizeVersions(x.versions),activeVersionId:clean(x.activeVersionId,60)
 }));}catch(e){}
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(songs));return true;}catch(e){return false;}};
 const get=id=>songs.find(x=>x.id===id)||null;
 const notify=message=>{state.notice=message;const el=document.getElementById("sbsong-notice");if(el){el.textContent=message;el.hidden=false;}else if(typeof toast==="function")toast(message);};
 const mimeAudio=file=>file&&((file.type||"").startsWith("audio/")||/\.(mp3|wav|wave|m4a|aac|ogg|opus|flac)$/i.test(file.name||""));
 const mimeImage=file=>file&&(file.type==="image/jpeg"||file.type==="image/png"||file.type==="image/webp"||file.type==="image/gif"||/\.(jpg|jpeg|png|webp|gif)$/i.test(file.name||""));
 let dbPromise;
 function database(){
   if(dbPromise)return dbPromise;
   dbPromise=new Promise((resolve,reject)=>{
     if(!("indexedDB" in window)){reject(new Error("Хранилище файлов недоступно."));return;}
     const req=indexedDB.open(DB_NAME,1);
     req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains("files"))req.result.createObjectStore("files");};
     req.onsuccess=()=>resolve(req.result);
     req.onerror=()=>reject(req.error||new Error("IndexedDB error"));
     req.onblocked=()=>reject(new Error("База файлов заблокирована другой вкладкой."));
   }).catch(err=>{dbPromise=null;throw err;});
   return dbPromise;
 }
 async function fileOperation(mode,key,value){
   const db=await database();
   return new Promise((resolve,reject)=>{
     let tx;
     try{tx=db.transaction("files",mode==="get"?"readonly":"readwrite");}catch(e){reject(e);return;}
     const store=tx.objectStore("files");
     const req=mode==="get"?store.get(key):mode==="delete"?store.delete(key):store.put(value,key);
     let result;
     req.onsuccess=()=>{result=req.result;};
     req.onerror=()=>reject(req.error||new Error("Ошибка хранения файла"));
     tx.oncomplete=()=>resolve(result);
     tx.onabort=()=>reject(tx.error||new Error("Запись прервана"));
     tx.onerror=()=>reject(tx.error||new Error("Ошибка транзакции"));
   });
 }
 const getFile=key=>fileOperation("get",key);
 const putFile=(key,blob)=>fileOperation("put",key,blob);
 const delFile=key=>fileOperation("delete",key);
 function clearThumb(id){const url=thumbs.get(id);if(url)URL.revokeObjectURL(url);thumbs.delete(id);}
 function releaseAudio(){for(const url of activeAudioURLs)URL.revokeObjectURL(url);activeAudioURLs.clear();}

 function resetCoverPreview(){
   state.coverScanToken++;
   state.coverScanFile=null;
   state.coverScanPromise=null;
   state.autoCoverBlob=null;
   if(state.coverPreviewURL){URL.revokeObjectURL(state.coverPreviewURL);state.coverPreviewURL="";}
 }
 function paintCoverPreview(url,label){
   const img=document.getElementById("sbsong-cover-preview-img");
   const placeholder=document.getElementById("sbsong-cover-preview-placeholder");
   const status=document.getElementById("sbsong-cover-status");
   if(img){img.hidden=!url;if(url)img.src=url;else img.removeAttribute("src");}
   if(placeholder)placeholder.hidden=!!url;
   if(status)status.textContent=label;
 }
 function showBlobCover(blob,label){
   if(state.coverPreviewURL){URL.revokeObjectURL(state.coverPreviewURL);state.coverPreviewURL="";}
   if(blob)state.coverPreviewURL=URL.createObjectURL(blob);
   paintCoverPreview(state.coverPreviewURL,label);
 }
 async function showSavedCover(){
   const id=state.editId,token=state.coverScanToken;
   const song=get(id);
   if(!song||!document.getElementById("sbsong-cover-preview-img"))return;
   let url="";
   if(song.hasCover)url=await coverURL(song.id);
   if(token!==state.coverScanToken||state.editId!==id||!document.getElementById("sbsong-cover-preview-img"))return;
   if(url)paintCoverPreview(url,"Уже сохранённая обложка");
   else if(song.coverUrl)paintCoverPreview(song.coverUrl,"Обложка по ссылке");
   else paintCoverPreview("","В файле будет выполнен поиск обложки");
 }
 async function readEmbeddedCover(file){
   if(!file)return null;
   return typeof window.SUNOBOOM_COVER_READER?.extract==="function"?
     window.SUNOBOOM_COVER_READER.extract(file):null;
 }
 async function findAutoCover(file){
   const token=++state.coverScanToken;
   state.coverScanFile=file||null;state.autoCoverBlob=null;
   if(!file){
     state.coverScanPromise=null;
     if(state.editId)await showSavedCover();
     else showBlobCover(null,"Добавь MP3, M4A или FLAC, чтобы найти обложку");
     return;
   }
   if(!mimeAudio(file)||file.size>maxAudioBytes(file)){paintCoverPreview("","Неподдерживаемый аудиофайл или превышен размер");return;}
   paintCoverPreview("","Ищу встроенную обложку в аудиофайле…");
   state.coverScanPromise=readEmbeddedCover(file).catch(()=>null);
   const blob=await state.coverScanPromise;
   if(token!==state.coverScanToken||!document.getElementById("sbsong-form"))return;
   state.autoCoverBlob=blob;
   const manual=document.querySelector('#sbsong-save-form [name="cover"]')?.files?.[0];
   if(manual){showBlobCover(manual,"Используется выбранная вручную обложка");return;}
   if(blob){showBlobCover(blob,"✓ Обложка автоматически найдена в метаданных трека");return;}
   if(state.editId){await showSavedCover();return;}
   showBlobCover(null,"В этом файле встроенной обложки нет. Её можно добавить вручную.");
 }

 async function coverURL(id){
   if(thumbs.has(id))return thumbs.get(id);
   try{const blob=await getFile(id+":cover");if(!blob)return "";
     const url=URL.createObjectURL(blob);thumbs.set(id,url);return url;
   }catch(e){return "";}
 }
 function escapeAttr(s){return esc(s);}
 const iconCover='<span class="sbsong-no-cover" aria-hidden="true">♫</span>';
 function card(song){
   return '<article class="sbsong-card">'+
      '<button type="button" class="sbsong-art-button" data-sbsong-action="open" data-id="'+esc(song.id)+'" aria-label="'+esc("Открыть "+song.title)+'">'+
      (song.hasCover?'<img alt="" data-sbsong-cover="'+esc(song.id)+'" loading="lazy">'+iconCover:
       song.coverUrl?'<img alt="" src="'+esc(song.coverUrl)+'" style="display:block" loading="lazy">'+iconCover:iconCover)+'</button>'+
      '<div class="sbsong-card-text"><small>'+esc(song.genre||"Моя музыка")+'</small>'+
      '<h3>'+esc(song.title||"Без названия")+'</h3><p>'+esc(song.artist||"Без исполнителя")+'</p>'+
      '<div class="sbsong-card-flags">'+(song.hasAudio?'<span>♪ Версий: '+songVersions(song).length+'</span>':song.audioUrl?'<span>↗ Аудио по ссылке</span>':'<span>Нет аудио</span>')+'</div>'+
      '<div class="sbsong-card-actions"><button data-sbsong-action="open" data-id="'+esc(song.id)+'" type="button">Открыть</button>'+
      '<button data-sbsong-action="edit" data-id="'+esc(song.id)+'" type="button">Изменить</button>'+
      '<button data-sbsong-action="share" data-id="'+esc(song.id)+'" type="button">Поделиться</button></div></div></article>';
 }
 function field(label,name,value,max,placeholder){
   return '<label class="sbsong-field"><span>'+label+'</span><input name="'+name+'" type="text" maxlength="'+max+'" value="'+escapeAttr(value)+'" placeholder="'+esc(placeholder)+'"></label>';
 }

 // Keep the artist registry in the existing user-data object, so normal JSON backups include it.
 // Names in saved songs are retained as strings for backward compatibility.
 function customArtists(){
   return Array.isArray(data.songArtists)?data.songArtists.filter(a=>a&&typeof a.name==="string"&&a.name.trim()):[];
 }
 const artistKey=name=>clean(name,120).normalize("NFKC").toLocaleLowerCase("ru");
 function allArtistChoices(){
   const found=new Map();
   const add=(name,origin)=>{
     const value=clean(name,120),key=artistKey(value);
     if(value&&!found.has(key))found.set(key,{name:value,origin});
   };
   customArtists().forEach(a=>add(a.name,"Сохранённый артист"));
   if(Array.isArray(data.artistDNAs))data.artistDNAs.forEach(a=>add(a?.name,"ДНК артиста"));
   songs.forEach(song=>add(song.artist,"Из моих песен"));
   return [...found.values()].sort((a,b)=>a.name.localeCompare(b.name,"ru",{sensitivity:"base"}));
 }
 function saveArtistName(value,silent=false){
   const name=clean(value,120);
   if(!name){if(!silent)notify("Введи имя артиста или название проекта.");return false;}
   if(customArtists().some(a=>artistKey(a.name)===artistKey(name))){
     if(!silent)notify("Этот артист уже сохранён в твоём списке.");
     return false;
   }
   // A DNA profile is already a personal artist record; offer it directly, without cloning.
   if(Array.isArray(data.artistDNAs)&&data.artistDNAs.some(a=>artistKey(a?.name)===artistKey(name))){
     if(!silent)notify("Этот артист уже есть в «ДНК артиста» и доступен для выбора.");
     return false;
   }
   const old=data.songArtists;
   data.songArtists=[...customArtists(),{id:"sba-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,8),name,createdAt:Date.now()}].slice(-500);
   try{persist();}
   catch(e){data.songArtists=old;if(!silent)notify("Не удалось сохранить артиста.");return false;}
   if(!silent)notify("Артист «"+name+"» добавлен в список.");
   return true;
 }
 function artistField(value){
   return '<div class="sbsong-artist-field">'+
     '<label class="sbsong-field" for="sbsong-artist-input"><span>Исполнитель / проект</span>'+
       '<input id="sbsong-artist-input" name="artist" type="text" maxlength="120" value="'+escapeAttr(value)+'" placeholder="Поиск или новое имя артиста" autocomplete="off" aria-autocomplete="list" aria-expanded="false" aria-controls="sbsong-artist-options"></label>'+
     '<div class="sbsong-artist-shortcuts">'+
       '<button type="button" data-sbsong-action="artist-list-toggle">▾ Выбрать из списка</button>'+
       '<button type="button" data-sbsong-action="artist-save">+ Сохранить артиста</button>'+
     '</div>'+
     '<div class="sbsong-artist-options" id="sbsong-artist-options" role="listbox" aria-label="Список артистов" hidden></div>'+
   '</div>';
 }
 function refreshArtistPicker(show){
   const input=document.getElementById("sbsong-artist-input");
   const holder=document.getElementById("sbsong-artist-options");
   if(!input||!holder)return;
   if(typeof show==="boolean")state.artistPickerOpen=show;
   const list=allArtistChoices(),query=artistKey(input.value);
   const filtered=state.artistShowAll?list:list.filter(a=>artistKey(a.name).includes(query));
   const shown=filtered.slice(0,40);
   holder.innerHTML=shown.length?shown.map(a=>
     '<button type="button" role="option" class="sbsong-artist-option" data-sbsong-action="artist-pick" data-name="'+escapeAttr(a.name)+'">'+
       '<strong>'+esc(a.name)+'</strong><small>'+esc(a.origin)+'</small></button>'
   ).join("")+(filtered.length>40?'<p class="sbsong-artist-hint">Уточни поиск, чтобы увидеть остальные варианты.</p>':""):
     '<p class="sbsong-artist-hint">'+(list.length?"Совпадений нет. Нового артиста можно сохранить кнопкой выше.":"Список пуст. Введи имя и сохрани первого артиста.")+'</p>';
   holder.hidden=!state.artistPickerOpen;
   input.setAttribute("aria-expanded",String(state.artistPickerOpen));
 }
 function artistManagerEntries(){
   const q=artistKey(state.artistManagerFilter);
   const artists=[...customArtists()].sort((a,b)=>a.name.localeCompare(b.name,"ru",{sensitivity:"base"}))
     .filter(a=>artistKey(a.name).includes(q));
   return artists.length?artists.map(a=>'<div class="sbsong-artist-entry"><span>'+esc(a.name)+'</span>'+
     '<button type="button" data-sbsong-action="artist-remove" data-id="'+esc(a.id)+'" aria-label="Удалить артиста '+esc(a.name)+'">Удалить</button></div>').join(""):
     '<p class="sbsong-artist-hint">'+(customArtists().length?"Ничего не найдено.":"Пока нет добавленных вручную артистов.")+'</p>';
 }
 function artistManager(){
   return '<section class="sbsong-artist-manager" id="sbsong-artist-manager">'+
     '<div class="sbsong-subhead"><h2>Мои артисты</h2><button type="button" data-sbsong-action="artists-manage">Закрыть ×</button></div>'+
     '<p>Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.</p>'+
     '<div class="sbsong-artist-manager-new"><input id="sbsong-artist-manager-add" type="text" maxlength="120" placeholder="Имя артиста или проекта" aria-label="Новый артист">'+
       '<button type="button" class="sbsong-main-btn" data-sbsong-action="artist-manager-add">+ Добавить артиста</button></div>'+
     '<input id="sbsong-artist-manager-filter" type="search" value="'+escapeAttr(state.artistManagerFilter)+'" placeholder="Фильтр по имени…" aria-label="Фильтр моих артистов">'+
     '<div id="sbsong-artist-manager-results">'+artistManagerEntries()+'</div>'+
   '</section>';
 }


 // The Academy GENRES array is the single source of truth. Its subgenres and
 // dynamically added sections appear automatically here without duplicate data.
 function academyGenreChoices(){
   if(typeof GENRES==="undefined"||!Array.isArray(GENRES))return [];
   const used=new Set();
   return GENRES.filter(g=>g&&typeof g.name==="string"&&g.name.trim()&&typeof g.id==="string").map(g=>({
     id:g.id,name:clean(g.name,80),family:clean(g.family||"Другие направления",100)
   })).filter(g=>{
     if(used.has(g.id))return false;
     used.add(g.id);return true;
   });
 }
 function academyGenreFamilies(genres){
   const families=[...new Set(genres.map(g=>g.family))];
   const order=typeof familyOrder!=="undefined"&&Array.isArray(familyOrder)?familyOrder:[];
   return [...families].sort((a,b)=>{
     const ai=order.indexOf(a),bi=order.indexOf(b);
     if(ai>=0&&bi>=0)return ai-bi;
     if(ai>=0)return -1;
     if(bi>=0)return 1;
     return a.localeCompare(b,"ru",{sensitivity:"base"});
   });
 }
 function genreField(value){
   return '<div class="sbsong-genre-field">'+
     '<label class="sbsong-field" for="sbsong-genre-input"><span>Жанр</span>'+
       '<input type="text" id="sbsong-genre-input" name="genre" maxlength="80" value="'+escapeAttr(value)+'" autocomplete="off" placeholder="Найти жанр или ввести свой" aria-autocomplete="list" aria-expanded="false" aria-controls="sbsong-genre-results"></label>'+
     '<button type="button" class="sbsong-genre-toggle" data-sbsong-action="genre-toggle" aria-controls="sbsong-genre-options" aria-expanded="false">▾ Выбрать из Академии</button>'+
     '<div class="sbsong-genre-options" id="sbsong-genre-options" role="region" aria-label="Выбор жанра из Академии" hidden></div>'+
   '</div>';
 }
 function refreshGenrePicker(show){
   const input=document.getElementById("sbsong-genre-input");
   const holder=document.getElementById("sbsong-genre-options");
   const toggle=document.querySelector('.sbsong-genre-field [data-sbsong-action="genre-toggle"]');
   if(!input||!holder)return;
   if(typeof show==="boolean")state.genrePickerOpen=show;
   const genres=academyGenreChoices(),families=academyGenreFamilies(genres);
   if(state.genreFamily!=="Все"&&!families.includes(state.genreFamily))state.genreFamily="Все";
   const q=state.genreShowAll?"":input.value.trim().normalize("NFKC").toLocaleLowerCase("ru");
   const filtered=genres.filter(g=>
     (state.genreFamily==="Все"||g.family===state.genreFamily)&&
     (!q||(g.name+" "+g.family).normalize("NFKC").toLocaleLowerCase("ru").includes(q))
   );
   const filterSelect='<div class="sbsong-genre-picker-head">'+
     '<label for="sbsong-genre-family">Направление</label>'+
     '<select id="sbsong-genre-family" aria-label="Фильтр по направлению">'+
       ['Все',...families].map(f=>'<option value="'+escapeAttr(f)+'"'+(f===state.genreFamily?' selected':'')+'>'+esc(f==="Все"?"Все направления":f)+'</option>').join("")+
     '</select><small>'+filtered.length+' из '+genres.length+'</small></div>';
   const ordered=academyGenreFamilies(filtered);
   const content=filtered.length?ordered.map(f=>{
     const list=filtered.filter(g=>g.family===f);
     return '<div class="sbsong-genre-group" role="group" aria-label="'+escapeAttr(f)+'">'+
       '<div class="sbsong-genre-group-title">'+esc(f)+' <span>'+list.length+'</span></div>'+
       list.map(g=>'<button type="button" class="sbsong-genre-option" role="option" data-sbsong-action="genre-pick" data-genre-name="'+escapeAttr(g.name)+'" data-genre-id="'+escapeAttr(g.id)+'">'+
         '<span>'+esc(g.name)+'</span></button>').join("")+
     '</div>';
   }).join(""):'<p class="sbsong-genre-hint">'+
     (genres.length?"Не найдено. Можно ввести свой жанр вручную.":"Каталог Академии пока недоступен. Введи жанр вручную.")+
     '</p>';
   holder.innerHTML=filterSelect+'<div class="sbsong-genre-results" id="sbsong-genre-results" role="listbox" aria-label="Жанры и поджанры">'+content+'</div>';
   holder.hidden=!state.genrePickerOpen;
   input.setAttribute("aria-expanded",String(state.genrePickerOpen));
   if(toggle)toggle.setAttribute("aria-expanded",String(state.genrePickerOpen));
 }

 function formPage(song){
   return '<section class="sbsong-form-panel" id="sbsong-form">'+
     '<div class="sbsong-subhead"><h2>'+(song?"Изменить песню":"Новая песня")+'</h2>'+
     '<button type="button" data-sbsong-action="cancel">Закрыть ×</button></div>'+
     '<form id="sbsong-save-form" class="sbsong-form">'+
       '<div class="sbsong-form-columns">'+field("Название *","title",song?.title||"",120,"Название песни")+
       artistField(song?.artist||data.profileName||"")+
       genreField(song?.genre||"")+
       field("Альбом / релиз","album",song?.album||"",120,"Название альбома")+'</div>'+
       '<label class="sbsong-field"><span>Описание</span><textarea name="description" maxlength="700" rows="3" placeholder="История, настроение или заметки">'+esc(song?.description||"")+'</textarea></label>'+
       '<div class="sbsong-form-columns">'+
         '<label class="sbsong-field"><span>'+(song?.hasAudio?"Добавить новую аудиоверсию":"Загрузить аудиофайл (MP3, M4A, WAV и другие)")+'</span><input name="audio" type="file" accept="audio/*,.mp3,.wav,.wave,.m4a,.aac,.flac,.ogg,.opus"></label>'+
         '<label class="sbsong-field"><span>Обложка вручную (необязательно)</span><input name="cover" type="file" accept="image/png,image/jpeg,image/webp,image/gif"></label>'+
       '</div>'+
       '<div class="sbsong-cover-auto" aria-live="polite"><div class="sbsong-cover-preview-figure">'+
         '<img id="sbsong-cover-preview-img" alt="Предпросмотр обложки" hidden>'+
         '<span id="sbsong-cover-preview-placeholder" aria-hidden="true">♫</span></div>'+
         '<div><strong>Обложка из аудиофайла</strong><p id="sbsong-cover-status">'+
           (song?.hasCover||song?.coverUrl?'Загружаю сохранённую обложку…':'Выбери MP3, M4A или FLAC — попробую найти обложку автоматически')+
         '</p><small>Ручная обложка имеет приоритет, если ты её выберешь.</small></div></div>'+
       '<div class="sbsong-form-columns">'+
         field("Прямая ссылка на MP3 (если есть)","audioUrl",song?.audioUrl||"",700,"https://.../song.mp3")+
         field("Публичная страница песни","listenUrl",song?.listenUrl||"",700,"https://suno.com/...")+
         field("Публичная обложка (по желанию)","coverUrl",song?.coverUrl||"",700,"https://.../cover.jpg")+'</div>'+
       '<p class="sbsong-form-help">MP3, M4A, WAV, FLAC и другие аудиофайлы сохраняются локально (IndexedDB): WAV — до 500 МБ, остальные — до 150 МБ при наличии свободной памяти браузера. Новая загрузка добавляет версию, не заменяя старую. Обложка ищется в MP3, M4A и FLAC; для WAV её обычно добавляют вручную. Локальное аудио по общей ссылке не передаётся.</p>'+
       '<div class="sbsong-form-actions"><button type="submit" class="sbsong-main-btn" id="sbsong-submit">Сохранить песню</button>'+
        '<button type="button" data-sbsong-action="cancel">Отмена</button></div>'+
     '</form></section>';
 }
 function detail(song){
   if(!song)return "";
   return '<section class="sbsong-detail">'+
      '<div class="sbsong-subhead"><h2>'+esc(song.title)+'</h2><button type="button" data-sbsong-action="close-detail">Закрыть ×</button></div>'+
      '<div class="sbsong-detail-layout"><div class="sbsong-detail-cover">'+(song.hasCover?'<img data-sbsong-cover="'+esc(song.id)+'" alt="'+esc("Обложка песни "+song.title)+'">':
       song.coverUrl?'<img src="'+esc(song.coverUrl)+'" alt="'+esc("Обложка песни "+song.title)+'" style="display:block">':iconCover)+'</div>'+
      '<div><p class="sbsong-detail-artist">'+esc(song.artist||"Исполнитель не указан")+'</p>'+
      '<p class="sbsong-detail-tags">'+[song.genre,song.album].filter(Boolean).map(x=>'<span>'+esc(x)+'</span>').join("")+'</p>'+
      (song.description?'<p class="sbsong-detail-description">'+esc(song.description)+'</p>':"")+
      '<div class="sbsong-audio-box" id="sbsong-audio-box">'+
        (song.hasAudio||song.audioUrl?'<audio controls preload="metadata" id="sbsong-audio-player"></audio>':
        '<p>Аудио ещё не добавлено. Добавь первую версию в этой карточке.</p>')+'</div>'+
      versionManager(song)+
      '<div class="sbsong-detail-actions">'+
      '<button type="button" class="sbsong-main-btn" data-sbsong-action="share" data-id="'+esc(song.id)+'">🔗 Поделиться ссылкой</button>'+
      (song.hasAudio?'<button type="button" data-sbsong-action="share-file" data-id="'+esc(song.id)+'">Отправить аудиофайл</button>':"")+
      (song.listenUrl?'<a href="'+esc(song.listenUrl)+'" target="_blank" rel="noopener noreferrer">Открыть публичную запись ↗</a>':"")+
      '<button type="button" data-sbsong-action="edit" data-id="'+esc(song.id)+'">Изменить</button>'+
      '<button type="button" class="sbsong-danger" data-sbsong-action="delete" data-id="'+esc(song.id)+'">Удалить</button>'+
      '</div>'+
      (state.confirmDelete===song.id?'<div class="sbsong-delete-confirm"><strong>Удалить карточку вместе с локальными файлами?</strong>'+
      '<button type="button" data-sbsong-action="delete-confirm" data-id="'+esc(song.id)+'">Да, удалить</button>'+
      '<button type="button" data-sbsong-action="delete-cancel">Отмена</button></div>':"")+
      '</div></div></section>';
 }
 function libraryPage(){
   const q=state.search.toLowerCase(),ordered=[...songs].sort((a,b)=>b.updatedAt-a.updatedAt);
   const shown=ordered.filter(song=>(song.title+" "+song.artist+" "+song.genre+" "+song.album).toLowerCase().includes(q));
   const selected=get(state.selectedId);
   return '<section class="sbsong-page" id="sbsong-page">'+
     '<header class="sbsong-hero"><div class="sbsong-eyebrow">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div>'+
     '<button type="button" data-sbsong-action="back" class="sbsong-back">← В личный кабинет</button>'+
     '<div class="sbsong-hero-row"><div><h1>Мои песни</h1>'+
     '<p>Личная коллекция песен: карточки, обложки, MP3, M4A, WAV и версии записей.</p></div>'+
     '<div class="sbsong-hero-tools"><button type="button" class="sbsong-artists-manage-btn" data-sbsong-action="artists-manage">♬ Мои артисты ('+customArtists().length+')</button>'+
     '<button type="button" class="sbsong-main-btn" data-sbsong-action="new">+ Добавить песню</button></div></div>'+
     '<div class="sbsong-stats"><span>'+songs.length+' песен</span><span>'+songs.reduce((n,s)=>n+songVersions(s).length,0)+' аудиоверсий на устройстве</span>'+
     '<span>Хранение локально</span></div></header>'+
     '<div class="sbsong-privacy">🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения.</div>'+
     '<p class="sbsong-notice" id="sbsong-notice" role="status" aria-live="polite"'+(!state.notice?' hidden':'')+'>'+esc(state.notice)+'</p>'+
     (!state.showForm&&state.showArtistManager?artistManager():"")+
     (state.showForm?formPage(get(state.editId)):"")+
     (selected&&!state.showForm?detail(selected):"")+
     '<div class="sbsong-collection-head"><h2>Коллекция</h2><input type="search" id="sbsong-search" placeholder="Найти песню или исполнителя…" value="'+esc(state.search)+'" aria-label="Поиск песен"></div>'+
     (shown.length?'<div class="sbsong-grid">'+shown.map(card).join("")+'</div>':
       '<div class="sbsong-empty">'+(songs.length?"По этому запросу песен нет.":"Песен пока нет. Добавь первую карточку и загрузи аудиофайл.")+'</div>')+
     '</section>';
 }
 function decodeCard(raw){
   if(!raw||raw.length>14000)return null;
   try{
     const binary=atob(raw.replace(/-/g,"+").replace(/_/g,"/"));
     const bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));
     const x=JSON.parse(new TextDecoder().decode(bytes));
     if(!x||x.v!==1||!x.title)return null;
     return {title:clean(x.title,120),artist:clean(x.artist,120),genre:clean(x.genre,80),
       album:clean(x.album,120),description:clean(x.description,700),coverUrl:safeURL(x.coverUrl),audioUrl:safeURL(x.audioUrl),
       listenUrl:safeURL(x.listenUrl)};
   }catch(e){return null;}
 }
 function encodeCard(song){
   const plain={v:1,title:song.title,artist:song.artist,genre:song.genre,album:song.album,
     description:song.description,coverUrl:song.coverUrl,audioUrl:song.audioUrl,listenUrl:song.listenUrl};
   const bytes=new TextEncoder().encode(JSON.stringify(plain));
   let text="";for(const b of bytes)text+=String.fromCharCode(b);
   return btoa(text).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
 }
 function shareUrl(song){
   // Never include local media or unrelated private library data.
   return location.origin+location.pathname+SHARE_PREFIX+encodeCard(song);
 }
 function sharedPage(song){
   const title=song?.title||"Карточка недоступна";
   return '<section class="sbsong-page sbsong-shared" id="sbsong-shared">'+
    '<header class="sbsong-hero"><span class="sbsong-eyebrow">SUNOBOOM · КАРТОЧКА ПЕСНИ</span>'+
    '<h1>'+esc(title)+'</h1><p>'+esc(song?.artist||"")+'</p></header>'+
    (song?'<div class="sbsong-public-card">'+
       (song.coverUrl?'<img class="sbsong-public-art" style="object-fit:cover;width:100%;max-width:300px" alt="Обложка" src="'+esc(song.coverUrl)+'">':'<div class="sbsong-public-art">♫</div>')+
       '<p class="sbsong-detail-tags">'+[song.genre,song.album].filter(Boolean).map(x=>'<span>'+esc(x)+'</span>').join("")+'</p>'+
       (song.description?'<p class="sbsong-detail-description">'+esc(song.description)+'</p>':"")+
       (song.audioUrl?'<audio controls preload="metadata" src="'+esc(song.audioUrl)+'"></audio>':"")+
       (song.listenUrl?'<p><a href="'+esc(song.listenUrl)+'" target="_blank" rel="noopener noreferrer">Послушать песню на внешнем сайте ↗</a></p>':"")+
       (!song.audioUrl&&!song.listenUrl?'<p class="sbsong-public-notice">В этой ссылке есть информация о песне, но нет аудиозаписи. Автор может отправить MP3 отдельно.</p>':"")+
       '</div>':'<p class="sbsong-empty">Ссылка повреждена или карточка не найдена.</p>')+
    '<button type="button" class="sbsong-main-btn" data-sbsong-action="shared-home">Открыть SUNOBOOM</button>'+
    '<p class="sbsong-public-notice">Ссылка открывает выбранные автором сведения. Карточка не требует входа, поэтому её сможет посмотреть любой получатель ссылки.</p></section>';
 }
 async function hydrate(){
   if(view.nav!=="songs")return;
   const ids=[...document.querySelectorAll("[data-sbsong-cover]")].map(x=>x.dataset.sbsongCover);
   for(const id of new Set(ids)){
     const url=await coverURL(id);
     if(view.nav!=="songs"||!url)continue;
     document.querySelectorAll("[data-sbsong-cover]").forEach(el=>{if(el.dataset.sbsongCover===id){el.src=url;el.style.display="block";}});
   }
   if(state.showForm&&state.editId&&!state.coverScanFile)await showSavedCover();
   const selected=get(state.selectedId),audio=document.getElementById("sbsong-audio-player");
   if(!audio||!selected)return;
   releaseAudio();
   if(selected.hasAudio){
     try{const file=await getFile(selected.id+":audio");
       if(file&&view.nav==="songs"&&get(state.selectedId)?.id===selected.id){
         activeAudioURL=URL.createObjectURL(file);
         audio.src=activeAudioURL;
         return;
       }
     }catch(e){}
   }
   if(selected.audioUrl)audio.src=selected.audioUrl;
   else if(selected.hasAudio)notify("Не удалось найти аудиофайл в хранилище устройства.");
 }

 // Existing Track Passport can create/update a library card without duplicating metadata entry.
 if(typeof sbTrackDetail==="function"){
   const previousTrackDetail=sbTrackDetail;
   sbTrackDetail=function(t){
     const original=previousTrackDetail.apply(this,arguments);
     const anchor='<div class="sb-track-buttons">';
     if(!original.includes(anchor)||!t?.id)return original;
     const button='<button type="button" class="btn primary small" data-sbsong-action="from-passport" data-id="'+esc(t.id)+'">♪ Сохранить в «Мои песни»</button>';
     return original.replace(anchor,anchor+button);
   };
 }
 function importPassport(id){
   const t=(data.tracks||[]).find(t=>t.id===id);
   if(!t){notify("Паспорт трека не найден.");return;}
   const found=songs.find(s=>s.passportId===id);
   const url=safeURL(t.audioUrl);
   const direct=/\.(mp3|wav|m4a|aac|ogg|flac)(?:[?#]|$)/i.test(url);
   const project=(data.projects||[]).find(p=>p.id===t.projectId);
   const title=clean(t.title,120);
   if(!title){notify("Укажи название в Паспорте трека.");return;}
   const now=Date.now();
   const card={
     id:found?.id||("song-"+now.toString(36)+"-"+Math.random().toString(36).slice(2,9)),
     passportId:id,title,artist:clean(t.artist,120),
     genre:clean(typeof GENRES!=="undefined"?GENRES.find(g=>g.id===t.genre)?.name||t.genre:t.genre,80),
     album:clean(project?.title||"",120),
     description:clean(t.notes||t.arrangement||"",700),
     audioUrl:direct?url:found?.audioUrl||"",
     listenUrl:direct?found?.listenUrl||"":url||found?.listenUrl||"",
     coverUrl:safeURL(t.coverUrl)||found?.coverUrl||"",
     hasAudio:found?.hasAudio||false,hasCover:found?.hasCover||false,
     createdAt:found?.createdAt||now,updatedAt:now
   };
   const backup=[...songs];
   songs=found?songs.map(x=>x.id===found.id?card:x):[card,...songs];
   if(!save()){songs=backup;notify("Не удалось сохранить карточку.");return;}
   state.editId=null;state.showForm=false;state.selectedId=card.id;
   state.notice="Карточка создана из Паспорта трека. При необходимости добавь MP3 и обложку.";
   view.nav="songs";render();window.scrollTo({top:0,behavior:"instant"});
 }
 const previousAccount=account;
 account=function(){
   const html=previousAccount.apply(this,arguments);
   const anchor='<div class="account-grid">';
   if(!html.includes(anchor))return html;
   const tile='<button type="button" class="account-tile sbsong-account-tile" data-sbsong-action="open-library" aria-label="Мои песни">'+
     '<span class="sbsong-account-icon">♪</span><strong>Мои песни</strong><span>Карточки, обложки, аудио и ссылки</span>'+
     '<b class="tile-count">'+songs.length+'</b><span class="account-tile-arrow">↗</span></button>';
   return html.replace(anchor,anchor+tile);
 };
 const oldRender=render;
 render=function(){
   releaseAudio();
   if(view.nav==="songs"||view.nav==="sharedSong"){
     document.getElementById("app").innerHTML=chrome(view.nav==="songs"?libraryPage():sharedPage(state.shared));
     if(view.nav==="songs")hydrate();
     return;
   }
   return oldRender.apply(this,arguments);
 };
 const oldGo=go;
 go=function(target){
   if(location.hash.startsWith(SHARE_PREFIX)||location.hash==="#view-songs")history.replaceState(null,"",location.pathname+location.search);
   return oldGo.apply(this,arguments);
 };
 function openLibrary(){
   history.replaceState(null,"",location.pathname+location.search+"#view-songs");
   view.nav="songs";state.selectedId=null;state.showForm=false;state.notice="";state.editId=null;state.showArtistManager=false;state.artistPickerOpen=false;state.genrePickerOpen=false;
   render();window.scrollTo({top:0,behavior:"instant"});
 }
 function routeShare(){
   if(location.hash==="#view-songs"){
     view.nav="songs";render();window.scrollTo({top:0,behavior:"instant"});return true;
   }
   if(!location.hash.startsWith(SHARE_PREFIX))return false;
   state.shared=decodeCard(location.hash.slice(SHARE_PREFIX.length));
   view.nav="sharedSong";
   render();window.scrollTo({top:0,behavior:"instant"});
   return true;
 }
 async function submitForm(event){
   event.preventDefault();if(state.loading)return;
   const form=event.target,formdata=new FormData(form);
   const title=clean(formdata.get("title"),120);
   if(!title){notify("Укажи название песни.");form.querySelector('[name="title"]')?.focus();return;}
   const inputAudio=form.querySelector('[name="audio"]')?.files?.[0];
   const inputCover=form.querySelector('[name="cover"]')?.files?.[0];
   if(inputAudio&&(!mimeAudio(inputAudio)||inputAudio.size>150*1024*1024)){notify("Аудиофайл должен быть музыкального формата и не больше 150 МБ.");return;}
   if(inputCover&&(!mimeImage(inputCover)||inputCover.size>10*1024*1024)){notify("Для обложки выбери JPG, PNG, WEBP или GIF до 10 МБ.");return;}
   const rawAudio=clean(formdata.get("audioUrl"),700),rawListen=clean(formdata.get("listenUrl"),700),rawCover=clean(formdata.get("coverUrl"),700);
   const audioUrl=rawAudio?safeURL(rawAudio):"",listenUrl=rawListen?safeURL(rawListen):"",coverUrl=rawCover?safeURL(rawCover):"";
   if((rawAudio&&!audioUrl)||(rawListen&&!listenUrl)||(rawCover&&!coverUrl)){notify("Внешние ссылки должны начинаться с https://");return;}
   const before=get(state.editId),id=before?.id||("song-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,9));
   const autoCover=inputAudio&&!inputCover?(state.coverScanFile===inputAudio&&state.coverScanPromise?await state.coverScanPromise:await readEmbeddedCover(inputAudio)):null;
   const selectedCover=inputCover||autoCover;
   const next={id,passportId:before?.passportId||"",title,artist:clean(formdata.get("artist"),120),genre:clean(formdata.get("genre"),80),
     album:clean(formdata.get("album"),120),description:clean(formdata.get("description"),700),
     audioUrl,listenUrl,coverUrl,hasAudio:!!(before?.hasAudio||inputAudio),hasCover:!!(before?.hasCover||selectedCover),
     createdAt:before?.createdAt||Date.now(),updatedAt:Date.now()};
   state.loading=true;const btn=document.getElementById("sbsong-submit");if(btn)btn.disabled=true;
   try{
     if(inputAudio)await putFile(id+":audio",inputAudio);
     if(selectedCover){await putFile(id+":cover",selectedCover);clearThumb(id);}
     const previous=[...songs];
     songs=before?songs.map(x=>x.id===id?next:x):[next,...songs];
     if(!save()){songs=previous;throw new Error("Не удалось записать карточку в память браузера.");}
     // A newly entered performer is reusable in every future song card.
     if(next.artist)saveArtistName(next.artist,true);
     resetCoverPreview();
     state.editId=null;state.showForm=false;state.selectedId=id;
     state.notice=autoCover&&!inputCover?"Песня сохранена. Обложка взята из метаданных аудио.":"Песня сохранена в этом браузере.";
     render();
   }catch(e){notify("Не удалось сохранить: "+(e.message||"проверь доступное место на устройстве"));}
   finally{state.loading=false;if(btn)btn.disabled=false;}
 }
 async function removeSong(id){
   const x=get(id);if(!x)return;
   songs=songs.filter(y=>y.id!==id);
   if(!save()){songs.push(x);notify("Не получилось удалить карточку.");return;}
   try{await delFile(id+":audio");await delFile(id+":cover");}catch(e){}
   clearThumb(id);
   state.selectedId=null;state.confirmDelete=null;state.notice="Песня удалена из локальной библиотеки.";
   render();
 }
 async function copy(text){
   try{await navigator.clipboard.writeText(text);return true;}
   catch(e){
     try{const el=document.createElement("textarea");el.value=text;el.style.position="fixed";el.style.left="-9999px";document.body.appendChild(el);el.select();const ok=document.execCommand("copy");el.remove();return ok;}catch(e){return false;}
   }
 }
 async function shareCard(song){
   const url=shareUrl(song),message=""+song.title+(song.artist?" — "+song.artist:"");
   if(navigator.share){
     try{await navigator.share({title:message,text:"Песня в SUNOBOOM",url});return;}catch(e){if(e.name==="AbortError")return;}
   }
   const ok=await copy(url);notify(ok?"Ссылка на карточку скопирована.": "Не удалось скопировать. "+url);
   if(!song.audioUrl&&!song.listenUrl)notify("Ссылка скопирована. В ней только карточка: локальный MP3 по ссылке не передаётся.");
 }
 async function shareAudio(song){
   try{
     const blob=await getFile(song.id+":audio");if(!blob){notify("Аудиофайл не найден.");return;}
     const ext=String(blob.name||"").match(/\.(mp3|wav|m4a|aac|ogg|opus|flac)$/i)?.[0]||
       ({ "audio/mpeg":".mp3","audio/wav":".wav","audio/x-wav":".wav","audio/mp4":".m4a","audio/ogg":".ogg","audio/flac":".flac" }[blob.type]||".mp3");
     const name=(song.title||"song").replace(/[\\/:*?"<>|]/g,"").slice(0,90)+ext;
     const file=new File([blob],name,{type:blob.type||"audio/mpeg"});
     if(navigator.canShare?.({files:[file]})&&navigator.share){
       try{await navigator.share({files:[file],title:song.title,text:"Аудиозапись "+song.title});return;}
       catch(e){if(e.name==="AbortError")return; /* Use a download when native sharing is unsupported. */}
     }
     const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=file.name;document.body.appendChild(a);a.click();a.remove();
     notify("Файл подготовлен для сохранения. Отправь его через мессенджер.");
     // Keep the URL alive until download initiation; revoke after a user gesture later.
   }catch(e){if(e.name!=="AbortError")notify("Не удалось отправить аудио: "+e.message);}
 }
 document.addEventListener("submit",event=>{if(event.target?.id==="sbsong-save-form")submitForm(event);});
 document.addEventListener("change",event=>{
   if(view.nav!=="songs"||!state.showForm)return;
   const input=event.target;
   if(input?.name==="audio"){
     void findAutoCover(input.files?.[0]||null);
   }else if(input?.name==="cover"){
     const manual=input.files?.[0];
     if(manual){showBlobCover(manual,"Используется выбранная вручную обложка");return;}
     if(state.autoCoverBlob){showBlobCover(state.autoCoverBlob,"✓ Обложка автоматически найдена в аудиофайле");return;}
     if(state.editId){void showSavedCover();return;}
     showBlobCover(null,"При выборе аудиофайла обложка появится здесь автоматически");
   }
 });
 document.addEventListener("input",event=>{
   if(view.nav!=="songs")return;
   if(event.target?.id==="sbsong-artist-input"){
     state.artistShowAll=false;refreshArtistPicker(true);return;
   }
   if(event.target?.id==="sbsong-genre-input"){
     state.genreShowAll=false;state.genreFamily="Все";refreshGenrePicker(true);return;
   }
   if(event.target?.id==="sbsong-artist-manager-filter"){
     state.artistManagerFilter=event.target.value;
     const holder=document.getElementById("sbsong-artist-manager-results");if(holder)holder.innerHTML=artistManagerEntries();
     return;
   }
   if(event.target?.id!=="sbsong-search")return;
   const el=event.target,selection=el.selectionStart;
   state.search=el.value;
   const grid=document.querySelector(".sbsong-grid");
   const results=[...songs].sort((a,b)=>b.updatedAt-a.updatedAt).filter(x=>(x.title+" "+x.artist+" "+x.genre+" "+x.album).toLowerCase().includes(state.search.toLowerCase()));
   const holder=grid||document.querySelector(".sbsong-empty");
   if(holder&&holder.classList.contains("sbsong-grid")){holder.innerHTML=results.map(card).join("");hydrate();}
   else render();
 });
 document.addEventListener("focusin",event=>{
   if(view.nav==="songs"&&event.target?.id==="sbsong-artist-input"){
     state.artistShowAll=false;refreshArtistPicker(true);
   }
   if(view.nav==="songs"&&event.target?.id==="sbsong-genre-input"){
     state.genreShowAll=false;state.genreFamily="Все";refreshGenrePicker(true);
   }
 });
 document.addEventListener("keydown",event=>{
   if(view.nav==="songs"&&event.target?.id==="sbsong-genre-input"&&event.key==="Escape"&&state.genrePickerOpen){
     refreshGenrePicker(false);event.preventDefault();return;
   }
   if(view.nav==="songs"&&event.target?.id==="sbsong-artist-manager-add"&&event.key==="Enter"){
     event.preventDefault();document.querySelector('[data-sbsong-action="artist-manager-add"]')?.click();
   }
 });
 document.addEventListener("pointerdown",event=>{
   if(view.nav!=="songs")return;
   if(state.artistPickerOpen&&!event.target.closest?.(".sbsong-artist-field"))refreshArtistPicker(false);
   if(state.genrePickerOpen&&!event.target.closest?.(".sbsong-genre-field"))refreshGenrePicker(false);
 });
 document.addEventListener("change",event=>{
   if(view.nav==="songs"&&event.target?.id==="sbsong-genre-family"){
     state.genreFamily=event.target.value;state.genreShowAll=true;refreshGenrePicker(true);
   }
 });
 document.addEventListener("click",event=>{
   const b=event.target?.closest?.("[data-sbsong-action]");if(!b)return;
   const action=b.dataset.sbsongAction,id=b.dataset.id;
   if(action==="from-passport"){importPassport(id);return;}
   if(action==="open-library"){openLibrary();return;}
   if(action==="shared-home"){
     history.replaceState(null,"",location.pathname+location.search);state.shared=null;go("home");return;
   }
   if(action==="back"){go("account");return;}
   if(view.nav!=="songs")return;
   if(action==="genre-toggle"){
     const opening=!(state.genrePickerOpen&&state.genreShowAll);
     state.genreShowAll=true;
     if(opening)state.genreFamily="Все";
     refreshGenrePicker(opening);return;
   }
   if(action==="genre-pick"){
     const input=document.getElementById("sbsong-genre-input");
     const selected=academyGenreChoices().find(g=>g.id===b.dataset.genreId);
     if(input&&selected){
       input.value=selected.name;
       state.genrePickerOpen=false;state.genreShowAll=false;state.genreFamily="Все";
       refreshGenrePicker(false);
     }
     return;
   }
   if(action==="artist-list-toggle"){const opening=!(state.artistPickerOpen&&state.artistShowAll);state.artistShowAll=true;refreshArtistPicker(opening);return;}
   if(action==="artist-pick"){
     const input=document.getElementById("sbsong-artist-input");
     if(input){input.value=clean(b.dataset.name,120);state.artistPickerOpen=false;refreshArtistPicker(false);}
     return;
   }
   if(action==="artist-save"){
     const input=document.getElementById("sbsong-artist-input");
     if(input&&saveArtistName(input.value))refreshArtistPicker(false);
     return;
   }
   if(action==="artists-manage"){
     if(state.showForm){notify("Закрой редактор песни перед управлением списком артистов.");return;}
     state.showArtistManager=!state.showArtistManager;state.artistManagerFilter="";render();return;
   }
   if(action==="artist-manager-add"){
     const input=document.getElementById("sbsong-artist-manager-add");
     if(input&&saveArtistName(input.value)){input.value="";render();}
     return;
   }
   if(action==="artist-remove"){
     const artist=customArtists().find(a=>a.id===id);
     if(!artist||!confirm("Удалить «"+artist.name+"» из списка? Сохранённые песни не изменятся."))return;
     data.songArtists=customArtists().filter(a=>a.id!==id);persist();
     notify("Артист удалён из списка. Песни остались без изменений.");render();return;
   }
   if(action==="new"){resetCoverPreview();state.genrePickerOpen=false;state.showArtistManager=false;state.editId=null;state.selectedId=null;state.showForm=true;state.notice="";render();return;}
   if(action==="cancel"){resetCoverPreview();state.showForm=false;state.editId=null;render();return;}
   if(action==="open"){state.selectedId=id;state.showForm=false;state.notice="";render();return;}
   if(action==="close-detail"){state.selectedId=null;state.confirmDelete=null;render();return;}
   if(action==="edit"){if(!get(id))return;resetCoverPreview();state.editId=id;state.selectedId=id;state.showForm=true;render();return;}
   if(action==="delete"){state.confirmDelete=id;render();return;}
   if(action==="delete-cancel"){state.confirmDelete=null;render();return;}
   if(action==="delete-confirm"){removeSong(id);return;}
   if(action==="share"){const song=get(id);if(song)shareCard(song);return;}
   if(action==="share-file"){const song=get(id);if(song)shareAudio(song);return;}
 });
 window.addEventListener("hashchange",()=>{if(location.hash.startsWith(SHARE_PREFIX)||location.hash==="#view-songs")routeShare();});
 window.addEventListener("pagehide",()=>{resetCoverPreview();releaseAudio();for(const url of thumbs.values())URL.revokeObjectURL(url);thumbs.clear();});
 window.SUNOBOOM_MY_SONGS=Object.freeze({version:"0.79",count:()=>songs.length,getCards:()=>songs.map(s=>({id:s.id,title:s.title,hasAudio:s.hasAudio})),decodeCard});
 if(!routeShare())render();
})();
