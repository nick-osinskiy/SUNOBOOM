/* Routing/UI compatibility only. Core owners and persisted records are unchanged. */
(function(root){'use strict';
 const exists=(key,id)=>Array.isArray(data[key])&&data[key].some(x=>x?.id===id);
 function current(){
  const nav=view.nav,song=root.SUNOBOOM_MY_SONGS?.routeState()||{};
  return {nav,genre:view.selected,tab:view.tab,settings:nav==='account'&&root.SUNOBOOM_LEGACY_SETTINGS?.isOpen(),
   projectId:exists('projects',view.selectedProject)?view.selectedProject:'',
   trackId:!view.sbTrackEdit&&exists('tracks',view.sbTrackSelected)?view.sbTrackSelected:'',
   dnaId:!view.sbDnaEdit&&exists('artistDNAs',view.sbDnaSelected)?view.sbDnaSelected:'',
   edit:nav==='tracks'?view.sbTrackEdit:nav==='artists'?view.sbDnaEdit:nav==='myideas'?view.editIdea:nav==='myprompts'?view.editPrompt:nav==='events'?view.editEvent:'',
   productionId:nav==='producer'?root.SUNOBOOM_LEGACY_PRODUCER_HISTORY?.snapshot()?.id:'',...song};
 }
 function apply(route){
  const api=root.SUNOBOOM_LEGACY_NAV;
  if(route.nav==='catalog'&&view.nav==='detail'&&api.returnToAcademy())return;
  if(route.nav==='detail')return api.restoreGenre(route.genre,route.tab)||go('catalog');
  if(route.nav==='songs'||route.nav==='sharedSong'){go('songs');root.SUNOBOOM_MY_SONGS.restoreRoute(route);return;}
  if(route.nav==='producer'&&route.productionId&&api.canRestoreProduction(route.productionId)){api.restoreProduction(route.productionId);return;}
  go(route.nav);
  if(route.settings){root.SUNOBOOM_LEGACY_SETTINGS.open();return;}
  if(route.nav==='projects')view.selectedProject=exists('projects',route.selected)?route.selected:null;
  if(route.nav==='tracks'){view.sbTrackSelected=exists('tracks',route.selected)?route.selected:null;view.sbTrackEdit=route.edit==='new'||exists('tracks',route.edit)?route.edit:null;view.sbTrackDraft=null;}
  if(route.nav==='artists'){view.sbDnaSelected=exists('artistDNAs',route.selected)?route.selected:null;view.sbDnaEdit=route.edit==='new'||exists('artistDNAs',route.edit)?route.edit:null;}
  if(route.nav==='myideas')view.editIdea=exists('manualIdeas',route.edit)?route.edit:null;
  if(route.nav==='myprompts')view.editPrompt=exists('savedPrompts',route.edit)?route.edit:null;
  if(route.nav==='events')view.editEvent=exists('events',route.edit)?route.edit:null;
  render();
 }
 root.SUNOBOOM_SHELL_ADAPTER=Object.freeze({current,apply,
  frame:()=>({logo:root.SUNOBOOM_LEGACY_HEADER.snapshot().logoSrc,noticeOpen:!!view.sbNoticeOpen}),
  render:()=>render(),
  installRenderer:run=>{const previous=render;render=function(...args){return run(()=>previous.apply(this,args));};return ()=>{render=previous;};},
  canRestore:route=>route.nav==='detail'?root.SUNOBOOM_LEGACY_NAV.canRestoreGenre(route.genre,route.tab):route.nav==='producer'&&route.productionId?root.SUNOBOOM_LEGACY_NAV.canRestoreProduction(route.productionId):route.nav==='tracks'&&route.selected?exists('tracks',route.selected):true
 });
 function restoreNativeURL(){if(root.SUNOBOOM_SHELL?.active||!location.hash)return;const codec=root.SUNOBOOM_ROUTE_CODEC,target=codec.initialPath(location.hash,current());if(target!==codec.routePath(current()))apply(codec.parseRoute(target));}
 root.addEventListener('hashchange',restoreNativeURL);restoreNativeURL();
})(globalThis);
