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
// Parallel ledger of successful Vue memory-history entries. It tracks only
// routes, never editor state or user data. The cursor moves exclusively after
// a confirmed Vue Router navigation; unknown nested targets are not restored.
let historyEntries = [];
let historyPosition = -1;

function saveHistoryEntry(path, mode) {
  if (historyPosition < 0) {
    historyEntries = [path];
    historyPosition = 0;
  } else if (mode === 'push') {
    historyEntries = historyEntries.slice(0, historyPosition + 1);
    historyEntries.push(path);
    historyPosition = historyEntries.length - 1;
  } else {
    historyEntries[historyPosition] = path;
  }
}

function historyStep(direction) {
  const offset = direction === 'back' ? -1 : direction === 'forward' ? 1 : 0;
  const index = historyPosition + offset;
  return offset && index >= 0 && index < historyEntries.length
    ? Object.freeze({ path: historyEntries[index], index, offset }) : null;
}

export function legacyMemoryHistoryCandidate(direction) {
  return historyStep(direction);
}

// Only a safe, visible top-level route can be replayed via legacy navigate().
// Never restore /catalog/detail or /account/tracks by calling go() with a
// guessed state: those screens need their own editor/selection context.
export function legacyRouteFromMemoryPath(path) {
  if (typeof path !== 'string' || !/^\/[a-z][a-z0-9-]*$/i.test(path)) return null;
  try { return decodeURIComponent(path.slice(1)); }
  catch { return null; }
}

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
      saveHistoryEntry(path, mode);
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

/**
 * Opt-in navigation for a future Vue back/forward control, not window.history.
 * This only changes the memory router; the caller must validate and replay
 * the real legacy route. All transitions are serialized with normal renders.
 */
export function traverseLegacyMemoryHistory(direction) {
  const operation = pending.then(() => {
    const target = historyStep(direction);
    if (!target) return false;
    return new Promise(resolve => {
      let done = false;
      let stop = () => {};
      let timer;
      function finish(ok) {
        if (done) return;
        done = true;
        stop();
        clearTimeout(timer);
        if (ok) {
          historyPosition = target.index;
          requested = target.path;
          lastTransition = direction;
        }
        resolve(ok);
      }
      stop = legacyMirrorRouter.afterEach((to, _from, failure) =>
        finish(!failure && to.path === target.path));
      timer = setTimeout(() => finish(false), 2500);
      legacyMirrorRouter.go(target.offset);
    });
  }).catch(error => {
    console.warn('[SUNOBOOM] Vue memory history traversal failed; legacy navigation retained.', error);
    return false;
  });
  // Always keep the queue healthy; do not let a failed optional history action
  // block future normal route synchronization.
  pending = operation.then(() => undefined);
  return operation;
}

export function legacyRouterSnapshot() {
  const route = legacyMirrorRouter.currentRoute.value;
  return Object.freeze({
    path: route.path,
    name: route.name,
    active: activeRouteFromMemoryPath(route.path),
    transition: lastTransition,
    menuPushes: pushCount,
    canGoBack: historyPosition > 0,
    canGoForward: historyPosition >= 0 && historyPosition < historyEntries.length - 1,
    historyDepth: historyEntries.length,
    historyPosition
  });
}
