import {
  legacyMemoryHistoryCandidate,
  legacyRouteFromMemoryPath,
  legacyRouterSnapshot,
  routeToMemoryPath,
  traverseLegacyMemoryHistory,
  whenLegacyRouterSettled
} from './legacy-router-mirror.js';
import { syncLegacyRoute } from './route-state.js';

// Only validated top-level routes and recorded genre/track details are replayed.
function actualMemoryPath(snapshot) {
  if (snapshot?.active === 'producer' && snapshot?.production?.id) return routeToMemoryPath('producer',{kind:'production',id:snapshot.production.id});
  const track = snapshot?.track;
  return routeToMemoryPath(snapshot?.active,
    track?.id ? { kind: 'track', id: track.id } : null);
}
function restoreTarget(candidate, api) {
  if (!candidate || typeof api?.snapshot !== 'function') return null;
  const snapshot = api.snapshot();
  // Never lose an unsaved passport editor by replaying a memory entry.
  if (snapshot?.trackEditing) return null;
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
  if (candidate.path === '/producer/detail' && context?.kind === 'production' && api.canRestoreProduction?.(context.id) === true) return {kind:'production',id:context.id};
  if (candidate.path === '/account/tracks' &&
      api.canRestoreTrackList?.() === true &&
      typeof api.restoreTrackList === 'function') {
    return { kind: 'track-list' };
  }
  if (candidate.path === '/account/tracks/detail' && context?.kind === 'track' &&
      api.canRestoreTrack?.(context.id) === true &&
      typeof api.restoreTrack === 'function') {
    return { kind: 'track', id: context.id };
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
    legacyRouterSnapshot().path === actualMemoryPath(snapshot);
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
    if (!target || legacyRouterSnapshot().path !== actualMemoryPath(before)) return false;

    const moved = await traverseLegacyMemoryHistory(direction);
    if (!moved) return false;
    if (target.kind === 'genre') {
      if (legacyApi.restoreGenre(target.id, target.tab) !== true) {
        // Restore was declined (e.g. deleted genre); repair the memory mirror
        // to match the actual legacy page, without touching browser history.
        syncRoute(legacyApi.snapshot()?.active);
        return false;
      }
    } else if (target.kind === 'production') {
      if (legacyApi.restoreProduction(target.id) !== true) { syncRoute(legacyApi.snapshot()?.active); return false; }
    } else if (target.kind === 'track-list') {
      if (legacyApi.restoreTrackList() !== true) {
        syncRoute(legacyApi.snapshot()?.active);
        return false;
      }
    } else if (target.kind === 'track') {
      if (legacyApi.restoreTrack(target.id) !== true) {
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
    const after = legacyApi.snapshot();
    const selected = after?.active;
    syncRoute(selected, { context: target.kind === 'track'
      ? { kind: 'track', id: target.id } : target.kind === 'production' ? {kind:'production',id:target.id} : null });
    if (target.kind === 'production') return selected === 'producer' && after?.production?.id === target.id;
    if (target.kind === 'track') return selected === 'tracks' && after?.track?.id === target.id;
    if (target.kind === 'track-list') return selected === 'tracks' && !after?.track && !after?.trackEditing;
    return selected === (target.kind === 'genre' ? 'detail' : target.id);
  } catch (error) {
    console.warn('[SUNOBOOM] Vue history restore skipped; legacy navigation remains active.', error);
    return false;
  } finally {
    restoring = false;
  }
}
