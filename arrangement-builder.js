/* SUNOBOOM 0.66 · Visual Arrangement Builder
   Additive Suno Studio instrument; local draft, manual export to existing builder.
   No external libraries, no changes to existing prompt/lyrics engines. */
(function installArrangementBuilder(){
  "use strict";
  if(typeof studio!=="function"||typeof builder==="undefined"||typeof promptValue!=="function"||typeof updateOutput!=="function")return;
  const arrangement=SUNOBOOM_CORE.createArrangement({studio:studioCore,getGenres:()=>GENRES});
  const {MAX_BLOCKS,SECTION,TRANSITIONS,TRANSITION_LENGTH,TRANSITION_STRENGTH,makeTransition,transitionTag,transitionTip,transitionShortLabel,transitionStyleSummary,VOICES,ENERGY,PRESETS,GENRE_CHOICE_PREFIX,genreChoices,choiceMeta,genreArchetype,genreSoundCues,genrePresetBlocks,choicePresetBlocks,safeStr,safeTitle,makeBlock,presetBlocks,nameFor,cues,generatedLyrics,lengthSeconds,lengthString,stageName,shortDynamics,fullDynamics,normalizeQuery,soundGenreForBlock,SMART_ROLE,SMART_FAMILY_BANK,smartFamily,smartRoleInfo,smartRoleCues,smartDynamicsCues,smartPurpose,soundSuggestions}=arrangement;
  const fieldDrafts=new Map();
  function command(name,payload){
    const result=arrangement.execute(name,payload);
    if(name==='field'){
      const values={...fieldDrafts.get(payload.id)};
      if(result.ok)delete values[payload.key];else values[payload.key]=payload.value;
      if(Object.keys(values).length)fieldDrafts.set(payload.id,values);else fieldDrafts.delete(payload.id);
    }else if(result.ok&&['preset','import'].includes(name))fieldDrafts.clear();
    else if(result.ok&&name==='remove')fieldDrafts.delete(payload.id);
    if(!result.ok)show(result.error);return result;
  }

  // Transitions are anchored to the outgoing section (and move with it).

  // Genre-aware choices are sourced from the existing Academy collection, not duplicated here.

  const esc=x=>escapeHTML(String(x??""));

  const state={selectedPreset:arrangement.state.activePreset,presetFilter:"all",presetPending:null,presetMenuOpen:false,presetQuery:"",insertAfter:null,transfer:null,applied:null,message:"",tab:"lyrics",expanded:true,snakeExpanded:false,transitionOpenId:null,transitionHubExpanded:false,dragId:null};
  for(const key of ['blocks','activePreset','transfer','applied']){delete state[key];Object.defineProperty(state,key,{get:()=>arrangement.state[key]});}
  const soundPicker={blockId:null,mode:"sounds",soundQuery:"",genreQuery:"",typingId:null,typingQuery:""};
  function panel(){
    const choice=choiceMeta(state.selectedPreset)||choiceMeta("pop");
    const genreCount=genreChoices().length;
    return '<section id="sba-arranger" class="sba-shell" aria-labelledby="sba-heading">'+
      '<header class="sba-hero"><div class="sba-hero-copy"><span class="sba-eyebrow">SUNO STUDIO · КОНСТРУКТОР</span><h2 id="sba-heading">Визуальная аранжировка <span>✦</span></h2>'+
      '<p>Собери структуру трека, настрой энергию каждого фрагмента и подготовь теги исполнения для Suno. Стандартные инструменты Studio останутся без изменений.</p></div><span class="sba-hero-label">ARRANGEMENT LAB · v0.75</span></header>'+
      '<div class="sba-toolbar"><div class="sba-preset-picker"><span class="sba-preset-caption">Шаблон композиции / жанр</span>'+
      '<button type="button" id="sba-presets" class="sba-preset-trigger" data-sba-action="menu-toggle" aria-haspopup="dialog" aria-expanded="false" aria-controls="sba-preset-menu"><span id="sba-picked-label">'+esc(choice.ru)+'</span><span class="sba-preset-chevron" aria-hidden="true">⌄</span></button>'+
      '<div id="sba-preset-menu" class="sba-preset-menu" role="dialog" aria-label="Поиск шаблона или жанра" hidden>'+
      '<div class="sba-preset-search-row"><input type="search" id="sba-preset-search" autocomplete="off" placeholder="Найти жанр или шаблон..." aria-label="Поиск жанра"/><button type="button" data-sba-action="menu-close" aria-label="Закрыть меню">×</button></div>'+
      '<div class="sba-preset-filters" role="group" aria-label="Тип вариантов"><button type="button" data-sba-action="menu-filter" data-filter="all">Все</button><button type="button" data-sba-action="menu-filter" data-filter="templates">Шаблоны</button><button type="button" data-sba-action="menu-filter" data-filter="genres">Жанры Академии ('+genreCount+')</button></div>'+
      '<div class="sba-preset-results" id="sba-preset-results" role="listbox" aria-label="Доступные шаблоны и жанры"></div></div></div>'+
      '<span data-sb-arranger-controls="apply" style="display:contents"><button type="button" data-sba-action="request-preset" class="sba-btn sba-preset-btn">Применить шаблон</button></span>'+
      '<span class="sba-draft-saved" id="sba-saved">Черновик сохраняется в браузере</span></div>'+
      '<div id="sba-preset-confirm" data-sb-arranger-controls="preset-confirm" aria-live="polite"></div>'+
      '<section class="sba-snake-overview" aria-label="Краткая схема последовательности блоков">'+
        '<div class="sba-snake-top"><div><span class="sba-snake-eyebrow">СХЕМА ПЕСНИ</span><h3>Змейка аранжировки <span aria-hidden="true">〰</span></h3></div>'+
        '<div class="sba-snake-tools" data-sb-arranger-controls="snake-tools"><span id="sba-snake-meta" class="sba-snake-meta"></span><button type="button" id="sba-snake-toggle" data-sba-action="snake-toggle" hidden>Показать все</button></div></div>'+
        '<div id="sba-snake-track" class="sba-snake-track" aria-live="polite"></div>'+
        '<p class="sba-snake-footnote">Перетаскивай блоки в змейке мышью или пальцем. Порядок и черновик обновятся автоматически.</p>'+
        '<span id="sba-snake-status" class="sba-sr-only" role="status" aria-live="polite"></span>'+
      '</section>'+
      '<section class="sba-transition-hub" aria-labelledby="sba-transition-hub-title">'+
        '<div class="sba-transition-hub-heading"><div class="sba-transition-hub-heading-copy">'+
          '<span class="sba-transition-hub-kicker">НОВОЕ · v0.75</span>'+
          '<h3 id="sba-transition-hub-title">✦ Конструктор музыкальных переходов</h3>'+
          '<p>Соедини соседние блоки сбивкой, нарастанием, паузой, плавным переходом, затуханием или акцентом. Выбирай здесь — эффект появится в тегах Suno.</p>'+
        '</div><span id="sba-transition-hub-meta" class="sba-transition-hub-meta"></span></div>'+
        '<div id="sba-transition-hub-list" class="sba-transition-hub-list"></div>'+
        '<span data-sb-arranger-controls="expand" style="display:contents"><button type="button" id="sba-transition-hub-expand" class="sba-transition-hub-expand" data-sba-action="transition-hub-expand" hidden>Показать все переходы</button></span>'+
      '</section>'+
      '<div class="sba-body">'+
      '<div class="sba-editor">'+
        '<div class="sba-panel-title"><div><h3>Структура песни</h3><p>Перетаскивай блоки на компьютере или используй ↑ ↓ на телефоне.</p></div><span id="sba-section-count" class="sba-count"></span></div>'+
        '<div class="sba-add" id="sba-add-editor" data-sb-arranger-controls="composer"><div class="sba-add-title"><strong>+ Новый блок</strong><span id="sba-add-placement" role="status">Добавится в конец композиции</span></div>'+
          '<div class="sba-add-row"><label for="sba-add-type">Тип фрагмента<select id="sba-add-type">'+Object.entries(SECTION).map(([k,v])=>'<option value="'+k+'">'+esc(v.ru)+'</option>').join("")+'</select></label>'+
          '<label id="sba-custom-name-wrap" for="sba-new-block-title" hidden>Название своего блока<input id="sba-new-block-title" type="text" maxlength="48" placeholder="Например: Разговорный переход" autocomplete="off"/></label></div>'+
          '<div class="sba-add-row sba-add-controls"><button class="sba-btn sba-add-btn" data-sba-action="add" type="button">+ Добавить блок</button><button class="sba-btn sba-placement-reset" data-sba-action="reset-insert" type="button" hidden>Добавлять в конец</button></div>'+
          '<p class="sba-add-hint">Выбери куплет, припев, дроп или свой фрагмент. После добавления можно настроить такты, энергию, вокал и инструменты.</p>'+
        '</div>'+
        '<div id="sba-cards" class="sba-block-list"></div>'+
        '<span data-sb-arranger-controls="end-add" style="display:contents"><button type="button" class="sba-end-add" data-sba-action="insert-end">+ Добавить блок в конец</button></span>'+
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

  function renderPresetMenu(){
    const target=document.getElementById("sba-preset-results");if(!target)return;
    state.presetQuery=document.getElementById("sba-preset-search")?.value||"";
    if(target.closest(".sba-preset-picker[data-v-app]")){
      window.dispatchEvent(new Event("sunoboom:arranger-updated"));
      return;
    }
    const q=normalizeQuery(state.presetQuery);
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
    state.presetMenuOpen=!!open;
    menu.hidden=!open;button.setAttribute("aria-expanded",String(open));
    if(open){renderPresetMenu();document.getElementById("sba-preset-search")?.focus();}
    window.dispatchEvent(new Event("sunoboom:arranger-updated"));
  }
  function options(obj,current){
    return Object.entries(obj).map(([key,item])=>'<option value="'+key+'"'+(key===current?' selected':'')+'>'+esc(item.ru)+'</option>').join("");
  }

  // Every Academy genre supplies its own instruments / production techniques.
  // The list is derived from the canonical GENRES data, never a second hard-coded genre catalog.

  // v0.71 · Genre x section role x energy x vocal context rules.
  // All actual genre entries continue to come from the existing Academy GENRES array.

  // Sections in each family: intro, verse, rise, peak, drop, break, solo, outro.
  // Suggestions are short production cues intended for Suno, not sound playback.

  // Pop is a neutral fallback if a niche Academy entry has no dedicated section bank.

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
    if(root&&!root.closest("#sba-cards[data-v-app]"))root.innerHTML=quickSoundsHTML(block);
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
    if(root?.closest("#sba-cards[data-v-app]")){
      window.dispatchEvent(new Event("sunoboom:arranger-updated"));
      return;
    }
    if(root)root.innerHTML=soundPanelBody(block);
  }
  function redrawSoundOptions(block){
    const root=document.getElementById("sba-sound-results-"+block.id);
    if(root?.closest("#sba-cards[data-v-app]")){
      window.dispatchEvent(new Event("sunoboom:arranger-updated"));
      return;
    }
    if(root)root.innerHTML=soundPicker.mode==="genres"?soundGenreOptions():soundChoiceOptions(block);
  }

  function transitionHTML(block,index){
    if(index>=state.blocks.length-1)return "";
    const next=state.blocks[index+1],t=makeTransition(block.transitionOut),active=t.type!=="none";
    const open=state.transitionOpenId===block.id,guess=transitionTip(block,next);
    const summary=active?TRANSITIONS[t.type].ru+" · "+TRANSITION_LENGTH[t.length].ru+
      " · "+TRANSITION_STRENGTH[t.strength].ru:"Без перехода";
    return '<div class="sba-transition-wrap'+(active?' sba-transition-active':'')+'" data-sba-from="'+esc(block.id)+'">'+
      '<div class="sba-transition-line"><span class="sba-transition-link" aria-hidden="true">↳</span>'+
      '<div class="sba-transition-summary"><strong>Переход '+(index+1)+' → '+(index+2)+'</strong>'+
      '<span>'+esc(summary)+'</span></div>'+
      '<button type="button" class="sba-transition-toggle" data-sba-action="transition-toggle" data-id="'+esc(block.id)+
      '" aria-expanded="'+open+'">'+(open?'Скрыть':'Настроить')+' <span aria-hidden="true">⚙</span></button></div>'+
      (open?'<div class="sba-transition-editor">'+
        '<p class="sba-transition-explain">Из «'+esc(snakeName(block,index))+'» в «'+esc(snakeName(next,index+1))+'». Эффект не добавляет новый блок песни.</p>'+
        '<div class="sba-transition-fields">'+
          '<label>Тип перехода<select data-sba-transition="type" data-id="'+esc(block.id)+'">'+options(TRANSITIONS,t.type)+'</select></label>'+
          '<label>Длительность<select data-sba-transition="length" data-id="'+esc(block.id)+'">'+options(TRANSITION_LENGTH,t.length)+'</select></label>'+
          '<label>Выраженность<select data-sba-transition="strength" data-id="'+esc(block.id)+'">'+options(TRANSITION_STRENGTH,t.strength)+'</select></label>'+
        '</div>'+
        '<div class="sba-transition-suggestion"><span>Рекомендуется: <b>'+esc(TRANSITIONS[guess.type].ru)+'</b> · '+
          esc(TRANSITION_LENGTH[guess.length].ru.toLowerCase())+'</span>'+
          '<button type="button" data-sba-action="transition-suggest" data-id="'+esc(block.id)+'">Применить совет</button></div>'+
        (active?'<div class="sba-transition-tag">Lyrics: <code>'+esc(transitionTag(block))+'</code>'+
          '<button type="button" data-sba-action="transition-clear" data-id="'+esc(block.id)+'">Убрать переход</button></div>':"")+
      '</div>':"")+'</div>';
  }

  function blockHTML(b,i){
    b={...b,...fieldDrafts.get(b.id)};
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
     '</div></article>'+transitionHTML(b,i)+'<button type="button" class="sba-between-add" data-sba-action="insert-after" data-id="'+b.id+'" aria-label="Добавить блок после '+esc(nameFor(b,i))+'"><span aria-hidden="true">＋</span> Добавить после</button>';
  }
  function energyHTML(){
    const n=state.blocks.length;
    return state.blocks.map((b,i)=>'<div class="sba-chart-step" title="'+esc(nameFor(b,i))+' · '+b.energy+'/5" style="--energy:'+b.energy+';--bar-width:'+(100/n)+'%">'+
      '<div class="sba-chart-column"><i style="--level:'+b.energy+'"></i></div><small>'+esc(SECTION[b.type].icon)+'</small></div>').join("");
  }

  // Compact read-only arrangement snake: always follows actual block state and order.
  const SNAKE_PREVIEW_COUNT=12;
  const SNAKE_SHORT_LABEL={
    intro:"Вступление",verse:"Куплет",prechorus:"Предприпев",
    chorus:"Припев",postchorus:"Постприпев",bridge:"Бридж",
    build:"Разгон",drop:"Дроп",breakdown:"Брейк",
    solo:"Соло",instrumental:"Инструментал",finalchorus:"Финал",
    outro:"Конец",custom:"Свой блок"
  };
  function snakeName(block,index){
    if(block.type==="custom")return safeTitle(block.customName)||"Свой блок";
    const base=SNAKE_SHORT_LABEL[block.type]||SECTION[block.type]?.ru||"Фрагмент";
    if(block.type==="verse"){
      const number=state.blocks.slice(0,index+1).filter(b=>b.type==="verse").length;
      return base+" "+number;
    }
    return base;
  }
  function snakeRowsHTML(items,columns){
    const result=[];
    for(let start=0;start<items.length;start+=columns){
      const reverse=Math.floor(start/columns)%2===1;
      const continued=start+columns<items.length;
      const row=items.slice(start,start+columns).map((block,offset)=>{
        const index=start+offset,label=snakeName(block,index);
        return '<button type="button" draggable="true" class="sba-snake-chip" data-sba-snake-id="'+esc(block.id)+'" data-sba-energy="'+block.energy+'" '+
          'aria-label="'+esc("Переместить "+label+", позиция "+(index+1)+" из "+state.blocks.length+", энергия "+block.energy+"/5")+'" '+
          'title="'+esc(String(index+1)+". "+label+" · энергия "+block.energy+"/5 · перетащи для перестановки")+'">'+
          '<span class="sba-snake-num">'+(index+1)+'</span>'+
          '<span class="sba-snake-icon" aria-hidden="true">'+esc(SECTION[block.type].icon)+'</span>'+
          '<span class="sba-snake-title">'+esc(label)+'</span>'+
          '<span class="sba-snake-level">'+block.energy+'/5</span>'+
          (index<state.blocks.length-1&&makeTransition(block.transitionOut).type!=="none"?
            '<span class="sba-snake-transition" title="'+esc("Переход: "+transitionShortLabel(block))+'" aria-hidden="true">↝</span>':"")+
          '</button>';
      }).join("");
      result.push('<div class="sba-snake-row'+(reverse?' sba-snake-reverse':'')+
        (continued?' sba-snake-continues':'')+'">'+row+'</div>');
    }
    return result.join("");
  }
  function updateSnakeOverview(){
    const root=document.getElementById("sba-snake-track");
    if(!root)return;
    const total=state.blocks.length,shown=state.snakeExpanded?total:Math.min(total,SNAKE_PREVIEW_COUNT);
    const visible=state.blocks.slice(0,shown);
    const summary=visible.map((b,i)=>(i+1)+". "+snakeName(b,i)).join(" → ");
    const desktop=snakeRowsHTML(visible,6),mobile=snakeRowsHTML(visible,3);
    if(!root.hasAttribute("data-v-app"))root.innerHTML=total?
      '<div class="sba-snake-desktop" role="group" aria-label="'+esc("Схема блоков: "+summary)+'">'+desktop+'</div>'+
      '<div class="sba-snake-mobile" role="group" aria-label="'+esc("Схема блоков: "+summary)+'">'+mobile+'</div>'+
      (shown<total?'<p class="sba-snake-more">… и ещё '+(total-shown)+' блоков</p>':""):
      '<p class="sba-snake-empty">Добавь первый блок, и здесь появится схема композиции.</p>';
    const meta=document.getElementById("sba-snake-meta");
    if(meta&&!meta.closest("[data-v-app]"))meta.textContent=total+" блоков · ≈ "+lengthString();
    const toggle=document.getElementById("sba-snake-toggle");
    if(toggle&&!toggle.closest("[data-v-app]")){
      toggle.hidden=total<=SNAKE_PREVIEW_COUNT;
      toggle.textContent=state.snakeExpanded?"Свернуть":"Показать все ("+total+")";
      toggle.setAttribute("aria-expanded",String(state.snakeExpanded));
    }

  }

  // Discoverable transition controls immediately below the snake.
  // Mirrors per-block editors and shares the same source-of-truth block data.
  function transitionHubHTML(){
    const count=state.blocks.length-1;
    if(count<1)return '<p class="sba-transition-hub-empty">Добавь второй блок, и здесь можно будет настроить переходы.</p>';
    const limit=state.transitionHubExpanded?count:Math.min(count,3);
    return state.blocks.slice(0,limit).map((block,i)=>{
      const next=state.blocks[i+1],current=makeTransition(block.transitionOut),active=current.type!=="none";
      const advice=transitionTip(block,next);
      return '<div class="sba-transition-hub-row'+(active?' sba-transition-hub-active':'')+'" data-sba-hub-from="'+esc(block.id)+'">'+
        '<div class="sba-transition-hub-route"><span class="sba-transition-hub-number">'+(i+1)+' → '+(i+2)+'</span>'+
          '<span class="sba-transition-hub-names">'+esc(snakeName(block,i))+' <b>→</b> '+esc(snakeName(next,i+1))+'</span>'+
        '</div>'+
        '<div class="sba-transition-hub-controls">'+
          '<label>Эффект<select data-sba-transition="type" data-id="'+esc(block.id)+'" aria-label="'+esc("Переход "+(i+1)+" к "+(i+2))+'">'+options(TRANSITIONS,current.type)+'</select></label>'+
          '<label>Длина<select data-sba-transition="length" data-id="'+esc(block.id)+'" aria-label="'+esc("Длительность перехода "+(i+1))+'">'+options(TRANSITION_LENGTH,current.length)+'</select></label>'+
          '<label>Сила<select data-sba-transition="strength" data-id="'+esc(block.id)+'" aria-label="'+esc("Выраженность перехода "+(i+1))+'">'+options(TRANSITION_STRENGTH,current.strength)+'</select></label>'+
        '</div>'+
        '<div class="sba-transition-hub-actions">'+
          '<button type="button" data-sba-action="transition-suggest" data-id="'+esc(block.id)+'" title="'+esc("Совет: "+TRANSITIONS[advice.type].ru)+'">✧ Совет</button>'+
          '<button type="button" data-sba-action="transition-hub-jump" data-id="'+esc(block.id)+'">Подробнее ↓</button>'+
        '</div>'+
      '</div>';
    }).join("");
  }
  function updateTransitionHub(){
    const root=document.getElementById("sba-transition-hub-list");
    if(!root)return;
    const count=Math.max(0,state.blocks.length-1);
    const active=state.blocks.slice(0,-1).filter(b=>makeTransition(b.transitionOut).type!=="none").length;
    if(!root.hasAttribute("data-v-app"))root.innerHTML=transitionHubHTML();
    const meta=document.getElementById("sba-transition-hub-meta");
    if(meta)meta.textContent=count+" переходов · "+active+" настроено";
    const expand=document.getElementById("sba-transition-hub-expand");
    if(expand&&!expand.closest("[data-v-app]")){
      expand.hidden=count<=3;
      expand.textContent=state.transitionHubExpanded?"Свернуть список":"Показать все ("+count+")";
      expand.setAttribute("aria-expanded",String(state.transitionHubExpanded));
    }

  }

  function updateDerived(){
    const text=state.tab==="lyrics"?generatedLyrics():fullDynamics();
    const preview=document.getElementById("sba-preview");if(preview&&!preview.closest(".sba-result[data-v-app]"))preview.value=text;
    const count=document.getElementById("sba-preview-count");
    if(count&&!count.closest(".sba-result[data-v-app]"))count.textContent=state.tab==="lyrics"?state.blocks.length+" секций · "+text.length+" символов":"Style · "+text.length+" символов · проверка лимита при переносе";
    updateSnakeOverview();
    updateTransitionHub();
    const stats=document.getElementById("sba-section-count");
    if(stats)stats.textContent=state.blocks.length+" секций · ≈ "+lengthString();
    const chart=document.getElementById("sba-energy-chart");
    if(chart){if(!chart.hasAttribute("data-v-app"))chart.innerHTML=energyHTML();chart.setAttribute("aria-label",state.blocks.map((b,i)=>nameFor(b,i)+": "+b.energy+" из 5").join("; "));}
    if(!document.querySelector(".sba-result[data-v-app]"))document.querySelectorAll(".sba-preview-tabs button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.tab===state.tab)));
    const message=document.getElementById("sba-message");if(message&&!message.closest(".sba-result[data-v-app]")){message.textContent=state.message;message.hidden=!state.message;}
    window.dispatchEvent(new Event("sunoboom:arranger-updated"));
  }
  function updateAddComposer(){
    const afterIndex=state.insertAfter===null?-1:findIndex(state.insertAfter);
    if(state.insertAfter!==null&&afterIndex<0)state.insertAfter=null;
    if(document.getElementById("sba-add-editor")?.hasAttribute("data-v-app")){window.dispatchEvent(new Event("sunoboom:arranger-updated"));return;}
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
    if(root&&!root.hasAttribute("data-v-app"))root.innerHTML=state.blocks.length?state.blocks.map(blockHTML).join(""):'<div class="sba-empty">Пока нет блоков. Добавь первый фрагмент снизу.</div>';
    updateDerived();updateAddComposer();
  }
  function drawPresetPrompt(){
    const el=document.getElementById("sba-preset-confirm");if(!el)return;
    if(el.hasAttribute("data-v-app")){window.dispatchEvent(new Event("sunoboom:arranger-updated"));return;}
    el.innerHTML=state.presetPending?'<div class="sba-confirm"><span>Заменить текущую структуру шаблоном «'+esc(choiceMeta(state.presetPending)?.ru||"")+'»? Текущие блоки будут заменены.</span><button type="button" data-sba-action="preset-accept">Заменить</button><button type="button" data-sba-action="preset-cancel">Отмена</button></div>':"";
  }
  function drawTransfer(){
    const el=document.getElementById("sba-transfer-confirm");if(!el)return;
    if(el.closest(".sba-result[data-v-app]")){
      window.dispatchEvent(new Event("sunoboom:arranger-updated"));
      return;
    }
    const t=state.transfer;
    el.innerHTML=t?'<div class="sba-transfer-preview"><strong>Предпросмотр переноса в Style</strong><p>Добавим описание аранжировки в дополнительные инструкции Suno Studio, не удаляя твои записи.</p><code>'+esc(t.candidate)+'</code><div class="sba-preview-buttons"><button type="button" data-sba-action="transfer-accept">Подтвердить перенос</button><button type="button" data-sba-action="transfer-cancel">Отмена</button></div><small>Итоговый промпт Studio: '+t.prompt.length+' / 1000 символов</small></div>':"";
  }
  function show(message){state.message=message;updateDerived();}
  function changed(redraw=true){arrangement.cancelTransfer();drawTransfer();if(redraw)drawBlocks();else updateDerived();}
  function swap(i,j){if(!state.blocks[i]||!state.blocks[j]||i===j)return false;if(!command('move',{id:state.blocks[i].id,to:j}).ok)return false;changed();return true;}

  function findIndex(id){return state.blocks.findIndex(b=>b.id===id);}
  // Both the desktop drag and iPhone pointer gesture act on the same song blocks.
  function reorderSnake(fromId,toId){
    const from=findIndex(fromId),to=findIndex(toId);
    if(from<0||to<0||from===to)return false;
    const label=snakeName(state.blocks[from],from);
    if(!swap(from,to))return false;
    const status=document.getElementById("sba-snake-status");
    if(status)status.textContent="Блок «"+label+"» перемещён на позицию "+(to+1);
    return true;
  }
  function clearSnakeDragClasses(){
    document.querySelectorAll(".sba-snake-dragging,.sba-snake-drop-target").forEach(el=>{
      el.classList.remove("sba-snake-dragging","sba-snake-drop-target");
    });
  }
  function highlightSnakeTarget(id){
    document.querySelectorAll(".sba-snake-drop-target").forEach(el=>el.classList.remove("sba-snake-drop-target"));
    if(!id)return;
    document.querySelectorAll("[data-sba-snake-id]").forEach(el=>{
      if(el.dataset.sbaSnakeId===id)el.classList.add("sba-snake-drop-target");
    });
  }
  let snakePointer=null;
  function snakePointerClear(){
    if(snakePointer?.chip?.releasePointerCapture){
      try{if(snakePointer.chip.hasPointerCapture?.(snakePointer.id))snakePointer.chip.releasePointerCapture(snakePointer.id);}catch(e){}
    }
    snakePointer=null;
    clearSnakeDragClasses();
  }
  function prepareTransfer(){const result=arrangement.prepareTransfer();drawTransfer();if(!result.ok)show(result.error);else{state.message='';updateDerived();}}
  function applyTransfer(){const result=arrangement.applyTransfer();drawTransfer();if(!result.ok){show(result.error);return;}const field=document.getElementById('b-extra');if(field)field.value=builder.extra;updateOutput();show('Аранжировка добавлена в Suno Studio. Промпт можно копировать или сохранять как обычно.');}
  const oldStudio=studio;
  studio=function(){
    const original=oldStudio.apply(this,arguments);
    return original.replace('<div class="studio-grid">',
      '<span data-sb-workspace="arranger-jump" style="display:contents"><button type="button" class="sba-jump" data-sba-action="jump"><span>♬</span> Конструктор аранжировки <small>Создать структуру песни</small> <span>↓</span></button></span><div class="studio-grid">')+
      panel();
  };
  function enter(){
    if(view.nav!=="studio")return;
    state.presetMenuOpen=false;
    drawBlocks();drawPresetPrompt();drawTransfer();
  }
  window.addEventListener("sunoboom:before-page",()=>{if(view.nav==="studio")state.presetMenuOpen=false;});
  const oldRender=render;
  render=function(){
    const result=oldRender.apply(this,arguments);
    if(view.nav==="studio")sbAfterRender(enter);
    return result;
  };
  document.addEventListener("click",event=>{
    const control=event.target?.closest?.("[data-sba-action]");
    if(!control||view.nav!=="studio")return;
    const action=control.dataset.sbaAction;
    if(action==="snake-toggle"){state.snakeExpanded=!state.snakeExpanded;updateSnakeOverview();window.dispatchEvent(new Event("sunoboom:arranger-updated"));return;}
    if(action==="transition-hub-expand"){
      state.transitionHubExpanded=!state.transitionHubExpanded;updateTransitionHub();window.dispatchEvent(new Event("sunoboom:arranger-updated"));return;
    }
    if(action==="transition-hub-jump"){
      const id=control.dataset.id,index=findIndex(id);
      if(index<0||index>=state.blocks.length-1)return;
      state.transitionOpenId=id;
      drawBlocks();
      document.querySelector('.sba-transition-wrap[data-sba-from="'+id+'"]')?.scrollIntoView({behavior:"smooth",block:"center"});
      return;
    }
    if(action==="transition-toggle"){
      const id=control.dataset.id,index=findIndex(id);
      if(index<0||index>=state.blocks.length-1)return;
      state.transitionOpenId=state.transitionOpenId===id?null:id;
      drawBlocks();return;
    }
    if(action==="transition-suggest"||action==="transition-clear"){
      const index=findIndex(control.dataset.id);
      if(index<0||index>=state.blocks.length-1)return;
      const block=state.blocks[index];
      if(!command('transition',{id:block.id,mode:action==='transition-clear'?'clear':'suggest'}).ok)return;
      changed();return;
    }

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
      queueMicrotask(()=>document.querySelector("#sba-sound-body-"+id+" .sba-sound-search")?.focus());
      return;
    }
    if(action==="sound-set-genre"){
      const id=control.dataset.id,idx=findIndex(id);
      const genreId=control.dataset.genreId;
      if(idx<0||!GENRES.some(g=>g?.id===genreId))return;
      if(!command('field',{id,key:'instrumentsGenreId',value:genreId}).ok)return;
      soundPicker.mode="sounds";soundPicker.soundQuery="";soundPicker.genreQuery="";
      // Changes the suggestions only; never silently overwrites a manually edited instrument field.
      soundPicker.typingId=null;soundPicker.typingQuery="";
      drawBlocks();return;
    }
    if(action==="sound-add"||action==="sound-clear"){
      const id=control.dataset.id,idx=findIndex(id);
      if(idx<0)return;
      const block=state.blocks[idx];
      if(!command('sound',{id,mode:action==='sound-clear'?'clear':'add',value:control.dataset.soundValue}).ok)return;
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
      const result=command('add',{type:value,title:name,afterId:state.insertAfter});if(!result.ok)return;const block=result.value;state.insertAfter=null;
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
      if(!command('preset',{name}).ok)return;state.presetPending=null;state.insertAfter=null;state.transitionOpenId=null;
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
    if(action==="transfer-cancel"){arrangement.cancelTransfer();drawTransfer();return;}
    if(action==="transfer-accept"){applyTransfer();return;}
    const id=control.dataset.id,index=findIndex(id);
    if(index<0)return;
    if(action==="up"){swap(index,index-1);return;}
    if(action==="down"){swap(index,index+1);return;}
    if(action==="remove"){if(!command('remove',{id}).ok)return;if(state.transitionOpenId===id)state.transitionOpenId=null;changed();return;}
    if(action==="duplicate"){
      if(state.blocks.length>=MAX_BLOCKS){show("Ограничение: "+MAX_BLOCKS+" блоков.");return;}
      const b=state.blocks[index];
      if(!command('duplicate',{id}).ok)return;
      changed();return;
    }
  });
  document.addEventListener("change",event=>{
    if(view.nav!=="studio")return;
    const el=event.target;
    if(el?.id==="sba-add-type"){updateAddComposer();return;}
    if(el?.dataset?.sbaTransition){
      const index=findIndex(el.dataset.id);
      if(index<0||index>=state.blocks.length-1)return;
      const field=el.dataset.sbaTransition;
      const dictionaries={type:TRANSITIONS,length:TRANSITION_LENGTH,strength:TRANSITION_STRENGTH};
      if(!dictionaries[field]||!dictionaries[field][el.value])return;
      if(!command('transition',{id:el.dataset.id,field,value:el.value}).ok)return;
      changed();return;
    }
    const key=el?.dataset?.sbaField;
    if(!key)return;
    const index=findIndex(el.dataset.id);if(index<0)return;
    const b=state.blocks[index];
    if(!command('field',{id:el.dataset.id,key,value:el.value}).ok)return;
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
      if(!command('field',{id:b.id,key,value:el.value}).ok)return;
      const box=el.closest(".sba-block"),head=box?.querySelector(".sba-block-head strong");
      if(head)head.textContent=nameFor(b,index);
      redrawQuickSounds(b);
    }else if(key==="energy"){
      const energy=Number(el.value);if(energy<1||energy>5)return;
      if(!command('field',{id:b.id,key,value:energy}).ok)return;
      const box=el.closest(".sba-block");
      if(box){box.dataset.sbaEnergy=String(energy);const output=box.querySelector('[data-sba-output="'+b.id+'"]');if(output)output.textContent=energy+"/5 · "+ENERGY[energy].ru;const title=box.querySelector(".sba-head-energy");if(title)title.textContent="Энергия "+energy+"/5";}
      redrawQuickSounds(b);
      if(soundPicker.blockId===b.id)redrawSoundOptions(b);
    }else if(key==="instruments"){
      if(!command('field',{id:b.id,key,value:el.value}).ok)return;
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
    const snake=event.target?.closest?.("[data-sba-snake-id]");
    if(snake){
      // Touch gesture takes precedence if mobile Safari also fires a native dragstart.
      if(snakePointer){event.preventDefault();return;}
      state.snakeDragId=snake.dataset.sbaSnakeId;
      if(event.dataTransfer){
        event.dataTransfer.setData("text/plain",state.snakeDragId);
        event.dataTransfer.effectAllowed="move";
      }
      snake.classList.add("sba-snake-dragging");
      return;
    }
    const handle=event.target?.closest?.("[data-sba-drag]");
    if(!handle)return;
    state.dragId=handle.dataset.sbaDrag;
    event.dataTransfer?.setData("text/plain",state.dragId);
    if(event.dataTransfer)event.dataTransfer.effectAllowed="move";
    handle.closest(".sba-block")?.classList.add("sba-dragging");
  });
  document.addEventListener("dragover",event=>{
    if(view.nav!=="studio")return;
    if(state.snakeDragId){
      const target=event.target?.closest?.("[data-sba-snake-id]");
      if(!target)return;
      event.preventDefault();
      if(event.dataTransfer)event.dataTransfer.dropEffect="move";
      highlightSnakeTarget(target.dataset.sbaSnakeId===state.snakeDragId?null:target.dataset.sbaSnakeId);
      return;
    }
    if(!state.dragId)return;
    const block=event.target?.closest?.(".sba-block");if(!block)return;
    event.preventDefault();
    if(event.dataTransfer)event.dataTransfer.dropEffect="move";
    document.querySelectorAll(".sba-drop-target").forEach(e=>e.classList.remove("sba-drop-target"));
    block.classList.add("sba-drop-target");
  });
  document.addEventListener("drop",event=>{
    if(view.nav!=="studio")return;
    if(state.snakeDragId){
      const target=event.target?.closest?.("[data-sba-snake-id]");
      const source=state.snakeDragId;
      state.snakeDragId=null;clearSnakeDragClasses();
      if(target){event.preventDefault();reorderSnake(source,target.dataset.sbaSnakeId);}
      return;
    }
    if(!state.dragId)return;
    const target=event.target?.closest?.(".sba-block");if(!target)return;
    event.preventDefault();
    const from=findIndex(state.dragId),to=findIndex(target.dataset.sbaId);
    state.dragId=null;
    if(from>=0&&to>=0)swap(from,to);
  });
  document.addEventListener("dragend",()=>{
    state.snakeDragId=null;clearSnakeDragClasses();
    state.dragId=null;
    document.querySelectorAll(".sba-dragging,.sba-drop-target").forEach(el=>el.classList.remove("sba-dragging","sba-drop-target"));
  });
  // Pointer Events are used for touch-based reordering, since Safari on iPhone
  // does not reliably start HTML5 native drag-and-drop on ordinary buttons.
  document.addEventListener("pointerdown",event=>{
    if(view.nav!=="studio"||event.pointerType==="mouse"||!event.isPrimary)return;
    const chip=event.target?.closest?.("[data-sba-snake-id]");
    if(!chip||snakePointer)return;
    snakePointer={id:event.pointerId,source:chip.dataset.sbaSnakeId,target:null,chip,started:false,
      x:event.clientX,y:event.clientY};
    try{chip.setPointerCapture?.(event.pointerId);}catch(e){}
    chip.classList.add("sba-snake-dragging");
  });
  document.addEventListener("pointermove",event=>{
    if(view.nav!=="studio"||!snakePointer||event.pointerId!==snakePointer.id)return;
    const dx=event.clientX-snakePointer.x,dy=event.clientY-snakePointer.y;
    if(!snakePointer.started&&Math.hypot(dx,dy)<6)return;
    snakePointer.started=true;
    event.preventDefault();
    const beneath=document.elementFromPoint?.(event.clientX,event.clientY);
    const target=beneath?.closest?.("[data-sba-snake-id]");
    const targetId=target?.dataset?.sbaSnakeId||null;
    snakePointer.target=targetId&&targetId!==snakePointer.source?targetId:null;
    highlightSnakeTarget(snakePointer.target);
  },{passive:false});
  document.addEventListener("pointerup",event=>{
    if(!snakePointer||event.pointerId!==snakePointer.id)return;
    const {source,target,started}=snakePointer;
    snakePointerClear();
    if(started&&target){event.preventDefault();reorderSnake(source,target);}
  });
  document.addEventListener("pointercancel",event=>{
    if(snakePointer&&event.pointerId===snakePointer.id)snakePointerClear();
  });
  // Keyboard alternative: move one block toward the start/end of the song.
  document.addEventListener("keydown",event=>{
    if(view.nav!=="studio"||!["ArrowLeft","ArrowRight"].includes(event.key))return;
    const chip=event.target?.closest?.("[data-sba-snake-id]");
    if(!chip)return;
    const id=chip.dataset.sbaSnakeId;
    const at=findIndex(id);
    const to=at+(event.key==="ArrowLeft"?-1:1);
    if(to<0||to>=state.blocks.length)return;
    event.preventDefault();
    if(to>=SNAKE_PREVIEW_COUNT&&!state.snakeExpanded)state.snakeExpanded=true;
    if(reorderSnake(id,state.blocks[to].id)){
      const matches=document.querySelectorAll("[data-sba-snake-id]");
      const active=[...matches].find(el=>el.dataset.sbaSnakeId===id&&el.getClientRects?.().length)||[...matches].find(el=>el.dataset.sbaSnakeId===id);
      active?.focus?.({preventScroll:true});
    }
  });

  function exportDraft(){return arrangement.exportDraft();}
  function importDraft(draft){const result=command('import',{draft});if(!result.ok)return false;state.selectedPreset=state.activePreset;state.message='Аранжировка загружена из раздела «Мастер».';state.tab='lyrics';if(view.nav==='studio')render();return true;}
  // Canonical genre/template definitions feed Vue; no second rule database.
  function arrangerPickerSnapshot(){
    const q=normalizeQuery(state.presetQuery);
    const matches=(name,family,id)=>normalizeQuery(name+" "+family+" "+id).includes(q);
    const groups=[];
    if(state.presetFilter!=="genres"){
      const items=Object.entries(PRESETS)
        .filter(([key,v])=>matches(v.ru,"Готовые шаблоны",key))
        .map(([key,v])=>({key,title:v.ru,subtitle:"Готовый шаблон"}));
      if(items.length)groups.push({title:"Готовые структуры",count:null,items});
    }
    if(state.presetFilter!=="templates"){
      const grouped=new Map();
      genreChoices().filter(c=>matches(c.ru,c.family,c.key)).forEach(c=>{
        if(!grouped.has(c.family))grouped.set(c.family,[]);
        grouped.get(c.family).push({key:c.key,title:c.ru,subtitle:c.family});
      });
      const order=typeof familyOrder!=="undefined"&&Array.isArray(familyOrder)?familyOrder:[];
      [...grouped.entries()].sort(([a],[b])=>{
        const ai=order.indexOf(a),bi=order.indexOf(b);
        if(ai>=0&&bi>=0)return ai-bi;
        if(ai>=0)return -1;
        if(bi>=0)return 1;
        return a.localeCompare(b,"ru");
      }).forEach(([family,items])=>groups.push({title:family,count:items.length,items}));
    }
    return {
      selected:choiceMeta(state.selectedPreset)?.ru||"",
      selectedKey:state.selectedPreset,
      filter:state.presetFilter,query:state.presetQuery,
      open:state.presetMenuOpen,genreCount:genreChoices().length,groups
    };
  }
  function arrangerSoundPanelSnapshot(block){
    if(soundPicker.blockId!==block.id)return null;
    const genre=soundGenreForBlock(block);
    const inGenres=soundPicker.mode==="genres";
    const query=inGenres?soundPicker.genreQuery:soundPicker.soundQuery;
    const normalized=normalizeQuery(query);
    if(inGenres){
      const all=genreChoices()
        .filter(c=>normalizeQuery(c.ru+" "+c.family+" "+c.key).includes(normalized))
        .sort((a,b)=>a.family.localeCompare(b.family,"ru")||a.ru.localeCompare(b.ru,"ru"));
      return {
        mode:"genres",query,genreName:genre?.name||"Выбери жанр",
        total:all.length,matches:all.slice(0,55).map(c=>({
          id:c.genre.id,name:c.ru,family:c.family
        }))
      };
    }
    const selected=new Set(String(block.instruments||"").split(",").map(x=>normalizeQuery(x.trim())));
    const groups=soundSuggestions(genre,block).map(group=>({
      title:group.title,
      items:group.items.filter(name=>normalizeQuery(name).includes(normalized))
        .map(name=>({name,added:selected.has(normalizeQuery(name))}))
    })).filter(group=>group.items.length);
    return {
      mode:"sounds",query,genreName:genre?.name||"Выбери жанр",groups
    };
  }
  // Vue reads the real arrangement state. All existing rules remain authoritative.
  window.SUNOBOOM_LEGACY_ARRANGER=Object.freeze({
    restoreComposer(values){
      const type=document.getElementById("sba-add-type"),title=document.getElementById("sba-new-block-title");
      if(type)type.value=values.type;if(title)title.value=values.title;updateAddComposer();
    },
    snapshot(){
      if(view.nav!=="studio")return null;
      const blocks=state.blocks.map((b,i)=>({
        id:b.id,index:i,type:b.type,energy:b.energy,bars:b.bars,vocal:b.vocal,
        instruments:b.instruments,customName:b.customName,instrumentsGenreId:b.instrumentsGenreId,...fieldDrafts.get(b.id),
        label:nameFor(b,i),snakeLabel:snakeName(b,i),
        sectionName:SECTION[b.type].ru,icon:SECTION[b.type].icon,
        hasTransition:i<state.blocks.length-1&&makeTransition(b.transitionOut).type!=="none",
        transitionLabel:transitionShortLabel(b),
        quickSounds:quickSoundsHTML(b),
        soundPanel:arrangerSoundPanelSnapshot(b),
        transitionHTML:transitionHTML(b,i)
      }));
      const mapped=entries=>Object.entries(entries).map(([id,item])=>({id,name:item.ru}));
      return {
        controls:{total:state.blocks.length,previewCount:SNAKE_PREVIEW_COUNT,transitions:Math.max(0,state.blocks.length-1),
          snakeMeta:state.blocks.length+" блоков · ≈ "+lengthString(),pending:state.presetPending?(choiceMeta(state.presetPending)?.ru||""):"",
          type:(window.SUNOBOOM_VIEW_INPUTS?.active?window.SUNOBOOM_VIEW_INPUTS.field('sba-add-type'):document.getElementById('sba-add-type'))?.value||Object.keys(SECTION)[0],title:(window.SUNOBOOM_VIEW_INPUTS?.active?window.SUNOBOOM_VIEW_INPUTS.field('sba-new-block-title'):document.getElementById('sba-new-block-title'))?.value||'',
          inserting:state.insertAfter!==null,placement:state.insertAfter===null?"Добавится в конец композиции":"После блока "+(findIndex(state.insertAfter)+1)+" — "+(SECTION[state.blocks[findIndex(state.insertAfter)]?.type]?.ru||'')},
        blocks,sections:mapped(SECTION),voices:mapped(VOICES),
        picker:arrangerPickerSnapshot(),
        result:{
          tab:state.tab,text:state.tab==="lyrics"?generatedLyrics():fullDynamics(),
          count:state.tab==="lyrics"
            ?state.blocks.length+" секций · "+generatedLyrics().length+" символов"
            :"Style · "+fullDynamics().length+" символов · проверка лимита при переносе",
          transfer:state.transfer?{candidate:state.transfer.candidate,promptLength:state.transfer.prompt.length}:null,
          message:state.message
        },
        energies:Object.fromEntries(Object.entries(ENERGY).map(([id,item])=>[id,item.ru])),
        snakeExpanded:state.snakeExpanded,transitionHubExpanded:state.transitionHubExpanded,
        transitions:state.blocks.slice(0,-1).map((b,i)=>{
          const tip=transitionTip(b,state.blocks[i+1]);
          return {id:b.id,index:i,from:snakeName(b,i),to:snakeName(state.blocks[i+1],i+1),
            current:makeTransition(b.transitionOut),advice:TRANSITIONS[tip.type].ru};
        }),
        transitionTypes:mapped(TRANSITIONS),transitionLengths:mapped(TRANSITION_LENGTH),
        transitionStrengths:mapped(TRANSITION_STRENGTH)
      };
    }
  });
  window.SUNOBOOM_ARRANGER=Object.freeze({version:"0.90",getBlockCount:()=>state.blocks.length,getLyrics:generatedLyrics,getStyle:fullDynamics,getDurationEstimate:()=>lengthString(),exportDraft,importDraft});
  if(view.nav==="studio")render();
 window.SUNOBOOM_WORKSPACE_UI?.register('arranger-jump',()=>({kind:'arranger-jump'}));
})();