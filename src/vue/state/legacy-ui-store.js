import { defineStore } from 'pinia';
import { shallowRef } from 'vue';
import { currentRoute } from '../navigation/route-state.js';
import { normalizeLegacyAppearance } from './appearance-model.js';
import { normalizeAcademyCatalog, normalizeAcademyFocus, normalizeAcademyTree } from './academy-ui-model.js';
import { normalizeStudioSummary, normalizeMixerSummary, normalizeAuditorSummary, normalizeArrangerSummary } from './production-ui-model.js';
import { normalizePlayerLabSummary, normalizePlayerAbSummary } from './player-ui-model.js';
import { normalizeMasterListSummary, normalizePassportListSummary, normalizeMasterDetailSummary, normalizePassportDetailSummary } from './workflow-ui-model.js';
import { normalizeSongCollectionSummary, normalizeSongDetailSummary } from './song-ui-model.js';

// Read-only UI projections across the independent Vue islands.
// The legacy go(), data object and browser storage remain authoritative.
// Never copy lyrics, audio, projects, notifications or personal records here.
const EMPTY_ITEMS = Object.freeze([]);
const EMPTY_STATS = Object.freeze({ ideaCount: 0, promptCount: 0, eventCount: 0, revision: 0 });
const toCount = value => Number.isSafeInteger(value) && value >= 0 ? value : 0;

