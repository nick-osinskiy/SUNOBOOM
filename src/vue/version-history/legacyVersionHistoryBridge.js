import VersionHistory from './VersionHistory.vue';

// This is a modal rendered as a direct body child, not inside #app.
// The original window.SUNOBOOM_VERSION_HISTORY controls opening, closing and fallback.
export function activateLegacyVersionHistory({ mountVueFeature }) {
  const api = window.SUNOBOOM_VERSION_HISTORY;
  if (!api?.snapshot || !document.body) return () => {};

  let mounted = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = document.getElementById('sb-vue-version-history');
    if (mounted?.node === node && node?.isConnected) return;
    if (mounted) { mounted.unmount(); mounted = null; }
    if (!node) return;

    const snapshot = api.snapshot();
    if (!snapshot || !Array.isArray(snapshot.releases)) return;
    const unmount = mountVueFeature(node, VersionHistory, {
      model: { ...snapshot, close: api.close }
    });
    if (unmount) mounted = { node, unmount };
  }

  const observer = new MutationObserver(sync);
  observer.observe(document.body, { childList: true });
  sync();
  return () => { disposed = true; observer.disconnect(); mounted?.unmount(); mounted = null; };
}
