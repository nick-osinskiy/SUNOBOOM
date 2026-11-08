import PerformanceTags from './PerformanceTags.vue';

/** Keep the original validation, consent and persistence handlers authoritative. */
export function activateLegacyTags({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_TAGS;
  const root = document.getElementById('app');
  if (!api || !root || typeof api.snapshot !== 'function') return () => {};

  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const target = root.querySelector('#sb-vt-workbench');
    if (current?.target === target) return;
    if (current) { current.unmount(); current = null; }
    if (!target || !api.snapshot()) return;
    const unmount = mountVueFeature(target, PerformanceTags, { api });
    if (unmount) current = { target, unmount };
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
