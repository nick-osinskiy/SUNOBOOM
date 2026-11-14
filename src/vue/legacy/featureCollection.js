// Synchronous descriptor collection reuses the existing bridge contracts without
// installing their observers, subscriptions or separate Vue applications.
let collector=null;
export function withFeatureCollection(collect,run){
  if(collector)throw Error('Nested feature collection');
  collector=collect;
  try{return run();}finally{collector=null;}
}
export function collectLegacyIsland(options){
  if(!collector)return false;
  collector(options);
  return true;
}
export function availableIsland(target){
  if(!target?.closest)return target;
  const fallback=target.closest('[data-sb-page-fallback]');
  if(fallback&&target!==fallback)return null;
  const page=target.closest('[data-sb-vue-page][data-v-app]');
  // Explicit interoperability boundaries may still host a lazy editor island.
  return page&&target!==page&&!target.closest('[data-sb-native-boundary]')?null:target;
}
