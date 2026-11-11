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
