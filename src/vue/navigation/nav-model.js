// Pure navigation mapping: one source of truth is the legacy navs array.
// Keep this module dependency-free so it can be tested with Node.js.
const ACCOUNT_PAGES = new Set([
  'projects', 'saved', 'myideas', 'myprompts', 'events', 'tracks', 'artists'
]);

export function activeNavigationRoute(route) {
  if (route === 'detail') return 'catalog';
  return ACCOUNT_PAGES.has(route) ? 'account' : route;
}

export function navigationSnapshot(raw) {
  const active = activeNavigationRoute(raw?.active);
  const seen = new Set();
  let mixerShown = false;
  const items = [];

  for (const entry of Array.isArray(raw?.items) ? raw.items : []) {
    const id = typeof entry?.id === 'string' ? entry.id : '';
    const label = typeof entry?.label === 'string' ? entry.label : '';
    if (!id || !label || seen.has(id)) continue;
    // Treat renamed Mixer entries as one mobile navigation item, even when
    // legacy extensions give a second entry a different route ID.
    const isMixer = id === 'mixer' || /(^|\s)миксер(\s|$)/i.test(label.trim());
    if (isMixer && mixerShown) continue;
    if (isMixer) mixerShown = true;
    seen.add(id);
    items.push({
      id,
      label,
      shortLabel: id === 'mixer' ? 'Миксер' : label
        .replace('Жанровый миксер', 'Миксер')
        .replace('Идеи песен', 'Идеи')
        .replace('Suno Studio', 'Студия')
        .replace('Личный кабинет', 'Кабинет'),
      // Rendered only from the trusted in-app I(icon) helper, never user content.
      iconHtml: typeof entry.iconHtml === 'string' ? entry.iconHtml : '',
      active: id === active
    });
  }
  return items;
}
