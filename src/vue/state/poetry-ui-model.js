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
