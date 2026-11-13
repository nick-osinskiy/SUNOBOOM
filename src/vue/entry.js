import { activateLegacyProjectDetail } from './account/legacyProjectDetailBridge.js';
import { activateLegacyProjectCreator } from './account/legacyProjectCreatorBridge.js';
import { activateLegacyProjectCollection } from './account/legacyProjectCollectionBridge.js';
import { createFeatureMounter } from './legacy/createFeatureMounter.js';
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
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useLegacyUiStore } from './state/legacy-ui-store.js';
import { activateLegacyAppearance } from './state/legacyAppearanceBridge.js';
import { legacyMirrorRouter } from './navigation/legacy-router-mirror.js';
import VueFeatureHost from './VueFeatureHost.vue';
import { activateLegacyNavigation } from './navigation/legacyBridge.js';
import { activateLegacyTopHeader } from './navigation/legacyTopHeaderBridge.js';
import { activateLegacyAcademy } from './academy/legacyAcademyBridge.js';
import { activateLegacyGenreTree } from './academy/legacyGenreTreeBridge.js';
import { activateLegacyGenreDetail } from './academy/legacyGenreDetailBridge.js';
import { activateLegacyStudio } from './studio/legacyStudioBridge.js';
import { activateLegacyMixer } from './studio/legacyMixerBridge.js';
import { activateLegacyAuditor } from './studio/legacyAuditorBridge.js';
import { activateLegacyArranger } from './studio/legacyArrangerBridge.js';
import { activateLegacyPoetry } from './poetry/legacyPoetryBridge.js';
import { activateLegacyTags } from './poetry/legacyTagsBridge.js';

// Vue components are mounted only into explicitly handed-off feature containers.
// Importing this module never replaces the existing SUNOBOOM application shell.
const pinia = createPinia();
// One Pinia instance shared by every island, including both navigation roots.
const sharedUi = useLegacyUiStore(pinia);


function resolveTarget(target) {
  if (typeof document === 'undefined') return null;
  return typeof target === 'string' ? document.querySelector(target) : target;
}

export const { mountVueFeature, unmountVueFeature } = createFeatureMounter({
  createApp, host: VueFeatureHost, pinia, router: legacyMirrorRouter, resolveTarget
});

/** Mirror settings.js appearance into Pinia before any Vue island mounts. */
export function startLegacyAppearance() {
  return activateLegacyAppearance({ sharedUi });
}

/** Mount the Vue navigation into the existing desktop and mobile menu containers. */
export function startLegacyNavigation() {
  return activateLegacyNavigation({ mountVueFeature, unmountVueFeature, sharedUi });
}

/** Replace only the original header's children; all actions stay in legacy code. */
export function startLegacyTopHeader() {
  return activateLegacyTopHeader({ mountVueFeature });
}

/** Render Academy genre cards inside its existing grouped HTML structure. */
export function startLegacyAcademy() {
  return activateLegacyAcademy({ mountVueFeature });
}

/** Vue 3 genre detail layout; existing ideas, artists and Suno templates stay functional. */
export function startLegacyGenreDetail() {
  return activateLegacyGenreDetail({ mountVueFeature });
}

/** Vue 3 central Suno Studio prompt builder; existing modules remain in place. */
export function startLegacyStudio() {
  return activateLegacyStudio({ mountVueFeature });
}

/** Vue 3 genre mixer; legacy calculations and browser storage remain unchanged. */
export function startLegacyMixer() {
  return activateLegacyMixer({ mountVueFeature });
}

/** Vue 3 prompt auditor interface, with original rule engine and clipboard actions. */
export function startLegacyAuditor() {
  return activateLegacyAuditor({ mountVueFeature });
}

/** Vue 3 arrangement cards, snake, transition hub and energy curve. */
export function startLegacyArranger() {
  return activateLegacyArranger({ mountVueFeature });
}

/** Vue 3 song poetry analytics and homograph choice list. */
export function startLegacyPoetry() {
  return activateLegacyPoetry({ mountVueFeature });
}

/** Vue 3 vocal performance tag controls and editable confirmation preview. */
export function startLegacyTags() {
  return activateLegacyTags({ mountVueFeature });
}


/** Vue form fields and Lyrics/Style; original storage and text processing retained. */
export function startLegacyIdeaEditor() {
  return activateLegacyIdeaEditor({ mountVueFeature });
}

