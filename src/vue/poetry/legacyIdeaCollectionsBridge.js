import IdeaCollections from './IdeaCollections.vue';

// Only the collections host is replaced. Existing delegated actions, storage
// and the independently mounted editor remain authoritative.
export function activateLegacyIdeaCollections({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_IDEA_COLLECTIONS;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-idea-collections');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, IdeaCollections, { model });
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
