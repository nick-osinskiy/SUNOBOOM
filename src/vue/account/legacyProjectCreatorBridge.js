import ProjectCreator from './ProjectCreator.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacyProjectCreator({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PROJECT_CREATOR;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-project-creator'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, ProjectCreator, { initial: model })
  });
}
