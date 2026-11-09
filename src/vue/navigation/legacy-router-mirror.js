import { createMemoryHistory, createRouter } from 'vue-router';
// Routing compatibility only. The authoritative navigation still lives in
// index.html (go(), openGenre(), view.nav); this memory history MUST NOT write
// to window.location, browser history, localStorage or any app content.
const Placeholder = { render: () => null };
export const legacyMirrorRouter = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/:view(.*)*', name: 'legacy-view', component: Placeholder }]
});

const accountViews = new Set([
  'projects', 'saved', 'myideas', 'myprompts', 'events', 'tracks', 'artists'
]);

export function routeToMemoryPath(route) {
  const id = typeof route === 'string' && route ? route : 'home';
  if (id === 'detail') return '/catalog/detail';
  if (accountViews.has(id)) return '/account/' + id;
  return '/' + encodeURIComponent(id);
}

// Only the actual settled memory route is reported to Vue components.
export function activeRouteFromMemoryPath(path) {
  if (path === '/catalog/detail') return 'catalog';
  if (path.startsWith('/account/')) return 'account';
  try { return decodeURIComponent(path.slice(1)) || 'home'; }
  catch { return 'home'; }
}

let requested = null;
let pending = Promise.resolve();
let lastTransition = 'replace';
let pushCount = 0;

// Menu clicks can create real Vue Router memory-history entries. Legacy-only
// transitions replace the current memory entry. This leaves browser history,
// URL, render() and the source-of-truth view.nav entirely untouched.
// Serialize changes to preserve click order when legacy renders are rapid.
export function syncLegacyRouterMirror(route, { historyMode = 'replace' } = {}) {
  const path = routeToMemoryPath(route);
  if (path === requested) return pending;
  requested = path;
  const mode = historyMode === 'push' ? 'push' : 'replace';
  pending = pending.then(async () => {
    if (legacyMirrorRouter.currentRoute.value.path === path) return;
    const failure = await legacyMirrorRouter[mode](path);
    if (!failure) {
      lastTransition = mode;
      if (mode === 'push') pushCount++;
    }
  }).catch(error => {
    console.warn('[SUNOBOOM] Vue Router memory navigation failed; legacy routing remains active.', error);
  });
  return pending;
}

export function whenLegacyRouterSettled() {
  return pending;
}

export function legacyRouterSnapshot() {
  const route = legacyMirrorRouter.currentRoute.value;
  return Object.freeze({
    path: route.path,
    name: route.name,
    active: activeRouteFromMemoryPath(route.path),
    transition: lastTransition,
    menuPushes: pushCount
  });
}
