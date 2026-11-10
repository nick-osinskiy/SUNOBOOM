// Pure, bounded UI projections of the EXISTING Academy and genealogy.
// No catalog arrays, genre prose, personal records or browser storage here.
const MODES = new Set(['all', '', 'name', 'family', 'artist', 'description']);
const TABS = new Set(['overview','ideas','prompts','artists']);
const ID = /^[a-z0-9][a-z0-9-]{0,99}$/;

export function normalizeAcademyCatalog({ query, results, total, mode } = {}) {
  if (typeof query !== 'string' || query.length > 160 ||
      !Number.isSafeInteger(total) || total < 0 ||
      !Number.isSafeInteger(results) || results < 0 || results > total ||
      !MODES.has(mode)) return null;
  return Object.freeze({ query, results, total, mode });
}

export function normalizeAcademyFocus(id, tab) {
  if (typeof id !== 'string' || !ID.test(id) || !TABS.has(tab)) return null;
  return Object.freeze({ genreId: id, tab });
}

export function normalizeAcademyTree({ tree, selected, zoom, query } = {}) {
  if (typeof tree !== 'string' || !ID.test(tree) ||
      typeof selected !== 'string' || !ID.test(selected) ||
      typeof zoom !== 'number' || !Number.isFinite(zoom) || zoom < .75 || zoom > 1.5 ||
      typeof query !== 'string' || query.length > 160) return null;
  return Object.freeze({ tree, selected, zoom, query });
}
