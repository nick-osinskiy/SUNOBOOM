// Both menus and dashboard shortcuts use the same guarded browser navigation.
export const VUE_WORKSPACE_SHORTCUTS=Object.freeze(['myideas','myprompts','events']);
function dispatch(id,{legacyApi}={},source){
 if(typeof id!=='string'||!id||typeof legacyApi?.snapshot!=='function')return false;
 const allowed=source==='menu'?legacyApi.snapshot()?.items?.some(item=>item?.id===id):VUE_WORKSPACE_SHORTCUTS.includes(id);
 if(!allowed)return false;
 const shell=globalThis.window?.SUNOBOOM_SHELL;
 if(shell?.active){void shell.navigate(id);return true;}
 const navigate=source==='menu'?legacyApi.navigate:legacyApi.navigateWorkspace;
 if(typeof navigate!=='function')return false;
 navigate.call(legacyApi,id);return true;
}
export const navigateFromVueMenu=(id,options)=>dispatch(id,options,'menu');
export const navigateFromVueShortcut=(id,options)=>dispatch(id,options,'shortcut');
