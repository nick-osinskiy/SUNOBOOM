import { routeToMemoryPath } from './legacy-router-mirror.js';
import { syncLegacyRoute } from './route-state.js';

// Only these existing dashboard shortcuts may open nested workspaces.
export const VUE_WORKSPACE_SHORTCUTS = Object.freeze(['myideas', 'myprompts', 'events']);

function dispatchVueRoute(id, { router, legacyApi, syncRoute = syncLegacyRoute } = {}, source) {
  if (typeof id !== 'string' || !id || !legacyApi ||
      typeof legacyApi.snapshot !== 'function') return false;
  const isMenu = source === 'menu';
  const available = legacyApi.snapshot()?.items;
  const allowed = isMenu
    ? Array.isArray(available) && available.some(item => item?.id === id)
    : VUE_WORKSPACE_SHORTCUTS.includes(id);
  const navigate = isMenu ? legacyApi.navigate : legacyApi.navigateWorkspace;
  if (!allowed || typeof navigate !== 'function') return false;

  let accepted = false;
  try {
    const destination = routeToMemoryPath(id);
    accepted = !!router?.resolve && router.resolve(destination)?.path === destination;
    if (!accepted) console.warn('[SUNOBOOM] Vue route unavailable; using legacy navigation:', id);
  } catch (error) {
    console.warn('[SUNOBOOM] Vue route resolution failed; using legacy navigation:', error);
  }
  // Exactly one legacy go(), followed by a memory-only sync; never double render.
  navigate.call(legacyApi, id);
  const selected = legacyApi.snapshot()?.active;
  syncRoute(selected, { historyMode: accepted && selected === id ? 'push' : 'replace', source });
  return true;
}

export function navigateFromVueMenu(id, options = {}) {
  return dispatchVueRoute(id, options, 'menu');
}

export function navigateFromVueShortcut(id, options = {}) {
  return dispatchVueRoute(id, options, 'shortcut');
}
