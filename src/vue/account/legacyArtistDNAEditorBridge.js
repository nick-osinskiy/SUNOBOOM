import ArtistDNAEditor from './ArtistDNAEditor.vue';

// The original editor is always rendered inside the host before Vue mounts.
// Legacy actions, validation and localStorage remain functional as fallback.
export function activateLegacyArtistDNAEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_DNA_EDITOR;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-dna-editor');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, ArtistDNAEditor, { model, api });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => { disposed = true; observer.disconnect(); current?.unmount(); current = null; };
}
