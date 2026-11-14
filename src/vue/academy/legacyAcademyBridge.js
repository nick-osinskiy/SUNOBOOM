import AcademyCatalog from './AcademyCatalog.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.189: progressive enhancement of just the original HTML slot.
// Legacy forms, catalog state, actions, snapshots and fallback stay authoritative.
export function activateLegacyAcademy({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_ACADEMY;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-academy-root'),
    readSnapshot: () => {
      const model = api.snapshot();
      if (!model?.families?.length) return null;
      return model;
    },
    mount: (node, model) => {
      const unmount = mountVueFeature(node, AcademyCatalog, { artistProfiles: window.SUNOBOOM_ARTIST_PROFILES || null, snapshot: model, search: q => api.search(q), searchIcon: node.querySelector('label.search-box > svg')?.outerHTML || '', setExpanded: (kind, id, value) => api.setExpanded(kind, id, value) });
      if (!unmount) window.SUNOBOOM_ARTIST_PROFILES?.restoreNativeHub?.();
      return unmount;
    }
  });
}
