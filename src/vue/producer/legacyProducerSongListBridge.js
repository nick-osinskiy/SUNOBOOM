import ProducerSongList from './ProducerSongList.vue';

// Rendered original cards are the fallback. Vue mounts only into #sbpc-list;
// no user record or form field is owned by this bridge.
export function activateLegacyProducerSongList({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PRODUCER_LIST;
  const root = document.getElementById('app');
  if (!api || typeof api.snapshot !== 'function' || !root) return () => {};
  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sbpc-list[data-sb-vue-producer-list]');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, ProducerSongList, { model });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => {
    disposed = true;
    observer.disconnect();
    current?.unmount();
    current = null;
  };
}
