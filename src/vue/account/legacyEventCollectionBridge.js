import EventCollection from './EventCollection.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacyEventCollection({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_EVENT_LIST;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-events-list'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, EventCollection, { model })
  });
}
