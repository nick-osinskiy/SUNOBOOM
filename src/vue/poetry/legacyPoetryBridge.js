import PoetryAnalysis from './PoetryAnalysis.vue';
import PoetryAmbiguities from './PoetryAmbiguities.vue';

/** Progressive enhancement only; the FSA dictionary and textarea mirror stay legacy. */
export function activateLegacyPoetry({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_POETRY;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let disposed = false;
  const active = new Map();

  function sync() {
    if (disposed) return;
    const slots = [
      ['analysis', '#sb-poetry-result', PoetryAnalysis],
      ['ambiguities', '#sb-poetry-ambiguous-choices', PoetryAmbiguities]
    ];
    for (const [key, selector, component] of slots) {
      const node = root.querySelector(selector);
      const old = active.get(key);
      if (old?.node === node) continue;
      if (old) { old.unmount(); active.delete(key); }
      if (!node) continue;
      const unmount = mountVueFeature(node, component, { api });
      if (unmount) active.set(key, { node, unmount });
    }
  }

  // Main route replacement is handled by the root observer; the async stress
  // card publishes its own ready event when its ambiguity slot is created.
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  window.addEventListener('sunoboom:poetry-stress-ready', sync);
  // Native apply/manual accent removes the preview below #app without a
  // top-level childList mutation. Unmount the orphaned Vue island explicitly.
  window.addEventListener('sunoboom:poetry-stress-closed', sync);
  sync();
  return () => {
    disposed = true;
    observer.disconnect();
    window.removeEventListener('sunoboom:poetry-stress-ready', sync);
    window.removeEventListener('sunoboom:poetry-stress-closed', sync);
    for (const item of active.values()) item.unmount();
    active.clear();
  };
}
