/* SUNOBOOM • My Songs v0.89: take library, WAV and in-card A/B comparison. */
(function installSunoboomSongs(){
 "use strict";
 if(typeof account!=="function"||typeof render!=="function"||typeof chrome!=="function"||typeof go!=="function")return;
 const SHARE_PREFIX="#sb-song=";
 const esc=s=>escapeHTML(String(s??""));
 const library=SUNOBOOM_CORE.createSongs({getGenre:id=>typeof GENRES!=='undefined'?GENRES.find(g=>g.id===id):null,extractCover:readEmbeddedCover});
 const {clean,safeURL,maxAudioBytes,activeVersion,mimeAudio,get}=library;
 const songVersions=library.versions;
 const urlScope=()=>library.createUrlScope({createURL:blob=>URL.createObjectURL(blob),revokeURL:url=>URL.revokeObjectURL(url)});
 const coverURLs=urlScope(),audioURLs=urlScope(),previewURLs=urlScope(),downloadURLs=urlScope();
 const state={editId:null,selectedId:null,showForm:false,search:"",notice:"",confirmDelete:null,shared:null,loading:false,coverScanToken:0,coverScanFile:null,coverScanPromise:null,autoCoverBlob:null,coverPreviewURL:"",showArtistManager:false,artistManagerFilter:"",artistPickerOpen:false,artistShowAll:false,genrePickerOpen:false,genreShowAll:false,genreFamily:"Все",playVersionId:null,compareOpen:false,compareAId:null,compareBId:null};
 const thumbs=new Map();let coverEpoch=0,audioEpoch=0;
  const audioSize=bytes=>bytes?(bytes/1048576).toFixed(1)+" МБ":"Размер не указан";
  function resetTakeView(){state.playVersionId=null;state.compareOpen=false;state.compareAId=null;state.compareBId=null;}

 const notify=message=>{state.notice=message;const el=document.getElementById("sbsong-notice");if(el){el.textContent=message;el.hidden=false;}else if(typeof toast==="function")toast(message);};
 async function songCommand(name,payload){const result=await library.execute(name,payload);if(!result.ok)notify(result.code==='storage'?'Не удалось сохранить: '+result.error:result.error);return result;}
 function clearThumb(id){coverEpoch++;const url=thumbs.get(id);if(url)coverURLs.release(url);thumbs.delete(id);}
 function releaseAudio(){audioEpoch++;audioURLs.releaseAll();}

 function resetCoverPreview(){
   state.coverScanToken++;
   state.coverScanFile=null;
   state.coverScanPromise=null;
   state.autoCoverBlob=null;
   if(state.coverPreviewURL){previewURLs.release(state.coverPreviewURL);state.coverPreviewURL="";}
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
   if(state.coverPreviewURL){previewURLs.release(state.coverPreviewURL);state.coverPreviewURL="";}
   if(blob)state.coverPreviewURL=previewURLs.create(blob);
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
   const epoch=coverEpoch;
   try{const blob=await library.readCover(id);if(!blob||epoch!==coverEpoch||!get(id)?.hasCover)return "";
     if(thumbs.has(id))return thumbs.get(id);const url=coverURLs.create(blob);thumbs.set(id,url);return url;
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
   library.records.forEach(song=>add(song.artist,"Из моих песен"));
   return [...found.values()].sort((a,b)=>a.name.localeCompare(b.name,"ru",{sensitivity:"base"}));
 }
 function saveArtistName(value,silent=false){
 const result=application.execute('songArtist.save',{name:value});
 if(!result.ok){if(!silent)notify(result.error);return false;}
 if(!silent)notify('Артист «'+result.value.name+'» добавлен в список.');return true;
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
   return '<div id="sb-vue-artist-manager"><section class="sbsong-artist-manager" id="sbsong-artist-manager">'+
     '<div class="sbsong-subhead"><h2>Мои артисты</h2><button type="button" data-sbsong-action="artists-manage">Закрыть ×</button></div>'+
     '<p>Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста» и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.</p>'+
     '<div class="sbsong-artist-manager-new"><input id="sbsong-artist-manager-add" type="text" maxlength="120" placeholder="Имя артиста или проекта" aria-label="Новый артист">'+
       '<button type="button" class="sbsong-main-btn" data-sbsong-action="artist-manager-add">+ Добавить артиста</button></div>'+
     '<input id="sbsong-artist-manager-filter" type="search" value="'+escapeAttr(state.artistManagerFilter)+'" placeholder="Фильтр по имени…" aria-label="Фильтр моих артистов">'+
     '<div id="sbsong-artist-manager-results">'+artistManagerEntries()+'</div>'+
   '</section></div>';
 }


 // Read-only Vue view of the hand-managed artist list. Profiles of artist
 // DNA and existing songs remain untouched and available in artistChoices().
 window.SUNOBOOM_LEGACY_ARTIST_MANAGER=Object.freeze({
   snapshot(){
     if(view.nav!=="songs"||state.showForm||!state.showArtistManager)return null;
     return {
       artists:[...customArtists()].map(a=>({id:a.id,name:a.name}))
         .sort((a,b)=>a.name.localeCompare(b.name,"ru",{sensitivity:"base"})),
       filter:state.artistManagerFilter,
       dnaCount:Array.isArray(data.artistDNAs)?data.artistDNAs.filter(x=>x?.name).length:0
     };
   }
 });

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
   return '<div id="sb-vue-song-editor"><section class="sbsong-form-panel" id="sbsong-form">'+
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
     '</form></section></div>';
 }
 function versionManager(song){
    const versions=songVersions(song),main=activeVersion(song);
    const playing=versions.find(v=>v.id===state.playVersionId)||main;
    const rows=versions.map((v,i)=>'<article class="sbsong-version-row">'+
      '<div class="sbsong-version-row-head"><div><strong>'+esc(v.label||"Версия "+(i+1))+'</strong>'+
      (main?.id===v.id?'<span class="sbsong-version-main-badge">★ Основная</span>':'')+
      (playing?.id===v.id?'<span class="sbsong-version-play-badge">♫ Выбрана</span>':'')+
      '<small>'+esc(v.fileName||"Запись из предыдущей версии SUNOBOOM")+' · '+esc(audioSize(v.bytes))+
      ' · '+new Date(v.addedAt||Date.now()).toLocaleDateString("ru-RU")+'</small></div></div>'+
      '<div class="sbsong-version-actions">'+
        '<button type="button" data-sbsong-action="version-play" data-version-id="'+esc(v.id)+'">Выбрать для плеера</button>'+
        (main?.id!==v.id?'<button type="button" data-sbsong-action="version-main" data-version-id="'+esc(v.id)+'">★ Сделать основной</button>':'')+
        '<button type="button" data-sbsong-action="share-file" data-id="'+esc(song.id)+'" data-version-id="'+esc(v.id)+'">Сохранить / отправить</button>'+
        '<button type="button" class="sbsong-version-danger" data-sbsong-action="version-remove" data-version-id="'+esc(v.id)+'">Удалить дубль</button>'+
      '</div>'+
      '<details class="sbsong-version-notes"><summary>Название и заметки</summary>'+
        '<label>Название версии<input type="text" maxlength="90" data-sbsong-version-title="'+esc(v.id)+'" value="'+esc(v.label)+'"></label>'+
        '<label>Чем отличается этот дубль<textarea maxlength="800" rows="2" data-sbsong-version-note="'+esc(v.id)+'" placeholder="Например: более плотный припев, удачный вокал...">'+esc(v.notes)+'</textarea></label>'+
        '<button type="button" data-sbsong-action="version-save" data-version-id="'+esc(v.id)+'">Сохранить заметки</button>'+
      '</details>'+
      '</article>').join("");
    let compare="";
    if(versions.length>1){
      const left=versions.find(v=>v.id===state.compareAId)||versions[0];
      const right=versions.find(v=>v.id===state.compareBId)||versions[1];
      const options=chosen=>versions.map(v=>'<option value="'+esc(v.id)+'"'+(v.id===chosen?' selected':'')+'>'+esc(v.label)+'</option>').join("");
      compare='<button type="button" class="sbsong-compare-toggle" data-sbsong-action="compare-toggle">'+
        (state.compareOpen?'Скрыть сравнение A/B':'Сравнить версии A/B')+'</button>'+
        (state.compareOpen?'<div class="sbsong-compare-grid">'+
          '<label>Версия A<select id="sbsong-compare-a">'+options(left.id)+'</select><audio id="sbsong-ab-a" controls preload="metadata"></audio></label>'+
          '<label>Версия B<select id="sbsong-compare-b">'+options(right.id)+'</select><audio id="sbsong-ab-b" controls preload="metadata"></audio></label>'+
          '<p>Два независимых плеера для сравнения дублей. Воспроизведение запускается вручную.</p>'+
        '</div>':'');
    }
    return '<section class="sbsong-versions" aria-label="Версии записи">'+
      '<div class="sbsong-version-heading"><h3>Версии записи ('+versions.length+')</h3>'+
      (playing?'<small>В основном плеере: '+esc(playing.label)+'</small>':'')+'</div>'+
      (rows||'<p>Пока нет локальных версий. Загрузи первую запись в MP3, M4A или WAV.</p>')+
      compare+
      '<div class="sbsong-version-add">'+
        '<h4>+ Добавить новую версию</h4>'+
        '<label>Аудиофайл (MP3, M4A, WAV и другие)<input id="sbsong-version-file" type="file" accept="audio/*,.mp3,.m4a,.wav,.wave,.flac,.ogg,.opus,.aac"></label>'+
        '<label>Название дубля<input id="sbsong-new-version-title" maxlength="90" type="text" placeholder="Например: Версия с новым припевом"></label>'+
        '<label>Заметка<textarea id="sbsong-new-version-notes" maxlength="800" rows="2" placeholder="Что изменилось в этой записи?"></textarea></label>'+
        '<button type="button" class="sbsong-main-btn" data-sbsong-action="version-add" id="sbsong-version-submit">Сохранить новую версию</button>'+
        '<p>WAV — до 500 МБ, другие форматы — до 150 МБ. Каждая версия хранится отдельно в браузере этого устройства. Старые записи не перезаписываются.</p>'+
      '</div></section>';
  }
  function detail(song){
   if(!song)return "";
   return '<div id="sb-vue-song-detail"><section class="sbsong-detail">'+
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
      '<button type="button" data-sbsong-action="producer" data-id="'+esc(song.id)+'">🎛 Мастер</button>'+ 
      '<button type="button" data-sbsong-action="edit" data-id="'+esc(song.id)+'">Изменить</button>'+
      '<button type="button" class="sbsong-danger" data-sbsong-action="delete" data-id="'+esc(song.id)+'">Удалить</button>'+
      '</div>'+
      (state.confirmDelete===song.id?'<div class="sbsong-delete-confirm"><strong>Удалить карточку вместе с локальными файлами?</strong>'+
      '<button type="button" data-sbsong-action="delete-confirm" data-id="'+esc(song.id)+'">Да, удалить</button>'+
      '<button type="button" data-sbsong-action="delete-cancel">Отмена</button></div>':"")+
      '</div></div></section></div>';
 }
 // The Vue detail is view-only. All audio versions, media keys, handlers and
 // confirmation state still come directly from the existing song library.
 window.SUNOBOOM_LEGACY_SONG_DETAIL=Object.freeze({
   snapshot(){
     if(view.nav!=="songs"||state.showForm)return null;
     const song=get(state.selectedId);
     if(!song)return null;
     return {
       id:song.id,title:song.title,artist:song.artist||"Исполнитель не указан",
       genre:song.genre,album:song.album,description:song.description,
       hasCover:song.hasCover,coverUrl:song.coverUrl,
       hasAudio:song.hasAudio,hasPlayableAudio:!!(song.hasAudio||song.audioUrl),
       listenUrl:song.listenUrl,confirmDelete:state.confirmDelete===song.id,
       // Read-only take metadata for Vue. File storage and all delegated
       // actions remain in the legacy module; no parallel state or migration.
       versions:songVersions(song).map((v,i)=>({
         id:v.id,label:v.label||"Версия "+(i+1),notes:v.notes,
         fileName:v.fileName||"Запись из предыдущей версии SUNOBOOM",
         sizeLabel:audioSize(v.bytes),
         addedDate:new Date(v.addedAt||Date.now()).toLocaleDateString("ru-RU"),
         isMain:activeVersion(song)?.id===v.id,
         isPlaying:(songVersions(song).find(x=>x.id===state.playVersionId)||activeVersion(song))?.id===v.id
       })),
       playingLabel:(songVersions(song).find(v=>v.id===state.playVersionId)||activeVersion(song))?.label||"",
       compareOpen:state.compareOpen,
       compareAId:(songVersions(song).find(v=>v.id===state.compareAId)||songVersions(song)[0])?.id||"",
       compareBId:(songVersions(song).find(v=>v.id===state.compareBId)||songVersions(song)[1])?.id||""
     };
   },
   hydrateMedia:()=>hydrate()
 });
 // Vue editor owns only form inputs and the two suggestion popovers.
 // Existing submitForm, file events, artist/genre sources and IndexedDB stay
 // authoritative. The legacy HTML form remains as the mount fallback.
 window.SUNOBOOM_LEGACY_SONG_EDITOR=Object.freeze({
   snapshot(){
     if(view.nav!=="songs"||!state.showForm)return null;
     const song=get(state.editId);
     return {
       editId:state.editId||null, title:song?.title||"",
       artist:song?.artist||data.profileName||"",genre:song?.genre||"",
       album:song?.album||"",description:song?.description||"",
       audioUrl:song?.audioUrl||"",listenUrl:song?.listenUrl||"",
       coverUrl:song?.coverUrl||"",hasAudio:!!song?.hasAudio,
       hasCover:!!(song?.hasCover||song?.coverUrl)
     };
   },
   artistChoices:()=>allArtistChoices(),
   genreChoices:()=>academyGenreChoices(),
   genreFamilies:()=>academyGenreFamilies(academyGenreChoices()),
   saveArtist:name=>saveArtistName(name),
   hydrateCover:()=>state.showForm&&state.editId&&!state.coverScanFile?showSavedCover():undefined
 });
 // Read-only Vue cards model. Song records, version metadata and binary media
 // remain owned by this legacy module; no second Vue store is created.
 window.SUNOBOOM_LEGACY_SONG_CARDS=Object.freeze({
   snapshot(){
     if(view.nav!=="songs")return null;
     const q=state.search.toLowerCase();
     const items=[...library.records].sort((a,b)=>b.updatedAt-a.updatedAt)
       .filter(song=>(song.title+" "+song.artist+" "+song.genre+" "+song.album).toLowerCase().includes(q))
       .map(song=>({
         id:song.id,title:song.title||"Без названия",artist:song.artist||"Без исполнителя",
         genre:song.genre||"Моя музыка",coverUrl:song.coverUrl,hasCover:song.hasCover,
         status:song.hasAudio?"♪ Версий: "+songVersions(song).length:song.audioUrl?"↗ Аудио по ссылке":"Нет аудио"
       }));
     return {items,total:library.records.length};
   },
   hydrateCovers:()=>hydrateSongCovers()
 });
 function libraryPage(){
   const q=state.search.toLowerCase(),ordered=[...library.records].sort((a,b)=>b.updatedAt-a.updatedAt);
   const shown=ordered.filter(song=>(song.title+" "+song.artist+" "+song.genre+" "+song.album).toLowerCase().includes(q));
   const selected=get(state.selectedId);
   return '<section class="sbsong-page" id="sbsong-page">'+
     '<header class="sbsong-hero" data-sb-workspace="songs-header"><div class="sbsong-eyebrow">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div>'+
     '<button type="button" data-sbsong-action="back" class="sbsong-back">← В личный кабинет</button>'+
     '<div class="sbsong-hero-row"><div><h1>Мои песни</h1>'+
     '<p>Личная коллекция песен: карточки, обложки, MP3, M4A, WAV и версии записей.</p></div>'+
     '<div class="sbsong-hero-tools"><button type="button" class="sbsong-artists-manage-btn" data-sbsong-action="artists-manage">♬ Мои артисты ('+customArtists().length+')</button>'+
     '<button type="button" class="sbsong-main-btn" data-sbsong-action="new">+ Добавить песню</button></div></div>'+
     '<div class="sbsong-stats"><span>'+library.records.length+' песен</span><span>'+library.records.reduce((n,s)=>n+songVersions(s).length,0)+' аудиоверсий на устройстве</span>'+
     '<span>Хранение локально</span></div></header>'+
     '<div class="sbsong-privacy">🔒 Это локальная библиотека в браузере, а не защищённое облачное хранилище. Карточки не синхронизируются между устройствами. Ссылку на песню можно отправить отдельно — она откроет только выбранные для публикации сведения.</div>'+
     '<p class="sbsong-notice" id="sbsong-notice" role="status" aria-live="polite"'+(!state.notice?' hidden':'')+'>'+esc(state.notice)+'</p>'+
     (!state.showForm&&state.showArtistManager?artistManager():"")+
     (state.showForm?formPage(get(state.editId)):"")+
     (selected&&!state.showForm?detail(selected):"")+
     '<div class="sbsong-collection-head" data-sb-workspace="songs-search"><h2>Коллекция</h2><input type="search" id="sbsong-search" placeholder="Найти песню или исполнителя…" value="'+esc(state.search)+'" aria-label="Поиск песен"></div>'+
     '<div id="sb-vue-song-cards">'+
     (shown.length?'<div class="sbsong-grid">'+shown.map(card).join("")+'</div>':
       '<div class="sbsong-empty">'+(library.records.length?"По этому запросу песен нет.":"Песен пока нет. Добавь первую карточку и загрузи аудиофайл.")+'</div>')+
     '</div></section>';
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
 // This model contains only the already decoded public card, never the local library.
 window.SUNOBOOM_LEGACY_SHARED_SONG=Object.freeze({
   snapshot(){
     if(view.nav!=="sharedSong")return null;
     return {song:state.shared?{...state.shared}:null};
   }
 });
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
 async function setAudioSource(elementId,song,version,fallbackExternal){
    const player=document.getElementById(elementId),epoch=audioEpoch;
    if(!player)return;
    if(version){
      try{
        const blob=await library.readAudio(song.id,version.id);
        if(!blob)throw new Error("missing audio");
        if(epoch!==audioEpoch||view.nav!=="songs"||state.selectedId!==song.id||document.getElementById(elementId)!==player)return;
        const url=audioURLs.create(blob);
        player.src=url;
        return;
      }catch(e){
        if(!fallbackExternal){player.setAttribute("aria-label","Аудиофайл не найден в локальном хранилище");return;}
      }
    }
    if(fallbackExternal&&song.audioUrl&&document.getElementById(elementId)===player)player.src=song.audioUrl;
    else if(version&&fallbackExternal)notify("Аудиофайл этой версии не найден в хранилище устройства.");
  }
  async function hydrateSongCovers(){
    if(view.nav!=="songs")return;
    const ids=[...document.querySelectorAll("[data-sbsong-cover]")].map(x=>x.dataset.sbsongCover);
    for(const id of new Set(ids)){
      const url=await coverURL(id);
      if(view.nav!=="songs"||!url)continue;
      document.querySelectorAll("[data-sbsong-cover]").forEach(el=>{if(el.dataset.sbsongCover===id){el.src=url;el.style.display="block";}});
    }
  }
  async function hydrate(){
    if(view.nav!=="songs")return;
    await hydrateSongCovers();
    if(state.showForm&&state.editId&&!state.coverScanFile)await showSavedCover();
    const selected=get(state.selectedId),audio=document.getElementById("sbsong-audio-player");
    if(!selected||!audio||view.nav!=="songs")return;
    const all=songVersions(selected);
    const chosen=all.find(v=>v.id===state.playVersionId)||activeVersion(selected);
    if(!audio.hasAttribute("src"))void setAudioSource("sbsong-audio-player",selected,chosen,true);
    if(state.compareOpen&&all.length>1){
      const left=all.find(v=>v.id===state.compareAId)||all[0];
      const right=all.find(v=>v.id===state.compareBId)||all[1];
      void setAudioSource("sbsong-ab-a",selected,left,false);
      void setAudioSource("sbsong-ab-b",selected,right,false);
    }
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
 async function importPassport(id){
 const result=await songCommand('passport.import',{id});if(!result.ok)return;
 state.editId=null;state.showForm=false;state.selectedId=result.value.id;
 state.notice='Карточка создана из Паспорта трека. Аудиоверсии можно добавлять прямо в карточке.';
 view.nav='songs';render();window.scrollTo({top:0,behavior:'instant'});
 }
 const oldRender=render;
 render=function(){
   releaseAudio();
   if(view.nav==="songs"||view.nav==="sharedSong"){
     sbRenderHTML(chrome(view.nav==="songs"?libraryPage():sharedPage(state.shared)));
     if(view.nav==="songs")sbAfterRender(hydrate);
     return;
   }
   return oldRender.apply(this,arguments);
 };
 const oldGo=go;
 go=function(target){
   if(location.hash.startsWith(SHARE_PREFIX)||location.hash==="#view-songs")if(!window.SUNOBOOM_SHELL?.active)history.replaceState(null,"",location.pathname+location.search);
   return oldGo.apply(this,arguments);
 };
 function openLibrary(){
   if(!window.SUNOBOOM_SHELL?.active)history.replaceState(null,"",location.pathname+location.search+"#view-songs");
   view.nav="songs";state.selectedId=null;state.showForm=false;state.notice="";state.editId=null;resetTakeView();state.showArtistManager=false;state.artistPickerOpen=false;state.genrePickerOpen=false;
   render();window.scrollTo({top:0,behavior:"instant"});
 }
 function routeShare(){
   if(location.hash==="#view-songs"){
     view.nav="songs";render();window.scrollTo({top:0,behavior:"instant"});return true;
   }
   if(!location.hash.startsWith(SHARE_PREFIX))return false;
   state.sharedCode=location.hash.slice(SHARE_PREFIX.length);state.shared=decodeCard(state.sharedCode);
   view.nav="sharedSong";
   render();window.scrollTo({top:0,behavior:"instant"});
   return true;
 }
 async function submitForm(event){
 event.preventDefault();if(state.loading)return;
 const form=event.target,values=new FormData(form),audio=form.querySelector('[name="audio"]')?.files?.[0],cover=form.querySelector('[name="cover"]')?.files?.[0];
 const payload=Object.fromEntries(['title','artist','genre','album','description','audioUrl','listenUrl','coverUrl'].map(key=>[key,values.get(key)]));
 Object.assign(payload,{id:state.editId,audio,cover});
 if(audio&&state.coverScanFile===audio&&state.coverScanPromise)payload.embeddedCover=state.coverScanPromise;
 state.loading=true;const btn=document.getElementById('sbsong-submit');if(btn)btn.disabled=true;
 try{
 const result=await songCommand('save',payload);if(!result.ok){if(!clean(payload.title))form.querySelector('[name="title"]')?.focus();return;}
 if(result.meta.coverChanged)clearThumb(result.value.id);resetCoverPreview();
 state.editId=null;state.showForm=false;state.selectedId=result.value.id;resetTakeView();
 state.notice=audio&&result.meta.hadVersions?'Добавлена новая аудиоверсия. Прежние записи сохранены.':result.meta.autoCoverUsed?'Песня сохранена. Обложка взята из метаданных аудио.':'Песня сохранена в этом браузере.';
 render();
 }finally{state.loading=false;if(btn)btn.disabled=false;}
 }
 async function addTake(){
 if(state.loading)return;
 const payload={id:state.selectedId,file:document.getElementById('sbsong-version-file')?.files?.[0],label:document.getElementById('sbsong-new-version-title')?.value,notes:document.getElementById('sbsong-new-version-notes')?.value};
 state.loading=true;const button=document.getElementById('sbsong-version-submit');if(button)button.disabled=true;
 try{const result=await songCommand('version.add',payload);if(!result.ok)return;
 if(result.meta.coverChanged)clearThumb(result.value.id);state.playVersionId=result.meta.version.id;
 state.notice='Сохранена новая версия «'+result.meta.version.label+'». Другие дубли не изменены.';render();
 }finally{state.loading=false;if(button)button.disabled=false;}
 }
 async function editTakeDetails(versionId){
 const titleInput=[...document.querySelectorAll('[data-sbsong-version-title]')].find(x=>x.dataset.sbsongVersionTitle===versionId);
 const notesInput=[...document.querySelectorAll('[data-sbsong-version-note]')].find(x=>x.dataset.sbsongVersionNote===versionId);
 if((await songCommand('version.save',{id:state.selectedId,versionId,label:titleInput?.value,notes:notesInput?.value})).ok){state.notice='Название и заметки версии сохранены.';render();}
 }
 async function markMainTake(versionId){
 if((await songCommand('version.main',{id:state.selectedId,versionId})).ok){state.playVersionId=null;state.notice='Основная версия песни изменена.';render();}
 }
 async function removeTake(versionId){
 const song=get(state.selectedId),selected=songVersions(song).find(v=>v.id===versionId);
 if(!song||!selected||state.loading)return;
 if(!confirm('Удалить только аудиоверсию «'+selected.label+'»? Восстановить её нельзя. Остальные дубли и карточка останутся.'))return;
 state.loading=true;
 try{const result=await songCommand('version.remove',{id:song.id,versionId});if(!result.ok)return;
 state.playVersionId=null;state.compareAId=null;state.compareBId=null;if(songVersions(result.value).length<2)state.compareOpen=false;
 state.notice='Выбранный дубль удалён. Карточка и остальные версии сохранены.';render();
 }finally{state.loading=false;}
 }
 async function removeSong(id){
 if(state.loading)return;state.loading=true;
 try{if(!(await songCommand('remove',{id})).ok)return;
 clearThumb(id);state.selectedId=null;state.confirmDelete=null;state.notice='Песня удалена из локальной библиотеки.';render();
 }finally{state.loading=false;}
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
   if(!song.audioUrl&&!song.listenUrl)notify("Ссылка скопирована. В ней только карточка: локальные MP3, M4A и WAV по ссылке не передаются.");
 }
 async function shareAudio(song,versionId){
   try{
     const version=songVersions(song).find(v=>v.id===(versionId||activeVersion(song)?.id));
     if(!version){notify("Сначала добавь аудиоверсию.");return;}
     const blob=await library.readAudio(song.id,version.id);if(!blob){notify("Аудиофайл этой версии не найден.");return;}
     const ext=String(blob.name||version.fileName||"").match(/\.(mp3|wav|wave|m4a|aac|ogg|opus|flac)$/i)?.[0]||
       ({ "audio/mpeg":".mp3","audio/wav":".wav","audio/x-wav":".wav","audio/mp4":".m4a","audio/ogg":".ogg","audio/flac":".flac" }[blob.type]||".mp3");
     const name=(song.title+(songVersions(song).length>1?" — "+version.label:"")).replace(/[\\/:*?"<>|]/g,"").slice(0,90)+ext;
     const file=new File([blob],name,{type:blob.type||"audio/mpeg"});
     if(navigator.canShare?.({files:[file]})&&navigator.share){
       try{await navigator.share({files:[file],title:song.title,text:"Аудиозапись "+song.title});return;}
       catch(e){if(e.name==="AbortError")return; /* Use a download when native sharing is unsupported. */}
     }
     const url=downloadURLs.create(blob),a=document.createElement("a");a.href=url;a.download=file.name;document.body.appendChild(a);a.click();a.remove();
     notify("Файл подготовлен для сохранения. Отправь его через мессенджер.");
     setTimeout(()=>downloadURLs.release(url),60000);
   }catch(e){if(e.name!=="AbortError")notify("Не удалось отправить аудио: "+e.message);}
 }
 document.addEventListener("submit",event=>{if(event.target?.id==="sbsong-save-form")submitForm(event);});
  document.addEventListener("change",event=>{
    if(view.nav!=="songs"||!get(state.selectedId))return;
    if(event.target?.id==="sbsong-compare-a"){
      state.compareAId=event.target.value;render();
    }else if(event.target?.id==="sbsong-compare-b"){
      state.compareBId=event.target.value;render();
    }
  });
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
     if(document.getElementById("sb-vue-song-editor")?.hasAttribute("data-v-app"))return;
     state.artistShowAll=false;refreshArtistPicker(true);return;
   }
   if(event.target?.id==="sbsong-genre-input"){
     if(document.getElementById("sb-vue-song-editor")?.hasAttribute("data-v-app"))return;
     state.genreShowAll=false;state.genreFamily="Все";refreshGenrePicker(true);return;
   }
   if(event.target?.id==="sbsong-artist-manager-filter"){
     state.artistManagerFilter=event.target.value;
     // Vue owns the search results when mounted; never replace its DOM.
     if(document.getElementById("sb-vue-artist-manager")?.hasAttribute("data-v-app"))return;
     const holder=document.getElementById("sbsong-artist-manager-results");if(holder)holder.innerHTML=artistManagerEntries();
     return;
   }
   if(event.target?.id!=="sbsong-search")return;
   const el=event.target,selection=el.selectionStart;
   state.search=el.value;
   // Never mutate a Vue-owned grid. The same original search rule is applied by snapshot().
   if(document.getElementById("sb-vue-song-cards")?.hasAttribute("data-v-app")){
     window.dispatchEvent(new Event("sunoboom:songs-search"));
     return;
   }
   const grid=document.querySelector(".sbsong-grid");
   const results=[...library.records].sort((a,b)=>b.updatedAt-a.updatedAt).filter(x=>(x.title+" "+x.artist+" "+x.genre+" "+x.album).toLowerCase().includes(state.search.toLowerCase()));
   const holder=document.getElementById("sb-vue-song-cards");
   if(holder){
     // When Vue is disabled, update the original grid/empty state without
     // replacing the search input or losing the typing caret.
     holder.innerHTML=results.length?'<div class="sbsong-grid">'+results.map(card).join("")+'</div>':
       '<div class="sbsong-empty">'+(library.records.length?"По этому запросу песен нет.":"Песен пока нет. Добавь первую карточку и загрузи аудиофайл.")+'</div>';
     void hydrateSongCovers();
   }else render();
 });
 document.addEventListener("focusin",event=>{
   if(view.nav==="songs"&&event.target?.id==="sbsong-artist-input"&&!document.getElementById("sb-vue-song-editor")?.hasAttribute("data-v-app")){
     state.artistShowAll=false;refreshArtistPicker(true);
   }
   if(view.nav==="songs"&&event.target?.id==="sbsong-genre-input"&&!document.getElementById("sb-vue-song-editor")?.hasAttribute("data-v-app")){
     state.genreShowAll=false;state.genreFamily="Все";refreshGenrePicker(true);
   }
 });
 document.addEventListener("keydown",event=>{
   if(view.nav==="songs"&&!document.getElementById("sb-vue-song-editor")?.hasAttribute("data-v-app")&&event.target?.id==="sbsong-genre-input"&&event.key==="Escape"&&state.genrePickerOpen){
     refreshGenrePicker(false);event.preventDefault();return;
   }
   if(view.nav==="songs"&&event.target?.id==="sbsong-artist-manager-add"&&event.key==="Enter"){
     event.preventDefault();document.querySelector('[data-sbsong-action="artist-manager-add"]')?.click();
   }
 });
 document.addEventListener("pointerdown",event=>{
   if(view.nav!=="songs")return;
   if(document.getElementById("sb-vue-song-editor")?.hasAttribute("data-v-app"))return;
   if(state.artistPickerOpen&&!event.target.closest?.(".sbsong-artist-field"))refreshArtistPicker(false);
   if(state.genrePickerOpen&&!event.target.closest?.(".sbsong-genre-field"))refreshGenrePicker(false);
 });
 document.addEventListener("change",event=>{
   if(view.nav==="songs"&&!document.getElementById("sb-vue-song-editor")?.hasAttribute("data-v-app")&&event.target?.id==="sbsong-genre-family"){
     state.genreFamily=event.target.value;state.genreShowAll=true;refreshGenrePicker(true);
   }
 });
 document.addEventListener("click",event=>{
   const b=event.target?.closest?.("[data-sbsong-action]");if(!b)return;
   const action=b.dataset.sbsongAction,id=b.dataset.id;
   if(action==="from-passport"){importPassport(id);return;}
   if(action==="open-library"){openLibrary();return;}
   if(action==="producer"){window.SUNOBOOM_PRODUCER?.openForSong?.(id);return;}
   if(action==="shared-home"){
     if(!window.SUNOBOOM_SHELL?.active)history.replaceState(null,"",location.pathname+location.search);state.shared=null;go("home");return;
   }
   if(action==="back"){go("account");return;}
   if(view.nav!=="songs")return;
   if(action==="version-add"){void addTake();return;}
   if(action==="version-play"){
     const song=get(state.selectedId);
     if(song&&songVersions(song).some(v=>v.id===b.dataset.versionId)){
       state.playVersionId=b.dataset.versionId;render();
     }
     return;
   }
   if(action==="version-main"){markMainTake(b.dataset.versionId);return;}
   if(action==="version-save"){editTakeDetails(b.dataset.versionId);return;}
   if(action==="version-remove"){void removeTake(b.dataset.versionId);return;}
   if(action==="compare-toggle"){state.compareOpen=!state.compareOpen;render();return;}
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
     const result=application.execute('songArtist.remove',{id});if(!result.ok){notify(result.error);return;}
     notify("Артист удалён из списка. Песни остались без изменений.");render();return;
   }
   if(action==="new"){resetCoverPreview();resetTakeView();state.genrePickerOpen=false;state.showArtistManager=false;state.editId=null;state.selectedId=null;state.showForm=true;state.notice="";render();return;}
   if(action==="cancel"){resetCoverPreview();state.showForm=false;state.editId=null;render();return;}
   if(action==="open"){resetTakeView();state.selectedId=id;state.showForm=false;state.notice="";render();return;}
   if(action==="close-detail"){resetTakeView();state.selectedId=null;state.confirmDelete=null;render();return;}
   if(action==="edit"){if(!get(id))return;resetCoverPreview();state.editId=id;state.selectedId=id;state.showForm=true;render();return;}
   if(action==="delete"){state.confirmDelete=id;render();return;}
   if(action==="delete-cancel"){state.confirmDelete=null;render();return;}
   if(action==="delete-confirm"){removeSong(id);return;}
   if(action==="share"){const song=get(id);if(song)shareCard(song);return;}
   if(action==="share-file"){const song=get(id);if(song)shareAudio(song,b.dataset.versionId);return;}
 });
 window.addEventListener("hashchange",()=>{if(window.SUNOBOOM_SHELL?.active)return;if(location.hash.startsWith(SHARE_PREFIX)||location.hash==="#view-songs")routeShare();});
 window.addEventListener("pagehide",()=>{coverEpoch++;resetCoverPreview();releaseAudio();coverURLs.releaseAll();downloadURLs.releaseAll();thumbs.clear();});
 function openCard(id){
    const song=get(id);
    if(!song)return false;
    resetCoverPreview();resetTakeView();
    if(!window.SUNOBOOM_SHELL?.active)history.replaceState(null,"",location.pathname+location.search+"#view-songs");
    view.nav="songs";state.selectedId=id;state.editId=null;state.showForm=false;state.showArtistManager=false;state.notice="";
    render();window.scrollTo({top:0,behavior:"instant"});return true;
  }
  window.SUNOBOOM_MY_SONGS=Object.freeze({version:"0.90",count:()=>library.records.length,
    getCards:library.getCards,
    routeState:()=>({songId:get(state.selectedId)?.id||'',editId:state.editId,form:state.showForm,manager:state.showArtistManager,card:state.sharedCode||''}),
    restoreRoute:route=>{resetCoverPreview();resetTakeView();state.sharedCode=route.card||'';if(route.nav==='sharedSong'){state.shared=decodeCard(route.card);view.nav='sharedSong';render();return true;}state.selectedId=get(route.songId)?.id||null;state.editId=get(route.editId)?.id||null;state.showForm=!!route.form&&(!route.editId||!!state.editId);state.showArtistManager=!!route.manager;state.notice='';view.nav='songs';render();return true;},layoutState:()=>({form:state.showForm,manager:!state.showForm&&state.showArtistManager,detail:!state.showForm&&!!get(state.selectedId),notice:state.notice}),
    openCard,openLibrary,decodeCard});
 if(!routeShare())render();
 window.SUNOBOOM_WORKSPACE_UI?.register('songs-header',()=>({kind:'songs-header',count:library.records.length,versions:library.records.reduce((n,s)=>n+songVersions(s).length,0),artists:customArtists().length}));
 window.SUNOBOOM_WORKSPACE_UI?.register('songs-search',()=>({kind:'songs-search',query:document.getElementById('sbsong-search')?.value??state.search}));
})();
