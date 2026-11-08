import IdeaFields from './IdeaFields.vue';
import LyricsSource from './LyricsSource.vue';
import LyricsTools from './LyricsTools.vue';

/** Enhance disjoint islands; poetry analysis and vocal tags own their own hosts. */
export function activateLegacyIdeaEditor({ mountVueFeature }) {
  const api = window.SUNOBOOM_LEGACY_IDEA_EDITOR;
  const root = document.getElementById('app');
  if (!api || !root) return () => {};
  const active = new Map();
  let disposed = false;
  function sync() {
    if (disposed) return;
    for (const [id, component] of [
      ['sb-vue-idea-fields', IdeaFields],
      ['sb-vue-lyrics-source', LyricsSource],
      ['sb-vue-lyrics-tools', LyricsTools]
    ]) {
      const node = root.querySelector('#' + id);
      const previous = active.get(id);
      if (previous?.node === node) continue;
      if (previous) { previous.unmount(); active.delete(id); }
      if (!node) continue;
      // Capture the live fields, including edits made before the bundle loaded.
      const initial = api.snapshot();
      if (!initial) continue;
      const unmount = mountVueFeature(node, component, { api, initial });
      if (unmount) active.set(id, { node, unmount });
    }
  }
  const observer = new MutationObserver(sync);
  observer.observe(root, { childList: true });
  sync();
  return () => {
    disposed = true;
    observer.disconnect();
    for (const item of active.values()) item.unmount();
    active.clear();
  };
}
