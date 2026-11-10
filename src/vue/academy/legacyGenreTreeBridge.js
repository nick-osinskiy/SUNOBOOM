import GenreTree from './GenreTree.vue';

// #sb-genre-tree is deliberately a sibling, NEVER a child, of #sb-vue-academy-root.
// Legacy catalog() and the original tree controls remain as an offline/failure fallback.
export function activateLegacyGenreTree({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_GENRE_TREE;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  let current = null;
  let disposed = false;

  function sync() {
    if (disposed) return;
    const details = root.querySelector('#sb-genre-tree');
    const target = details?.open ? details.querySelector('#sb-gt-inner') : null;
    if (current?.target === target && target?.isConnected) return;
    if (current) { current.unmount(); current = null; }
    if (!target) return;
    const snapshot = api.snapshot();
    if (!snapshot?.trees?.length || !snapshot?.genres?.length) return;
    const unmount = mountVueFeature(target, GenreTree, { snapshot, treeApi: api });
    if (unmount) current = { target, unmount };
  }

  // The legacy shell replaces #app's direct children on every route change.
  // Only observe that shallow boundary; Vue's own DOM updates must not re-mount it.
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });

  // Opening and closing <details> changes an attribute, not the root children.
  const onToggle = event => {
    if (event.target.id === 'sb-genre-tree') queueMicrotask(sync);
  };
  const onReveal = event => {
    if (event.target.closest?.('[data-sb-gt-action="reveal"]')) queueMicrotask(sync);
  };
  document.addEventListener('toggle', onToggle, true);
  document.addEventListener('click', onReveal);
  sync();
  return () => {
    disposed = true;
    observer.disconnect();
    document.removeEventListener('toggle', onToggle, true);
    document.removeEventListener('click', onReveal);
    current?.unmount();
    current = null;
  };
}
