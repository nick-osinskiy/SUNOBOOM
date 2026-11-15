/* Shared preference state, validation and transactional writes. */
(function(root){'use strict';
function create({json}){
 const DEFAULTS=Object.freeze({compact:false,largeText:false,reduceMotion:false,startPage:"home",theme:"dark"});
 const THEMES=new Map([
  ["dark","Тёмная"],["light","Светлая"],["system","Как на устройстве"],
  ["ocean","Океан · сине-бирюзовая"],["forest","Лес · изумрудная"],
  ["sunset","Закат · коралловая"],["amethyst","Аметист · фиолетовая"],
  ["pink","Розовая · ягодная"],["pink-pastel","Розовая · нежная"]
 ]);
 const VALID_PAGES=new Map([
  ["home","Главная"],
  ["catalog","Академия"],
  ["ideas","Идеи песен"],
  ["studio","Suno Studio"],
  ["player","Плеер"],
  ["account","Личный кабинет"]
 ]);

const playerDefaults=Object.freeze({volume:.85,rate:1,repeat:'off',shuffle:false});
const appearance={...DEFAULTS},player={...playerDefaults};
const artistFavorites=new Set();try{const saved=json.read('sunoboom-artist-profile-favorites-v1',[]);if(Array.isArray(saved))for(const key of saved)if(typeof key==='string')artistFavorites.add(key);}catch{}
try{const saved=json.read('sunoboom-ui-settings-v1',{});if(saved&&typeof saved==='object'&&!Array.isArray(saved)){for(const k of ['compact','largeText','reduceMotion'])if(typeof saved[k]==='boolean')appearance[k]=saved[k];if(VALID_PAGES.has(saved.startPage))appearance.startPage=saved.startPage;if(THEMES.has(saved.theme))appearance.theme=saved.theme;}}catch{}
try{const saved=json.read('sunoboom-player-lab-v060-prefs',{});if(Number.isFinite(saved.volume))player.volume=Math.min(1,Math.max(0,saved.volume));if([.75,1,1.25,1.5,2].includes(saved.rate))player.rate=saved.rate;if(['off','all','one'].includes(saved.repeat))player.repeat=saved.repeat;player.shuffle=saved.shuffle===true;}catch{}
function execute(name,p={}){
if(name==='artist.favorite.toggle'){
 if(typeof p.key!=='string'||!p.key)return {ok:false,error:'Артист не указан.'};
 const next=new Set(artistFavorites);if(next.has(p.key))next.delete(p.key);else next.add(p.key);
 try{json.write('sunoboom-artist-profile-favorites-v1',[...next]);artistFavorites.clear();for(const key of next)artistFavorites.add(key);return {ok:true,value:[...next]};}
 catch(cause){return {ok:false,code:'storage',error:'Не удалось сохранить избранного артиста.',cause};}
}
const target=name.startsWith('player.')?player:appearance,next={...target};
if(name==='appearance.reset')Object.assign(next,DEFAULTS);
else if(name==='appearance.set'){
 if(['compact','largeText','reduceMotion'].includes(p.key)&&typeof p.value==='boolean')next[p.key]=p.value;
 else if(p.key==='theme'&&THEMES.has(p.value)||p.key==='startPage'&&VALID_PAGES.has(p.value))next[p.key]=p.value;
 else return {ok:false,error:'Некорректная настройка интерфейса.'};
}else if(name==='player.set'){
 if(p.key==='volume'&&Number.isFinite(p.value))next.volume=Math.min(1,Math.max(0,p.value));
 else if(p.key==='rate'&&[.75,1,1.25,1.5,2].includes(p.value))next.rate=p.value;
 else if(p.key==='repeat'&&['off','all','one'].includes(p.value))next.repeat=p.value;
 else if(p.key==='shuffle'&&typeof p.value==='boolean')next.shuffle=p.value;
 else return {ok:false,error:'Некорректная настройка плеера.'};
}else return {ok:false,error:'Неизвестная команда настроек.'};
try{json.write(target===player?'sunoboom-player-lab-v060-prefs':'sunoboom-ui-settings-v1',next);Object.assign(target,next);return {ok:true,value:{...target}};}
catch(cause){return {ok:false,code:'storage',error:'Не удалось сохранить настройку в этом браузере.',cause};}
}
return Object.freeze({appearance,player,artistFavorites,execute,DEFAULTS,THEMES,VALID_PAGES,resolveTheme:isLight=>appearance.theme==='system'?(isLight?'light':'dark'):appearance.theme});
}
root.SUNOBOOM_PREFERENCES_FACTORY=Object.freeze({create});
})(globalThis);
