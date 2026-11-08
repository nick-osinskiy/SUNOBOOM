import ProducerSongDetail from './ProducerSongDetail.vue';

// The legacy detail() function always renders the complete HTML fallback
// before Vue mounts. Only this one detail container is handed over to Vue.
export function activateLegacyProducerSongDetail({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PRODUCER_DETAIL;
  const root = document.getElementById('app');
  if (!api || typeof api.snapshot !== 'function' || !root) return () => {};

  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-producer-detail[data-sb-vue-producer-host]');
    if (current?.node === node) return;
    if (current) {
      current.unmount();
      current = null;
    }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, ProducerSongDetail, { model });
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
