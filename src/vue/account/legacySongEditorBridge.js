import SongEditor from './SongEditor.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.187: Vue owns only the original display/editor host.
// Local media, autosave, actions and HTML fallback remain in legacy code.
export function activateLegacySongEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_SONG_EDITOR;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-song-editor'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, SongEditor, { api, model })
  });
}
