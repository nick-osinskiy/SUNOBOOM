// One-way adapter: settings.js remains authoritative for persistence, theme
// class changes, system color-scheme listening, reset and the start page.
export function activateLegacyAppearance({ sharedUi }) {
  const api = window.SUNOBOOM_LEGACY_SETTINGS;
  if (!api || typeof api.snapshot !== 'function' || !sharedUi?.publishAppearance) return () => {};
  let disposed = false;
  function sync() {
    if (disposed) return;
    sharedUi.publishAppearance(api.snapshot());
  }

  // The legacy module emits after apply() including OS appearance changes.
  // The initial read catches the earlier synchronous load()/apply() at startup.
  window.addEventListener('sunoboom:appearance-change', sync);
  sync();
  return () => {
    disposed = true;
    window.removeEventListener('sunoboom:appearance-change', sync);
  };
}