export function startLegacyIdeaCollections() {
  return activateLegacyIdeaCollections({ mountVueFeature });
}

/** Vue prompt form fields; original save, cancel and auditor handlers retained. */
export function startLegacyPromptEditor() {
  return activateLegacyPromptEditor({ mountVueFeature });
}

/** Vue saved prompt list with original source data and handlers retained. */
export function startLegacyPromptCollection() {
  return activateLegacyPromptCollection({ mountVueFeature });
}

/** Vue library collections with the same legacy data and delegated actions. */
export function startLegacyLibrary() {
  return activateLegacyLibrary({ mountVueFeature });
}

/** Vue cards and search results for My Songs; all media and actions stay in legacy. */
export function startLegacySongCards() {
  return activateLegacySongCards({ mountVueFeature });
}

/** Vue song detail shell; versions, A/B controls and file storage stay legacy. */
export function startLegacySongDetail() {
  return activateLegacySongDetail({ mountVueFeature });
}

/** Vue create/edit song fields with original media store and submit handlers. */
export function startLegacySongEditor() {
  return activateLegacySongEditor({ mountVueFeature });
}

/** Vue personal artist manager; original artist catalog, DNA and song references are retained. */
export function startLegacyArtistManager() {
  return activateLegacyArtistManager({ mountVueFeature });
}

/** Vue artist DNA collection and detail; original editor and Studio links remain legacy. */
export function startLegacyArtistDNA() {
  return activateLegacyArtistDNA({ mountVueFeature });
}

/** Vue artist DNA creation/editing; original save and Style generator stay authoritative. */
export function startLegacyArtistDNAEditor() {
  return activateLegacyArtistDNAEditor({ mountVueFeature });
}

/** Vue settings screen, with original local preferences and profile handlers. */
export function startLegacyAccountSettings() {
  return activateLegacyAccountSettings({ mountVueFeature });
}

/** Vue Player LAB, retaining the original audio engine, local files and A/B. */
export function startLegacyPlayerLab() {
  return activateLegacyPlayerLab({ mountVueFeature });
}

/** Vue A/B comparator interface, retaining two independent legacy audio engines. */
export function startLegacyPlayerAB() {
  return activateLegacyPlayerAB({ mountVueFeature });
}

/** Vue Master song list, with original creation, stage editing and storage. */
export function startLegacyProducerSongList() {
  return activateLegacyProducerSongList({ mountVueFeature });
}

/** Vue 3 Master detail; every mutation and storage call stays in producer-center.js. */
export function startLegacyProducerSongDetail() {
  return activateLegacyProducerSongDetail({ mountVueFeature });
}

/** Vue 3 list of track passports; legacy detail, editor and calendar stay unchanged. */
export function startLegacyTrackPassportList() {
  return activateLegacyTrackPassportList({ mountVueFeature });
}

/** Vue 3 passport detail; original version/calendar/actions and HTML fallback retained. */
export function startLegacyTrackPassportDetail() {
  return activateLegacyTrackPassportDetail({ mountVueFeature });
}

/** Vue 3 track passport create/edit screen; existing tp-* handlers remain authoritative. */
export function startLegacyTrackPassportEditor() {
  return activateLegacyTrackPassportEditor({ mountVueFeature });
}

/** Vue 3 version-history dialog; original releases and full HTML fallback retained. */
export function startLegacyVersionHistory() {
  return activateLegacyVersionHistory({ mountVueFeature });
}

/** Vue home dashboard, retaining original legacy data, navigation and HTML fallback. */
export function startLegacyHomeDashboard() {
  return activateLegacyHomeDashboard({ mountVueFeature, sharedUi });
}

/** Vue genealogy explorer; original genre graph and full HTML fallback retained. */
export function startLegacyGenreTree() {
  return activateLegacyGenreTree({ mountVueFeature });
}

/** Vue project list; native forms and storage retain ownership. */
export function startLegacyProjectCollection() {
  return activateLegacyProjectCollection({ mountVueFeature });
}

/** Vue project draft fields; the original create action remains authoritative. */
export function startLegacyProjectCreator() {
  return activateLegacyProjectCreator({ mountVueFeature });
}

/** Vue working project card; native actions own persistence and navigation. */
export function startLegacyProjectDetail() {
  return activateLegacyProjectDetail({ mountVueFeature });
}
