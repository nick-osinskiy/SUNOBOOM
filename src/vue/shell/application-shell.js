import {installNavigationService} from '../navigation/navigation-service.js';
import {syncLegacyRoute} from '../navigation/route-state.js';
import {navigationSnapshot} from '../navigation/nav-model.js';
import {normalizeTopHeader} from '../navigation/top-header-model.js';
import {navigateFromVueMenu} from '../navigation/navigation-dispatch.js';
import {createApp,h,nextTick,shallowReactive,shallowRef} from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router';
import ApplicationShell from './ApplicationShell.vue';
import PageScreen from './PageScreen.js';
import {captureFields,restoreFields,captureInputs,captureBoundaries,restoreInputValues} from '../pages/ui-handoff.js';
import {rememberNativeBoundaries,restoreNativeBoundaries} from '../pages/native-boundary-handoff.js';
import {createPageModel} from '../pages/page-model.js';
import {createPageFeatures} from '../pages/page-features.js';
import {FILE_INPUT_HANDOFF,captureFileInputs} from '../pages/file-input-handoff.js';
import {routePath,parseRoute,initialPath} from './route-codec.js';

// Healthy pages are composed directly from state and plain input records.
// Native rendering is invoked only by explicit error recovery.
export async function activateApplicationShell({pinia,sharedUi}){
 const root=document.getElementById('app'),adapter=window.SUNOBOOM_SHELL_ADAPTER;
 if(!root||!adapter)return null;
 const initialNodes=[...root.childNodes];
 const router=createRouter({history:createWebHashHistory(location.pathname+location.search),routes:[{path:'/:pathMatch(.*)*',component:PageScreen}],scrollBehavior:(_to,_from,saved)=>saved||{left:0,top:0}});
 function readFrame(){
  const raw=window.SUNOBOOM_LEGACY_NAV.snapshot();
  syncLegacyRoute(raw.active);
  const navigation=navigationSnapshot(raw);sharedUi.publishNavigation(navigation);
  return {...adapter.frame(),navigation,header:normalizeTopHeader(window.SUNOBOOM_LEGACY_HEADER.snapshot()),
   notices:window.SUNOBOOM_WORKSPACE_UI.snapshot('notice-panel')};
 }
 const state=shallowReactive({page:null,frame:readFrame(),revision:0,pageError:false});
 const portals=shallowRef([]),mounted=new WeakMap(),stages=new Map();let serial=0,app,active=false,applying=0,pendingPath=null,scheduled=false,disposed=false,frame=null,restoreRenderer,stopNavigation,rendering=false,nativeFallbacks=0;
 let inputFiles=new Map(),pageContext=routePath(adapter.current());
 const warn=(message,error)=>console.warn('[SUNOBOOM] '+message,error);
 function scopedFallback(stage,run){
  const get=document.getElementById,query=document.querySelector,all=document.querySelectorAll;
  document.getElementById=id=>id==='app'?stage:stage.querySelector('#'+CSS.escape(id))||(/^(toast|sb-ap-|sb-vh)/.test(id)?get.call(document,id):null);
  document.querySelector=selector=>stage.querySelector(selector)||(/^meta|^head|^html|^body|sb-ap-|sb-vh/.test(selector)?query.call(document,selector):null);
  document.querySelectorAll=selector=>{const found=stage.querySelectorAll(selector);return found;};
  try{return run();}finally{document.getElementById=get;document.querySelector=query;document.querySelectorAll=all;}
 }
 function prepare({inputs,page=null,run=null,fields=[],boundaries=new Map()}){
  let model=null;try{
   model=window.SUNOBOOM_VIEW_INPUTS.withInputs(inputs,()=>createPageModel(window.SUNOBOOM_PAGE_STATE.snapshot(),createPageFeatures({sharedUi})));
   rememberNativeBoundaries(model,boundaries);
  }catch(error){warn('Page preparation failed; native page retained.',error);}
  const revision=state.revision+1;
  stages.set(revision,{page,model,run,fields});state.page=model;state.pageError=!model;state.frame=readFrame();state.revision=revision;
  void nextTick().then(()=>{
   if(disposed)return;for(const key of stages.keys())if(key!==state.revision)stages.delete(key);
   window.dispatchEvent(new Event('sunoboom:shell-rendered'));
  });
 }
 function nativePage(source){
  if(source.page)return source.page;
  const stage=document.createElement('div');stage.hidden=true;stage.setAttribute('data-sb-native-fallback','');document.body.append(stage);frame=stage;nativeFallbacks++;
  try{scopedFallback(stage,()=>source.run?.());source.page=stage.querySelector('[data-sb-vue-page]');
   if(source.page){if(source.model)restoreNativeBoundaries(source.page,source.model);restoreFields(source.page,source.fields);}
   return source.page;
  }finally{frame=null;stage.remove();}
 }
 const resources={navigate:id=>navigateFromVueMenu(id,{legacyApi:window.SUNOBOOM_LEGACY_NAV}),canGo:direction=>canGo(direction),restore:direction=>traverse(direction),attach(revision,target){const source=stages.get(revision);if(!source||!target)return;const page=nativePage(source);if(page){if(source.model)restoreNativeBoundaries(page,source.model);target.replaceChildren(...page.childNodes);}},failed(revision,error){if(revision===state.revision)state.pageError=true;warn('Page component failed; native page retained.',error);}};
 function recordCurrent(mode){
  if(applying||!active)return;
  const path=routePath(adapter.current());pendingPath={path,mode:mode||'push'};
  if(scheduled)return;scheduled=true;
  queueMicrotask(()=>{scheduled=false;const pending=pendingPath;pendingPath=null;if(disposed||!pending||pending.path===router.currentRoute.value.fullPath)return;void router[pending.mode==='replace'?'replace':'push'](pending.path).catch(error=>warn('Route unavailable.',error));});
 }
 function renderPage(run){
  if(frame)return run();
  if(rendering)return;
  rendering=true;
  try{
   window.dispatchEvent(new Event('sunoboom:before-page'));
   // Only named live editor boundaries cross a page render. Data models receive
   // plain inputs; native fallback is generated lazily if this render fails.
   const page=root.querySelector('[data-sb-vue-page]'),context=routePath(adapter.current()),same=context===pageContext;pageContext=context;
   inputFiles=same?captureFileInputs(page):new Map();
   prepare({run,fields:same&&page?captureFields(page):[],boundaries:same?captureBoundaries(page):new Map()});
  }finally{rendering=false;}
  recordCurrent();
 }
 function renderHTML(html){if(frame){frame.innerHTML=html;return;}throw Error('Native HTML outside fallback renderer');}
 function removePortal(record,restore=true){
  queueMicrotask(()=>{
   if(mounted.get(record.target)!==record)return;mounted.delete(record.target);portals.value=portals.value.filter(item=>item!==record);
   void nextTick().then(()=>{if(restore&&!mounted.has(record.target)){record.target.innerHTML=record.html;restoreFields(record.target,record.fields);if(!record.hadMarker)record.target.removeAttribute('data-v-app');}});
  });
 }
 function mountFeature(target,component,props={}){
  if(typeof target==='string')target=document.querySelector(target);if(!target||!component)return null;
  const previous=mounted.get(target);
  const record=previous?{...previous,component,props}:{id:++serial,target,component,props,html:target.innerHTML,fields:captureFields(target),hadMarker:target.hasAttribute('data-v-app')};
  record.fail=error=>{warn('Feature failed; native controls retained.',error);removePortal(record);};
  if(!previous){target.replaceChildren();target.setAttribute('data-v-app','');}
  mounted.set(target,record);portals.value=previous?portals.value.map(item=>item===previous?record:item):[...portals.value,record];
  return ()=>removePortal(record);
 }
 function canGo(direction){if(adapter.current().nav==='tracks'&&adapter.current().edit)return false;const path=router.options.history.state[direction==='back'?'back':'forward'];return typeof path==='string'&&path.startsWith('/')&&adapter.canRestore(parseRoute(path));}
 async function traverse(direction){if(!canGo(direction))return false;return new Promise(resolve=>{const stop=router.afterEach((_to,_from,failure)=>{if(failure)return;stop();void nextTick().then(()=>resolve(true));});router.go(direction==='back'?-1:1);});}
 const api={get active(){return active;},renderHTML,afterRender:callback=>frame?callback():nextTick().then(()=>{if(!disposed)callback();}),
  navigate:id=>router.push(routePath({nav:id})),recordCurrent,
  canGo,back:()=>traverse('back'),forward:()=>traverse('forward'),
  snapshot:()=>({active,route:router.currentRoute.value.fullPath,revision:state.revision,nativeFallbacks,shells:root.querySelectorAll('[data-sb-vue-shell]').length}),
  mountFeature,unmountFeature:target=>{const record=mounted.get(target);if(record)removePortal(record);},router};
 router.beforeEach(to=>{const raw=to.fullPath.replace(/^\//,'');if(/^(sb-song=|genre-|view-)/.test(raw)){const path=initialPath('#'+raw,adapter.current());if(path!==to.fullPath){const resolved=router.resolve(path);return {path:resolved.path,query:resolved.query,replace:true};}}return true;});
 router.afterEach(async (to,_from,failure)=>{
  if(failure||!active||disposed)return;
  if(routePath(adapter.current())!==to.fullPath){applying++;try{adapter.apply(parseRoute(to.fullPath));}finally{applying--;}}
  const actual=routePath(adapter.current());if(actual!==to.fullPath)await router.replace(actual);
 });
 try{
  // The native URL adapter has already restored the address. Preserve any
  // navigation or drafts made while the bundle was loading instead of
  // replaying the original address over the user's more recent action.
  await router.replace(routePath(adapter.current()));
  // Capture the latest native fields, including edits made while the bundle loaded.
  stopNavigation=installNavigationService({shell:api,sharedUi,legacyApi:window.SUNOBOOM_LEGACY_NAV});
  const page=root.querySelector('[data-sb-vue-page]'),initialInputs=captureInputs(page);inputFiles=captureFileInputs(page);prepare({page,inputs:initialInputs,fields:captureFields(page),boundaries:captureBoundaries(page)});
  let initialError;
  // A setup wrapper keeps the portal ref reactive without making component definitions reactive.
  app=createApp({setup:()=>()=>{return h(ApplicationShell,{state,portals:portals.value,resources});}});
  app.provide(FILE_INPUT_HANDOFF,attrs=>{const key=attrs.id||attrs.name,node=inputFiles.get(key);inputFiles.delete(key);return node;});
  app.use(pinia);app.use(router);app.config.errorHandler=(error,instance,info)=>{initialError??=error;warn('Shell error ('+(instance?.$options?.name||info)+').',error);};app.mount(root);await nextTick();if(initialError)throw initialError;restoreInputValues(root,initialInputs);
  active=true;window.SUNOBOOM_SHELL=api;state.frame=readFrame();restoreRenderer=adapter.installRenderer(renderPage);
  if(routePath(adapter.current())!==router.currentRoute.value.fullPath){applying++;try{adapter.apply(parseRoute(router.currentRoute.value.fullPath));}finally{applying--;}}
  await nextTick();const actual=routePath(adapter.current());if(actual!==router.currentRoute.value.fullPath)await router.replace(actual);
  return api;
 }catch(error){disposed=true;active=false;stopNavigation?.();restoreRenderer?.();try{app?.unmount();}finally{root.replaceChildren(...initialNodes);}warn('Shell unavailable; native interface retained.',error);return null;}
}
