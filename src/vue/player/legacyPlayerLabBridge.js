import PlayerLab from './PlayerLab.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.188: Vue only owns this legacy-rendered host.
// Original audio, calculations, delegated actions and HTML fallback remain intact.
export function activateLegacyPlayerLab({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PLAYER_LAB;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-player-lab'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, PlayerLab, { api, initialModel: model })
  });
}
