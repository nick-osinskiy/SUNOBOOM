import GenreMixer from './GenreMixer.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.188: Vue only owns this legacy-rendered host.
// Original audio, calculations, delegated actions and HTML fallback remain intact.
export function activateLegacyMixer({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_MIXER;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-mixer-root'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, GenreMixer, { api })
  });
}
