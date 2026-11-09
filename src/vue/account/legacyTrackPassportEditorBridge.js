import TrackPassportEditor from './TrackPassportEditor.vue';

// Preserve the original sbTrackForm() as a complete HTML fallback and mount
// Vue only in the dedicated editor host. Local records stay in legacy data.
export function activateLegacyTrackPassportEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_TRACK_EDITOR;
  const root = document.getElementById('app');
  if (!root || !api || typeof api.snapshot !== 'function') return () => {};

  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-track-editor[data-sb-vue-track-editor]');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, TrackPassportEditor, { model, api });
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
