import SongDetail from './SongDetail.vue';

// Mount only the detailed song card. The original section inside the host is
// kept as the fallback whenever the production Vue module is unavailable.
export function activateLegacySongDetail({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_SONG_DETAIL;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-song-detail');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, SongDetail, { api, model });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => { disposed = true; observer.disconnect(); current?.unmount(); current = null; };
}
