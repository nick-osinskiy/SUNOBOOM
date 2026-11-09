import {
  legacyMemoryHistoryCandidate,
  legacyRouteFromMemoryPath,
  legacyRouterSnapshot,
  routeToMemoryPath,
  traverseLegacyMemoryHistory,
  whenLegacyRouterSettled
} from './legacy-router-mirror.js';
import { syncLegacyRoute } from './route-state.js';

// Only validated top-level routes and recorded genre details are replayed.
function restoreTarget(candidate, api) {
  if (!candidate || typeof api?.snapshot !== 'function') return null;
  const snapshot = api.snapshot();
  const topLevelId = legacyRouteFromMemoryPath(candidate.path);
  if (topLevelId && snapshot?.items?.some(item => item?.id === topLevelId)) {
    return { kind: 'menu', id: topLevelId };
  }
  const context = candidate.context;
  if (candidate.path === '/catalog/detail' && context?.kind === 'genre' &&
      typeof api.canRestoreGenre === 'function' && api.canRestoreGenre(context.id, context.tab) &&
      typeof api.restoreGenre === 'function') {
    return { kind: 'genre', id: context.id, tab: context.tab };
  }
  return null;
}

// Never intercept browser Back.
let restoring = false;

/** A single source of truth for visual button disabled state and restore guard. */
export function canRestoreLegacyMenuHistory(direction, { legacyApi } = {}) {
  if (restoring || !['back', 'forward'].includes(direction) ||
      typeof legacyApi?.snapshot !== 'function') return false;
  const candidate = legacyMemoryHistoryCandidate(direction);
  const snapshot = legacyApi.snapshot();
  return !!restoreTarget(candidate, legacyApi) &&
    legacyRouterSnapshot().path === routeToMemoryPath(snapshot?.active);
}


export async function restoreLegacyMenuHistory(direction, {
  legacyApi, syncRoute = syncLegacyRoute
} = {}) {
  if (restoring || !['back', 'forward'].includes(direction) || !legacyApi ||
      typeof legacyApi.snapshot !== 'function' ||
      typeof legacyApi.navigate !== 'function') return false;
  restoring = true;
  try {
    await whenLegacyRouterSettled();
    const candidate = legacyMemoryHistoryCandidate(direction);
    const target = restoreTarget(candidate, legacyApi);
    const before = legacyApi.snapshot();
    if (!target || legacyRouterSnapshot().path !== routeToMemoryPath(before?.active)) return false;

    const moved = await traverseLegacyMemoryHistory(direction);
    if (!moved) return false;
    if (target.kind === 'genre') {
      if (legacyApi.restoreGenre(target.id, target.tab) !== true) {
        // Restore was declined (e.g. deleted genre); repair the memory mirror
        // to match the actual legacy page, without touching browser history.
        syncRoute(legacyApi.snapshot()?.active);
        return false;
      }
    } else if (target.id === 'catalog' && before.active === 'detail' &&
               typeof legacyApi.returnToAcademy === 'function') {
      // The original Academy back logic restores search, accordion expansion
      // and scroll position. Do not replace it with go('catalog'), which
      // deliberately clears the catalog search.
      if (legacyApi.returnToAcademy() !== true) {
        syncRoute(legacyApi.snapshot()?.active);
        return false;
      }
    } else {
      legacyApi.navigate(target.id); // original go() executes once
    }
    const selected = legacyApi.snapshot()?.active;
    syncRoute(selected);
    return selected === (target.kind === 'genre' ? 'detail' : target.id);
  } catch (error) {
    console.warn('[SUNOBOOM] Vue history restore skipped; legacy navigation remains active.', error);
    return false;
  } finally {
    restoring = false;
  }
}
