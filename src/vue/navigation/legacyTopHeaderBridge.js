import TopHeader from './TopHeader.vue';
import { normalizeTopHeader } from './top-header-model.js';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// Legacy chrome() and its notification wrapper render identical HTML fallback.
// Vue owns only the original top container; actions remain delegated to legacy.
export function activateLegacyTopHeader({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_HEADER;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('.top[data-sb-vue-top]'),
    readSnapshot: () => normalizeTopHeader(api.snapshot()),
    mount: (node, model) => mountVueFeature(node, TopHeader, { model })
  });
}
