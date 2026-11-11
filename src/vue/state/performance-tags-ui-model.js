// v0.180: UI-only projection of native performance tags settings and preview.
// Never send lyrics, prompts, cue text, section labels, artist IDs or notices to Pinia.
const MODES = new Set(['smart','rules','manual']);
const SOURCES = new Set(['auto','original','tagged']);
const DENSITIES = new Set(['minimal','balanced','detailed']);
const FLAGS = ['melisma','falsetto','harmonies','noWhisper','noRasp'];

export function normalizePerformanceTagsSummary(snapshot) {
  if (!snapshot || typeof snapshot !== 'object' || Array.isArray(snapshot)) return null;
  const p=snapshot.prefs;
  if (!p || typeof p !== 'object' || Array.isArray(p) ||
      !MODES.has(p.mode) || !SOURCES.has(p.source) || !DENSITIES.has(p.density) ||
      !Number.isSafeInteger(p.intensity) || p.intensity < 1 || p.intensity > 5 ||
      FLAGS.some(key => typeof p[key] !== 'boolean') ||
      typeof snapshot.busy !== 'boolean') return null;
  const draft=snapshot.draft;
  if (draft !== null && (typeof draft !== 'object' || Array.isArray(draft) ||
      !Array.isArray(draft.sections) || draft.sections.length > 20000)) return null;
  const f=snapshot.freshness;
  if (!f || typeof f !== 'object' || Array.isArray(f) ||
      ['previewFresh','sourceChanged','targetChanged','settingsChanged'].some(key => typeof f[key] !== 'boolean') ||
      (draft===null && (f.sourceChanged || f.targetChanged || f.settingsChanged)) ||
      f.previewFresh !== (draft!==null && !f.sourceChanged && !f.targetChanged && !f.settingsChanged)) return null;
  return Object.freeze({
    ready:true,
    mode:p.mode, source:p.source, density:p.density,
    intensity:p.intensity, enabledTechniques:Number(p.melisma)+Number(p.falsetto)+Number(p.harmonies),
    vocalRestrictions:Number(p.noWhisper)+Number(p.noRasp),
    busy:snapshot.busy, previewOpen:draft!==null,
    sectionCount:draft ? draft.sections.length : 0,
    previewFresh:f.previewFresh, sourceChanged:f.sourceChanged,
    targetChanged:f.targetChanged, settingsChanged:f.settingsChanged
  });
}
