/* SUNOBOOM • My Songs v0.76: local song library and explicit sharing. */
(function installSunoboomSongs(){
 "use strict";
 if(typeof account!=="function"||typeof render!=="function"||typeof chrome!=="function"||typeof go!=="function")return;
 const KEY="sunoboom-my-songs-v1", DB_NAME="sunoboom-song-media-v1", SHARE_PREFIX="#sb-song=";
 const esc=s=>escapeHTML(String(s??""));
 const clean=(s,max=120)=>String(s??"").replace(/[\u0000-\u001f]/g," ").trim().slice(0,max);
 const safeURL=value=>{try{const u=new URL(String(value||"").trim());return u.protocol==="https:"?u.href:"";}catch(e){return "";}};
 const state={editId:null,selectedId:null,showForm:false,search:"",notice:"",confirmDelete:null,shared:null,loading:false};
 const thumbs=new Map();
 let songs=[];
 try{const saved=JSON.parse(localStorage.getItem(KEY)||"[]");if(Array.isArray(saved))songs=saved.filter(x=>x&&typeof x==="object"&&typeof x.id==="string").slice(0,500).map(x=>({
   id:clean(x.id,90),title:clean(x.title,120),artist:clean(x.artist,120),genre:clean(x.genre,80),
   album:clean(x.album,120),description:clean(x.description,700),createdAt:Number(x.createdAt)||Date.now(),
   updatedAt:Number(x.updatedAt)||Date.now(),audioUrl:safeURL(x.audioUrl),listenUrl:safeURL(x.listenUrl),
   hasAudio:x.hasAudio===true,hasCover:x.hasCover===true
 }));}catch(e){}
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(songs));return true;}catch(e){return false;}};
 const get=id=>songs.find(x=>x.id===id)||null;
 const notify=message=>{state.notice=message;const el=document.getElementById("sbsong-notice");if(el){el.textContent=message;el.hidden=false;}else if(typeof toast==="function")toast(message);};
 const mimeAudio=file=>file&&(file.type.startsWith("audio/")||/\.(mp3|wav|m4a|aac|ogg|opus|flac)$/i.test(file.name||""));
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
     req.onsuccess=()=>resolve(req.result);
     req.onerror=()=>reject(req.error||new Error("Ошибка хранения файла"));
     tx.onabort=()=>reject(tx.error||new Error("Запись прервана"));
   });
 }
 const getFile=key=>fileOperation("get",key);
 const putFile=(key,blob)=>fileOperation("put",key,blob);
 const delFile=key=>fileOperation("delete",key);
 function clearThumb(id){const url=thumbs.get(id);if(url)URL.revokeObjectURL(url);thumbs.delete(id);}
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
      (song.hasCover?'<img alt="" data-sbsong-cover="'+esc(song.id)+'" loading="lazy">'+iconCover:iconCover)+'</button>'+
      '<div class="sbsong-card-text"><small>'+esc(song.genre||"Моя музыка")+'</small>'+
      '<h3>'+esc(song.title||"Без названия")+'</h3><p>'+esc(song.artist||"Без исполнителя")+'</p>'+
      '<div class="sbsong-card-flags">'+(song.hasAudio?'<span>♪ Файл сохранён</span>':song.audioUrl?'<span>↗ Аудио по ссылке</span>':'<span>Нет аудио</span>')+'</div>'+
      '<div class="sbsong-card-actions"><button data-sbsong-action="open" data-id="'+esc(song.id)+'" type="button">Открыть</button>'+
      '<button data-sbsong-action="edit" data-id="'+esc(song.id)+'" type="button">Изменить</button>'+
      '<button data-sbsong-action="share" data-id="'+esc(song.id)+'" type="button">Поделиться</button></div></div></article>';
 }
 function field(label,name,value,max,placeholder){
   return '<label class="sbsong-field"><span>'+label+'</span><input name="'+name+'" type="text" maxlength="'+max+'" value="'+escapeAttr(value)+'" placeholder="'+esc(placeholder)+'"></label>';
 }
 function formPage(song){
   return '<section class="sbsong-form-panel" id="sbsong-form">'+
     '<div class="sbsong-subhead"><h2>'+(song?"Изменить песню":"Новая песня")+'</h2>'+
     '<button type="button" data-sbsong-action="cancel">Закрыть ×</button></div>'+
     '<form id="sbsong-save-form" class="sbsong-form">'+
       '<div class="sbsong-form-columns">'+field("Название *","title",song?.title||"",120,"Название песни")+
       field("Исполнитель / проект","artist",song?.artist||data.profileName||"",120,"Автор или артист")+
       field("Жанр","genre",song?.genre||"",80,"Например: поп-рок")+
       field("Альбом / релиз","album",song?.album||"",120,"Название альбома")+'</div>'+
       '<label class="sbsong-field"><span>Описание</span><textarea name="description" maxlength="700" rows="3" placeholder="История, настроение или заметки">'+esc(song?.description||"")+'</textarea></label>'+
       '<div class="sbsong-form-columns">'+
         '<label class="sbsong-field"><span>Загрузить аудиофайл</span><input name="audio" type="file" accept="audio/*,.mp3,.wav,.m4a,.flac,.ogg"></label>'+
         '<label class="sbsong-field"><span>Обложка</span><input name="cover" type="file" accept="image/png,image/jpeg,image/webp,image/gif"></label>'+
       '</div>'+
       '<div class="sbsong-form-columns">'+
         field("Прямая ссылка на MP3 (если есть)","audioUrl",song?.audioUrl||"",700,"https://.../song.mp3")+
         field("Публичная страница песни","listenUrl",song?.listenUrl||"",700,"https://suno.com/...")+'</div>'+
       '<p class="sbsong-form-help">Аудио и обложка сохраняются только на этом устройстве (IndexedDB). Для прослушивания песни по общей ссылке нужен публичный аудиоадрес или страница прослушивания. Обычный загруженный MP3 не публикуется автоматически.</p>'+
       '<div class="sbsong-form-actions"><button type="submit" class="sbsong-main-btn" id="sbsong-submit">Сохранить песню</button>'+
        '<button type="button" data-sbsong-action="cancel">Отмена</button></div>'+
     '</form></section>';
 }
 function detail(song){
   if(!song)return "";
   return '<section class="sbsong-detail">'+
      '<div class="sbsong-subhead"><h2>'+esc(song.title)+'</h2><button type="button" data-sbsong-action="close-detail">Закрыть ×</button></div>'+
      '<div class="sbsong-detail-layout"><div class="sbsong-detail-cover">'+(song.hasCover?'<img data-sbsong-cover="'+esc(song.id)+'" alt="'+esc("Обложка песни "+song.title)+'">':iconCover)+'</div>'+
      '<div><p class="sbsong-detail-artist">'+esc(song.artist||"Исполнитель не указан")+'</p>'+
      '<p class="sbsong-detail-tags">'+[song.genre,song.album].filter(Boolean).map(x=>'<span>'+esc(x)+'</span>').join("")+'</p>'+
      (song.description?'<p class="sbsong-detail-description">'+esc(song.description)+'</p>':"")+
      '<div class="sbsong-audio-box" id="sbsong-audio-box">'+
        (song.hasAudio||song.audioUrl?'<audio controls preload="metadata" id="sbsong-audio-player"></audio>':
        '<p>Аудио ещё не добавлено. Отредактируй карточку и загрузи MP3.</p>')+'</div>'+
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
     '<p>Личная коллекция песен: карточки, обложки, MP3 и прослушивание прямо в SUNOBOOM.</p></div>'+
     '<button type="button" class="sbsong-main-btn" data-sbsong-action="new">+ Добавить песню</button></div>'+
     '<div class="sbsong-stats"><span>'+songs.length+' песен</span><span>'+songs.filter(s=>s.hasAudio).length+' аудиофайлов на устройстве</span>'+
     '<span>Хранение локально</span></div></header>'+
     '<div class="sbsong-privacy">🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения.</div>'+
     '<p class="sbsong-notice" id="sbsong-notice" role="status" aria-live="polite"'+(!state.notice?' hidden':'')+'>'+esc(state.notice)+'</p>'+
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
       album:clean(x.album,120),description:clean(x.description,700),audioUrl:safeURL(x.audioUrl),
       listenUrl:safeURL(x.listenUrl)};
   }catch(e){return null;}
 }
 function encodeCard(song){
   const plain={v:1,title:song.title,artist:song.artist,genre:song.genre,album:song.album,
     description:song.description,audioUrl:song.audioUrl,listenUrl:song.listenUrl};
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
    (song?'<div class="sbsong-public-card"><div class="sbsong-public-art">♫</div>'+
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
   const selected=get(state.selectedId),audio=document.getElementById("sbsong-audio-player");
   if(!audio||!selected)return;
   if(selected.hasAudio){
     try{const file=await getFile(selected.id+":audio");
       if(file&&view.nav==="songs"&&get(state.selectedId)?.id===selected.id){
         audio.src=URL.createObjectURL(file);
         audio.addEventListener("emptied",()=>{ /* object URL freed by track navigation */},{once:true});
         return;
       }
     }catch(e){}
   }
   if(selected.audioUrl)audio.src=selected.audioUrl;
   else if(selected.hasAudio)notify("Не удалось найти аудиофайл в хранилище устройства.");
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
   if(view.nav==="songs"||view.nav==="sharedSong"){
     document.getElementById("app").innerHTML=chrome(view.nav==="songs"?libraryPage():sharedPage(state.shared));
     if(view.nav==="songs")hydrate();
     return;
   }
   return oldRender.apply(this,arguments);
 };
 const oldGo=go;
 go=function(target){
   if(location.hash.startsWith(SHARE_PREFIX))history.replaceState(null,"",location.pathname+location.search);
   return oldGo.apply(this,arguments);
 };
 function openLibrary(){
   view.nav="songs";state.selectedId=null;state.showForm=false;state.notice="";state.editId=null;
   render();window.scrollTo({top:0,behavior:"instant"});
 }
 function routeShare(){
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
   const rawAudio=clean(formdata.get("audioUrl"),700),rawListen=clean(formdata.get("listenUrl"),700);
   const audioUrl=rawAudio?safeURL(rawAudio):"",listenUrl=rawListen?safeURL(rawListen):"";
   if((rawAudio&&!audioUrl)||(rawListen&&!listenUrl)){notify("Внешние ссылки должны начинаться с https://");return;}
   const before=get(state.editId),id=before?.id||("song-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,9));
   const next={id,title,artist:clean(formdata.get("artist"),120),genre:clean(formdata.get("genre"),80),
     album:clean(formdata.get("album"),120),description:clean(formdata.get("description"),700),
     audioUrl,listenUrl,hasAudio:!!(before?.hasAudio||inputAudio),hasCover:!!(before?.hasCover||inputCover),
     createdAt:before?.createdAt||Date.now(),updatedAt:Date.now()};
   state.loading=true;const btn=document.getElementById("sbsong-submit");if(btn)btn.disabled=true;
   try{
     if(inputAudio)await putFile(id+":audio",inputAudio);
     if(inputCover){await putFile(id+":cover",inputCover);clearThumb(id);}
     const previous=[...songs];
     songs=before?songs.map(x=>x.id===id?next:x):[next,...songs];
     if(!save()){songs=previous;throw new Error("Не удалось записать карточку в память браузера.");}
     state.editId=null;state.showForm=false;state.selectedId=id;state.notice="Песня сохранена в этом браузере.";
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
     const name=(song.title||"song").replace(/[\\/:*?"<>|]/g,"").slice(0,90)+(/audio\/(?:mpeg|mp3)/.test(blob.type)?".mp3":".m4a");
     const file=new File([blob],name,{type:blob.type||"audio/mpeg"});
     if(navigator.canShare?.({files:[file]})&&navigator.share){
       await navigator.share({files:[file],title:song.title,text:"Аудиозапись "+song.title});return;
     }
     const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=file.name;document.body.appendChild(a);a.click();a.remove();
     notify("Файл подготовлен для сохранения. Отправь его через мессенджер.");
     // Keep the URL alive until download initiation; revoke after a user gesture later.
   }catch(e){if(e.name!=="AbortError")notify("Не удалось отправить аудио: "+e.message);}
 }
 document.addEventListener("submit",event=>{if(event.target?.id==="sbsong-save-form")submitForm(event);});
 document.addEventListener("input",event=>{
   if(view.nav!=="songs"||event.target?.id!=="sbsong-search")return;
   const el=event.target,selection=el.selectionStart;
   state.search=el.value;
   const grid=document.querySelector(".sbsong-grid");
   const results=[...songs].sort((a,b)=>b.updatedAt-a.updatedAt).filter(x=>(x.title+" "+x.artist+" "+x.genre+" "+x.album).toLowerCase().includes(state.search.toLowerCase()));
   const holder=grid||document.querySelector(".sbsong-empty");
   if(holder&&holder.classList.contains("sbsong-grid")){holder.innerHTML=results.map(card).join("");hydrate();}
   else render();
 });
 document.addEventListener("click",event=>{
   const b=event.target?.closest?.("[data-sbsong-action]");if(!b)return;
   const action=b.dataset.sbsongAction,id=b.dataset.id;
   if(action==="open-library"){openLibrary();return;}
   if(action==="shared-home"){
     history.replaceState(null,"",location.pathname+location.search);state.shared=null;go("home");return;
   }
   if(action==="back"){go("account");return;}
   if(view.nav!=="songs")return;
   if(action==="new"){state.editId=null;state.selectedId=null;state.showForm=true;state.notice="";render();return;}
   if(action==="cancel"){state.showForm=false;state.editId=null;render();return;}
   if(action==="open"){state.selectedId=id;state.showForm=false;state.notice="";render();return;}
   if(action==="close-detail"){state.selectedId=null;state.confirmDelete=null;render();return;}
   if(action==="edit"){if(!get(id))return;state.editId=id;state.selectedId=id;state.showForm=true;render();return;}
   if(action==="delete"){state.confirmDelete=id;render();return;}
   if(action==="delete-cancel"){state.confirmDelete=null;render();return;}
   if(action==="delete-confirm"){removeSong(id);return;}
   if(action==="share"){const song=get(id);if(song)shareCard(song);return;}
   if(action==="share-file"){const song=get(id);if(song)shareAudio(song);return;}
 });
 window.addEventListener("hashchange",()=>{if(location.hash.startsWith(SHARE_PREFIX))routeShare();});
 window.addEventListener("pagehide",()=>{for(const url of thumbs.values())URL.revokeObjectURL(url);thumbs.clear();});
 window.SUNOBOOM_MY_SONGS=Object.freeze({version:"0.76",count:()=>songs.length,getCards:()=>songs.map(s=>({id:s.id,title:s.title,hasAudio:s.hasAudio})),decodeCard});
 if(!routeShare())render();
})();
