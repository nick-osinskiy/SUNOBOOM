import SharedSongPage from './SharedSongPage.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacySharedSong({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_SHARED_SONG;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sbsong-shared'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, SharedSongPage, { model })
  });
}
