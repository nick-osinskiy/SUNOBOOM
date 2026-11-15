/* Canonical arrangement draft and original musical rules. No DOM dependencies. */
(function(root){'use strict';
function create({json,studio,getGenres}){
const GENRES=getGenres(),builder=studio.state;
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
const TRANSITIONS={
    none:{ru:"Без перехода",en:"",icon:"—"},
    fill:{ru:"Барабанная сбивка",en:"drum fill",icon:"🥁"},
    riser:{ru:"Нарастание / райзер",en:"rising sweep and snare build",icon:"↗"},
    pause:{ru:"Резкая пауза",en:"brief silence then a clean entrance",icon:"Ⅱ"},
    smooth:{ru:"Плавный переход",en:"smooth seamless instrumental transition",icon:"≈"},
    fade:{ru:"Затухание",en:"gradual fade-out into the next part",icon:"◌"},
    accent:{ru:"Инструментальный акцент",en:"strong instrumental accent before the next section",icon:"✦"}
  };
const TRANSITION_LENGTH={short:{ru:"Короткий",en:"short"},medium:{ru:"Средний",en:"moderate"},long:{ru:"Длинный",en:"extended"}};
const TRANSITION_STRENGTH={soft:{ru:"Мягкий",en:"subtle"},medium:{ru:"Умеренный",en:"clear"},strong:{ru:"Выраженный",en:"pronounced"}};
function makeTransition(t){
    const x=t&&typeof t==="object"?t:{};
    return {type:TRANSITIONS[x.type]?x.type:"none",
      length:TRANSITION_LENGTH[x.length]?x.length:"short",
      strength:TRANSITION_STRENGTH[x.strength]?x.strength:"medium"};
  }
function transitionTag(block){
    const t=makeTransition(block.transitionOut);
    return t.type==="none"?"":"[Transition: "+TRANSITION_LENGTH[t.length].en+", "+TRANSITION_STRENGTH[t.strength].en+" "+TRANSITIONS[t.type].en+"]";
  }
function transitionTip(from,to){
    if(!to)return makeTransition(null);
    const delta=to.energy-from.energy;
    let type="smooth";
    if(to.type==="outro")type="fade";
    else if(to.type==="breakdown"||delta<=-3)type="pause";
    else if(to.type==="build"||to.type==="prechorus")type="riser";
    else if(["chorus","finalchorus","drop"].includes(to.type)&&delta>0)type="riser";
    else if(["chorus","finalchorus","drop"].includes(to.type))type="accent";
    else if(["verse","chorus","finalchorus"].includes(from.type))type="fill";
    else if(to.type==="solo")type="accent";
    return {type,length:type==="riser"&&delta>=2?"medium":"short",
      strength:Math.max(from.energy,to.energy)>=4?"strong":"medium"};
  }
function transitionShortLabel(block){
    const t=makeTransition(block.transitionOut);
    return TRANSITIONS[t.type].ru;
  }
function transitionStyleSummary(){
    const list=state.blocks.slice(0,-1).map((b,i)=>{
      const t=makeTransition(b.transitionOut);
      return t.type==="none"?"":(i+1)+"→"+(i+2)+" "+TRANSITIONS[t.type].en;
    }).filter(Boolean);
    return list.length?" Transitions: "+list.slice(0,6).join("; ")+(list.length>6?"; +"+(list.length-6)+" more":"")+".":"";
  }
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
const safeStr=s=>String(s||"").replace(/[\[\]\r\n<>]/g," ").replace(/\s+/g," ").trim().slice(0,300);
const safeTitle=s=>String(s||"").replace(/[\[\]<>\r\n:]/g," ").replace(/\s+/g," ").trim().slice(0,48);
let serial=0;
function makeBlock(type,energy,bars,vocal,instruments,customName="",instrumentsGenreId="",transitionOut=null){
    return {id:"sba-"+(++serial),type:SECTION[type]?type:"verse",
      energy:Math.max(1,Math.min(5,Number(energy)||3)),
      bars:[2,4,8,12,16,24,32].includes(Number(bars))?Number(bars):8,
      vocal:VOICES[vocal]?vocal:"lead",instruments:safeStr(instruments),customName:safeTitle(customName),instrumentsGenreId:String(instrumentsGenreId||"").slice(0,90),transitionOut:makeTransition(transitionOut)};
  }
function presetBlocks(name){return choicePresetBlocks(name);}
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
    return state.blocks.map((b,i)=>"["+nameFor(b,i)+": "+cues(b)+"]"+(i<state.blocks.length-1&&transitionTag(b)?"\n\n"+transitionTag(b):"")).join("\n\n");
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
    return (genre?"Genre: "+genre.name+". ":"")+"Arrangement: "+state.blocks.map(b=>stageName(b)+" "+b.energy+"/5").join(" > ")+"."+transitionStyleSummary();
  }
function fullDynamics(){
    const base=shortDynamics();
    const names=[...new Set(state.blocks.map(b=>safeStr(b.instruments)).filter(Boolean))].slice(0,4);
    const arc=state.blocks.some(b=>b.energy===5)?"Build to a powerful climax.":"Gradual dynamic contrast.";
    return base+" "+arc+(names.length?" Instruments: "+names.join("; ")+".":"");
  }
function normalizeQuery(text){return String(text||"").toLocaleLowerCase("ru").replace(/ё/g,"е").trim();}
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
const state={blocks:presetBlocks('pop'),activePreset:'pop',transfer:null,applied:null};
try{const raw=json.read('sunoboom-arrangement-v066',{});if(raw&&Array.isArray(raw.blocks)&&raw.blocks.length<=MAX_BLOCKS){state.blocks=raw.blocks.map(b=>makeBlock(b.type,b.energy,b.bars,b.vocal,b.instruments,b.customName,b.instrumentsGenreId,b.transitionOut));if(choiceMeta(raw.activePreset))state.activePreset=raw.activePreset;}}catch{}
const findIndex=id=>state.blocks.findIndex(b=>b.id===id);
const exportDraft=()=>({version:1,activePreset:state.activePreset,blocks:state.blocks.map(({id,...b})=>structuredClone(b))});
const fail=error=>({ok:false,error});
function run(name,p){
const index=findIndex(p.id),b=state.blocks[index];
if(name==='import'){
 const d=p.draft;if(!d||!Array.isArray(d.blocks)||!d.blocks.length||d.blocks.length>MAX_BLOCKS||d.blocks.some(b=>!b||typeof b!=='object'||!SECTION[b.type]))return fail('Некорректная аранжировка.');
 state.blocks=d.blocks.map(b=>makeBlock(b.type,b.energy,b.bars,b.vocal,b.instruments,b.customName,b.instrumentsGenreId,b.transitionOut));state.activePreset=choiceMeta(d.activePreset)?d.activePreset:'blank';
}else if(name==='preset'){
 if(!choiceMeta(p.name))return fail('Шаблон не найден.');state.blocks=presetBlocks(p.name);state.activePreset=p.name;
}else if(name==='add'){
 if(state.blocks.length>=MAX_BLOCKS)return fail('Ограничение: '+MAX_BLOCKS+' блоков в одной композиции.');if(!SECTION[p.type])return fail('Неизвестный блок.');
 const title=p.type==='custom'?safeTitle(p.title):'';if(p.type==='custom'&&!title)return fail('Напиши название нового блока.');
 const block=makeBlock(p.type,3,8,['intro','outro'].includes(p.type)?'none':'lead','',title),after=findIndex(p.afterId);state.blocks.splice(after<0?state.blocks.length:after+1,0,block);return {ok:true,value:block};
}else{
 if(!b)return fail('Блок не найден.');
 if(name==='remove')state.blocks.splice(index,1);
 else if(name==='duplicate'){
  if(state.blocks.length>=MAX_BLOCKS)return fail('Ограничение: '+MAX_BLOCKS+' блоков.');state.blocks.splice(index+1,0,makeBlock(b.type,b.energy,b.bars,b.vocal,b.instruments,b.customName,b.instrumentsGenreId,b.transitionOut));
 }else if(name==='move'){
  const to=p.toId!==undefined?findIndex(p.toId):p.to;if(!Number.isInteger(to)||to<0||to>=state.blocks.length||index===to)return fail('Некорректное положение блока.');state.blocks.splice(index,1);state.blocks.splice(to,0,b);
 }else if(name==='transition'){
  if(index>=state.blocks.length-1)return fail('После последнего блока нет перехода.');
  if(p.mode==='suggest')b.transitionOut=transitionTip(b,state.blocks[index+1]);else if(p.mode==='clear')b.transitionOut=makeTransition(null);
  else{const dictionaries={type:TRANSITIONS,length:TRANSITION_LENGTH,strength:TRANSITION_STRENGTH};if(!dictionaries[p.field]?.[p.value])return fail('Неизвестный переход.');b.transitionOut={...makeTransition(b.transitionOut),[p.field]:p.value};}
 }else if(name==='sound'){
  const cue=safeStr(p.value),current=b.instruments.trim();
  if(p.mode==='clear')b.instruments='';else{if(!cue||current.split(',').some(x=>normalizeQuery(x.trim())===normalizeQuery(cue)))return fail('Этот звук уже добавлен.');const text=[current,cue].filter(Boolean).join(', ');if(text.length>300)return fail('В поле помещается до 300 символов. Удали часть текста перед добавлением.');b.instruments=text;}
 }else if(name==='field'){
  const {key,value}=p;
  if(key==='type'&&SECTION[value]){b.type=value;if(value==='custom'&&!b.customName)b.customName='Custom Section';}
  else if(key==='vocal'&&VOICES[value])b.vocal=value;
  else if(key==='bars'&&[2,4,8,12,16,24,32].includes(Number(value)))b.bars=Number(value);
  else if(key==='energy'&&Number.isInteger(Number(value))&&Number(value)>=1&&Number(value)<=5)b.energy=Number(value);
  else if(key==='customName')b.customName=safeTitle(value);
  else if(key==='instruments')b.instruments=safeStr(value);
  else if(key==='instrumentsGenreId'&&GENRES.some(g=>g.id===value))b.instrumentsGenreId=value;
  else return fail('Некорректный параметр блока.');
 }else return fail('Неизвестная команда аранжировки.');
}
return {ok:true,value:state.blocks[index]||null};
}
function execute(name,payload={}){
const previous=structuredClone(state);
try{const result=run(name,payload);if(!result.ok)return result;json.write('sunoboom-arrangement-v066',{version:1,blocks:state.blocks,activePreset:state.activePreset});state.transfer=null;return result;}
catch(cause){Object.assign(state,previous);return {ok:false,code:'storage',error:'Не удалось сохранить аранжировку. Проверь свободное место в браузере.',cause};}
}
function prepareTransfer(){
 if(!state.blocks.length)return fail('Добавь хотя бы один блок перед переносом.');
 const before=String(builder.extra||'');let remainder=before;
 if(state.applied&&remainder.includes(state.applied))remainder=remainder.replace(state.applied,'').replace(/;\s*;\s*/g,'; ').replace(/;\s*$/,'').trim();
 for(const candidate of [fullDynamics(),shortDynamics()]){const next=[remainder,candidate].filter(Boolean).join('; '),output=studio.prompt({...builder,extra:next});if(output.length<=1000&&output.includes(candidate)){state.transfer={previous:before,next,candidate,prompt:output};return {ok:true,value:state.transfer};}}
 state.transfer=null;return fail('Недостаточно места в лимите 1000 символов. Сократи дополнительные инструкции или жанровый промпт перед переносом.');
}
function applyTransfer(){const t=state.transfer;if(!t)return fail('Сначала подготовь перенос.');
 if(String(builder.extra||'')!==t.previous){state.transfer=null;return fail('Дополнительные инструкции изменились. Подготовь перенос ещё раз.');}
 const actual=studio.prompt({...builder,extra:t.next});if(!actual.includes(t.candidate)||actual.length>1000){state.transfer=null;return fail('Перенос отменён: общий промпт превысил лимит.');}
 studio.execute('patch',{extra:t.next});state.applied=t.candidate;state.transfer=null;return {ok:true};
}
return Object.freeze({state,execute,exportDraft,findIndex,prepareTransfer,applyTransfer,cancelTransfer:()=>{state.transfer=null;},MAX_BLOCKS,SECTION,TRANSITIONS,TRANSITION_LENGTH,TRANSITION_STRENGTH,makeTransition,transitionTag,transitionTip,transitionShortLabel,transitionStyleSummary,VOICES,ENERGY,PRESETS,GENRE_CHOICE_PREFIX,genreChoices,choiceMeta,genreArchetype,genreSoundCues,genrePresetBlocks,choicePresetBlocks,safeStr,safeTitle,makeBlock,presetBlocks,nameFor,cues,generatedLyrics,lengthSeconds,lengthString,stageName,shortDynamics,fullDynamics,normalizeQuery,soundGenreForBlock,SMART_ROLE,SMART_FAMILY_BANK,smartFamily,smartRoleInfo,smartRoleCues,smartDynamicsCues,smartPurpose,soundSuggestions});
}
root.SUNOBOOM_ARRANGEMENT_FACTORY=Object.freeze({create});
})(globalThis);
