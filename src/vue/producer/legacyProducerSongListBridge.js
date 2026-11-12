import ProducerSongList from './ProducerSongList.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.186: only this legacy-rendered container is owned by Vue.
// Original data, actions, editors and complete HTML fallback stay authoritative.
export function activateLegacyProducerSongList({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PRODUCER_LIST;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sbpc-list[data-sb-vue-producer-list]'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, ProducerSongList, { model })
  });
}
