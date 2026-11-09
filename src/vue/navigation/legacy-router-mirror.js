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

export function routeToMemoryPath(route, context = null) {
  const id = typeof route === 'string' && route ? route : 'home';
  // A passport detail is a distinct memory route, never a browser URL.
  if (id === 'tracks' && context?.kind === 'track') return '/account/tracks/detail';
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
let historyContexts = [];
let historyPosition = -1;

const GENRE_TABS = new Set(['overview', 'ideas', 'prompts', 'artists']);
function safeGenreContext(context) {
  if (context?.kind !== 'genre' || typeof context.id !== 'string' ||
      !/^[a-z0-9-]{1,100}$/.test(context.id) || !GENRE_TABS.has(context.tab)) return null;
  return Object.freeze({ kind: 'genre', id: context.id, tab: context.tab });
}

function safeTrackContext(context) {
  if (context?.kind !== 'track' || typeof context.id !== 'string' ||
      !/^[a-zA-Z0-9_-]{1,128}$/.test(context.id)) return null;
  return Object.freeze({ kind: 'track', id: context.id });
}

function safeHistoryContext(context) {
  return safeGenreContext(context) || safeTrackContext(context);
}

function saveHistoryEntry(path, mode, context = null) {
  const safe = safeHistoryContext(context);
  if (historyPosition < 0) {
    historyEntries = [path];
    historyContexts = [safe];
    historyPosition = 0;
  } else if (mode === 'push') {
    historyEntries = historyEntries.slice(0, historyPosition + 1);
    historyContexts = historyContexts.slice(0, historyPosition + 1);
    historyEntries.push(path);
    historyContexts.push(safe);
    historyPosition = historyEntries.length - 1;
  } else {
    const previousContext = historyEntries[historyPosition] === path
      ? historyContexts[historyPosition] : null;
    historyEntries[historyPosition] = path;
    historyContexts[historyPosition] = safe || previousContext || null;
  }
}

function historyStep(direction) {
  const offset = direction === 'back' ? -1 : direction === 'forward' ? 1 : 0;
  const index = historyPosition + offset;
  return offset && index >= 0 && index < historyEntries.length
    ? Object.freeze({ path: historyEntries[index], context: historyContexts[index] || null,
      index, offset }) : null;
}

export function legacyMemoryHistoryCandidate(direction) {
  return historyStep(direction);
}

// Only safe, visible top-level routes can be replayed via legacy navigate().
 // Nested detail routes require validated object context and explicit legacy APIs;
 // neither editors nor arbitrary nested URLs are guessed from a path.
export function legacyRouteFromMemoryPath(path) {
  if (typeof path !== 'string' || !/^\/[a-z][a-z0-9-]*$/i.test(path)) return null;
  try { return decodeURIComponent(path.slice(1)); }
  catch { return null; }
}

// Menu clicks can create real Vue Router memory-history entries. Legacy-only
// transitions replace the current memory entry. This leaves browser history,
// URL, render() and the source-of-truth view.nav entirely untouched.
// Serialize changes to preserve click order when legacy renders are rapid.
export function syncLegacyRouterMirror(route, { historyMode = 'replace', context = null } = {}) {
  const safe = safeHistoryContext(context);
  const path = routeToMemoryPath(route, safe);
  if (path === requested) {
    // Vue tabs can change without changing the route. Preserve their actual
    // context on the current memory entry; never push duplicate URLs.
    if (safe) pending = pending.then(() => {
      if (legacyMirrorRouter.currentRoute.value.path === path &&
          historyPosition >= 0 && historyEntries[historyPosition] === path) {
        historyContexts[historyPosition] = safe;
      }
    });
    return pending;
  }
  requested = path;
  const mode = historyMode === 'push' ? 'push' : 'replace';
  pending = pending.then(async () => {
    if (legacyMirrorRouter.currentRoute.value.path === path) {
      if (safe && historyPosition >= 0) historyContexts[historyPosition] = safe;
      return;
    }
    const failure = await legacyMirrorRouter[mode](path);
    if (!failure) {
      saveHistoryEntry(path, mode, safe);
      lastTransition = mode;
      // Keep the v0.134 diagnostic's meaning: count Vue MENU pushes only.
      if (mode === 'push' && !safe) pushCount++;
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
    historyPosition,
    // Only tiny validated context, no saved songs, editor data or audio.
    context: historyContexts[historyPosition] || null
  });
}
