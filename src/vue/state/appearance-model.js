// Pure, validated projection of the original account-settings.js settings.
// There is no independent theme catalog or persisted preference in Vue.
export function normalizeLegacyAppearance(snapshot) {
  const settings = snapshot?.settings;
  const themes = snapshot?.themes;
  const pages = snapshot?.pages;
  if (!settings || !Array.isArray(themes) || !Array.isArray(pages)) return null;

  const allowedThemes = new Set(themes.map(item => item?.id).filter(Boolean));
  const allowedPages = new Set(pages.map(item => item?.id).filter(Boolean));
  const { theme, compact, largeText, reduceMotion, startPage } = settings;
  const resolvedTheme = snapshot.resolvedTheme;
  if (!allowedThemes.has(theme) || !allowedPages.has(startPage) ||
      typeof compact !== 'boolean' || typeof largeText !== 'boolean' ||
      typeof reduceMotion !== 'boolean') return null;

  // System mode is a preference, not a CSS palette: only light/dark may resolve.
  if (theme === 'system'
    ? !['light', 'dark'].includes(resolvedTheme)
    : resolvedTheme !== theme) return null;

  return Object.freeze({ theme, resolvedTheme, compact, largeText, reduceMotion, startPage });
}
