import StudioBuilder from './StudioBuilder.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// The Studio layout stays native; Vue takes over only the original grid.
// Arranger, Mixer, Auditor and delegated Studio actions remain siblings.
export function activateLegacyStudio({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_STUDIO;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('.studio-grid'),
    readSnapshot: () => api.snapshot(),
    mount: node => {
      const unmount = mountVueFeature(node, StudioBuilder, { api });
      // Preserve the original marker used by the native Studio integration.
      if (unmount) node.dataset.sbVueStudio = 'true';
      return unmount;
    }
  });
}
