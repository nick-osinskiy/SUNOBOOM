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
