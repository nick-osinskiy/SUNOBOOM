import AcademyCatalog from './AcademyCatalog.vue';

// The legacy app owns #app and the real GENRES data. Vue owns the catalog's
// search controls and nested family UI only while the Academy route is active.
export function activateLegacyAcademy({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_ACADEMY;
  const appRoot = document.getElementById('app');
  if (!api || !appRoot || typeof api.snapshot !== 'function') return () => {};

  let current = null;
  let disposed = false;

  function sync() {
    if (disposed) return;
    const target = appRoot.querySelector('#sb-vue-academy-root');
    if (current?.target === target) return;
    if (current) {
      current.unmount();
      current = null;
    }
    if (!target) return;
    const snapshot = api.snapshot();
    if (!snapshot?.families?.length) return;
    const searchIcon = appRoot.querySelector('#sb-vue-academy-root label.search-box > svg')?.outerHTML || '';
    const unmount = mountVueFeature(target, AcademyCatalog, {
      snapshot,
      search: q => api.search(q),
      searchIcon,
      setExpanded: (kind, id, value) => api.setExpanded(kind, id, value)
    });
    if (unmount) current = { target, unmount };
  }

  // The legacy render() replaces children directly under #app. Deep Vue
  // updates never reach this observer, preventing re-mount feedback loops.
  const observer = new MutationObserver(sync);
  observer.observe(appRoot, { childList: true });
  sync();

  return () => {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    current?.unmount();
    current = null;
  };
}
