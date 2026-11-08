// This small loader is safe on the existing GitHub Pages site.
// Vite dev mode activates the Vue navigation immediately. Production remains
// on the fully functional legacy navigation until a verified bundle is published
// and <meta name="sunoboom-vue-nav" content="enabled"> is explicitly added.
const localDev = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
const productionEnabled = !!document.querySelector('meta[name="sunoboom-vue-nav"][content="enabled"]');
const moduleUrl = productionEnabled ? '../../dist/vue/sunoboom-vue.js' : localDev ? './entry.js' : null;

if (moduleUrl && window.SUNOBOOM_LEGACY_NAV) {
  import(moduleUrl)
    .then(({ startLegacyNavigation, startLegacyAcademy, startLegacyGenreDetail, startLegacyStudio, startLegacyMixer }) => {
      if (typeof startLegacyNavigation === 'function') startLegacyNavigation();
      if (typeof startLegacyAcademy === 'function') startLegacyAcademy();
      if (typeof startLegacyGenreDetail === 'function') startLegacyGenreDetail();
      if (typeof startLegacyStudio === 'function') startLegacyStudio();
      if (typeof startLegacyMixer === 'function') startLegacyMixer();
    })
    .catch(error => {
      // All original menu buttons remain usable when the Vue bundle is absent.
      console.warn('[SUNOBOOM] Vue navigation unavailable; legacy menu retained.', error);
    });
}
