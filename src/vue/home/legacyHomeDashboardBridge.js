import HomeDashboard from './HomeDashboard.vue';

// The root app and all personal records remain controlled by legacy code.
// Mount only into the dashboard container whenever legacy render() replaces it.
export function activateLegacyHomeDashboard({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_DASHBOARD;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};

  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-dashboard');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = api.snapshot();
    if (!model) return;
    const unmount = mountVueFeature(node, HomeDashboard, { model });
    if (unmount) current = { node, unmount };
  }

  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => { disposed = true; observer.disconnect(); current?.unmount(); current = null; };
}
