import PromptEditor from './PromptEditor.vue';

// Vue owns only the text fields; legacy save/cancel buttons, auditor link,
// validation, localStorage and original form markup remain authoritative.
export function activateLegacyPromptEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_PROMPT_EDITOR;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const node = root.querySelector('#sb-vue-prompt-form');
    if (current?.node === node) return;
    if (current) { current.unmount(); current = null; }
    if (!node) return;
    // Read the current native field values to retain edits made while Vue loads.
    const initial = api.snapshot();
    if (!initial) return;
    const unmount = mountVueFeature(node, PromptEditor, { initial });
    if (unmount) current = { node, unmount };
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => { disposed = true; observer.disconnect(); current?.unmount(); current = null; };
}