export const useLegacyUiStore = defineStore('sunoboom-legacy-ui', () => {
  // The compatibility ref is the SAME object consumed by existing route-state
  // callers, not a duplicate ref that might lag behind navigation.
  const route = currentRoute;
  const navigationItems = shallowRef(EMPTY_ITEMS);
  const dashboardStats = shallowRef(EMPTY_STATS);
  // Ephemeral preferences projection: values come exclusively from the legacy
  // settings API after it applies the effective CSS palette to <html>.
  const appearance = shallowRef(Object.freeze({
    theme: 'dark', resolvedTheme: 'dark', compact: false, largeText: false,
    reduceMotion: false, startPage: 'home', revision: 0
  }));

  // Pure UI cursors shared across Academy catalog, genre card and music tree.
  // GENRES and all historical relationships remain owned by original scripts.
  const academyCatalog = shallowRef(Object.freeze({
    query:'', results:0, total:0, mode:'', revision:0
  }));
  const academyFocus = shallowRef(Object.freeze({
    genreId:null, tab:'overview', revision:0
  }));
  const academyTree = shallowRef(Object.freeze({
    tree:'ska', selected:null, zoom:1, query:'', revision:0
  }));

  function publishAcademyCatalog(value) {
    const next = normalizeAcademyCatalog(value);
    if (!next) return false;
    const before = academyCatalog.value;
    if (before.query === next.query && before.results === next.results &&
        before.total === next.total && before.mode === next.mode) return false;
    academyCatalog.value = Object.freeze({...next,revision:before.revision+1});
    return true;
  }

  function publishAcademyFocus(id, tab) {
    const next = normalizeAcademyFocus(id,tab);
    if (!next) return false;
    const before = academyFocus.value;
    if (before.genreId === next.genreId && before.tab === next.tab) return false;
    academyFocus.value = Object.freeze({...next,revision:before.revision+1});
    return true;
  }

  function publishAcademyTree(value) {
    const next = normalizeAcademyTree(value);
    if (!next) return false;
    const before = academyTree.value;
    if (before.tree === next.tree && before.selected === next.selected &&
        before.zoom === next.zoom && before.query === next.query) return false;
    academyTree.value = Object.freeze({...next,revision:before.revision+1});
    return true;
  }

  // Transient, content-free cross-tool indicators. Existing legacy tools
  // exclusively own draft data, derived prompt text and browser persistence.
  const studioSummary = shallowRef(Object.freeze({
    ready:false, genreId:null, tempo:0, promptLength:0, revision:0
  }));
  const mixerSummary = shallowRef(Object.freeze({
    ready:false, genreCount:0, tempo:0, promptLength:0, revision:0
  }));
  const auditorSummary = shallowRef(Object.freeze({
    ready:false, mode:'studio', score:0, checkedLength:0, revision:0
  }));
  const arrangerSummary = shallowRef(Object.freeze({
    ready:false, blockCount:0, barCount:0, averageEnergy:0, transitionCount:0, revision:0
  }));
  const playerLabSummary = shallowRef(Object.freeze({
    ready:false, queueCount:0, selectedPosition:0, playing:false, shuffle:false, repeat:'off', revision:0
  }));
  const playerAbSummary = shallowRef(Object.freeze({
    ready:false, mode:'player', active:'A', readyCount:0, hasBoth:false,
    playing:false, loop:false, revision:0
  }));
  const masterListSummary = shallowRef(Object.freeze({
    ready:false, workCount:0, finishedCount:0, hasSelection:false, revision:0
  }));
  const passportListSummary = shallowRef(Object.freeze({
    ready:false, visibleCount:0, hasRecords:false, filter:'all', revision:0
  }));
  const masterDetailSummary = shallowRef(Object.freeze({
    ready:false, done:0, total:6, percent:0, materialCount:0,
    linkedCount:0, arrangementBlocks:0, historyCount:0, revision:0
  }));
  const passportDetailSummary = shallowRef(Object.freeze({
    ready:false, versionCount:0, linkedCount:0, sectionCount:0,
    hasAudio:false, hasCover:false, revision:0
  }));
  const songCollectionSummary = shallowRef(Object.freeze({
    ready:false, totalCount:0, visibleCount:0, localCoverCount:0, revision:0
  }));
  const songDetailSummary = shallowRef(Object.freeze({
    ready:false, versionCount:0, hasPrimary:false, hasLocalAudio:false,
    canPlay:false, hasCover:false, comparisonAvailable:false, comparisonOpen:false, revision:0
  }));

  function publishToolSummary(target, normalizer, snapshot) {
    const next = normalizer(snapshot);
    if (!next) return false;
    const before = target.value;
    if (Object.keys(next).every(key => before[key] === next[key])) return false;
    target.value = Object.freeze({ ...next, revision: before.revision + 1 });
    return true;
  }
  const publishStudioSummary = snapshot =>
    publishToolSummary(studioSummary, normalizeStudioSummary, snapshot);
  const publishMixerSummary = snapshot =>
    publishToolSummary(mixerSummary, normalizeMixerSummary, snapshot);
  const publishAuditorSummary = snapshot =>
    publishToolSummary(auditorSummary, normalizeAuditorSummary, snapshot);
  const publishArrangerSummary = snapshot =>
    publishToolSummary(arrangerSummary, normalizeArrangerSummary, snapshot);
  const publishPlayerLabSummary = snapshot =>
    publishToolSummary(playerLabSummary, normalizePlayerLabSummary, snapshot);
  const publishPlayerAbSummary = snapshot =>
    publishToolSummary(playerAbSummary, normalizePlayerAbSummary, snapshot);
  const publishMasterListSummary = snapshot =>
    publishToolSummary(masterListSummary, normalizeMasterListSummary, snapshot);
  const publishPassportListSummary = snapshot =>
    publishToolSummary(passportListSummary, normalizePassportListSummary, snapshot);
  const publishMasterDetailSummary = snapshot =>
    publishToolSummary(masterDetailSummary, normalizeMasterDetailSummary, snapshot);
  const publishPassportDetailSummary = snapshot =>
    publishToolSummary(passportDetailSummary, normalizePassportDetailSummary, snapshot);
  const publishSongCollectionSummary = snapshot =>
    publishToolSummary(songCollectionSummary, normalizeSongCollectionSummary, snapshot);
  const publishSongDetailSummary = snapshot =>
    publishToolSummary(songDetailSummary, normalizeSongDetailSummary, snapshot);

  function publishNavigation(items) {
    if (!Array.isArray(items)) return false;
    const next = Object.freeze(items
      .filter(item => item && typeof item.id === 'string' && item.id)
      .map(item => Object.freeze({
        id: item.id,
        label: item.label,
        shortLabel: item.shortLabel,
        iconHtml: item.iconHtml
      })));
    const old = navigationItems.value;
    if (old.length === next.length && old.every((item, index) =>
      item.id === next[index].id && item.label === next[index].label &&
      item.shortLabel === next[index].shortLabel &&
      item.iconHtml === next[index].iconHtml)) return false;
    navigationItems.value = next;
    return true;
  }

  function publishDashboardStats(model) {
    if (!model || typeof model !== 'object') return false;
    const next = {
      ideaCount: toCount(model.ideaCount),
      promptCount: toCount(model.promptCount),
      eventCount: toCount(model.eventCount)
    };
    const previous = dashboardStats.value;
    if (previous.ideaCount === next.ideaCount &&
        previous.promptCount === next.promptCount &&
        previous.eventCount === next.eventCount) return false;
    dashboardStats.value = Object.freeze({ ...next, revision: previous.revision + 1 });
    return true;
  }

  function publishAppearance(snapshot) {
    const next = normalizeLegacyAppearance(snapshot);
    if (!next) return false;
    const before = appearance.value;
    if (before.theme === next.theme &&
        before.resolvedTheme === next.resolvedTheme &&
        before.compact === next.compact &&
        before.largeText === next.largeText &&
        before.reduceMotion === next.reduceMotion &&
        before.startPage === next.startPage) return false;
    appearance.value = Object.freeze({ ...next, revision: before.revision + 1 });
    return true;
  }

  return { route, navigationItems, dashboardStats, appearance,
    academyCatalog, academyFocus, academyTree,
    studioSummary, mixerSummary, auditorSummary, arrangerSummary,
    playerLabSummary, playerAbSummary, masterListSummary, passportListSummary,
    masterDetailSummary, passportDetailSummary,
    songCollectionSummary, songDetailSummary,
    publishNavigation, publishDashboardStats, publishAppearance,
    publishAcademyCatalog, publishAcademyFocus, publishAcademyTree,
    publishStudioSummary, publishMixerSummary, publishAuditorSummary, publishArrangerSummary,
    publishPlayerLabSummary, publishPlayerAbSummary,
    publishMasterListSummary, publishPassportListSummary,
    publishMasterDetailSummary, publishPassportDetailSummary,
    publishSongCollectionSummary, publishSongDetailSummary };
});
