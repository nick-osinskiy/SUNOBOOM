import ProjectCollection from './ProjectCollection.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// Only the project list is handed to Vue; forms and actions remain native.
export function activateLegacyProjectCollection({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PROJECT_LIST;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-projects-list'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, ProjectCollection, { model })
  });
}
