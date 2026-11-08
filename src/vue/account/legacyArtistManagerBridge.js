import ArtistManager from './ArtistManager.vue';

// The legacy section is always rendered first so a failed/missing Vue bundle
// keeps artist add/search/remove and existing song references functional.
export function activateLegacyArtistManager({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_ARTIST_MANAGER;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-artist-manager');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, ArtistManager, { model });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => { disposed = true; observer.disconnect(); current?.unmount(); current = null; };
}
