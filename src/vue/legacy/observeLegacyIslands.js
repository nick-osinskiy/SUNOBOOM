// v0.190: one shallow observer for several independent legacy Vue hosts.
// Do not observe descendants: Vue updates and text input must not trigger remounts.
export function observeLegacyIslands({
  root, islands, subscribe, createObserver = callback => new MutationObserver(callback)
}) {
  if (!root || !Array.isArray(islands) || !islands.length ||
      islands.some(item => !item || typeof item.key !== 'string' ||
        !item.key || typeof item.selectTarget !== 'function' ||
        typeof item.readSnapshot !== 'function' || typeof item.mount !== 'function') ||
      new Set(islands.map(item => item.key)).size !== islands.length)
    return () => {};

  const active = new Map();
  let disposed = false;
  function sync() {
    if (disposed) return;
    for (const island of islands) {
      const target = island.selectTarget(root);
      const previous = active.get(island.key);
      if (previous?.target === target && target?.isConnected) continue;
      if (previous) {
        active.delete(island.key);
        previous.unmount();
      }
      // Unavailable snapshots and detached hosts leave their native HTML intact.
      if (!target?.isConnected) continue;
      const snapshot = island.readSnapshot(target);
      if (!snapshot) continue;
      const unmount = island.mount(target, snapshot);
      if (typeof unmount === 'function') active.set(island.key, { target, unmount });
    }
  }
  const observer = createObserver(sync);
  observer.observe(root, { childList: true });
  // Optional native lifecycle events for islands created/closed below #app.
  // Keep the observer shallow: Vue's own DOM updates are not navigation.
  const unsubscribe = typeof subscribe === 'function' ? subscribe(sync) : null;
  sync();
  return () => {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    if (typeof unsubscribe === 'function') unsubscribe();
    for (const { unmount } of active.values()) unmount();
    active.clear();
  };
}
