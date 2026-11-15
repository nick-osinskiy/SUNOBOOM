/* Shared URL codec for Vue Router and the native fallback. No data/storage/DOM. */
(function(root){'use strict';
const workspaces=new Set(['projects','saved','myideas','myprompts','events','tracks','artists']);
const routes=Object.freeze(['home','catalog','detail','ideas','studio','account','projects','saved','myideas','myprompts','events','tracks','artists','player','producer','songs','mixer','sharedSong']);
const id=value=>typeof value==='string'&&/^[a-zA-Z0-9_-]{1,128}$/.test(value)?value:'';
const tabs=new Set(['overview','ideas','prompts','artists']);
const query=values=>{const entries=Object.entries(values).filter(([,value])=>value);return entries.length?'?'+entries.map(([key,value])=>encodeURIComponent(key)+'='+encodeURIComponent(value)).join('&'):'';};
function routePath(state){
 const nav=routes.includes(state.nav)?state.nav:'home';
 if(nav==='detail')return '/catalog/'+encodeURIComponent(id(state.genre)||'unknown')+'/'+(tabs.has(state.tab)?state.tab:'overview');
 if(nav==='sharedSong')return '/shared'+query({card:typeof state.card==='string'?state.card.slice(0,14000):'broken'});
 if(nav==='account'&&state.settings)return '/account/settings';
 if(nav==='songs')return '/songs'+(state.form?state.editId?'/'+id(state.editId)+'/edit':'/new':id(state.songId)?'/'+id(state.songId):'')+query({artists:state.manager?'1':''});
 if(nav==='producer')return '/producer'+(id(state.productionId)?'/'+id(state.productionId):'');
 if(workspaces.has(nav)){
  const selected=nav==='tracks'?(state.trackId||state.selected):nav==='projects'?(state.projectId||state.selected):nav==='artists'?(state.dnaId||state.selected):'';
  return '/account/'+nav+(id(selected)?'/'+id(selected):'')+query({edit:state.edit==='new'?'new':id(state.edit)});
 }
 return '/'+nav;
}
function parseRoute(fullPath){
 let url;try{url=new URL(fullPath,'https://sunoboom.invalid');}catch{return {nav:'home'};}
 let parts;try{parts=url.pathname.split('/').filter(Boolean).map(decodeURIComponent);}catch{return {nav:'home'};}
 const edit=url.searchParams.get('edit'),safeEdit=edit==='new'?'new':id(edit);
 if(parts[0]==='shared')return {nav:'sharedSong',card:(url.searchParams.get('card')||'broken').slice(0,14000)};
 if(parts[0]==='catalog'&&parts.length>1)return {nav:'detail',genre:id(parts[1]),tab:tabs.has(parts[2])?parts[2]:'overview'};
 if(parts[0]==='account'&&parts[1]==='settings')return {nav:'account',settings:true};
 if(parts[0]==='account'&&workspaces.has(parts[1]))return {nav:parts[1],selected:id(parts[2]),edit:safeEdit};
 if(parts[0]==='producer')return {nav:'producer',productionId:id(parts[1])};
 if(parts[0]==='songs')return {nav:'songs',songId:parts[1]==='new'?'':id(parts[1]),form:parts[1]==='new'||parts[2]==='edit',editId:parts[2]==='edit'?id(parts[1]):'',manager:url.searchParams.get('artists')==='1'};
 return {nav:routes.includes(parts[0])&&parts[0]!=='detail'&&parts[0]!=='sharedSong'?parts[0]:'home'};
}
function initialPath(hash,current){
 const raw=String(hash||'').replace(/^#/,'');
 if(raw.startsWith('/'))return routePath({...parseRoute(raw),...workspaceSelection(parseRoute(raw))});
 if(raw.startsWith('sb-song='))return routePath({nav:'sharedSong',card:raw.slice(8)});
 if(raw.startsWith('genre-'))return routePath({nav:'detail',genre:raw.slice(6),tab:'overview'});
 if(raw.startsWith('view-')&&routes.includes(raw.slice(5)))return routePath({nav:raw.slice(5)});
 return routePath(current);
}
function workspaceSelection(state){return state.nav==='projects'?{projectId:state.selected}:state.nav==='tracks'?{trackId:state.selected}:state.nav==='artists'?{dnaId:state.selected}:{};}

root.SUNOBOOM_ROUTE_CODEC=Object.freeze({routes,routePath,parseRoute,initialPath});
})(globalThis);
