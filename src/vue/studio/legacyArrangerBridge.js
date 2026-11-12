import ArrangementPanel from './ArrangementPanel.vue';
import ArrangementPicker from './ArrangementPicker.vue';
import ArrangementResult from './ArrangementResult.vue';
import { observeLegacyIslands } from '../legacy/observeLegacyIslands.js';

const targets = [
  ['#sba-cards', 'cards'],
  ['#sba-snake-track', 'snake'],
  ['#sba-transition-hub-list', 'transitions'],
  ['#sba-energy-chart', 'energy'],
  ['.sba-preset-picker', 'picker', ArrangementPicker],
  ['.sba-result', 'result', ArrangementResult]
];

/** v0.191: reuse one shallow observer for all six arranger islands.
 * The native composer, Academy presets, drag handlers and saved draft own data.
 * Each host keeps its original complete HTML fallback without Vue.
 */
export function activateLegacyArranger({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_ARRANGER;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIslands({
    root,
    islands: targets.map(([selector, kind, component = ArrangementPanel]) => ({
      key: kind,
      selectTarget: parent => parent.querySelector(selector),
      readSnapshot: () => api.snapshot(),
      mount: node => mountVueFeature(
        node, component, component === ArrangementPanel ? { api, kind } : { api }
      )
    }))
  });
}
