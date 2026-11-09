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
    if (!id || !Array.isArray(before?.items) ||
        !before.items.some(item => item?.id === id)) return false;

    // Do not restore when the old page has diverged from Vue Router's memory
    // cursor, e.g. due to a form transition still being rendered.
    if (legacyRouterSnapshot().path !== routeToMemoryPath(before.active)) return false;

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
