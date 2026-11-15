import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {installNavigationService} from '../src/vue/navigation/navigation-service.js';
import {syncLegacyRoute,currentRoute} from '../src/vue/navigation/route-state.js';
import {navigateFromVueMenu,navigateFromVueShortcut} from '../src/vue/navigation/navigation-dispatch.js';
import {observeLegacyIsland} from '../src/vue/legacy/observeLegacyIsland.js';

test('navigation diagnostics project the actual browser router and use its guarded traversal only',async()=>{
 let path='/catalog/ska/artists',back=0;const root={};
 const shell={snapshot:()=>({route:path}),canGo:d=>d==='back',back:async()=>{back++;return true;},forward:async()=>false};
 const stop=installNavigationService({root,shell,sharedUi:{},legacyApi:{}});
 syncLegacyRoute('detail');
 assert.deepEqual(root.SUNOBOOM_VUE_ROUTE.routerSnapshot(),{path,active:'catalog',canGoBack:true,canGoForward:false,context:{kind:'genre',id:'ska',tab:'artists'}});
 assert.equal(root.SUNOBOOM_VUE_ROUTE.snapshot(),currentRoute.value);
 path='/account/tracks/t-old';syncLegacyRoute('tracks');
 assert.deepEqual(root.SUNOBOOM_VUE_ROUTE.routerSnapshot().context,{kind:'track',id:'t-old'});
 assert.equal(await root.SUNOBOOM_VUE_ROUTE.back(),true);assert.equal(back,1);
 stop();stop();assert.equal(root.SUNOBOOM_VUE_ROUTE,undefined);
});

test('recording compatibility validates actual genre, track and production before requesting a URL update',()=>{
 const calls=[],root={};let actual={active:'detail',detail:{id:'ska',tab:'artists'}};
 const shell={recordCurrent:mode=>calls.push(mode)};
 const legacyApi={snapshot:()=>actual,canRestoreGenre:(id,tab)=>id==='ska'&&tab==='artists',canRestoreTrack:id=>id==='t',canRestoreProduction:id=>id==='p'};
 const stop=installNavigationService({root,shell,sharedUi:{},legacyApi});const api=root.SUNOBOOM_VUE_ROUTE;
 assert.equal(api.recordGenre('other','artists'),false);assert.equal(api.recordGenre('ska','artists','replace'),true);
 actual={active:'tracks',track:{id:'t'},trackEditing:true};assert.equal(api.recordTrack('t'),false);
 actual.trackEditing=false;assert.equal(api.recordTrack('t'),true);
 actual={active:'producer',production:{id:'p'}};assert.equal(api.recordProduction('deleted'),false);assert.equal(api.recordProduction('p'),true);
 assert.deepEqual(calls,['replace','push','push']);stop();
});

test('one guarded dispatcher selects browser navigation without also invoking native go',()=>{
 const old=globalThis.window,calls=[];
 globalThis.window={SUNOBOOM_SHELL:{active:true,navigate:id=>calls.push('router:'+id)}};
 const legacyApi={snapshot:()=>({items:[{id:'studio'}]}),navigate:id=>calls.push('native:'+id),navigateWorkspace:id=>calls.push('workspace:'+id)};
 try{
  assert.equal(navigateFromVueMenu('studio',{legacyApi}),true);
  assert.equal(navigateFromVueMenu('hidden',{legacyApi}),false);
  assert.equal(navigateFromVueShortcut('myideas',{legacyApi}),true);
  assert.equal(navigateFromVueShortcut('songs',{legacyApi}),false);
  globalThis.window.SUNOBOOM_SHELL.active=false;
  assert.equal(navigateFromVueMenu('studio',{legacyApi}),true);
  assert.deepEqual(calls,['router:studio','router:myideas','native:studio']);
 }finally{if(old===undefined)delete globalThis.window;else globalThis.window=old;}
});

test('boundary lifecycle uses explicit events, preserves stable hosts and unsubscribes exactly once without a DOM observer',()=>{
 const previous=globalThis.MutationObserver;globalThis.MutationObserver=class{constructor(){throw Error('DOM observation forbidden');}};
 let sync,off=0,mounts=0,unmounts=0,target={isConnected:true};
 try{
  const stop=observeLegacyIsland({root:{},selectTarget:()=>target,readSnapshot:()=>({}),mount:()=>{mounts++;return ()=>unmounts++;},subscribe:callback=>{sync=callback;return ()=>off++;}});
  sync();sync();assert.equal(mounts,1);
  target.isConnected=false;target={isConnected:true};sync();assert.equal(mounts,2);assert.equal(unmounts,1);
  stop();stop();sync();assert.deepEqual({mounts,unmounts,off},{mounts:2,unmounts:2,off:1});
 }finally{if(previous===undefined)delete globalThis.MutationObserver;else globalThis.MutationObserver=previous;}
});

test('production startup has one application entry and no retired routers, parallel roots or default MutationObservers',()=>{
 const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
 const entry=read('src/vue/entry.js'),bootstrap=read('src/vue/bootstrap.js');
 assert.match(bootstrap,/startApplication\(\)/);assert.doesNotMatch(bootstrap,/startLegacy|startLegacyPages/);
 assert.doesNotMatch(entry,/createApp|createFeatureMounter|legacyMirrorRouter|activateLegacyPages/);
 for(const file of ['legacy-router-mirror.js','legacy-history-restore.js','legacyBridge.js','legacyTopHeaderBridge.js'])
  assert.equal(existsSync(new URL('../src/vue/navigation/'+file,import.meta.url)),false,file);
 for(const file of ['observeLegacyIsland.js','observeLegacyIslands.js'])assert.doesNotMatch(read('src/vue/legacy/'+file),/new MutationObserver/);
 const shell=read('src/vue/shell/ApplicationShell.vue');
 for(const component of ['NavigationMenu','TopHeader','VueHistoryControls','Notifications'])assert.match(shell,new RegExp('<'+component+' '));
 assert.doesNotMatch(read('src/vue/shell/application-shell.js'),/createMemoryHistory|traverseLegacyMemoryHistory|legacyMirror/);
});
