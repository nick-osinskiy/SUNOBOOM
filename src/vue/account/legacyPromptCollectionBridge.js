import PromptCollection from './PromptCollection.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// Only the list is Vue-owned. Existing form, records, actions and fallback stay.
export function activateLegacyPromptCollection({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PROMPT_LIST;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-prompts-list'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, PromptCollection, { model })
  });
}
