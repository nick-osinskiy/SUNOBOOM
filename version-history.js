/* SUNOBOOM v0.83 · Major and minor release tabs, no technical commit history. */
(function installVersionHistory(){
 "use strict";
 const RELEASES=[["0.83","Разделение истории обновлений на мажорные и минорные версии","2026-11-07","minor"],["0.82","История обновлений показывает только версии и основные изменения","2026-11-07","minor"],["0.81","История обновлений по нажатию на номер версии","2026-11-07","minor"],["0.80","Единый номер версии рядом с логотипом на компьютере и телефоне","2026-11-07","minor"],["0.79","Выбор жанров и поджанров Академии в карточке песни","2026-11-07","minor"],["0.78","Личный список артистов с поиском и связью с ДНК артиста","2026-11-07","major"],["0.77","Автоматическая обложка из MP3, M4A и FLAC","2026-11-07","minor"],["0.76","Мои песни: аудиофайлы, обложки, карточки и ссылки","2026-11-07","major"],["0.75","Видимая панель переходов в аранжировщике","2026-11-07","minor"],["0.74","Редактор переходов между блоками песни","2026-11-07","major"],["0.73","Перетаскивание блоков в змейке аранжировки","2026-11-07","major"],["0.72","Компактная интерактивная змейка структуры песни","2026-11-07","minor"],["0.71","Умные рекомендации для каждого блока аранжировки","2026-11-07","major"],["0.70","Постоянные подсказки инструментов и приёмов по жанрам","2026-11-06","minor"],["0.69","Выбор инструментов из коллекций Академии","2026-11-06","minor"],["0.68","Собственные блоки песен и вставка между секциями","2026-11-06","major"],["0.67","Поиск жанров Академии в аранжировщике","2026-11-06","minor"],["0.66","Визуальный аранжировщик в Suno Studio","2026-11-06","major"],["0.65","A/B-сравнение двух аудиозаписей в плеере","2026-11-06","major"],["0.64","Настройки личного кабинета и интерфейса","2026-11-06","major"],["0.63","Подсказки громкости плеера для телефонов","2026-11-06","minor"],["0.62","Градиентные кнопки управления треками","2026-11-06","minor"],["0.61","Тестовый аудиоплеер и мобильное воспроизведение","2026-11-06","major"],["0.59","Поиск и подробные профили исполнителей Академии","2026-11-06","major"],["0.58","Все коллекции жанров в музыкальном древе","2026-11-06","major"],["0.57","Поиск, масштабирование и навигация по древу жанров","2026-11-06","minor"],["0.56","Интерактивное древо происхождения жанров и раздел ска","2026-11-06","major"],["0.55","Расширение русскоязычных артистов и жанров ска","2026-11-05","major"],["0.54","Расширенные международные и русскоязычные подборки артистов","2026-11-05","major"],["0.53","Русскоязычные артисты эпической музыки","2026-11-05","minor"],["0.52","Большой раздел эпической музыки и поджанры","2026-11-05","major"],["0.51","Генератор тегов вокального исполнения в редакторе поэзии","2026-11-05","major"],["0.50","Жанровый миксер в основном сайте","2026-11-05","major"],["0.49","Подсветка неоднозначных ударений и выбор варианта","2026-11-05","minor"],["0.48","Большой словарь русских ударений","2026-11-05","major"],["0.47","Автоматическая расстановка ударений","2026-11-05","major"],["0.46","ДНК артиста: вокал, звучание и связь с треками","2026-11-05","major"],["0.45","Паспорт трека и планирование релизов","2026-11-05","major"],["0.44","Быстрый переход в редактор песенной поэзии","2026-11-05","minor"],["0.43","Редактор поэзии с рифмами, слогами и структурой","2026-11-05","major"],["0.42","Улучшение мобильного личного кабинета","2026-11-04","minor"],["0.41","Вертикальное меню ЖАНР-НАВ","2026-11-04","major"],["0.40","Двенадцать крупных музыкальных семейств и поджанры","2026-11-04","major"],["0.39","Большой раздел R&B и соула","2026-11-04","major"],["0.38","Пробный числовой индикатор уведомлений","2026-11-04","minor"],["0.37","Настройка времени напоминаний о событиях","2026-11-04","minor"],["0.36","Градиентный колокольчик уведомлений","2026-11-04","minor"],["0.35","Уведомления о событиях в личном кабинете","2026-11-04","major"],["0.34","Исправление возврата на главную","2026-11-04","minor"],["0.33","Единый стиль карточек главной и личного кабинета","2026-11-04","minor"],["0.32","Сохранение тёмного оформления личного кабинета","2026-11-04","minor"],["0.31","Стабильный вид главной панели","2026-11-04","minor"],["0.30","Обновление оформления личной панели","2026-11-04","minor"],["0.29","Главная панель и события вместо жанровых карточек","2026-11-04","major"],["0.28","Возврат в Академию с сохранением поиска и прокрутки","2026-11-04","minor"],["0.27","Казахская и белорусская народная музыка","2026-11-04","major"],["0.26","Большая коллекция фольклора и традиционной музыки","2026-11-04","major"],["0.25","Хип-хоп и десять поджанров","2026-11-04","major"],["0.24","Свёрнутые по умолчанию разделы Академии","2026-11-04","minor"],["0.23","Религиозная музыка по традициям и конфессиям","2026-11-04","major"],["0.22","Большой раздел религиозной музыки","2026-11-04","major"],["0.21","Шансон и баллады как основные направления","2026-11-04","major"],["0.20","Большой раздел поп-музыки","2026-11-04","major"],["0.19","Переход от каталога к обучающей энциклопедии","2026-11-04","minor"],["0.18","Переключение русскоязычной сцены в профилях артистов","2026-11-04","minor"],["0.17","Группировка жанров по музыкальным семействам","2026-11-04","major"],["0.16","Адаптивные названия жанров на мобильных устройствах","2026-11-04","minor"],["0.15","Прозрачный фирменный логотип в шапке","2026-11-04","minor"],["0.14","Корректировка прозрачности логотипа","2026-11-04","minor"],["0.13","Установка выбранного логотипа-волны","2026-11-04","minor"],["0.12","Первый фирменный логотип в интерфейсе","2026-11-04","minor"],["0.11","Профили современных и исторических исполнителей","2026-11-04","major"],["0.10","Разноцветные страницы музыкальных жанров","2026-11-03","minor"],["0.9","Общий цветной стиль всех разделов","2026-11-03","major"],["0.8","Генератор структуры песни и сохранённые схемы","2026-11-03","major"],["0.7","Теги Suno, Lyrics и усилители аранжировки","2026-11-03","major"],["0.6","Сохранение и редактирование собственных идей и промптов","2026-11-03","major"],["0.5","Личный кабинет, проекты и резервные копии","2026-11-03","major"],["0.4","Первый сайт мастерской и лаборатория музыкальных идей","2026-11-03","major"]];
 const state={open:false,search:"",tab:"major",lastFocused:null};
 const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const fmtDate=x=>/^\d{4}-\d{2}-\d{2}$/.test(x)?x.slice(8,10)+"."+x.slice(5,7)+"."+x.slice(0,4):"";
 const version=()=>typeof SUNOBOOM_APP_VERSION==="string"?SUNOBOOM_APP_VERSION:"";
 function renderList(){
   const node=document.getElementById("sb-vh-content");
   const count=document.getElementById("sb-vh-subcount");
   if(!node)return;
   const query=state.search.trim().normalize("NFKC").toLocaleLowerCase("ru");
   const inTab=RELEASES.filter(x=>x[3]===state.tab);
   const entries=inTab.filter(x=>(x[0]+" "+x[1]+" "+fmtDate(x[2])).normalize("NFKC").toLocaleLowerCase("ru").includes(query));
   if(count)count.textContent=entries.length+" из "+inTab.length+" версий";
   document.querySelectorAll("#sb-vh-tabs [data-vh-tab]").forEach(button=>{
     const active=button.dataset.vhTab===state.tab;
     button.classList.toggle("active",active);
     button.setAttribute("aria-selected",String(active));
     button.tabIndex=active?0:-1;
   });
   node.innerHTML=entries.length?'<div class="sb-vh-release-list">'+entries.map(r=>
     '<article class="sb-vh-release">'+
       '<span class="sb-vh-release-no">v'+esc(r[0])+'</span>'+
       '<div class="sb-vh-release-text"><p>'+esc(r[1])+'</p><time datetime="'+esc(r[2])+'">'+esc(fmtDate(r[2]))+'</time></div>'+
     '</article>'
   ).join("")+'</div>':'<p class="sb-vh-empty">По запросу версии не найдены.</p>';
 }
 function markup(){
   return '<div class="sb-vh-overlay" id="sb-vh-overlay">'+
     '<div class="sb-vh-backdrop" data-vh-close="true"></div>'+
     '<section class="sb-vh-panel" role="dialog" aria-modal="true" aria-labelledby="sb-vh-title" tabindex="-1">'+
       '<header class="sb-vh-header"><div>'+
         '<div class="sb-vh-kicker">SUNOBOOM · РАЗВИТИЕ ПРОЕКТА</div>'+
         '<h2 id="sb-vh-title">История версий</h2>'+
         '<p>Текущая версия <strong>v'+esc(version())+'</strong>. Все основные обновления по порядку.</p>'+
       '</div><button type="button" class="sb-vh-close" data-vh-close="true" aria-label="Закрыть историю версий">×</button></header>'+
       '<div id="sb-vh-tabs" class="sb-vh-tabs" role="tablist" aria-label="Типы обновлений">'+
         '<button type="button" class="sb-vh-tab" role="tab" data-vh-tab="major" aria-controls="sb-vh-content" aria-selected="true">Мажорные версии</button>'+
         '<button type="button" class="sb-vh-tab" role="tab" data-vh-tab="minor" aria-controls="sb-vh-content" aria-selected="false">Минорные версии</button>'+
       '</div>'+
       '<p class="sb-vh-legend" id="sb-vh-legend">Мажорные — большие новые возможности и разделы. Минорные — улучшения, небольшие функции и исправления.</p>'+
       '<div class="sb-vh-controls">'+
         '<label class="sb-vh-search-label"><span class="sb-vh-visually-hidden">Поиск по истории версий</span>'+
           '<input id="sb-vh-search" type="search" autocomplete="off" placeholder="Найти версию или функцию…" value="'+esc(state.search)+'"></label>'+
         '<span class="sb-vh-count" id="sb-vh-subcount"></span>'+
       '</div>'+
       '<div class="sb-vh-content" id="sb-vh-content" role="tabpanel" aria-labelledby="sb-vh-tabs"></div>'+
     '</section></div>';
 }
 function open(){
   if(state.open)return;
   state.open=true;
   state.search="";
   state.tab="major";
   state.lastFocused=document.activeElement;
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
   if(event.target.closest?.("[data-vh-close]"))close();
 });
 document.addEventListener("input",event=>{
   if(!state.open||event.target.id!=="sb-vh-search")return;
   state.search=event.target.value;
   renderList();
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
 window.SUNOBOOM_VERSION_HISTORY=Object.freeze({
   open,close,count:RELEASES.length,
   majorCount:RELEASES.filter(r=>r[3]==="major").length,
   minorCount:RELEASES.filter(r=>r[3]==="minor").length
 });
})();
