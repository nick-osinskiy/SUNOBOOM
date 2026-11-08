/* SUNOBOOM v0.90 · Producer Center — unified song workflow over existing materials.
   Non-destructive: production records are references; lyrics, audio, passports and prompts
   retain their original storage. Browser-only, no fake cloud sync or Suno generation. */
(function installProducerCenter(){
 "use strict";
 if(typeof data!=="object"||typeof account!=="function"||typeof render!=="function"||typeof chrome!=="function"||typeof go!=="function")return;

 const STEPS=[
   ["idea","Идея","Замысел, сюжет и направление"],
   ["lyrics","Текст","Слова, рифмы, теги исполнения"],
   ["arrangement","Аранжировка","Структура, инструменты, динамика"],
   ["generation","Генерация","Промпт и генерации в Suno"],
   ["listening","Прослушивание","Аудиоверсии, отбор, A/B"],
   ["release","Релиз","Метаданные, издательство, дата"]
 ];
 const STATUSES=[["todo","Не начато"],["working","В работе"],["done","Готово"]];
 const LINKS=[["projectId","Мой проект","project"],["ideaId","Идея и текст","idea"],
   ["generatedIdeaId","Идея из Idea Lab","generated"],["promptId","Промпт Suno","prompt"],
   ["passportId","Паспорт трека","passport"],["songId","Карточка «Мои песни»","song"]];
 const state={selectedId:null,query:"",notice:""};
 const e=x=>escapeHTML(String(x??""));
 const trim=(x,n=140)=>String(x??"").replace(/[\u0000-\u001f]/g," ").trim().slice(0,n);
 const items=()=>Array.isArray(data.productions)?data.productions.filter(x=>x&&typeof x==="object"&&typeof x.id==="string"):[];
 const find=id=>items().find(x=>x.id===id)||null;
 const dates=v=>{const d=new Date(v);return Number.isFinite(d.getTime())?d.toLocaleString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"Дата неизвестна";};
 const songCards=()=>window.SUNOBOOM_MY_SONGS?.getCards?.()||[];
 const resource=(type,id)=>{
   if(!id)return null;
   if(type==="song")return songCards().find(x=>x.id===id)||null;
   const source={project:data.projects,idea:data.manualIdeas,generated:data.savedGeneratedIdeas,
     prompt:data.savedPrompts,passport:data.tracks}[type];
   return Array.isArray(source)?source.find(x=>String(x?.id)===String(id))||null:null;
 };
 const resourceName=(x,type)=>trim(x?.title||x?.name||(type==="prompt"?x?.genre:"")||"Без названия",120);
 const listFor=type=>{
   if(type==="song")return songCards();
   return {project:data.projects,idea:data.manualIdeas,generated:data.savedGeneratedIdeas,
      prompt:data.savedPrompts,passport:data.tracks}[type]||[];
 };
 function notice(message){state.notice=message;if(typeof toast==="function")toast(message);}
 function write(next){
   const previous=data.productions;
   data.productions=next;
   try{localStorage.setItem("sunoboom-v1",JSON.stringify(data));return true;}
   catch(error){data.productions=previous;notice("Не удалось сохранить. Проверь свободное место в браузере.");return false;}
 }
 const event=(message,kind="note")=>({at:Date.now(),kind,text:trim(message,350)});
 function update(id,patch,description,kind="change"){
   const before=find(id);if(!before)return false;
   const next={...before,...patch,updatedAt:Date.now(),
      history:description?[event(description,kind),...(Array.isArray(before.history)?before.history:[])].slice(0,80):before.history||[]};
   if(!write(items().map(x=>x.id===id?next:x)))return false;
   state.selectedId=id;return true;
 }
 function initSteps(){return Object.fromEntries(STEPS.map(x=>[x[0],"todo"]));}
 function currentStatus(record,step){const value=record?.steps?.[step];return STATUSES.some(x=>x[0]===value)?value:"todo";}
 const completed=record=>STEPS.filter(s=>currentStatus(record,s[0])==="done").length;
 const nextStep=record=>STEPS.find(s=>currentStatus(record,s[0])!=="done")||null;
 const stageLabel=key=>STEPS.find(x=>x[0]===key)?.[1]||key;
 const statusLabel=key=>STATUSES.find(x=>x[0]===key)?.[1]||"Не начато";
 function seedRecord(type,id){
   const src=resource(type,id);
   if(!src)return {};
   const rec={};
   if(type==="project")rec.projectId=id;
   if(type==="idea")rec.ideaId=id;
   if(type==="generated")rec.generatedIdeaId=id;
   if(type==="prompt")rec.promptId=id;
   if(type==="passport"){
     Object.assign(rec,{passportId:id,projectId:src.projectId||"",ideaId:src.ideaId||"",promptId:src.promptId||""});
     const song=songCards().find(x=>x.passportId===id);
     if(song)rec.songId=song.id;
   }
   if(type==="song"){
     rec.songId=id;
     if(src.passportId){
       rec.passportId=src.passportId;
       const passport=resource("passport",src.passportId);
       if(passport){rec.projectId=passport.projectId||"";rec.ideaId=passport.ideaId||"";rec.promptId=passport.promptId||"";}
     }
   }
   if(type==="idea"){
     const related=(Array.isArray(data.tracks)?data.tracks:[]).filter(t=>t.ideaId===id);
     if(related.length===1)Object.assign(rec,seedRecord("passport",related[0].id));
   }
   return rec;
 }
 function conflict(links,exceptId){
   for(const key of ["songId","passportId"]){
     if(links[key]&&items().some(x=>x.id!==exceptId&&x[key]===links[key]))return key==="songId"?"Эта карточка песни уже привязана к другой работе.":"Этот паспорт уже связан с другой работой.";
   }
   return "";
 }
 function open(id){
   if(!find(id))return;
   state.selectedId=id;state.notice="";
   go("producer");
   window.scrollTo({top:0,behavior:"instant"});
 }
 function create(type,id,titleOverride){
   const src=type&&id?resource(type,id):null;
   if(type&&id&&!src){notice("Исходный материал не найден.");return;}
   const key={song:"songId",passport:"passportId",idea:"ideaId",generated:"generatedIdeaId",project:"projectId",prompt:"promptId"}[type];
   if(key&&id){
     const existing=items().find(w=>w[key]===id);
     if(existing){open(existing.id);notice("Эта работа уже есть в «Мастере».");return;}
   }
   const links=seedRecord(type,id);
   const alreadyLinked=items().find(w=>["songId","passportId"].some(k=>links[k]&&w[k]===links[k]));
   if(alreadyLinked){open(alreadyLinked.id);notice("Открыта существующая рабочая карточка этой песни.");return;}
   const dup=conflict(links,null);
   if(dup){notice(dup);return;}
   const title=trim(titleOverride||resourceName(src,type)||"",120);
   if(!title||(!src&&title==="Без названия")){notice("Укажи название будущей песни.");return;}
   const now=Date.now();
   const rec={id:"production-"+now.toString(36)+"-"+Math.random().toString(36).slice(2,8),
     title,artist:trim(src?.artist||"",120),projectId:"",ideaId:"",generatedIdeaId:"",promptId:"",
     passportId:"",songId:"",...links,steps:initSteps(),notes:"",arrangementDraft:null,
     history:[event("Начата работа над песней «"+title+"»","create")],createdAt:now,updatedAt:now};
   if(!write([rec,...items()]))return;
   state.selectedId=rec.id;state.query="";state.notice="Новая рабочая карточка создана.";
   go("producer");window.scrollTo({top:0,behavior:"instant"});
 }
 function options(type,value){
   const list=listFor(type),selected=String(value||"");
   const rows=['<option value="">Без связи</option>'];
   if(selected&&!list.some(x=>String(x.id)===selected))rows.push('<option value="'+e(selected)+'" selected>Связанный материал сейчас недоступен</option>');
   rows.push(...list.map(x=>'<option value="'+e(x.id)+'"'+(String(x.id)===selected?' selected':'')+'>'+e(resourceName(x,type))+'</option>'));
   return rows.join("");
 }
 function importOptions(){
   const groups=[["passport","Паспорта треков"],["song","Мои песни"],["idea","Мои идеи"],["generated","Идеи из Idea Lab"],["project","Мои проекты"]];
   let html='<option value="">Новая песня без привязки</option>';
   for(const [type,title] of groups){
     const list=listFor(type);
     if(!list.length)continue;
     html+='<optgroup label="'+e(title)+'">'+list.map(x=>'<option value="'+e(type+":"+x.id)+'">'+e(resourceName(x,type))+'</option>').join("")+'</optgroup>';
   }
   return html;
 }
 function materialsStatus(w){
   const idea=resource("idea",w.ideaId),generated=resource("generated",w.generatedIdeaId);
   const prompt=resource("prompt",w.promptId),song=resource("song",w.songId),passport=resource("passport",w.passportId);
   const arrangement=w.arrangementDraft?.blocks?.length||0;
   return [
     ["idea",!!(idea||generated||passport),"Связана идея / паспорт"],
     ["lyrics",!!(idea?.lyrics||idea?.sunoLyrics||passport?.lyricsDraft),"Текст найден в исходных материалах"],
     ["arrangement",arrangement>0,"Снимок аранжировки: "+arrangement+" блоков"],
     ["generation",!!(prompt?.text||idea?.sunoStyle||passport?.stylePrompt),"Есть сохранённый Style / промпт"],
     ["listening",!!(song?.hasAudio&&song.versionCount>0),"Аудиоверсий: "+(song?.versionCount||0)],
     ["release",!!(passport?.submittedAt||passport?.releaseAt||passport?.status==="released"),"Данные релиза есть в паспорте"]
   ];
 }
 function cards(){
   const q=state.query.trim().toLocaleLowerCase("ru");
   const found=items().slice().sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0))
     .filter(w=>[w.title,w.artist,resource("song",w.songId)?.title,resource("project",w.projectId)?.title]
       .join(" ").toLocaleLowerCase("ru").includes(q));
   return found.length?found.map(w=>{
     const done=completed(w),percent=Math.round(done/STEPS.length*100),active=w.id===state.selectedId;
     const next=nextStep(w);
     return '<button type="button" class="sbpc-song'+(active?' active':'')+'" data-pc-action="open" data-id="'+e(w.id)+'" aria-pressed="'+active+'">'+
       '<span class="sbpc-song-main"><strong>'+e(w.title||"Без названия")+'</strong><span>'+e(w.artist||"Исполнитель не указан")+'</span></span>'+
       '<span class="sbpc-song-meta"><b>'+done+'/'+STEPS.length+'</b><small>'+e(next?"Следующий этап: "+next[1]:"Все этапы отмечены готовыми")+'</small></span>'+
       '<span class="sbpc-tiny-progress"><i style="width:'+percent+'%"></i></span></button>';
   }).join(""):'<p class="sbpc-empty">Поиск не дал результатов. Измени запрос или создай новую рабочую карточку.</p>';
 }
 // Read-only Vue list snapshot, derived from existing browser-owned data.
 function producerListSnapshot(){
   const records=items().slice().sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0));
   return {
     query:state.query,
     selectedId:state.selectedId,
     hasRecords:records.length>0,
     records:records.map(w=>{
       const done=completed(w),next=nextStep(w);
       return {
         id:w.id,title:w.title||"Без названия",
         artist:w.artist||"Исполнитель не указан",
         done,total:STEPS.length,
         nextLabel:next?.[1]||"",
         percent:Math.round(done/STEPS.length*100),
         searchText:[w.title,w.artist,resource("song",w.songId)?.title,
           resource("project",w.projectId)?.title].join(" ")
       };
     })
   };
 }
 window.SUNOBOOM_LEGACY_PRODUCER_LIST=Object.freeze({
   snapshot:producerListSnapshot
 });
 function openButton(type,id,label){
   if(!id)return "";
   const found=resource(type,id);
   if(!found)return '<span class="sbpc-unavailable">Материал отсутствует</span>';
   return '<button type="button" data-pc-action="open-link" data-type="'+e(type)+'" data-id="'+e(id)+'">'+e(label||"Открыть")+' ↗</button>';
 }
 function stageButton(w,key){
   const links={idea:["idea",w.ideaId],lyrics:["idea",w.ideaId],arrangement:["studio",""],
     generation:["studio",""],listening:["song",w.songId],release:["passport",w.passportId]};
   const item=links[key]||["studio",""];
   return '<button type="button" data-pc-action="open-stage" data-step="'+e(key)+'">Открыть инструмент ↗</button>';
 }
 function progressPanel(w){
   const done=completed(w),percent=Math.round(done/STEPS.length*100),checks=materialsStatus(w);
   return '<section class="sbpc-panel"><header class="sbpc-panel-head"><h3>Маршрут песни</h3><span>'+done+' из 6 этапов</span></header>'+
     '<div class="sbpc-progress" role="progressbar" aria-label="Готовность работы" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+percent+'"><span style="width:'+percent+'%"></span></div>'+
     '<div class="sbpc-stages">'+STEPS.map(([key,title,desc],i)=>{
       const status=currentStatus(w,key),resourceInfo=checks[i];
       const options=STATUSES.map(([id,label])=>'<option value="'+id+'"'+(status===id?' selected':'')+'>'+label+'</option>').join("");
       return '<article class="sbpc-stage" data-status="'+status+'">'+
         '<div class="sbpc-stage-index">'+(status==="done"?"✓":i+1)+'</div>'+
         '<div class="sbpc-stage-body"><div class="sbpc-stage-title"><strong>'+e(title)+'</strong><small>'+e(desc)+'</small></div>'+
         '<div class="sbpc-stage-state">'+(resourceInfo[1]?'<span class="sbpc-resource-present">● '+e(resourceInfo[2])+'</span>':'<span class="sbpc-resource-empty">○ Подтверждённых материалов нет</span>')+'</div>'+
         '<div class="sbpc-stage-actions"><label>Готовность <select data-pc-stage="'+e(key)+'" aria-label="Этап '+e(title)+'">'+options+'</select></label>'+
         stageButton(w,key)+'</div></div></article>';
     }).join("")+'</div><p class="sbpc-help">Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.</p></section>';
 }
 function linksPanel(w){
   const linkRows=LINKS.map(([field,label,type])=>{
     const value=w[field]||"",found=resource(type,value);
     return '<div class="sbpc-link-field"><label for="sbpc-'+field+'">'+e(label)+'</label>'+
       '<select id="sbpc-'+field+'" data-pc-link="'+field+'">'+options(type,value)+'</select>'+
       (value?openButton(type,value,found?"Перейти к материалу":"Материал недоступен"):'')+'</div>';
   }).join("");
   return '<section class="sbpc-panel"><header class="sbpc-panel-head"><h3>Связанные материалы</h3><span>Без копирования данных</span></header>'+
     '<p class="sbpc-help">Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.</p>'+
     '<div class="sbpc-links">'+linkRows+'</div>'+
     '<button type="button" class="sbpc-main-btn" data-pc-action="save-links">Сохранить связи</button></section>';
 }
 function arrangementPanel(w){
   const draft=w.arrangementDraft, count=draft?.blocks?.length||0;
   return '<section class="sbpc-panel sbpc-arrangement"><header class="sbpc-panel-head"><h3>Аранжировка для этой песни</h3>'+
     '<span>'+(count?count+' блоков сохранено':'Снимок ещё не сохранён')+'</span></header>'+
     '<p class="sbpc-help">Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.</p>'+
     '<div class="sbpc-arrangement-actions">'+
       '<button type="button" data-pc-action="capture-arrangement">Сохранить текущую аранжировку</button>'+
       (count?'<button type="button" data-pc-action="restore-arrangement">Восстановить в Studio</button>':'')+
       '<button type="button" data-pc-action="open-stage" data-step="arrangement">Открыть аранжировщик ↗</button></div>'+
     (count?'<p class="sbpc-subnote">Сохранено: '+e(dates(draft.savedAt))+
       ' · '+count+' блоков · '+e(draft.duration||"длительность не рассчитана")+'</p>':"")+'</section>';
 }
 function historyPanel(w){
   const entries=Array.isArray(w.history)?w.history.slice(0,80):[];
   return '<section class="sbpc-panel"><header class="sbpc-panel-head"><h3>История работы</h3><span>'+entries.length+' событий</span></header>'+
     '<div class="sbpc-log-input"><input type="text" id="sbpc-history-note" maxlength="350" placeholder="Добавить запись: что изменилось или что сделать дальше">'+
     '<button type="button" data-pc-action="add-note">Добавить</button></div>'+
     (entries.length?'<ol class="sbpc-log">'+entries.map(log=>'<li><time>'+e(dates(log.at))+'</time><span>'+e(log.text||"Обновление")+'</span></li>').join("")+'</ol>':'<p class="sbpc-empty">История пока пуста.</p>')+
     '</section>';
 }
 function detail(w){
   const done=completed(w),next=nextStep(w),project=resource("project",w.projectId);
   return '<div class="sbpc-workspace"><section class="sbpc-panel sbpc-song-head">'+
     '<div class="sbpc-head-top"><span class="sbpc-kicker">КАРТОЧКА ПРОДЮСИРОВАНИЯ</span><span class="sbpc-completion">'+Math.round(done/STEPS.length*100)+'% готовности</span></div>'+
     '<h2>'+e(w.title||"Без названия")+'</h2>'+
     '<p>'+e(w.artist||"Исполнитель пока не указан")+(project?" · "+e(project.title):"")+'</p>'+
     '<p class="sbpc-next">'+(next?"Следующий этап: "+e(next[1]):"Все этапы отмечены готовыми")+'</p>'+
     '<div class="sbpc-meta-editor"><label>Название песни<input type="text" id="sbpc-title" maxlength="120" value="'+e(w.title||"")+'"></label>'+
       '<label>Артист / проект<input type="text" id="sbpc-artist" maxlength="120" value="'+e(w.artist||"")+'"></label>'+
       '<label class="sbpc-wide">Продюсерские заметки<textarea id="sbpc-notes" rows="3" maxlength="3500" placeholder="Что важно сохранить об этой песне?">'+e(w.notes||"")+'</textarea></label></div>'+
     '<div class="sbpc-head-actions"><button type="button" class="sbpc-main-btn" data-pc-action="save-details">Сохранить карточку</button>'+
       '<button type="button" class="sbpc-delete-btn" data-pc-action="delete">Удалить рабочую карточку</button></div>'+
     '<p class="sbpc-help">Удаление рабочей карточки не удаляет идеи, паспорта, промпты и аудио.</p></section>'+
     progressPanel(w)+linksPanel(w)+arrangementPanel(w)+historyPanel(w)+'</div>';
 }
 function page(){
   const records=items();
   const selected=find(state.selectedId)||records.slice().sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0))[0]||null;
   if(selected)state.selectedId=selected.id;
   return '<div class="sbpc-page">'+
     '<header class="sbpc-hero"><span class="sbpc-kicker">SUNOBOOM · РАБОЧЕЕ ПРОСТРАНСТВО</span>'+
       '<h1>Мастер <span>✦</span></h1><p>От идеи до релиза — единая рабочая карточка песни. Материалы связаны с существующими инструментами SUNOBOOM.</p>'+
       '<div class="sbpc-hero-stats"><span><strong>'+records.length+'</strong> песен в работе</span>'+
       '<span><strong>'+records.filter(x=>completed(x)===STEPS.length).length+'</strong> полностью пройдено</span>'+
       '<span>Хранение: этот браузер</span></div></header>'+
     '<section class="sbpc-create"><div><h2>Начать работу над песней</h2><p>Создай новую карточку или выбери существующую идею, песню либо паспорт.</p></div>'+
       '<div class="sbpc-create-controls"><input type="text" id="sbpc-new-title" maxlength="120" placeholder="Название новой песни (можно оставить пустым при выборе материала)">'+
       '<select id="sbpc-new-source" aria-label="Исходный материал">'+importOptions()+'</select>'+
       '<button type="button" class="sbpc-main-btn" data-pc-action="create">+ Создать рабочую карточку</button></div></section>'+
     '<div class="sbpc-layout"><aside class="sbpc-sidebar"><div class="sbpc-side-heading"><h2>Песни ('+records.length+')</h2>'+
       '<input id="sbpc-search" type="search" value="'+e(state.query)+'" placeholder="Найти песню или артиста" aria-label="Поиск по песням"></div>'+
       '<div id="sbpc-list" class="sbpc-song-list" data-sb-vue-producer-list>'+(records.length?cards():'<p class="sbpc-empty">Пока нет рабочих карточек. Начни с первой песни выше.</p>')+'</div></aside>'+
       (selected?detail(selected):'<div class="sbpc-empty-state"><strong>Пока нет песен в работе</strong>'+
       '<p>Мастер объединяет уже созданные идеи, текст, аранжировку, генерации, прослушивание и релизы.</p></div>')+
     '</div><p class="sbpc-privacy">🔒 Локальная работа: синхронизации между устройствами нет. Аудиофайлы остаются в «Мои песни»; сам раздел «Мастер» хранит только ссылки, этапы, заметки, историю и снимок аранжировки.</p></div>';
 }
 function backTo(type,id){
   if(type==="idea"&&resource(type,id)){view.editIdea=id;go("myideas");document.getElementById("idea-editor")?.scrollIntoView({block:"start"});return;}
   if(type==="generated"){go("myideas");return;}
   if(type==="project"&&resource(type,id)){view.selectedProject=id;go("projects");return;}
   if(type==="prompt"&&resource(type,id)){view.editPrompt=id;go("myprompts");document.getElementById("prompt-editor")?.scrollIntoView({block:"start"});return;}
   if(type==="passport"&&resource(type,id)){view.sbTrackSelected=id;view.sbTrackEdit=null;go("tracks");return;}
   if(type==="song"&&resource(type,id)){window.SUNOBOOM_MY_SONGS?.openCard?.(id);return;}
   if(type==="studio"){go("studio");return;}
   notice("Связанный материал не найден.");
 }
 function stageNavigate(step){
   const w=find(state.selectedId);if(!w)return;
   if(step==="idea"){
     if(w.ideaId&&resource("idea",w.ideaId))backTo("idea",w.ideaId);
     else if(w.generatedIdeaId)backTo("generated",w.generatedIdeaId);
     else go("myideas");
   }else if(step==="lyrics"){
     if(w.ideaId&&resource("idea",w.ideaId))backTo("idea",w.ideaId);else go("myideas");
   }else if(step==="arrangement"||step==="generation")go("studio");
   else if(step==="listening"){
     if(w.songId&&resource("song",w.songId))backTo("song",w.songId);
     else window.SUNOBOOM_MY_SONGS?.openLibrary?.();
   }else if(step==="release"){
     if(w.passportId&&resource("passport",w.passportId))backTo("passport",w.passportId);else go("tracks");
   }
 }
 function saveLinks(){
   const w=find(state.selectedId);if(!w)return;
   const links={};
   for(const [field] of LINKS)links[field]=document.getElementById("sbpc-"+field)?.value||"";
   const duplicate=conflict(links,w.id);if(duplicate){notice(duplicate);return;}
   const changes=LINKS.filter(([field])=>(w[field]||"")!==links[field]).map(([,title])=>title);
   if(!changes.length){notice("Связи не изменились.");return;}
   if(update(w.id,links,"Обновлены связи: "+changes.join(", "),"links")){state.notice="Связи сохранены.";render();}
 }
 function saveDetails(){
   const w=find(state.selectedId);if(!w)return;
   const title=trim(document.getElementById("sbpc-title")?.value,120);
   if(!title){notice("Укажи название песни.");return;}
   const artist=trim(document.getElementById("sbpc-artist")?.value,120);
   const notes=trim(document.getElementById("sbpc-notes")?.value,3500);
   if(title===w.title&&artist===(w.artist||"")&&notes===(w.notes||"")){notice("Изменений нет.");return;}
   if(update(w.id,{title,artist,notes},"Изменены название, исполнитель или продюсерские заметки","details")){state.notice="Карточка сохранена.";render();}
 }
 function saveSnapshot(){
   const w=find(state.selectedId),tool=window.SUNOBOOM_ARRANGER;
   if(!w||typeof tool?.exportDraft!=="function"){notice("Аранжировщик недоступен.");return;}
   const raw=tool.exportDraft();
   if(!raw?.blocks?.length){notice("Сначала собери аранжировку в Suno Studio.");return;}
   if(w.arrangementDraft?.blocks?.length&&!confirm("Заменить сохранённый снимок аранжировки этой песни текущим черновиком Studio?"))return;
   const draft={...raw,savedAt:Date.now(),duration:tool.getDurationEstimate?.()||""};
   if(update(w.id,{arrangementDraft:draft},"Сохранён снимок аранжировки: "+draft.blocks.length+" блоков","arrangement")){
     state.notice="Аранжировка сохранена для этой песни.";render();
   }
 }
 function restoreSnapshot(){
   const w=find(state.selectedId),tool=window.SUNOBOOM_ARRANGER;
   if(!w?.arrangementDraft?.blocks?.length||typeof tool?.importDraft!=="function")return;
   if(!confirm("Загрузить сохранённую аранжировку «"+w.title+"» в Suno Studio? Текущий общий черновик Studio будет заменён. Другие рабочие карточки не изменятся."))return;
   if(!tool.importDraft(w.arrangementDraft)){notice("Не удалось восстановить аранжировку в Studio.");return;}
   update(w.id,{},"Аранжировка восстановлена в рабочем конструкторе Studio","arrangement");
   go("studio");notice("Аранжировка этой песни загружена в Studio.");
 }
 function createFromForm(){
   const source=document.getElementById("sbpc-new-source")?.value||"";
   const title=trim(document.getElementById("sbpc-new-title")?.value,120);
   const separator=source.indexOf(":");
   if(separator>=0)create(source.slice(0,separator),source.slice(separator+1),title);
   else if(title)create(null,null,title);else notice("Укажи название или выбери исходный материал.");
 }
 function deleteCurrent(){
   const w=find(state.selectedId);if(!w)return;
   if(!confirm("Удалить рабочую карточку «"+w.title+"»? Идеи, паспорта, аудио и промпты сохранятся в своих разделах."))return;
   if(write(items().filter(x=>x.id!==w.id))){state.selectedId=null;state.notice="Рабочая карточка удалена. Исходные материалы сохранены.";render();}
 }
 // Navigation: primary creative tool, also accessible as a tile in Account.
 if(Array.isArray(navs)&&!navs.some(x=>x[0]==="producer")){
   const pos=navs.findIndex(x=>x[0]==="account");
   navs.splice(pos<0?navs.length:pos,0,["producer","Мастер","studio"]);
 }
 const previousAccount=account;
 account=function(){
   const html=previousAccount.apply(this,arguments),anchor='<div class="account-grid">';
   if(!html.includes(anchor))return html;
   const tile='<button type="button" class="account-tile sbpc-account-tile" data-action="nav" data-nav="producer">'+
      '<span class="sbpc-account-icon">◉</span><strong>Мастер</strong>'+
      '<span>Все песни: от идеи до релиза</span><b class="tile-count">'+items().length+'</b>'+
      '<span class="account-tile-arrow" aria-hidden="true">↗</span></button>';
   return html.replace(anchor,anchor+tile);
 };
 // Link entry points to current Passport and manual idea cards.
 if(typeof sbTrackDetail==="function"){
   const oldPassport=sbTrackDetail;
   sbTrackDetail=function(t){
     const html=oldPassport.apply(this,arguments),anchor='<div class="sb-track-buttons">';
     return t?.id&&html.includes(anchor)?html.replace(anchor,anchor+
       '<button type="button" class="btn ghost small" data-action="pc-from-passport" data-id="'+e(t.id)+'">🎛 Мастер</button>'):html;
   };
 }
 if(typeof myideas==="function"){
   const oldIdeas=myideas;
   myideas=function(){
     const html=oldIdeas.apply(this,arguments);
     return html.replace(/(<button class="btn ghost small" data-action="edit-manual-idea" data-id="([^"]+)">Изменить<\/button>)/g,
       (_all,button,id)=>button+'<button class="btn ghost small" data-action="pc-from-idea" data-id="'+e(id)+'">Открыть в «Мастере»</button>');
   };
 }
 const oldRender=render;
 render=function(){
   if(view.nav==="producer"){document.getElementById("app").innerHTML=chrome(page());return;}
   return oldRender.apply(this,arguments);
 };
 // Passport/Idea buttons use the established data-action dispatcher.
 const oldAction=handleAction;
 handleAction=function(button){
   if(button.dataset.action==="pc-from-passport"){create("passport",button.dataset.id);return;}
   if(button.dataset.action==="pc-from-idea"){create("idea",button.dataset.id);return;}
   return oldAction.apply(this,arguments);
 };
 document.addEventListener("click",ev=>{
   const target=ev.target?.closest?.("[data-pc-action]");if(!target)return;
   const action=target.dataset.pcAction,id=target.dataset.id;
   if(action==="open"){open(id);return;}
   if(view.nav!=="producer")return;
   if(action==="create"){createFromForm();return;}
   if(action==="save-details"){saveDetails();return;}
   if(action==="save-links"){saveLinks();return;}
   if(action==="open-link"){backTo(target.dataset.type,id);return;}
   if(action==="open-stage"){stageNavigate(target.dataset.step);return;}
   if(action==="capture-arrangement"){saveSnapshot();return;}
   if(action==="restore-arrangement"){restoreSnapshot();return;}
   if(action==="delete"){deleteCurrent();return;}
   if(action==="add-note"){
     const w=find(state.selectedId),text=trim(document.getElementById("sbpc-history-note")?.value,350);
     if(!w||!text){notice("Напиши, что изменилось в работе.");return;}
     if(update(w.id,{},"Заметка: "+text,"note")){state.notice="Запись добавлена в историю.";render();}
   }
 });
 document.addEventListener("change",ev=>{
   if(view.nav!=="producer"||!ev.target?.dataset?.pcStage)return;
   const key=ev.target.dataset.pcStage,status=ev.target.value,w=find(state.selectedId);
   if(!w||!STEPS.some(s=>s[0]===key)||!STATUSES.some(s=>s[0]===status))return;
   if(currentStatus(w,key)===status)return;
   const stages={...w.steps,[key]:status};
   if(update(w.id,{steps:stages},"Этап «"+stageLabel(key)+"»: "+statusLabel(status),"stage")){
     state.notice="Этап обновлён.";render();
   }
 });
 document.addEventListener("input",ev=>{
   if(view.nav!=="producer"||ev.target?.id!=="sbpc-search")return;
   state.query=ev.target.value;
   const list=document.getElementById("sbpc-list");
   // Vue listens for changes; legacy must never overwrite its DOM.
   if(list&&!list.hasAttribute("data-v-app"))list.innerHTML=cards();
   window.dispatchEvent(new CustomEvent("sunoboom:producer-search",{detail:{query:state.query}}));
 });
 document.addEventListener("keydown",ev=>{
   if(view.nav!=="producer"||ev.target?.id!=="sbpc-history-note"||ev.key!=="Enter")return;
   ev.preventDefault();document.querySelector('[data-pc-action="add-note"]')?.click();
 });
 window.SUNOBOOM_PRODUCER=Object.freeze({version:"0.90",count:()=>items().length,
   open,openForSong:id=>create("song",id),openForPassport:id=>create("passport",id),
   openForIdea:id=>create("idea",id),getRecords:()=>items().map(w=>({id:w.id,title:w.title,done:completed(w),updatedAt:w.updatedAt}))});
 // The base page renders before this module registers its nav entry. Refresh
 // the existing shell once at startup so both mobile and desktop menus show
 // "Мастер" immediately, without requiring the user to click another tab.
 if(view.nav==="producer" ||
    !document.querySelector('.mobile-nav [data-nav="producer"]') ||
    !document.querySelector('.side [data-nav="producer"]'))render();
})();
