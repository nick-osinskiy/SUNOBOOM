import { createMemoryHistory, createRouter } from 'vue-router';
import { activeNavigationRoute } from './nav-model.js';

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

let requested = null;
let pending = Promise.resolve();

// Serializing memory-only navigation ensures rapid legacy render cycles cannot
// leave the mirror on an older route. No component relies on this async mirror
// to decide what is visible: legacy view.nav stays the source of truth.
export function syncLegacyRouterMirror(route) {
  const path = routeToMemoryPath(route);
  if (path === requested) return pending;
  requested = path;
  pending = pending.then(() => {
    if (legacyMirrorRouter.currentRoute.value.path === path) return;
    return legacyMirrorRouter.replace(path);
  }).catch(error => {
    console.warn('[SUNOBOOM] Vue Router memory mirror failed; legacy routing remains active.', error);
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
    active: requested ? activeNavigationRoute(
      requested === '/catalog/detail' ? 'detail' :
      requested.startsWith('/account/') ? requested.slice('/account/'.length) :
      decodeURIComponent(requested.slice(1))
    ) : 'home'
  });
}
