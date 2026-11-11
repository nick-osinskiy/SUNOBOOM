// Content-free shared presentation counters for artist screens.
// The original artist profiles, Style prompts and track links stay in legacy data.
const validCount=(v,max=10000)=>Number.isSafeInteger(v)&&v>=0&&v<=max;
export function normalizeArtistManagerSummary(snapshot,visibleCount){
  if(!Array.isArray(snapshot?.artists)||!validCount(snapshot.artists.length)||
     !validCount(visibleCount)||visibleCount>snapshot.artists.length||
     !validCount(snapshot.dnaCount))return null;
  return Object.freeze({ready:true,artistCount:snapshot.artists.length,
    visibleCount,dnaCount:snapshot.dnaCount});
}
export function normalizeArtistDnaSummary(snapshot){
  const profiles=snapshot?.profiles,detail=snapshot?.detail;
  if(!Array.isArray(profiles)||!validCount(profiles.length)||
     (detail!==null&&(!detail||typeof detail!=='object')))return null;
  if(detail!==null&&(!Array.isArray(detail.related)||!validCount(detail.related.length)||
     !Array.isArray(detail.forbids)||!validCount(detail.forbids.length,32)||
     !Array.isArray(detail.facts)||!validCount(detail.facts.length,32)||
     !Array.isArray(detail.textFields)||!validCount(detail.textFields.length,32)))return null;
  return Object.freeze({ready:true,profileCount:profiles.length,
    detailOpen:detail!==null,linkedTrackCount:detail?.related.length??0,
    restrictionsCount:detail?.forbids.length??0,
    factCount:detail?.facts.length??0,sectionCount:detail?.textFields.length??0});
}
