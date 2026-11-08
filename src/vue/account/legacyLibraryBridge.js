import LibraryCollection from './LibraryCollection.vue';

// Keep original saved() markup as an accessible fallback and all stored data in legacy.
export function activateLegacyLibrary({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_LIBRARY;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-library-collection');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, LibraryCollection, { model });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => { disposed = true; observer.disconnect(); current?.unmount(); current = null; };
}
