import PlayerLab from './PlayerLab.vue';

// Only the main LAB layout is Vue-owned. A/B mode tabs and the independent
// comparator are mounted outside this slot by the original player-ab.js.
export function activateLegacyPlayerLab({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PLAYER_LAB;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null, disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-player-lab');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, PlayerLab, { api, initialModel: model });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => {
    disposed = true; observer.disconnect();
    if (current) current.unmount();
    current = null;
  };
}
