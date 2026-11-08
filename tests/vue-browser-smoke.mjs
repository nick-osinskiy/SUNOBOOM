import { spawn } from 'node:child_process';
import { setTimeout as pause } from 'node:timers/promises';
import { chromium } from 'playwright';

const BASE = 'http://127.0.0.1:8765/';
const server = spawn('python3', ['-m', 'http.server', '8765', '--bind', '127.0.0.1'], {
  stdio: ['ignore', 'pipe', 'pipe']
});

let serverError = '';
server.stderr.on('data', chunk => { serverError += String(chunk); });
let browser;

async function ready() {
  for (let i = 0; i < 50; i++) {
    try {
      const response = await fetch(BASE);
      if (response.ok) return;
    } catch {}
    await pause(200);
  }
  throw new Error('Local HTTP server not ready: ' + serverError.slice(0, 350));
}

async function checkLayout(mobile) {
  const context = await browser.newContext({
    viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
    isMobile: mobile,
    hasTouch: mobile
  });
  const page = await context.newPage();
  const errors = [];

  page.on('pageerror', error => errors.push(String(error)));
  page.on('console', message => {
    if (message.type() === 'warning' && message.text().includes('Vue navigation unavailable')) {
      errors.push(message.text());
    }
  });

  // Exercise the EXACT production bundle without modifying the live index.html.
  // localhost otherwise deliberately chooses the unbundled Vite entry.
  await page.route(BASE, async route => {
    const response = await route.fetch();
    const html = (await response.text()).replace('</head>',
      '<meta name="sunoboom-vue-nav" content="enabled">' +
      '<link rel="stylesheet" href="./dist/vue/sunoboom-vue.css"></head>');
    await route.fulfill({ response, body: html, headers: {
      ...response.headers(),
      'content-type': 'text/html; charset=utf-8'
    }});
  });

  try {
    await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Both menus are enhanced; the initial Master link must already exist.
    try {
      await page.locator('[data-sb-vue-sidebar][data-v-app]').waitFor({ state: 'attached', timeout: 8000 });
    } catch (error) {
      const state = await page.evaluate(() => ({
        legacyApi: typeof window.SUNOBOOM_LEGACY_NAV,
        app: !!document.getElementById('app'),
        sideHost: !!document.querySelector('[data-sb-vue-sidebar]'),
        mobileHost: !!document.querySelector('[data-sb-vue-mobile]'),
        menuCount: document.querySelectorAll('.mobile-nav [data-nav]').length,
        productionEnabled: !!document.querySelector('meta[name="sunoboom-vue-nav"][content="enabled"]'),
        scripts: Array.from(document.scripts).slice(-3).map(el => el.src)
      }));
      console.error('Vue navigation diagnostics:', JSON.stringify({ state, errors, url: page.url() }));
      throw error;
    }
    await page.locator('[data-sb-vue-mobile][data-v-app]').waitFor({ state: 'attached', timeout: 20000 });

    const nav = mobile ? '.mobile-nav' : '[data-sb-vue-sidebar]';
    const master = page.locator(nav + ' button[data-nav="producer"]');
    await master.waitFor();
    if (await master.count() !== 1) throw new Error('Master link missing or duplicated');

    await master.click();
    await page.locator(nav + ' button[data-nav="producer"].active').waitFor({ timeout: 10000 });

    await page.locator(nav + ' button[data-nav="studio"]').click();
    await page.locator(nav + ' button[data-nav="studio"].active').waitFor({ timeout: 10000 });

    await page.locator(nav + ' button[data-nav="account"]').click();
    await page.locator(nav + ' button[data-nav="account"].active').waitFor({ timeout: 10000 });


    // Vue now owns search, filtering, family details and all genre cards.
    await page.locator(nav + ' button[data-nav="catalog"]').click();
    await page.locator('#sb-vue-academy-root[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });

    const familyCount = await page.locator('#catalog-cards details.genre-family').count();
    const cardCount = await page.locator('#catalog-cards .genre-card').count();
    if (familyCount < 5 || cardCount < 20) {
      throw new Error('Academy lost genre families or cards: ' + familyCount + ' / ' + cardCount);
    }
    // Family accordions must remain collapsed by default.
    const collapsedCount = await page.locator('#catalog-cards details.genre-family:not([open])').count();
    if (!collapsedCount) throw new Error('Academy family panels no longer collapse');

    const sacred = page.locator('#catalog-cards details.genre-family[data-family="Религиозная музыка"]');
    await sacred.locator(':scope > summary').click();
    if (await sacred.locator('details.sb-sacred-religion').count() < 1) {
      throw new Error('Religious Academy hierarchy missing');
    }
    if (await sacred.locator('.genre-grid button.genre-card').count() < 1) {
      throw new Error('Religious Academy cards are missing from Vue');
    }
    const religion = sacred.locator('details.sb-sacred-religion').first();
    await religion.locator(':scope > summary').click();
    await religion.locator('details.sb-sacred-branch').first().locator(':scope > summary').click();
    if (!(await religion.locator('details.sb-sacred-branch').first().evaluate(el => el.open))) {
      throw new Error('Religious branch did not expand');
    }

    const search = page.locator('#genre-search');
    await search.fill('ска');
    const ska = page.locator('#catalog-cards button.genre-card[data-id="reggae-ska"]');
    await ska.waitFor({ timeout: 10000 });
    const familyMatches = await page.locator('#catalog-cards details.genre-family').count();
    if (familyMatches >= familyCount) throw new Error('Vue search did not filter family groups');
    if (await page.locator('#catalog-count').textContent() === 'Музыкальные жанры · ' + cardCount) {
      throw new Error('Vue search did not update result count');
    }
    await ska.click();
    await page.locator('.genre-bright h1.gb-title').waitFor({ timeout: 10000 });
    const genreTitle = await page.locator('.genre-bright h1.gb-title').textContent();
    if (!genreTitle?.toLocaleLowerCase('ru').includes('ска')) {
      throw new Error('Genre card did not open the expected detail page: ' + genreTitle);
    }

    // Vue owns the genre hero and ЖАНР-НАВ; the existing rich content
    // generators and their delegated buttons must continue to function.
    await page.locator('#sb-vue-genre-detail[data-v-app]')
      .waitFor({ state: 'attached', timeout: 10000 });
    const genreTabs = page.locator('.genre-side-nav .genre-side-item');
    if (await genreTabs.count() !== 4) throw new Error('ЖАНР-НАВ lost tabs');

    await page.locator('.genre-side-item[data-tab="ideas"]').click();
    await page.locator('.genre-side-item[data-tab="ideas"].active').waitFor();
    if (await page.locator('#genre-nav-content .idea-grid .idea').count() < 1) {
      throw new Error('Genre song ideas did not render');
    }
    await page.locator('[data-sb-vue-ideas]').waitFor();
    const firstIdeaSave = page.locator('[data-sb-vue-ideas] [data-action="idea-save"][data-i="0"]');
    await firstIdeaSave.click();
    await page.locator('[data-sb-vue-ideas] [data-action="idea-save"][data-i="0"][aria-pressed="true"]').waitFor();
    const persistedIdea = await page.evaluate(() => {
      const record = JSON.parse(localStorage.getItem('sunoboom-v1') || '{}');
      return Array.isArray(record.savedIdeas) && record.savedIdeas.includes('reggae-ska:0');
    });
    if (!persistedIdea) throw new Error('Saved idea missing from the existing personal library');
    if (!(await page.locator('[data-sb-vue-ideas] [data-action="idea-save"][data-i="0"]').textContent())?.includes('Сохранено')) {
      throw new Error('Vue idea save status did not update');
    }

    await page.locator('.genre-side-item[data-tab="prompts"]').click();
    await page.locator('.genre-side-item[data-tab="prompts"].active').waitFor();
    if (!((await page.locator('#genre-nav-content').textContent()) || '').includes('Шаблоны звучания')) {
      throw new Error('Suno genre prompt templates missing');
    }
    await page.locator('[data-sb-vue-prompts]').waitFor();
    if (await page.locator('[data-sb-vue-prompts] .idea').count() !== 2) {
      throw new Error('Original and soft Suno prompt templates are not both present');
    }
    for (const action of ['use-genre', 'use-soft']) {
      if (await page.locator('[data-sb-vue-prompts] [data-action="'+action+'"]').count() !== 1) {
        throw new Error('Suno template action missing: '+action);
      }
    }

    await page.locator('.genre-side-item[data-tab="artists"]').click();
    await page.locator('.genre-side-item[data-tab="artists"].active').waitFor();
    await page.locator('#sb-artist-expanded[data-sb-vue-artists]').waitFor();
    const artistCards = page.locator('#sb-artist-expanded .ahx-card');
    const worldCount = await artistCards.count();
    if (worldCount < 2) throw new Error('Artist profiles missing from migrated Vue panel');

    const firstName = (await artistCards.first().locator('.ahx-title h4').textContent())?.trim();
    if (!firstName) throw new Error('Artist name is missing');

    // Full artist profiles and favorite buttons belong to the existing
    // profiles module and must still be available on Vue-rendered cards.
    await artistCards.first().locator('[data-sb-ap-action="profile"]').waitFor();
    await artistCards.first().locator('[data-sb-ap-action="profile"]').click();
    await page.locator('#sb-ap-overlay:not([hidden])').waitFor();
    await page.locator('#sb-ap-overlay button[data-sb-ap-action="close"]').click();

    const artistSearch = page.locator('[data-vue-artist-search]');
    await artistSearch.fill(firstName);
    if (await page.locator('#sb-artist-expanded .ahx-card').count() >= worldCount) {
      throw new Error('Vue artist search did not filter the cards');
    }
    if (await page.locator('#sb-artist-expanded .ahx-card').count() < 1) {
      throw new Error('Vue artist search lost the matching artist');
    }
    await artistSearch.fill('');
    await page.locator('[data-vue-artist-filter="adjacent"]').click();
    if (await page.locator('[data-vue-artist-filter="adjacent"]').getAttribute('aria-pressed') !== 'true') {
      throw new Error('Vue artist relationship filter did not activate');
    }
    await page.locator('[data-vue-artist-filter="all"]').click();
    await page.locator('[data-vue-artist-scene="ru"]').click();
    if (await page.locator('[data-vue-artist-scene="ru"]').getAttribute('aria-pressed') !== 'true') {
      throw new Error('Russian-speaking scene did not activate');
    }
    await page.locator('[data-vue-artist-scene="world"]').click();
    if (await page.locator('[data-vue-artist-scene="world"]').getAttribute('aria-pressed') !== 'true') {
      throw new Error('World scene did not restore');
    }

    await page.locator('.genre-side-item[data-tab="overview"]').click();
    await page.locator('.genre-side-item[data-tab="overview"].active').waitFor();
    if (!(await page.locator('#genre-nav-content').textContent())?.includes('Характер и звучание')) {
      throw new Error('Overview content did not return');
    }
    if (await page.locator('[data-sb-vue-overview]').count() !== 1) {
      throw new Error('Native Vue overview component missing');
    }
    await page.locator('[data-sb-vue-overview] .btn.ghost').click();
    await page.locator('.genre-side-item[data-tab="ideas"].active').waitFor();
    await page.locator('.genre-side-item[data-tab="overview"]').click();
    await page.locator('.genre-side-item[data-tab="overview"].active').waitFor();

    await page.locator('.gb-buttons [data-action="favorite"]').click();
    await page.locator('#sb-vue-genre-detail[data-v-app]')
      .waitFor({ state: 'attached', timeout: 10000 });
    if (!(await page.locator('.gb-buttons [data-action="favorite"]').textContent())?.includes('В избранном')) {
      throw new Error('Existing favorite action stopped working');
    }

    await page.locator('.gb-top [data-action="academy-back"]').click();
    await page.locator('#sb-vue-academy-root[data-v-app]')
      .waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#genre-search').inputValue() !== 'ска') {
      throw new Error('Return to Academy did not restore search');
    }

    // Validate that both Vue prompt templates and saved song ideas still
    // execute the original studio actions (not just display correctly).
    await page.locator('#catalog-cards button.genre-card[data-id="reggae-ska"]').click();
    await page.locator('#sb-vue-genre-detail[data-v-app]').waitFor({ state: 'attached' });
    await page.locator('.genre-side-item[data-tab="prompts"]').click();
    await page.locator('[data-sb-vue-prompts] [data-action="use-soft"]').click();
    const softState = await page.evaluate(() => ({
      route: view.nav, genre: builder.genre, energy: builder.energy, mood: builder.mood
    }));
    if (softState.route !== 'studio' || softState.genre !== 'reggae-ska' ||
        softState.energy !== 'soft' || softState.mood !== 'melancholic') {
      throw new Error('Soft Suno template did not configure the existing Studio: ' + JSON.stringify(softState));
    }

    await page.locator(nav + ' button[data-nav="catalog"]').click();
    await page.locator('#catalog-cards button.genre-card[data-id="reggae-ska"]').click();
    await page.locator('.genre-side-item[data-tab="ideas"]').click();
    if (await page.locator('[data-sb-vue-ideas] [data-action="idea-save"][data-i="0"]').getAttribute('aria-pressed') !== 'true') {
      throw new Error('Saved song idea was not restored after navigation');
    }
    await page.locator('[data-sb-vue-ideas] [data-action="idea-use"][data-i="0"]').click();
    const ideaState = await page.evaluate(() => ({
      route: view.nav, genre: builder.genre, theme: builder.theme
    }));
    if (ideaState.route !== 'studio' || ideaState.genre !== 'reggae-ska' ||
        typeof ideaState.theme !== 'string' || !ideaState.theme.trim()) {
      throw new Error('Song idea transfer did not configure the existing Studio: ' + JSON.stringify(ideaState));
    }

    // Vue Studio must preserve the original 1000-char prompt engine, actions,
    // genre mixer, arrangement builder and prompt auditor.
    await page.locator('.studio-grid[data-sb-vue-studio][data-v-app]')
      .waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('.studio-grid > .panel').count() !== 2) {
      throw new Error('The original Studio grid layout was not preserved');
    }
    if (await page.locator('#sba-arranger').count() !== 1 ||
        await page.locator('#sbpa-auditor').count() !== 1 ||
        await page.locator('.gm-studio-banner').count() !== 1) {
      throw new Error('An integrated Studio module is missing');
    }
    if (await page.locator('#b-genre').inputValue() !== 'reggae-ska') {
      throw new Error('Studio genre was not transferred from the idea');
    }

    await page.locator('#b-mood').selectOption('romantic');
    if (!(await page.locator('#prompt-output').textContent())?.includes('romantic mood')) {
      throw new Error('Vue mood input did not call the legacy prompt engine');
    }
    await page.locator('#b-vocal').selectOption('female');
    await page.locator('#b-lang').selectOption('Kazakh');
    if (!(await page.locator('#prompt-output').textContent())?.includes('Kazakh lyrics')) {
      throw new Error('Vue language setting did not update the prompt');
    }
    await page.locator('#b-theme').fill('Любовь к музыке');
    if (!(await page.locator('#prompt-output').textContent())?.includes('song about Любовь к музыке')) {
      throw new Error('Vue track theme not passed to the legacy engine');
    }

    // The arranger updates builder.extra itself and calls updateOutput().
    // Verify the Vue field updates after a legacy-side change.
    await page.evaluate(() => { builder.extra='short brass break'; updateOutput(); });
    await page.waitForFunction(() => document.getElementById('b-extra')?.value === 'short brass break');
    await page.locator('#b-extra').fill('cinematic energy, ' + 'very long instrumental description '.repeat(80));
    const promptStatus = await page.evaluate(() => {
      const prompt = document.getElementById('prompt-output')?.textContent || '';
      return {
        textLength:prompt.length,
        authoritativeLength:promptValue().length,
        count:document.getElementById('prompt-count')?.textContent,
        same:prompt === promptValue()
      };
    });
    if (!promptStatus.same || promptStatus.textLength > 1000 ||
        promptStatus.textLength !== promptStatus.authoritativeLength ||
        !promptStatus.count?.includes(promptStatus.textLength + ' / 1000')) {
      throw new Error('Studio 1000-character limit diverged from legacy promptValue(): ' + JSON.stringify(promptStatus));
    }

    await page.locator('#b-extra').fill('bright brass, tight percussion');
    const beforeSave = await page.evaluate(() => data.savedPrompts.length);
    await page.locator('.studio-grid [data-action="save-prompt"]').click();
    const savedState = await page.evaluate(() => ({
      saved:data.savedPrompts.length,
      last:data.savedPrompts[data.savedPrompts.length-1]?.text,
      current:promptValue()
    }));
    if (savedState.saved !== beforeSave + 1 || savedState.last !== savedState.current) {
      throw new Error('Legacy saved prompt library was not updated');
    }

    // A genre selection must still refresh its musical profile and all
    // legacy Studio extension panels, as the old builder did.
    await page.locator('#b-genre').selectOption('afropop');
    await page.locator('.studio-grid[data-sb-vue-studio][data-v-app]')
      .waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#b-genre').inputValue() !== 'afropop' ||
        await page.locator('#bpm-output').textContent() === '' ||
        await page.locator('#sba-arranger').count() !== 1) {
      throw new Error('Genre change broke Studio or its arrangement extension');
    }

    // Vue mixer keeps the original calculation engine and browser storage.
    await page.locator(nav + ' button[data-nav="mixer"]').click();
    await page.locator('#sb-vue-mixer-root[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#sb-vue-mixer-root .gm-row').count() !== 2) {
      throw new Error('Vue mixer did not render its two default genre rows');
    }
    await page.locator('#gm-genre-0').selectOption('reggae-ska');
    await page.locator('#sb-vue-mixer-root[data-v-app]').waitFor({ state: 'attached' });
    await page.locator('[data-gm-weight="0"]').evaluate(input => {
      input.value = '75';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.waitForFunction(() =>
      document.querySelector('[data-gm-weight="1"]')?.value === '25' &&
      document.getElementById('gm-count')?.textContent?.includes('/ 1000'));
    const mixerState = await page.evaluate(() => {
      const weights = [...document.querySelectorAll('#sb-vue-mixer-root [data-gm-weight]')]
        .map(el => Number(el.value));
      const prompt = document.getElementById('gm-prompt')?.textContent || '';
      const draft = JSON.parse(localStorage.getItem('sunoboom-v1') || '{}').mixerDraft;
      return { weights, promptLength: prompt.length, count: document.getElementById('gm-count')?.textContent,
        savedRows: draft?.rows?.length, selected: draft?.rows?.[0]?.id };
    });
    if (mixerState.weights.reduce((a, b) => a + b, 0) !== 100 ||
        mixerState.weights[0] !== 75 || mixerState.promptLength > 1000 ||
        !mixerState.count?.includes(mixerState.promptLength + ' / 1000') ||
        mixerState.savedRows !== 2 || mixerState.selected !== 'reggae-ska') {
      throw new Error('Mixer lost calculations or its existing draft storage: ' + JSON.stringify(mixerState));
    }

    await page.locator('[data-action="gm-add"]').click();
    await page.locator('#sb-vue-mixer-root[data-v-app]').waitFor({ state: 'attached' });
    if (await page.locator('#sb-vue-mixer-root .gm-row').count() !== 3) {
      throw new Error('Adding a mixer genre stopped working');
    }
    await page.locator('[data-action="gm-equal"]').click();
    const equalSum = await page.locator('#sb-vue-mixer-root [data-gm-weight]')
      .evaluateAll(inputs => inputs.map(el => Number(el.value)).reduce((a, b) => a + b, 0));
    if (equalSum !== 100) throw new Error('Mixer equal weights no longer add up to 100%');
    await page.locator('[data-action="gm-remove"]').last().click();
    await page.locator('#sb-vue-mixer-root[data-v-app]').waitFor({ state: 'attached' });
    if (await page.locator('#sb-vue-mixer-root .gm-row').count() !== 2) {
      throw new Error('Removing a mixer genre stopped working');
    }
    await page.locator('#gm-title').fill('Vue test mixture');
    await page.locator('[data-action="gm-save-mix"]').click();
    await page.locator('#sb-vue-mixer-root[data-v-app]').waitFor({ state: 'attached' });
    if (!(await page.locator('.gm-saved strong').first().textContent())?.includes('Vue test mixture')) {
      throw new Error('Saved formulas missing from Vue mixer');
    }
    await page.locator('.gm-saved [data-action="gm-load"]').first().click();
    await page.locator('#sb-vue-mixer-root[data-v-app]').waitFor({ state: 'attached' });
    await page.locator('[data-action="gm-to-studio"]').click();
    await page.locator('.studio-grid[data-sb-vue-studio][data-v-app]').waitFor();
    const mixerTransfer = await page.evaluate(() => ({
      nav: view.nav, blend: builder.mixerBlend, genre: builder.genre,
      prompt: document.getElementById('prompt-output')?.textContent || ''
    }));
    if (mixerTransfer.nav !== 'studio' || mixerTransfer.blend?.length !== 2 ||
        mixerTransfer.genre !== 'reggae-ska' || !mixerTransfer.prompt.includes('Genre blend targets')) {
      throw new Error('Mixer-to-Studio handoff failed: ' + JSON.stringify(mixerTransfer));
    }

    // The rules-based auditor is now Vue, still using the original
    // inspect(), propose(), clipboard and Studio settings.
    await page.locator('#sbpa-auditor[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    const initialAudit = await page.evaluate(() => ({
      count: document.querySelector('#sbpa-auditor #sbpa-results .sbpa-limit')?.textContent,
      length: promptValue().length,
      score: Number(document.querySelector('#sbpa-auditor .sbpa-score')?.firstChild?.textContent?.trim())
    }));
    if (!initialAudit.count?.includes(initialAudit.length + ' / 1000') ||
        !Number.isFinite(initialAudit.score)) {
      throw new Error('Vue audit score does not match the active Studio prompt: ' + JSON.stringify(initialAudit));
    }

    await page.locator('#b-theme').fill('Новое музыкальное направление');
    await page.waitForFunction(() =>
      document.querySelector('#sbpa-auditor .sbpa-limit')?.textContent?.includes(promptValue().length + ' / 1000'));
    const builderBeforeAudit = await page.evaluate(() => JSON.stringify(builder));
    await page.locator('#sbpa-auditor [data-sbpa-action="manual"]').click();
    await page.locator('#sbpa-auditor[data-v-app] #sbpa-text').waitFor({ state: 'visible' });
    const draft = '80 BPM, clear female lead vocals, 140 BPM, clear female lead vocals, no whispering';
    await page.locator('#sbpa-text').fill(draft);
    await page.waitForFunction(() =>
      document.querySelector('#sbpa-results')?.textContent?.includes('Несколько разных темпов') &&
      document.querySelector('#sbpa-results')?.textContent?.includes('Повторы инструкций'));
    await page.locator('#sbpa-genre').selectOption('reggae-ska');
    await page.waitForFunction(() => document.querySelector('#sbpa-genre')?.value === 'reggae-ska');

    await page.locator('#sbpa-auditor [data-sbpa-action="preview"]').click();
    await page.locator('#sbpa-preview-text').waitFor({ state: 'visible' });
    const previewText = await page.locator('#sbpa-preview-text').inputValue();
    if (previewText.split('clear female lead vocals').length !== 2) {
      throw new Error('Vue preview did not remove one exact duplicate');
    }
    if (await page.locator('#sbpa-text').inputValue() !== draft) {
      throw new Error('Audit preview overwrote the original manual text');
    }
    await page.locator('#sbpa-preview-text').fill('User approved preview, clean studio vocals');
    if (await page.locator('#sbpa-preview-text').inputValue() !== 'User approved preview, clean studio vocals') {
      throw new Error('Vue preview was not editable');
    }
    await page.locator('#sbpa-auditor [data-sbpa-action="close-preview"]').click();
    await page.locator('#sbpa-preview-text').waitFor({ state: 'detached' });
    if (await page.locator('#sbpa-text').inputValue() !== draft) {
      throw new Error('Closing the preview modified the source text');
    }

    await page.locator('#sbpa-auditor [data-sbpa-action="load-studio"]').click();
    await page.locator('#sbpa-auditor[data-v-app] #sbpa-text').waitFor();
    const fromStudio = await page.locator('#sbpa-text').inputValue();
    const currentStudio = await page.evaluate(() => promptValue());
    if (fromStudio !== currentStudio) {
      throw new Error('Load Studio prompt failed in Vue auditor');
    }
    await page.locator('#sbpa-auditor [data-sbpa-action="studio"]').click();
    await page.locator('#sbpa-auditor[data-v-app] #sbpa-results').waitFor();
    if (await page.locator('#sbpa-text').count() !== 0) {
      throw new Error('Vue auditor did not return to Studio mode');
    }
    if (await page.evaluate(() => JSON.stringify(builder)) !== builderBeforeAudit) {
      throw new Error('Auditing altered the original Studio builder settings');
    }

    // Native Vue arranger: the original drag handlers, recommendations,
    // transitions, and localStorage draft all remain functional.
    for (const selector of [
      '#sba-cards', '#sba-snake-track', '#sba-transition-hub-list', '#sba-energy-chart'
    ]) {
      await page.locator(selector + '[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    }
    const initialArrangement = await page.evaluate(() => ({
      count: SUNOBOOM_ARRANGER.getBlockCount(),
      draft: SUNOBOOM_ARRANGER.exportDraft(),
      stored: localStorage.getItem('sunoboom-arrangement-v066')
    }));
    if (await page.locator('#sba-cards .sba-block').count() !== initialArrangement.count ||
        await page.locator('#sba-snake-track .sba-snake-desktop .sba-snake-chip').count() !==
          Math.min(initialArrangement.count, 12) ||
        await page.locator('#sba-energy-chart .sba-chart-step').count() !== initialArrangement.count) {
      throw new Error('The Vue arrangement dashboard differs from its legacy source data');
    }
    const firstCard = page.locator('#sba-cards .sba-block').first();
    await firstCard.locator('[data-sba-field="bars"]').selectOption('12');
    await page.waitForFunction(() => SUNOBOOM_ARRANGER.exportDraft().blocks[0]?.bars === 12);
    await page.locator('#sba-cards .sba-block').first()
      .locator('[data-sba-field="energy"]').evaluate(input => {
        input.value = '5';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
    await page.waitForFunction(() =>
      SUNOBOOM_ARRANGER.exportDraft().blocks[0]?.energy === 5 &&
      document.querySelector('#sba-cards .sba-block .sba-head-energy')?.textContent?.includes('5/5'));

    const beforeInstrument = await page.locator('#sba-cards .sba-block').first()
      .locator('[data-sba-field="instruments"]').inputValue();
    await page.locator('#sba-cards .sba-block').first()
      .locator('.sba-quick-chip:not([disabled])').first().click();
    await page.waitForFunction(previous => {
      const current = document.querySelector('#sba-cards .sba-block [data-sba-field="instruments"]')?.value || '';
      return current.length > previous.length;
    }, beforeInstrument);
    await page.locator('#sba-transition-hub-list [data-sba-transition="type"]').first().selectOption('riser');
    await page.waitForFunction(() => SUNOBOOM_ARRANGER.exportDraft().blocks[0]?.transitionOut?.type === 'riser');
    if (await page.locator('#sba-snake-track .sba-snake-desktop .sba-snake-transition').count() < 1) {
      throw new Error('Transition marker did not appear in the Vue snake');
    }
    await page.locator('#sba-transition-hub-list [data-sba-action="transition-hub-jump"]').first().click();
    await page.locator('#sba-cards .sba-transition-editor').first().waitFor({ state: 'visible' });

    // Both the native drag source IDs and the keyboard fallback use the same
    // original block-order mutation and save path.
    const beforeOrder = await page.evaluate(() => SUNOBOOM_ARRANGER.exportDraft().blocks
      .map(block => block.type + ':' + block.instruments));
    const snake = page.locator(
      mobile ? '#sba-snake-track .sba-snake-mobile .sba-snake-chip'
             : '#sba-snake-track .sba-snake-desktop .sba-snake-chip');
    await snake.first().focus();
    await snake.first().press('ArrowRight');
    await page.waitForFunction(expected => {
      const draft = SUNOBOOM_ARRANGER.exportDraft();
      return draft.blocks[1]?.type + ':' + draft.blocks[1]?.instruments === expected;
    }, beforeOrder[0]);
    const afterMove = await page.evaluate(() => ({
      blocks: SUNOBOOM_ARRANGER.exportDraft().blocks,
      saved: JSON.parse(localStorage.getItem('sunoboom-arrangement-v066') || '{}').blocks
    }));
    if (afterMove.blocks.length !== afterMove.saved?.length ||
        afterMove.blocks[1].type !== afterMove.saved[1].type) {
      throw new Error('Reordered blocks were not persisted in the original arrangement draft');
    }

    await page.locator('#sba-add-type').selectOption('custom');
    await page.locator('#sba-new-block-title').fill('Проверочный переход');
    await page.locator('#sba-add-editor [data-sba-action="add"]').click();
    await page.waitForFunction(expected => SUNOBOOM_ARRANGER.getBlockCount() === expected + 1,
      initialArrangement.count);
    if (!(await page.locator('#sba-cards .sba-block').last().textContent())?.includes('Проверочный переход')) {
      throw new Error('Custom arrangement block was not added in the Vue editor');
    }
    await page.locator('#sba-cards .sba-block').last().locator('[data-sba-action="remove"]').click();
    await page.waitForFunction(expected => SUNOBOOM_ARRANGER.getBlockCount() === expected,
      initialArrangement.count);
    if (await page.locator('#sba-cards .sba-block').count() !== initialArrangement.count) {
      throw new Error('Vue block removal did not restore the original block count');
    }
    if (!((await page.locator('#sba-preview').inputValue()) || '').includes('[') ||
        await page.locator('#sba-cards .sba-quick-sounds').count() !== initialArrangement.count) {
      throw new Error('Lyrics preview or Academy arrangement recommendations disappeared');
    }

    // Vue 3 template picker and full Academy sound library (v0.104).
    await page.locator('.sba-preset-picker[data-v-app]').waitFor({ state: 'attached' });
    await page.locator('.sba-result[data-v-app]').waitFor({ state: 'attached' });
    await page.locator('#sba-cards .sba-block').first()
      .locator('[data-sba-action="sound-toggle"]').click();
    const soundPanel = page.locator('#sba-cards .sba-block').first().locator('.sba-sound-panel');
    await soundPanel.waitFor({ state: 'visible' });
    const manualInstruments = await page.locator('#sba-cards .sba-block').first()
      .locator('[data-sba-field="instruments"]').inputValue();
    await soundPanel.locator('[data-sba-action="sound-switch-mode"]').first().click();
    const soundSearch = soundPanel.locator('[data-sba-sound-search="genres"]');
    await soundSearch.waitFor({ state: 'visible' });
    await soundSearch.fill('ска');
    await soundPanel.locator('[data-genre-id="reggae-ska"]').waitFor({ state: 'visible' });
    await soundPanel.locator('[data-genre-id="reggae-ska"]').click();
    await soundPanel.locator('[data-sba-sound-search="sounds"]').waitFor();
    if (!(await soundPanel.locator('.sba-sound-genre-trigger').textContent())?.includes('Ска')) {
      throw new Error('Vue sound library did not switch to the Academy ska genre');
    }
    if (await page.locator('#sba-cards .sba-block').first()
        .locator('[data-sba-field="instruments"]').inputValue() !== manualInstruments) {
      throw new Error('Changing the sound library genre overwrote the user instruments');
    }
    const suggestion = soundPanel.locator('.sba-sound-option:not([disabled])').first();
    await suggestion.waitFor();
    const addedSound = (await suggestion.locator('span').textContent())?.trim();
    await suggestion.click();
    await page.waitForFunction(sound =>
      SUNOBOOM_ARRANGER.exportDraft().blocks[0]?.instruments.includes(sound), addedSound);
    await soundPanel.locator('[data-sba-action="sound-close"]').click();
    await soundPanel.waitFor({ state: 'detached' });

    // Lyrics and Style share the canonical generator, not a duplicated Vue algorithm.
    await page.locator('.sba-result [data-sba-action="tab"][data-tab="style"]').click();
    await page.waitForFunction(() => document.getElementById('sba-preview')?.value === SUNOBOOM_ARRANGER.getStyle());
    if (!((await page.locator('#sba-preview').inputValue()) || '').includes('Arrangement:')) {
      throw new Error('Vue Style preview lost arrangement information');
    }
    await page.locator('.sba-result [data-sba-action="tab"][data-tab="lyrics"]').click();
    await page.waitForFunction(() => document.getElementById('sba-preview')?.value === SUNOBOOM_ARRANGER.getLyrics());

    // Disable mixer handoff to test the normal Studio style limit/confirmation.
    if (await page.locator('.gm-studio-banner [data-action="gm-unlink"]').count()) {
      await page.locator('.gm-studio-banner [data-action="gm-unlink"]').click();
      await page.locator('.sba-result[data-v-app]').waitFor();
    }
    await page.locator('#b-theme').fill('');
    await page.locator('#b-extra').fill('keep original instructions');
    const beforeStyleTransfer = await page.locator('#b-extra').inputValue();
    await page.locator('.sba-result [data-sba-action="prepare-transfer"]').click();
    await page.locator('.sba-result .sba-transfer-preview').waitFor({ state: 'visible' });
    if (await page.locator('#b-extra').inputValue() !== beforeStyleTransfer) {
      throw new Error('Vue arrangement transfer changed Studio data before confirmation');
    }
    await page.locator('.sba-result [data-sba-action="transfer-cancel"]').click();
    await page.locator('.sba-transfer-preview').waitFor({ state: 'detached' });
    if (await page.locator('#b-extra').inputValue() !== beforeStyleTransfer) {
      throw new Error('Canceling a transfer modified Studio instructions');
    }
    await page.locator('.sba-result [data-sba-action="prepare-transfer"]').click();
    await page.locator('.sba-result [data-sba-action="transfer-accept"]').click();
    await page.waitForFunction(() =>
      builder.extra.startsWith('keep original instructions') &&
      builder.extra.includes('Arrangement:'));
    if (await page.locator('#b-extra').inputValue() !== await page.evaluate(() => builder.extra)) {
      throw new Error('The Vue Studio extra field lost the approved style transfer');
    }

    // Search the full Academy hierarchy through the Vue preset-picker UI.
    const picker = page.locator('.sba-preset-picker[data-v-app]');
    await picker.locator('#sba-presets').click();
    await picker.locator('#sba-preset-menu:not([hidden])').waitFor();
    await picker.locator('[data-sba-action="menu-filter"][data-filter="genres"]').click();
    await picker.locator('#sba-preset-search').fill('ска');
    const genreChoice = picker.locator('[data-choice="genre:reggae-ska"]');
    await genreChoice.waitFor({ state: 'visible' });
    if (await picker.locator('#sba-preset-results [data-sba-action="menu-choose"]').count() < 1) {
      throw new Error('Vue genre search returned no matches');
    }
    await genreChoice.click();
    await picker.locator('#sba-preset-menu[hidden]').waitFor({ state: 'attached' });
    if (!(await picker.locator('#sba-picked-label').textContent())?.includes('Ска')) {
      throw new Error('Vue picker did not select the requested genre');
    }
    const oldCount = await page.evaluate(() => SUNOBOOM_ARRANGER.getBlockCount());
    await page.locator('.sba-toolbar [data-sba-action="request-preset"]').click();
    await page.locator('#sba-preset-confirm [data-sba-action="preset-cancel"]').waitFor();
    await page.locator('#sba-preset-confirm [data-sba-action="preset-cancel"]').click();
    if (await page.evaluate(() => SUNOBOOM_ARRANGER.getBlockCount()) !== oldCount) {
      throw new Error('Canceling the Vue genre preset modified the arrangement');
    }
    await page.locator('.sba-toolbar [data-sba-action="request-preset"]').click();
    await page.locator('#sba-preset-confirm [data-sba-action="preset-accept"]').click();
    const applied = await page.evaluate(() => ({
      preset: SUNOBOOM_ARRANGER.exportDraft().activePreset,
      draft: JSON.parse(localStorage.getItem('sunoboom-arrangement-v066') || '{}').activePreset,
      count: SUNOBOOM_ARRANGER.getBlockCount()
    }));
    if (applied.preset !== 'genre:reggae-ska' ||
        applied.draft !== applied.preset || applied.count < 1) {
      throw new Error('Academy preset not applied through the Vue picker: ' + JSON.stringify(applied));
    }
    if (await page.locator('#sba-cards .sba-block').count() !== applied.count ||
        !(await page.locator('#sba-preview').inputValue()).trim()) {
      throw new Error('Vue arrangement views did not update after selecting an Academy preset');
    }

    // Vue 3 poetry editor and performance tags (v0.105) are on the original
    // "My ideas" route; the actual song text always remains outside Vue.
    await page.evaluate(() => go('myideas'));
    const poetryMountState = await page.evaluate(() => ({
      route: view.nav,
      api: typeof window.SUNOBOOM_LEGACY_POETRY?.analysis,
      tags: typeof window.SUNOBOOM_LEGACY_TAGS?.snapshot,
      result: !!document.getElementById('sb-poetry-result'),
      tagPanel: !!document.getElementById('sb-vt-workbench')
    }));
    if (poetryMountState.route !== 'myideas' || poetryMountState.api !== 'function' ||
        poetryMountState.tags !== 'function' || !poetryMountState.result || !poetryMountState.tagPanel) {
      throw new Error('Poetry bridge or original editor missing: ' + JSON.stringify(poetryMountState));
    }
    await page.locator('#sb-poetry-result[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    await page.locator('#sb-vt-workbench[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    const lyricText = [
      'Куплет 1:', 'Я вижу замок на холме', 'И снова мысли обо мне',
      '', 'Припев:', 'Я слышу музыку во мне', 'И вижу город в тишине'
    ].join('\n');
    await page.locator('#custom-idea-lyrics').fill(lyricText);
    await page.locator('[data-action="sb-poetry-analyze"]').click();
    await page.waitForFunction(() =>
      document.querySelector('#sb-poetry-result .sb-poetry-stats') &&
      document.querySelectorAll('#sb-poetry-result .sb-poetry-line').length === 4);
    const poetryState = await page.evaluate(() => ({
      source: document.getElementById('custom-idea-lyrics').value,
      stats: document.querySelector('#sb-poetry-result .sb-poetry-stats')?.textContent,
      original: document.querySelector('#sb-poetry-result').dataset.analyzed,
      lyricCount: window.SUNOBOOM_LEGACY_POETRY.analysis()?.rowCount
    }));
    if (poetryState.source !== lyricText || poetryState.original !== 'true' ||
        poetryState.lyricCount !== 4 || !poetryState.stats?.includes('4')) {
      throw new Error('Vue poetry analysis changed original lyrics or lost rows: ' + JSON.stringify(poetryState));
    }
    await page.locator('#custom-idea-lyrics').fill(lyricText + '\nНовая строка');
    await page.waitForFunction(() =>
      document.querySelector('#sb-poetry-result .sb-poetry-empty')?.textContent?.includes('Текст изменён'));
    await page.locator('#custom-idea-lyrics').fill(lyricText);
    await page.locator('[data-action="sb-poetry-analyze"]').click();

    // Auto-stress still loads the original FSA dictionary and highlights
    // unresolved homographs; Vue renders only the safe choice list.
    await page.locator('[data-action="sb-poetry-auto-stress"]').click();
    await page.locator('#sb-poetry-stress-preview').waitFor({ state: 'visible', timeout: 20000 });
    await page.locator('#sb-poetry-ambiguous-choices[data-v-app]').waitFor({ state: 'attached' });
    const ambiguity = page.locator(
      '#sb-poetry-ambiguous-choices [data-action="sb-poetry-stress-choice"][data-word="замок"]');
    if (await ambiguity.count() < 2 ||
        await page.locator('.sb-stress-ambiguous-word').count() < 1) {
      throw new Error('Vue homograph choices or original red stress highlighting are missing');
    }
    await ambiguity.first().click();
    await page.waitForFunction(() =>
      !document.querySelector('#sb-poetry-ambiguous-choices [data-word="замок"]'));
    if (await page.locator('#custom-idea-lyrics').inputValue() !== lyricText) {
      throw new Error('Choosing stress changed the original text before confirmation');
    }
    await page.locator('[data-action="sb-poetry-stress-apply"]').click();
    await page.waitForFunction(() =>
      document.getElementById('custom-idea-lyrics')?.value?.includes('замо\u0301к') ||
      document.getElementById('custom-idea-lyrics')?.value?.includes('за\u0301мок'));
    const stressedLyrics = await page.locator('#custom-idea-lyrics').inputValue();
    if (stressedLyrics === lyricText || !(stressedLyrics.includes('за\u0301мок') || stressedLyrics.includes('замо\u0301к'))) {
      throw new Error('Stress confirmation was not applied to the original song editor');
    }

    // Vue performance tags remain fully rules-based when no Gemini server is
    // configured, and only modify the generated Lyrics field upon approval.
    const tags = page.locator('#sb-vt-workbench[data-v-app]');
    await tags.locator('#sb-vt-mode').selectOption('rules');
    await tags.locator('#sb-vt-source').selectOption('original');
    await tags.locator('#sb-vt-intensity').evaluate(input => {
      input.value = '4';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await page.waitForFunction(() =>
      data.performanceTagSettings?.mode === 'rules' &&
      data.performanceTagSettings?.source === 'original' &&
      data.performanceTagSettings?.intensity === 4);
    const originalBeforeTags = await page.locator('#custom-idea-lyrics').inputValue();
    const taggedBefore = await page.locator('#custom-idea-tagged').inputValue();
    await tags.locator('[data-action="vt-generate"]').click();
    await tags.locator('#sb-vt-preview').waitFor({ state: 'visible' });
    if (await tags.locator('.sb-vt-section').count() < 2 ||
        await page.locator('#custom-idea-tagged').inputValue() !== taggedBefore ||
        await page.locator('#custom-idea-lyrics').inputValue() !== originalBeforeTags) {
      throw new Error('Vue vocal tags preview overwrote either source field before approval');
    }
    const defaultTag = await tags.locator('#sb-vt-preview').inputValue();
    if (!defaultTag.includes('Vocal delivery:')) {
      throw new Error('Local performance tags did not generate section delivery cues');
    }
    await tags.locator('[data-vt-cue="0"]').fill('Warm Emotional Vocals');
    await tags.locator('[data-action="vt-refresh"]').click();
    await page.waitForFunction(() =>
      document.getElementById('sb-vt-preview')?.value?.includes('Warm Emotional Vocals'));
    await tags.locator('[data-action="vt-apply"]').click();
    await page.waitForFunction(() =>
      document.getElementById('custom-idea-tagged')?.value?.includes('Warm Emotional Vocals'));
    if (await page.locator('#custom-idea-lyrics').inputValue() !== originalBeforeTags ||
        await tags.locator('#sb-vt-preview').count() !== 0) {
      throw new Error('Applying performance tags changed original words or failed to close the preview');
    }

    const version = await page.locator('.sb-app-version').first().textContent();
    if (!/^v?\d+\.\d+$/.test(String(version || '').trim())) throw new Error('Version display missing or malformed');

    const bad = errors.filter(error => /Vue navigation unavailable|Vue mount failed|Failed to resolve module/i.test(error));
    if (bad.length) throw new Error('Vue startup failure: ' + bad.join('; '));
    console.log((mobile ? 'Mobile' : 'Desktop') + ' Vue navigation smoke PASS');
  } finally {
    await context.close();
  }
}

try {
  await ready();
  browser = await chromium.launch({ headless: true });
  await checkLayout(false);
  await checkLayout(true);
} finally {
  await browser?.close();
  server.kill('SIGTERM');
}
