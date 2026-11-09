/* SUNOBOOM v0.142 · Apply palettes to cards across the app. */
(function installVersionHistory(){
 "use strict";
 const RELEASES=[["0.142","Цветные темы теперь перекрашивают карточки и панели Академии, Мастера, Студии и кабинета; изображения и обложки сохранены","2026-11-09","small"],["0.141","Единый компонент выпадающего меню: поиск, сортировка по алфавиту и исходному порядку, поддержка тем и мобильных экранов","2026-11-09","small"],["0.140","Единое оформление выпадающих списков во всех разделах: рамка, стрелка, отступы, состояния наведения и фокуса, цвета текущей темы","2026-11-09","small"],["0.139","Четыре дополнительные палитры: Океан, Лес, Закат и Аметист. Выбор в настройках, мгновенное применение и сохранение после перезагрузки; прежние тёмная, светлая и системная темы сохранены","2026-11-09","small"],["0.138","Vue 3: внутренняя история паспорта трека восстанавливает выбранную карточку и список с прежним фильтром. Проверяется существование ID, редактор защищён от потери изменений; файлы, хранилища и адрес браузера не меняются","2026-11-09","small"],["0.137","Vue 3: возврат по внутренней истории из карточки жанра в Академию и обратно с восстановлением точного жанра и вкладки. Сохраняется только проверенный ID жанра и вкладка; редакторы, паспорта, URL браузера, локальные файлы и HTML-резерв не затрагиваются","2026-11-09","small"],["0.136","Компактная панель истории разделов на Vue 3 под верхней строкой: кнопки «Назад» и «Вперёд» с адаптивным дизайном, проверкой безопасного перехода, disabled-состояниями и доступными подписями. Нижнее меню, уведомления, настройки и HTML-резерв не изменяются","2026-11-09","small"],["0.135","Безопасное восстановление основных разделов через внутреннюю историю Vue Router: подготовлены команды назад/вперёд с проверкой маршрута, повторным открытием через прежний go() и отказом для вложенных карточек. URL браузера, редакторы, хранилища и HTML-резерв не меняются","2026-11-09","small"],["0.134","Клики по Vue-меню создают реальные записи во внутренней истории Vue Router; переходы старого интерфейса лишь обновляют текущую запись. Реальное отображение по-прежнему контролирует прежний go(); проверены один переход на клик, вложенные маршруты и неизменный URL","2026-11-09","small"],["0.133","Vue 3: единый адаптер переходов бокового и мобильного меню — маршрут проверяется через Vue Router, а фактический переход выполняется один раз исходным go(). Без изменения адресов и истории браузера; добавлены проверки и сохранены все функции и HTML-резерв","2026-11-09","small"],["0.132","Vue Router напрямую подключён к двум Vue-компонентам меню: подсветка маршрутов использует useRoute с защитой от задержек. Не меняются адреса страниц и существующая навигация; все функции, данные, музыкальное древо и резервная разметка сохранены","2026-11-09","small"],["0.131","Подключён Vue Router в режиме памяти: он следует действующим переходам, не меняя URL, историю браузера, экраны, хранилище или действия; вложенные страницы Академии и кабинета учитываются. Добавлены unit- и браузерные проверки, HTML-резерв сохранён","2026-11-09","small"],["0.130","Единое реактивное состояние маршрута для бокового и мобильного Vue-меню. Вложенные страницы Академии и кабинета подсвечиваются правильно без второго роутера; сохранены исходные действия, локальные данные и HTML-резерв","2026-11-09","small"],["0.129","Vue 3: создание и редактирование паспорта трека, выбор этапов, жанров и связей, метаданные, тексты, примечания и живой расчёт даты релиза. Сохранены проверка HTTPS, события календаря, версии, локальное хранение и полный HTML-резерв","2026-11-09","large"],["0.128","Vue 3: подробная карточка паспорта трека — обложка, этап, метаданные, связи, текст, промпт, заметки и версии. Создание/редактирование, даты релиза, календарь и хранение остались прежними; работает резервный HTML-режим","2026-11-09","large"],["0.127","Исправлено музыкальное древо в Академии: его рабочая карта теперь находится вне контейнера Vue, поэтому кнопка снова открывает схемы жанров, полное древо, поиск, масштаб и карточки; поддерживаются телефон и резервный HTML-режим","2026-11-09","small"],["0.126","Vue 3: список паспортов треков и фильтры по этапам; создание, редактирование, версии, даты релизов, ссылки и календарь работают через прежние обработчики. HTML-резерв и локальные данные сохранены","2026-11-09","large"],["0.125","Vue 3: полная рабочая карточка «Мастера» — название, исполнитель, заметки, прогресс шести этапов, связи, снимок аранжировки и история. Все операции записи, проверки конфликтов, переходы, подтверждения и HTML-резерв сохранены","2026-11-08","large"],["0.124","Добавлена кнопка настроек с иконкой шестерёнки рядом с уведомлениями в верхней панели: одинаковый стиль на телефоне и компьютере, открытие существующих настроек из любого раздела, сохранён прежний вход через личный кабинет","2026-11-08","small"],["0.123","В настройках личного кабинета добавлена тема приложения: тёмная, светлая или системная; выбор применяется сразу, сохраняется в браузере и восстанавливается после перезагрузки. Сохранены существующие функции и настройки интерфейса","2026-11-08","small"],["0.122","Vue 3: список рабочих песен в «Мастере» — карточки, прогресс этапов и реактивная фильтрация; создание, редактирование, связи, аранжировки, история, хранение и HTML-резерв сохранены","2026-11-08","large"],["0.121","Мобильное нижнее меню: устранена двойная подпись «Миксер» (удалено CSS-правило ::after); восстановлена иконка, оставлена одна короткая подпись, исправлено наложение кнопок на узких экранах. Vue и резервное меню используют единый список без дублей; добавлены браузерные проверки и обновление кеша стилей. Объединены исправления прежних записей 0.121–0.125 без отката функций.","2026-11-08","small"],["0.120","Vue 3: панель A/B-сравнения плеера — загрузка версий, воспроизведение, метки и повтор фрагмента, оценки и заметки; аудиодвижки и резервная разметка сохранены","2026-11-08","large"],["0.119","Vue 3: основной интерфейс Player LAB и очередь треков, управление воспроизведением, загрузка локальных аудиофайлов, скорость, повтор и shuffle; A/B оставлен на прежней логике","2026-11-08","large"],["0.118","Vue 3: настройки личного кабинета — параметры интерфейса, стартовая страница, имя профиля, резервное копирование и безопасный сброс; прежние обработчики и локальные данные сохранены","2026-11-08","large"],["0.117","Vue 3: форма ДНК артиста — жанр, проект, голос, язык, темп, ограничения и образ; живой предпросмотр Style до 1000 символов, сохранение и проверки остались в оригинальной логике","2026-11-08","large"],["0.116","Vue 3: список и подробный просмотр профилей «ДНК артиста», стиль, ссылки на паспорта; существующие редактор, сохранение и Suno Studio сохранены","2026-11-08","large"],["0.115","Vue 3: менеджер моих артистов, реактивный поиск и сохранение/удаление исполнителей; существующие песни и профили ДНК артиста не изменяются","2026-11-08","large"],["0.114","Vue 3: форма создания и редактирования песни с каталогами артистов и жанров, загрузкой MP3/M4A/WAV и обложками; старое файловое хранилище и резервная HTML-форма сохранены","2026-11-08","large"],["0.113","Vue 3: управление аудиодублями, заметками, выбор основной версии, добавление WAV/MP3/M4A и сравнение A/B; прежняя логика и локальное хранилище сохранены","2026-11-08","large"],["0.112","Vue 3: подробная карточка песни — обложка, сведения, плеер, действия и подтверждение удаления; управление дублями и A/B продолжают работать через прежнюю логику","2026-11-08","large"],["0.111","Vue 3: карточки «Мои песни», реактивный поиск и локальные обложки без переноса аудиофайлов и дублей из исходного хранилища","2026-11-08","large"],["0.110","Vue 3: форма создания и редактирования промптов, реактивный счётчик 1000 символов; аудитор и сохранение оставлены на исходных обработчиках","2026-11-08","large"],["0.109","Vue 3: Моя библиотека — избранные жанры, идеи Академии, собственные идеи, Idea Lab и промпты; прежнее хранение и действия сохранены","2026-11-08","large"],["0.108","Vue 3: сохранённые промпты кабинета; копирование, редактирование, удаление и аудитор сохранены на прежней логике","2026-11-08","large"],["0.107","Vue 3: списки собственных идей, сохранённые идеи Idea Lab и Академии; сохранены действия карточек, связи с Мастером и паспортом трека","2026-11-08","large"],["0.106","Vue 3: форма редактирования идеи песни, оригинальный текст и инструменты Lyrics/Style; сохранены ударения, вокальные теги и существующее хранилище","2026-11-08","large"],["0.105","Редактор песенной поэзии на Vue 3: статистика строк, рифмовка, неоднозначные ударения и генератор вокальных тегов с ручным подтверждением; словарь и исходные тексты сохранены","2026-11-08","large"],["0.104","Vue 3: выбор и поиск шаблонов Академии, библиотека инструментов аранжировки, реактивный Lyrics/Style и подтверждение переноса в Suno Studio","2026-11-08","large"],["0.103","Визуальный аранжировщик на Vue 3: карточки музыкальных блоков, интерактивная змейка, переходы и кривая энергии; сохранены drag-and-drop, рекомендации и черновики","2026-11-08","large"],["0.102","Аудитор Suno-промптов на Vue 3: локальная оценка, проверки противоречий, ручной текст, предпросмотр правок и подтверждение копирования; исходные правила и данные сохранены","2026-11-08","large"],["0.101","Жанровый миксер на Vue 3: реактивные пропорции, сохранённые формулы, Style-промпт и передача в Suno Studio; исходный алгоритм не изменён","2026-11-08","large"],["0.100","Suno Studio на Vue 3: настройки, реактивный предпросмотр промпта, лимит 1000 символов, сохранение; сохранены аранжировщик, жанровый миксер и аудитор","2026-11-08","large"],["0.99","Все вкладки жанра на Vue 3: идеи песен и промпты Suno, сохранение в библиотеку, перенос идей и настроек в студию; сохранена исходная база и обработчики","2026-11-08","large"],["0.98","Карточка жанра: «Обзор» и «Исполнители» переведены на Vue 3 — русскоязычная и мировая сцены, фильтры, поиск, полные профили и избранное; исходные данные сохранены","2026-11-08","large"],["0.97","Карточка жанра на Vue 3: шапка, вертикальное меню «ЖАНР-НАВ», переключение обзора, идей, промптов и исполнителей; сохранена работа избранного и возврата к поиску","2026-11-08","large"],["0.96","Академия на Vue 3: реактивный поиск и фильтрация, раскрывающиеся музыкальные семейства и вложенная религиозная иерархия без изменения жанровой базы","2026-11-08","large"],["0.95","Академия: карточки жанров на Vue 3 при сохранении поиска, музыкальных семейств, иерархии религиозных направлений и мобильного интерфейса","2026-11-08","large"],["0.94","Vue 3: боковое и мобильное меню переведены на общий компонент; проверена работа на компьютере и телефоне, сохранён резервный режим","2026-11-08","large"],["0.93","Исправлена первая загрузка: пункт «Мастер» сразу отображается в нижнем и боковом меню без дополнительных нажатий","2026-11-07","small"],["0.92","Продюсерский центр переименован в «Мастер» во всём интерфейсе без изменения функций и сохранённых данных","2026-11-07","small"],["0.91","Интеллектуальный аудитор Suno-промптов: проверка 1000 символов, повторов, противоречий и жанра, оценка и предпросмотр сокращений","2026-11-07","large"],["0.90","Продюсерский центр: единый маршрут от идеи до релиза, связи с карточками, этапы, история, снимки аранжировки","2026-11-07","large"],["0.89","Менеджер версий внутри карточек песен: MP3, M4A, WAV, заметки, основной дубль, сравнение A/B","2026-11-07","large"],["0.88","Добавлен общий хронологический список всех минорных обновлений с переключением на крупные и мелкие","2026-11-07","small"],["0.87","Исправлен поиск в Академии: сначала названия жанров, поиск с клавиатуры iPhone","2026-11-07","small"],["0.86","Общий поиск версий и функций одновременно во всех разделах истории","2026-11-07","small"],["0.85","Две вкладки внутри истории минорных версий: крупные и мелкие обновления","2026-11-07","small"],["0.84","Исправлено разделение истории по номеру: мажорная часть до точки, минорная — после","2026-11-07","small"],["0.83","Разделение истории обновлений на мажорные и минорные версии","2026-11-07","small"],["0.82","История обновлений показывает только версии и основные изменения","2026-11-07","small"],["0.81","История обновлений по нажатию на номер версии","2026-11-07","small"],["0.80","Единый номер версии рядом с логотипом на компьютере и телефоне","2026-11-07","small"],["0.79","Выбор жанров и поджанров Академии в карточке песни","2026-11-07","small"],["0.78","Личный список артистов с поиском и связью с ДНК артиста","2026-11-07","large"],["0.77","Автоматическая обложка из MP3, M4A и FLAC","2026-11-07","small"],["0.76","Мои песни: аудиофайлы, обложки, карточки и ссылки","2026-11-07","large"],["0.75","Видимая панель переходов в аранжировщике","2026-11-07","small"],["0.74","Редактор переходов между блоками песни","2026-11-07","large"],["0.73","Перетаскивание блоков в змейке аранжировки","2026-11-07","large"],["0.72","Компактная интерактивная змейка структуры песни","2026-11-07","small"],["0.71","Умные рекомендации для каждого блока аранжировки","2026-11-07","large"],["0.70","Постоянные подсказки инструментов и приёмов по жанрам","2026-11-06","small"],["0.69","Выбор инструментов из коллекций Академии","2026-11-06","small"],["0.68","Собственные блоки песен и вставка между секциями","2026-11-06","large"],["0.67","Поиск жанров Академии в аранжировщике","2026-11-06","small"],["0.66","Визуальный аранжировщик в Suno Studio","2026-11-06","large"],["0.65","A/B-сравнение двух аудиозаписей в плеере","2026-11-06","large"],["0.64","Настройки личного кабинета и интерфейса","2026-11-06","large"],["0.63","Подсказки громкости плеера для телефонов","2026-11-06","small"],["0.62","Градиентные кнопки управления треками","2026-11-06","small"],["0.61","Тестовый аудиоплеер и мобильное воспроизведение","2026-11-06","large"],["0.59","Поиск и подробные профили исполнителей Академии","2026-11-06","large"],["0.58","Все коллекции жанров в музыкальном древе","2026-11-06","large"],["0.57","Поиск, масштабирование и навигация по древу жанров","2026-11-06","small"],["0.56","Интерактивное древо происхождения жанров и раздел ска","2026-11-06","large"],["0.55","Расширение русскоязычных артистов и жанров ска","2026-11-05","large"],["0.54","Расширенные международные и русскоязычные подборки артистов","2026-11-05","large"],["0.53","Русскоязычные артисты эпической музыки","2026-11-05","small"],["0.52","Большой раздел эпической музыки и поджанры","2026-11-05","large"],["0.51","Генератор тегов вокального исполнения в редакторе поэзии","2026-11-05","large"],["0.50","Жанровый миксер в основном сайте","2026-11-05","large"],["0.49","Подсветка неоднозначных ударений и выбор варианта","2026-11-05","small"],["0.48","Большой словарь русских ударений","2026-11-05","large"],["0.47","Автоматическая расстановка ударений","2026-11-05","large"],["0.46","ДНК артиста: вокал, звучание и связь с треками","2026-11-05","large"],["0.45","Паспорт трека и планирование релизов","2026-11-05","large"],["0.44","Быстрый переход в редактор песенной поэзии","2026-11-05","small"],["0.43","Редактор поэзии с рифмами, слогами и структурой","2026-11-05","large"],["0.42","Улучшение мобильного личного кабинета","2026-11-04","small"],["0.41","Вертикальное меню ЖАНР-НАВ","2026-11-04","large"],["0.40","Двенадцать крупных музыкальных семейств и поджанры","2026-11-04","large"],["0.39","Большой раздел R&B и соула","2026-11-04","large"],["0.38","Пробный числовой индикатор уведомлений","2026-11-04","small"],["0.37","Настройка времени напоминаний о событиях","2026-11-04","small"],["0.36","Градиентный колокольчик уведомлений","2026-11-04","small"],["0.35","Уведомления о событиях в личном кабинете","2026-11-04","large"],["0.34","Исправление возврата на главную","2026-11-04","small"],["0.33","Единый стиль карточек главной и личного кабинета","2026-11-04","small"],["0.32","Сохранение тёмного оформления личного кабинета","2026-11-04","small"],["0.31","Стабильный вид главной панели","2026-11-04","small"],["0.30","Обновление оформления личной панели","2026-11-04","small"],["0.29","Главная панель и события вместо жанровых карточек","2026-11-04","large"],["0.28","Возврат в Академию с сохранением поиска и прокрутки","2026-11-04","small"],["0.27","Казахская и белорусская народная музыка","2026-11-04","large"],["0.26","Большая коллекция фольклора и традиционной музыки","2026-11-04","large"],["0.25","Хип-хоп и десять поджанров","2026-11-04","large"],["0.24","Свёрнутые по умолчанию разделы Академии","2026-11-04","small"],["0.23","Религиозная музыка по традициям и конфессиям","2026-11-04","large"],["0.22","Большой раздел религиозной музыки","2026-11-04","large"],["0.21","Шансон и баллады как основные направления","2026-11-04","large"],["0.20","Большой раздел поп-музыки","2026-11-04","large"],["0.19","Переход от каталога к обучающей энциклопедии","2026-11-04","small"],["0.18","Переключение русскоязычной сцены в профилях артистов","2026-11-04","small"],["0.17","Группировка жанров по музыкальным семействам","2026-11-04","large"],["0.16","Адаптивные названия жанров на мобильных устройствах","2026-11-04","small"],["0.15","Прозрачный фирменный логотип в шапке","2026-11-04","small"],["0.14","Корректировка прозрачности логотипа","2026-11-04","small"],["0.13","Установка выбранного логотипа-волны","2026-11-04","small"],["0.12","Первый фирменный логотип в интерфейсе","2026-11-04","small"],["0.11","Профили современных и исторических исполнителей","2026-11-04","large"],["0.10","Разноцветные страницы музыкальных жанров","2026-11-03","small"],["0.9","Общий цветной стиль всех разделов","2026-11-03","large"],["0.8","Генератор структуры песни и сохранённые схемы","2026-11-03","large"],["0.7","Теги Suno, Lyrics и усилители аранжировки","2026-11-03","large"],["0.6","Сохранение и редактирование собственных идей и промптов","2026-11-03","large"],["0.5","Личный кабинет, проекты и резервные копии","2026-11-03","large"],["0.4","Первый сайт мастерской и лаборатория музыкальных идей","2026-11-03","large"]];
 const state={open:false,search:"",tab:"major",minorSize:"all",lastFocused:null};
 const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const fmtDate=x=>/^\d{4}-\d{2}-\d{2}$/.test(x)?x.slice(8,10)+"."+x.slice(5,7)+"."+x.slice(0,4):"";
 const version=()=>typeof SUNOBOOM_APP_VERSION==="string"?SUNOBOOM_APP_VERSION:"";
 const parseMajor=x=>{const m=/^(\d+)\.(\d+)$/.exec(String(x||""));return m?m[1]:null;};
 function getMajorVersions(){
   const grouped=new Map();
   for(const r of RELEASES){
     const major=parseMajor(r[0]);
     if(major===null)continue;
     if(!grouped.has(major))grouped.set(major,[]);
     grouped.get(major).push(r);
   }
   return [...grouped].map(([major,items])=>({major,items}));
 }
 function searchMatches(text,query){
   return String(text).normalize("NFKC").toLocaleLowerCase("ru").includes(query);
 }

 function renderGlobalSearch(query,majors,node,count,legend){
   const matchingMajor=majors.filter(g=>{
     const name="v"+g.major;
     return query===name||query===g.major||searchMatches("мажорная версия "+g.major,query);
   });
   const matchingReleases=RELEASES.filter(r=>
     searchMatches("v"+r[0]+" "+r[0]+" "+r[1]+" "+fmtDate(r[2]),query)
   );
   const large=matchingReleases.filter(r=>r[3]==="large");
   const small=matchingReleases.filter(r=>r[3]==="small");
   const groups=[];
   if(matchingMajor.length){
     groups.push('<section class="sb-vh-search-group"><h3>Мажорные версии <span>'+matchingMajor.length+'</span></h3>'+
       matchingMajor.map(g=>{
         const latest=g.items[0],first=g.items[g.items.length-1];
         return '<article class="sb-vh-release sb-vh-major-release">'+
           '<span class="sb-vh-release-no">v'+esc(g.major)+'</span>'+
           '<div class="sb-vh-release-text"><p>Мажорная версия '+esc(g.major)+'</p>'+
             '<p class="sb-vh-version-range">От v'+esc(first[0])+' до v'+esc(latest[0])+'</p></div>'+
         '</article>';
       }).join("")+'</section>');
   }
   const items=(heading,data,badge)=>
     data.length?'<section class="sb-vh-search-group"><h3>'+heading+' <span>'+data.length+'</span></h3>'+
       '<div class="sb-vh-release-list">'+data.map(r=>
         '<article class="sb-vh-release">'+
           '<span class="sb-vh-release-no">v'+esc(r[0])+'</span>'+
           '<div class="sb-vh-release-text"><p>'+esc(r[1])+'</p>'+
             '<div class="sb-vh-search-meta"><time datetime="'+esc(r[2])+'">'+esc(fmtDate(r[2]))+'</time>'+
               '<span class="sb-vh-search-tag">'+badge+'</span></div>'+
           '</div></article>'
       ).join("")+'</div></section>':"";
   const largeHtml=items("Крупные обновления",large,"Крупное");
   const smallHtml=items("Мелкие обновления",small,"Мелкое");
   if(largeHtml)groups.push(largeHtml);
   if(smallHtml)groups.push(smallHtml);
   if(legend)legend.textContent="Глобальный поиск: результаты из всех вкладок. Очисти поиск, чтобы вернуться к выбранному разделу.";
   if(count)count.textContent="Найдено: "+(matchingMajor.length+matchingReleases.length);
   node.innerHTML=groups.length?'<div class="sb-vh-search-all">'+groups.join("")+'</div>':
     '<p class="sb-vh-empty">По запросу совпадений нет ни в одном разделе истории.</p>';
 }

 function renderList(){
   const node=document.getElementById("sb-vh-content");
   const count=document.getElementById("sb-vh-subcount");
   const legend=document.getElementById("sb-vh-legend");
   const minorTabs=document.getElementById("sb-vh-minor-tabs");
   if(!node)return;
   const query=state.search.trim().normalize("NFKC").toLocaleLowerCase("ru");
   const majors=getMajorVersions();
   document.querySelectorAll("#sb-vh-tabs [data-vh-tab]").forEach(button=>{
     const active=button.dataset.vhTab===state.tab;
     button.classList.toggle("active",active);
     button.setAttribute("aria-selected",String(active));
     button.tabIndex=active?0:-1;
   });
   if(minorTabs)minorTabs.hidden=state.tab!=="minor"||!!query;
   document.querySelectorAll("#sb-vh-minor-tabs [data-vh-size]").forEach(button=>{
     const active=button.dataset.vhSize===state.minorSize;
     button.classList.toggle("active",active);
     button.setAttribute("aria-selected",String(active));
     button.tabIndex=active?0:-1;
   });
   if(query){renderGlobalSearch(query,majors,node,count,legend);return;}
   if(state.tab==="major"){
     if(legend)legend.textContent="Мажорная версия — первое число до точки. Сейчас SUNOBOOM развивается в ветке v0.";
     const filtered=majors.filter(g=>searchMatches("v"+g.major+" "+g.items.map(r=>r.join(" ")).join(" "),query));
     if(count)count.textContent=filtered.length+" из "+majors.length+" мажорных версий";
     node.innerHTML=filtered.length?'<div class="sb-vh-release-list sb-vh-major-list">'+filtered.map(g=>{
       const latest=g.items[0],first=g.items[g.items.length-1];
       return '<article class="sb-vh-release sb-vh-major-release">'+
         '<span class="sb-vh-release-no">v'+esc(g.major)+'</span>'+
         '<div class="sb-vh-release-text"><h3>Мажорная версия '+esc(g.major)+'</h3>'+
           '<p>Ветка v'+esc(g.major)+'.x — '+g.items.length+' сохранённых минорных обновлений.</p>'+
           '<p class="sb-vh-version-range">От v'+esc(first[0])+' ('+esc(fmtDate(first[2]))+') до v'+esc(latest[0])+' ('+esc(fmtDate(latest[2]))+')</p>'+
           '<button type="button" class="sb-vh-view-minors" data-vh-show-minors="'+esc(g.major)+'">Просмотреть минорные версии</button>'+
         '</div></article>';
     }).join("")+'</div>':'<p class="sb-vh-empty">По запросу мажорные версии не найдены.</p>';
   }else{
     if(legend)legend.textContent=state.minorSize==="all"
       ?"Все минорные обновления в одном списке — от новейших к самым ранним."
       :state.minorSize==="large"
         ?"Крупные обновления — новые разделы, инструменты и значимые возможности внутри версии 0.x."
         :"Мелкие обновления — улучшения интерфейса, уточнения, небольшие функции и исправления.";
     const grouped=state.minorSize==="all"?RELEASES:RELEASES.filter(r=>r[3]===state.minorSize);
     const entries=grouped.filter(r=>searchMatches(r[0]+" "+r[1]+" "+fmtDate(r[2]),query));
     if(count)count.textContent=entries.length+" из "+grouped.length+" обновлений";
     node.innerHTML=entries.length?'<div class="sb-vh-release-list">'+entries.map(r=>
       '<article class="sb-vh-release">'+
         '<span class="sb-vh-release-no">v'+esc(r[0])+'</span>'+
         '<div class="sb-vh-release-text"><p>'+esc(r[1])+'</p>'+
           '<div class="sb-vh-search-meta"><time datetime="'+esc(r[2])+'">'+esc(fmtDate(r[2]))+'</time>'+
            (state.minorSize==="all"?'<span class="sb-vh-search-tag">'+(r[3]==="large"?"Крупное":"Мелкое")+'</span>':"")+
           '</div></div>'+
       '</article>'
     ).join("")+'</div>':'<p class="sb-vh-empty">По запросу минорные версии не найдены.</p>';
   }
 }
 function markup(){
   return '<div class="sb-vh-overlay" id="sb-vh-overlay">'+
     '<div class="sb-vh-backdrop" data-vh-close="true"></div>'+
     '<section class="sb-vh-panel" role="dialog" aria-modal="true" aria-labelledby="sb-vh-title" tabindex="-1">'+
       '<header class="sb-vh-header"><div>'+
         '<div class="sb-vh-kicker">SUNOBOOM · РАЗВИТИЕ ПРОЕКТА</div>'+
         '<h2 id="sb-vh-title">История версий</h2>'+
         '<p>Текущая версия <strong>v'+esc(version())+'</strong>. Версии сгруппированы по номеру.</p>'+
       '</div><button type="button" class="sb-vh-close" data-vh-close="true" aria-label="Закрыть историю версий">×</button></header>'+
       '<div id="sb-vh-tabs" class="sb-vh-tabs" role="tablist" aria-label="Части номера версии">'+
         '<button type="button" class="sb-vh-tab" role="tab" data-vh-tab="major" aria-controls="sb-vh-content" aria-selected="true">Мажорная версия</button>'+
         '<button type="button" class="sb-vh-tab" role="tab" data-vh-tab="minor" aria-controls="sb-vh-content" aria-selected="false">Минорные версии</button>'+
       '</div>'+
       '<div id="sb-vh-minor-tabs" class="sb-vh-minor-tabs" role="tablist" aria-label="Масштаб минорных обновлений" hidden>'+
         '<button type="button" class="sb-vh-size-tab" role="tab" data-vh-size="all" aria-controls="sb-vh-content" aria-selected="true">Все обновления</button>'+
         '<button type="button" class="sb-vh-size-tab" role="tab" data-vh-size="large" aria-controls="sb-vh-content" aria-selected="false">Крупные обновления</button>'+
         '<button type="button" class="sb-vh-size-tab" role="tab" data-vh-size="small" aria-controls="sb-vh-content" aria-selected="false">Мелкие обновления</button>'+
       '</div>'+
       '<p class="sb-vh-legend" id="sb-vh-legend"></p>'+
       '<div class="sb-vh-controls">'+
         '<label class="sb-vh-search-label"><span class="sb-vh-visually-hidden">Поиск по истории версий</span>'+
           '<input id="sb-vh-search" type="search" autocomplete="off" placeholder="Поиск по всем версиям и вкладкам…" value="'+esc(state.search)+'"></label>'+
         '<span class="sb-vh-count" id="sb-vh-subcount"></span>'+
       '</div>'+
       '<div class="sb-vh-content" id="sb-vh-content" role="tabpanel" aria-labelledby="sb-vh-tabs"></div>'+
     '</section></div>';
 }
 function open(){
   if(state.open)return;
   state.open=true;state.search="";state.tab="major";state.minorSize="all";state.lastFocused=document.activeElement;
   document.getElementById("sb-vh-overlay")?.remove();
   document.body.insertAdjacentHTML("beforeend",markup());
   document.body.classList.add("sb-vh-open");
   renderList();
   document.querySelector("#sb-vh-overlay .sb-vh-close")?.focus({preventScroll:true});
 }
 function close(){
   if(!state.open)return;
   state.open=false;
   document.getElementById("sb-vh-overlay")?.remove();
   document.body.classList.remove("sb-vh-open");
   if(state.lastFocused?.isConnected&&typeof state.lastFocused.focus==="function")state.lastFocused.focus({preventScroll:true});
 }
 document.addEventListener("click",event=>{
   if(event.target.closest?.(".sb-version-trigger")){event.preventDefault();open();return;}
   if(!state.open)return;
   const tab=event.target.closest?.("#sb-vh-tabs [data-vh-tab]");
   if(tab){
     state.tab=tab.dataset.vhTab;
     renderList();
     document.getElementById("sb-vh-content")?.scrollTo({top:0,behavior:"instant"});
     return;
   }
   const sizeTab=event.target.closest?.("#sb-vh-minor-tabs [data-vh-size]");
   if(sizeTab){
     state.minorSize=sizeTab.dataset.vhSize;
     renderList();
     document.getElementById("sb-vh-content")?.scrollTo({top:0,behavior:"instant"});
     return;
   }
   const goMinor=event.target.closest?.("[data-vh-show-minors]");
   if(goMinor){
     state.search="";state.tab="minor";state.minorSize="all";
     const search=document.getElementById("sb-vh-search");
     if(search)search.value="";
     renderList();
     document.getElementById("sb-vh-content")?.scrollTo({top:0,behavior:"instant"});
     return;
   }
   if(event.target.closest?.("[data-vh-close]"))close();
 });
 document.addEventListener("input",event=>{
   if(!state.open||event.target.id!=="sb-vh-search")return;
   state.search=event.target.value;renderList();
 });
 document.addEventListener("keydown",event=>{
   if(!state.open)return;
   if(event.key==="Escape"){event.preventDefault();close();return;}
   if(event.key!=="Tab")return;
   const root=document.getElementById("sb-vh-overlay");
   const controls=[...root.querySelectorAll('button:not([disabled]),input:not([disabled])')].filter(el=>el.getClientRects().length);
   if(!controls.length)return;
   const first=controls[0],last=controls[controls.length-1];
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
 });
 window.SUNOBOOM_VERSION_HISTORY=Object.freeze({open,close,count:RELEASES.length,
   majorCount:getMajorVersions().length,minorCount:RELEASES.length,
   largeUpdateCount:RELEASES.filter(r=>r[3]==="large").length,
   smallUpdateCount:RELEASES.filter(r=>r[3]==="small").length});
})();

