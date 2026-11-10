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

  const instances = new Map();
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
      appearance: { ...sharedUi.appearance }
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

  function sync() {
    if (disposed) return;
    const raw = api.snapshot();
    // Publish before mounting either menu so both Vue roots see the same route.
    syncLegacyRoute(raw.active, { context: raw.track?.id
      ? { kind: 'track', id: raw.track.id } : raw.active==='producer' && raw.production?.id ? {kind:'production',id:raw.production.id} : null });
    const items = navigationSnapshot(raw);
    sharedUi.publishNavigation(items);
    // Only the menu's structure, not its reactive active state, needs remounting.
    const signature = JSON.stringify(items.map(({ active, ...item }) => item));

    // Separate toolbar outside the narrow mobile bottom bar and app header.
    const historyHost = root.querySelector('[data-sb-vue-history]');
    const priorHistory = instances.get('history');
    if (!historyHost) {
      priorHistory?.unmount();
      instances.delete('history');
    } else if (priorHistory?.target !== historyHost) {
      priorHistory?.unmount();
      const unmount = mountVueFeature(historyHost, VueHistoryControls, {
        canRestore: direction => canRestoreLegacyMenuHistory(direction, { legacyApi: api }),
        onRestore: direction => restoreLegacyMenuHistory(direction, { legacyApi: api })
      }, { vueRouter: true });
      if (unmount) instances.set('history', { target: historyHost, unmount });
    }

    for (const { key, selector, mobile } of SELECTORS) {
      const target = root.querySelector(selector);
      const prior = instances.get(key);

      if (!target) {
        prior?.unmount();
        instances.delete(key);
        continue;
      }
      if (prior?.target === target && prior.signature === signature) continue;
      prior?.unmount();

      const unmount = mountVueFeature(target, NavigationMenu, {
        items,
        mobile,
        onNavigate: (id, router) => navigateFromVueMenu(id, { router, legacyApi: api })
      }, { vueRouter: true });
      if (unmount) instances.set(key, { target, signature, unmount });
    }
  }

  // Only observe replacement of the legacy application shell. Vue mutations
  // occur deeper in the tree and therefore cannot create an observer loop.
  const observer = new MutationObserver(sync);
  // Initialize the memory route before Vue Router is installed in any menu.
  // Otherwise a first-install bootstrap could overwrite the legacy route.
  const initial = api.snapshot();
  syncLegacyRoute(initial.active, { context: initial.track?.id
    ? { kind: 'track', id: initial.track.id } : initial.active === 'producer' && initial.production?.id
      ? { kind: 'production', id: initial.production.id } : null });
  void whenLegacyRouterSettled().then(() => {
    if (disposed) return;
    observer.observe(root, { childList: true });
    sync();
  });

  return function dispose() {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    for (const instance of instances.values()) instance.unmount();
    instances.clear();
  };
}
