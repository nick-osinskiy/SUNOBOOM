import ArtistDNA from './ArtistDNA.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// Keep original legacy records, delegated actions and HTML fallback intact.
export function activateLegacyArtistDNA({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_DNA;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-dna-view'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, ArtistDNA, { model })
  });
}
