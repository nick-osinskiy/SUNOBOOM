/* SUNOBOOM 0.66 · Visual Arrangement Builder
   Additive Suno Studio instrument; local draft, manual export to existing builder.
   No external libraries, no changes to existing prompt/lyrics engines. */
(function installArrangementBuilder(){
  "use strict";
  if(typeof studio!=="function"||typeof builder==="undefined"||typeof promptValue!=="function"||typeof updateOutput!=="function")return;
  const KEY="sunoboom-arrangement-v066";
  const MAX_BLOCKS=64;
  const SECTION={
    intro:{ru:"Вступление",en:"Intro",icon:"◌"},
    verse:{ru:"Куплет",en:"Verse",icon:"≋"},
    prechorus:{ru:"Предприпев",en:"Pre-Chorus",icon:"↗"},
    chorus:{ru:"Припев",en:"Chorus",icon:"✦"},
    postchorus:{ru:"Постприпев",en:"Post-Chorus",icon:"↝"},
    bridge:{ru:"Бридж",en:"Bridge",icon:"◇"},
    build:{ru:"Разгон",en:"Build",icon:"⇡"},
    drop:{ru:"Дроп",en:"Drop",icon:"⚡"},
    breakdown:{ru:"Брейкдаун",en:"Breakdown",icon:"∿"},
    solo:{ru:"Соло",en:"Instrumental Solo",icon:"♬"},
    instrumental:{ru:"Инструментал",en:"Instrumental",icon:"♫"},
    finalchorus:{ru:"Финальный припев",en:"Final Chorus",icon:"★"},
    outro:{ru:"Завершение",en:"Outro",icon:"◦"},
    custom:{ru:"Свой блок",en:"Custom Section",icon:"✎"}
  };
  const VOICES={
    lead:{ru:"Основной вокал",en:"clear lead vocal"},
    female:{ru:"Женский вокал",en:"clear female lead vocal"},
    male:{ru:"Мужской вокал",en:"clear male lead vocal"},
    duet:{ru:"Дуэт",en:"lead vocal duet"},
    harmonies:{ru:"Вокальные гармонии",en:"layered vocal harmonies"},
    falsetto:{ru:"Фальцет",en:"smooth falsetto lead"},
    backing:{ru:"Бэк-вокал",en:"supporting backing vocals"},
    none:{ru:"Без вокала",en:"instrumental"}
  };
  const ENERGY={
    1:{ru:"Тихо",en:"minimal, intimate"},
    2:{ru:"Сдержанно",en:"restrained"},
    3:{ru:"Ровно",en:"steady"},
    4:{ru:"Мощно",en:"driving"},
    5:{ru:"Пик",en:"full power"}
  };
  const PRESETS={
    pop:{ru:"Поп — яркий припев",sections:[
      ["intro",2,4,"none","soft keys"],["verse",2,16,"lead","tight drums, bass"],["prechorus",3,8,"lead","rising synths"],["chorus",5,16,"harmonies","full drums, bright synths"],["verse",3,16,"lead","bass, crisp drums"],["chorus",5,16,"harmonies","full arrangement"],["bridge",2,8,"lead","piano, pads"],["finalchorus",5,16,"harmonies","full drums, wide synths"],["outro",1,4,"none","soft pads"]]},
    rock:{ru:"Рок — гитарная динамика",sections:[
      ["intro",3,4,"none","electric guitar riff"],["verse",3,16,"male","bass, dry drums"],["prechorus",4,8,"lead","rising guitars"],["chorus",5,16,"harmonies","distorted guitars, full drums"],["verse",3,16,"lead","bass, guitar"],["chorus",5,16,"harmonies","full band"],["solo",4,8,"none","electric guitar solo"],["finalchorus",5,16,"harmonies","big guitars"],["outro",2,4,"none","guitar decay"]]},
    ska:{ru:"Ска-панк — ритм и духовые",sections:[
      ["intro",3,4,"none","ska guitar offbeat, horns"],["verse",4,16,"lead","walking bass, offbeat guitar"],["chorus",5,16,"harmonies","punk drums, horns"],["verse",4,16,"lead","upstroke guitar, bass"],["chorus",5,16,"harmonies","punchy brass, drums"],["breakdown",2,8,"none","bass and skank guitar"],["finalchorus",5,16,"harmonies","full horn section"],["outro",4,4,"none","brass ending"]]},
    electronic:{ru:"Электроника — build / drop",sections:[
      ["intro",1,8,"none","atmospheric pads"],["verse",2,16,"female","pulsing bass"],["build",4,8,"backing","riser, snare rolls"],["drop",5,16,"none","driving kick, bass synth"],["breakdown",1,8,"female","minimal keys"],["build",4,8,"harmonies","rising synth arpeggio"],["drop",5,16,"none","wide synth hook"],["outro",2,8,"none","filtered bass"]]},
    epic:{ru:"Эпик — кинематографический подъём",sections:[
      ["intro",1,8,"none","solo strings"],["build",2,16,"none","low strings, pulse"],["verse",3,16,"none","cello ostinato"],["build",4,8,"none","brass rise, timpani"],["chorus",5,16,"none","full orchestra, big drums"],["breakdown",2,8,"none","soft piano, strings"],["finalchorus",5,16,"none","brass, choir-like synth pads"],["outro",2,8,"none","strings fading"]]},
    blank:{ru:"Базовый каркас",sections:[["intro",2,4,"none",""],["verse",3,16,"lead",""],["chorus",5,16,"harmonies",""],["outro",2,4,"none",""]]}
  };

  // Genre-aware choices are sourced from the existing Academy collection, not duplicated here.
  const GENRE_CHOICE_PREFIX="genre:";
  function genreChoices(){
    if(typeof GENRES==="undefined"||!Array.isArray(GENRES))return [];
    const seen=new Set();
    return GENRES.filter(g=>{
      if(!g||!g.id||!g.name||seen.has(g.id))return false;
      seen.add(g.id);return true;
    }).map(g=>({key:GENRE_CHOICE_PREFIX+g.id,ru:g.name,family:g.family||"Другие направления",genre:g}));
  }
  function choiceMeta(key){
    if(PRESETS[key])return {key,ru:PRESETS[key].ru,family:"Готовые шаблоны"};
    return genreChoices().find(c=>c.key===key)||null;
  }
  function genreArchetype(g){
    const name=(g.name+" "+g.family+" "+g.id).toLocaleLowerCase("ru");
    if(/(^|[^а-яa-z])ска(?=$|[^а-яa-z])|(^|[^a-z])ska(?=$|[^a-z])/.test(name))return "ska";
    if(/эпик|эпичес|кинематограф|саундтрек|оркестр|симфон|classical|cinematic|epic|orchestra/.test(name))return "epic";
    if(/электро|хаус|техно|транс|синти|драм-н-бейс|драм энд бейс|дабстеп|эмбиент|электрон|electro|techno|house|ambient|dubstep|trance|synth/.test(name))return "electronic";
    if(/рок|панк|метал|гранж|хардкор|rock|punk|metal|grunge/.test(name))return "rock";
    return "pop";
  }
  function genreSoundCues(g){
    const blocked=/^(no (crowd|stage|whisper|audience)|without |clean studio|polished studio|studio sound)/i;
    return String(g.style||"").split(",").map(x=>x.trim()).filter(x=>x&&!blocked.test(x)).slice(0,6);
  }
  function genrePresetBlocks(g){
    const base=PRESETS[genreArchetype(g)];
    const cues=genreSoundCues(g);
    return base.sections.map((row,i)=>{
      const block=makeBlock(...row);
      if(cues.length){
        const isBig=["chorus","finalchorus","drop"].includes(block.type);
        const selected=isBig?cues.slice(0,3):cues.slice(i%2, i%2+2);
        block.instruments=safeStr(selected.join(", ")||cues[0]);
      }
      return block;
    });
  }
  function choicePresetBlocks(name){
    if(PRESETS[name])return PRESETS[name].sections.map(row=>makeBlock(...row));
    const choice=choiceMeta(name);
    return choice&&choice.genre?genrePresetBlocks(choice.genre):PRESETS.pop.sections.map(row=>makeBlock(...row));
  }
  const esc=x=>escapeHTML(String(x??""));
  const safeStr=s=>String(s||"").replace(/[\[\]\r\n<>]/g," ").replace(/\s+/g," ").trim().slice(0,300);
  const safeTitle=s=>String(s||"").replace(/[\[\]<>\r\n:]/g," ").replace(/\s+/g," ").trim().slice(0,48);
  let serial=0;
  function makeBlock(type,energy,bars,vocal,instruments,customName="",instrumentsGenreId=""){
    return {id:"sba-"+(++serial),type:SECTION[type]?type:"verse",
      energy:Math.max(1,Math.min(5,Number(energy)||3)),
      bars:[2,4,8,12,16,24,32].includes(Number(bars))?Number(bars):8,
      vocal:VOICES[vocal]?vocal:"lead",instruments:safeStr(instruments),customName:safeTitle(customName),instrumentsGenreId:String(instrumentsGenreId||"").slice(0,90)};
  }
  function presetBlocks(name){return choicePresetBlocks(name);}
  const state={blocks:presetBlocks("pop"),activePreset:"pop",selectedPreset:"pop",presetFilter:"all",presetPending:null,insertAfter:null,transfer:null,applied:null,message:"",tab:"lyrics",expanded:true,dragId:null};
  const soundPicker={blockId:null,mode:"sounds",soundQuery:"",genreQuery:"",typingId:null,typingQuery:""};
  function load(){
    try{
      const raw=JSON.parse(localStorage.getItem(KEY)||"{}");
      if(!raw||!Array.isArray(raw.blocks)||raw.blocks.length>MAX_BLOCKS)return;
      state.blocks=raw.blocks.map(b=>makeBlock(b.type,b.energy,b.bars,b.vocal,b.instruments,b.customName,b.instrumentsGenreId));
      if(choiceMeta(raw.activePreset))state.activePreset=raw.activePreset;
      state.selectedPreset=state.activePreset;
    }catch(e){}
  }
  function save(){try{localStorage.setItem(KEY,JSON.stringify({version:1,blocks:state.blocks,activePreset:state.activePreset}));return true}catch(e){return false}}
  function nameFor(b,index){
    if(b.type==="custom")return safeTitle(b.customName)||"Custom Section";
    const en=SECTION[b.type].en;
    if(b.type!=="verse")return en;
    const count=state.blocks.slice(0,index+1).filter(x=>x.type==="verse").length;
    return en+" "+count;
  }
  function cues(b){
    const parts=[ENERGY[b.energy].en+" energy",VOICES[b.vocal].en];
    if(b.instruments)parts.push(safeStr(b.instruments));
    return parts.join(", ");
  }
  function generatedLyrics(){
    return state.blocks.map((b,i)=>"["+nameFor(b,i)+": "+cues(b)+"]").join("\n\n");
  }
  function lengthSeconds(){
    const tempo=Number(builder.tempo)||120;
    return Math.round(state.blocks.reduce((n,b)=>n+b.bars,0)*4*60/tempo);
  }
  function lengthString(){
    const seconds=lengthSeconds();
    return Math.floor(seconds/60)+":"+String(seconds%60).padStart(2,"0");
  }
  function stageName(b){return (b.type==="custom"?safeTitle(b.customName)||"custom section":SECTION[b.type].en).toLowerCase().replace("instrumental ","");}
  function shortDynamics(){
    const genre=choiceMeta(state.activePreset)?.genre;
    return (genre?"Genre: "+genre.name+". ":"")+"Arrangement: "+state.blocks.map(b=>stageName(b)+" "+b.energy+"/5").join(" > ")+".";
  }
  function fullDynamics(){
    const base=shortDynamics();
    const names=[...new Set(state.blocks.map(b=>safeStr(b.instruments)).filter(Boolean))].slice(0,4);
    const arc=state.blocks.some(b=>b.energy===5)?"Build to a powerful climax.":"Gradual dynamic contrast.";
    return base+" "+arc+(names.length?" Instruments: "+names.join("; ")+".":"");
  }
  function panel(){
    const choice=choiceMeta(state.selectedPreset)||choiceMeta("pop");
    const genreCount=genreChoices().length;
    return '<section id="sba-arranger" class="sba-shell" aria-labelledby="sba-heading">'+
      '<header class="sba-hero"><div class="sba-hero-copy"><span class="sba-eyebrow">SUNO STUDIO · КОНСТРУКТОР</span><h2 id="sba-heading">Визуальная аранжировка <span>✦</span></h2>'+
      '<p>Собери структуру трека, настрой энергию каждого фрагмента и подготовь теги исполнения для Suno. Стандартные инструменты Studio останутся без изменений.</p></div><span class="sba-hero-label">ARRANGEMENT LAB</span></header>'+
      '<div class="sba-toolbar"><div class="sba-preset-picker"><span class="sba-preset-caption">Шаблон композиции / жанр</span>'+
      '<button type="button" id="sba-presets" class="sba-preset-trigger" data-sba-action="menu-toggle" aria-haspopup="dialog" aria-expanded="false" aria-controls="sba-preset-menu"><span id="sba-picked-label">'+esc(choice.ru)+'</span><span class="sba-preset-chevron" aria-hidden="true">⌄</span></button>'+
      '<div id="sba-preset-menu" class="sba-preset-menu" role="dialog" aria-label="Поиск шаблона или жанра" hidden>'+
      '<div class="sba-preset-search-row"><input type="search" id="sba-preset-search" autocomplete="off" placeholder="Найти жанр или шаблон..." aria-label="Поиск жанра"/><button type="button" data-sba-action="menu-close" aria-label="Закрыть меню">×</button></div>'+
      '<div class="sba-preset-filters" role="group" aria-label="Тип вариантов"><button type="button" data-sba-action="menu-filter" data-filter="all">Все</button><button type="button" data-sba-action="menu-filter" data-filter="templates">Шаблоны</button><button type="button" data-sba-action="menu-filter" data-filter="genres">Жанры Академии ('+genreCount+')</button></div>'+
      '<div class="sba-preset-results" id="sba-preset-results" role="listbox" aria-label="Доступные шаблоны и жанры"></div></div></div>'+
      '<button type="button" data-sba-action="request-preset" class="sba-btn sba-preset-btn">Применить шаблон</button>'+
      '<span class="sba-draft-saved" id="sba-saved">Черновик сохраняется в браузере</span></div>'+
      '<div id="sba-preset-confirm" aria-live="polite"></div>'+
      '<div class="sba-body">'+
      '<div class="sba-editor">'+
        '<div class="sba-panel-title"><div><h3>Структура песни</h3><p>Перетаскивай блоки на компьютере или используй ↑ ↓ на телефоне.</p></div><span id="sba-section-count" class="sba-count"></span></div>'+
        '<div class="sba-add" id="sba-add-editor"><div class="sba-add-title"><strong>+ Новый блок</strong><span id="sba-add-placement" role="status">Добавится в конец композиции</span></div>'+
          '<div class="sba-add-row"><label for="sba-add-type">Тип фрагмента<select id="sba-add-type">'+Object.entries(SECTION).map(([k,v])=>'<option value="'+k+'">'+esc(v.ru)+'</option>').join("")+'</select></label>'+
          '<label id="sba-custom-name-wrap" for="sba-new-block-title" hidden>Название своего блока<input id="sba-new-block-title" type="text" maxlength="48" placeholder="Например: Разговорный переход" autocomplete="off"/></label></div>'+
          '<div class="sba-add-row sba-add-controls"><button class="sba-btn sba-add-btn" data-sba-action="add" type="button">+ Добавить блок</button><button class="sba-btn sba-placement-reset" data-sba-action="reset-insert" type="button" hidden>Добавлять в конец</button></div>'+
          '<p class="sba-add-hint">Выбери куплет, припев, дроп или свой фрагмент. После добавления можно настроить такты, энергию, вокал и инструменты.</p>'+
        '</div>'+
        '<div id="sba-cards" class="sba-block-list"></div>'+
        '<button type="button" class="sba-end-add" data-sba-action="insert-end">+ Добавить блок в конец</button>'+
        '<div class="sba-chart-panel"><div class="sba-panel-title"><div><h3>Кривая энергии</h3><p>Схематичная динамика от тихого вступления до кульминации.</p></div></div><div id="sba-energy-chart" class="sba-chart" role="img"></div></div>'+
      '</div>'+
      '<aside class="sba-result">'+
        '<div class="sba-result-header"><span class="sba-eyebrow">ПРЕДПРОСМОТР</span><h3>Результат для Suno</h3><p>Lyrics — теги по секциям; Style — короткое описание динамики.</p></div>'+
        '<div class="sba-preview-tabs" role="group" aria-label="Тип результата"><button type="button" data-sba-action="tab" data-tab="lyrics" aria-pressed="true">Теги Lyrics</button><button type="button" data-sba-action="tab" data-tab="style" aria-pressed="false">Style</button></div>'+
        '<textarea id="sba-preview" readonly spellcheck="false" aria-label="Готовые теги структуры песни"></textarea>'+
        '<div class="sba-preview-count" id="sba-preview-count"></div>'+
        '<div class="sba-result-actions"><button type="button" class="sba-btn sba-copy-btn" data-sba-action="copy">Копировать результат</button><button type="button" class="sba-btn sba-transfer-btn" data-sba-action="prepare-transfer">Перенести стиль в Studio</button></div>'+
        '<div id="sba-transfer-confirm" aria-live="polite"></div><p id="sba-message" class="sba-message" role="status" aria-live="polite" hidden></p>'+
        '<div class="sba-help"><strong>Как применять</strong><p>Теги секций вставляй в поле <b>Lyrics</b> в Suno рядом с текстом песни. Краткую динамику можно добавить в <b>Style</b> через Suno Studio после подтверждения.</p><p>Ориентир длительности рассчитан по 4/4 и BPM Studio, это не гарантия точной длины аудио.</p></div>'+
      '</aside>'+
      '</div></section>';
  }
  function menuItem(key,title,subtitle){
    return '<button type="button" role="option" aria-selected="'+(key===state.selectedPreset)+'" data-sba-action="menu-choose" data-choice="'+esc(key)+'"><span>'+esc(title)+'</span><small>'+esc(subtitle)+'</small></button>';
  }
  function normalizeQuery(text){return String(text||"").toLocaleLowerCase("ru").replace(/ё/g,"е").trim();}
  function renderPresetMenu(){
    const target=document.getElementById("sba-preset-results");if(!target)return;
    const q=normalizeQuery(document.getElementById("sba-preset-search")?.value);
    const matches=(name,group,id)=>normalizeQuery(name+" "+group+" "+id).includes(q);
    const output=[];
    let total=0;
    if(state.presetFilter!=="genres"){
      const entries=Object.entries(PRESETS).filter(([key,v])=>matches(v.ru,"Готовые шаблоны",key));
      if(entries.length){output.push('<div class="sba-preset-group-title">Готовые структуры</div>');
        entries.forEach(([key,v])=>{output.push(menuItem(key,v.ru,"Готовый шаблон"));total++;});}
    }
    if(state.presetFilter!=="templates"){
      const groups=new Map();
      genreChoices().filter(c=>matches(c.ru,c.family,c.key)).forEach(c=>{
        if(!groups.has(c.family))groups.set(c.family,[]);
        groups.get(c.family).push(c);
      });
      const order=typeof familyOrder!=="undefined"&&Array.isArray(familyOrder)?familyOrder:[];
      const sorted=[...groups.entries()].sort((a,b)=>{
        const ai=order.indexOf(a[0]),bi=order.indexOf(b[0]);
        if(ai>=0&&bi>=0)return ai-bi;
        if(ai>=0)return -1;if(bi>=0)return 1;
        return a[0].localeCompare(b[0],"ru");
      });
      sorted.forEach(([family,items])=>{
        output.push('<div class="sba-preset-group-title">'+esc(family)+' <small>'+items.length+'</small></div>');
        items.forEach(c=>{output.push(menuItem(c.key,c.ru,c.family));total++;});
      });
    }
    target.innerHTML=total?output.join(""):'<p class="sba-preset-no-results">Ничего не найдено. Попробуй другое название или направление.</p>';
    document.querySelectorAll("[data-sba-action=menu-filter]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.filter===state.presetFilter)));
  }
  function togglePresetMenu(open){
    const menu=document.getElementById("sba-preset-menu"),button=document.getElementById("sba-presets");
    if(!menu||!button)return;
    menu.hidden=!open;button.setAttribute("aria-expanded",String(open));
    if(open){renderPresetMenu();document.getElementById("sba-preset-search")?.focus();}
  }
  function options(obj,current){
    return Object.entries(obj).map(([key,item])=>'<option value="'+key+'"'+(key===current?' selected':'')+'>'+esc(item.ru)+'</option>').join("");
  }

  // Every Academy genre supplies its own instruments / production techniques.
  // The list is derived from the canonical GENRES data, never a second hard-coded genre catalog.
  function soundGenreForBlock(block){
    if(typeof GENRES==="undefined"||!Array.isArray(GENRES)||!GENRES.length)return null;
    const activeId=state.activePreset.startsWith(GENRE_CHOICE_PREFIX)?state.activePreset.slice(GENRE_CHOICE_PREFIX.length):"";
    const preferred=[block.instrumentsGenreId,activeId,builder.genre].filter(Boolean);
    for(const id of preferred){
      const match=GENRES.find(g=>g?.id===id);
      if(match)return match;
    }
    const family=PRESETS[state.activePreset]?state.activePreset:"pop";
    return GENRES.find(g=>genreArchetype(g)===family)||GENRES[0];
  }

  // v0.71 · Genre x section role x energy x vocal context rules.
  // All actual genre entries continue to come from the existing Academy GENRES array.
  const SMART_ROLE={
    intro:["Вступление","Обозначить звучание и подготовить вход композиции","intro"],
    verse:["Куплет","Освободить пространство для текста и основного ритма","verse"],
    prechorus:["Предприпев","Постепенно поднять напряжение перед припевом","rise"],
    chorus:["Припев","Раскрыть главный хук и расширить звучание","peak"],
    postchorus:["Постприпев","Продолжить запоминающийся мотив после припева","peak"],
    bridge:["Бридж","Дать контраст перед возвращением основной темы","break"],
    build:["Разгон","Усилить ритмическое ожидание следующей части","rise"],
    drop:["Дроп","Сделать акцент на мощном ритмическом входе","drop"],
    breakdown:["Брейкдаун","Разгрузить аранжировку и создать контраст","break"],
    solo:["Соло","Вывести мелодический инструмент на передний план","solo"],
    instrumental:["Инструментал","Передать развитие без основного вокала","solo"],
    finalchorus:["Финальный припев","Усилить финальное раскрытие главного хука","peak"],
    outro:["Завершение","Завершить музыкальную мысль без лишнего затягивания","outro"],
    custom:["Свой блок","Поддержать индивидуальную задумку этого фрагмента","verse"]
  };
  // Sections in each family: intro, verse, rise, peak, drop, break, solo, outro.
  // Suggestions are short production cues intended for Suno, not sound playback.
  const SMART_FAMILY_BANK={
    rock:{
      intro:"clean electric guitar arpeggio|subtle guitar harmonics|gentle bass pickup",
      verse:"tight bass and dry drums|palm-muted rhythm guitar|restrained guitar groove",
      rise:"tom drum build|rising guitar intensity|gradually opening cymbals",
      peak:"distorted guitar wall|full live drum kit|wide melodic guitar hook",
      drop:"explosive guitar downbeat|hard-hitting drum entrance|tight distorted riff",
      break:"stripped bass and guitar|half-time drum groove|clean guitar contrast",
      solo:"expressive electric guitar solo|melodic lead guitar phrases|live drum support",
      outro:"ringing guitar chord|fading clean guitar motif|short drum ending"
    },
    ska:{
      intro:"clean offbeat guitar chops|brass pickup phrase|walking bass introduction",
      verse:"offbeat skank guitar|walking bass groove|light punchy drums",
      rise:"short brass rise|snare pickup fill|rising guitar skanks",
      peak:"bright horn stabs|energetic punk drums|driving offbeat guitar",
      drop:"punchy brass downbeat|full skank rhythm return|bass and drum hit",
      break:"bass and skank guitar only|minimal offbeat groove|short horn pause",
      solo:"trumpet melodic solo|trombone response phrases|brass improvisation",
      outro:"brass ending stab|final offbeat guitar hit|playful horn tag"
    },
    electronic:{
      intro:"soft synth atmosphere|filtered pulse motif|subtle arpeggio",
      verse:"minimal drum machine|pulsing synth bass|tight electronic groove",
      rise:"rising synth arpeggio|snare roll build|filtered riser",
      peak:"wide synth hook|full electronic drum pattern|bright lead synth",
      drop:"heavy kick and bass drop|driving synth bass|punchy rhythmic drop",
      break:"drums stripped away|ambient synth pads|filtered bass break",
      solo:"melodic synth lead|evolving arpeggio sequence|instrumental synth hook",
      outro:"filtered synth fade|short electronic tail|gradual drum removal"
    },
    epic:{
      intro:"solo cello motif|soft cinematic strings|distant low brass",
      verse:"low string ostinato|restrained orchestral pulse|warm horn motif",
      rise:"timpani crescendo|rising string ostinato|brass swell",
      peak:"full orchestra climax|powerful cinematic percussion|soaring string melody",
      drop:"orchestral impact hit|deep cinematic drums|sudden brass entrance",
      break:"solo piano and strings|thin orchestral texture|low sustained cello",
      solo:"expressive solo violin|heroic brass melody|lyrical cello lead",
      outro:"resolving strings|soft orchestral cadence|gentle final brass chord"
    },
    classical:{
      intro:"delicate piano opening|solo violin theme|light chamber strings",
      verse:"expressive piano accompaniment|balanced string ensemble|gentle counterpoint",
      rise:"gradual orchestral crescendo|ascending string phrase|dynamic harmonic build",
      peak:"full string ensemble|rich orchestral harmony|expansive melodic climax",
      drop:"forte ensemble entrance|dramatic orchestral accent|timpani accent",
      break:"solo instrument interlude|quiet chamber passage|transparent orchestration",
      solo:"solo violin passage|expressive piano melody|cello cantabile",
      outro:"soft harmonic resolution|gentle string cadence|final piano chord"
    },
    afro:{
      intro:"soft kalimba motif|gentle guitar plucks|subtle hand percussion",
      verse:"syncopated percussion groove|bouncy melodic bass|short clean guitar phrases",
      rise:"layered shaker build|ascending percussion fills|rhythmic call-and-response",
      peak:"full afro-pop percussion|bright guitar hook|rolling bass groove",
      drop:"percussion-driven downbeat|bouncy sub bass entrance|tight dance drums",
      break:"bass and hand percussion only|stripped shaker groove|warm guitar interlude",
      solo:"melodic guitar plucks|talking drum accents|percussion-led instrumental",
      outro:"gentle percussion fade|warm guitar refrain|short rhythmic outro"
    },
    reggae:{
      intro:"warm organ bubble|clean skank guitar|laid-back bass intro",
      verse:"deep one-drop bass|offbeat rhythm guitar|soft rimshot drums",
      rise:"organ swell|subtle tom drum fill|bass anticipation",
      peak:"full reggae rhythm section|strong bass hook|bright skank accents",
      drop:"heavy dub bass entrance|kick and snare accent|offbeat guitar return",
      break:"bass and echoing guitar|dub delay space|minimal one-drop drums",
      solo:"melodic guitar solo|organ lead phrase|dub instrumental break",
      outro:"dub echo tail|warm bass fade|short organ cadence"
    },
    jazz:{
      intro:"soft piano voicings|upright bass introduction|light brushed cymbals",
      verse:"walking upright bass|brushed jazz drums|warm piano comping",
      rise:"ascending piano voicings|ride cymbal lift|building horn phrase",
      peak:"full swinging jazz ensemble|expressive horn unison|bright piano accents",
      drop:"accented ensemble hit|full rhythm section entrance|drum fill release",
      break:"piano and upright bass duo|brushed drum interlude|sparse jazz comping",
      solo:"melodic saxophone solo|expressive piano improvisation|walking bass support",
      outro:"gentle piano turnaround|soft cymbal ending|warm final jazz chord"
    },
    blues:{
      intro:"clean blues guitar lick|warm organ pad|slow bass pickup",
      verse:"shuffle drum groove|expressive blues guitar fills|round electric bass",
      rise:"rising blues guitar lick|snare pickup|organ swell",
      peak:"full blues band groove|strong electric guitar response|punchy live drums",
      drop:"guitar and drum accent|strong bass entrance|blues turnaround hit",
      break:"guitar and bass only|slow organ interlude|restrained drum texture",
      solo:"expressive blues guitar solo|slide guitar phrases|Hammond organ solo",
      outro:"classic blues turnaround|final guitar bend|warm chord resolution"
    },
    latin:{
      intro:"soft nylon guitar|light conga pattern|gentle piano montuno",
      verse:"syncopated clave groove|rounded Latin bass|conga and shaker",
      rise:"timbale roll|ascending brass phrase|growing clave accents",
      peak:"full Latin percussion|bright brass hook|driving piano montuno",
      drop:"strong dembow downbeat|deep rhythmic bass|punchy percussion return",
      break:"minimal conga groove|nylon guitar passage|stripped percussion",
      solo:"trumpet solo phrase|expressive nylon guitar lead|piano montuno spotlight",
      outro:"short brass cadence|gentle conga fade|guitar ending phrase"
    },
    hiphop:{
      intro:"subtle vinyl texture|sparse melodic sample|quiet 808 pulse",
      verse:"tight kick and snare|focused 808 bass|minimal melodic loop",
      rise:"snare roll pickup|filtered sample rise|short bass anticipation",
      peak:"heavy 808 bass|strong drum groove|catchy sampled hook",
      drop:"hard 808 drop|punchy sub bass|snare accent impact",
      break:"drums cut to sparse sample|low bass pause|stripped beat texture",
      solo:"instrumental sample variation|turntable scratches|melodic beat interlude",
      outro:"filtered sample ending|soft 808 decay|short beat stop"
    },
    rnb:{
      intro:"warm electric piano|soft synth pad|gentle bass motif",
      verse:"laid-back R&B drums|smooth electric piano chords|round bass groove",
      rise:"rising chord layers|subtle vocal pad support|gentle drum fill",
      peak:"wide soulful chord voicings|full R&B groove|melodic bass accents",
      drop:"smooth sub bass entrance|tight R&B drum hit|warm chord stab",
      break:"electric piano and bass|stripped soulful harmony|intimate drum texture",
      solo:"melodic electric piano solo|smooth guitar lead|expressive keyboard runs",
      outro:"warm chord resolution|soft bass fade|short Rhodes outro"
    },
    funk:{
      intro:"muted funk guitar|tight bass pickup|clavinet riff",
      verse:"syncopated slap bass|dry funk drums|short guitar chops",
      rise:"brass pickup phrase|busy drum fill|rising clavinet riff",
      peak:"full funk horn section|driving slap bass|punchy guitar groove",
      drop:"tight bass and drum hit|brass accent return|heavy syncopated groove",
      break:"bass and drums only|stripped guitar groove|short stop-time accent",
      solo:"clavinet solo|bright trumpet improvisation|expressive bass fill",
      outro:"final brass stab|bass groove stop|short guitar ending"
    },
    folk:{
      intro:"gentle acoustic guitar|solo fiddle motif|soft plucked strings",
      verse:"fingerpicked acoustic guitar|restrained folk percussion|warm melodic strings",
      rise:"gradually layered acoustic strings|frame drum lift|fiddle build",
      peak:"full acoustic ensemble|strong fiddle melody|driving folk rhythm",
      drop:"frame drum accent|full acoustic strum entrance|strong folk downbeat",
      break:"solo acoustic passage|soft bowed string texture|unaccompanied plucked motif",
      solo:"expressive fiddle solo|acoustic string interlude|folk flute melody",
      outro:"quiet acoustic resolution|soft fiddle ending|final plucked chord"
    },
    chanson:{
      intro:"gentle accordion motif|clean acoustic guitar|soft piano opening",
      verse:"warm bass and restrained drums|clear piano accompaniment|gentle acoustic rhythm",
      rise:"ascending accordion phrase|gradual string lift|subtle drum build",
      peak:"full melodic accompaniment|expressive accordion hook|wide acoustic chorus",
      drop:"full rhythm entrance|strong accordion accent|dynamic band pickup",
      break:"piano and acoustic guitar only|soft accordion interlude|stripped accompaniment",
      solo:"accordion solo|melodic acoustic guitar lead|lyrical violin phrase",
      outro:"short accordion reprise|soft piano resolution|acoustic guitar ending"
    },
    sacred:{
      intro:"gentle organ prelude|soft choral harmony|quiet bell motif",
      verse:"clear solo voice space|restrained organ support|soft sustained choir",
      rise:"gradual harmonic lift|layered vocal harmony|warm sustained organ",
      peak:"rich choral harmony|full organ chords|reverent orchestral support",
      drop:"strong orchestral accent|firm harmonic resolution|resonant percussion accent",
      break:"solo voice and soft organ|quiet choral passage|sparse sacred harmony",
      solo:"expressive organ interlude|solo cello passage|gentle vocalise",
      outro:"soft final choral cadence|organ chord resolution|gentle bell ending"
    },
    country:{
      intro:"clean acoustic guitar picking|gentle pedal steel|short fiddle pickup",
      verse:"steady acoustic rhythm|warm electric bass|light brushed snare",
      rise:"pedal steel swell|rising fiddle phrase|subtle drum fill",
      peak:"full country band|bright fiddle hook|warm layered acoustic guitars",
      drop:"driving country downbeat|full rhythm entrance|bright guitar accent",
      break:"acoustic guitar and fiddle|stripped bass groove|gentle instrumental pause",
      solo:"pedal steel solo|chicken-pickin guitar|melodic fiddle lead",
      outro:"short acoustic guitar tag|fiddle cadence|warm pedal steel fade"
    },
    ambient:{
      intro:"airy atmospheric pads|soft textural drone|gentle tonal shimmer",
      verse:"slow evolving synth layers|subtle ambient pulse|warm drone texture",
      rise:"gradual spectral swell|slow filter opening|layered atmospheric wash",
      peak:"wide evolving soundscape|rich harmonic layers|soft textural climax",
      drop:"deep ambient bass swell|gentle pulse entrance|low-frequency bloom",
      break:"near-silent atmospheric bed|solo sustained tone|minimal spatial texture",
      solo:"evolving synth lead|organic textural motif|gentle piano phrases",
      outro:"slow pad decay|soft fading drone|spacious harmonic tail"
    },
    experimental:{
      intro:"unusual percussive texture|sparse sound design motif|subtle tonal noise",
      verse:"asymmetric rhythm pattern|textural percussion|minimal melodic fragments",
      rise:"layered rhythmic displacement|gradual timbral shift|complex pulsing build",
      peak:"dense experimental texture|strong rhythmic contrast|unusual layered timbres",
      drop:"unexpected percussive impact|heavy processed bass|sudden texture switch",
      break:"abstract quiet sound design|sparse low drone|rhythmic silence",
      solo:"prepared piano motif|experimental synthesizer lead|freeform instrument texture",
      outro:"fragmented rhythmic ending|slow textural dissolve|sudden final accent"
    },
    vocal:{
      intro:"soft vocal harmony bed|gentle humming motif|light vowel textures",
      verse:"single clear lead line|restrained backing harmonies|natural vocal rhythm",
      rise:"layered voices rising|graduated harmony stack|vocal swell",
      peak:"full polyphonic harmonies|strong melodic lead|wide vocal chords",
      drop:"rhythmic vocal accent|bass voice entrance|full vocal harmony hit",
      break:"solo voice passage|minimal two-part harmony|unaccompanied vocal phrase",
      solo:"solo vocalise|ornamental vocal melody|wordless lead vocal",
      outro:"soft closing vocal chord|gentle harmony resolution|fading vocal tail"
    }
  };
  function smartFamily(genre){
    const signature=normalizeQuery([genre?.id,genre?.name,genre?.family].filter(Boolean).join(" "));
    if(/(^|[^а-яa-z])ска(?=$|[^а-яa-z])|(^|[^a-z])ska(?=$|[^a-z])/.test(signature))return "ska";
    if(/религи|духовн|православ|христиан|госпел|церков|молитв|sacred|gospel/.test(signature))return "sacred";
    if(/эпик|эпичес|кинематограф|саундтрек|trailer|epic|cinematic/.test(signature))return "epic";
    if(/классичес|оркестров|симфон|камерн|classical|orchestral/.test(signature))return "classical";
    if(/эмбиент|атмосферн|нью-эйдж|ambient|new.age|drone/.test(signature))return "ambient";
    if(/экспериментал|авангард|experimental|avant/.test(signature))return "experimental";
    if(/акапел|а капел|вокальная музыка|a cappella|vocal ensemble/.test(signature))return "vocal";
    if(/джаз|jazz|swing|bebop|бибоп/.test(signature))return "jazz";
    if(/блюз|blues/.test(signature))return "blues";
    if(/афро|амапиано|африкан|afro|amapiano/.test(signature))return "afro";
    if(/регги|даб\b|кариб|reggae|dub/.test(signature))return "reggae";
    if(/латино|реггетон|сальса|бачата|меренге|латин|latin|reggaeton|salsa|bachata/.test(signature))return "latin";
    if(/хип.хоп|рэп|трэп|хипхоп|hip.hop|rap|trap/.test(signature))return "hiphop";
    if(/фанк|диско|funk|disco/.test(signature))return "funk";
    if(/r&b|соул|нео.соул|soul|rhythm and blues/.test(signature))return "rnb";
    if(/кантри|американа|country|americana/.test(signature))return "country";
    if(/шансон|бард|авторская песня|баллада|chanson/.test(signature))return "chanson";
    if(/фолк|народн|этно|кельт|folk|ethno/.test(signature))return "folk";
    if(/электро|хаус|техно|транс|синти|драм-н-бейс|дабстеп|electronic|electro|house|techno|trance|synth|dubstep/.test(signature))return "electronic";
    if(/рок|панк|метал|гранж|хардкор|rock|punk|metal|grunge/.test(signature))return "rock";
    return "pop";
  }
  // Pop is a neutral fallback if a niche Academy entry has no dedicated section bank.
  SMART_FAMILY_BANK.pop={
    intro:"gentle melodic intro|soft piano motif|subtle synth atmosphere",
    verse:"restrained beat and bass|clear melodic accompaniment|tight pop groove",
    rise:"gradual percussion build|rising synth layers|harmonic lift",
    peak:"full bright chorus arrangement|wide melodic hook|punchy drums and bass",
    drop:"drum and bass downbeat|strong synth hook|sharp pop accent",
    break:"minimal piano and pad|stripped rhythmic accompaniment|soft instrumental pause",
    solo:"melodic guitar lead|expressive synth solo|piano instrumental motif",
    outro:"short melodic reprise|soft pad fade|clean final chord"
  };
  function smartRoleInfo(block){return SMART_ROLE[block.type]||SMART_ROLE.custom;}
  function smartRoleCues(genre,block){
    const role=smartRoleInfo(block)[2];
    const family=smartFamily(genre);
    const bank=SMART_FAMILY_BANK[family]||SMART_FAMILY_BANK.pop;
    const cues=(bank[role]||SMART_FAMILY_BANK.pop[role]||"").split("|").filter(Boolean);
    if(block.type==="finalchorus")cues.unshift("final chorus lift");
    if(block.type==="postchorus")cues.unshift("short repeating melodic hook");
    if(block.type==="custom"&&block.customName)cues.unshift("custom section contrast");
    return [...new Set(cues)].slice(0,5);
  }
  function smartDynamicsCues(block){
    const energy=Number(block.energy);
    const dynamics={
      1:["sparse arrangement","very soft dynamics"],
      2:["restrained groove","light rhythmic texture"],
      3:["balanced dynamic groove","controlled musical build"],
      4:["driving rhythmic accents","strong dynamic lift"],
      5:["full dynamic impact","wide powerful accents"]
    };
    const choices=[...(dynamics[energy]||dynamics[3])];
    const vocal={
      none:"instrumental melodic focus",
      lead:"space for clear lead vocal",
      male:"space for clear male lead",
      female:"space for clear female lead",
      duet:"duet call-and-response",
      harmonies:"layered backing harmonies",
      falsetto:"smooth falsetto lift",
      backing:"supporting backing vocal responses"
    }[block.vocal];
    if(vocal)choices.push(vocal);
    return choices;
  }
  function smartPurpose(block){
    const role=smartRoleInfo(block);
    return role[1];
  }


  function soundSuggestions(genre,block){
    const groups=[],all=new Set();
    const exclusions=/^(?:no |without |clean studio|polished studio|studio recording|studio sound|high-quality|high quality|professional production|not |avoid |no crowd|no stage|no whisper)/i;
    const clean=value=>String(value||"").split(/[,;]+/).map(x=>safeStr(x).trim()).filter(x=>x&&!exclusions.test(x));
    const addGroup=(title,entries)=>{
      const items=[];
      for(const label of entries){
        const key=normalizeQuery(label);
        if(!key||all.has(key))continue;
        all.add(key);items.push(label);
      }
      if(items.length)groups.push({title,items});
    };
    // Role-first order, then actual genre instrumentation from the Academy.
    addGroup("Для блока «"+smartRoleInfo(block)[0]+"»",smartRoleCues(genre,block));
    addGroup("Энергия "+block.energy+"/5 и вокал",smartDynamicsCues(block));
    if(genre){
      addGroup("Инструменты · "+genre.name,clean(genre.instruments));
      addGroup("Приёмы и звучание · "+genre.name,clean(genre.style));
    }
    const base=PRESETS[genre?genreArchetype(genre):"pop"]||PRESETS.pop;
    const row=base.sections.find(x=>x[0]===block.type)||base.sections.find(x=>x[0]==="verse");
    if(row)addGroup("Шаблон для «"+SECTION[block.type].ru+"»",clean(row[4]));
    return groups;
  }
  // Always-visible role-specific suggestions (the full searchable catalog remains available).
  function quickSoundsHTML(block){
    const genre=soundGenreForBlock(block),groups=soundSuggestions(genre,block);
    const existing=new Set(String(block.instruments||"").split(",").map(x=>normalizeQuery(x.trim())));
    const role=smartRoleInfo(block),roleName=block.type==="custom"&&block.customName?block.customName:role[0];
    const query=soundPicker.typingId===block.id?normalizeQuery(soundPicker.typingQuery):"";
    const groupItems=title=>groups.find(g=>g.title===title)?.items||[];
    const roleItems=groupItems("Для блока «"+role[0]+"»").slice(0,3);
    const allDynamics=groupItems("Энергия "+block.energy+"/5 и вокал");
    const dynamicItems=[allDynamics[0],allDynamics.length>2?allDynamics[allDynamics.length-1]:allDynamics[1]].filter(Boolean);
    const acoustic=genre?groupItems("Инструменты · "+genre.name):[];
    const styling=genre?groupItems("Приёмы и звучание · "+genre.name):[];
    const genreItems=[...acoustic.slice(0,2),...styling.slice(0,2)].slice(0,3);
    const chip=item=>{
      const already=existing.has(normalizeQuery(item));
      return '<button type="button" class="sba-quick-chip" data-sba-action="sound-add" data-id="'+esc(block.id)+
        '" data-sound-value="'+esc(item)+'"'+(already?' disabled aria-disabled="true"':'')+
        '><span aria-hidden="true">'+(already?'✓':'+')+'</span> '+esc(item)+'</button>';
    };
    const groupHTML=(label,items)=>items.length?
      '<div class="sba-smart-group"><span class="sba-smart-group-title">'+esc(label)+'</span>'+
      '<div class="sba-quick-list">'+items.map(chip).join("")+'</div></div>':"";
    const qmatches=query.length>=2?
      [...new Set(groups.flatMap(group=>group.items).filter(item=>normalizeQuery(item).includes(query)))].slice(0,5):[];
    const header='<div class="sba-quick-top"><span>Умные рекомендации · <b>'+esc(genre?.name||"Академия")+'</b></span>'+
      '<button type="button" data-sba-action="sound-toggle" data-id="'+esc(block.id)+
      '" aria-expanded="'+(soundPicker.blockId===block.id)+'" aria-controls="sba-sound-panel-'+esc(block.id)+'">'+
      (soundPicker.blockId===block.id?"Скрыть список":"Все варианты и поиск")+' →</button></div>';
    const purpose='<div class="sba-smart-purpose"><strong>'+esc(roleName)+' · '+esc(ENERGY[block.energy].ru)+
      ' · '+block.energy+'/5</strong><span>'+esc(smartPurpose(block))+'</span>'+
      '<small>Вокал: '+esc(VOICES[block.vocal].ru)+'</small></div>';
    return header+purpose+
      (qmatches.length?groupHTML("Подходит по вашему вводу",qmatches):"")+
      groupHTML("Для этого фрагмента",roleItems)+
      groupHTML("Характерное звучание жанра",genreItems)+
      groupHTML("Динамика и исполнение",dynamicItems)+
      (query.length>=2&&!qmatches.length?
        '<small class="sba-quick-hint">Точных совпадений нет, показаны рекомендации для этого блока.</small>':"");
  }

  function redrawQuickSounds(block){
    const root=document.getElementById("sba-quick-"+block.id);
    if(root)root.innerHTML=quickSoundsHTML(block);
  }
  function soundGenreOptions(){
    const q=normalizeQuery(soundPicker.genreQuery);
    const all=genreChoices().filter(g=>normalizeQuery(g.ru+" "+g.family+" "+g.key).includes(q));
    all.sort((a,b)=>a.family.localeCompare(b.family,"ru")||a.ru.localeCompare(b.ru,"ru"));
    const shown=all.slice(0,55);
    return '<div class="sba-sound-info">Найдено жанров: '+all.length+(all.length>shown.length?" · уточни запрос":"")+'</div>'+
      (shown.length?shown.map(c=>
        '<button type="button" class="sba-sound-genre-row" data-sba-action="sound-set-genre" data-id="'+esc(soundPicker.blockId)+'" data-genre-id="'+esc(c.genre.id)+'"><span>'+esc(c.ru)+'</span><small>'+esc(c.family)+'</small></button>'
      ).join(""):'<p class="sba-sound-none">Жанр не найден</p>');
  }
  function soundChoiceOptions(block){
    const genre=soundGenreForBlock(block),q=normalizeQuery(soundPicker.soundQuery);
    const existing=new Set(String(block.instruments||"").split(",").map(x=>normalizeQuery(x.trim())));
    const groups=soundSuggestions(genre,block);
    let found=0;
    const result=groups.map(group=>{
      const items=group.items.filter(item=>normalizeQuery(item).includes(q));
      if(!items.length)return "";
      found+=items.length;
      return '<div class="sba-sound-group">'+esc(group.title)+'</div>'+items.map(item=>{
        const added=existing.has(normalizeQuery(item));
        return '<button type="button" class="sba-sound-option" data-sba-action="sound-add" data-id="'+esc(block.id)+'" data-sound-value="'+esc(item)+'"'+(added?' disabled aria-disabled="true"':'')+'><span>'+esc(item)+'</span><small>'+(added?'✓ Добавлено':'+ Добавить')+'</small></button>';
      }).join("");
    }).join("");
    return result||'<p class="sba-sound-none">Совпадений нет. Можно ввести инструмент вручную.</p>';
  }
  function soundPanelHTML(block){
    const genre=soundGenreForBlock(block);
    return '<div class="sba-sound-panel" id="sba-sound-panel-'+esc(block.id)+'" aria-label="Выбор инструментов и приёмов">'+
      '<div class="sba-sound-head"><strong>Библиотека инструментов и приёмов</strong><button type="button" data-sba-action="sound-close" data-id="'+esc(block.id)+'" aria-label="Закрыть подбор">×</button></div>'+
      '<button type="button" class="sba-sound-genre-trigger" data-sba-action="sound-switch-mode" data-id="'+esc(block.id)+'">Жанр: <b>'+esc(genre?.name||"Выбери жанр")+'</b><span>⌄</span></button>'+
      '<div id="sba-sound-body-'+esc(block.id)+'">'+soundPanelBody(block)+'</div>'+
      '</div>';
  }
  function soundPanelBody(block){
    const genres=soundPicker.mode==="genres",placeholder=genres?"Поиск по всей Академии...":"Поиск инструмента или приёма...";
    const query=genres?soundPicker.genreQuery:soundPicker.soundQuery;
    return (genres?'<div class="sba-sound-back"><button type="button" data-sba-action="sound-switch-mode" data-id="'+esc(block.id)+'">← К инструментам</button></div>':'')+
      '<input type="search" class="sba-sound-search" data-sba-sound-search="'+(genres?'genres':'sounds')+'" data-id="'+esc(block.id)+'" value="'+esc(query)+'" placeholder="'+placeholder+'" autocomplete="off" aria-label="'+placeholder+'">'+
      '<div class="sba-sound-list" id="sba-sound-results-'+esc(block.id)+'">'+(genres?soundGenreOptions():soundChoiceOptions(block))+'</div>'+
      (genres?'':'<div class="sba-sound-foot"><span>Нажми «Добавить», чтобы дополнить поле. Свой текст сохраняется.</span><button type="button" data-sba-action="sound-clear" data-id="'+esc(block.id)+'">Очистить поле</button></div>');
  }
  function redrawSoundPanel(block){
    const root=document.getElementById("sba-sound-body-"+block.id);
    if(root)root.innerHTML=soundPanelBody(block);
  }
  function redrawSoundOptions(block){
    const root=document.getElementById("sba-sound-results-"+block.id);
    if(root)root.innerHTML=soundPicker.mode==="genres"?soundGenreOptions():soundChoiceOptions(block);
  }

  function blockHTML(b,i){
    const n=state.blocks.length;
    return '<article class="sba-block" data-sba-id="'+b.id+'" data-sba-energy="'+b.energy+'">'+
     '<div class="sba-block-head"><span class="sba-drag" draggable="true" data-sba-drag="'+b.id+'" title="Перетащить блок" aria-label="Перетащить '+esc(SECTION[b.type].ru)+'">⠿</span>'+
     '<span class="sba-index">'+String(i+1).padStart(2,"0")+'</span><span class="sba-emoji" aria-hidden="true">'+SECTION[b.type].icon+'</span>'+
     '<strong>'+esc(nameFor(b,i))+'</strong><span class="sba-head-energy">Энергия '+b.energy+'/5</span>'+
     '<div class="sba-block-actions"><button type="button" data-sba-action="up" data-id="'+b.id+'" aria-label="Переместить вверх" '+(i===0?'disabled':'')+'>↑</button>'+
     '<button type="button" data-sba-action="down" data-id="'+b.id+'" aria-label="Переместить вниз" '+(i===n-1?'disabled':'')+'>↓</button>'+
     '<button type="button" data-sba-action="duplicate" data-id="'+b.id+'" aria-label="Дублировать блок">⧉</button>'+
     '<button type="button" data-sba-action="remove" data-id="'+b.id+'" aria-label="Удалить блок">×</button></div></div>'+
     '<div class="sba-block-fields"><label>Раздел<select data-sba-field="type" data-id="'+b.id+'">'+options(SECTION,b.type)+'</select></label>'+
     '<label>Тактов<select data-sba-field="bars" data-id="'+b.id+'">'+[2,4,8,12,16,24,32].map(n=>'<option value="'+n+'"'+(n===b.bars?' selected':'')+'>'+n+'</option>').join("")+'</select></label>'+
     '<label>Вокал<select data-sba-field="vocal" data-id="'+b.id+'">'+options(VOICES,b.vocal)+'</select></label>'+
     '<label class="sba-energy-field">Энергия <output data-sba-output="'+b.id+'">'+b.energy+'/5 · '+ENERGY[b.energy].ru+'</output><input type="range" min="1" max="5" step="1" value="'+b.energy+'" data-sba-field="energy" data-id="'+b.id+'"></label>'+
     '<div class="sba-instrument-field"><label for="sba-instruments-'+b.id+'">Инструменты / приём</label>'+
       '<div class="sba-instrument-row"><input id="sba-instruments-'+b.id+'" type="text" maxlength="300" data-sba-field="instruments" data-id="'+b.id+'" value="'+esc(b.instruments)+'" placeholder="Введи вручную или выбери рекомендацию" autocomplete="off"></div>'+
       '<div class="sba-quick-sounds" id="sba-quick-'+b.id+'">'+quickSoundsHTML(b)+'</div>'+
       (soundPicker.blockId===b.id?soundPanelHTML(b):"")+'</div>'+
     (b.type==="custom"?'<label class="sba-custom-label">Своё название<input type="text" maxlength="48" data-sba-field="customName" data-id="'+b.id+'" value="'+esc(b.customName)+'" placeholder="Название для тега Suno"></label>':"")+
     '</div></article><button type="button" class="sba-between-add" data-sba-action="insert-after" data-id="'+b.id+'" aria-label="Добавить блок после '+esc(nameFor(b,i))+'"><span aria-hidden="true">＋</span> Добавить после</button>';
  }
  function energyHTML(){
    const n=state.blocks.length;
    return state.blocks.map((b,i)=>'<div class="sba-chart-step" title="'+esc(nameFor(b,i))+' · '+b.energy+'/5" style="--energy:'+b.energy+';--bar-width:'+(100/n)+'%">'+
      '<div class="sba-chart-column"><i style="--level:'+b.energy+'"></i></div><small>'+esc(SECTION[b.type].icon)+'</small></div>').join("");
  }
  function updateDerived(){
    const text=state.tab==="lyrics"?generatedLyrics():fullDynamics();
    const preview=document.getElementById("sba-preview");if(preview)preview.value=text;
    const count=document.getElementById("sba-preview-count");
    if(count)count.textContent=state.tab==="lyrics"?state.blocks.length+" секций · "+text.length+" символов":"Style · "+text.length+" символов · проверка лимита при переносе";
    const stats=document.getElementById("sba-section-count");
    if(stats)stats.textContent=state.blocks.length+" секций · ≈ "+lengthString();
    const chart=document.getElementById("sba-energy-chart");
    if(chart){chart.innerHTML=energyHTML();chart.setAttribute("aria-label",state.blocks.map((b,i)=>nameFor(b,i)+": "+b.energy+" из 5").join("; "));}
    document.querySelectorAll(".sba-preview-tabs button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.tab===state.tab)));
    const message=document.getElementById("sba-message");if(message){message.textContent=state.message;message.hidden=!state.message;}
  }
  function updateAddComposer(){
    const afterIndex=state.insertAfter===null?-1:findIndex(state.insertAfter);
    if(state.insertAfter!==null&&afterIndex<0)state.insertAfter=null;
    const placement=document.getElementById("sba-add-placement");
    if(placement)placement.textContent=state.insertAfter===null?"Добавится в конец композиции":"После блока "+(afterIndex+1)+" — "+SECTION[state.blocks[afterIndex].type].ru;
    const reset=document.querySelector(".sba-placement-reset");if(reset)reset.hidden=state.insertAfter===null;
    const title=document.getElementById("sba-custom-name-wrap");
    if(title)title.hidden=document.getElementById("sba-add-type")?.value!=="custom";
  }
  function openAddComposer(afterId=null){
    state.insertAfter=afterId;updateAddComposer();
    document.getElementById("sba-add-editor")?.scrollIntoView({behavior:"smooth",block:"center"});
    document.getElementById("sba-add-type")?.focus({preventScroll:true});
  }
  function drawBlocks(){
    const root=document.getElementById("sba-cards");
    if(root)root.innerHTML=state.blocks.length?state.blocks.map(blockHTML).join(""):'<div class="sba-empty">Пока нет блоков. Добавь первый фрагмент снизу.</div>';
    updateDerived();updateAddComposer();
  }
  function drawPresetPrompt(){
    const el=document.getElementById("sba-preset-confirm");if(!el)return;
    el.innerHTML=state.presetPending?'<div class="sba-confirm"><span>Заменить текущую структуру шаблоном «'+esc(choiceMeta(state.presetPending)?.ru||"")+'»? Текущие блоки будут заменены.</span><button type="button" data-sba-action="preset-accept">Заменить</button><button type="button" data-sba-action="preset-cancel">Отмена</button></div>':"";
  }
  function drawTransfer(){
    const el=document.getElementById("sba-transfer-confirm");if(!el)return;
    const t=state.transfer;
    el.innerHTML=t?'<div class="sba-transfer-preview"><strong>Предпросмотр переноса в Style</strong><p>Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.</p><code>'+esc(t.candidate)+'</code><div class="sba-preview-buttons"><button type="button" data-sba-action="transfer-accept">Подтвердить перенос</button><button type="button" data-sba-action="transfer-cancel">Отмена</button></div><small>Итоговый промпт Studio: '+t.prompt.length+' / 1000 символов</small></div>':"";
  }
  function show(message){state.message=message;updateDerived();}
  function changed(redraw=true){
    state.transfer=null;drawTransfer();
    if(redraw)drawBlocks();else updateDerived();
    save();
  }
  function swap(i,j){
    if(i<0||j<0||i>=state.blocks.length||j>=state.blocks.length||i===j)return;
    const [item]=state.blocks.splice(i,1);state.blocks.splice(j,0,item);changed();
  }
  function findIndex(id){return state.blocks.findIndex(b=>b.id===id);}
  function prepareTransfer(){
    if(!state.blocks.length){show("Добавь хотя бы один блок перед переносом.");return;}
    const before=String(builder.extra||"");
    // Replace only the exact text previously inserted by this module; never erase user-written instructions.
    let remainder=before;
    if(state.applied&&remainder.includes(state.applied)){
      remainder=remainder.replace(state.applied,"").replace(/;\s*;\s*/g,"; ").replace(/;\s*$/,"").trim();
    }
    const candidates=[fullDynamics(),shortDynamics()];
    for(const candidate of candidates){
      const next=[remainder,candidate].filter(Boolean).join("; ");
      builder.extra=next;
      let output;
      try{output=promptValue();}finally{builder.extra=before;}
      // promptValue may silently drop extra instructions when its limit is exceeded.
      if(output.length<=1000&&output.includes(candidate)){
        state.transfer={previous:before,next,candidate,prompt:output};
        state.message="";drawTransfer();updateDerived();return;
      }
    }
    state.transfer=null;drawTransfer();
    show("Недостаточно места в лимите 1000 символов. Сократи дополнительные инструкции или жанровый промпт перед переносом.");
  }
  function applyTransfer(){
    const t=state.transfer;if(!t)return;
    if(String(builder.extra||"")!==t.previous){state.transfer=null;drawTransfer();show("Дополнительные инструкции изменились. Подготовь перенос ещё раз.");return;}
    builder.extra=t.next;
    const actual=promptValue();
    if(!actual.includes(t.candidate)||actual.length>1000){
      builder.extra=t.previous;show("Перенос отменён: общий промпт превысил лимит.");
      state.transfer=null;drawTransfer();return;
    }
    state.applied=t.candidate;state.transfer=null;
    const field=document.getElementById("b-extra");if(field)field.value=builder.extra;
    updateOutput();drawTransfer();
    show("Аранжировка добавлена в Suno Studio. Промпт можно копировать или сохранять как обычно.");
  }
  const oldStudio=studio;
  studio=function(){
    const original=oldStudio.apply(this,arguments);
    return original.replace('<div class="studio-grid">',
      '<button type="button" class="sba-jump" data-sba-action="jump"><span>♬</span> Конструктор аранжировки <small>Создать структуру песни</small> <span>↓</span></button><div class="studio-grid">')+
      panel();
  };
  function enter(){
    if(view.nav!=="studio")return;
    drawBlocks();drawPresetPrompt();drawTransfer();
  }
  const oldRender=render;
  render=function(){
    const result=oldRender.apply(this,arguments);
    if(view.nav==="studio")enter();
    return result;
  };
  document.addEventListener("click",event=>{
    const control=event.target?.closest?.("[data-sba-action]");
    if(!control||view.nav!=="studio")return;
    const action=control.dataset.sbaAction;

    if(action==="sound-toggle"||action==="sound-close"){
      const id=control.dataset.id;
      soundPicker.blockId=action==="sound-close"||soundPicker.blockId===id?null:id;
      soundPicker.mode="sounds";soundPicker.soundQuery="";soundPicker.genreQuery="";
      drawBlocks();return;
    }
    if(action==="sound-switch-mode"){
      const id=control.dataset.id;
      if(soundPicker.blockId!==id)return;
      soundPicker.mode=soundPicker.mode==="sounds"?"genres":"sounds";
      redrawSoundPanel(state.blocks[findIndex(id)]);
      document.querySelector("#sba-sound-body-"+id+" .sba-sound-search")?.focus();return;
    }
    if(action==="sound-set-genre"){
      const id=control.dataset.id,idx=findIndex(id);
      const genreId=control.dataset.genreId;
      if(idx<0||!GENRES.some(g=>g?.id===genreId))return;
      state.blocks[idx].instrumentsGenreId=genreId;
      soundPicker.mode="sounds";soundPicker.soundQuery="";soundPicker.genreQuery="";
      // Changes the suggestions only; never silently overwrites a manually edited instrument field.
      soundPicker.typingId=null;soundPicker.typingQuery="";
      save();drawBlocks();return;
    }
    if(action==="sound-add"||action==="sound-clear"){
      const id=control.dataset.id,idx=findIndex(id);
      if(idx<0)return;
      const block=state.blocks[idx];
      if(action==="sound-clear")block.instruments="";
      else{
        const cue=safeStr(control.dataset.soundValue);
        const current=block.instruments.trim();
        if(!cue||current.split(",").some(x=>normalizeQuery(x.trim())===normalizeQuery(cue)))return;
        const combined=[current,cue].filter(Boolean).join(", ");
        if(combined.length>300){show("В поле помещается до 300 символов. Удали часть текста перед добавлением.");return;}
        block.instruments=combined;
      }
      const input=document.getElementById("sba-instruments-"+id);if(input)input.value=block.instruments;
      soundPicker.typingId=null;soundPicker.typingQuery="";
      changed(false);redrawSoundOptions(block);redrawQuickSounds(block);return;
    }
    if(action==="menu-toggle"){togglePresetMenu(document.getElementById("sba-preset-menu")?.hidden);return;}
    if(action==="menu-close"){togglePresetMenu(false);document.getElementById("sba-presets")?.focus();return;}
    if(action==="menu-filter"){state.presetFilter=control.dataset.filter||"all";renderPresetMenu();return;}
    if(action==="menu-choose"){
      const selected=control.dataset.choice;
      if(!choiceMeta(selected))return;
      state.selectedPreset=selected;state.presetPending=null;
      const label=document.getElementById("sba-picked-label");
      if(label)label.textContent=choiceMeta(selected).ru;
      togglePresetMenu(false);drawPresetPrompt();return;
    }
    if(action==="jump"){document.getElementById("sba-arranger")?.scrollIntoView({block:"start",behavior:"smooth"});return;}
    if(action==="insert-after"){openAddComposer(control.dataset.id);return;}
    if(action==="insert-end"||action==="reset-insert"){openAddComposer(null);return;}
    if(action==="add"){
      if(state.blocks.length>=MAX_BLOCKS){show("Ограничение: "+MAX_BLOCKS+" блоков в одной композиции.");return;}
      const value=document.getElementById("sba-add-type")?.value||"verse";
      if(!SECTION[value])return;
      const title=document.getElementById("sba-new-block-title");
      const name=value==="custom"?safeTitle(title?.value):"";
      if(value==="custom"&&!name){show("Напиши название нового блока.");title?.focus();return;}
      const block=makeBlock(value,3,8,value==="intro"||value==="outro"?"none":"lead","",name);
      const target=state.insertAfter===null?-1:findIndex(state.insertAfter);
      const index=target<0?state.blocks.length:target+1;
      state.blocks.splice(index,0,block);state.insertAfter=null;
      if(title)title.value="";
      changed();show("Блок добавлен. Можно настроить его параметры и положение.");
      document.querySelector('.sba-block[data-sba-id="'+block.id+'"]')?.scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }
    if(action==="request-preset"){
      const name=state.selectedPreset;
      if(!choiceMeta(name))return;
      state.presetPending=name;drawPresetPrompt();return;
    }
    if(action==="preset-cancel"){state.presetPending=null;drawPresetPrompt();return;}
    if(action==="preset-accept"){
      if(!choiceMeta(state.presetPending))return;
      const name=state.presetPending;
      state.blocks=presetBlocks(name);state.activePreset=name;state.presetPending=null;state.insertAfter=null;
      drawPresetPrompt();changed();show("Шаблон загружен. Теперь можно изменять блоки.");return;
    }
    if(action==="tab"){state.tab=control.dataset.tab==="style"?"style":"lyrics";updateDerived();return;}
    if(action==="copy"){
      const output=state.tab==="lyrics"?generatedLyrics():fullDynamics();
      if(!output.trim()){show("Добавь блоки, чтобы получить результат.");return;}
      if(typeof copyText==="function")copyText(output);
      else navigator.clipboard?.writeText(output).catch(()=>show("Не удалось скопировать."));
      return;
    }
    if(action==="prepare-transfer"){prepareTransfer();return;}
    if(action==="transfer-cancel"){state.transfer=null;drawTransfer();return;}
    if(action==="transfer-accept"){applyTransfer();return;}
    const id=control.dataset.id,index=findIndex(id);
    if(index<0)return;
    if(action==="up"){swap(index,index-1);return;}
    if(action==="down"){swap(index,index+1);return;}
    if(action==="remove"){state.blocks.splice(index,1);changed();return;}
    if(action==="duplicate"){
      if(state.blocks.length>=MAX_BLOCKS){show("Ограничение: "+MAX_BLOCKS+" блоков.");return;}
      const b=state.blocks[index];
      state.blocks.splice(index+1,0,makeBlock(b.type,b.energy,b.bars,b.vocal,b.instruments,b.customName,b.instrumentsGenreId));
      changed();return;
    }
  });
  document.addEventListener("change",event=>{
    if(view.nav!=="studio")return;
    const el=event.target;
    if(el?.id==="sba-add-type"){updateAddComposer();return;}
    const key=el?.dataset?.sbaField;
    if(!key)return;
    const index=findIndex(el.dataset.id);if(index<0)return;
    const b=state.blocks[index];
    if(key==="type"&&SECTION[el.value]){
      b.type=el.value;
      if(b.type==="custom"&&!b.customName)b.customName="Custom Section";
    }
    if(key==="vocal"&&VOICES[el.value])b.vocal=el.value;
    if(key==="bars"){const bars=Number(el.value);if([2,4,8,12,16,24,32].includes(bars))b.bars=bars;}
    changed();
  });
  document.addEventListener("input",event=>{
    if(view.nav!=="studio")return;
    const el=event.target;
    if(el?.id==="sba-preset-search"){renderPresetMenu();return;}
    if(el?.dataset?.sbaSoundSearch){
      if(el.dataset.sbaSoundSearch==="genres")soundPicker.genreQuery=el.value;
      else soundPicker.soundQuery=el.value;
      const idx=findIndex(el.dataset.id);if(idx>=0)redrawSoundOptions(state.blocks[idx]);
      return;
    }
    const key=el?.dataset?.sbaField;
    if(!key){
      if(el?.dataset?.builder==="tempo")updateDerived();
      return;
    }
    const index=findIndex(el.dataset.id);if(index<0)return;
    const b=state.blocks[index];
    if(key==="customName"){
      b.customName=safeTitle(el.value);
      const box=el.closest(".sba-block"),head=box?.querySelector(".sba-block-head strong");
      if(head)head.textContent=nameFor(b,index);
      redrawQuickSounds(b);
    }else if(key==="energy"){
      const energy=Number(el.value);if(energy<1||energy>5)return;
      b.energy=energy;
      const box=el.closest(".sba-block");
      if(box){box.dataset.sbaEnergy=String(energy);const output=box.querySelector('[data-sba-output="'+b.id+'"]');if(output)output.textContent=energy+"/5 · "+ENERGY[energy].ru;const title=box.querySelector(".sba-head-energy");if(title)title.textContent="Энергия "+energy+"/5";}
      redrawQuickSounds(b);
      if(soundPicker.blockId===b.id)redrawSoundOptions(b);
    }else if(key==="instruments"){
      b.instruments=safeStr(el.value);
      soundPicker.typingId=b.id;
      soundPicker.typingQuery=String(el.value||"").split(",").pop().trim();
      if(soundPicker.blockId===b.id)redrawSoundOptions(b);
      redrawQuickSounds(b);
    }
    else return;
    changed(false);
  });
  document.addEventListener("click",event=>{
    if(view.nav!=="studio"||event.target?.closest?.(".sba-preset-picker"))return;
    togglePresetMenu(false);
  });
  document.addEventListener("keydown",event=>{
    if(view.nav!=="studio")return;
    if(event.key==="Escape"&&soundPicker.blockId){soundPicker.blockId=null;drawBlocks();return;}
    const menu=document.getElementById("sba-preset-menu");
    if(!menu||menu.hidden)return;
    if(event.key==="Escape"){event.preventDefault();togglePresetMenu(false);document.getElementById("sba-presets")?.focus();}
    if(event.key==="Enter"&&event.target?.id==="sba-preset-search"){
      event.preventDefault();document.querySelector("#sba-preset-results [data-sba-action=menu-choose]")?.click();
    }
    if(event.key==="ArrowDown"&&event.target?.id==="sba-preset-search"){
      event.preventDefault();document.querySelector("#sba-preset-results [data-sba-action=menu-choose]")?.focus();
    }
  });
  document.addEventListener("dragstart",event=>{
    if(view.nav!=="studio")return;
    const handle=event.target?.closest?.("[data-sba-drag]");
    if(!handle)return;
    state.dragId=handle.dataset.sbaDrag;
    event.dataTransfer?.setData("text/plain",state.dragId);
    if(event.dataTransfer)event.dataTransfer.effectAllowed="move";
    handle.closest(".sba-block")?.classList.add("sba-dragging");
  });
  document.addEventListener("dragover",event=>{
    if(view.nav!=="studio"||!state.dragId)return;
    const block=event.target?.closest?.(".sba-block");if(!block)return;
    event.preventDefault();
    if(event.dataTransfer)event.dataTransfer.dropEffect="move";
    document.querySelectorAll(".sba-drop-target").forEach(e=>e.classList.remove("sba-drop-target"));
    block.classList.add("sba-drop-target");
  });
  document.addEventListener("drop",event=>{
    if(view.nav!=="studio"||!state.dragId)return;
    const target=event.target?.closest?.(".sba-block");if(!target)return;
    event.preventDefault();
    const from=findIndex(state.dragId),to=findIndex(target.dataset.sbaId);
    state.dragId=null;
    if(from>=0&&to>=0)swap(from,to);
  });
  document.addEventListener("dragend",()=>{
    state.dragId=null;
    document.querySelectorAll(".sba-dragging,.sba-drop-target").forEach(el=>el.classList.remove("sba-dragging","sba-drop-target"));
  });
  load();
  window.SUNOBOOM_ARRANGER=Object.freeze({version:"0.71",getBlockCount:()=>state.blocks.length,getLyrics:generatedLyrics,getStyle:fullDynamics,getDurationEstimate:()=>lengthString()});
  if(view.nav==="studio")render();
})();