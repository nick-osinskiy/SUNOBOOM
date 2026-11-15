import {availableIsland} from './feature-ownership.js';
// Explicit subscriptions for live native boundaries; no page collection.
// No DOM observer is installed by application startup.
// An optional external observer adapter remains injectable for isolated hosts.
export function observeLegacyIsland({
  root, selectTarget, readSnapshot, mount, subscribe, readRevision,
  createObserver
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
    const target = availableIsland(selectTarget(root));
    const revision=typeof readRevision==='function'?readRevision(target):undefined;
    if (current?.target === target && target?.isConnected&&current.revision===revision) return;
    unmountCurrent();
    // A detached old host must never be mounted again. Its original HTML
    // remains the fallback when a snapshot is unavailable or mounting fails.
    if (!target?.isConnected) return;
    const snapshot = readSnapshot(target);
    if (!snapshot) return;
    const unmount = mount(target, snapshot);
    if (typeof unmount === 'function') current = { target, unmount, revision };
  }

  const observer = createObserver?.(sync);
  observer?.observe(root, { childList: true });
  // Optional external events (e.g. <details> toggle) do not alter #app children.
  const unsubscribe = typeof subscribe === 'function' ? subscribe(sync) : null;
  if(typeof window!=='undefined')window.addEventListener('sunoboom:shell-rendered',sync);
  sync();

  return () => {
    if (disposed) return;
    disposed = true;
    if(typeof window!=='undefined')window.removeEventListener('sunoboom:shell-rendered',sync);
    observer?.disconnect();
    if (typeof unsubscribe === 'function') unsubscribe();
    unmountCurrent();
  };
}
