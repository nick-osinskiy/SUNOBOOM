import SongCards from './SongCards.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.187: Vue owns only the original display/editor host.
// Local media, autosave, actions and HTML fallback remain in legacy code.
export function activateLegacySongCards({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_SONG_CARDS;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-song-cards'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, SongCards, { api })
  });
}
