import PromptAuditor from './PromptAuditor.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.188: Vue only owns this legacy-rendered host.
// Original audio, calculations, delegated actions and HTML fallback remain intact.
export function activateLegacyAuditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_AUDITOR;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sbpa-auditor'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, PromptAuditor, { api })
  });
}
