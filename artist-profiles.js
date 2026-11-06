/* SUNOBOOM 0.59 — Artist Profiles. Additive Academy module; do not replace artistView or user records. */
(function installArtistProfiles(){
  "use strict";
  if(typeof GENRES==="undefined"||typeof catalog!=="function"||typeof escapeHTML!=="function")return;
  const esc=s=>escapeHTML(String(s??""));
  const norm=s=>String(s||"").normalize("NFKC").toLocaleLowerCase("ru").replace(/\s+/g," ").trim();
  const FAV_KEY="sunoboom-artist-profile-favorites-v1";
  const EDITORIAL={
    "the skatalites":{bio:"Ямайский инструментальный коллектив, сыгравший ключевую роль в формировании раннего ска. В центре его звучания — духовые мелодии, джазовая импровизация и упругий танцевальный ритм.",influences:["Ямайский ритм-энд-блюз","джаз","менто"],sound:"Инструментальные темы для духовой секции, подвижный бас и акценты на слабую долю.",tracks:["Guns of Navarone"]},
    "the specials":{bio:"Британская группа, ставшая одним из символов движения 2 Tone. Соединила ямайскую ритмику с нервом панк-рока и социально наблюдательными текстами.",influences:["Ямайское ска","панк-рок","регги"],sound:"Резкий гитарный оффбит, орган, духовые и выразительный ансамблевый вокал.",tracks:["A Message to You Rudy","Ghost Town"]},
    "madness":{bio:"Британская группа, получившая широкую известность благодаря смешению ска, поп-мелодики и ироничного городского повествования.",influences:["2 Tone","ска","британская поп-музыка"],sound:"Пружинящие ритмы, духовная секция, клавиши и яркие запоминающиеся припевы.",tracks:["One Step Beyond","Our House"]},
    "operation ivy":{bio:"Американская группа конца 1980-х, важная для раннего ска-панка: короткие быстрые композиции соединяли ска-акценты и панк-энергию.",influences:["Панк-рок","ска"],sound:"Очень быстрый темп, рубленая гитара, подвижный бас, динамичная прямая подача.",tracks:["Sound System","Knowledge"]},
    "reel big fish":{bio:"Американская группа третьей волны ска, известная ироничными текстами, панк-гитарами и ведущими партиями духовых.",influences:["Ска третьей волны","панк-рок","2 Tone"],sound:"Чередование чистого гитарного оффбита и перегруженных гитар, плотная духовая секция.",tracks:["Sell Out"]},
    "less than jake":{bio:"Американская группа, развившая мелодичный вариант ска-панка с поп-панк-припевами и яркой духовой секцией.",influences:["Ска","панк-рок","поп-панк"],sound:"Быстрая ритм-секция, жёсткие гитары, труба и тромбон, цепкие припевы.",tracks:["All My Best Friends Are Metalheads"]},
    "distemper":{bio:"Российский коллектив ска-панка. В его музыке сочетаются танцевальная синкопа ска, прямолинейная панк-энергия и насыщенные духовые аранжировки.",influences:["Ска","панк-рок"],sound:"Контраст гитар на слабую долю и плотных панк-риффов, быстрые барабаны, духовые.",tracks:[]},
    "spitfire":{bio:"Группа из Санкт-Петербурга, работающая на пересечении ска, джаза и панк-рока, с особым вниманием к ритму и аранжировкам духовых.",influences:["Ска","джаз","панк-рок"],sound:"Акцентный танцевальный ритм, саксофон и труба, джазовые обороты.",tracks:[]},
    "элизиум":{bio:"Российская группа, известная сочетанием мелодичного панк-рока и ска-элементов. Её песни строятся вокруг энергичного темпа и выразительных припевов.",influences:["Мелодичный панк-рок","ска","поп-панк"],sound:"Гитарный драйв, мелодичные припевы и ритмические акценты ска.",tracks:[]},
    "ария":{bio:"Одна из наиболее известных российских хеви-метал-групп, развившая русскоязычную традицию классического металлического звучания.",influences:["Классический хеви-метал","хард-рок"],sound:"Двойные гитарные гармонии, плотные риффы, мощный вокал, выразительные соло.",tracks:["Беспечный ангел","Штиль"]},
    "кино":{bio:"Советская рок-группа во главе с Виктором Цоем. Лаконичные песни и узнаваемое гитарное звучание стали важной частью русскоязычной рок-культуры.",influences:["Постпанк","новая волна","рок"],sound:"Минималистичные гитары, чёткий бас и ритм, сдержанная выразительная подача.",tracks:["Группа крови","Звезда по имени Солнце"]},
    "сплин":{bio:"Российская рок-группа, известная образной лирикой, меланхоличной атмосферой и сочетанием альтернативного и мелодичного рока.",influences:["Альтернативный рок","постпанк","гитарный рок"],sound:"Мелодичные гитары, атмосферные аранжировки и повествовательный вокал.",tracks:["Выхода нет","Моё сердце"]},
    "би-2":{bio:"Русскоязычная рок-группа с характерным сочетанием гитарного звучания, мелодичных припевов и выразительных вокальных тембров.",influences:["Альтернативный рок","постпанк","поп-рок"],sound:"Объёмные гитарные фактуры, драматичные мелодии и яркие припевы.",tracks:["Полковнику никто не пишет","Серебро"]},
    "земфира":{bio:"Российская певица и автор песен, один из наиболее заметных голосов русскоязычного альтернативного рока рубежа 1990–2000-х.",influences:["Альтернативный рок","поп-рок"],sound:"Выразительный вокал, личная лирика, динамические контрасты и мелодичные гитары.",tracks:["Искала","Хочешь?"]},
    "король и шут":{bio:"Российская панк-рок-группа, известная повествовательными песнями с мрачными, фантастическими и сказочными сюжетами.",influences:["Панк-рок","хоррор-панк","фолк"],sound:"Энергичные гитары, театрализованная подача и сюжетные припевы.",tracks:["Кукла колдуна","Лесник"]},
    "ленинград":{bio:"Музыкальный коллектив из Санкт-Петербурга, известный энергичным смешением ска, панка, рок-ритмов и сатирических городских историй.",influences:["Ска","панк-рок","регги"],sound:"Духовые, ритмичные гитары, плотная басовая линия и разговорная энергичная подача.",tracks:["WWW","Экспонат"]},
    "алла пугачёва":{bio:"Одна из ведущих певиц советской и российской эстрады, чьё творчество включает лирические баллады, драматическую поп-музыку и крупные сценические песни.",influences:["Эстрадная песня","поп-музыка","баллада"],sound:"Выразительное вокальное повествование, мелодические кульминации и драматичная интерпретация.",tracks:["Миллион алых роз","Позови меня с собой"]},
    "михаил круг":{bio:"Российский автор и исполнитель, один из наиболее узнаваемых представителей русского шансона и городской лирической песни.",influences:["Русский шансон","городской романс"],sound:"Повествовательный вокал, акустическая основа и жизненные сюжеты.",tracks:["Владимирский централ"]},
    "каста":{bio:"Российская хип-хоп-группа, известная сюжетными текстами, социальными наблюдениями и развитием русскоязычной рэп-сцены.",influences:["Классический хип-хоп","бум-бэп"],sound:"Ритмичная речитативная подача, сэмпловые биты и ясная текстовая драматургия.",tracks:["Вокруг шум"]},
    "баста":{bio:"Российский рэп-исполнитель, автор песен и продюсер; соединяет рэп с мелодичными припевами и лирическим повествованием.",influences:["Хип-хоп","мелодичный рэп"],sound:"Внятная речитативная подача, мелодичные партии и личные истории.",tracks:["Моя игра","Сансара"]},
    "nirvana":{bio:"Американская рок-группа, ставшая одним из символов гранжа начала 1990-х. Соединила энергию панка с тяжёлыми гитарами и контрастной динамикой.",influences:["Панк-рок","альтернативный рок","хард-рок"],sound:"Контраст тихих куплетов и мощных припевов, шероховатый гитарный звук.",tracks:["Smells Like Teen Spirit","Come as You Are"]},
    "radiohead":{bio:"Британская группа, расширявшая границы альтернативного рока благодаря работе с электроникой, нестандартными гармониями и сложными текстурами.",influences:["Альтернативный рок","электронная музыка","арт-рок"],sound:"Необычные гармонии, слоистые аранжировки и выразительный вокал.",tracks:["Creep","Paranoid Android"]},
    "iron maiden":{bio:"Британская группа, одна из ключевых фигур классического хеви-метала, известная мелодическими гитарными партиями и эпическим повествованием.",influences:["Хард-рок","хеви-метал"],sound:"Две ведущие гитары, галопирующий ритм и высокий энергичный вокал.",tracks:["The Trooper","Run to the Hills"]},
    "pink floyd":{bio:"Британская рок-группа, важная для развития прогрессивной и психоделической рок-музыки, концептуальных альбомов и студийного звука.",influences:["Психоделический рок","прогрессивный рок"],sound:"Протяжённые композиции, звуковые эксперименты и атмосферные гитарные партии.",tracks:["Wish You Were Here","Time"]},
    "the beatles":{bio:"Британская группа, чьи песни и студийные эксперименты оказали огромное влияние на развитие рок- и поп-музыки.",influences:["Рок-н-ролл","ритм-энд-блюз","поп"],sound:"Мелодические гармонии, выразительные вокальные партии и разнообразные аранжировки.",tracks:["Hey Jude","Come Together"]},
    "aretha franklin":{bio:"Американская певица, одна из центральных фигур соул-музыки, известная мощной госпел-подачей и выразительной эмоциональной интерпретацией.",influences:["Госпел","ритм-энд-блюз","соул"],sound:"Мощный вокал, госпел-обороты и характерная соул-ритм-секция.",tracks:["Respect","Think"]},
    "james brown":{bio:"Американский певец и музыкант, один из ключевых создателей фанкового звучания с акцентом на ритм и ансамблевый грув.",influences:["Соул","ритм-энд-блюз","госпел"],sound:"Синкопированный бас и ударные, ритмические вокальные выкрики, духовые акценты.",tracks:["I Got You (I Feel Good)"]},
    "daft punk":{bio:"Французский электронный дуэт, соединивший хаус, диско, фанк и поп-мелодику в узнаваемом студийном звучании.",influences:["Диско","хаус","фанк"],sound:"Синтезаторы, сэмплы, фильтрованные грувы и электронная обработка вокала.",tracks:["One More Time","Get Lucky"]}
  };
  /* Exact activity spans only where unambiguous; others keep the original Academy period label. */
  const ACTIVITY_YEARS={
    "the beatles":"1960–1970",
    "nirvana":"1987–1994",
    "daft punk":"1993–2021",
    "operation ivy":"1987–1989",
    "ария":"с 1985 года",
    "iron maiden":"с 1975 года",
    "король и шут":"1988–2013",
    "кино":"1981–1990 (первоначальный период)"
  };
  const STYLE_ROOTS={
    "reggae-ska":["ямайский ритм-энд-блюз","джаз","менто"],"ska-jamaican":["менто","джаз","ритм-энд-блюз"],
    "ska-two-tone":["ямайское ска","панк-рок","новая волна"],"ska-third-wave":["ска","2 Tone","панк-рок"],"ska-punk":["ска","панк-рок"],"ska-jazz":["ска","джаз"],"ska-core":["ска-панк","хардкор-панк"],
    "reggae-roots":["рокстеди","ска"],"reggae-dub":["регги","студийная электроника"],"punk-rock":["гаражный рок","рок-н-ролл"],
    "grunge":["панк-рок","хард-рок","гаражный рок"],"funk-classic":["соул","ритм-энд-блюз"],"disco-classic":["фанк","соул","танцевальная поп-музыка"],
    "hiphop-boombap":["классический хип-хоп","сэмплирование"],"hiphop-trap":["южный хип-хоп"],"techno":["электрофанк","диско","электронная музыка"]
  };
  const state={hubOpen:false,locale:"all",query:"",savedOnly:false,page:0,active:null,lastFocus:null};
  let index=null;
  let favorites;try{favorites=new Set(JSON.parse(localStorage.getItem(FAV_KEY)||"[]").filter(x=>typeof x==="string"));}catch(_){favorites=new Set();}
  const saveFavorites=()=>{try{localStorage.setItem(FAV_KEY,JSON.stringify([...favorites]));}catch(_){}};
  const artistKey=s=>norm(s);
  const firstUseful=(xs)=>xs.find(s=>s&&!/^(Один из музыкальных ориентиров жанра|Важный представитель)/i.test(s))||xs.find(Boolean)||"";
  function indexArtists(){
    const m=new Map();
    const add=(name,genre,scene,row)=>{
      if(typeof name!=="string"||!name.trim())return;
      const key=artistKey(name);
      let rec=m.get(key);
      if(!rec){rec={key,name:name.trim(),genres:new Set(),scenes:new Set(),periods:new Set(),bios:[],tracks:new Set(),roles:new Set()};m.set(key,rec);}
      if(genre)rec.genres.add(genre.id);
      if(scene)rec.scenes.add(scene);
      if(row){
        const period=String(row[1]||"").trim(),bio=String(row[2]||"").trim(),track=String(row[3]||"").trim();
        if(period)rec.periods.add(period);
        if(bio&&!rec.bios.includes(bio))rec.bios.push(bio);
        if(track)rec.tracks.add(track);
        if(row[4])rec.roles.add(String(row[4]));
      }
    };
    for(const g of GENRES){
      for(const [scene,store] of [["world",typeof ARTIST_PAGES!=="undefined"?ARTIST_PAGES:{}],["ru",typeof RU_ARTISTS!=="undefined"?RU_ARTISTS:{}]]){
        const groups=store[g.id];
        if(!Array.isArray(groups))continue;
        for(const rows of groups){if(!Array.isArray(rows))continue;for(const row of rows)if(Array.isArray(row))add(row[0],g,scene,row);}
      }
      if(Array.isArray(g.artists))for(const name of g.artists)if(!m.has(artistKey(name)))add(name,g,"world",null);
    }
    return m;
  }
  const getIndex=()=>index||(index=indexArtists());
  const genreFor=id=>GENRES.find(g=>g.id===id);
  const genreMatches=rec=>[...rec.genres].map(genreFor).filter(Boolean);
  const findRecord=(name,source)=>{
    const key=artistKey(name),i=getIndex();
    let rec=i.get(key);
    if(!rec){rec={key,name,genres:new Set(),scenes:new Set(),periods:new Set(),bios:[],tracks:new Set(),roles:new Set()};i.set(key,rec);}
    if(source){
      if(source.genre)rec.genres.add(source.genre);
      if(source.locale)rec.scenes.add(source.locale);
      if(source.period)rec.periods.add(source.period);
      if(source.bio&&!rec.bios.includes(source.bio))rec.bios.unshift(source.bio);
      if(source.track)rec.tracks.add(source.track.replace(/^♫\s*/,""));
    }
    return rec;
  };
  const tile='<button type="button" class="encyclopedia-section sb-ap-tile" data-sb-ap-action="hub-open"><span class="encyclopedia-section-icon" aria-hidden="true">🎙️</span><span><strong>Профили исполнителей</strong><small>История, звучание и важные произведения</small></span><span class="encyclopedia-section-status">Открыть</span></button>';
  const hub='<details id="sb-ap-hub" class="sb-ap-hub"><summary><span class="sb-ap-sym">🎙️</span><span><strong>Профили исполнителей</strong><small>Мировая и русскоязычная сцены SUNOBOOM</small></span><span class="sb-ap-chevron">⌄</span></summary><div id="sb-ap-hub-content"></div></details>';
  const originalCatalog=catalog;
  catalog=function(){
    return originalCatalog.apply(this,arguments)
      .replace('<div class="encyclopedia-section encyclopedia-section-future">',tile+'<div class="encyclopedia-section encyclopedia-section-future">')
      .replace('<div class="genre-family-toolbar">',hub.replace('class="sb-ap-hub"','class="sb-ap-hub"'+(state.hubOpen?' open':''))+'<div class="genre-family-toolbar">');
  };
  function labelScene(rec){return rec.scenes.has("ru")&&rec.scenes.has("world")?"Мировая и русскоязычная подборки":rec.scenes.has("ru")?"Русскоязычная подборка":"Мировая подборка";}
  function orderedArtists(){return [...getIndex().values()].filter(rec=>rec.name).sort((a,b)=>a.name.localeCompare(b.name,"ru"));}
  function filteredArtists(){
    const q=norm(state.query);
    return orderedArtists().filter(rec=>(state.locale==="all"||rec.scenes.has(state.locale))&&(!state.savedOnly||favorites.has(rec.key))&&(!q||[rec.name,...genreMatches(rec).map(g=>g.name),...rec.tracks].some(x=>norm(x).includes(q))));
  }
  function hubResults(){
    const root=document.querySelector("#sb-ap-hub-content");
    if(!root)return;
    const rows=filteredArtists();
    const out=root.querySelector("#sb-ap-results"),count=root.querySelector("#sb-ap-count");
    if(count)count.textContent="Найдено "+rows.length+" исполнителей · в избранном "+favorites.size;
    if(!out)return;
    const pageSize=24,shown=rows.slice(0,(state.page+1)*pageSize);
    out.innerHTML=shown.length?shown.map(rec=>{
      const genres=genreMatches(rec),overview=firstUseful(rec.bios);
      return '<article class="sb-ap-index-card"><div class="sb-ap-index-title"><span class="sb-ap-avatar">'+esc(rec.name.replace(/[^A-Za-zА-Яа-яЁё0-9 ]/g,"").trim().split(/\s+/).slice(0,2).map(x=>x[0]).join("").slice(0,2)||"♫")+'</span><div><strong>'+esc(rec.name)+'</strong><small>'+esc(labelScene(rec))+'</small></div></div><p>'+esc(overview||"Краткая справка доступна в материалах жанра.")+'</p><div class="sb-ap-chips">'+genres.slice(0,3).map(g=>'<span>'+esc(g.name)+'</span>').join("")+'</div><div class="sb-ap-card-actions"><button type="button" data-sb-ap-action="profile" data-name="'+esc(rec.name)+'">Открыть профиль</button><button type="button" data-sb-ap-action="favorite" data-name="'+esc(rec.name)+'" aria-pressed="'+favorites.has(rec.key)+'" title="Сохранить профиль" aria-label="Сохранить профиль '+esc(rec.name)+'">'+(favorites.has(rec.key)?"★":"☆")+'</button></div></article>';
    }).join(""):'<div class="sb-ap-empty">По этому запросу исполнители не найдены. Попробуй другое название или отключи фильтры.</div>';
    const more=root.querySelector("#sb-ap-more");
    if(more){more.hidden=shown.length>=rows.length;more.textContent="Показать ещё · "+Math.max(0,rows.length-shown.length);}
  }
  function renderHub(){
    const node=document.querySelector("#sb-ap-hub-content");
    if(!node)return;
    node.innerHTML='<div class="sb-ap-heading"><div><span class="sb-ap-overline">SUNOBOOM · МУЗЫКАЛЬНАЯ АКАДЕМИЯ</span><h2>Энциклопедия исполнителей</h2><p>Все существующие подборки артистов собраны в единый указатель. Профиль показывает сведения из Академии, а для отдельных исполнителей — расширенную редакционную справку.</p></div><div class="sb-ap-total">'+getIndex().size+' имён в базе</div></div><div class="sb-ap-tools"><label>Поиск по имени или жанру<input id="sb-ap-search" type="search" placeholder="Например: Distemper или поп" autocomplete="off" value="'+esc(state.query)+'"></label><label>Подборка<select id="sb-ap-locale"><option value="all"'+(state.locale==="all"?" selected":"")+'>Все сцены</option><option value="ru"'+(state.locale==="ru"?" selected":"")+'>Русскоязычная сцена</option><option value="world"'+(state.locale==="world"?" selected":"")+'>Мировая сцена</option></select></label><label class="sb-ap-check"><input id="sb-ap-saved-only" type="checkbox"'+(state.savedOnly?" checked":"")+'> Только избранные</label></div><p id="sb-ap-count" class="sb-ap-count" aria-live="polite"></p><div id="sb-ap-results" class="sb-ap-index-grid"></div><button type="button" id="sb-ap-more" class="sb-ap-more" data-sb-ap-action="more" hidden>Показать ещё</button><p class="sb-ap-disclaimer">Периоды в исходных карточках ориентировочные. Присутствие в подборке жанра не обязательно означает, что это единственное направление или прямое влияние на исполнителя.</p>';
    hubResults();
  }
  function enhanceExistingCards(){
    if(view.nav!=="detail"||view.tab!=="artists")return;
    for(const card of document.querySelectorAll(".ahx-card,.ah-card")){
      if(card.querySelector("[data-sb-ap-action='profile']"))continue;
      const title=card.querySelector(".ahx-title h4,.ah-id h4")?.textContent?.trim();
      if(!title)continue;
      const buttons=document.createElement("div");buttons.className="sb-ap-inline-actions";
      const open=document.createElement("button");open.type="button";open.className="sb-ap-inline-open";open.dataset.sbApAction="profile";open.dataset.name=title;open.textContent="Полный профиль →";
      const star=document.createElement("button");star.type="button";star.className="sb-ap-inline-star";star.dataset.sbApAction="favorite";star.dataset.name=title;star.setAttribute("aria-label","Добавить в избранное: "+title);star.setAttribute("aria-pressed",String(favorites.has(artistKey(title))));star.textContent=favorites.has(artistKey(title))?"★":"☆";
      buttons.append(open,star);card.appendChild(buttons);
    }
  }
  const priorRender=render;
  render=function(){
    const output=priorRender.apply(this,arguments);
    enhanceExistingCards();
    if(view.nav==="catalog"&&state.hubOpen)renderHub();
    return output;
  };
  function currentCardDetails(button){
    const card=button.closest(".ahx-card,.ah-card");
    if(!card)return null;
    return {genre:view.selected,locale:view.artistLocale,
      period:card.querySelector(".ahx-era,.ah-period")?.textContent?.trim()||"",
      bio:card.querySelector(".ahx-card > p,.ah-bio")?.textContent?.trim()||"",
      track:card.querySelector(".ahx-track strong,.ah-listen strong")?.textContent?.trim()||""};
  }
  function profileHTML(rec){
    const info=EDITORIAL[rec.key]||null,genres=genreMatches(rec);
    const biography=info?.bio||firstUseful(rec.bios)||"В Академии пока есть только краткая привязка к жанру; расширенная биография ещё не добавлена.";
    const main=genres.find(g=>g.id===view.selected)||genres[0];
    const exactYears=ACTIVITY_YEARS[rec.key]||"";
    const period=exactYears||[...rec.periods].filter(Boolean)[0]||"Не уточнён";
    const songs=[...new Set([...(info?.tracks||[]),...rec.tracks])].filter(Boolean);
    const roots=info?.influences||STYLE_ROOTS[main?.id]||[];
    const sound=info?.sound||(main?"Характерный контекст направления «"+main.name+"»: "+[main.tagline,main.instruments].filter(Boolean).join(". "):"В материалах пока нет отдельного описания звучания исполнителя.");
    const biotype=info?"Редакционная справка SUNOBOOM":"Сведения из карточек Академии";
    return '<div class="sb-ap-dialog-title"><span>🎙️ Профиль исполнителя</span><button type="button" data-sb-ap-action="close" class="sb-ap-close" aria-label="Закрыть профиль">×</button></div><div class="sb-ap-profile-hero"><div class="sb-ap-profile-logo">'+esc(rec.name.split(/\s+/).slice(0,2).map(x=>x[0]).join("").slice(0,2))+'</div><div><span class="sb-ap-overline">'+esc(labelScene(rec))+'</span><h2 id="sb-ap-dialog-heading">'+esc(rec.name)+'</h2><p>'+esc(biotype)+'</p></div></div><div class="sb-ap-profile-fields"><section><small>'+(exactYears?"Годы активности":"Период в подборке") +'</small><strong>'+esc(period)+'</strong></section><section><small>Направлений в Академии</small><strong>'+genres.length+'</strong></section><section><small>Ориентиры для прослушивания</small><strong>'+songs.length+'</strong></section></div><div class="sb-ap-profile-section"><h3>Биография и творческий путь</h3><p>'+esc(biography)+'</p></div><div class="sb-ap-profile-section"><h3>Особенности звучания</h3><p>'+esc(sound)+'</p>'+(info?"":'<p class="sb-ap-fine">Описание относится к музыкальному направлению и не является подтверждённым персональным анализом артиста.</p>')+'</div><div class="sb-ap-profile-section"><h3>'+(info?"Музыкальные влияния и стилистика":"Истоки музыкального направления")+'</h3>'+(roots.length?'<div class="sb-ap-pills">'+roots.map(x=>'<span>'+esc(x)+'</span>').join("")+'</div>':'<p class="sb-ap-muted">Персональные музыкальные влияния ещё не документированы в этой карточке.</p>')+(!info&&roots.length?'<p class="sb-ap-fine">Это контекст жанра, а не утверждение о личных влияниях музыканта.</p>':'')+'</div><div class="sb-ap-profile-section"><h3>Произведения для знакомства</h3>'+(songs.length?'<ul class="sb-ap-songs">'+songs.slice(0,10).map(x=>'<li>♫ '+esc(x)+'</li>').join("")+'</ul>':'<p class="sb-ap-muted">Список произведений пока не заполнен.</p>')+'</div><div class="sb-ap-profile-section"><h3>Жанры и связанные подборки</h3>'+(genres.length?'<div class="sb-ap-related">'+genres.slice(0,15).map(g=>'<button type="button" data-sb-ap-action="genre" data-genre="'+esc(g.id)+'">'+esc(g.name)+' →</button>').join("")+'</div>':'<p class="sb-ap-muted">Жанровые ссылки пока не добавлены.</p>')+'</div><div class="sb-ap-profile-buttons"><button type="button" data-sb-ap-action="favorite" data-name="'+esc(rec.name)+'" aria-pressed="'+favorites.has(rec.key)+'" class="sb-ap-fav-main">'+(favorites.has(rec.key)?"★ В избранном":"☆ Сохранить в избранное")+'</button><button type="button" data-sb-ap-action="copy" data-name="'+esc(rec.name)+'" class="sb-ap-copy">Скопировать справку</button></div><p class="sb-ap-fine">Профиль не связан с отдельной функцией «ДНК артиста». Это справочный материал Академии, не личный творческий проект пользователя.</p>';
  }
  let previousOverflow="";
  function openProfile(name,source,button){
    if(!name)return;
    const rec=findRecord(name,source);
    state.active=rec.key;state.lastFocus=button||document.activeElement;
    let overlay=document.getElementById("sb-ap-overlay");
    if(!overlay){
      overlay=document.createElement("div");overlay.id="sb-ap-overlay";overlay.className="sb-ap-overlay";
      overlay.innerHTML='<div class="sb-ap-backdrop" data-sb-ap-action="close"></div><section class="sb-ap-dialog" role="dialog" aria-modal="true" aria-labelledby="sb-ap-dialog-heading" tabindex="-1"><div id="sb-ap-dialog-body"></div></section>';
      document.body.appendChild(overlay);
    }
    overlay.querySelector("#sb-ap-dialog-body").innerHTML=profileHTML(rec);
    overlay.hidden=false;
    if(!document.body.classList.contains("sb-ap-dialog-open"))previousOverflow=document.body.style.overflow;
    document.body.classList.add("sb-ap-dialog-open");document.body.style.overflow="hidden";
    overlay.querySelector("[data-sb-ap-action='close']")?.focus();
  }
  function closeProfile(){
    const overlay=document.getElementById("sb-ap-overlay");
    if(overlay)overlay.hidden=true;
    document.body.classList.remove("sb-ap-dialog-open");document.body.style.overflow=previousOverflow;
    state.active=null;
    if(state.lastFocus?.isConnected)state.lastFocus.focus();
  }
  function refreshFavoriteButtons(){
    document.querySelectorAll("[data-sb-ap-action='favorite']").forEach(btn=>{
      const isFav=favorites.has(artistKey(btn.dataset.name));
      btn.setAttribute("aria-pressed",String(isFav));
      if(btn.classList.contains("sb-ap-fav-main"))btn.textContent=isFav?"★ В избранном":"☆ Сохранить в избранное";
      else btn.textContent=isFav?"★":"☆";
    });
    if(view.nav==="catalog"&&state.hubOpen)hubResults();
  }
  document.addEventListener("click",event=>{
    const btn=event.target.closest?.("[data-sb-ap-action]");
    if(!btn)return;
    const act=btn.dataset.sbApAction;
    if(act==="hub-open"){
      const hubNode=document.getElementById("sb-ap-hub");if(!hubNode)return;
      hubNode.open=true;state.hubOpen=true;renderHub();hubNode.scrollIntoView({behavior:"smooth",block:"start"});return;
    }
    if(act==="profile"){openProfile(btn.dataset.name,currentCardDetails(btn),btn);return;}
    if(act==="close"){closeProfile();return;}
    if(act==="favorite"){
      const key=artistKey(btn.dataset.name);if(!key)return;
      if(favorites.has(key))favorites.delete(key);else favorites.add(key);
      saveFavorites();refreshFavoriteButtons();return;
    }
    if(act==="more"){state.page++;hubResults();return;}
    if(act==="genre"){
      const id=btn.dataset.genre;
      if(genreFor(id)){closeProfile();openGenre(id,"artists");}
      return;
    }
    if(act==="copy"){
      const rec=getIndex().get(artistKey(btn.dataset.name));if(!rec)return;
      const info=EDITORIAL[rec.key]||{};
      const body=[rec.name,info.bio||firstUseful(rec.bios),info.sound||"",[...new Set([...(info.tracks||[]),...rec.tracks])].join(", ")].filter(Boolean).join("\n\n");
      if(navigator.clipboard?.writeText)navigator.clipboard.writeText(body).then(()=>{if(typeof toast==="function")toast("Справка скопирована");}).catch(()=>{if(typeof toast==="function")toast("Не получилось скопировать справку");});
      else if(typeof toast==="function")toast("Копирование не поддерживается браузером");
    }
  });
  document.addEventListener("toggle",event=>{
    if(event.target?.id!=="sb-ap-hub")return;
    state.hubOpen=event.target.open;
    if(state.hubOpen)renderHub();
  },true);
  document.addEventListener("input",event=>{
    if(event.target?.id!=="sb-ap-search")return;
    state.query=event.target.value;state.page=0;hubResults();
  });
  document.addEventListener("change",event=>{
    if(event.target?.id==="sb-ap-locale"){state.locale=event.target.value;state.page=0;hubResults();}
    if(event.target?.id==="sb-ap-saved-only"){state.savedOnly=event.target.checked;state.page=0;hubResults();}
  });
  document.addEventListener("keydown",event=>{
    const overlay=document.getElementById("sb-ap-overlay");
    if(!overlay||overlay.hidden)return;
    if(event.key==="Escape"){event.preventDefault();closeProfile();return;}
    if(event.key==="Tab"){
      const list=[...overlay.querySelectorAll("button:not(:disabled),a[href],input:not(:disabled)")].filter(el=>el.getClientRects().length);
      if(!list.length)return;
      const first=list[0],last=list[list.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
  if(view.nav==="detail")enhanceExistingCards();
})();
