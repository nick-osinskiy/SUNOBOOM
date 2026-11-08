import SongCards from './SongCards.vue';

// Mount only the collection cards; forms, take manager and A/B audio remain legacy.
// The original grid inside this host is a functional fallback if Vue fails to load.
export function activateLegacySongCards({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_SONG_CARDS;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-song-cards');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node || !api.snapshot()) return;
    const unmount = mountVueFeature(node, SongCards, { api });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => { disposed = true; observer.disconnect(); current?.unmount(); current = null; };
}
