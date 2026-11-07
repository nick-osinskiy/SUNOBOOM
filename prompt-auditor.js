/* SUNOBOOM 0.91 · Prompt Auditor — additive, explainable, local rules.
   Does not call a model, silently edit source prompts, or alter Suno Studio's builder. */
(function installPromptAuditor(){
  "use strict";
  if(typeof studio!=="function"||typeof promptValue!=="function"||typeof updateOutput!=="function"||typeof myprompts!=="function")return;
  const MAX=1000;
  const state={mode:"studio",manual:"",genreId:"",preview:"",removed:[],lastInput:"",lastGenre:"",message:"",proposalOpen:false};
  const esc=value=>escapeHTML(String(value??""));
  const normalize=text=>String(text||"").toLocaleLowerCase("ru").normalize("NFKC").replace(/[.!?()[\]{}"'“”«»]+/g," ").replace(/[\s\-–—_]+/g," ").trim();
  const clauses=text=>String(text||"").split(/[,;\n]+/g).map(x=>x.trim()).filter(Boolean);
  const words=text=>(String(text||"").match(/[\p{L}\p{N}]+/gu)||[]);
  const currentGenreId=()=>state.mode==="studio"?builder.genre:(state.genreId||builder.genre);
  const currentText=()=>state.mode==="studio"?String(promptValue()||""):state.manual;
  const genre=()=>typeof GENRES!=="undefined"?GENRES.find(g=>g.id===currentGenreId())||null:null;
  const issue=(kind,title,detail,fix)=>({kind,title,detail,fix});
  const accepted=(text,pattern)=>{
    const r=new RegExp(pattern.source,pattern.flags.includes("g")?pattern.flags:pattern.flags+"g");
    let match;
    while((match=r.exec(text))!==null){
      const prefix=text.slice(Math.max(0,match.index-28),match.index);
      const prior=prefix.split(/[,;.!?\n]/).pop()||"";
      if(!/(?:\b(?:no|without|avoid|exclude|never|not|noisy|никакого|никаких|без|не)\s+(?:[\p{L}-]+\s+){0,3})$/iu.test(prior))return true;
      if(!match[0])r.lastIndex++;
    }
    return false;
  };
  function inspect(text,selectedGenre){
    const result=[],input=String(text||""),pieces=clauses(input);
    if(!input.trim())return {score:0,issues:[issue("tip","Промпт пуст","Добавь описание жанра и звучания.","Начни с музыкального жанра, инструментов и вокала.")],length:0,repeatCount:0};
    if(input.length>MAX)result.push(issue("error","Превышен лимит Suno",input.length+" из "+MAX+" символов — на "+(input.length-MAX)+" больше допустимого.","Удали повторы и сократи второстепенные описания."));
    else if(input.length>=900)result.push(issue("warn","Мало места для правок",input.length+" из "+MAX+" символов.","Оставь небольшой запас, если планируешь добавлять детали."));
    const seen=new Map(),duplicates=[];
    for(const piece of pieces){
      const norm=normalize(piece);
      if(norm.length<5)continue;
      if(seen.has(norm))duplicates.push(piece);else seen.set(norm,piece);
    }
    if(duplicates.length)result.push(issue("warn","Повторы инструкций",duplicates.length+" повторяющихся фрагментов: "+duplicates.slice(0,3).map(x=>"«"+x.slice(0,70)+"»").join(", ")+".","Убери точные дубликаты, сохранив один экземпляр каждого указания."));
    if(pieces.length>17||words(input).length>150)result.push(issue("warn","Слишком много инструкций","Фрагментов: "+pieces.length+"; слов: "+words(input).length+".","Сосредоточься на главных характеристиках: жанр, ритм, инструменты, вокал, динамика."));
    const tempo=[...input.matchAll(/\b([5-9]\d|1\d\d|2[0-4]\d)\s*bpm\b/gi)].map(m=>Number(m[1]));
    if(new Set(tempo).size>1)result.push(issue("error","Несколько разных темпов",Array.from(new Set(tempo)).join(" и ")+" BPM.","Оставь один основной темп или явно опиши смену темпа по секциям."));
    const checks=[
      {title:"Шёпот",pos:/\bwhisper(?:ing|ed|s)?\b|ш[её]пот(?:ом)?/gi,neg:/\b(?:no|without|avoid|exclude)\s+(?:\w+\s+){0,2}whisper(?:ing|s)?\b|без\s+ш[её]пота/gi},
      {title:"Хор",pos:/\bchoir\b|хор(?:овые|ом)?\b/gi,neg:/\b(?:no|without|avoid|exclude)\s+(?:\w+\s+){0,2}choir\b|без\s+хора/gi},
      {title:"Хриплый вокал",pos:/\b(?:raspy|hoarse|growling)\s+(?:vocals?|voice|singing)\b|хрип(?:лый|отц[аы])?/gi,neg:/\b(?:no|without|avoid|exclude)\s+(?:\w+\s+){0,2}(?:raspy|hoarse|growling)\b|без\s+хрипот[аыы]/gi},
      {title:"Концертное звучание",pos:/\b(?:live performance|live recording|concert crowd|crowd noise|audience applause)\b|концертное\s+звучание/gi,neg:/\b(?:no|without|avoid|exclude)\s+(?:\w+\s+){0,3}(?:live ambience|live performance|crowd noise|audience|concert)\b|без\s+(?:публики|концертного\s+шума)/gi}
    ];
    for(const group of checks){
      if(group.neg.test(input)&&accepted(input,group.pos))result.push(issue("error","Противоречие: "+group.title,"Есть одновременно требование использовать и исключить этот приём.","Выбери одно намерение либо укажи разные секции песни."));
    }
    const instrumental=/\b(?:instrumental only|strictly instrumental|no vocals?|without vocals?|instrumental track)\b|(?:строго\s+)?инструментальная\s+композиция|без\s+вокала/iu;
    const vocal=/\b(?:lead vocals?|sung vocals?|male vocals?|female vocals?|duet vocals?|lead singer)\b|(?:мужской|женский|ведущий)\s+вокал/giu;
    if(instrumental.test(input)&&accepted(input,vocal))result.push(issue("error","Вокал и инструментал одновременно","Промпт одновременно задаёт инструментальную композицию и ведущий вокал.","Уточни: полностью инструментальный трек или песня с голосом."));
    if(selectedGenre){
      const genreName=normalize(selectedGenre.name);
      const textNorm=" "+normalize(input)+" ";
      const picked=textNorm.includes(" "+genreName+" ");
      if(!picked&&genreName.length>=4){
        const possible=(Array.isArray(GENRES)?GENRES:[]).filter(g=>g.id!==selectedGenre.id&&normalize(g.name).length>=5)
          .filter(g=>textNorm.includes(" "+normalize(g.name)+" ")).slice(0,3);
        if(possible.length)result.push(issue("tip","Проверь жанровую направленность","В тексте встречается «"+possible.map(g=>g.name).join("», «")+"», а выбран жанр «"+selectedGenre.name+"».","Если это намеренное смешение жанров, исправления не нужны."));
        else result.push(issue("tip","Жанр не назван явно","В тексте не найдено точное название «"+selectedGenre.name+"».","При необходимости добавь жанр в начало промпта."));
      }
      if(tempo.length&&Array.isArray(selectedGenre.bpm)&&selectedGenre.bpm.length===2){
        const bpm=tempo[0],lo=Number(selectedGenre.bpm[0]),hi=Number(selectedGenre.bpm[1]);
        if(Number.isFinite(lo)&&Number.isFinite(hi)&&(bpm<lo*0.75||bpm>hi*1.25))
          result.push(issue("tip","Темп необычен для выбранного жанра",bpm+" BPM; диапазон Академии для «"+selectedGenre.name+"»: "+lo+"–"+hi+" BPM.","Это не ошибка, если нестандартный грув выбран осознанно."));
      }
    }
    if(!/\b(?:vocals?|voice|singer|singing|instrumental|вокал|голос|без\s+вокала)\b/iu.test(input))
      result.push(issue("tip","Не указан тип вокала","В тексте не видно, нужен ли вокал или инструментал.","Если важно, уточни манеру исполнения или отсутствие голоса."));
    const penalty=result.reduce((n,x)=>n+(x.kind==="error"?23:x.kind==="warn"?10:3),0);
    const length=input.length;
    const lengthBonus=length>MAX?0:length<45?-13:0;
    const score=Math.max(0,Math.min(100,100-penalty+lengthBonus));
    return {score,issues:result,length,repeatCount:duplicates.length};
  }
  const important=phrase=>/\b(?:no|without|never|avoid|exclude|bpm|vocals?|lyrics|instrumental|studio|choir|whisper|raspy|male|female|duet|genre)\b|без\s+|не\s+ш[её]пот/iu.test(phrase);
  function propose(text){
    const raw=String(text||""),lines=clauses(raw),seen=new Set(),kept=[],removed=[];
    for(const part of lines){
      const key=normalize(part);
      if(seen.has(key)){removed.push({part,reason:"точный повтор"});continue;}
      seen.add(key);kept.push(part.replace(/\s+/g," ").trim());
    }
    if(!kept.length)return {text:"",removed,complete:false};
    let draft=kept.join(", ").replace(/\s+([.,;])/g,"$1").trim();
    if(raw.trim().endsWith(".")&&!draft.endsWith("."))draft+=".";
    // Only drop optional fragments, and explicitly disclose every omission.
    if(draft.length>MAX){
      for(let i=kept.length-1;i>=0&&draft.length>MAX;i--){
        if(important(kept[i])||kept.length<=1)continue;
        removed.push({part:kept[i],reason:"сокращено для лимита"});kept.splice(i,1);
        draft=kept.join(", ").replace(/\s+([.,;])/g,"$1").trim();
        if(raw.trim().endsWith(".")&&!draft.endsWith("."))draft+=".";
      }
    }
    return {text:draft,removed,complete:draft.length<=MAX};
  }
  const itemHTML=x=>'<li class="sbpa-item sbpa-'+x.kind+'"><div><strong>'+esc(x.title)+'</strong><p>'+esc(x.detail)+'</p><small>'+esc(x.fix)+'</small></div></li>';
  function resultMarkup(){
    const text=currentText(),report=inspect(text,genre());
    const status=report.length>MAX?"Превышен лимит":report.score>=90?"Хорошая структура":report.score>=65?"Есть замечания":"Нужна проверка";
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
    const key='<div class="detail-actions">';
    const extra='<div class="sbpa-editor-entry"><button type="button" data-sbpa-action="from-editor">🔎 Проверить этот промпт в аудиторе</button>'+
      '<span>Переносит текст на проверку, не сохраняя и не изменяя текущую запись.</span></div>';
    return html.includes(key)?html.replace(key,extra+key):html;
  };
  document.addEventListener("input",event=>{
    if(view.nav!=="studio"||event.target?.id!=="sbpa-text")return;
    state.manual=event.target.value;state.proposalOpen=false;
    const slot=document.getElementById("sbpa-proposal-slot");if(slot)slot.innerHTML="";
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
      if(slot)slot.innerHTML=proposalMarkup();return;
    }
    if(action==="close-preview"){
      state.proposalOpen=false;const slot=document.getElementById("sbpa-proposal-slot");
      if(slot)slot.innerHTML="";return;
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
  window.SUNOBOOM_PROMPT_AUDITOR=Object.freeze({version:"0.91",analyze:(text,genreId)=>inspect(text,(Array.isArray(GENRES)?GENRES:[]).find(g=>g.id===genreId)||null),propose,openManual});
})();
