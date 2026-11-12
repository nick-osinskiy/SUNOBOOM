import ArtistManager from './ArtistManager.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// Keep original legacy records, delegated actions and HTML fallback intact.
export function activateLegacyArtistManager({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_ARTIST_MANAGER;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-artist-manager'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, ArtistManager, { model })
  });
}
