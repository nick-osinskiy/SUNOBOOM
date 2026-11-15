import { readonly, shallowRef } from 'vue';
import { activeNavigationRoute } from './nav-model.js';

// Read-only UI projection, with no router, navigation queue or history ledger.
const state = shallowRef(Object.freeze({ route: 'home', active: 'home', revision: 0 }));
export const currentRoute = readonly(state);

export function syncLegacyRoute(route) {
  const id = typeof route === 'string' && route ? route : 'home';
  if (id === state.value.route) return state.value;
  const next = Object.freeze({
    route: id,
    active: activeNavigationRoute(id),
    revision: state.value.revision + 1
  });
  state.value = next;
  return next;
}
