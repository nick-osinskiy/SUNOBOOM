// v0.175: short-lived, content-free UI projection of the local library.
// Titles, lyrics, prompts, genre IDs, dates and record arrays remain in legacy.
const safeCount=v=>Number.isSafeInteger(v)&&v>=0&&v<=10000;
const GROUPS=Object.freeze(['genres','ideas','own','generated','prompts']);
export function normalizeLibrarySummary(snapshot) {
  if (!snapshot||!GROUPS.every(key=>Array.isArray(snapshot[key]) &&
      safeCount(snapshot[key].length) &&
      snapshot[key].every(item=>item!==null&&typeof item==='object'))) return null;
  const genreCount=snapshot.genres.length;
  const academyIdeaCount=snapshot.ideas.length;
  const ownIdeaCount=snapshot.own.length;
  const generatedIdeaCount=snapshot.generated.length;
  const promptCount=snapshot.prompts.length;
  return Object.freeze({
    ready:true,genreCount,academyIdeaCount,ownIdeaCount,generatedIdeaCount,
    promptCount,totalIdeaCount:academyIdeaCount+ownIdeaCount+generatedIdeaCount
  });
}
