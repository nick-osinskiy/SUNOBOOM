// v0.173: UI-only My Songs snapshots. No track IDs, metadata, URLs,
// version rows, audio blobs, or personal notes enter the shared Pinia state.
const validCount=(v,max=10000)=>Number.isSafeInteger(v)&&v>=0&&v<=max;
const bool=v=>typeof v==='boolean';

export function normalizeSongCollectionSummary(snapshot) {
  const items=snapshot?.items;
  if(!validCount(snapshot?.total)||!Array.isArray(items)||!validCount(items.length)||
     items.length>snapshot.total||!items.every(row=>row&&bool(row.hasCover)))return null;
  return Object.freeze({
    ready:true,totalCount:snapshot.total,visibleCount:items.length,
    localCoverCount:items.filter(row=>row.hasCover).length
  });
}

export function normalizeSongDetailSummary(snapshot) {
  const versions=snapshot?.versions;
  if(!Array.isArray(versions)||!validCount(versions.length,1000)||
     !bool(snapshot.hasAudio)||!bool(snapshot.hasCover)||
     !bool(snapshot.hasPlayableAudio)||!bool(snapshot.compareOpen)||
     (snapshot.compareOpen&&versions.length<2)||
     !versions.every(v=>v&&bool(v.isMain)&&bool(v.isPlaying))||
     versions.filter(v=>v.isMain).length>1||
     versions.filter(v=>v.isPlaying).length>1)return null;
  return Object.freeze({
    ready:true,versionCount:versions.length,
    hasPrimary:versions.some(v=>v.isMain),hasLocalAudio:snapshot.hasAudio,
    canPlay:snapshot.hasPlayableAudio,hasCover:snapshot.hasCover,
    comparisonAvailable:versions.length>=2,comparisonOpen:snapshot.compareOpen
  });
}
