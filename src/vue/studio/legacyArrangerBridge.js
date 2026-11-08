import ArrangementPanel from './ArrangementPanel.vue';
import ArrangementPicker from './ArrangementPicker.vue';
import ArrangementResult from './ArrangementResult.vue';

const targets = [
  ['#sba-cards', 'cards'],
  ['#sba-snake-track', 'snake'],
  ['#sba-transition-hub-list', 'transitions'],
  ['#sba-energy-chart', 'energy'],
  ['.sba-preset-picker', 'picker', ArrangementPicker],
  ['.sba-result', 'result', ArrangementResult]
];

/** Keep the existing composer, Academy recommendations and drag handlers. */
export function activateLegacyArranger({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_ARRANGER;
  const root = document.getElementById('app');
  if (!root || !api || typeof api.snapshot !== 'function') return () => {};

  const active = new Map();
  let disposed = false;
  function sync() {
    if (disposed) return;
    for (const [selector, kind, component = ArrangementPanel] of targets) {
      const target = root.querySelector(selector);
      const old = active.get(kind);
      if (old?.target === target) continue;
      if (old) { old.unmount(); active.delete(kind); }
      if (!target || !api.snapshot()) continue;
      const unmount = mountVueFeature(target, component, component === ArrangementPanel ? { api, kind } : { api });
      if (unmount) active.set(kind, { target, unmount });
    }
  }

  // Observe only the outer route replacement, not Vue's internal changes.
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();

  return () => {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    for (const value of active.values()) value.unmount();
    active.clear();
  };
}
