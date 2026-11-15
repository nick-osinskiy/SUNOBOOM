/* Song workflow commands and records, independent of the interface. */
(function(root){'use strict';
function create({workspace,getSongs=()=>[],now=()=>Date.now(),random=()=>Math.random()}){
const data=workspace.state;
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

const trim=(x,n=140)=>String(x??'').replace(/[\u0000-\u001f]/g,' ').trim().slice(0,n);
const items=()=>Array.isArray(data.productions)?data.productions.filter(x=>x&&typeof x==='object'&&typeof x.id==='string'):[];
const find=id=>items().find(x=>x.id===id)||null;
const songCards=getSongs;
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

const event=(message,kind='note')=>({at:now(),kind,text:trim(message,350)});
const ok=(value,message='',existing=false)=>({ok:true,value,message,existing});
const fail=error=>({ok:false,error});
function update(id,patch,description,kind='change'){
const before=find(id),next={...before,...patch,updatedAt:now(),history:[event(description,kind),...(Array.isArray(before.history)?before.history:[])].slice(0,80)};
data.productions=items().map(x=>x.id===id?next:x);return ok(next);
}
function run(name,p){
if(name==='create'){
 const {type,id}=p,src=type&&id?resource(type,id):null;
 if(type&&id&&!src)return fail('Исходный материал не найден.');
 const key={song:'songId',passport:'passportId',idea:'ideaId',generated:'generatedIdeaId',project:'projectId',prompt:'promptId'}[type];
 const existing=key&&id?items().find(w=>w[key]===id):null;
 if(existing)return ok(existing,'Эта работа уже есть в «Мастере».',true);
 const links=seedRecord(type,id),linked=items().find(w=>['songId','passportId'].some(k=>links[k]&&w[k]===links[k]));
 if(linked)return ok(linked,'Открыта существующая рабочая карточка этой песни.',true);
 const duplicate=conflict(links,null);if(duplicate)return fail(duplicate);
 const title=trim(p.title||resourceName(src,type)||'',120);
 if(!title||(!src&&title==='Без названия'))return fail('Укажи название будущей песни.');
 const base='production-'+now().toString(36)+'-'+random().toString(36).slice(2,8);let fresh=base,n=0;while(find(fresh))fresh=base+'-'+(++n);
 const rec={id:fresh,title,artist:trim(src?.artist||'',120),projectId:'',ideaId:'',generatedIdeaId:'',promptId:'',passportId:'',songId:'',...links,steps:initSteps(),notes:'',arrangementDraft:null,history:[event('Начата работа над песней «'+title+'»','create')],createdAt:now(),updatedAt:now()};
 data.productions=[rec,...items()];return ok(rec);
}
const w=find(p.id);if(!w)return fail('Рабочая карточка не найдена.');
if(name==='remove'){data.productions=items().filter(x=>x.id!==p.id);return ok(w);}
if(name==='links'){
 const links=Object.fromEntries(LINKS.map(([key])=>[key,String(p[key]||'')])),dup=conflict(links,w.id);if(dup)return fail(dup);
 const changes=LINKS.filter(([key])=>(w[key]||'')!==links[key]).map(([,title])=>title);
 if(!changes.length)return fail('Связи не изменились.');return update(w.id,links,'Обновлены связи: '+changes.join(', '),'links');
}
if(name==='details'){
 const title=trim(p.title,120),artist=trim(p.artist,120),notes=trim(p.notes,3500);if(!title)return fail('Укажи название песни.');
 if(title===w.title&&artist===(w.artist||'')&&notes===(w.notes||''))return fail('Изменений нет.');
 return update(w.id,{title,artist,notes},'Изменены название, исполнитель или продюсерские заметки','details');
}
if(name==='note'){const text=trim(p.text,350);return text?update(w.id,{},'Заметка: '+text,'note'):fail('Напиши, что изменилось в работе.');}
if(name==='stage'){
 if(!STEPS.some(x=>x[0]===p.step)||!STATUSES.some(x=>x[0]===p.status))return fail('Неизвестный этап или статус.');
 if(currentStatus(w,p.step)===p.status)return ok(w,'',true);
 return update(w.id,{steps:{...w.steps,[p.step]:p.status}},'Этап «'+stageLabel(p.step)+'»: '+statusLabel(p.status),'stage');
}
if(name==='arrangement.capture'){
 if(!Array.isArray(p.draft?.blocks)||!p.draft.blocks.length)return fail('Сначала собери аранжировку в Suno Studio.');
 const draft=JSON.parse(JSON.stringify({...p.draft,savedAt:now(),duration:trim(p.duration,120)}));
 return update(w.id,{arrangementDraft:draft},'Сохранён снимок аранжировки: '+draft.blocks.length+' блоков','arrangement');
}
if(name==='arrangement.restored')return update(w.id,{},'Аранжировка восстановлена в рабочем конструкторе Studio','arrangement');
return fail('Неизвестная команда Мастера.');
}
function execute(name,payload={}){
const previous=data.productions;
try{const result=run(name,payload);if(result.ok&&!result.existing)workspace.persist();return result;}
catch(cause){data.productions=previous;return {ok:false,code:'storage',error:'Не удалось сохранить. Проверь свободное место в браузере.',cause};}
}
return Object.freeze({execute,items,find,resource,listFor,resourceName,seedRecord,currentStatus,completed,nextStep,STEPS,STATUSES,LINKS});
}
root.SUNOBOOM_PRODUCTIONS_FACTORY=Object.freeze({create});
})(globalThis);
