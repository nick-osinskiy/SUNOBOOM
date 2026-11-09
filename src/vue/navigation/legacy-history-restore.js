import {
  legacyMemoryHistoryCandidate,
  legacyRouteFromMemoryPath,
  legacyRouterSnapshot,
  routeToMemoryPath,
  traverseLegacyMemoryHistory,
  whenLegacyRouterSettled
} from './legacy-router-mirror.js';
import { syncLegacyRoute } from './route-state.js';

// Only top-level visible routes are replayed. Never intercept browser Back.
let restoring = false;

/** A single source of truth for visual button disabled state and restore guard. */
export function canRestoreLegacyMenuHistory(direction, { legacyApi } = {}) {
  if (restoring || !['back', 'forward'].includes(direction) ||
      typeof legacyApi?.snapshot !== 'function') return false;
  const candidate = legacyMemoryHistoryCandidate(direction);
  const id = legacyRouteFromMemoryPath(candidate?.path);
  const snapshot = legacyApi.snapshot();
  return !!id && Array.isArray(snapshot?.items) &&
    snapshot.items.some(item => item?.id === id) &&
    legacyRouterSnapshot().path === routeToMemoryPath(snapshot.active);
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
    const id = legacyRouteFromMemoryPath(candidate?.path);
    const before = legacyApi.snapshot();
    // Checked using the same rules as the visible toolbar. A busy guard is
    // handled by the restoring lock above, so do not call the public helper.
    if (!id || !Array.isArray(before?.items) ||
        !before.items.some(item => item?.id === id) ||
        legacyRouterSnapshot().path !== routeToMemoryPath(before.active)) return false;

    const moved = await traverseLegacyMemoryHistory(direction);
    if (!moved) return false;
    legacyApi.navigate(id); // original go() executes once
    const selected = legacyApi.snapshot()?.active;
    syncRoute(selected);
    return selected === id;
  } catch (error) {
    console.warn('[SUNOBOOM] Vue history restore skipped; legacy navigation remains active.', error);
    return false;
  } finally {
    restoring = false;
  }
}
