import StudioBuilder from './StudioBuilder.vue';

/**
 * Mount inside the existing <div class="studio-grid"> rather than replacing
 * studio() or its wrappers. The arrangement, mixer and auditor panels remain
 * siblings and continue to execute their existing code.
 */
export function activateLegacyStudio({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_STUDIO;
  const root = document.getElementById('app');
  if (!root || !api || typeof api.snapshot !== 'function') return () => {};

  let current = null;
  let disposed = false;

  function sync() {
    if (disposed) return;
    const target = root.querySelector('.studio-grid');
    if (current?.target === target) return;
    if (current) {
      current.unmount();
      current = null;
    }
    if (!target || !api.snapshot()) return;
    const unmount = mountVueFeature(target, StudioBuilder, { api });
    if (unmount) {
      target.dataset.sbVueStudio = 'true';
      current = { target, unmount };
    }
  }

  // render() replaces direct children under #app. Vue changes descendants
  // of studio-grid only, so there is no MutationObserver re-render cycle.
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
