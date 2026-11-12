import TrackPassportEditor from './TrackPassportEditor.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.187: Vue owns only the original display/editor host.
// Local media, autosave, actions and HTML fallback remain in legacy code.
export function activateLegacyTrackPassportEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_TRACK_EDITOR;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-track-editor[data-sb-vue-track-editor]'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, TrackPassportEditor, { model, api })
  });
}
