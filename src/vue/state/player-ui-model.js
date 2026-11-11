// v0.170: content-free projections of the original Player LAB and A/B engines.
// Do not copy track names, filenames, paths, audio, A/B ratings or notes to Pinia.
const integer=(v,a,b)=>Number.isSafeInteger(v)&&v>=a&&v<=b;
const boolean=v=>typeof v==='boolean';

export function normalizePlayerLabSummary(s) {
  if (!integer(s?.count,0,150) || !integer(s?.currentIndex,-1,s.count-1) ||
      (s.count===0 && s.currentIndex!==-1) || !boolean(s.playing) ||
      (s.playing && s.currentIndex===-1) || !boolean(s.shuffle) ||
      !['off','all','one'].includes(s.repeat)) return null;
  return Object.freeze({
    ready:true, queueCount:s.count, selectedPosition:s.currentIndex+1,
    playing:s.playing, shuffle:s.shuffle, repeat:s.repeat
  });
}

export function normalizePlayerAbSummary(s) {
  const a=s?.files?.A?.ready, b=s?.files?.B?.ready;
  if (!['player','compare'].includes(s?.mode) || !['A','B'].includes(s?.active) ||
      !boolean(s.playing) || !boolean(s.loop) || !boolean(s.hasBoth) ||
      !boolean(a) || !boolean(b) || s.hasBoth!==(a&&b) ||
      (s.playing && !(s.active==='A'?a:b))) return null;
  return Object.freeze({
    ready:true, mode:s.mode, active:s.active, readyCount:Number(a)+Number(b),
    hasBoth:s.hasBoth, playing:s.playing, loop:s.loop
  });
}
