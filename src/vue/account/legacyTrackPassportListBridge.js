import TrackPassportList from './TrackPassportList.vue';

// Original filter buttons and cards remain in the page HTML as the fallback.
// The legacy track module is the single source of records and actions.
export function activateLegacyTrackPassportList({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_TRACK_LIST;
  const root = document.getElementById('app');
  if (!api || typeof api.snapshot !== 'function' || !root) return () => {};

  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-track-list[data-sb-vue-track-list]');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, TrackPassportList, { model });
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
