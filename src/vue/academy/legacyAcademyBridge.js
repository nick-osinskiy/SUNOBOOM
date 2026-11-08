import GenreCards from './GenreCards.vue';

// Only the existing Academy genre card grids are owned by Vue.
// Legacy markup remains in the DOM until Vue has mounted successfully.
export function activateLegacyAcademy({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_ACADEMY;
  const root = document.getElementById('app');
  if (!api || !root || typeof api.genreCards !== 'function') return () => {};

  const mounted = new Map();
  let disposed = false;
  const selector = '#catalog-cards .genre-grid';

  function sync() {
    if (disposed) return;

    const grids = Array.from(root.querySelectorAll(selector));
    const current = new Set(grids);

    // The legacy render() / filterCatalog() can replace entire lists.
    // Release old Vue apps on disconnected grids.
    for (const [node, unmount] of mounted) {
      if (current.has(node)) continue;
      unmount();
      mounted.delete(node);
    }

    for (const node of grids) {
      if (mounted.has(node)) continue;
      const cards = Array.from(node.querySelectorAll(':scope > button.genre-card[data-id]'));
      if (cards.length === 0) continue;
      const genres = api.genreCards(cards.map(card => card.dataset.id));
      // Retain the original HTML on incomplete mappings instead of dropping cards.
      if (genres.length !== cards.length) continue;

      const unmount = mountVueFeature(node, GenreCards, { genres });
      if (!unmount) continue;
      node.dataset.sbVueAcademy = 'true';
      mounted.set(node, unmount);
    }
  }

  // Vue changes children of .genre-grid, not the #catalog-cards container.
  // Observe only the two legacy replacement points to prevent feedback loops.
  const observer = new MutationObserver(mutations => {
    if (mutations.some(({ target }) => target === root || target.id === 'catalog-cards')) {
      sync();
    }
  });
  observer.observe(root, { childList: true, subtree: true });
  sync();

  return () => {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    for (const unmount of mounted.values()) unmount();
    mounted.clear();
  };
}
