import {activateApplicationShell} from './shell/application-shell.js';
import { activateLegacyWorkspace } from './workspace/legacyWorkspaceBridge.js';
import { activateLegacyArtistProfiles } from './academy/legacyArtistProfilesBridge.js';
import { activateLegacySharedSong } from './account/legacySharedSongBridge.js';
import { activateLegacyIdeasPage } from './ideas/legacyIdeasPageBridge.js';
import { activateLegacyAccountHome } from './account/legacyAccountHomeBridge.js';
import { activateLegacyEventActions } from './account/legacyEventActionsBridge.js';
import { activateLegacyEventReminders } from './account/legacyEventRemindersBridge.js';
import { activateLegacyEventEditor } from './account/legacyEventEditorBridge.js';
import { activateLegacyEventCollection } from './account/legacyEventCollectionBridge.js';
import { activateLegacyProjectDetail } from './account/legacyProjectDetailBridge.js';
import { activateLegacyProjectCreator } from './account/legacyProjectCreatorBridge.js';
import { activateLegacyProjectCollection } from './account/legacyProjectCollectionBridge.js';
import { activateLegacyIdeaCollections } from './poetry/legacyIdeaCollectionsBridge.js';
import { activateLegacyVersionHistory } from './version-history/legacyVersionHistoryBridge.js';
import { activateLegacyHomeDashboard } from './home/legacyHomeDashboardBridge.js';
import { activateLegacyPromptCollection } from './account/legacyPromptCollectionBridge.js';
import { activateLegacyPromptEditor } from './account/legacyPromptEditorBridge.js';
import { activateLegacyLibrary } from './account/legacyLibraryBridge.js';
import { activateLegacySongCards } from './account/legacySongCardsBridge.js';
import { activateLegacySongDetail } from './account/legacySongDetailBridge.js';
import { activateLegacySongEditor } from './account/legacySongEditorBridge.js';
import { activateLegacyArtistManager } from './account/legacyArtistManagerBridge.js';
import { activateLegacyArtistDNA } from './account/legacyArtistDNABridge.js';
import { activateLegacyArtistDNAEditor } from './account/legacyArtistDNAEditorBridge.js';
import { activateLegacyAccountSettings } from './account/legacyAccountSettingsBridge.js';
import { activateLegacyPlayerLab } from './player/legacyPlayerLabBridge.js';
import { activateLegacyPlayerAB } from './player/legacyPlayerABBridge.js';
import { activateLegacyProducerSongList } from './producer/legacyProducerSongListBridge.js';
import { activateLegacyProducerSongDetail } from './producer/legacyProducerSongDetailBridge.js';
import { activateLegacyTrackPassportList } from './account/legacyTrackPassportListBridge.js';
import { activateLegacyTrackPassportDetail } from './account/legacyTrackPassportDetailBridge.js';
import { activateLegacyTrackPassportEditor } from './account/legacyTrackPassportEditorBridge.js';
import { activateLegacyIdeaEditor } from './poetry/legacyIdeaEditorBridge.js';
import { createPinia } from 'pinia';
import { useLegacyUiStore } from './state/legacy-ui-store.js';
import { activateLegacyAppearance } from './state/legacyAppearanceBridge.js';
import { activateLegacyAcademy } from './academy/legacyAcademyBridge.js';
import { activateLegacyGenreTree } from './academy/legacyGenreTreeBridge.js';
import { activateLegacyGenreDetail } from './academy/legacyGenreDetailBridge.js';
import { activateLegacyStudio } from './studio/legacyStudioBridge.js';
import { activateLegacyMixer } from './studio/legacyMixerBridge.js';
import { activateLegacyAuditor } from './studio/legacyAuditorBridge.js';
import { activateLegacyArranger } from './studio/legacyArrangerBridge.js';
import { activateLegacyPoetry } from './poetry/legacyPoetryBridge.js';
import { activateLegacyTags } from './poetry/legacyTagsBridge.js';


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
 const shell=await activateApplicationShell({pinia,sharedUi,activations:pageActivations});
 if(!shell)return null;
 const mountVueFeature=shell.mountFeature;
 // Only external dialogs and named native/lazy boundaries need lifecycle hooks.
 for(const activate of [activateLegacyArtistProfiles,activateLegacyVersionHistory,activateLegacyGenreTree,activateLegacyPoetry,activateLegacyWorkspace])
  activate({mountVueFeature,sharedUi});
 return shell;
}

const pageActivations=[activateLegacyWorkspace,activateLegacySharedSong,activateLegacyIdeasPage,activateLegacyAccountHome,activateLegacyEventActions,activateLegacyEventReminders,activateLegacyEventEditor,activateLegacyEventCollection,activateLegacyProjectDetail,activateLegacyProjectCreator,activateLegacyProjectCollection,activateLegacyIdeaCollections,activateLegacyHomeDashboard,activateLegacyPromptCollection,activateLegacyPromptEditor,activateLegacyLibrary,activateLegacySongCards,activateLegacySongDetail,activateLegacySongEditor,activateLegacyArtistManager,activateLegacyArtistDNA,activateLegacyArtistDNAEditor,activateLegacyAccountSettings,activateLegacyPlayerLab,activateLegacyPlayerAB,activateLegacyProducerSongList,activateLegacyProducerSongDetail,activateLegacyTrackPassportList,activateLegacyTrackPassportDetail,activateLegacyTrackPassportEditor,activateLegacyIdeaEditor,activateLegacyAcademy,activateLegacyGenreTree,activateLegacyGenreDetail,activateLegacyStudio,activateLegacyMixer,activateLegacyAuditor,activateLegacyArranger,activateLegacyPoetry,activateLegacyTags];
