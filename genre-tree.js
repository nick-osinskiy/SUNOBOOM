(function installGenreTree() {
  "use strict";
  if (typeof catalog !== "function" || typeof GENRES === "undefined" || typeof escapeHTML !== "function") return;

  const TREES = [
    {
      id: "ska", label: "Ска и регги", icon: "🎺", focus: "ska-jamaican",
      intro: "От ямайского ска к рокстеди и регги — и параллельно к британскому 2 Tone, третьей волне, ска-панку и ска-джазу.",
      columns: [
        ["jazz", "ska-jamaican"],
        ["reggae-rocksteady", "ska-two-tone", "ska-jazz", "punk-rock"],
        ["reggae-roots", "ska-third-wave", "ska-punk"],
        ["reggae-dub", "ska-core"]
      ],
      edges: [
        ["jazz","ska-jamaican","influence","Джазовые приёмы повлияли на раннее ска."],
        ["ska-jamaican","reggae-rocksteady","evolution","Из ска в 1960-е развилось более медленное рокстеди."],
        ["reggae-rocksteady","reggae-roots","evolution","Рокстеди стало одной из основ регги."],
        ["reggae-roots","reggae-dub","evolution","Даб развил студийные эксперименты вокруг регги-ритм-секции."],
        ["ska-jamaican","ska-two-tone","revival","2 Tone заново обратился к ямайскому ска в британском контексте."],
        ["ska-jamaican","ska-jazz","fusion","Ска-ритмика соединяется с джазовой импровизацией."],
        ["ska-two-tone","ska-third-wave","influence","2 Tone повлиял на международное возрождение ска."],
        ["ska-third-wave","ska-punk","fusion","Энергия новой волны ска переплетается с панк-роком."],
        ["punk-rock","ska-punk","fusion","Панк-рок добавил скорость, искажённые гитары и прямой вокал."],
        ["ska-punk","ska-core","evolution","Ска-кор усиливает хардкор-панковую сторону ска-панка."]
      ]
    },
    {
      id: "rock", label: "Рок и панк", icon: "🎸", focus: "punk-rock",
      intro: "Влияние блюза и рок-н-ролла на гаражный рок, панк, постпанк и альтернативное звучание. Схема показывает важные связи, а не единственную линию происхождения.",
      columns: [
        ["blues-delta", "folk-traditional"],
        ["rock-and-roll", "blues-rock", "folk-rock"],
        ["garage-rock", "hard-rock", "punk-rock"],
        ["post-punk", "alternative-rock", "indie-rock", "grunge"]
      ],
      edges: [
        ["blues-delta","rock-and-roll","influence","Блюз — один из важных источников раннего рок-н-ролла."],
        ["blues-delta","blues-rock","fusion","Блюзовая традиция стала основой блюз-рока."],
        ["folk-traditional","folk-rock","fusion","Народные традиции соединились с рок-инструментами."],
        ["rock-and-roll","garage-rock","influence","Рок-н-ролл повлиял на прямолинейное звучание гаражных групп."],
        ["rock-and-roll","hard-rock","influence","Рок-н-ролльная энергия вошла в тяжёлые гитарные направления."],
        ["garage-rock","punk-rock","influence","Простой сырой гаражный звук вдохновлял ранний панк."],
        ["punk-rock","post-punk","evolution","Постпанк вырос из панк-среды, расширяя музыкальный язык."],
        ["punk-rock","alternative-rock","influence","Панк-эстетика повлияла на независимый альтернативный рок."],
        ["post-punk","indie-rock","influence","Постпанк повлиял на часть инди-гитарной сцены."],
        ["hard-rock","grunge","influence","Тяжёлые гитары стали одним из элементов гранжа."],
        ["garage-rock","grunge","influence","Гаражная сырость и простота слышны в гранж-сцене."]
      ]
    },
    {
      id: "soul", label: "Соул, фанк и диско", icon: "🪩", focus: "funk-classic",
      intro: "Связи между соулом, ритмикой фанка, диско и их современными танцевальными ответвлениями.",
      columns: [
        ["soul-classic"],
        ["funk-classic", "disco-classic"],
        ["funk-pfunk", "disco-funk", "boogie"],
        ["funk-electro", "disco-nu", "dance-pop"]
      ],
      edges: [
        ["soul-classic","funk-classic","influence","Соул и R&B повлияли на становление фанка."],
        ["soul-classic","disco-classic","influence","Соул и его танцевальные аранжировки повлияли на диско."],
        ["funk-classic","funk-pfunk","evolution","P-Funk развил психоделические и ансамблевые возможности фанка."],
        ["funk-classic","disco-funk","fusion","Диско-фанк сочетает фанковый грув с диско-ритмом."],
        ["disco-classic","disco-funk","fusion","Диско-ритм соединяется с фанковой ритм-секцией."],
        ["disco-classic","boogie","evolution","Буги стало родственной постдиско-танцевальной формой."],
        ["funk-pfunk","funk-electro","influence","Фанковая традиция повлияла на электронные грувы."],
        ["disco-classic","disco-nu","revival","Ню-диско переосмысляет классическую эстетику диско."],
        ["disco-classic","dance-pop","influence","Диско повлияло на танцевальную поп-музыку."]
      ]
    },
    {
      id: "electronic", label: "Электроника", icon: "🎛️", focus: "techno",
      intro: "Взаимное влияние диско, электронного фанка, синтезаторной музыки и экспериментальных электронных форм.",
      columns: [
        ["disco-classic", "experimental-electroacoustic"],
        ["funk-electro", "synthpop", "ambient-classic"],
        ["techno", "electropop", "ambient-space"],
        ["experimental-glitch", "cinematic-hybrid"]
      ],
      edges: [
        ["disco-classic","funk-electro","influence","Диско и фанк повлияли на раннюю электронную танцевальную сцену."],
        ["disco-classic","techno","influence","Диско — одно из влияний детройтского техно."],
        ["funk-electro","techno","influence","Электрофанк стал важной составляющей раннего техно."],
        ["synthpop","electropop","evolution","Электропоп развивает поп-песни на синтезаторной основе."],
        ["experimental-electroacoustic","ambient-classic","influence","Экспериментальная электроника повлияла на атмосферные звуковые практики."],
        ["ambient-classic","ambient-space","evolution","Космический эмбиент развивает атмосферную звуковую эстетику."],
        ["techno","experimental-glitch","influence","Электронные студийные техники влияли на экспериментальные направления."],
        ["ambient-space","cinematic-hybrid","influence","Атмосферная электроника может входить в гибридный саундтрек."]
      ]
    },
    {
      id: "hiphop", label: "Хип-хоп", icon: "🎤", focus: "hiphop-oldschool",
      intro: "Переход от раннего хип-хопа к бум-бэпу, джаз-рэпу, трэпу, дриллу и другим современным направлениям.",
      columns: [
        ["hiphop-oldschool"],
        ["hiphop-boombap", "hiphop-jazz", "hiphop-gangsta"],
        ["hiphop-alternative", "hiphop-trap", "hiphop-pop"],
        ["hiphop-drill", "hiphop-melodic", "hiphop-cloud"]
      ],
      edges: [
        ["hiphop-oldschool","hiphop-boombap","evolution","Бум-бэп развил сэмпловый бит и ударную ритмику классического хип-хопа."],
        ["hiphop-oldschool","hiphop-jazz","fusion","Джазовые гармонии и сэмплы соединяются с рэпом."],
        ["hiphop-oldschool","hiphop-gangsta","evolution","Гангста-рэп вырос из хип-хоп-сцен США."],
        ["hiphop-boombap","hiphop-alternative","influence","Классический хип-хоп повлиял на экспериментальные рэп-формы."],
        ["hiphop-gangsta","hiphop-trap","influence","Южный рэп и гангста-рэп — одни из контекстов развития трэпа."],
        ["hiphop-trap","hiphop-drill","influence","Трэп-ритмика повлияла на ряд ранних дрилл-звучаний."],
        ["hiphop-trap","hiphop-melodic","fusion","Мелодичный рэп часто сочетает пение с трэп-битами."],
        ["hiphop-alternative","hiphop-cloud","influence","Экспериментальные рэп-подходы соприкасаются с клауд-рэпом."],
        ["hiphop-oldschool","hiphop-pop","influence","Поп-рэп использует рэп-подачу в массовой песенной форме."]
      ]
    },
    {
      id: "folk", label: "Фолк и новые формы", icon: "🪕", focus: "folk-traditional",
      intro: "Как элементы народных музыкальных традиций используются в роке, электронике, инди и современной поп-музыке.",
      columns: [
        ["folk-traditional"],
        ["folk-russian", "folk-celtic", "folk-modern"],
        ["folk-rock", "folk-indie", "folk-electro"],
        ["folk-pop", "folk-neofolk"]
      ],
      edges: [
        ["folk-traditional","folk-russian","evolution","Русская народная традиция — одна из региональных ветвей фолка."],
        ["folk-traditional","folk-celtic","evolution","Кельтский фолк опирается на региональные традиции."],
        ["folk-traditional","folk-modern","revival","Современный фолк обращается к традиционным напевам и инструментам."],
        ["folk-modern","folk-rock","fusion","Фолковые мелодии соединяются с рок-аранжировкой."],
        ["folk-modern","folk-indie","fusion","Фолк-песенность и инди-эстетика дают новые акустические формы."],
        ["folk-modern","folk-electro","fusion","Электронные биты и синтезаторы дополняют народные мотивы."],
        ["folk-indie","folk-pop","influence","Инди-фолк повлиял на часть современного фолк-попа."],
        ["folk-modern","folk-neofolk","influence","Неофолк по-своему переосмысляет традиционные музыкальные образы."]
      ]
    }
  ];
  // This view is generated from the live Academy catalog: no duplicated or frozen genre list.
  const ALL_TREE_OPTION = {id:"all",label:"Все жанры коллекции",icon:"🌐"};
  function fullCatalogTree(){
    const families=[...new Set([...familyOrder,...GENRES.map(g=>g.family||"Другое")])];
    const groups=families.map(name=>{
      const genres=GENRES.filter(g=>(g.family||"Другое")===name);
      const meta=typeof CATALOG_GROUP_META!=="undefined"&&CATALOG_GROUP_META[name]||{};
      return {name,icon:meta.icon||"🎵",accent:meta.accent||"#ac96d6",ids:genres.map(g=>g.id)};
    }).filter(group=>group.ids.length);
    const genreIds=new Set(GENRES.map(g=>g.id));
    const edges=new Map();
    TREES.forEach(tree=>tree.edges.forEach(edge=>{
      if(!genreIds.has(edge[0])||!genreIds.has(edge[1]))return;
      const key=edge[0]+"|"+edge[1]+"|"+edge[2];
      if(!edges.has(key))edges.set(key,edge);
    }));
    return {
      ...ALL_TREE_OPTION,
      focus:byId(state.selected)?state.selected:(GENRES[0]&&GENRES[0].id),
      intro:"Полная карта Академии: все жанры распределены по большим музыкальным направлениям. Ветви показывают принадлежность к разделам, а цветные стрелки при выборе жанра — только уже описанные исторические связи.",
      groups,columns:groups.map(group=>group.ids),edges:[...edges.values()]
    };
  }
  const RELATIONS = {
    evolution: {label:"развитие",color:"#62d8dc"},
    influence: {label:"влияние",color:"#ab91fb"},
    fusion: {label:"смешение",color:"#f884b7"},
    revival: {label:"возрождение",color:"#f5c66c"}
  };
  const stageLabels=["Истоки","Продолжение","Новые направления","Ответвления"];
  const state={open:false,tree:"ska",selected:"ska-jamaican",query:"",zoom:1};
  const byId=id=>GENRES.find(g=>g.id===id);
  const current=()=>state.tree==="all"?fullCatalogTree():(TREES.find(t=>t.id===state.tree)||TREES[0]);
  const esc=s=>escapeHTML(String(s??""));
  const childSelector='[data-sb-gt-action]';
  const tile=`<button type="button" class="encyclopedia-section sb-gt-entry" data-sb-gt-action="reveal"><span class="encyclopedia-section-icon" aria-hidden="true">🕸️</span><span><strong>Музыкальное древо</strong><small>Истоки, связи и влияние жанров</small></span><span class="encyclopedia-section-status">Открыть</span></button>`;
  const details=`<details id="sb-genre-tree" class="sb-gt-section"><summary><span class="sb-gt-summary-icon">🕸️</span><span><strong>Музыкальное древо жанров</strong><small>Интерактивная карта происхождения и смешения музыки</small></span><span class="sb-gt-summary-hint">Исследовать связи</span><span class="sb-gt-chevron">⌄</span></summary><div id="sb-gt-inner" class="sb-gt-inner"></div></details>`;
  const baseCatalog=catalog;
  catalog=function(){
    const html=baseCatalog.apply(this,arguments);
    return html.replace('<div class="encyclopedia-section encyclopedia-section-future">',tile+'<div class="encyclopedia-section encyclopedia-section-future">')
      // The Vue Academy mounts inside #sb-vue-academy-root and replaces its children.
      // Keep the legacy interactive tree OUTSIDE that Vue-owned element, otherwise
      // the tree tile remains visible but its target disappears after Vue mounts.
      .replace('<section id="sb-vue-academy-root">',details.replace('class="sb-gt-section"','class="sb-gt-section"'+(state.open?' open':''))+'<section id="sb-vue-academy-root">');
  };


  const sbTreePreviousRender=render;
  render=function(){
    const output=sbTreePreviousRender.apply(this,arguments);
    if(view.nav==="catalog"&&state.open)renderTree();
    return output;
  };

  function relatedFor(id,t){
    return t.edges.filter(e=>e[0]===id||e[1]===id).map(e=>({
      other:e[0]===id?e[1]:e[0], relation:e[2], note:e[3],
      direction:e[0]===id?"→":"←"
    })).filter(x=>byId(x.other));
  }
  function renderDetails(){
    const element=document.getElementById("sb-gt-description");
    if(!element)return;
    const t=current(), g=byId(state.selected)||byId(t.focus);
    if(!g)return;
    state.selected=g.id;
    const links=relatedFor(g.id,t);
    element.innerHTML=
      `<div class="sb-gt-detail-top"><div><div class="sb-gt-kicker">ВЫБРАННОЕ НАПРАВЛЕНИЕ</div><h3>${esc(g.name)}</h3><p class="sb-gt-sub">${esc(g.era||"")} · ${esc(g.family||"")}</p></div><button type="button" class="btn primary sb-gt-open" data-sb-gt-action="open" data-id="${esc(g.id)}">Открыть карточку ↗</button></div>`+
      `<p class="sb-gt-description">${esc(g.description||g.tagline||"Описание в карточке жанра.")}</p>`+
      (links.length?`<h4>Исторические связи</h4><div class="sb-gt-related">${links.map(x=>`<button type="button" class="sb-gt-related-btn" data-sb-gt-action="select" data-id="${esc(x.other)}"><span class="sb-gt-related-mark sb-gt-${x.relation}">${x.direction}</span><span><strong>${esc(byId(x.other).name)}</strong><small>${esc(x.note)}</small></span></button>`).join("")}</div>`:(t.id==="all"?"":`<p class="sb-gt-note">У этого узла пока нет нарисованных связей в выбранной схеме.</p>`))+
      (t.id==="all"?(()=>{
        const sameFamily=GENRES.filter(x=>x.id!==g.id&&x.family===g.family).slice(0,8);
        return sameFamily.length?`<h4>Другие жанры раздела «${esc(g.family)}»</h4><div class="sb-gt-related">${sameFamily.map(x=>`<button type="button" class="sb-gt-related-btn" data-sb-gt-action="select" data-id="${esc(x.id)}"><span class="sb-gt-related-mark">♫</span><span><strong>${esc(x.name)}</strong></span></button>`).join("")}</div>`:"";
      })():"");
  }

  function graphHtml(t){
    const all=t.id==="all";
    const columns=t.columns.map((col,j)=>{
      const group=all?t.groups[j]:null;
      const heading=all
        ?`<div class="sb-gt-stage sb-gt-family-heading" style="--sb-gt-family-accent:${esc(group.accent)}"><strong>${group.icon} ${esc(group.name)}</strong><span>${col.length}</span></div>`
        :`<div class="sb-gt-stage"><span>0${j+1}</span>${stageLabels[j]}</div>`;
      return `<div class="sb-gt-column${all?" sb-gt-column-all":""}"${all?' data-sb-gt-family="'+j+'"':""}>${heading}<div class="sb-gt-node-list">${col.filter(id=>byId(id)).map(id=>{
        const g=byId(id);
        return `<button type="button" class="sb-gt-node${state.selected===id?" is-selected":""}" data-sb-gt-action="select" data-id="${esc(id)}" aria-pressed="${state.selected===id?"true":"false"}"><span class="sb-gt-node-name">${esc(g.name)}</span><span class="sb-gt-node-era">${esc(g.era||g.family||"")}</span></button>`;
      }).join("")}</div></div>`;
    }).join("");
    const extra=all?' style="--sb-gt-family-count:'+t.columns.length+'"':"";
    return `<div class="sb-gt-viewport" tabindex="0" aria-label="${all?"Все жанры Академии по музыкальным направлениям, горизонтальная прокрутка":"Схема связей: горизонтально прокручиваемая карта жанров"}"><div class="sb-gt-canvas${all?" sb-gt-canvas-all":""}"${extra}><svg class="sb-gt-lines" aria-hidden="true"></svg><div class="sb-gt-columns${all?" sb-gt-columns-all":""}">${columns}</div></div></div>`;
  }

  function renderTree(){
    const host=document.getElementById("sb-gt-inner");
    const root=document.getElementById("sb-genre-tree");
    if(!host||!root||!root.open||host.hasAttribute("data-v-app"))return;
    const t=current();
    if(!t.columns.some(col=>col.includes(state.selected)))state.selected=t.focus;
    const available=t.columns.flat().filter(id=>byId(id));
    const all=t.id==="all";
    host.innerHTML=
      `<div class="sb-gt-head"><div><span class="sb-gt-kicker">SUNOBOOM · ИСТОРИЯ МУЗЫКИ</span><h2>От истоков к новым жанрам</h2><p>Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.</p></div><div class="sb-gt-count">${available.length} жанров${all?" · "+t.groups.length+" направлений":" в схеме"}</div></div>`+
      `<div class="sb-gt-controls"><label for="sb-gt-tree-choice">Карта жанров</label><select id="sb-gt-tree-choice" aria-label="Выберите музыкальное древо">${[ALL_TREE_OPTION,...TREES].map(item=>`<option value="${item.id}" ${item.id===state.tree?"selected":""}>${item.icon} ${esc(item.label)}</option>`).join("")}</select>${all?`<label for="sb-gt-group-jump">Перейти к направлению</label><select id="sb-gt-group-jump" aria-label="Перейти к музыкальному направлению"><option value="">Выберите раздел…</option>${t.groups.map((g,i)=>`<option value="${i}">${g.icon} ${esc(g.name)} (${g.ids.length})</option>`).join("")}</select>`:""}</div>`+
      '<div class="sb-gt-extra"><label class="sb-gt-search-label" for="sb-gt-search">Поиск жанра по древу<input id="sb-gt-search" type="search" placeholder="Например: ска-панк" autocomplete="off" value="'+esc(state.query)+'"></label><div class="sb-gt-zoom"><span>Масштаб карты</span><button type="button" data-sb-gt-action="zoom-out" aria-label="Уменьшить масштаб">−</button><output id="sb-gt-zoom-label">'+Math.round(state.zoom*100)+'%</output><button type="button" data-sb-gt-action="zoom-in" aria-label="Увеличить масштаб">+</button><button type="button" data-sb-gt-action="zoom-reset">Сброс</button></div></div><div class="sb-gt-search-results" id="sb-gt-search-results" aria-live="polite"></div>'+
      `<p class="sb-gt-intro">${esc(t.intro)}</p>`+
      `<div class="sb-gt-legend">${Object.entries(RELATIONS).map(([key,obj])=>`<span><i style="--rel-color:${obj.color}"></i>${obj.label}</span>`).join("")}</div>`+
      graphHtml(t)+
      `<div class="sb-gt-detail" id="sb-gt-description" aria-live="polite"></div>`+
      `<p class="sb-gt-note">Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.</p>`;
    renderDetails();
    applyZoom();
    refreshSearch();
    requestAnimationFrame(drawLines);
  }

  function applyZoom(){
    const canvas=document.querySelector(".sb-gt-canvas");
    if(canvas)canvas.style.zoom=String(state.zoom);
    const label=document.getElementById("sb-gt-zoom-label");
    if(label)label.textContent=Math.round(state.zoom*100)+"%";
  }
  function refreshSearch(){
    const box=document.getElementById("sb-gt-search-results");
    if(!box)return;
    const q=state.query.trim().toLocaleLowerCase("ru");
    document.querySelectorAll(".sb-gt-node").forEach(el=>{
      const genre=byId(el.dataset.id);
      el.classList.toggle("sb-gt-search-dim",!!q&&!!genre&&!genre.name.toLocaleLowerCase("ru").includes(q));
    });
    if(!q){box.innerHTML="";return;}
    const found=[],seen=new Set();
    if(state.tree==="all"){
      GENRES.forEach(genre=>{
        if(!genre||seen.has(genre.id)||!genre.name.toLocaleLowerCase("ru").includes(q))return;
        seen.add(genre.id);found.push({tree:"all",id:genre.id,name:genre.name,family:genre.family});
      });
    }else{
      TREES.forEach(tree=>tree.columns.flat().forEach(id=>{
        const genre=byId(id);
        if(!genre||seen.has(id)||!genre.name.toLocaleLowerCase("ru").includes(q))return;
        seen.add(id);found.push({tree:tree.id,id,name:genre.name,family:genre.family});
      }));
      // Even if no curated genealogy contains it, the full catalog can find the genre.
      GENRES.forEach(genre=>{
        if(seen.has(genre.id)||!genre.name.toLocaleLowerCase("ru").includes(q))return;
        seen.add(genre.id);found.push({tree:"all",id:genre.id,name:genre.name,family:genre.family});
      });
    }
    const limit=30;
    box.innerHTML=found.length?'<div class="sb-gt-search-title">Найдено в коллекции: '+found.length+(found.length>limit?' · показаны первые '+limit:'')+'</div><div class="sb-gt-search-links">'+found.slice(0,limit).map(item=>'<button type="button" data-sb-gt-action="search-jump" data-id="'+esc(item.id)+'" data-tree="'+esc(item.tree)+'">'+esc(item.name)+' <small>('+esc(item.family)+')</small></button>').join("")+'</div>':'<p class="sb-gt-search-empty">Жанр не найден в коллекции Академии.</p>';
  }

  function drawLines(){
    const canvas=document.querySelector(".sb-gt-canvas");
    const svg=canvas&&canvas.querySelector(".sb-gt-lines");
    if(!canvas||!svg)return;
    const t=current();
    const box=canvas.getBoundingClientRect();
    const scale=box.width/Math.max(1,canvas.offsetWidth)||1;
    const width=Math.max(1,canvas.scrollWidth),height=Math.max(1,canvas.scrollHeight);
    svg.setAttribute("viewBox",`0 0 ${width} ${height}`);
    svg.setAttribute("width",width);svg.setAttribute("height",height);
    const palette=Object.entries(RELATIONS);
    const defs=`<defs>${palette.map(([k,v])=>`<marker id="sb-gt-arrow-${k}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M1 1 L9 5 L1 9 Z" fill="${v.color}"/></marker>`).join("")}</defs>`;
    const nodes=new Map([...canvas.querySelectorAll(".sb-gt-node")].map(el=>[el.dataset.id,el]));
    // Full-map view keeps only the selected genre's curated links to avoid a web of crossing arrows.
    const visibleEdges=t.id==="all"?t.edges.filter(e=>e[0]===state.selected||e[1]===state.selected):t.edges;
    const paths=visibleEdges.map(([from,to,kind,note])=>{
      const a=nodes.get(from);
      const b=nodes.get(to);
      if(!a||!b)return "";
      const ra=a.getBoundingClientRect(),rb=b.getBoundingClientRect();
      const forward=(rb.left+rb.width/2)>(ra.left+ra.width/2);
      const x1=(forward?ra.right-box.left:ra.left-box.left)/scale;
      const y1=(ra.top-box.top+ra.height/2)/scale;
      const x2=(forward?rb.left-box.left-7:rb.right-box.left+7)/scale;
      const y2=(rb.top-box.top+rb.height/2)/scale;
      const bend=Math.min(65,Math.max(26,Math.abs(x2-x1)*0.43));
      const sign=forward?1:-1;
      const selected=state.selected===from||state.selected===to;
      const d=`M${x1.toFixed(1)} ${y1.toFixed(1)} C${(x1+sign*bend).toFixed(1)} ${y1.toFixed(1)},${(x2-sign*bend).toFixed(1)} ${y2.toFixed(1)},${x2.toFixed(1)} ${y2.toFixed(1)}`;
      return `<path class="sb-gt-path${selected?" is-highlighted":""}" d="${d}" stroke="${RELATIONS[kind].color}" marker-end="url(#sb-gt-arrow-${kind})"><title>${esc(note)}</title></path>`;
    }).join("");
    svg.innerHTML=defs+paths;
  }

  function selectNode(id){
    if(!byId(id))return;
    state.selected=id;
    document.querySelectorAll(".sb-gt-node").forEach(el=>{
      const on=el.dataset.id===id;
      el.classList.toggle("is-selected",on);
      el.setAttribute("aria-pressed",on?"true":"false");
    });
    renderDetails();
    requestAnimationFrame(drawLines);
  }
  document.addEventListener("click",event=>{
    // Vue owns controls after mounting: never double-dispatch or mutate its DOM.
    if(event.target.closest?.("[data-sb-vue-genre-tree]"))return;
    const button=event.target.closest(childSelector);
    if(!button)return;
    const action=button.dataset.sbGtAction;
    if(action==="reveal"){
      const root=document.getElementById("sb-genre-tree");
      if(!root)return;
      root.open=true;state.open=true;renderTree();
      root.scrollIntoView({behavior:"smooth",block:"start"});return;
    }

    if(action==="zoom-in"||action==="zoom-out"||action==="zoom-reset"){
      state.zoom=action==="zoom-reset"?1:Math.min(1.5,Math.max(0.75,Math.round((state.zoom+(action==="zoom-in"?0.15:-0.15))*100)/100));
      applyZoom();requestAnimationFrame(drawLines);return;
    }
    if(action==="search-jump"){
      const target=button.dataset.tree==="all"?fullCatalogTree():TREES.find(t=>t.id===button.dataset.tree);
      const id=button.dataset.id;
      if(!target||!target.columns.some(col=>col.includes(id))||!byId(id))return;
      state.tree=target.id;state.selected=id;state.query="";
      renderTree();
      const node=[...document.querySelectorAll(".sb-gt-node")].find(n=>n.dataset.id===id);
      if(node)node.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});
      return;
    }
    if(action==="select"){selectNode(button.dataset.id);return;}
    if(action==="open"){if(byId(button.dataset.id))openGenre(button.dataset.id);return;}
  });
  document.addEventListener("input",event=>{
    if(event.target.closest?.("[data-sb-vue-genre-tree]"))return;
    if(event.target.id!=="sb-gt-search")return;
    state.query=event.target.value;
    refreshSearch();
  });
  document.addEventListener("change",event=>{
    if(event.target.closest?.("[data-sb-vue-genre-tree]"))return;
    if(event.target.id==="sb-gt-group-jump"){
      const index=Number(event.target.value);
      const target=event.target.value!==""&&document.querySelector('[data-sb-gt-family="'+index+'"]');
      if(target)target.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"});
      return;
    }
    if(event.target.id!=="sb-gt-tree-choice")return;
    if(event.target.value!=="all"&&!TREES.some(t=>t.id===event.target.value))return;
    state.tree=event.target.value;
    state.selected=current().focus;
    state.query="";
    renderTree();
  });
  document.addEventListener("toggle",event=>{
    const root=event.target;
    if(root.id!=="sb-genre-tree")return;
    state.open=root.open;
    if(root.open)renderTree();
  },true);
  window.addEventListener("resize",()=>{if(document.querySelector("#sb-genre-tree[open]"))requestAnimationFrame(drawLines);},{passive:true});
  // Vue receives the live catalog and curated historical graph without copying
  // or replacing source genre data. Legacy handlers remain a complete fallback.
  window.SUNOBOOM_LEGACY_GENRE_TREE=Object.freeze({
    snapshot(){
      return {
        tree:state.tree,selected:state.selected,query:state.query,zoom:state.zoom,
        trees:[fullCatalogTree(),...TREES],
        relations:RELATIONS,stageLabels,
        genres:GENRES.map(g=>({
          id:g.id,name:g.name,era:g.era||"",family:g.family||"",
          description:g.description||"",tagline:g.tagline||""
        }))
      };
    },
    changeTree(id){
      if(id!=="all"&&!TREES.some(t=>t.id===id))return null;
      state.tree=id;state.selected=current().focus;state.query="";
      return {tree:state.tree,selected:state.selected};
    },
    select(id){
      if(!byId(id)||!current().columns.some(col=>col.includes(id)))return false;
      state.selected=id;return true;
    },
    setQuery(value){state.query=String(value||"");},
    setZoom(value){if(Number.isFinite(value))state.zoom=Math.min(1.5,Math.max(.75,value));},
    searchJump(treeId,id){
      const target=treeId==="all"?fullCatalogTree():TREES.find(t=>t.id===treeId);
      if(!target||!byId(id)||!target.columns.some(col=>col.includes(id)))return null;
      state.tree=target.id;state.selected=id;state.query="";
      return {tree:state.tree,selected:state.selected};
    },
    openGenre:id=>{if(byId(id))openGenre(id);},
    drawLines:()=>drawLines()
  });
  if(view.nav==="catalog")render();
})();
