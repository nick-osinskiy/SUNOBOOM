import PromptEditor from './PromptEditor.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.189: progressive enhancement of just the original HTML slot.
// Legacy forms, catalog state, actions, snapshots and fallback stay authoritative.
export function activateLegacyPromptEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PROMPT_EDITOR;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-prompt-form'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, PromptEditor, { initial: model })
  });
}
