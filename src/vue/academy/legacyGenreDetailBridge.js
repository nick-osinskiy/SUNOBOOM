import GenreDetail from './GenreDetail.vue';

export function activateLegacyGenreDetail({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_GENRE;
  const root = document.getElementById('app');
  if (!root || !api || typeof api.snapshot !== 'function') return () => {};

  let current = null;
  let disposed = false;

  function sync() {
    if (disposed) return;
    const target = root.querySelector('#sb-vue-genre-detail');
    if (current?.target === target) return;
    if (current) {
      current.unmount();
      current = null;
    }
    if (!target) return;

    const genre = api.snapshot();
    if (!genre?.id) return;
    const unmount = mountVueFeature(target, GenreDetail, {
      genre,
      tabContent: (id, tab) => api.tabContent(id, tab),
      artistCatalog: window.SUNOBOOM_ARTIST_CATALOG || null,
      enhanceArtistProfiles: () => window.SUNOBOOM_ARTIST_PROFILES?.enhanceCards?.()
    });
    if (unmount) current = { target, unmount };
  }

  // The legacy render() swaps children under #app. Vue changes only
  // the dedicated genre root and therefore cannot cause a feedback loop.
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();

  return () => {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    current?.unmount();
    current = null;
  };
}
