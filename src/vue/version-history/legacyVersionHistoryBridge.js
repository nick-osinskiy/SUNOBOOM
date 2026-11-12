import VersionHistory from './VersionHistory.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// The modal is a direct body child. Its releases and close handler remain
// legacy-owned, including when the compiled Vue bundle is unavailable.
export function activateLegacyVersionHistory({ mountVueFeature }) {
  const api = window.SUNOBOOM_VERSION_HISTORY;
  if (!api?.snapshot || !document.body) return () => {};
  return observeLegacyIsland({
    root: document.body,
    selectTarget: parent => parent.querySelector('#sb-vue-version-history'),
    readSnapshot: () => {
      const model = api.snapshot();
      return model && Array.isArray(model.releases) ? model : null;
    },
    mount: (node, model) => mountVueFeature(node, VersionHistory, {
      model: { ...model, close: api.close }
    })
  });
}
