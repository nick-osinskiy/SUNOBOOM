import TopHeader from './TopHeader.vue';
import { normalizeTopHeader } from './top-header-model.js';

// Vue owns only the three header children inside the original .top container.
// Legacy chrome() and its later notification wrapper still render full HTML
// when Vue is absent. No other part of #app is mounted twice.
export function activateLegacyTopHeader({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_HEADER;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  let current = null;
  let disposed = false;

  function sync() {
    if (disposed) return;
    const node = root.querySelector('.top[data-sb-vue-top]');
    if (current?.node === node && node?.isConnected) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    const model = normalizeTopHeader(api.snapshot());
    if (!model) return;
    const unmount = mountVueFeature(node, TopHeader, { model });
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
