// Ephemeral, content-free projections of existing Master / passport lists.
// The original producer-center.js and index.html remain authoritative.
const validCount = value => Number.isSafeInteger(value) && value >= 0 && value <= 10000;
const STAGES = Object.freeze(['all','idea','lyrics','generation','selection','mastering','publisher','released']);

export function normalizeMasterListSummary(snapshot) {
  const rows=snapshot?.records;
  if (!Array.isArray(rows) || !validCount(rows.length) ||
      typeof snapshot.hasRecords !== 'boolean' ||
      snapshot.hasRecords !== (rows.length > 0) ||
      !rows.every(row=>row && Number.isSafeInteger(row.done) &&
        row.done >= 0 && row.total === 6 && row.done <= row.total &&
        row.percent === Math.round(row.done / row.total * 100))) return null;
  return Object.freeze({
    ready:true, workCount:rows.length,
    finishedCount:rows.filter(row=>row.done === row.total).length,
    hasSelection:rows.some(row=>typeof row.id === 'string' && row.id === snapshot.selectedId)
  });
}

export function normalizePassportListSummary(snapshot) {
  const records=snapshot?.records;
  if (!Array.isArray(records) || !validCount(records.length) ||
      typeof snapshot.hasRecords !== 'boolean' ||
      !STAGES.includes(snapshot.active) ||
      (records.length > 0 && !snapshot.hasRecords) ||
      (snapshot.active === 'all' && snapshot.hasRecords !== (records.length > 0))) return null;
  return Object.freeze({
    ready:true, visibleCount:records.length,
    hasRecords:snapshot.hasRecords, filter:snapshot.active
  });
}

// v0.172: details remain owned by legacy APIs. Only progress and existence counts
// are shared; never put notes, metadata, titles, track IDs, URLs or history here.
export function normalizeMasterDetailSummary(snapshot) {
  const stages=snapshot?.stages, links=snapshot?.links;
  if (snapshot?.total!==6 || !Number.isSafeInteger(snapshot.done) ||
      snapshot.done<0 || snapshot.done>6 ||
      snapshot.percent!==Math.round(snapshot.done/6*100) ||
      !Array.isArray(stages) || stages.length!==6 ||
      !stages.every(stage=>stage &&
        ['todo','working','done'].includes(stage.status) &&
        typeof stage.hasMaterial==='boolean') ||
      stages.filter(stage=>stage.status==='done').length!==snapshot.done ||
      !Array.isArray(links) || links.length!==6 ||
      !links.every(link=>link && typeof link.value==='string' &&
        typeof link.available==='boolean') ||
      !Number.isSafeInteger(snapshot.arrangement?.count) ||
      snapshot.arrangement.count<0 || snapshot.arrangement.count>1000 ||
      !Array.isArray(snapshot.history) || snapshot.history.length>80) return null;
  return Object.freeze({
    ready:true, done:snapshot.done, total:6, percent:snapshot.percent,
    materialCount:stages.filter(stage=>stage.hasMaterial).length,
    linkedCount:links.filter(link=>link.value!=='').length,
    arrangementBlocks:snapshot.arrangement.count,
    historyCount:snapshot.history.length
  });
}

export function normalizePassportDetailSummary(snapshot) {
  const links=snapshot?.links, versions=snapshot?.versions, sections=snapshot?.sections;
  if (!Array.isArray(snapshot?.facts) || snapshot.facts.length!==6 ||
      !Array.isArray(links) || links.length!==3 ||
      !links.every(link=>link && typeof link.exists==='boolean') ||
      !Array.isArray(versions) || versions.length>1000 ||
      !Array.isArray(sections) || sections.length>4 ||
      typeof snapshot.audio!=='string' || typeof snapshot.cover!=='string') return null;
  return Object.freeze({
    ready:true, versionCount:versions.length,
    linkedCount:links.filter(link=>link.exists).length,
    sectionCount:sections.length,
    hasAudio:!!snapshot.audio, hasCover:!!snapshot.cover
  });
}

