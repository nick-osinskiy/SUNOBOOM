// Pure projections for the Vue tree. Real genre data and historical edges live in genre-tree.js.
const fold = value => String(value ?? '').trim().normalize('NFKC').toLocaleLowerCase('ru');

export function treeSearch(genres, trees, term, activeTree = 'all', limit = 30) {
  const query = fold(term);
  if (!query) return { count: 0, items: [] };
  const lookup = new Map(genres.map(genre => [genre.id, genre]));
  const seen = new Set();
  const found = [];
  function add(tree, id) {
    const genre = lookup.get(id);
    if (!genre || seen.has(id) || !fold(genre.name).includes(query)) return;
    seen.add(id);
    found.push({ id, tree, name: genre.name, family: genre.family || '' });
  }
  if (activeTree !== 'all') {
    for (const tree of trees) {
      if (tree.id === 'all') continue;
      for (const id of tree.columns.flat()) add(tree.id, id);
    }
  }
  for (const genre of genres) add('all', genre.id);
  return { count: found.length, items: found.slice(0, limit) };
}

export function nextTreeZoom(value, action) {
  if (action === 'zoom-reset') return 1;
  if (action !== 'zoom-in' && action !== 'zoom-out') return value;
  return Math.min(1.5, Math.max(0.75,
    Math.round((value + (action === 'zoom-in' ? .15 : -.15)) * 100) / 100));
}

export function connectedTreeEdges(tree, selectedId) {
  const edges = Array.isArray(tree?.edges) ? tree.edges : [];
  return tree?.id === 'all'
    ? edges.filter(([from, to]) => from === selectedId || to === selectedId)
    : edges;
}
