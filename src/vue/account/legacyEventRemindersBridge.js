import EventReminders from './EventReminders.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacyEventReminders({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_EVENT_REMINDERS;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-event-reminders'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, EventReminders, { initial: model })
  });
}
