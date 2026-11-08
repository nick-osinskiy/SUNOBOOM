import PlayerAB from './PlayerAB.vue';

// The two A/B Audio elements, blob URLs, review scores and notes stay in player-ab.js.
// This Vue slot owns only markup; original compareHTML() is the fallback.
export function activateLegacyPlayerAB({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PLAYER_AB;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null, disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-player-ab');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, PlayerAB, { api, initialModel: model });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => {
    disposed = true;
    observer.disconnect();
    if (current) current.unmount();
    current = null;
  };
}
