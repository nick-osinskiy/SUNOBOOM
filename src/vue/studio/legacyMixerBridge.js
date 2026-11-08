import GenreMixer from './GenreMixer.vue';

/** Vue owns only the mixer page; legacy action handlers and storage remain authoritative. */
export function activateLegacyMixer({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_MIXER;
  const root = document.getElementById('app');
  if (!api || !root || typeof api.snapshot !== 'function') return () => {};

  let current = null;
  let disposed = false;
  function sync() {
    if (disposed) return;
    const target = root.querySelector('#sb-vue-mixer-root');
    if (current?.target === target) return;
    if (current) { current.unmount(); current = null; }
    if (!target || !api.snapshot()) return;
    const unmount = mountVueFeature(target, GenreMixer, { api });
    if (unmount) current = { target, unmount };
  }
  // Legacy render() replaces direct children under #app, not Vue's descendants.
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
