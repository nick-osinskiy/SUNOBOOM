/* Original genre-mix calculations and canonical draft commands. */
(function(root){'use strict';function create({workspace,studio,getGenres,now=()=>Date.now(),random=()=>Math.random()}){
const data=workspace.state,GENRES=getGenres();
const MIN=5, MAX=4, LANGS=[['Russian','Русский'],['English','Английский'],['Spanish','Испанский'],['Kazakh','Казахский']];
const MOODS=[['energetic','Энергичное'],['melancholic','Меланхоличное'],['romantic','Романтичное'],['dark','Мрачное'],['uplifting','Воодушевляющее'],['dreamy','Мечтательное'],['playful','Игривое'],['epic','Эпическое'],['nostalgic','Ностальгическое']];
const VOCALS=[['male','Мужской'],['female','Женский'],['duet','Дуэт']];
const ENERGIES=[['soft','Мягкая'],['medium','Средняя'],['high','Мощная']];
const DEFAULT_SETTINGS={mood:'energetic',vocal:'female',language:'Russian',energy:'high',theme:'',autoTempo:true,tempo:115,noWhisper:true,noChoir:true,noIntro:true,noLive:true,noRasp:true};
const byId=id=>GENRES.find(g=>g.id===id);
const clone=x=>JSON.parse(JSON.stringify(x));
let working=null;
function distribute(total, values){
    const safe=values.map(v=>Math.max(0,Number(v)||0));
    const all=safe.reduce((a,b)=>a+b,0);
    const raw=safe.map(v=>all?total*v/all:total/safe.length);
    const ints=raw.map(Math.floor);
    let left=total-ints.reduce((a,b)=>a+b,0);
    const order=raw.map((v,i)=>({i,fract:v-ints[i]})).sort((a,b)=>b.fract-a.fract||a.i-b.i);
    for(let i=0;i<left;i++)ints[order[i].i]++;
    return ints;
  }
function normalize(rows){
    let filtered=[],seen=new Set();
    for(const r of Array.isArray(rows)?rows:[]){
      if(!r||!byId(r.id)||seen.has(r.id)||filtered.length>=MAX)continue;
      seen.add(r.id);
      filtered.push({id:r.id,weight:Math.max(MIN,Math.min(100,Math.round(Number(r.weight)||MIN)))});
    }
    for(const preferred of ['afropop','synthpop',...GENRES.map(g=>g.id)]){
      if(filtered.length>=2)break;
      if(byId(preferred)&&!seen.has(preferred)){
        filtered.push({id:preferred,weight:50});seen.add(preferred);
      }
    }
    const extras=distribute(100-MIN*filtered.length,filtered.map(r=>Math.max(0,r.weight-MIN)));
    return filtered.map((r,i)=>({id:r.id,weight:MIN+extras[i]}));
  }
function initial(){
    const saved=data.mixerDraft;
    return {
      rows:normalize(saved?.rows||[{id:'afropop',weight:55},{id:'synthpop',weight:45}]),
      settings:{...DEFAULT_SETTINGS,...(saved?.settings&&typeof saved.settings==='object'?saved.settings:{})},
      title:typeof saved?.title==='string'?saved.title.slice(0,90):''
    };
  }
function state(){return working||(working=initial());}
function bpm(rows){
    const val=rows.reduce((sum,r)=>{
      const g=byId(r.id);return sum+(g?(Number(g.bpm?.[0]||90)+Number(g.bpm?.[1]||130))/2:110)*r.weight/100;
    },0);
    return Math.min(200,Math.max(65,Math.round(val)));
  }
function finalTempo(s=state()){
    return s.settings.autoTempo?bpm(s.rows):Math.max(65,Math.min(200,Math.round(Number(s.settings.tempo)||115)));
  }
function rebalance(index,newWeight){
    const s=state(),n=s.rows.length;
    const desired=Math.max(MIN,Math.min(100-MIN*(n-1),Math.round(Number(newWeight)||MIN)));
    const other=s.rows.map((r,i)=>i).filter(i=>i!==index);
    const shares=distribute(100-desired-MIN*(n-1),other.map(i=>Math.max(0,s.rows[i].weight-MIN)));
    s.rows[index].weight=desired;
    other.forEach((i,j)=>{s.rows[i].weight=MIN+shares[j]});
  }
function makePrompt(rows,settings){
    const picked=normalize(rows).map(r=>({g:byId(r.id),w:r.weight})).filter(r=>r.g).sort((a,b)=>b.w-a.w);
    const cfg={...DEFAULT_SETTINGS,...settings};
    const tempo=cfg.autoTempo?bpm(normalize(rows)):Math.max(65,Math.min(200,Number(cfg.tempo)||115));
    const voice=({male:'clear expressive male lead vocals',female:'clear expressive female lead vocals',duet:'clear male and female duet'})[cfg.vocal]||'clear lead vocals';
    const energy=({soft:'restrained intimate energy',medium:'balanced dynamic energy',high:'powerful high-energy chorus'})[cfg.energy]||'balanced energy';
    const intro='Original hybrid music production';
    const percentages='Genre blend targets: '+picked.map(x=>`${x.w}% ${x.g.name}`).join(' + ');
    const ending=[
      `${Math.round(tempo)} BPM`,`${String(cfg.mood).replace(/[^a-z-]/gi,'')} mood`,energy,voice,
      `${LANGS.some(x=>x[0]===cfg.language)?cfg.language:'Russian'} lyrics`,
      cfg.theme?.trim()?'song theme: '+String(cfg.theme).trim().slice(0,170):'',
      cfg.extra?.trim()?String(cfg.extra).trim().slice(0,220):'',
      cfg.noLive?'clean studio production, no crowd noise, no stage ambience':'',
      cfg.noWhisper?'no whispering':'',
      cfg.noChoir?'no choir':'',
      cfg.noRasp?'no raspy vocals':'',
      cfg.noIntro?'no long intro, start quickly':''
    ].filter(Boolean);
    const base=[intro,percentages,...ending].join(', ');
    let available=Math.max(0,999-base.length-3);
    const descriptors=[];
    for(let i=0;i<picked.length;i++){
      const x=picked[i];
      const terms=String(x.g.style||'').split(',').map(t=>t.trim()).filter(t=>t&&!/no crowd|no stage|no whisper|live ambience|clean studio|no choir|no rasp/i.test(t)).slice(0,i===0?4:2);
      const chunk=`${i===0?'Lead style':'Supporting texture'} (${x.w}%): ${terms.join(', ')}`;
      if(available<28)break;
      const text=chunk.length<=available?chunk:chunk.slice(0,available).replace(/\s+\S*$/,'');
      descriptors.push(text);available-=text.length+2;
    }
    return [intro,percentages,...descriptors,...ending].filter(Boolean).join(', ').slice(0,999).replace(/[,;.\s]+$/,'')+'.';
  }
function fresh(prefix,key){const base=prefix+now()+'-'+random().toString(36).slice(2,7);let id=base,n=0;while((data[key]||[]).some(x=>x.id===id))id=base+'-'+(++n);return id;}
function execute(name,p={}){
const previous=clone(state()),backup=Object.fromEntries(['mixerDraft','savedMixes','savedPrompts'].map(key=>[key,Object.getOwnPropertyDescriptor(data,key)]));
const s=state();let value;
const fail=error=>({ok:false,error});
try{
 if(name==='weight'){if(!s.rows[p.index])return fail('Жанр не найден.');rebalance(p.index,p.value);}
 else if(name==='title')s.title=String(p.value||'').slice(0,90);
 else if(name==='setting'){if(!Object.hasOwn(DEFAULT_SETTINGS,p.key)||typeof p.value!==typeof DEFAULT_SETTINGS[p.key]||p.key==='tempo'&&!Number.isFinite(p.value))return fail('Неизвестная настройка микса.');s.settings[p.key]=p.value;}
 else if(name==='genre'){if(!s.rows[p.index]||!byId(p.id)||s.rows.some((r,i)=>i!==p.index&&r.id===p.id))return fail('Этот жанр уже выбран');s.rows[p.index].id=p.id;}
 else if(name==='add'){
  if(s.rows.length>=MAX)return fail('Можно смешать не больше четырёх жанров');const next=GENRES.find(g=>!s.rows.some(r=>r.id===g.id));if(!next)return fail('Нет доступных жанров.');
  const old=s.rows.map(r=>({...r}));s.rows.push({id:next.id,weight:MIN});const additions=distribute(100-MIN*s.rows.length,old.map(r=>Math.max(0,r.weight-MIN)));old.forEach((r,i)=>{s.rows[i].weight=MIN+additions[i]});
 }else if(name==='remove'){if(s.rows.length<=2)return fail('Для микса нужно минимум два жанра');if(!s.rows[p.index])return fail('Жанр не найден.');s.rows.splice(p.index,1);s.rows=normalize(s.rows);}
 else if(name==='equal'){const weights=distribute(100,s.rows.map(()=>1));s.rows.forEach((r,i)=>{r.weight=weights[i]});}
 else if(name==='saveMix'){
 const title=s.title.trim()||s.rows.map(r=>byId(r.id).name).join(' + ');value={id:fresh('gm-','savedMixes'),title:title.slice(0,90),rows:clone(s.rows),settings:clone(s.settings),date:new Date(now()).toLocaleDateString('ru-RU')};data.savedMixes=[value,...(data.savedMixes||[])];
 }else if(name==='load'){
 const item=(data.savedMixes||[]).find(m=>m.id===p.id);if(!item)return fail('Сочетание не найдено.');working={rows:normalize(item.rows),settings:{...DEFAULT_SETTINGS,...item.settings},title:item.title};
 }else if(name==='delete')data.savedMixes=(data.savedMixes||[]).filter(m=>m.id!==p.id);
 else if(name==='savePrompt'){
 const title=s.title.trim()||'Гибрид: '+s.rows.map(r=>byId(r.id).name).join(' + ');value={id:fresh('gm-p-','savedPrompts'),title,genre:s.rows.map(r=>byId(r.id).name).join(' + '),mood:s.settings.mood,date:new Date(now()).toLocaleDateString('ru-RU'),text:makePrompt(s.rows,s.settings),source:'genre-mixer'};data.savedPrompts=[...(data.savedPrompts||[]),value];
 }else if(name==='toStudio'){
 studio.execute('patch',{mixerBlend:clone(s.rows),genre:s.rows[0].id,mood:s.settings.mood,vocal:s.settings.vocal,language:s.settings.language,energy:s.settings.energy,tempo:finalTempo(s),theme:s.settings.theme,extra:'',studio:!!s.settings.noLive,noWhisper:!!s.settings.noWhisper,noChoir:!!s.settings.noChoir,noIntro:!!s.settings.noIntro,mixerNoRasp:!!s.settings.noRasp});return {ok:true,value:studio.state};
 }else if(name!=='persist')return fail('Неизвестная команда микса.');
 if(p.persist!==false){data.mixerDraft=clone(state());workspace.persist();}
 return {ok:true,value:value||state()};
}catch(cause){working=previous;for(const [key,descriptor]of Object.entries(backup)){if(descriptor)Object.defineProperty(data,key,descriptor);else delete data[key];}return {ok:false,code:'storage',error:'Не удалось сохранить микс. Проверь свободное место в браузере.',cause};}
}
studio.setMixerCompiler(makePrompt);
return Object.freeze({execute,MIN,MAX,LANGS,MOODS,VOCALS,ENERGIES,DEFAULT_SETTINGS,byId,clone,distribute,normalize,initial,state,bpm,finalTempo,rebalance,makePrompt});
}
root.SUNOBOOM_MIXER_FACTORY=Object.freeze({create});})(globalThis);
