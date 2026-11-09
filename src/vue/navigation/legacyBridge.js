import NavigationMenu from './NavigationMenu.vue';
import { navigationSnapshot } from './nav-model.js';
import { currentRoute, syncLegacyRoute } from './route-state.js';

const SELECTORS = [
  { key: 'sidebar', selector: '[data-sb-vue-sidebar]', mobile: false },
  { key: 'mobile', selector: '[data-sb-vue-mobile]', mobile: true }
];

/**
 * Safely enhance navigation: the legacy app retains ownership of #app
 * and the page render cycle. Vue owns only the two menu containers.
 */
export function activateLegacyNavigation({ mountVueFeature, unmountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_NAV;
  const root = document.getElementById('app');
  if (!api || !root || typeof api.snapshot !== 'function') return () => {};

  const instances = new Map();
  let disposed = false;
  // Read-only diagnostics; no navigation mutation is exposed.
  window.SUNOBOOM_VUE_ROUTE = Object.freeze({ snapshot: () => currentRoute.value });

  function sync() {
    if (disposed) return;
    const raw = api.snapshot();
    // Publish before mounting either menu so both Vue roots see the same route.
    syncLegacyRoute(raw.active);
    const items = navigationSnapshot(raw);
    // Only the menu's structure, not its reactive active state, needs remounting.
    const signature = JSON.stringify(items.map(({ active, ...item }) => item));

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
        onNavigate: id => api.navigate(id)
      });
      if (unmount) instances.set(key, { target, signature, unmount });
    }
  }

  // Only observe replacement of the legacy application shell. Vue mutations
  // occur deeper in the tree and therefore cannot create an observer loop.
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();

  return function dispose() {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    for (const instance of instances.values()) instance.unmount();
    instances.clear();
  };
}
