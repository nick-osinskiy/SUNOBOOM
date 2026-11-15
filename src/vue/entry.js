import {activateApplicationShell} from './shell/application-shell.js';
import { activateLegacyWorkspace } from './workspace/legacyWorkspaceBridge.js';
import { activateLegacyArtistProfiles } from './academy/legacyArtistProfilesBridge.js';
import { activateLegacyVersionHistory } from './version-history/legacyVersionHistoryBridge.js';
import { createPinia } from 'pinia';
import { useLegacyUiStore } from './state/legacy-ui-store.js';
import { activateLegacyAppearance } from './state/legacyAppearanceBridge.js';
import { activateLegacyGenreTree } from './academy/legacyGenreTreeBridge.js';
import { activateLegacyPoetry } from './poetry/legacyPoetryBridge.js';


// One application owns every Vue component. If startup fails, keep native HTML.
const pinia=createPinia();
const sharedUi=useLegacyUiStore(pinia);
let startup;
export function startApplication(){
 if(window.SUNOBOOM_SHELL?.active)return Promise.resolve(window.SUNOBOOM_SHELL);
 return startup??=activate();
}
async function activate(){
 activateLegacyAppearance({sharedUi});
 const shell=await activateApplicationShell({pinia,sharedUi});
 if(!shell)return null;
 const mountVueFeature=shell.mountFeature;
 // Only external dialogs and named native/lazy boundaries need lifecycle hooks.
 for(const activate of [activateLegacyArtistProfiles,activateLegacyVersionHistory,activateLegacyGenreTree,activateLegacyPoetry,activateLegacyWorkspace])
  activate({mountVueFeature,sharedUi});
 return shell;
}
