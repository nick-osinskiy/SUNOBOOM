import {availableIsland} from './feature-ownership.js';
// Explicit subscriptions for live native boundaries; no page collection.
// No DOM observer is installed by application startup.
// An optional external observer adapter remains injectable for isolated hosts.
export function observeLegacyIslands({
  root, islands, subscribe, beforeSync, createObserver
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
    // Navigation publishes the shared route before any of its roots mount.
    if (typeof beforeSync === 'function') beforeSync();
    for (const island of islands) {
      const target = availableIsland(island.selectTarget(root));
      const previous = active.get(island.key);
      // Opt-in structural revision: reactive active-state changes keep the host.
      const revision = typeof island.readRevision === 'function' ? island.readRevision() : undefined;
      if (previous?.target === target && target?.isConnected && previous.revision === revision) continue;
      if (previous) {
        active.delete(island.key);
        previous.unmount();
      }
      // Unavailable snapshots and detached hosts leave their native HTML intact.
      if (!target?.isConnected) continue;
      const snapshot = island.readSnapshot(target);
      if (!snapshot) continue;
      const unmount = island.mount(target, snapshot);
      if (typeof unmount === 'function') active.set(island.key, { target, revision, unmount });
    }
  }
  const observer = createObserver?.(sync);
  observer?.observe(root, { childList: true });
  // Optional native lifecycle events for islands created/closed below #app.
  // Keep the observer shallow: Vue's own DOM updates are not navigation.
  const unsubscribe = typeof subscribe === 'function' ? subscribe(sync) : null;
  if(typeof window!=='undefined')window.addEventListener('sunoboom:shell-rendered',sync);
  sync();
  return () => {
    if (disposed) return;
    disposed = true;
    if(typeof window!=='undefined')window.removeEventListener('sunoboom:shell-rendered',sync);
    observer?.disconnect();
    if (typeof unsubscribe === 'function') unsubscribe();
    for (const { unmount } of active.values()) unmount();
    active.clear();
  };
}
