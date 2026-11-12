import ArtistDNAEditor from './ArtistDNAEditor.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.189: progressive enhancement of just the original HTML slot.
// Legacy forms, catalog state, actions, snapshots and fallback stay authoritative.
export function activateLegacyArtistDNAEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_DNA_EDITOR;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-dna-editor'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, ArtistDNAEditor, { model, api })
  });
}
