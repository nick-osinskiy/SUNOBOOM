import IdeasPage from './IdeasPage.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacyIdeasPage({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_IDEAS_PAGE;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-ideas-page'),
    readSnapshot: () => api.snapshot(),
    mount: (node, initial) => mountVueFeature(node, IdeasPage, { initial })
  });
}
