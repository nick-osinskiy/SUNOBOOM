import TrackPassportDetail from './TrackPassportDetail.vue';

// Own only the inner track passport detail. The original HTML, written first,
// remains a complete fallback when the production Vue bundle is unavailable.
export function activateLegacyTrackPassportDetail({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_TRACK_DETAIL;
  const root = document.getElementById('app');
  if (!api || typeof api.snapshot !== 'function' || !root) return () => {};

  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-track-detail[data-sb-vue-track-detail]');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, TrackPassportDetail, { model });
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
