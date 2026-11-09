import { routeToMemoryPath } from './legacy-router-mirror.js';
import { syncLegacyRoute } from './route-state.js';

// Only Vue menu clicks enter here. Vue Router resolves the intended in-memory
// destination, while the old go() remains the ONLY owner of actual navigation.
// Do not call router.push/replace here: that would trigger two route changes,
// and browser URLs must stay intact until the shell itself has been migrated.
export function navigateFromVueMenu(id, { router, legacyApi, syncRoute = syncLegacyRoute } = {}) {
  if (typeof id !== 'string' || !id || !legacyApi ||
      typeof legacyApi.snapshot !== 'function' ||
      typeof legacyApi.navigate !== 'function') return false;

  const available = legacyApi.snapshot()?.items;
  if (!Array.isArray(available) || !available.some(item => item?.id === id)) return false;

  // Use the same Vue Router instance the menu installed via useRouter().
  // Its memory-only resolution is advisory; a broken router must not disable
  // existing legacy buttons.
  try {
    const destination = routeToMemoryPath(id);
    if (router?.resolve && router.resolve(destination)?.path !== destination) {
      console.warn('[SUNOBOOM] Vue route could not resolve; using legacy navigation:', id);
    }
  } catch (error) {
    console.warn('[SUNOBOOM] Vue route resolution failed; using legacy navigation:', error);
  }

  // Exactly one legacy dispatch. All original handlers, data and render()
  // remain authoritative; the mirror gets the route actually selected by go().
  legacyApi.navigate(id);
  syncRoute(legacyApi.snapshot()?.active);
  return true;
}
