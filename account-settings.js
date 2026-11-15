/* SUNOBOOM • Account Settings v0.123 — persistent dark/light/system themes. */
(function installAccountSettings(){
 "use strict";
 if(typeof account!=="function"||typeof render!=="function"||typeof go!=="function"||typeof chrome!=="function")return;
 const preferences=SUNOBOOM_CORE.createPreferences();
 const {DEFAULTS,THEMES,VALID_PAGES}=preferences;
 const esc=x=>escapeHTML(String(x??""));
 const settings=preferences.appearance;
 const state={open:false,resetPending:false,message:""};
 function apply(){
  const html=document.documentElement;
  if(!html)return;
  html.classList.toggle("sb-ui-compact",settings.compact);
  html.classList.toggle("sb-ui-larger",settings.largeText);
  html.classList.toggle("sb-ui-reduce-motion",settings.reduceMotion);
  const prefersLight=!!window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  const resolved=preferences.resolveTheme(prefersLight);
  html.dataset.sbTheme=resolved;
  html.classList.toggle("sb-theme-light",resolved==="light"||resolved==="pink-pastel");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content",({
    light:"#f6f7fc",dark:"#0c0e1a",ocean:"#071c2d",forest:"#0d211b",
    sunset:"#2c1723",amethyst:"#1e1737",pink:"#2a1026","pink-pastel":"#fff2f8"
   })[resolved]);
  // One-way UI notification; Pinia observes the already-applied legacy choice.
  // No extra persistence, no duplicate media-query listener and no user records.
  window.dispatchEvent(new Event("sunoboom:appearance-change"));
 }
 function notify(message){
  state.message=String(message);
  const node=document.getElementById("sbs-message");
  if(node){node.hidden=false;node.textContent=message;}
  else if(typeof toast==="function")toast(message);
 }
 const originalAccount=account;
 account=function(){return state.open?settingsPage():originalAccount.apply(this,arguments);};
 function toggleItem(id,title,desc,checked){
  return '<label class="sbs-option" for="sbs-'+id+'"><span class="sbs-option-text"><strong>'+title+'</strong><small>'+desc+'</small></span>'+
   '<span class="sbs-switch"><input id="sbs-'+id+'" type="checkbox" data-sbs-setting="'+id+'" role="switch" '+(checked?'checked ':'')+'aria-label="'+title+'"><span class="sbs-switch-track" aria-hidden="true"></span></span></label>';
 }
 function settingsPage(){
  const name=String(data.profileName||"Музыкант");
  return '<div id="sb-vue-account-settings"><section class="sbs-page" id="sbs-page">'+
   '<header class="sbs-heading"><button type="button" class="sbs-back" data-sbs-action="close">'+I("back")+' Вернуться в кабинет</button>'+
   '<div class="sbs-eyebrow">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><div class="sbs-heading-row"><div><h1>Настройки</h1><p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p></div><span class="sbs-badge">⚙️ ПЕРСОНАЛИЗАЦИЯ</span></div></header>'+
   '<div class="sbs-layout"><div class="sbs-main-column">'+
    '<section class="sbs-panel"><div class="sbs-panel-head"><span class="sbs-symbol" aria-hidden="true">🎨</span><div><h2>Внешний вид</h2><p>Удобная работа на компьютере и телефоне</p></div></div>'+
      '<label class="sbs-field sbs-theme-field" for="sbs-theme"><span>Тема приложения</span><select id="sbs-theme" data-sbs-setting="theme" aria-label="Тема приложения">'+
      [...THEMES].map(([id,title])=>'<option value="'+id+'"'+(settings.theme===id?' selected':'')+'>'+esc(title)+'</option>').join('')+
      '</select></label><p class="sbs-help sbs-theme-help">Выбери палитру: тёмную, светлую, системную или одну из шести цветных тем. Изменения сохраняются.</p>'+
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
  '</section></div>';
 }
 // Read-only handoff: all preference mutations still pass through the original handlers.
 window.SUNOBOOM_LEGACY_SETTINGS={
  isOpen:()=>state.open,open:display,
  snapshot(){return {settings:{...settings},resolvedTheme:document.documentElement.dataset.sbTheme||"dark",themes:[...THEMES].map(([id,title])=>({id,title})),pages:[...VALID_PAGES].map(([id,title])=>({id,title})),name:String(data.profileName||'Музыкант'),resetPending:state.resetPending,message:state.message};}
 };
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
  state.open=true;state.resetPending=false;state.message="";render();
  window.scrollTo({top:0,behavior:"instant"});
 }
 function backup(){
  close();
  requestAnimationFrame(()=>document.querySelector(".account-settings")?.scrollIntoView({block:"start",behavior:"smooth"}));
 }
 function reset(){
  const result=preferences.execute('appearance.reset');if(!result.ok){notify(result.error);return;}apply();
  state.resetPending=false;
  notify("Восстановлены стандартные настройки интерфейса. Проекты и песни сохранены.");
  render();
 }
 document.addEventListener("click",event=>{
  const target=event.target.closest?.("[data-sbs-action]");
  if(!target)return;
  const action=target.dataset.sbsAction;
  if(action==="open-top"){
   // Open the SAME settings page regardless of the current route.
   // go() also closes existing overlays and resets temporary settings state.
   go("account");
   display();
   return;
  }
  if(action==="open"){display();return}
  if(action==="close"){close();return}
  if(action==="backup"){backup();return}
  if(action==="save-name"){
   const newName=document.getElementById("sbs-name")?.value.trim();
   if(!newName){notify("Укажи имя для отображения.");return}
   const result=application.execute('profile.save',{name:newName});if(!result.ok){notify(result.error);return;}
   notify("Имя профиля сохранено.");
   render();
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
  const value=['theme','startPage'].includes(setting)?el.value:!!el.checked;
  const result=preferences.execute('appearance.set',{key:setting,value});
  if(!result.ok){if(el.type==='checkbox')el.checked=settings[setting];else el.value=settings[setting];notify(result.error);return;}
  apply();notify('Настройка сохранена.');
 });
 apply();
 // System mode responds to OS appearance changes without rewriting the saved choice.
 const systemTheme=window.matchMedia?.("(prefers-color-scheme: light)");
 if(systemTheme?.addEventListener)systemTheme.addEventListener("change",()=>{if(settings.theme==="system")apply();});
 else if(systemTheme?.addListener)systemTheme.addListener(()=>{if(settings.theme==="system")apply();});
 // Avoid overriding an explicit deep link or another module's navigation.
 if(view.nav==="home"&&settings.startPage!=="home"&&(!location.hash||location.hash==="#view-home")){
  const target=settings.startPage;
  if(VALID_PAGES.has(target)&&(target!=="player"||navs.some(n=>n[0]==="player")))view.nav=target;
 }
 render();
})();
