// v0.177: read-only numerical summary of the native poetry source.
// Never put lyrics, titles, IDs, analysis rows or accented word text into Pinia.
export function normalizePoetrySourceSummary(source) {
  if (typeof source !== 'string' || source.length > 20000) return null;
  const nonemptyLines=source.split(/\r\n?|\n/u).filter(line=>line.trim()).length;
  const words=(source.match(/[\p{L}\p{M}\p{N}]+(?:[-’'][\p{L}\p{M}\p{N}]+)*/gu)||[]).length;
  return Object.freeze({
    ready:true, charCount:source.length,
    lineCount:nonemptyLines, wordCount:words, hasText:!!source.trim()
  });
}

// v0.178: the analysis stays in the legacy poetry engine. Only bounded
// aggregate numbers can cross into Pinia, never rows, suggestions or words.
export function normalizePoetryAnalysisSummary(report) {
  if (!report || typeof report !== 'object' || typeof report.analyzed !== 'boolean') return null;
  if (!report.analyzed) return Object.freeze({
    ready:true, analyzed:false, rowCount:0, previewStanzaCount:0,
    stressMarkCount:0, suggestionCount:0
  });
  const bounded = value => Number.isSafeInteger(value) && value >= 0 && value <= 20000;
  if (!bounded(report.rowCount) || report.rowCount === 0 ||
      !bounded(report.markedStress) || !Array.isArray(report.stanzas) ||
      report.stanzas.length > 18 || !Array.isArray(report.suggestions) ||
      report.suggestions.length > 6 ||
      report.stanzas.some(block => !block || typeof block !== 'object') ||
      report.suggestions.some(tip => typeof tip !== 'string')) return null;
  return Object.freeze({
    ready:true, analyzed:true, rowCount:report.rowCount,
    previewStanzaCount:report.stanzas.length,
    stressMarkCount:report.markedStress,
    suggestionCount:report.suggestions.length
  });
}
