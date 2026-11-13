import AccountHome from './AccountHome.vue';
import { readAccountTiles } from './account-home-model.js';
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
      const tiles = readAccountTiles(node);
      return initial && tiles ? { ...initial, tiles } : null;
    },
    mount: (node, initial) => mountVueFeature(node, AccountHome, { initial, api })
  });
}
