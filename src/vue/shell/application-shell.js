import {traverseLegacyMemoryHistory} from '../navigation/legacy-router-mirror.js';
import {createApp,h,nextTick,shallowReactive,shallowRef} from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router';
import ApplicationShell from './ApplicationShell.vue';
import PageScreen from './PageScreen.js';
import {composePage,captureFields,restoreFields,restoreNativeBoundaries} from '../pages/page-composition.js';
import {routePath,parseRoute,initialPath} from './route-codec.js';

// Native rendering is a temporary page-preparation adapter. The persistent
// application, component tree and browser URL belong to Vue and Vue Router.
export async function activateApplicationShell({pinia,sharedUi,activations}){
 const root=document.getElementById('app'),adapter=window.SUNOBOOM_SHELL_ADAPTER;
 if(!root||!adapter)return null;
 const initialNodes=[...root.childNodes];
 const router=createRouter({history:createWebHashHistory(location.pathname+location.search),routes:[{path:'/:pathMatch(.*)*',component:PageScreen}],scrollBehavior:(_to,_from,saved)=>saved||{left:0,top:0}});
 const state=shallowReactive({page:null,frame:adapter.frame(),revision:0,pageError:false});
 const portals=shallowRef([]),mounted=new WeakMap(),stages=new Map();let serial=0,app,active=false,applying=0,pendingPath=null,scheduled=false,disposed=false,frame=null,restoreRenderer;
 const warn=(message,error)=>console.warn('[SUNOBOOM] '+message,error);
 function scopedStage(stage,run){
  const get=document.getElementById,query=document.querySelector,all=document.querySelectorAll;
  document.getElementById=id=>id==='app'?stage:stage.querySelector('#'+CSS.escape(id))||(/^(toast|sb-ap-|sb-vh)/.test(id)?get.call(document,id):null);
  document.querySelector=selector=>stage.querySelector(selector)||(/^meta|^head|^html|^body|sb-ap-|sb-vh/.test(selector)?query.call(document,selector):null);
  document.querySelectorAll=selector=>{const found=stage.querySelectorAll(selector);return found;};
  try{return run();}finally{document.getElementById=get;document.querySelector=query;document.querySelectorAll=all;}
 }
 function prepare(stage,page){
  let model=null;try{model=scopedStage(stage,()=>composePage(page,activations,sharedUi));}catch(error){warn('Page preparation failed; native page retained.',error);}
  const revision=state.revision+1;stages.set(revision,{page,model});state.page=model;state.pageError=!model;state.frame=adapter.frame();state.revision=revision;
  void nextTick().then(()=>{
   if(disposed)return;for(const key of stages.keys())if(key!==state.revision)stages.delete(key);
   window.dispatchEvent(new Event('sunoboom:shell-rendered'));
  });
 }
 const resources={attach(revision,target){const source=stages.get(revision);if(!source||!target)return;if(source.model)restoreNativeBoundaries(source.page,source.model);target.replaceChildren(...source.page.childNodes);},failed(revision,error){if(revision===state.revision)state.pageError=true;warn('Page component failed; native page retained.',error);}};
 function recordCurrent(mode){
  if(applying||!active)return;
  const path=routePath(adapter.current());pendingPath={path,mode:mode||'push'};
  if(scheduled)return;scheduled=true;
  queueMicrotask(()=>{scheduled=false;const pending=pendingPath;pendingPath=null;if(disposed||!pending||pending.path===router.currentRoute.value.fullPath)return;void router[pending.mode==='replace'?'replace':'push'](pending.path).catch(error=>warn('Route unavailable.',error));});
 }
 function renderNative(run){
  if(frame)return run();
  const stage=document.createElement('div');stage.hidden=true;stage.setAttribute('data-sb-native-stage','');document.body.append(stage);frame=stage;
  try{scopedStage(stage,run);const page=stage.querySelector('[data-sb-vue-page]');if(page)prepare(stage,page);}
  finally{frame=null;stage.remove();}
  recordCurrent();
 }
 function renderHTML(html){if(frame){frame.innerHTML=html;return;}renderNative(()=>{frame.innerHTML=html;});}
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
 async function traverse(direction){if(!canGo(direction))return false;await traverseLegacyMemoryHistory(direction);return new Promise(resolve=>{const stop=router.afterEach((_to,_from,failure)=>{if(failure)return;stop();void nextTick().then(()=>resolve(true));});router.go(direction==='back'?-1:1);});}
 const api={get active(){return active;},renderHTML,afterRender:callback=>frame?callback():nextTick().then(()=>{if(!disposed)callback();}),
  navigate:id=>router.push(routePath({nav:id})),recordCurrent,
  canGo,back:()=>traverse('back'),forward:()=>traverse('forward'),
  snapshot:()=>({active,route:router.currentRoute.value.fullPath,revision:state.revision,shells:root.querySelectorAll('[data-sb-vue-shell]').length}),
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
  const page=root.querySelector('[data-sb-vue-page]');prepare(root,page);
  let initialError;
  // A setup wrapper keeps the portal ref reactive without making component definitions reactive.
  app=createApp({setup:()=>()=>{return h(ApplicationShell,{state,portals:portals.value,resources});}});
  app.use(pinia);app.use(router);app.config.errorHandler=(error,instance,info)=>{initialError??=error;warn('Shell error ('+(instance?.$options?.name||info)+').',error);};app.mount(root);await nextTick();if(initialError)throw initialError;
  active=true;window.SUNOBOOM_SHELL=api;restoreRenderer=adapter.installRenderer(renderNative);
  if(routePath(adapter.current())!==router.currentRoute.value.fullPath){applying++;try{adapter.apply(parseRoute(router.currentRoute.value.fullPath));}finally{applying--;}}
  await nextTick();const actual=routePath(adapter.current());if(actual!==router.currentRoute.value.fullPath)await router.replace(actual);
  return api;
 }catch(error){disposed=true;active=false;restoreRenderer?.();try{app?.unmount();}finally{root.replaceChildren(...initialNodes);}warn('Shell unavailable; native interface retained.',error);return null;}
}
