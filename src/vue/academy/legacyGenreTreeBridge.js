import GenreTree from './GenreTree.vue';
import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';

// v0.193: the tree stays a sibling of the Academy catalog, never its child.
// Original <details>, catalog, navigation, search, zoom and fallback are native.
export function activateLegacyGenreTree({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_GENRE_TREE;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};

  return observeLegacyIsland({
    root,
    selectTarget: parent => {
      const details = parent.querySelector('#sb-genre-tree');
      return details?.open ? details.querySelector('#sb-gt-inner') : null;
    },
    readSnapshot: () => {
      const snapshot = api.snapshot();
      return snapshot?.trees?.length && snapshot?.genres?.length ? snapshot : null;
    },
    mount: (node, snapshot) => mountVueFeature(node, GenreTree, { snapshot, treeApi: api }),
    subscribe: sync => {
      // <details> changes the open attribute, not #app's direct children.
      // Let the browser settle native toggle/click handlers before mounting.
      const onToggle = event => {
        if (event.target.id === 'sb-genre-tree') queueMicrotask(sync);
      };
      const onReveal = event => {
        if (event.target.closest?.('[data-sb-gt-action="reveal"]')) queueMicrotask(sync);
      };
      document.addEventListener('toggle', onToggle, true);
      document.addEventListener('click', onReveal);
      return () => {
        document.removeEventListener('toggle', onToggle, true);
        document.removeEventListener('click', onReveal);
      };
    }
  });
}
