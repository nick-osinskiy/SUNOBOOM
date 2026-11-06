/* SUNOBOOM • Account Settings v0.64 — additive module, local-only preferences. */
(function installAccountSettings(){
 "use strict";
 if(typeof account!=="function"||typeof render!=="function"||typeof go!=="function"||typeof chrome!=="function")return;
 const KEY="sunoboom-ui-settings-v1";
 const DEFAULTS=Object.freeze({compact:false,largeText:false,reduceMotion:false,startPage:"home"});
 const VALID_PAGES=new Map([
  ["home","Главная"],
  ["catalog","Академия"],
  ["ideas","Идеи песен"],
  ["studio","Suno Studio"],
  ["player","Плеер"],
  ["account","Личный кабинет"]
 ]);
 const esc=x=>escapeHTML(String(x??""));
 const settings={...DEFAULTS};
 const state={open:false,resetPending:false};
 const validBool=x=>typeof x==="boolean";
 function load(){
  try{
   const saved=JSON.parse(localStorage.getItem(KEY)||"{}");
   if(!saved||typeof saved!=="object"||Array.isArray(saved))return;
   for(const k of ["compact","largeText","reduceMotion"])if(validBool(saved[k]))settings[k]=saved[k];
   if(VALID_PAGES.has(saved.startPage))settings.startPage=saved.startPage;
  }catch(e){}
 }
 function apply(){
  const html=document.documentElement;
  if(!html)return;
  html.classList.toggle("sb-ui-compact",settings.compact);
  html.classList.toggle("sb-ui-larger",settings.largeText);
  html.classList.toggle("sb-ui-reduce-motion",settings.reduceMotion);
 }
 function persistSettings(){
  try{localStorage.setItem(KEY,JSON.stringify(settings));return true}
  catch(e){return false}
 }
 function notify(message){
  const node=document.getElementById("sbs-message");
  if(node){node.hidden=false;node.textContent=message;}
  else if(typeof toast==="function")toast(message);
 }
 const tile='<button type="button" class="account-tile sbs-tile" data-sbs-action="open" aria-label="Открыть настройки SUNOBOOM">'+
  '<span class="sbs-tile-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 2h3l.5 2.2 1.6.7 2-1.1 2.1 2.1-1 2 .7 1.7 2.1.4v3l-2.1.5-.7 1.6 1 2-2.1 2.1-2-1-.1.1-1.5.6-.5 2.1h-3l-.5-2.1-1.6-.7-2 1-2.1-2.1 1.1-2-.7-1.6-2.2-.5v-3l2.2-.4.7-1.7-1.1-2 2.1-2.1 2 1.1 1.6-.7z"/><circle cx="12" cy="11.5" r="3"/></svg></span>'+
  '<strong>Настройки</strong><span>Внешний вид, удобство и стартовая страница</span><span class="account-tile-arrow" aria-hidden="true">↗</span></button>';
 const originalAccount=account;
 account=function(){
  if(state.open)return settingsPage();
  const html=originalAccount.apply(this,arguments);
  const needle='</div>\n<div class="two-col account-settings">';
  if(!html.includes(needle))return html;
  return html.replace(needle,tile+'</div>\n<div class="two-col account-settings">');
 };
 function toggleItem(id,title,desc,checked){
  return '<label class="sbs-option" for="sbs-'+id+'"><span class="sbs-option-text"><strong>'+title+'</strong><small>'+desc+'</small></span>'+
   '<span class="sbs-switch"><input id="sbs-'+id+'" type="checkbox" data-sbs-setting="'+id+'" role="switch" '+(checked?'checked ':'')+'aria-label="'+title+'"><span class="sbs-switch-track" aria-hidden="true"></span></span></label>';
 }
 function settingsPage(){
  const name=String(data.profileName||"Музыкант");
  return '<section class="sbs-page" id="sbs-page">'+
   '<header class="sbs-heading"><button type="button" class="sbs-back" data-sbs-action="close">'+I("back")+' Вернуться в кабинет</button>'+
   '<div class="sbs-eyebrow">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class="sbs-heading-row"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class="sbs-badge">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>'+
   '<div class="sbs-layout"><div class="sbs-main-column">'+
    '<section class="sbs-panel"><div class="sbs-panel-head"><span class="sbs-symbol" aria-hidden="true">🎨</span><div><h2>Внешний вид</h2><p>Удобная работа на компьютере и телефоне</p></div></div>'+
      toggleItem("compact","Компактный интерфейс","Уменьшает отступы и высоту карточек. Больше материалов помещается на экране.",settings.compact)+
      toggleItem("largeText","Увеличенный текст","Делает основной пояснительный текст в каталогах, карточках и инструментах крупнее.",settings.largeText)+
      toggleItem("reduceMotion","Меньше анимации","Отключает декоративные движения и плавные переходы, не влияя на воспроизведение музыки.",settings.reduceMotion)+
    '</section>'+
    '<section class="sbs-panel"><div class="sbs-panel-head"><span class="sbs-symbol" aria-hidden="true">🏠</span><div><h2>При открытии сайта</h2><p>Выбери стартовый раздел SUNOBOOM</p></div></div>'+
      '<label class="sbs-field" for="sbs-start"><span>Стартовая страница</span><select id="sbs-start" data-sbs-setting="startPage">'+
      [...VALID_PAGES].map(([id,title])=>'<option value="'+id+'"'+(settings.startPage===id?' selected':'')+'>'+esc(title)+'</option>').join('')+
      '</select></label><p class="sbs-help">Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.</p>'+
    '</section>'+
    '<section class="sbs-panel"><div class="sbs-panel-head"><span class="sbs-symbol" aria-hidden="true">👤</span><div><h2>Профиль</h2><p>Имя отображается только в локальном кабинете</p></div></div>'+
      '<label class="sbs-field" for="sbs-name"><span>Имя в кабинете</span><input id="sbs-name" type="text" maxlength="60" autocomplete="off" value="'+esc(name)+'" placeholder="Твоё имя"></label>'+
      '<button type="button" class="sbs-primary" data-sbs-action="save-name">Сохранить имя</button>'+
    '</section>'+
   '</div><aside class="sbs-side-column">'+
    '<section class="sbs-panel"><div class="sbs-panel-head"><span class="sbs-symbol" aria-hidden="true">🔒</span><div><h2>Данные и приватность</h2></div></div>'+
      '<p class="sbs-info">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p>'+
      '<p class="sbs-info">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p>'+
      '<button type="button" class="sbs-secondary" data-sbs-action="backup">'+I("download")+' Перейти к резервным копиям</button>'+
    '</section>'+
    '<section class="sbs-panel sbs-reset-panel"><div class="sbs-panel-head"><span class="sbs-symbol" aria-hidden="true">↺</span><div><h2>Сброс предпочтений</h2></div></div>'+
      '<p class="sbs-info">Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.</p>'+
      (state.resetPending?
       '<div class="sbs-confirm"><strong>Сбросить настройки интерфейса?</strong><div><button type="button" class="sbs-secondary" data-sbs-action="cancel-reset">Отмена</button><button type="button" class="sbs-confirm-button" data-sbs-action="confirm-reset">Да, сбросить</button></div></div>':
       '<button type="button" class="sbs-secondary" data-sbs-action="reset">Сбросить настройки</button>')+
    '</section>'+
   '</aside></div><p id="sbs-message" class="sbs-message" role="status" aria-live="polite" hidden></p>'+
  '</section>';
 }
 const originalGo=go;
 go=function(target){
  state.open=false;
  state.resetPending=false;
  return originalGo.apply(this,arguments);
 };
 function close(){
  state.open=false;state.resetPending=false;render();
 }
 function display(){
  state.open=true;state.resetPending=false;render();
  window.scrollTo({top:0,behavior:"instant"});
 }
 function backup(){
  close();
  requestAnimationFrame(()=>document.querySelector(".account-settings")?.scrollIntoView({block:"start",behavior:"smooth"}));
 }
 function reset(){
  Object.assign(settings,DEFAULTS);
  persistSettings();apply();
  state.resetPending=false;render();
  notify("Восстановлены стандартные настройки интерфейса. Проекты и песни сохранены.");
 }
 document.addEventListener("click",event=>{
  const target=event.target.closest?.("[data-sbs-action]");
  if(!target)return;
  const action=target.dataset.sbsAction;
  if(action==="open"){display();return}
  if(action==="close"){close();return}
  if(action==="backup"){backup();return}
  if(action==="save-name"){
   const newName=document.getElementById("sbs-name")?.value.trim();
   if(!newName){notify("Укажи имя для отображения.");return}
   data.profileName=newName.slice(0,60);
   persist();
   render();
   notify("Имя профиля сохранено.");
   return;
  }
  if(action==="reset"){state.resetPending=true;render();document.querySelector('.sbs-confirm-button')?.focus();return;}
  if(action==="cancel-reset"){state.resetPending=false;render();return;}
  if(action==="confirm-reset"){reset();return}
 });
 document.addEventListener("change",event=>{
  const el=event.target;
  if(!el?.dataset?.sbsSetting)return;
  const setting=el.dataset.sbsSetting;
  if(!Object.prototype.hasOwnProperty.call(DEFAULTS,setting))return;
  if(setting==="startPage"){
    if(!VALID_PAGES.has(el.value))return;
    settings.startPage=el.value;
  }else settings[setting]=!!el.checked;
  apply();
  const okay=persistSettings();
  notify(okay?"Настройка сохранена.": "Не удалось сохранить настройку в этом браузере.");
 });
 load();apply();
 // Avoid overriding an explicit deep link or another module's navigation.
 if(view.nav==="home"&&settings.startPage!=="home"&&(!location.hash||location.hash==="#view-home")){
  const target=settings.startPage;
  if(VALID_PAGES.has(target)&&(target!=="player"||navs.some(n=>n[0]==="player")))view.nav=target;
 }
 render();
})();
