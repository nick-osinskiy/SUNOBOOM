// v0.184 — one lifecycle for simple Vue islands inside the original HTML shell.
// Observe only direct child replacement on the supplied root. Observing subtree
// would make Vue's own render trigger unnecessary remounts and input loss.
export function observeLegacyIsland({
  root, selectTarget, readSnapshot, mount, subscribe,
  createObserver = callback => new MutationObserver(callback)
}) {
  if (!root || typeof selectTarget !== 'function' ||
      typeof readSnapshot !== 'function' || typeof mount !== 'function')
    return () => {};

  let disposed = false;
  let current = null;

  function unmountCurrent() {
    const previous = current;
    current = null;
    if (previous) previous.unmount();
  }

  function sync() {
    if (disposed) return;
    const target = selectTarget(root);
    if (current?.target === target && target?.isConnected) return;
    unmountCurrent();
    // A detached old host must never be mounted again. Its original HTML
    // remains the fallback when a snapshot is unavailable or mounting fails.
    if (!target?.isConnected) return;
    const snapshot = readSnapshot(target);
    if (!snapshot) return;
    const unmount = mount(target, snapshot);
    if (typeof unmount === 'function') current = { target, unmount };
  }

  const observer = createObserver(sync);
  observer.observe(root, { childList: true });
  // Optional external events (e.g. <details> toggle) do not alter #app children.
  const unsubscribe = typeof subscribe === 'function' ? subscribe(sync) : null;
  sync();

  return () => {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    if (typeof unsubscribe === 'function') unsubscribe();
    unmountCurrent();
  };
}
