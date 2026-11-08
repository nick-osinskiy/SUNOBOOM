import PromptAuditor from './PromptAuditor.vue';

/**
 * Migrate only the audit panel. The original rules, source selection,
 * editor handoff and clipboard confirmation remain in prompt-auditor.js.
 */
export function activateLegacyAuditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_AUDITOR;
  const root = document.getElementById('app');
  if (!api || !root || typeof api.snapshot !== 'function') return () => {};
  let current = null;
  let disposed = false;

  function sync() {
    if (disposed) return;
    const target = root.querySelector('#sbpa-auditor');
    if (current?.target === target) return;
    if (current) { current.unmount(); current = null; }
    if (!target || !api.snapshot()) return;
    const unmount = mountVueFeature(target, PromptAuditor, { api });
    if (unmount) current = { target, unmount };
  }

  // The legacy renderer only replaces direct #app children; Vue owns the
  // panel descendants, avoiding recursive MutationObserver remounts.
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
