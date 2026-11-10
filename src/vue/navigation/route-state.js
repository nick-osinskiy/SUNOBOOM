import { readonly, shallowRef } from 'vue';
import { activeNavigationRoute } from './nav-model.js';
import { syncLegacyRouterMirror } from './legacy-router-mirror.js';

// One reactive view of the EXISTING legacy route shared by every independent
// Vue island. No second router history or persisted user data.
const state = shallowRef(Object.freeze({ route: 'home', active: 'home', revision: 0 }));
export const currentRoute = readonly(state);

export function syncLegacyRoute(route, { historyMode = 'replace', context = null, source = 'legacy' } = {}) {
  const id = typeof route === 'string' && route ? route : 'home';
  // Vue menu clicks and validated genre openings may append to memory history.
  // Every other legacy route change replaces the in-memory entry.
  void syncLegacyRouterMirror(id, { historyMode, context, source });
  if (id === state.value.route) return state.value;
  const next = Object.freeze({
    route: id,
    active: activeNavigationRoute(id),
    revision: state.value.revision + 1
  });
  state.value = next;
  return next;
}
