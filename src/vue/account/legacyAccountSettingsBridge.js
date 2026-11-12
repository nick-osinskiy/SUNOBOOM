import AccountSettings from './AccountSettings.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// Original settings persistence, navigation and delegated actions stay intact.
export function activateLegacyAccountSettings({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_SETTINGS;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-account-settings'),
    readSnapshot: () => api.snapshot(),
    mount: (node, model) => mountVueFeature(node, AccountSettings, { model })
  });
}
