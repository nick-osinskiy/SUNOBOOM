import PerformanceTags from './PerformanceTags.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// The original generator remains authoritative for validation, consent,
// settings, draft text and persistence. Only its UI island is mounted.
export function activateLegacyTags({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_TAGS;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vt-workbench'),
    readSnapshot: () => api.snapshot(),
    mount: node => mountVueFeature(node, PerformanceTags, { api })
  });
}
