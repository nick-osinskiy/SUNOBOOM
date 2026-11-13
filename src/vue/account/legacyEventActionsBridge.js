import EventActions from './EventActions.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacyEventActions({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_EVENT_ACTIONS;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-event-actions'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, EventActions, { model })
  });
}
