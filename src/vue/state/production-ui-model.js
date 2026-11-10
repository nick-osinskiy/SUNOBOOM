// Bounded, content-free indicators for existing music production tools.
// Store only numeric/UI metadata. Never mirror prompts, lyrics, formula rows,
// themes of songs, artist names, user files or private library records.
const ID = /^[a-z0-9][a-z0-9-]{0,99}$/;
const integer = (value, min, max) => Number.isSafeInteger(value) && value >= min && value <= max;

export function normalizeStudioSummary(snapshot) {
  const settings = snapshot?.settings;
  const prompt = snapshot?.prompt;
  const genreId = settings?.genre;
  if (typeof genreId !== 'string' || !ID.test(genreId) ||
      !integer(settings?.tempo, 65, 200) ||
      typeof prompt !== 'string' || prompt.length > 1000) return null;
  return Object.freeze({
    ready: true, genreId, tempo: settings.tempo, promptLength: prompt.length
  });
}

export function normalizeMixerSummary(snapshot) {
  const rows = snapshot?.rows;
  const prompt = snapshot?.prompt;
  if (!Array.isArray(rows) || rows.length < 2 || rows.length > 4 ||
      !integer(snapshot?.tempo, 65, 200) ||
      typeof prompt !== 'string' || prompt.length > 1000 ||
      !rows.every(row => typeof row?.id === 'string' && ID.test(row.id) &&
        integer(row.weight, 0, 100)) ||
      rows.reduce((sum,row) => sum + row.weight, 0) !== 100 ||
      new Set(rows.map(row => row.id)).size !== rows.length) return null;
  return Object.freeze({
    ready: true, genreCount: rows.length, tempo: snapshot.tempo,
    promptLength: prompt.length
  });
}

export function normalizeAuditorSummary(snapshot) {
  const report = snapshot?.report;
  if (!['manual','studio'].includes(snapshot?.mode) ||
      !integer(report?.score, 0, 100) ||
      !integer(report?.length, 0, 100000)) return null;
  return Object.freeze({
    ready:true, mode:snapshot.mode, score:report.score, checkedLength:report.length
  });
}
