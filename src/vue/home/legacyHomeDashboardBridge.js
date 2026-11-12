import HomeDashboard from './HomeDashboard.vue';
import { legacyMirrorRouter } from '../navigation/legacy-router-mirror.js';
import { navigateFromVueShortcut } from '../navigation/navigation-dispatch.js';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// Existing records, HTML fallback and navigation stay controlled by legacy.
export function activateLegacyHomeDashboard({ mountVueFeature, sharedUi }) {
  const api = window.SUNOBOOM_LEGACY_DASHBOARD;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-dashboard'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => {
      sharedUi.publishDashboardStats(model);
      return mountVueFeature(node, HomeDashboard, {
        model,
        navigate: id => navigateFromVueShortcut(id, {
          router: legacyMirrorRouter,
          legacyApi: window.SUNOBOOM_LEGACY_NAV
        })
      });
    }
  });
}
