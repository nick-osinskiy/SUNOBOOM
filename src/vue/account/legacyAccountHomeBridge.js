import AccountHome from './AccountHome.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

export function activateLegacyAccountHome({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_ACCOUNT_HOME;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-account-home'),
    readSnapshot: node => {
      const initial = api.snapshot();
      // Draft capture is a UI handoff; the account model itself never reads HTML.
      const profileName=node.querySelector('#profile-name')?.value;
      return initial?.tiles ? {...initial,profileName:profileName??initial.profileName}:null;
    },
    mount: (node, initial) => mountVueFeature(node, AccountHome, { initial, api })
  });
}
