/* SUNOBOOM 0.66 · Visual Arrangement Builder
   Additive Suno Studio instrument; local draft, manual export to existing builder.
   No external libraries, no changes to existing prompt/lyrics engines. */
(function installArrangementBuilder(){
  "use strict";
  if(typeof studio!=="function"||typeof builder==="undefined"||typeof promptValue!=="function"||typeof updateOutput!=="function")return;
  const KEY="sunoboom-arrangement-v066";
  const MAX_BLOCKS=24;
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
    outro:{ru:"Завершение",en:"Outro",icon:"◦"}
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
  const esc=x=>escapeHTML(String(x??""));
  const safeStr=s=>String(s||"").replace(/[\[\]\r\n<>]/g," ").replace(/\s+/g," ").trim().slice(0,120);
  let serial=0;
  function makeBlock(type,energy,bars,vocal,instruments){
    return {id:"sba-"+(++serial),type:SECTION[type]?type:"verse",
      energy:Math.max(1,Math.min(5,Number(energy)||3)),
      bars:[2,4,8,12,16,24,32].includes(Number(bars))?Number(bars):8,
      vocal:VOICES[vocal]?vocal:"lead",instruments:safeStr(instruments)};
  }
  function presetBlocks(name){
    return (PRESETS[name]||PRESETS.pop).sections.map(row=>makeBlock(...row));
  }
  const state={blocks:presetBlocks("pop"),activePreset:"pop",presetPending:null,transfer:null,applied:null,message:"",tab:"lyrics",expanded:true,dragId:null};
  function load(){
    try{
      const raw=JSON.parse(localStorage.getItem(KEY)||"{}");
      if(!raw||!Array.isArray(raw.blocks)||raw.blocks.length>MAX_BLOCKS)return;
      state.blocks=raw.blocks.map(b=>makeBlock(b.type,b.energy,b.bars,b.vocal,b.instruments));
      if(PRESETS[raw.activePreset])state.activePreset=raw.activePreset;
    }catch(e){}
  }
  function save(){try{localStorage.setItem(KEY,JSON.stringify({version:1,blocks:state.blocks,activePreset:state.activePreset}));return true}catch(e){return false}}
  function nameFor(b,index){
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
  function stageName(b){return SECTION[b.type].en.toLowerCase().replace("instrumental ","");}
  function shortDynamics(){
    return "Arrangement: "+state.blocks.map(b=>stageName(b)+" "+b.energy+"/5").join(" > ")+".";
  }
  function fullDynamics(){
    const base=shortDynamics();
    const names=[...new Set(state.blocks.map(b=>safeStr(b.instruments)).filter(Boolean))].slice(0,4);
    const arc=state.blocks.some(b=>b.energy===5)?"Build to a powerful climax.":"Gradual dynamic contrast.";
    return base+" "+arc+(names.length?" Instruments: "+names.join("; ")+".":"");
  }
  function panel(){
    const presetOptions=Object.entries(PRESETS).map(([k,v])=>'<option value="'+k+'"'+(k===state.activePreset?' selected':'')+'>'+esc(v.ru)+'</option>').join("");
    return '<section id="sba-arranger" class="sba-shell" aria-labelledby="sba-heading">'+
      '<header class="sba-hero"><div class="sba-hero-copy"><span class="sba-eyebrow">SUNO STUDIO · КОНСТРУКТОР</span><h2 id="sba-heading">Визуальная аранжировка <span>✦</span></h2>'+
      '<p>Собери структуру трека, настрой энергию каждого фрагмента и подготовь теги исполнения для Suno. Стандартные инструменты Studio останутся без изменений.</p></div><span class="sba-hero-label">ARRANGEMENT LAB</span></header>'+
      '<div class="sba-toolbar"><label for="sba-presets">Шаблон композиции<select id="sba-presets">'+presetOptions+'</select></label>'+
      '<button type="button" data-sba-action="request-preset" class="sba-btn sba-preset-btn">Применить шаблон</button>'+
      '<span class="sba-draft-saved" id="sba-saved">Черновик сохраняется в браузере</span></div>'+
      '<div id="sba-preset-confirm" aria-live="polite"></div>'+
      '<div class="sba-body">'+
      '<div class="sba-editor">'+
        '<div class="sba-panel-title"><div><h3>Структура песни</h3><p>Перетаскивай блоки на компьютере или используй ↑ ↓ на телефоне.</p></div><span id="sba-section-count" class="sba-count"></span></div>'+
        '<div id="sba-cards" class="sba-block-list"></div>'+
        '<div class="sba-add"><label for="sba-add-type">Добавить фрагмент</label><div class="sba-add-row"><select id="sba-add-type">'+Object.entries(SECTION).map(([k,v])=>'<option value="'+k+'">'+esc(v.ru)+'</option>').join("")+'</select><button class="sba-btn sba-add-btn" data-sba-action="add" type="button">+ Добавить блок</button></div></div>'+
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
  function options(obj,current){
    return Object.entries(obj).map(([key,item])=>'<option value="'+key+'"'+(key===current?' selected':'')+'>'+esc(item.ru)+'</option>').join("");
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
     '<label class="sba-instrument-field">Инструменты / приём<input type="text" maxlength="120" data-sba-field="instruments" data-id="'+b.id+'" value="'+esc(b.instruments)+'" placeholder="Например: brass, bass, punchy drums"></label></div></article>';
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
  function drawBlocks(){
    const root=document.getElementById("sba-cards");
    if(root)root.innerHTML=state.blocks.length?state.blocks.map(blockHTML).join(""):'<div class="sba-empty">Пока нет блоков. Добавь первый фрагмент снизу.</div>';
    updateDerived();
  }
  function drawPresetPrompt(){
    const el=document.getElementById("sba-preset-confirm");if(!el)return;
    el.innerHTML=state.presetPending?'<div class="sba-confirm"><span>Заменить текущую структуру шаблоном «'+esc(PRESETS[state.presetPending].ru)+'»? Текущие блоки будут заменены.</span><button type="button" data-sba-action="preset-accept">Заменить</button><button type="button" data-sba-action="preset-cancel">Отмена</button></div>':"";
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
    if(action==="jump"){document.getElementById("sba-arranger")?.scrollIntoView({block:"start",behavior:"smooth"});return;}
    if(action==="add"){
      if(state.blocks.length>=MAX_BLOCKS){show("Ограничение: "+MAX_BLOCKS+" блоков в одной композиции.");return;}
      const value=document.getElementById("sba-add-type")?.value||"verse";
      state.blocks.push(makeBlock(value,3,8,value==="intro"||value==="outro"?"none":"lead",""));
      changed();return;
    }
    if(action==="request-preset"){
      const name=document.getElementById("sba-presets")?.value;
      if(!PRESETS[name])return;
      state.presetPending=name;drawPresetPrompt();return;
    }
    if(action==="preset-cancel"){state.presetPending=null;drawPresetPrompt();return;}
    if(action==="preset-accept"){
      if(!PRESETS[state.presetPending])return;
      const name=state.presetPending;
      state.blocks=presetBlocks(name);state.activePreset=name;state.presetPending=null;
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
      state.blocks.splice(index+1,0,makeBlock(b.type,b.energy,b.bars,b.vocal,b.instruments));
      changed();return;
    }
  });
  document.addEventListener("change",event=>{
    if(view.nav!=="studio")return;
    const el=event.target;
    const key=el?.dataset?.sbaField;
    if(!key)return;
    const index=findIndex(el.dataset.id);if(index<0)return;
    const b=state.blocks[index];
    if(key==="type"&&SECTION[el.value])b.type=el.value;
    if(key==="vocal"&&VOICES[el.value])b.vocal=el.value;
    if(key==="bars"){const bars=Number(el.value);if([2,4,8,12,16,24,32].includes(bars))b.bars=bars;}
    changed();
  });
  document.addEventListener("input",event=>{
    if(view.nav!=="studio")return;
    const el=event.target;
    const key=el?.dataset?.sbaField;
    if(!key){
      if(el?.dataset?.builder==="tempo")updateDerived();
      return;
    }
    const index=findIndex(el.dataset.id);if(index<0)return;
    const b=state.blocks[index];
    if(key==="energy"){
      const energy=Number(el.value);if(energy<1||energy>5)return;
      b.energy=energy;
      const box=el.closest(".sba-block");
      if(box){box.dataset.sbaEnergy=String(energy);const output=box.querySelector('[data-sba-output="'+b.id+'"]');if(output)output.textContent=energy+"/5 · "+ENERGY[energy].ru;const title=box.querySelector(".sba-head-energy");if(title)title.textContent="Энергия "+energy+"/5";}
    }else if(key==="instruments")b.instruments=safeStr(el.value);
    else return;
    changed(false);
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
  window.SUNOBOOM_ARRANGER=Object.freeze({version:"0.66",getBlockCount:()=>state.blocks.length,getLyrics:generatedLyrics,getStyle:fullDynamics,getDurationEstimate:()=>lengthString()});
  if(view.nav==="studio")render();
})();