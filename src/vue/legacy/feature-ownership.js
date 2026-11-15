// Ownership guard for live external/native UI boundaries.
export function availableIsland(target){
  if(!target?.closest)return target;
  if(target.closest('[data-sb-shell-owned]'))return null;
  const fallback=target.closest('[data-sb-page-fallback]');
  if(fallback&&target!==fallback)return null;
  const page=target.closest('[data-sb-vue-page][data-v-app]');
  // Explicit interoperability boundaries may still host a lazy editor island.
  return page&&target!==page&&!target.closest('[data-sb-native-boundary]')?null:target;
}
