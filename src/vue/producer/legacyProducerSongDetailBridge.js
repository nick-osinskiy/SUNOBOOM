import ProducerSongDetail from './ProducerSongDetail.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.186: only this legacy-rendered container is owned by Vue.
// Original data, actions, editors and complete HTML fallback stay authoritative.
export function activateLegacyProducerSongDetail({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-producer-detail[data-sb-vue-producer-host]'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, ProducerSongDetail, { model })
  });
}
