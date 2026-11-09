import { routeToMemoryPath } from './legacy-router-mirror.js';
import { syncLegacyRoute } from './route-state.js';

// Only Vue menu clicks enter here. Vue Router resolves the intended in-memory
// destination, while old go() remains the ONLY owner of actual navigation.
// The route-state bridge can push to Vue Router's MEMORY history after go(),
// but no browser URL/history or page content is changed by the new router.
export function navigateFromVueMenu(id, { router, legacyApi, syncRoute = syncLegacyRoute } = {}) {
  if (typeof id !== 'string' || !id || !legacyApi ||
      typeof legacyApi.snapshot !== 'function' ||
      typeof legacyApi.navigate !== 'function') return false;

  const available = legacyApi.snapshot()?.items;
  if (!Array.isArray(available) || !available.some(item => item?.id === id)) return false;

  // Use the same Vue Router instance the menu installed via useRouter().
  // Its memory-only resolution is advisory; a broken router must not disable
  // existing legacy buttons.
  let routeAccepted = false;
  try {
    const destination = routeToMemoryPath(id);
    routeAccepted = !!router?.resolve && router.resolve(destination)?.path === destination;
    if (!routeAccepted) {
      console.warn('[SUNOBOOM] Vue route could not resolve; using legacy navigation:', id);
    }
  } catch (error) {
    console.warn('[SUNOBOOM] Vue route resolution failed; using legacy navigation:', error);
  }

  // Exactly one legacy dispatch. Only the REAL resulting view.nav is mirrored;
  // a valid Vue-menu click adds one in-memory history entry, while a broken
  // resolver falls back to the already-working replace-only mechanism.
  legacyApi.navigate(id);
  const selected = legacyApi.snapshot()?.active;
  syncRoute(selected, { historyMode: routeAccepted && selected === id ? 'push' : 'replace' });
  return true;
}
