/* SUNOBOOM 0.91 · Prompt Auditor — additive, explainable, local rules.
   Does not call a model, silently edit source prompts, or alter Suno Studio's builder. */
(function installPromptAuditor(){
  "use strict";
  if(typeof studio!=="function"||typeof promptValue!=="function"||typeof updateOutput!=="function"||typeof myprompts!=="function")return;

  const auditor=SUNOBOOM_CORE.createAuditor({getGenres:()=>GENRES});
  const {MAX,normalize,clauses,words,issue,accepted,inspect,propose}=auditor;
  function auditReport(){return auditor.auditReport({text:currentText(),selectedGenre:genre(),builder:state.mode==='studio'?builder:null});}
  const state={mode:"studio",manual:"",genreId:"",preview:"",removed:[],lastInput:"",lastGenre:"",message:"",proposalOpen:false};
  const esc=value=>escapeHTML(String(value??""));

  const currentGenreId=()=>state.mode==="studio"?builder.genre:(state.genreId||builder.genre);
  const currentText=()=>state.mode==="studio"?String(promptValue()||""):state.manual;
  const genre=()=>typeof GENRES!=="undefined"?GENRES.find(g=>g.id===currentGenreId())||null:null;

  const important=phrase=>/\b(?:no|without|never|avoid|exclude|bpm|vocals?|lyrics|instrumental|studio|choir|whisper|raspy|male|female|duet|genre)\b|без\s+|не\s+ш[её]пот/iu.test(phrase);

  const itemHTML=x=>'<li class="sbpa-item sbpa-'+x.kind+'"><div><strong>'+esc(x.title)+'</strong><p>'+esc(x.detail)+'</p><small>'+esc(x.fix)+'</small></div></li>';

  function resultMarkup(){
    const report=auditReport(),status=report.status;
    const issues=report.issues.length?'<ul class="sbpa-issues">'+report.issues.map(itemHTML).join("")+'</ul>':
      '<p class="sbpa-clear">Явных противоречий и повторов по проверяемым правилам не найдено.</p>';
    return '<div class="sbpa-scoreline"><div class="sbpa-score" aria-label="Эвристическая оценка промпта">'+report.score+'<small>/ 100</small></div>'+
      '<div class="sbpa-score-info"><strong>'+esc(status)+'</strong><span>Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.</span>'+
      '<div class="sbpa-meter" role="progressbar" aria-label="Оценка промпта" aria-valuenow="'+report.score+'" aria-valuemin="0" aria-valuemax="100"><span style="width:'+report.score+'%"></span></div></div>'+
      '<div class="sbpa-limit'+(report.length>MAX?' over':'')+'">'+report.length+' / '+MAX+' символов</div></div>'+
      issues;
  }
  function proposalMarkup(){
    if(!state.proposalOpen)return "";
    const result=propose(currentText()),msgs=result.removed;
    return '<div class="sbpa-proposal"><h4>Предлагаемый вариант <small>'+result.text.length+' / 1000</small></h4>'+
      '<p>'+(!msgs.length?"Удалять нечего: текст уже без точных повторов.":'Удалено фрагментов: '+msgs.length+'. Проверь смысл до копирования.')+'</p>'+
      (msgs.length?'<details><summary>Что изменилось</summary><ul>'+msgs.map(x=>'<li><b>'+esc(x.reason)+':</b> '+esc(x.part)+'</li>').join("")+'</ul></details>':'')+
      (!result.complete?'<p class="sbpa-alert">Автоматического сокращения недостаточно. Уменьши текст вручную минимум на '+(result.text.length-MAX)+' символов.</p>':'')+
      '<label for="sbpa-preview-text">Редактируемый предпросмотр</label>'+
      '<textarea id="sbpa-preview-text" rows="5" spellcheck="false">'+esc(result.text)+'</textarea>'+
      '<div class="sbpa-actions"><button type="button" data-sbpa-action="copy-preview" class="sbpa-primary">Подтвердить и скопировать</button>'+
      '<button type="button" data-sbpa-action="close-preview">Закрыть</button></div>'+
      '<small>Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.</small></div>';
  }
  function auditorMarkup(){
    const manual=state.mode==="manual",sel=currentGenreId();
    const opts=(Array.isArray(GENRES)?GENRES:[]).map(g=>'<option value="'+esc(g.id)+'"'+(g.id===sel?' selected':'')+'>'+esc(g.name)+'</option>').join("");
    return '<section class="sbpa-auditor" id="sbpa-auditor" aria-label="Аудитор промптов">'+
      '<header class="sbpa-head"><div><span class="sbpa-eyebrow">SUNOBOOM · ПРОВЕРКА</span>'+
      '<h2>Интеллектуальный аудитор промптов</h2><p>Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.</p></div>'+
      '<span class="sbpa-local">Проверка по правилам · без API</span></header>'+
      '<div class="sbpa-tabs" role="group" aria-label="Источник промпта">'+
      '<button type="button" data-sbpa-action="studio" aria-pressed="'+(!manual)+'" class="'+(!manual?'active':'')+'">Текущий промпт Studio</button>'+
      '<button type="button" data-sbpa-action="manual" aria-pressed="'+manual+'" class="'+(manual?'active':'')+'">Свой текст / вставка</button></div>'+
      (manual?'<div class="sbpa-manual"><label for="sbpa-text">Текст промпта</label>'+
        '<textarea id="sbpa-text" rows="5" spellcheck="false" placeholder="Вставь текст на русском или английском…">'+esc(state.manual)+'</textarea>'+
        '<label for="sbpa-genre">Жанр для сопоставления с Академией</label>'+
        '<select id="sbpa-genre">'+opts+'</select></div>':
        '<p class="sbpa-context">Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически.</p>')+
      '<div id="sbpa-results" aria-live="polite">'+resultMarkup()+'</div>'+
      '<div class="sbpa-actions"><button type="button" data-sbpa-action="preview" class="sbpa-primary">Показать улучшенный вариант</button>'+
      (manual?'<button type="button" data-sbpa-action="load-studio">Вставить текущий промпт Studio</button>':'')+'</div>'+
      '<div id="sbpa-proposal-slot">'+proposalMarkup()+'</div>'+
      '<p class="sbpa-foot">Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть творческим решением, а рекомендации не изменяют исходник без твоего действия.</p></section>';
  }
  function refresh(){
    if(view.nav!=="studio")return;
    // Do not mutate a Vue-owned subtree. Vue requests the authoritative report.
    if(document.getElementById("sbpa-auditor")?.hasAttribute("data-v-app")){
      window.dispatchEvent(new Event("sunoboom:auditor-updated"));
      return;
    }
    const results=document.getElementById("sbpa-results");
    if(results)results.innerHTML=resultMarkup();
    const slot=document.getElementById("sbpa-proposal-slot");
    if(slot&&state.proposalOpen)slot.innerHTML=proposalMarkup();
  }
  function openManual(text,genreId){
    state.mode="manual";state.manual=String(text||"");
    state.genreId=genreId||builder.genre;state.proposalOpen=false;
    go("studio");
    document.getElementById("sbpa-auditor")?.scrollIntoView?.({behavior:"smooth",block:"start"});
  }
  const oldStudio=studio;
  studio=function(){return oldStudio.apply(this,arguments)+auditorMarkup();};
  const oldUpdate=updateOutput;
  updateOutput=function(){const out=oldUpdate.apply(this,arguments);refresh();return out;};
  const oldMyPrompts=myprompts;
  myprompts=function(){
    const html=oldMyPrompts.apply(this,arguments);
    const key='<div class="detail-actions" data-sb-workspace="prompt-actions">';
    const extra='<div class="sbpa-editor-entry" data-sb-workspace="prompt-auditor"><button type="button" data-sbpa-action="from-editor">🔎 Проверить этот промпт в аудиторе</button>'+
      '<span>Переносит текст на проверку, не сохраняя и не изменяя текущую запись.</span></div>';
    return html.includes(key)?html.replace(key,extra+key):html;
  };
  document.addEventListener("input",event=>{
    if(view.nav!=="studio"||event.target?.id!=="sbpa-text")return;
    state.manual=event.target.value;state.proposalOpen=false;
    const slot=document.getElementById("sbpa-proposal-slot");if(slot&&!slot.closest("[data-v-app]"))slot.innerHTML="";
    refresh();
  });
  document.addEventListener("change",event=>{
    if(view.nav!=="studio"||event.target?.id!=="sbpa-genre")return;
    state.genreId=event.target.value;refresh();
  });
  document.addEventListener("click",async event=>{
    const target=event.target?.closest?.("[data-sbpa-action]");
    if(!target)return;
    const action=target.dataset.sbpaAction;
    if(action==="from-editor"){
      const raw=document.getElementById("custom-prompt-text")?.value||"";
      if(!raw.trim()){if(typeof toast==="function")toast("Сначала введи текст промпта");return;}
      openManual(raw,document.getElementById("custom-prompt-genre")?.value||builder.genre);return;
    }
    if(view.nav!=="studio")return;
    if(action==="studio"||action==="manual"){
      if(state.mode===action)return;
      state.mode=action;if(!state.genreId)state.genreId=builder.genre;
      state.proposalOpen=false;render();document.getElementById("sbpa-auditor")?.scrollIntoView?.({block:"start"});return;
    }
    if(action==="load-studio"){
      state.mode="manual";state.manual=String(promptValue()||"");state.genreId=builder.genre;state.proposalOpen=false;
      render();document.getElementById("sbpa-auditor")?.scrollIntoView?.({block:"start"});return;
    }
    if(action==="preview"){
      state.proposalOpen=true;const slot=document.getElementById("sbpa-proposal-slot");
      if(document.getElementById("sbpa-auditor")?.hasAttribute("data-v-app"))refresh();
      else if(slot)slot.innerHTML=proposalMarkup();
      return;
    }
    if(action==="close-preview"){
      state.proposalOpen=false;const slot=document.getElementById("sbpa-proposal-slot");
      if(document.getElementById("sbpa-auditor")?.hasAttribute("data-v-app"))refresh();
      else if(slot)slot.innerHTML="";
      return;
    }
    if(action==="copy-preview"){
      const val=document.getElementById("sbpa-preview-text")?.value||"";
      if(!val.trim()){if(typeof toast==="function")toast("Предпросмотр пуст");return;}
      if(val.length>MAX){if(typeof toast==="function")toast("Сначала сократи текст до 1000 символов");return;}
      try{
        if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(val);
        else{
          const input=document.createElement("textarea");
          input.value=val;input.style.position="fixed";input.style.top="-9999px";document.body.appendChild(input);
          input.select();const copied=document.execCommand("copy");input.remove();if(!copied)throw Error("copy failed");
        }
        if(typeof toast==="function")toast("Проверенный вариант скопирован — исходник сохранён");
      }catch(error){if(typeof toast==="function")toast("Не удалось скопировать: выдели текст вручную");}
    }
  });
  // Native Vue panel consumes snapshots, never a second copy of audit rules.
  window.SUNOBOOM_LEGACY_AUDITOR=Object.freeze({
    snapshot(){
      if(view.nav!=="studio")return null;
      return {
        mode:state.mode,manual:state.manual,genreId:currentGenreId(),
        genres:Array.isArray(GENRES)?GENRES.map(g=>({id:g.id,name:g.name})):[],
        report:auditReport(),
        proposalOpen:state.proposalOpen,
        proposal:state.proposalOpen?propose(currentText()):null
      };
    }
  });
  window.SUNOBOOM_PROMPT_AUDITOR=Object.freeze({version:"0.91",analyze:(text,genreId)=>inspect(text,(Array.isArray(GENRES)?GENRES:[]).find(g=>g.id===genreId)||null),propose,openManual});
})();
