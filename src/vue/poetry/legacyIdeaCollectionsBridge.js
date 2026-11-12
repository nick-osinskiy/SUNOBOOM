import IdeaCollections from './IdeaCollections.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// Keep original legacy records, delegated actions and HTML fallback intact.
export function activateLegacyIdeaCollections({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-idea-collections'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, IdeaCollections, { model })
  });
}
