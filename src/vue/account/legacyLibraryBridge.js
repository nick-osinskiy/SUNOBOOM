import LibraryCollection from './LibraryCollection.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// Keep original legacy records, delegated actions and HTML fallback intact.
export function activateLegacyLibrary({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_LIBRARY;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-library-collection'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, LibraryCollection, { model })
  });
}
