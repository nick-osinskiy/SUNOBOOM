import GenreDetail from './GenreDetail.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.189: progressive enhancement of just the original HTML slot.
// Legacy forms, catalog state, actions, snapshots and fallback stay authoritative.
export function activateLegacyGenreDetail({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_GENRE;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#sb-vue-genre-detail'),
    readSnapshot: () => {
      const model = api.snapshot();
      if (!model?.id) return null;
      return model;
    },
    mount: (node, model) => mountVueFeature(node, GenreDetail, { genre: model, tabContent: (id, tab) => api.tabContent(id, tab), artistCatalog: window.SUNOBOOM_ARTIST_CATALOG || null, enhanceArtistProfiles: () => window.SUNOBOOM_ARTIST_PROFILES?.enhanceCards?.() })
  });
}
