// This small loader is safe on the existing GitHub Pages site.
// Vite dev mode activates the Vue navigation immediately. Production remains
// on the fully functional legacy navigation until a verified bundle is published
// and <meta name="sunoboom-vue-nav" content="enabled"> is explicitly added.
const localDev = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
const productionEnabled = !!document.querySelector('meta[name="sunoboom-vue-nav"][content="enabled"]');
const moduleUrl = productionEnabled ? '../../dist/vue/sunoboom-vue.js?v=202' : localDev ? './entry.js' : null;

if (moduleUrl && window.SUNOBOOM_LEGACY_NAV) {
  import(moduleUrl)
    .then(({ startLegacyEventReminders, startLegacyEventEditor, startLegacyEventCollection, startLegacyProjectDetail, startLegacyProjectCreator, startLegacyProjectCollection, startLegacyNavigation, startLegacyTopHeader, startLegacyAppearance, startLegacyAcademy, startLegacyGenreDetail, startLegacyStudio, startLegacyMixer, startLegacyAuditor, startLegacyArranger, startLegacyPoetry, startLegacyTags, startLegacyIdeaEditor, startLegacyIdeaCollections, startLegacyPromptCollection, startLegacyPromptEditor, startLegacyLibrary, startLegacySongCards, startLegacySongDetail, startLegacySongEditor, startLegacyArtistManager, startLegacyArtistDNA, startLegacyArtistDNAEditor, startLegacyAccountSettings, startLegacyPlayerLab, startLegacyPlayerAB, startLegacyProducerSongList, startLegacyProducerSongDetail, startLegacyTrackPassportList, startLegacyTrackPassportDetail, startLegacyTrackPassportEditor, startLegacyVersionHistory, startLegacyHomeDashboard, startLegacyGenreTree }) => {
      if (typeof startLegacyAppearance === 'function') startLegacyAppearance();
      if (typeof startLegacyNavigation === 'function') startLegacyNavigation();
      if (typeof startLegacyTopHeader === 'function') startLegacyTopHeader();
      if (typeof startLegacyAcademy === 'function') startLegacyAcademy();
      if (typeof startLegacyGenreTree === 'function') startLegacyGenreTree();
      if (typeof startLegacyGenreDetail === 'function') startLegacyGenreDetail();
      if (typeof startLegacyStudio === 'function') startLegacyStudio();
      if (typeof startLegacyMixer === 'function') startLegacyMixer();
      if (typeof startLegacyAuditor === 'function') startLegacyAuditor();
      if (typeof startLegacyArranger === 'function') startLegacyArranger();
      if (typeof startLegacyIdeaCollections === 'function') startLegacyIdeaCollections();
      if (typeof startLegacyPromptCollection === 'function') startLegacyPromptCollection();
      if (typeof startLegacyProjectCollection === 'function') startLegacyProjectCollection();
      if (typeof startLegacyProjectCreator === 'function') startLegacyProjectCreator();
      if (typeof startLegacyProjectDetail === 'function') startLegacyProjectDetail();
      if (typeof startLegacyEventCollection === 'function') startLegacyEventCollection();
      if (typeof startLegacyEventEditor === 'function') startLegacyEventEditor();
      if (typeof startLegacyEventReminders === 'function') startLegacyEventReminders();
      if (typeof startLegacyPromptEditor === 'function') startLegacyPromptEditor();
      if (typeof startLegacyLibrary === 'function') startLegacyLibrary();
      if (typeof startLegacySongCards === 'function') startLegacySongCards();
      if (typeof startLegacySongDetail === 'function') startLegacySongDetail();
      if (typeof startLegacySongEditor === 'function') startLegacySongEditor();
      if (typeof startLegacyArtistManager === 'function') startLegacyArtistManager();
      if (typeof startLegacyArtistDNA === 'function') startLegacyArtistDNA();
      if (typeof startLegacyArtistDNAEditor === 'function') startLegacyArtistDNAEditor();
      if (typeof startLegacyAccountSettings === 'function') startLegacyAccountSettings();
      if (typeof startLegacyPlayerLab === 'function') startLegacyPlayerLab();
      if (typeof startLegacyPlayerAB === 'function') startLegacyPlayerAB();
      if (typeof startLegacyProducerSongList === 'function') startLegacyProducerSongList();
      if (typeof startLegacyProducerSongDetail === 'function') startLegacyProducerSongDetail();
      if (typeof startLegacyTrackPassportList === 'function') startLegacyTrackPassportList();
      if (typeof startLegacyTrackPassportDetail === 'function') startLegacyTrackPassportDetail();
      if (typeof startLegacyTrackPassportEditor === 'function') startLegacyTrackPassportEditor();
      if (typeof startLegacyVersionHistory === 'function') startLegacyVersionHistory();
      if (typeof startLegacyHomeDashboard === 'function') startLegacyHomeDashboard();
      if (typeof startLegacyIdeaEditor === 'function') startLegacyIdeaEditor();
      if (typeof startLegacyPoetry === 'function') startLegacyPoetry();
      if (typeof startLegacyTags === 'function') startLegacyTags();
    })
    .catch(error => {
      // All original menu buttons remain usable when the Vue bundle is absent.
      console.warn('[SUNOBOOM] Vue navigation unavailable; legacy menu retained.', error);
    });
}

