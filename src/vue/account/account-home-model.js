// Read the final native tiles after all legacy modules have added their entries.
// Text becomes Vue text; only locally generated icon markup stays markup.
export function readAccountTiles(root) {
  const tiles = [...root.querySelectorAll('.account-grid > .account-tile')];
  if (!tiles.length) return null;
  const attrs = node => Object.fromEntries([...node.attributes]
    .filter(a => /^(class|title|role|type|style|viewBox|preserveAspectRatio|width|height|fill|stroke|xmlns)$/.test(a.name) || /^(data-|aria-|stroke-)/.test(a.name))
    .map(a => [a.name, a.value]));
  const result = [];
  for (const [index, tile] of tiles.entries()) {
    const title = tile.querySelector('strong');
    if (!title) return null;
    const children = [...tile.children];
    const titleIndex = children.indexOf(title);
    if (titleIndex < 0) return null;
    const parts = [];
    for (const [i, child] of children.entries()) {
      const tag = child.tagName.toLowerCase();
      if (!['svg', 'span', 'strong', 'b', 'em'].includes(tag)) return null;
      const icon = i < titleIndex && !child.classList.contains('tile-count');
      parts.push({ tag, attrs: attrs(child), icon,
        ...(icon ? { html: child.innerHTML } : { text: child.textContent }) });
    }
    result.push({ key: index, attrs: { ...attrs(tile), type: 'button' }, parts });
  }
  return result;
}
