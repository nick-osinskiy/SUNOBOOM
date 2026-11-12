import IdeaFields from './IdeaFields.vue';
import LyricsSource from './LyricsSource.vue';
import LyricsTools from './LyricsTools.vue';
import { observeLegacyIslands } from '../legacy/observeLegacyIslands.js';

// Three independent Vue islands share one shallow observer. Original fields,
// poetry dictionary, save/cancel actions and HTML fallback remain native.
export function activateLegacyIdeaEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_IDEA_EDITOR;
  const root = document.getElementById('app');
  if (!api?.snapshot || !root) return () => {};
  return observeLegacyIslands({
    root,
    islands: [
      ['sb-vue-idea-fields', IdeaFields],
      ['sb-vue-lyrics-source', LyricsSource],
      ['sb-vue-lyrics-tools', LyricsTools]
    ].map(([id, component]) => ({
      key: id,
      selectTarget: parent => parent.querySelector('#' + id),
      // Capture live native form values, including edits made before Vue loaded.
      readSnapshot: () => api.snapshot(),
      mount: (node, initial) => mountVueFeature(node, component, { api, initial })
    }))
  });
}
