import AccountSummary from './AccountSummary.vue';
import { observeLegacyIslands } from '../legacy/observeLegacyIslands.js';

// Keep both original containers: native stats scrolling belongs to the host.
export function activateLegacyAccountSummary({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_ACCOUNT_SUMMARY;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIslands({
    root,
    islands: [
      ['profile', 'sb-vue-account-profile'],
      ['stats', 'sb-vue-account-stats']
    ].map(([kind, id]) => ({
      key: kind,
      selectTarget: parent => parent.querySelector('#' + id),
      readSnapshot: () => api.snapshot(),
      mount: (node, model) => mountVueFeature(node, AccountSummary, { model, kind })
    }))
  });
}
