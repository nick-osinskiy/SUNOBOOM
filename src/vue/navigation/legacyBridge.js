import { observeLegacyIslands } from '../legacy/observeLegacyIslands.js';
import NavigationMenu from './NavigationMenu.vue';
import VueHistoryControls from './VueHistoryControls.vue';
import { navigationSnapshot } from './nav-model.js';
import { currentRoute, syncLegacyRoute } from './route-state.js';
import { legacyRouterSnapshot, whenLegacyRouterSettled } from './legacy-router-mirror.js';
import { navigateFromVueMenu } from './navigation-dispatch.js';
import { canRestoreLegacyMenuHistory, restoreLegacyMenuHistory } from './legacy-history-restore.js';

const SELECTORS = [
  { key: 'sidebar', selector: '[data-sb-vue-sidebar]', mobile: false },
  { key: 'mobile', selector: '[data-sb-vue-mobile]', mobile: true }
];

/**
 * Safely enhance navigation: the legacy app retains ownership of #app
 * and the page render cycle. Vue owns only the two menu containers.
 */
export function activateLegacyNavigation({ mountVueFeature, unmountVueFeature, sharedUi }) {
  const api = window.SUNOBOOM_LEGACY_NAV;
  const root = document.getElementById('app');
  if (!api || !root || typeof api.snapshot !== 'function') return () => {};

  let stopIslands = () => {};
  let items = [];
  let signature;
  let disposed = false;
  // Diagnostics plus explicit, guarded internal history restoration.
  // Browser Back and Forward are intentionally NOT intercepted.
  window.SUNOBOOM_VUE_ROUTE = Object.freeze({
    snapshot: () => currentRoute.value,
    routerSnapshot: () => legacyRouterSnapshot(),
    // Diagnostics include only navigation IDs and numeric counters. No private records.
    sharedState: () => Object.freeze({
      route: sharedUi.route.route,
      active: sharedUi.route.active,
      menuIds: sharedUi.navigationItems.map(item => item.id),
      dashboardStats: { ...sharedUi.dashboardStats },
      appearance: { ...sharedUi.appearance },
      academyCatalog: { ...sharedUi.academyCatalog },
      academyFocus: { ...sharedUi.academyFocus },
      academyTree: { ...sharedUi.academyTree },
      studioSummary: { ...sharedUi.studioSummary },
      mixerSummary: { ...sharedUi.mixerSummary },
      auditorSummary: { ...sharedUi.auditorSummary },
      arrangerSummary: { ...sharedUi.arrangerSummary },
      playerLabSummary: { ...sharedUi.playerLabSummary },
      playerAbSummary: { ...sharedUi.playerAbSummary },
      masterListSummary: { ...sharedUi.masterListSummary },
      passportListSummary: { ...sharedUi.passportListSummary },
      masterDetailSummary: { ...sharedUi.masterDetailSummary },
      passportDetailSummary: { ...sharedUi.passportDetailSummary },
      songCollectionSummary: { ...sharedUi.songCollectionSummary },
      songDetailSummary: { ...sharedUi.songDetailSummary },
      artistManagerSummary: { ...sharedUi.artistManagerSummary },
      artistDnaSummary: { ...sharedUi.artistDnaSummary },
      librarySummary: { ...sharedUi.librarySummary },
      ideaDraftSummary: { ...sharedUi.ideaDraftSummary },
      promptDraftSummary: { ...sharedUi.promptDraftSummary },
      poetrySourceSummary: { ...sharedUi.poetrySourceSummary },
      poetryAnalysisSummary: { ...sharedUi.poetryAnalysisSummary },
      poetryAmbiguitySummary: { ...sharedUi.poetryAmbiguitySummary },
      performanceTagsSummary: { ...sharedUi.performanceTagsSummary }
    }),
    back: () => restoreLegacyMenuHistory('back', { legacyApi: api }),
    forward: () => restoreLegacyMenuHistory('forward', { legacyApi: api }),
    // The legacy page validates id + tab before an opt-in context push.
    recordGenre: (id, tab, historyMode = 'push') => {
      const actual = api.snapshot();
      if (actual.active !== 'detail' || actual.detail?.id !== id ||
          actual.detail?.tab !== tab || !api.canRestoreGenre?.(id, tab)) return false;
      syncLegacyRoute('detail', {
        historyMode, context: { kind: 'genre', id, tab }
      });
      return true;
    },
    recordProduction: (id, historyMode = 'push') => {
      const actual=api.snapshot();
      if(actual.active!=='producer'||actual.production?.id!==id||!api.canRestoreProduction?.(id))return false;
      syncLegacyRoute('producer',{historyMode,context:{kind:'production',id}});return true;
    },
    recordTrackList: () => {
      const actual = api.snapshot();
      if (actual.active !== 'tracks' || actual.track?.id || actual.trackEditing) return false;
      // Explicitly settle the list BEFORE the detail push. A rapid sequence
      // of legacy re-renders must never erase the list's history entry.
      syncLegacyRoute('tracks');
      return true;
    },
    recordTrack: (id, historyMode = 'push') => {
      const actual = api.snapshot();
      if (actual.active !== 'tracks' || actual.track?.id !== id ||
          actual.trackEditing || !api.canRestoreTrack?.(id)) return false;
      syncLegacyRoute('tracks', {
        historyMode, context: { kind: 'track', id }
      });
      return true;
    }
  });

  function publishNavigation() {
    const raw = api.snapshot();
    // Both menus must see the same route before either mounts.
    syncLegacyRoute(raw.active, { context: raw.track?.id
      ? { kind: 'track', id: raw.track.id } : raw.active==='producer' && raw.production?.id ? {kind:'production',id:raw.production.id} : null });
    items = navigationSnapshot(raw);
    sharedUi.publishNavigation(items);
    signature = JSON.stringify(items.map(({ active, ...item }) => item));
  }

  // Initialize the memory route before Vue Router is installed in any menu.
  // Otherwise a first-install bootstrap could overwrite the legacy route.
  const initial = api.snapshot();
  syncLegacyRoute(initial.active, { context: initial.track?.id
    ? { kind: 'track', id: initial.track.id } : initial.active === 'producer' && initial.production?.id
      ? { kind: 'production', id: initial.production.id } : null });
  void whenLegacyRouterSettled().then(() => {
    if (disposed) return;
    stopIslands = observeLegacyIslands({
      root,
      beforeSync: publishNavigation,
      islands: [
        {
          key: 'history',
          selectTarget: root => root.querySelector('[data-sb-vue-history]'),
          readSnapshot: () => api,
          mount: target => mountVueFeature(target, VueHistoryControls, {
            canRestore: direction => canRestoreLegacyMenuHistory(direction, { legacyApi: api }),
            onRestore: direction => restoreLegacyMenuHistory(direction, { legacyApi: api })
          }, { vueRouter: true })
        },
        ...SELECTORS.map(({ key, selector, mobile }) => ({
          key,
          selectTarget: root => root.querySelector(selector),
          readRevision: () => signature,
          readSnapshot: () => items,
          mount: (target, items) => mountVueFeature(target, NavigationMenu, {
            items,
            mobile,
            onNavigate: (id, router) => navigateFromVueMenu(id, { router, legacyApi: api })
          }, { vueRouter: true })
        }))
      ]
    });
  });

  return function dispose() {
    if (disposed) return;
    disposed = true;
    stopIslands();
  };
}
