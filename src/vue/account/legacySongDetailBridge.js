import SongDetail from './SongDetail.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.187: Vue owns only the original display/editor host.
// Local media, autosave, actions and HTML fallback remain in legacy code.
export function activateLegacySongDetail({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_SONG_DETAIL;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-song-detail'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, SongDetail, { api, model })
  });
}
