import TrackPassportList from './TrackPassportList.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.186: only this legacy-rendered container is owned by Vue.
// Original data, actions, editors and complete HTML fallback stay authoritative.
export function activateLegacyTrackPassportList({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_TRACK_LIST;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-track-list[data-sb-vue-track-list]'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, TrackPassportList, { model })
  });
}
