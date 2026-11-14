import ArtistProfileDialog from './ArtistProfileDialog.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// The overlay/focus service retains its native fallback. Only the dialog body
// is handed to Vue; native code must not write inside it after mounting.
export function activateLegacyArtistProfiles({ mountVueFeature }) {
  const api = window.SUNOBOOM_ARTIST_PROFILES;
  if (!api?.profileSnapshot) return () => {};
  return observeLegacyIsland({
    root: document.body,
    selectTarget: root => root.querySelector('#sb-ap-dialog-body'),
    readSnapshot: () => api.profileSnapshot(),
    subscribe: callback => api.subscribe(callback),
    mount: node => mountVueFeature(node, ArtistProfileDialog, { api })
  });
}
