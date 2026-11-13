import EventEditor from './EventEditor.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacyEventEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_EVENT_EDITOR;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-event-fields'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, EventEditor, { initial: model })
  });
}
