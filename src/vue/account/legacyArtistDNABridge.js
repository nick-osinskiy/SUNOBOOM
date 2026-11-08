import ArtistDNA from './ArtistDNA.vue';

// Only replace the DNA collection/detail. The classic editor remains its
// original HTML, and every view has an immediately available HTML fallback.
export function activateLegacyArtistDNA({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_DNA;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-dna-view');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, ArtistDNA, { model });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => { disposed = true; observer.disconnect(); current?.unmount(); current = null; };
}
