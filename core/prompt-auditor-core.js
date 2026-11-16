/* Original local prompt inspection and reduction rules with explicit inputs. */
(function(root){'use strict';function create({getGenres}){const GENRES=getGenres();
const MAX=1000;
const important=phrase=>/\b(?:no|without|never|avoid|exclude|bpm|vocals?|lyrics|instrumental|studio|choir|whisper|raspy|male|female|duet|genre)\b|без\s+|не\s+ш[её]пот/iu.test(phrase);
const normalize=text=>String(text||"").toLocaleLowerCase("ru").normalize("NFKC").replace(/[.!?()[\]{}"'“”«»]+/g," ").replace(/[\s\-–—_]+/g," ").trim();
const clauses=text=>String(text||"").split(/[,;\n]+/g).map(x=>x.trim()).filter(Boolean);
const words=text=>(String(text||"").match(/[\p{L}\p{N}]+/gu)||[]);
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
function auditReport({text,selectedGenre,builder}){
    const report=inspect(text,selectedGenre);
    if(builder){
      const missing=[];
      if(builder.theme?.trim()&&!text.includes(builder.theme.trim()))missing.push("тема песни");
      if(builder.extra?.trim()&&!text.includes(builder.extra.trim()))missing.push("дополнительные указания");
      if(builder.studio&&!text.includes("no live ambience"))missing.push("без концертной атмосферы");
      if(builder.noWhisper&&!text.includes("no whispering"))missing.push("без шёпота");
      if(builder.noChoir&&!text.includes("no choir"))missing.push("без хора");
      if(builder.noIntro&&!text.includes("no long intro"))missing.push("короткое интро");
      if(missing.length){
        report.issues.unshift(issue("warn","Важные настройки Studio не вошли в промпт",
          "Не попали: "+missing.join(", ")+". Существующий конструктор может сокращать слишком длинный текст до базовых частей.",
          "Укороти дополнительное описание в настройках Studio, затем проверь актуальный промпт заново."));
        report.score=Math.max(0,report.score-14);
      }
    }
    const status=report.length>MAX?"Превышен лимит":report.score>=90?"Хорошая структура":report.score>=65?"Есть замечания":"Нужна проверка";
    return {...report,status};
  }
return Object.freeze({MAX,normalize,clauses,words,issue,accepted,inspect,propose,auditReport});}
root.SUNOBOOM_AUDITOR_FACTORY=Object.freeze({create});})(globalThis);
