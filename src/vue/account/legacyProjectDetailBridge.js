import ProjectDetail from './ProjectDetail.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacyProjectDetail({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PROJECT_DETAIL;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-project-detail'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, ProjectDetail, { initial: model })
  });
}
