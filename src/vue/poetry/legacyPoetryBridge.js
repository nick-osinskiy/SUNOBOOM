import PoetryAnalysis from './PoetryAnalysis.vue';
import PoetryAmbiguities from './PoetryAmbiguities.vue';
import { observeLegacyIslands } from '../legacy/observeLegacyIslands.js';

/** v0.192: one shallow lifecycle for poetry analysis and async stress choices.
 * Native FSA dictionary, textarea, manual stress and save/copy stay authoritative.
 */
export function activateLegacyPoetry({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_POETRY;
  const root = document.getElementById('app');
  if (!api?.analysis || !api?.ambiguities || !root) return () => {};

  return observeLegacyIslands({
    root,
    islands: [
      ['analysis', '#sb-poetry-result', PoetryAnalysis],
      ['ambiguities', '#sb-poetry-ambiguous-choices', PoetryAmbiguities]
    ].map(([key, selector, component]) => ({
      key,
      selectTarget: parent => parent.querySelector(selector),
      // Both Vue components read current analysis/ambiguity data from api.
      // There is no separate poetry snapshot or copied lyrics.
      readSnapshot: () => api,
      mount: node => mountVueFeature(node, component, { api })
    })),
    subscribe: sync => {
      // Ready creates the nested ambiguity host; closed removes it without
      // a direct-child mutation of #app. Both must trigger an explicit sync.
      const events = ['sunoboom:poetry-stress-ready', 'sunoboom:poetry-stress-closed'];
      for (const event of events) window.addEventListener(event, sync);
      return () => {
        for (const event of events) window.removeEventListener(event, sync);
      };
    }
  });
}
