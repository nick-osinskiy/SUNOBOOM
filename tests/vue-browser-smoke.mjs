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
    viewport: mobile ? { width: 375, height: 812 } : { width: 1440, height: 900 },
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
    const history136 = page.locator('[data-sb-vue-history][data-v-app]');
    await history136.waitFor({ state: 'attached', timeout: 10000 });
    const back136 = history136.locator('button[data-sb-history-back]');
    const forward136 = history136.locator('button[data-sb-history-forward]');
    if (await back136.count() !== 1 || await forward136.count() !== 1 ||
        !(await back136.isDisabled()) || !(await forward136.isDisabled()) ||
        await back136.getAttribute('aria-label') !== 'Назад по разделам' ||
        await forward136.getAttribute('aria-label') !== 'Вперёд по разделам') {
      throw new Error('Vue history toolbar buttons missing, duplicated or enabled on startup');
    }
    // Toolbar lives in the content area, never in the narrow mobile bottom bar.
    if (await page.locator('.mobile-nav [data-sb-history-back]').count() ||
        await page.locator('.top [data-sb-history-back]').count()) {
      throw new Error('History controls overlap mobile navigation or top shortcuts');
    }

    // v0.130: both Vue menus share one read-only legacy route observer.
    // v0.131: Vue Router follows legacy navigation in MEMORY only.
    // It must never alter location/history or become a second source of pages.
    await page.waitForFunction(() => window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.path === '/home');
    await page.waitForFunction(() => ['[data-sb-vue-sidebar]', '[data-sb-vue-mobile]']
      .every(selector => document.querySelector(selector + ' button[data-nav="home"]')
        ?.getAttribute('data-vue-router-path') === '/home'));
    // All links remain BUTTONS: no browser navigation/href and no duplicate
    // generated labels when the compatibility adapter is active.
    const linkCheck133 = await page.locator('[data-sb-vue-mobile] button[data-nav]')
      .evaluateAll(nodes => nodes.every(n => n.tagName === 'BUTTON' && !n.hasAttribute('href')));
    if (!linkCheck133) throw new Error('Vue adapter replaced existing mobile buttons with browser links');
    if (await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE.routerSnapshot().active) !== 'home' ||
        page.url() !== BASE) {
      throw new Error('Vue Router memory mirror changed initial browser URL or route');
    }
    // v0.135: memory history starts without a previous entry.
    const emptyHistory135 = await page.evaluate(async () => ({
      canBack: window.SUNOBOOM_VUE_ROUTE.routerSnapshot().canGoBack,
      restored: await window.SUNOBOOM_VUE_ROUTE.back()
    }));
    if (emptyHistory135.canBack || emptyHistory135.restored) {
      throw new Error('Vue Router history restored a route before one was recorded');
    }
    const initialRoute130 = await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE?.snapshot());
    if (!initialRoute130 || initialRoute130.route !== 'home' || initialRoute130.active !== 'home' ||
        await page.locator('[data-sb-vue-sidebar] button.active').count() !== 1 ||
        await page.locator('[data-sb-vue-mobile] button.active').count() !== 1) {
      throw new Error('Shared Vue route did not synchronize the initial menu state');
    }
    await page.evaluate(() => render());
    await page.locator('[data-sb-vue-sidebar][data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE.snapshot().revision) !== initialRoute130.revision) {
      throw new Error('Legacy re-render with same route caused duplicate reactive update');
    }

    const nav = mobile ? '.mobile-nav' : '[data-sb-vue-sidebar]';
    const master = page.locator(nav + ' button[data-nav="producer"]');
    // The lower/mobile bar must not show “миксер” twice, even when
    // legacy extensions use different route IDs for the same destination.
    const mixerEntries = page.locator(nav + ' button').filter({ hasText: /миксер/i });
    if (await mixerEntries.count() !== 1 ||
        (mobile && (await mixerEntries.first().innerText()).trim() !== 'Миксер')) {
      throw new Error('Duplicate or overlong Mixer label in the navigation');
    }
    if (mobile) {
      // Verify text inside the SAME button, not merely the number of buttons.
      // Regression: iPhone showed a desktop 'Миксер' beside the icon and a
      // second 'Миксер' underneath, although the route existed only once.
      const mixerButton = page.locator('.mobile-nav button[data-nav="mixer"]');
      const structure = await mixerButton.evaluate(button => ({
        captionCount: button.querySelectorAll(':scope > .sb-vue-nav-label').length,
        caption: button.querySelector(':scope > .sb-vue-nav-label')?.textContent?.trim(),
        allText: button.textContent.replace(/\s+/g, ' ').trim(),
        accessibleTextOccurrences: (button.textContent.match(/миксер/gi) || []).length,
        iconText: button.querySelector(':scope > .sb-vue-nav-icon')?.textContent?.trim()
      }));
      if (structure.captionCount !== 1 || structure.caption !== 'Миксер' ||
          structure.accessibleTextOccurrences !== 1 || structure.iconText !== '') {
        throw new Error('Mobile Mixer rendered two captions in one button: ' +
          JSON.stringify(structure));
      }
      // v0.125: The real cause was genre-mixer.css adding "Миксер" via
      // ::after on EVERY span in the button, including the icon wrapper.
      // A single text node is not enough: reject generated pseudo-labels.
      const generatedCaptions = await mixerButton.evaluate(button =>
        [...button.querySelectorAll('span')].map(span => ({
          className: span.className,
          after: getComputedStyle(span, '::after').content,
          fontSize: getComputedStyle(span).fontSize
        }))
      );
      if (generatedCaptions.some(caption => /миксер/i.test(caption.after || '')) ||
          !generatedCaptions.some(caption =>
            caption.className === 'sb-vue-nav-label' && parseFloat(caption.fontSize) > 0)) {
        throw new Error('Mixer duplicate text generated by CSS: ' + JSON.stringify(generatedCaptions));
      }
    }
    if (mobile) {
      const menuBounds = await page.locator(nav + ' button[data-nav]').evaluateAll(buttons =>
        buttons.map(button => {
          const rect = button.getBoundingClientRect();
          return { left: rect.left, right: rect.right, width: rect.width };
        })
      );
      const viewportWidth = page.viewportSize().width;
      if (menuBounds.some((item, index) =>
        item.width < 1 || item.left < -0.5 || item.right > viewportWidth + 0.5 ||
        (index > 0 && item.left < menuBounds[index - 1].right - 0.5))) {
        throw new Error('Mobile navigation items overlap or overflow at 375px');
      }
    }
    // v0.123: extensions may register the same Mixer destination under another
    // ID. Both original fallback markup and the Vue snapshot must expose one.
    const duplicateCheck = await page.evaluate(() => {
      navs.push(['mixer-copy-test', 'Дополнительный миксер', 'mixer']);
      try {
        render();
        const navLabels = selector => [...document.querySelectorAll(selector + ' button')]
          .map(el => el.textContent.trim())
          .filter(label => /миксер/i.test(label)).length;
        const snapshotCount = window.SUNOBOOM_LEGACY_NAV.snapshot().items
          .filter(item => /миксер/i.test(item.label)).length;
        return {
          mobileCount: navLabels('.mobile-nav'),
          desktopCount: navLabels('[data-sb-vue-sidebar]'),
          snapshotCount
        };
      } finally {
        navs.pop();
        render();
      }
    });
    if (duplicateCheck.mobileCount !== 1 || duplicateCheck.desktopCount !== 1 ||
        duplicateCheck.snapshotCount !== 1) {
      throw new Error('Mixer entry duplicated between legacy and Vue navigation: ' +
        JSON.stringify(duplicateCheck));
    }
    await master.waitFor();
    if (await master.count() !== 1) throw new Error('Master link missing or duplicated');

    const beforeMenuPush134 = await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE.routerSnapshot().menuPushes);
    // v0.133: the Vue Router menu adapter must dispatch EXACTLY ONE legacy
    // go() per click, even though the Vue route mirror also updates.
    await page.evaluate(() => {
      window.__sb133GoCalls = 0;
      window.__sb133OldGo = go;
      go = function (...args) {
        window.__sb133GoCalls++;
        return window.__sb133OldGo(...args);
      };
    });
    await master.click();
    await page.locator(nav + ' button[data-nav="producer"].active').waitFor({ timeout: 10000 });
    const goCalls133 = await page.evaluate(() => {
      const count = window.__sb133GoCalls;
      go = window.__sb133OldGo;
      delete window.__sb133OldGo;
      delete window.__sb133GoCalls;
      return count;
    });
    if (goCalls133 !== 1) {
      throw new Error('Vue Router menu adapter dispatched legacy go() ' + goCalls133 + ' times');
    }
    await page.waitForFunction(() => window.SUNOBOOM_VUE_ROUTE?.snapshot()?.route === 'producer');
    await page.waitForFunction(() => {
      const route = window.SUNOBOOM_VUE_ROUTE?.routerSnapshot();
      return route?.path === '/producer' && route?.transition === 'push';
    });
    if (await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE.routerSnapshot().menuPushes) !== beforeMenuPush134 + 1) {
      throw new Error('Vue menu click should add exactly one memory history entry');
    }
    await page.waitForFunction(() => ['[data-sb-vue-sidebar]', '[data-sb-vue-mobile]']
      .every(selector => document.querySelector(selector + ' button[data-nav="producer"]')
        ?.getAttribute('data-vue-router-path') === '/producer'));
    if (page.url() !== BASE) {
      throw new Error('Vue Router memory mirror modified browser history on Master navigation');
    }
    if (await page.locator('[data-sb-vue-sidebar] button[data-nav="producer"][aria-current="page"]').count() !== 1 ||
        await page.locator('[data-sb-vue-mobile] button[data-nav="producer"][aria-current="page"]').count() !== 1) {
      throw new Error('Both Vue menus did not follow the Master route');
    }

    await page.locator(nav + ' button[data-nav="studio"]').click();
    await page.locator(nav + ' button[data-nav="studio"].active').waitFor({ timeout: 10000 });
    await page.waitForFunction(expected => {
      const route = window.SUNOBOOM_VUE_ROUTE?.routerSnapshot();
      return route?.path === '/studio' && route?.menuPushes === expected;
    }, beforeMenuPush134 + 2);

    // v0.135: explicit memory Back/Forward safely restores ONLY valid
    // top-level routes using the existing go(), never browser history.
    // v0.136 exercises actual Vue toolbar clicks, not only the diagnostic API.
    await page.waitForFunction(() => {
      const buttons = document.querySelectorAll('[data-sb-vue-history] button');
      return buttons.length === 2 && !buttons[0].disabled && buttons[1].disabled;
    });
    await back136.click();
    await page.waitForFunction(() => {
      const route = window.SUNOBOOM_VUE_ROUTE?.routerSnapshot();
      return route?.path === '/producer' && route.transition === 'back' &&
        view.nav === 'producer';
    });
    const back135 = await page.evaluate(() => ({
      after: window.SUNOBOOM_VUE_ROUTE.routerSnapshot(),
      legacyRoute: view.nav
    }));
    if (back135.legacyRoute !== 'producer' || !back135.after.canGoForward ||
        back135.after.menuPushes !== beforeMenuPush134 + 2) {
      throw new Error('Vue Back button did not restore Master: ' + JSON.stringify(back135));
    }
    await page.locator(nav + ' button[data-nav="producer"].active').waitFor({ timeout: 10000 });
    await forward136.waitFor({ state: 'visible', timeout: 10000 });
    await page.waitForFunction(() =>
      !document.querySelector('[data-sb-vue-history] button[data-sb-history-forward]')?.disabled);
    await forward136.click();
    await page.waitForFunction(() => {
      const route = window.SUNOBOOM_VUE_ROUTE?.routerSnapshot();
      return route?.path === '/studio' && route.transition === 'forward' &&
        view.nav === 'studio';
    });
    const forward135 = await page.evaluate(() => ({
      after: window.SUNOBOOM_VUE_ROUTE.routerSnapshot(), legacyRoute: view.nav
    }));
    if (forward135.legacyRoute !== 'studio' ||
        forward135.after.canGoForward || forward135.after.menuPushes !== beforeMenuPush134 + 2 ||
        page.url() !== BASE) {
      throw new Error('Vue Forward button changed URL or failed: ' + JSON.stringify(forward135));
    }
    await page.locator(nav + ' button[data-nav="studio"].active').waitFor({ timeout: 10000 });
    if (await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE?.snapshot()?.route) !== 'studio') {
      throw new Error('Shared route did not follow Studio');
    }

    await page.locator(nav + ' button[data-nav="account"]').click();
    await page.locator(nav + ' button[data-nav="account"].active').waitFor({ timeout: 10000 });
    if (await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE?.snapshot()?.active) !== 'account') {
      throw new Error('Shared route did not follow Account');
    }


    // v0.110: Vue prompt form and saved list coexist with legacy save, cancel and auditor actions.
    await page.evaluate(() => go('myprompts'));
    await page.locator('#sb-vue-prompts-list[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    await page.locator('#sb-vue-prompt-form[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#custom-prompt-text').getAttribute('maxlength') !== '1000') {
      throw new Error('Vue prompt form lost the 1000-character input limit');
    }
    if (await page.locator('#prompt-editor').count() !== 1 ||
        await page.locator('#prompt-editor [data-sbpa-action="from-editor"]').count() !== 1) {
      throw new Error('Prompt editor or auditor link was lost');
    }
    await page.locator('#custom-prompt-title').fill('Vue test <title>');
    await page.locator('#custom-prompt-text').fill('Russian indie pop, clear vocals');
    if (!(await page.locator('#sb-prompt-char-count').textContent()).includes('31 / 1000')) {
      throw new Error('Vue prompt character counter did not update');
    }
    await page.locator('#prompt-editor [data-action="save-manual-prompt"]').click();
    await page.locator('#sb-vue-prompts-list[data-v-app]').waitFor({ state: 'attached' });
    const idPrompt = await page.evaluate(() => data.savedPrompts.at(-1)?.id);
    if (!idPrompt || !(await page.locator('#sb-vue-prompts-list').textContent()).includes('Vue test <title>')) {
      throw new Error('Vue prompt collection did not render the saved record');
    }
    await page.locator('#sb-vue-prompts-list [data-action="edit-manual-prompt"][data-id="' + idPrompt + '"]').click();
    await page.locator('#sb-vue-prompt-form[data-v-app]').waitFor({ state: 'attached' });
    if (await page.locator('#custom-prompt-title').inputValue() !== 'Vue test <title>') {
      throw new Error('Vue prompt edit did not restore the saved title');
    }
    await page.locator('#custom-prompt-text').fill('Russian indie pop, 118 BPM');
    await page.locator('#prompt-editor [data-action="save-manual-prompt"]').click();
    if (await page.evaluate(id => data.savedPrompts.find(p => p.id === id)?.text, idPrompt) !== 'Russian indie pop, 118 BPM') {
      throw new Error('Prompt edits stopped persisting');
    }
    await page.locator('#sb-vue-prompts-list [data-action="copy-saved"][data-id="' + idPrompt + '"]').click();
    await page.locator('#sb-vue-prompts-list [data-action="delete-saved"][data-id="' + idPrompt + '"]').click();
    if (await page.evaluate(id => data.savedPrompts.some(p => p.id === id), idPrompt)) {
      throw new Error('Legacy delete prompt action was lost');
    }

    // Vue now owns search, filtering, family details and all genre cards.
    await page.locator(nav + ' button[data-nav="catalog"]').click();
    await page.locator('#sb-vue-academy-root[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });

    // v0.127: genre tree is an existing full-feature legacy tool.
    // Its container must survive the Vue catalog mount and work on both layouts.
    const treeEntry = page.locator('.encyclopedia-sections [data-sb-gt-action="reveal"]');
    const genreTree = page.locator('#sb-genre-tree');
    if (await treeEntry.count() !== 1 || await genreTree.count() !== 1 ||
        await page.locator('#sb-vue-academy-root #sb-genre-tree').count() !== 0) {
      throw new Error('Genre tree tile or its independent mount target disappeared under Vue');
    }
    await treeEntry.click();
    await page.locator('#sb-genre-tree[open] #sb-gt-tree-choice').waitFor({ state: 'visible', timeout: 10000 });
    if (await genreTree.locator('.sb-gt-node').count() < 5 ||
        await genreTree.locator('[data-sb-gt-action="zoom-in"]').count() !== 1) {
      throw new Error('Existing interactive genre genealogy did not render after opening');
    }
    await genreTree.locator('#sb-gt-tree-choice').selectOption('all');
    await page.waitForFunction(() => document.querySelectorAll('#sb-genre-tree .sb-gt-node').length > 100);
    await genreTree.locator('#sb-gt-search').fill('ска-панк');
    if (await genreTree.locator('[data-sb-gt-action="search-jump"]').count() < 1) {
      throw new Error('Full-collection genre tree search stopped working');
    }
    await genreTree.locator('[data-sb-gt-action="zoom-in"]').click();
    if ((await genreTree.locator('#sb-gt-zoom-label').textContent()).trim() !== '115%') {
      throw new Error('Genre tree zoom stopped responding');
    }
    await genreTree.locator('[data-sb-gt-action="zoom-reset"]').click();
    await genreTree.locator('[data-sb-gt-action="search-jump"]').first().click();
    if (await genreTree.locator('.sb-gt-node.is-selected').count() !== 1 ||
        !(await genreTree.locator('#sb-gt-description').textContent()).includes('Ска-панк')) {
      throw new Error('Genre tree selection/search results stopped opening genre details');
    }
    await genreTree.locator('.sb-gt-open').click();
    await page.locator('#sb-vue-genre-detail[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    await page.locator('.gb-top [data-action="academy-back"]').click();
    await page.locator('#sb-vue-academy-root[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#sb-genre-tree').count() !== 1) {
      throw new Error('Genre tree was lost after returning from a genre card');
    }

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
    const beforeGenre137 = await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE.routerSnapshot());
    await ska.click();
    await page.locator('.genre-bright h1.gb-title').waitFor({ timeout: 10000 });
    const genreTitle = await page.locator('.genre-bright h1.gb-title').textContent();
    if (!genreTitle?.toLocaleLowerCase('ru').includes('ска')) {
      throw new Error('Genre card did not open the expected detail page: ' + genreTitle);
    }

    const genreRoute130 = await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE?.snapshot());
    await page.waitForFunction(() => {
      const mirror = window.SUNOBOOM_VUE_ROUTE?.routerSnapshot();
      return mirror?.path === '/catalog/detail' &&
        mirror?.context?.kind === 'genre' &&
        mirror.context.id === 'reggae-ska' && mirror.context.tab === 'overview';
    });
    const afterGenre137 = await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE.routerSnapshot());
    if (!afterGenre137.canGoBack || afterGenre137.historyDepth !== beforeGenre137.historyDepth + 1 ||
        afterGenre137.menuPushes !== beforeGenre137.menuPushes) {
      throw new Error('Genre detail did not record a context-aware history entry');
    }
    await page.waitForFunction(() => ['[data-sb-vue-sidebar]', '[data-sb-vue-mobile]']
      .every(selector => document.querySelector(selector + ' button[data-nav="catalog"]')
        ?.getAttribute('data-vue-router-path') === '/catalog/detail'));
    if (genreRoute130?.route !== 'detail' || genreRoute130.active !== 'catalog' ||
        await page.locator('[data-sb-vue-sidebar] button[data-nav="catalog"][aria-current="page"]').count() !== 1 ||
        await page.locator('[data-sb-vue-mobile] button[data-nav="catalog"][aria-current="page"]').count() !== 1) {
      throw new Error('Genre detail failed to activate Academy in both shared Vue menus');
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
    // v0.137: restore the exact genre and Vue-managed Artists tab, not just
    // the generic /catalog/detail route. The browser URL must not change.
    await page.waitForFunction(() =>
      window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.context?.tab === 'artists');
    const genreHistoryBack137 = page.locator('[data-sb-vue-history] [data-sb-history-back]');
    const genreHistoryForward137 = page.locator('[data-sb-vue-history] [data-sb-history-forward]');
    await page.waitForFunction(() =>
      !document.querySelector('[data-sb-vue-history] [data-sb-history-back]')?.disabled);
    await genreHistoryBack137.click();
    await page.waitForFunction(() =>
      view.nav === 'catalog' &&
      window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.path === '/catalog');
    // The Academy starts with collapsed genre families. Their cards exist in
    // the DOM but are intentionally hidden until the family is expanded.
    await page.locator('#catalog-cards details.genre-family').first()
      .waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#genre-search').inputValue() !== 'ска') {
      throw new Error('History Back lost the Academy search context');
    }
    await page.waitForFunction(() =>
      !document.querySelector('[data-sb-vue-history] [data-sb-history-forward]')?.disabled);
    await genreHistoryForward137.click();
    await page.locator('.genre-side-item[data-tab="artists"].active').waitFor({ timeout: 10000 });
    const restoredGenre137 = await page.evaluate(() => ({
      id: view.selected, tab: view.tab, route: view.nav,
      mirror: window.SUNOBOOM_VUE_ROUTE.routerSnapshot()
    }));
    if (restoredGenre137.id !== 'reggae-ska' || restoredGenre137.tab !== 'artists' ||
        restoredGenre137.route !== 'detail' || restoredGenre137.mirror.path !== '/catalog/detail' ||
        restoredGenre137.mirror.context?.id !== 'reggae-ska' ||
        restoredGenre137.mirror.context?.tab !== 'artists' || page.url() !== BASE) {
      throw new Error('History did not restore the selected genre and Artists tab: ' +
        JSON.stringify(restoredGenre137));
    }
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
    // "My ideas" route; native fields retain the original text-processing handlers.
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
    for (const id of ['sb-vue-idea-fields', 'sb-vue-lyrics-source', 'sb-vue-lyrics-tools']) {
      await page.locator('#' + id + '[data-v-app]').waitFor({ state: 'attached' });
    }
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

    // v0.106: generated and manually edited output survives reactive updates,
    // persistence, reload and cancelled edits. Source text must stay independent.
    await page.locator('#custom-idea-title').fill('Vue editor persistence');
    await page.locator('#custom-idea-text').fill('Сюжет тестовой песни');
    await page.locator('#custom-idea-hook').fill('Припев остаётся с нами');
    await page.locator('#lyrics-tag-preset').selectOption('emotional');
    // General-format replacement has its existing explicit confirmation.
    page.once('dialog', dialog => dialog.accept());
    await page.locator('[data-action="format-idea-lyrics"]').click();
    const generatedOutput = await page.evaluate(() => ({
      lyrics: document.getElementById('custom-idea-tagged').value,
      style: document.getElementById('custom-idea-style').value,
      source: document.getElementById('custom-idea-lyrics').value
    }));
    if (!generatedOutput.lyrics.includes('[Verse') || !generatedOutput.style ||
        generatedOutput.source !== originalBeforeTags) throw new Error('Lyrics/Style generation lost text');
    await page.locator('#lyrics-harmonies').check();
    if (await page.locator('#custom-idea-tagged').inputValue() !== generatedOutput.lyrics ||
        await page.locator('#custom-idea-style').inputValue() !== generatedOutput.style) {
      throw new Error('Vue rerender overwrote programmatically generated output');
    }
    const manualLyrics = generatedOutput.lyrics + '\nРучная строка <без HTML>';
    const manualStyle = 'clean studio vocals, warm piano';
    await page.locator('#custom-idea-tagged').fill(manualLyrics);
    await page.locator('#custom-idea-style').fill(manualStyle);
    await page.locator('#lyrics-tag-preset').selectOption('soft');
    await page.locator('[data-action="save-manual-idea"]').click();
    const stored = await page.evaluate(() =>
      JSON.parse(localStorage.getItem('sunoboom-v1')).manualIdeas.find(x => x.title === 'Vue editor persistence'));
    if (!stored || stored.lyrics !== originalBeforeTags || stored.sunoLyrics !== manualLyrics ||
        stored.sunoStyle !== manualStyle || stored.hook !== 'Припев остаётся с нами') {
      throw new Error('Vue editor persistence changed the existing song schema or content');
    }
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.locator('[data-sb-vue-sidebar][data-v-app]').waitFor({ state: 'attached' });
    await page.evaluate(() => go('myideas'));
    await page.locator('[data-action="edit-manual-idea"][data-id="' + stored.id + '"]').click();
    await page.locator('#sb-vue-lyrics-tools[data-v-app]').waitFor({ state: 'attached' });
    if (await page.locator('#custom-idea-tagged').inputValue() !== manualLyrics ||
        await page.locator('#custom-idea-style').inputValue() !== manualStyle ||
        await page.locator('#custom-idea-lyrics').inputValue() !== originalBeforeTags) {
      throw new Error('Reloading an edited song lost saved fields');
    }
    await page.locator('#custom-idea-style').fill('Unsaved change');
    await page.locator('[data-action="cancel-manual-idea"]').click();
    await page.locator('[data-action="edit-manual-idea"][data-id="' + stored.id + '"]').click();
    await page.locator('#sb-vue-lyrics-tools[data-v-app]').waitFor({ state: 'attached' });
    if (await page.locator('#custom-idea-style').inputValue() !== manualStyle ||
        await page.locator('#custom-idea-lyrics').count() !== 1) {
      throw new Error('Cancel changed saved data or duplicated the editor');
    }

    // v0.107: all three collections keep their original actions and data.
    const fixture = await page.evaluate(() => {
      const genre = GENRES.find(g => g.ideas?.length);
      const generated = { id: 'vue-collection-generated', genre: genre.id, title: 'Idea Lab <literal>',
        pitch: 'История из генератора', topic: 'Дорога', storyLine: 'Начало и возвращение',
        hook: 'Дом ждёт нас', detail: 'Старый вокзал', mood: 'nostalgic', vocal: 'male', language: 'ru' };
      data.savedGeneratedIdeas = [generated];
      data.savedIdeas = [genre.id + ':0'];
      persist(); go('myideas');
      window.__collectionCopies = [];
      window.__collectionCopyOriginal = copyText;
      copyText = text => { window.__collectionCopies.push(text); };
      return { genre: genre.id, academyTitle: genre.ideas[0].title };
    });
    const collections = page.locator('#sb-vue-idea-collections');
    await page.locator('#sb-vue-idea-collections[data-v-app]').waitFor({ state: 'attached' });
    if (await collections.locator('[data-idea-collection]').count() !== 3 ||
        !(await collections.textContent()).includes('Idea Lab <literal>')) {
      throw new Error('Vue idea collections lost a group or interpreted title as HTML');
    }
    await collections.locator('[data-action="copy-manual-idea"][data-id="' + stored.id + '"]').click();
    await collections.locator('[data-action="copy-saved-lyrics"][data-id="' + stored.id + '"]').click();
    await collections.locator('[data-action="generated-copy"]').click();
    const copied = await page.evaluate(() => window.__collectionCopies);
    if (copied.length !== 3 || !copied[0].includes(stored.title) || copied[1] !== manualLyrics ||
        !copied[2].includes('Idea Lab <literal>')) throw new Error('Collection copy actions lost content');
    await page.evaluate(() => { copyText = window.__collectionCopyOriginal; });
    await collections.locator('[data-action="tp-from-idea"][data-id="' + stored.id + '"]').click();
    if (await page.evaluate(() => view.nav) !== 'tracks' ||
        await page.locator('#tp-title').inputValue() !== stored.title) throw new Error('Track passport link lost its idea');
    await page.evaluate(() => go('myideas'));
    await page.locator('#sb-vue-idea-collections[data-v-app]').waitFor({ state: 'attached' });
    await collections.locator('[data-action="pc-from-idea"][data-id="' + stored.id + '"]').click();
    if (await page.evaluate(() => view.nav) !== 'producer') throw new Error('Master action failed');
    await page.evaluate(() => go('myideas'));
    await page.locator('#sb-vue-idea-collections[data-v-app]').waitFor({ state: 'attached' });
    await collections.locator('[data-action="use-manual-idea"][data-id="' + stored.id + '"]').click();
    if (!(await page.evaluate(() => builder.theme)).includes(stored.title)) throw new Error('Manual idea Studio transfer failed');
    await page.evaluate(() => go('myideas'));
    await page.locator('#sb-vue-idea-collections[data-v-app]').waitFor({ state: 'attached' });
    await collections.locator('[data-action="generated-use"]').click();
    if (!(await page.evaluate(() => builder.theme)).includes('Idea Lab <literal>')) throw new Error('Idea Lab Studio transfer failed');
    await page.evaluate(() => go('myideas'));
    await page.locator('#sb-vue-idea-collections[data-v-app]').waitFor({ state: 'attached' });
    await collections.locator('[data-action="idea-use"]').click();
    if (!(await page.evaluate(() => builder.theme)).includes(fixture.academyTitle)) throw new Error('Academy Studio transfer failed');
    await page.evaluate(() => go('myideas'));
    await page.locator('#sb-vue-idea-collections[data-v-app]').waitFor({ state: 'attached' });
    await collections.locator('[data-action="idea-save"]').click();
    await page.locator('#sb-vue-idea-collections[data-v-app]').waitFor({ state: 'attached' });
    if (await collections.locator('[data-idea-collection="academy"]').count() ||
        await collections.locator('[data-idea-collection="manual"] .idea').count() !== 1) throw new Error('Removing an Academy idea affected another collection');
    await collections.locator('[data-action="generated-delete"]').click();
    await page.locator('#sb-vue-idea-collections[data-v-app]').waitFor({ state: 'attached' });
    page.once('dialog', dialog => dialog.dismiss());
    await collections.locator('[data-action="delete-manual-idea"]').click();
    if (await collections.locator('[data-action="delete-manual-idea"]').count() !== 1) throw new Error('Cancelled deletion removed the idea');
    page.once('dialog', dialog => dialog.accept());
    await collections.locator('[data-action="delete-manual-idea"]').click();
    await page.locator('#sb-vue-idea-collections[data-v-app]').waitFor({ state: 'attached' });
    if (await collections.locator('.empty').count() !== 3 ||
        await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-v1')).manualIdeas.length) !== 0) {
      throw new Error('Empty collection state or persisted deletion is incorrect');
    }

    // v0.109: the full personal library uses Vue with existing local collections.
    await page.evaluate(() => {
      const g = GENRES.find(item => item.ideas?.length);
      data.favorites = [g.id];
      data.savedIdeas = [g.id + ':0'];
      data.manualIdeas = [{ id:'vue-library-own', genre:g.id, title:'Own library idea', pitch:'A personal song', date:'08.11.2026' }];
      data.savedGeneratedIdeas = [{ id:'vue-library-generated', genre:g.id, topic:'Дружба', title:'Idea Lab saved',
        pitch:'An idea', storyLine:'A full story', hook:'Sing together', detail:'' }];
      data.savedPrompts = [{ id:'vue-library-prompt', genre:g.name, mood:'bright', text:'Acoustic pop, 110 BPM', date:'08.11.2026' }];
      persist(); go('saved');
    });
    const library = page.locator('#sb-vue-library-collection');
    await page.locator('#sb-vue-library-collection[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await library.locator('.genre-card').count() !== 1 ||
        await library.locator('[data-action="idea-save"]').count() !== 1 ||
        await library.locator('[data-action="edit-manual-idea"]').count() !== 1 ||
        await library.locator('[data-action="generated-delete"]').count() !== 1 ||
        await library.locator('[data-action="delete-saved"]').count() !== 1) {
      throw new Error('Vue library did not render all five original collections');
    }
    await library.locator('[data-action="idea-save"]').click();
    if (await page.evaluate(() => data.savedIdeas.length) !== 0 ||
        !(await library.textContent()).includes('Нет сохранённых идей')) {
      throw new Error('Removing an Academy idea failed to refresh Vue library');
    }
    await library.locator('[data-action="generated-delete"]').click();
    if (await page.evaluate(() => data.savedGeneratedIdeas.length) !== 0 ||
        !(await library.textContent()).includes('Сохранённых новых идей нет')) {
      throw new Error('Deleting a saved Idea Lab entry failed');
    }
    await library.locator('[data-action="delete-saved"]').click();
    if (await page.evaluate(() => data.savedPrompts.length) !== 0 ||
        !(await library.textContent()).includes('Промптов пока нет')) {
      throw new Error('Deleting a saved prompt failed');
    }
    await library.locator('[data-action="edit-manual-idea"]').click();
    if (await page.evaluate(() => view.nav) !== 'myideas' ||
        await page.locator('#custom-idea-title').inputValue() !== 'Own library idea') {
      throw new Error('Library manual idea did not open original editor');
    }
    await page.evaluate(() => go('saved'));
    await page.locator('#sb-vue-library-collection[data-v-app]').waitFor({ state: 'attached' });
    if (await library.locator('.genre-card').count() !== 1 ||
        await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-v1')).manualIdeas[0]?.title) !== 'Own library idea') {
      throw new Error('Library navigation lost local persisted data');
    }

    // v0.111: card grid/search are Vue-owned; local song storage, cover blobs and original actions are not.
    await page.evaluate(async () => {
      const now = Date.now();
      localStorage.setItem('sunoboom-my-songs-v1', JSON.stringify([
        { id: 'song-vue-a', title: 'Northern Lantern', artist: 'Studio Owl', genre: 'Indie Pop',
          album: 'First Album', description: 'Песня о севере', createdAt: now - 1000, updatedAt: now, hasCover: true, hasAudio: true,
          activeVersionId: 'original', versions: [
            { id: 'original', label: 'Черновик', notes: '', fileName: 'demo.wav', bytes: 44, addedAt: now - 1000 },
            { id: 'v-demo', label: 'Финал', notes: '', fileName: 'demo-final.wav', bytes: 44, addedAt: now }
          ] },
        { id: 'song-vue-b', title: 'Desert Echo', artist: 'Rosa', genre: 'Folk',
          album: '', createdAt: now - 2000, updatedAt: now - 1000, hasCover: false, hasAudio: false }
      ]));
      const db = await new Promise((resolve, reject) => {
        const request = indexedDB.open('sunoboom-song-media-v1', 1);
        request.onupgradeneeded = () => {
          if (!request.result.objectStoreNames.contains('files')) request.result.createObjectStore('files');
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      const png = Uint8Array.from(atob('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jR4cAAAAASUVORK5CYII='), c => c.charCodeAt(0));
      await new Promise((resolve, reject) => {
        const tx = db.transaction('files', 'readwrite');
        tx.objectStore('files').put(new Blob([png], { type: 'image/png' }), 'song-vue-a:cover');
        const wav = new Blob([new Uint8Array([82,73,70,70,36,0,0,0,87,65,86,69,102,109,116,32,16,0,0,0,1,0,1,0,64,31,0,0,128,62,0,0,2,0,16,0,100,97,116,97,0,0,0,0])], { type: 'audio/wav' });
        tx.objectStore('files').put(wav, 'song-vue-a:audio');
        tx.objectStore('files').put(wav, 'song-vue-a:version:v-demo');
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error);
      });
      db.close();
    });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.locator('[data-sb-vue-sidebar][data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    await page.evaluate(() => window.SUNOBOOM_MY_SONGS.openLibrary());
    const songCards = page.locator('#sb-vue-song-cards');
    await page.locator('#sb-vue-song-cards[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await songCards.locator('.sbsong-card').count() !== 2 ||
        await songCards.locator('[data-sbsong-action="share"]').count() !== 2) {
      throw new Error('Vue My Songs collection did not preserve card actions');
    }
    await page.waitForFunction(() => document.querySelector('[data-sbsong-cover="song-vue-a"]')?.getAttribute('src')?.startsWith('blob:'), null, { timeout: 10000 });
    await page.locator('#sbsong-search').fill('desert');
    if (await songCards.locator('.sbsong-card').count() !== 1 ||
        !(await songCards.textContent()).includes('Desert Echo')) {
      throw new Error('Reactive song search did not filter cards correctly');
    }
    await page.locator('#sbsong-search').fill('nothing-matches');
    if (await songCards.locator('.sbsong-card').count() !== 0 ||
        !(await songCards.textContent()).includes('По этому запросу песен нет')) {
      throw new Error('Vue My Songs did not render the empty search result');
    }
    await page.locator('#sbsong-search').fill('');
    await page.waitForFunction(() => document.querySelector('[data-sbsong-cover="song-vue-a"]')?.getAttribute('src')?.startsWith('blob:'), null, { timeout: 10000 });
    await songCards.locator('[data-sbsong-action="open"][data-id="song-vue-a"]').first().click();
    await page.locator('#sb-vue-song-detail[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    const songDetail = page.locator('#sb-vue-song-detail');
    if (await songDetail.locator('[data-sbsong-action="close-detail"]').count() !== 1 ||
        await songDetail.locator('[data-sb-vue-song-versions]').count() !== 1 ||
        await songDetail.locator('.sbsong-version-row').count() !== 2 ||
        !(await songDetail.textContent()).includes('Песня о севере') ||
        await songDetail.locator('[data-sbsong-action="version-add"]').count() !== 1) {
      throw new Error('Vue detail lost song metadata or legacy version controls');
    }
    await page.waitForFunction(() => document.querySelector('#sb-vue-song-detail .sbsong-detail-cover img')?.getAttribute('src')?.startsWith('blob:'), null, { timeout: 10000 });
    await page.waitForFunction(() => document.querySelector('#sbsong-audio-player')?.getAttribute('src')?.startsWith('blob:'), null, { timeout: 10000 });
    await songDetail.locator('[data-sbsong-action="compare-toggle"]').click();
    await page.locator('#sb-vue-song-detail[data-v-app]').waitFor({ state: 'attached' });
    await page.waitForFunction(() => ['sbsong-ab-a', 'sbsong-ab-b'].every(id => document.getElementById(id)?.getAttribute('src')?.startsWith('blob:')), null, { timeout: 10000 });
    await songDetail.locator('#sbsong-compare-a').selectOption('v-demo');
    await page.locator('#sb-vue-song-detail[data-v-app]').waitFor({ state: 'attached' });
    if (await songDetail.locator('#sbsong-compare-a').inputValue() !== 'v-demo' ||
        await songDetail.locator('#sbsong-compare-b').inputValue() !== 'v-demo') {
      throw new Error('Vue A/B selection did not retain the two independent choices');
    }
    await page.waitForFunction(() => ['sbsong-ab-a', 'sbsong-ab-b'].every(id => document.getElementById(id)?.getAttribute('src')?.startsWith('blob:')), null, { timeout: 10000 });
    await songDetail.locator('[data-sbsong-action="version-play"][data-version-id="v-demo"]').click();
    await page.locator('#sb-vue-song-detail[data-v-app]').waitFor({ state: 'attached' });
    if (!(await songDetail.locator('.sbsong-version-heading').textContent()).includes('Финал')) {
      throw new Error('Selecting a take did not update the Vue detail');
    }
    await songDetail.locator('.sbsong-version-row').nth(1).locator('details.sbsong-version-notes > summary').click();
    await songDetail.locator('[data-sbsong-version-note="v-demo"]').fill('Точный финальный микс');
    await songDetail.locator('[data-sbsong-action="version-save"][data-version-id="v-demo"]').click();
    const versionNote = await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1'))[0]?.versions?.find(v => v.id === 'v-demo')?.notes);
    if (versionNote !== 'Точный финальный микс') throw new Error('Vue version note failed to persist');
    await songDetail.locator('[data-sbsong-action="version-main"][data-version-id="v-demo"]').click();
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1'))[0]?.activeVersionId) !== 'v-demo') {
      throw new Error('Vue version manager failed to set the primary take');
    }
    await songDetail.locator('#sbsong-new-version-title').fill('Третий WAV дубль');
    await songDetail.locator('#sbsong-new-version-notes').fill('Новая вокальная дорожка');
    await songDetail.locator('#sbsong-version-file').setInputFiles({
      name: 'third-take.wav', mimeType: 'audio/wav',
      buffer: Buffer.from([82,73,70,70,36,0,0,0,87,65,86,69,102,109,116,32,16,0,0,0,1,0,1,0,64,31,0,0,128,62,0,0,2,0,16,0,100,97,116,97,0,0,0,0])
    });
    await songDetail.locator('[data-sbsong-action="version-add"]').click();
    await page.waitForFunction(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1'))[0]?.versions?.length === 3, null, { timeout: 10000 });
    await page.locator('#sb-vue-song-detail[data-v-app]').waitFor({ state: 'attached' });
    if (await songDetail.locator('.sbsong-version-row').count() !== 3 ||
        !(await songDetail.textContent()).includes('Третий WAV дубль')) {
      throw new Error('Adding a local WAV file through the Vue version manager failed');
    }
    const addedId = await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1'))[0]?.versions?.at(-1)?.id);
    if (!addedId?.startsWith('v-')) throw new Error('Generated WAV take ID is invalid');
    page.once('dialog', dialog => { void dialog.accept(); });
    await songDetail.locator('[data-sbsong-action="version-remove"][data-version-id="' + addedId + '"]').click();
    // The metadata write precedes the asynchronous IndexedDB delete. Wait
    // for the complete render, not only the earlier localStorage mutation.
    await page.waitForFunction(() =>
      JSON.parse(localStorage.getItem('sunoboom-my-songs-v1'))[0]?.versions?.length === 2 &&
      document.querySelector('#sb-vue-song-detail[data-v-app]') &&
      document.querySelectorAll('#sb-vue-song-detail .sbsong-version-row').length === 2,
      null, { timeout: 10000 });
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1'))[0]?.activeVersionId) !== 'v-demo') {
      throw new Error('Removing a WAV take affected the primary version');
    }
    await songDetail.locator('[data-sbsong-action="delete"]').click();
    await page.locator('#sb-vue-song-detail[data-v-app]').waitFor({ state: 'attached' });
    if (await songDetail.locator('[data-sbsong-action="delete-confirm"]').count() !== 1) {
      throw new Error('Vue song deletion confirmation is missing');
    }
    await songDetail.locator('[data-sbsong-action="delete-cancel"]').click();
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).length) !== 2) {
      throw new Error('Canceling deletion modified song storage');
    }
    await songCards.locator('[data-sbsong-action="edit"][data-id="song-vue-a"]').click();
    await page.locator('#sbsong-save-form').waitFor({ state: 'attached' });
    if (await page.locator('#sbsong-save-form [name="title"]').inputValue() !== 'Northern Lantern') {
      throw new Error('Original song editor did not receive the selected Vue card');
    }
    await page.locator('[data-sbsong-action="cancel"]').first().click();
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).length) !== 2) {
      throw new Error('Song records changed during Vue card navigation');
    }

    // v0.114: Vue owns new/edit fields and suggestion lists, while the original
    // submit/change handlers still save cards, audio and cover blobs.
    await page.locator('[data-sbsong-action="new"]').click();
    const songEditor = page.locator('#sb-vue-song-editor');
    await page.locator('#sb-vue-song-editor[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    await songEditor.locator('[name="title"]').fill('Song Editor Vue 114');
    await songEditor.locator('#sbsong-artist-input').fill('Aurora Workshop 114');
    await songEditor.locator('.sbsong-artist-shortcuts button').nth(1).click();
    if (!await page.evaluate(() => (data.songArtists || []).some(a => a.name === 'Aurora Workshop 114'))) {
      throw new Error('Vue editor failed to save artist in original custom artist storage');
    }
    await songEditor.locator('.sbsong-artist-shortcuts button').first().click();
    await songEditor.locator('.sbsong-artist-option').filter({ hasText: 'Aurora Workshop 114' }).click();
    if (await songEditor.locator('[name="artist"]').inputValue() !== 'Aurora Workshop 114') {
      throw new Error('Vue artist picker failed to select saved artist');
    }
    await songEditor.locator('.sbsong-genre-toggle').click();
    if (await songEditor.locator('#sbsong-genre-family option').count() < 2) {
      throw new Error('Vue genre picker did not load Academy genre families');
    }
    await songEditor.locator('.sbsong-genre-option').first().click();
    const selectedGenre = await songEditor.locator('[name="genre"]').inputValue();
    if (!selectedGenre) throw new Error('Vue genre picker did not select a genre');
    await songEditor.locator('[name="album"]').fill('Vue music album');
    await songEditor.locator('[name="description"]').fill('Создано в Vue с локальным WAV и обложкой');
    await songEditor.locator('[name="audio"]').setInputFiles({
      name: 'song-editor-114.wav', mimeType: 'audio/wav',
      buffer: Buffer.from([82,73,70,70,36,0,0,0,87,65,86,69,102,109,116,32,16,0,0,0,1,0,1,0,64,31,0,0,128,62,0,0,2,0,16,0,100,97,116,97,0,0,0,0])
    });
    await songEditor.locator('[name="cover"]').setInputFiles({
      name: 'song-editor-cover.png', mimeType: 'image/png',
      buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jR4cAAAAASUVORK5CYII=', 'base64')
    });
    await page.waitForFunction(() => document.getElementById('sbsong-cover-preview-img')?.getAttribute('src')?.startsWith('blob:'), null, { timeout: 10000 });
    await songEditor.locator('#sbsong-submit').click();
    await page.waitForFunction(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).length === 3, null, { timeout: 10000 });
    await page.locator('#sb-vue-song-detail[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    const createdSong = await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).find(s => s.title === 'Song Editor Vue 114'));
    if (!createdSong || createdSong.genre !== selectedGenre || createdSong.album !== 'Vue music album' ||
        createdSong.artist !== 'Aurora Workshop 114' || createdSong.versions.length !== 1 ||
        !createdSong.hasAudio || !createdSong.hasCover) {
      throw new Error('Vue form did not persist song details, WAV and cover');
    }
    await page.waitForFunction(() => document.querySelector('#sb-vue-song-detail .sbsong-detail-cover img')?.getAttribute('src')?.startsWith('blob:'), null, { timeout: 10000 });
    await page.locator('#sb-vue-song-detail [data-sbsong-action="edit"]').click();
    await page.locator('#sb-vue-song-editor[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await songEditor.locator('[name="title"]').inputValue() !== 'Song Editor Vue 114' ||
        await songEditor.locator('[name="album"]').inputValue() !== 'Vue music album') {
      throw new Error('Vue editor did not restore saved song fields');
    }
    await page.waitForFunction(() => document.getElementById('sbsong-cover-preview-img')?.getAttribute('src')?.startsWith('blob:'), null, { timeout: 10000 });
    await songEditor.locator('[name="description"]').fill('Изменённое описание из Vue редактора');
    await songEditor.locator('#sbsong-submit').click();
    await page.waitForFunction(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).find(s => s.title === 'Song Editor Vue 114')?.description === 'Изменённое описание из Vue редактора', null, { timeout: 10000 });
    const updatedSong = await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).find(s => s.title === 'Song Editor Vue 114'));
    if (updatedSong.versions.length !== 1 || !updatedSong.hasCover || !updatedSong.hasAudio) {
      throw new Error('Editing a song through Vue lost its saved audio or cover');
    }

    // v0.115: personal artist manager is Vue-owned; all mutations still
    // go through the original songArtists storage and delegated handlers.
    await page.evaluate(() => {
      data.artistDNAs = Array.isArray(data.artistDNAs) ? data.artistDNAs : [];
      data.artistDNAs.push({ id: 'dna-vue-manager-115', name: 'DNA Studio 115' });
    });
    const originalDNA = await page.evaluate(() => JSON.stringify(data.artistDNAs));
    await page.locator('[data-sbsong-action="artists-manage"]').click();
    const manager = page.locator('#sb-vue-artist-manager');
    await page.locator('#sb-vue-artist-manager[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await manager.locator('[data-sb-vue-artist-manager]').count() !== 1 ||
        !(await manager.textContent()).includes('Aurora Workshop 114') ||
        !(await manager.textContent()).includes('Профилей ДНК артиста')) {
      throw new Error('Vue artist manager lost saved artist or DNA profile reference');
    }
    await manager.locator('#sbsong-artist-manager-filter').fill('no-match-artist-115');
    if (await manager.locator('.sbsong-artist-entry').count() !== 0 ||
        !(await manager.textContent()).includes('Ничего не найдено')) {
      throw new Error('Vue artist manager search did not show empty results');
    }
    await manager.locator('#sbsong-artist-manager-filter').fill('aurora');
    if (await manager.locator('.sbsong-artist-entry').count() !== 1) {
      throw new Error('Vue artist manager did not filter existing artists');
    }
    await manager.locator('#sbsong-artist-manager-filter').fill('');
    await manager.locator('#sbsong-artist-manager-add').fill('New Artist Vue 115');
    await manager.locator('[data-sbsong-action="artist-manager-add"]').click();
    await page.waitForFunction(() => (data.songArtists || []).some(a => a.name === 'New Artist Vue 115') &&
      document.querySelector('#sb-vue-artist-manager[data-v-app]')?.textContent?.includes('New Artist Vue 115'), null, { timeout: 10000 });
    const savedArtist = await page.evaluate(() => {
      const live = (data.songArtists || []).find(a => a.name === 'New Artist Vue 115');
      const persisted = JSON.parse(localStorage.getItem('sunoboom-v1'));
      return { id: live?.id, persisted: (persisted.songArtists || []).some(a => a.name === 'New Artist Vue 115') };
    });
    if (!savedArtist.id || !savedArtist.persisted) {
      throw new Error('Vue artist manager failed to persist the new custom artist');
    }
    await manager.locator('#sbsong-artist-manager-filter').fill('New Artist Vue 115');
    if (await manager.locator('.sbsong-artist-entry').count() !== 1) {
      throw new Error('Vue artist manager failed to search for the new artist');
    }
    page.once('dialog', dialog => { void dialog.accept(); });
    await manager.locator('[data-sbsong-action="artist-remove"][data-id="' + savedArtist.id + '"]').click();
    await page.waitForFunction(() => !(data.songArtists || []).some(a => a.name === 'New Artist Vue 115') &&
      !!document.querySelector('#sb-vue-artist-manager[data-v-app]'), null, { timeout: 10000 });
    if (await page.evaluate(() => JSON.stringify(data.artistDNAs)) !== originalDNA ||
        await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).find(s => s.title === 'Song Editor Vue 114')?.artist) !== 'Aurora Workshop 114') {
      throw new Error('Removing a custom artist changed DNA profiles or a saved song');
    }
    await manager.locator('[data-sbsong-action="artists-manage"]').click();
    await page.locator('[data-sbsong-action="new"]').click();
    await page.locator('#sb-vue-song-editor[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    await songEditor.locator('[name="artist"]').fill('DNA Studio 115');
    if (!(await songEditor.locator('.sbsong-artist-option').allTextContents()).some(x => x.includes('DNA Studio 115'))) {
      throw new Error('DNA profile is not offered in the existing Vue song editor');
    }
    await songEditor.locator('[data-sbsong-action="cancel"]').first().click();

    // v0.116: DNA collection/detail are Vue-owned, while the original
    // editor, Style builder and ID links remain the single source of truth.
    await page.evaluate(() => {
      view.sbDnaSelected = null;
      view.sbDnaEdit = null;
      go('artists');
    });
    const dnaView = page.locator('#sb-vue-dna-view');
    await page.locator('#sb-vue-dna-view[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await dnaView.locator('[data-action="dna-open"][data-id="dna-vue-manager-115"]').count() !== 1) {
      throw new Error('Vue DNA collection did not display existing artist profile');
    }
    await dnaView.locator('[data-action="dna-open"][data-id="dna-vue-manager-115"]').click();
    await page.locator('#sb-vue-dna-view[data-v-app]').waitFor({ state: 'attached' });
    if (!(await dnaView.textContent()).includes('DNA Studio 115') ||
        await dnaView.locator('[data-action="dna-copy"][data-id="dna-vue-manager-115"]').count() !== 1 ||
        await dnaView.locator('[data-action="dna-apply"][data-id="dna-vue-manager-115"]').count() !== 2) {
      throw new Error('Vue DNA detail lost Style, copy or Suno Studio actions');
    }
    await dnaView.locator('[data-action="dna-edit"][data-id="dna-vue-manager-115"]').click();
    await page.locator('#sb-vue-dna-editor[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    await page.locator('#dna-editor[data-sb-vue-dna-editor]').waitFor({ state: 'visible' });
    if (await page.locator('#sb-vue-dna-view').count() !== 0 ||
        await page.locator('#dna-project').count() !== 1 ||
        await page.locator('#dna-genre option').count() < 2 ||
        await page.locator('#dna-language option').count() !== 4) {
      throw new Error('Vue DNA editor has missing fields or original collection is still mounted');
    }
    await page.locator('#dna-timbre').fill('gentle warm baritone v116');
    await page.locator('#dna-delivery').fill('clear intimate voice');
    await page.locator('#dna-language').selectOption('Kazakh');
    await page.locator('#dna-whisper').uncheck();
    await page.locator('#dna-choir').check();
    await page.waitForFunction(() => {
      const preview = document.querySelector('#dna-style-preview')?.textContent || '';
      return preview.includes('gentle warm baritone v116') &&
        preview.includes('no choir') && !preview.includes('no whispering');
    }, null, { timeout: 10000 });
    const style114 = await page.locator('#dna-style-preview').textContent();
    const styleCount114 = await page.locator('#dna-style-count').textContent();
    if (style114.length > 1000 || styleCount114 !== style114.length + ' / 1000') {
      throw new Error('Reactive Vue DNA Style count/limit is incorrect');
    }
    // The original validation must still reject an inverted BPM range.
    await page.locator('#dna-tempo-min').fill('140');
    await page.locator('#dna-tempo-max').fill('90');
    await page.locator('[data-action="dna-save"]').click();
    if (await page.locator('#sb-vue-dna-editor[data-v-app]').count() !== 1 ||
        await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-v1')).artistDNAs.find(a => a.id === 'dna-vue-manager-115')?.timbre) === 'gentle warm baritone v116') {
      throw new Error('Invalid BPM incorrectly saved the Vue DNA form');
    }
    await page.locator('#dna-tempo-min').fill('90');
    await page.locator('#dna-tempo-max').fill('120');
    await page.locator('[data-action="dna-save"]').click();
    await page.locator('#sb-vue-dna-view[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (!(await dnaView.textContent()).includes('gentle warm baritone v116') ||
        !(await dnaView.locator('.sb-dna-style').textContent()).includes('no choir')) {
      throw new Error('Vue DNA detail lost the updated voice or Style restrictions');
    }
    const updatedDna116 = await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-v1')).artistDNAs.find(a => a.id === 'dna-vue-manager-115'));
    if (updatedDna116?.timbre !== 'gentle warm baritone v116' || updatedDna116?.language !== 'Kazakh' ||
        updatedDna116?.noWhisper !== false || updatedDna116?.noChoir !== true ||
        String(updatedDna116?.tempoMin) !== '90' || String(updatedDna116?.tempoMax) !== '120') {
      throw new Error('Vue DNA form did not preserve restrictions, language or BPM');
    }
    await dnaView.locator('[data-action="dna-list"]').click();
    await page.locator('#sb-vue-dna-view[data-v-app]').waitFor({ state: 'attached' });
    await page.locator('[data-action="dna-new"]').click();
    await page.locator('#sb-vue-dna-editor[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    await page.locator('#dna-editor').waitFor({ state: 'visible', timeout: 10000 });
    await page.locator('#dna-name').fill('Vue DNA Artist 116');
    await page.locator('#dna-genre').selectOption({ index: 0 });
    await page.locator('#dna-timbre').fill('soft tenor, expressive clean voice');
    await page.locator('#dna-mood').fill('warm uplifting groove');
    await page.locator('#dna-visual').fill('Vintage warm portrait design');
    await page.locator('#dna-rain').count().then(count => { if (count) throw new Error('Unexpected DNA input'); });
    if (!(await page.locator('#dna-style-preview').textContent()).includes('warm uplifting groove')) {
      throw new Error('New Vue DNA draft lacks live Style preview');
    }
    await page.locator('[data-action="dna-save"]').click();
    await page.locator('#sb-vue-dna-view[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    const artistId116 = await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-v1')).artistDNAs.find(a => a.name === 'Vue DNA Artist 116')?.id);
    if (!artistId116 || !(await dnaView.textContent()).includes('soft tenor, expressive clean voice') ||
        !(await dnaView.locator('.sb-dna-style').textContent()).includes('warm uplifting groove')) {
      throw new Error('New DNA profile did not appear in the Vue detail after saving');
    }
    await dnaView.locator('[data-action="dna-list"]').click();
    await page.locator('#sb-vue-dna-view[data-v-app]').waitFor({ state: 'attached' });
    if (await dnaView.locator('.sb-dna-card').count() < 2) {
      throw new Error('New DNA profile is missing from the Vue list');
    }
    await dnaView.locator('[data-action="dna-open"][data-id="' + artistId116 + '"]').click();
    page.once('dialog', dialog => { void dialog.accept(); });
    await dnaView.locator('[data-action="dna-delete"][data-id="' + artistId116 + '"]').click();
    await page.waitForFunction(() =>
      !JSON.parse(localStorage.getItem('sunoboom-v1')).artistDNAs.some(a => a.name === 'Vue DNA Artist 116') &&
      !!document.querySelector('#sb-vue-dna-view[data-v-app]'), null, { timeout: 10000 });
    if (await dnaView.locator('[data-action="dna-open"][data-id="dna-vue-manager-115"]').count() !== 1 ||
        await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).find(s => s.title === 'Song Editor Vue 114')?.artist) !== 'Aurora Workshop 114') {
      throw new Error('Deleting a DNA profile affected another profile or a saved song');
    }

    // v0.118: the settings screen is Vue-owned, while original handlers own storage.
    await page.evaluate(() => go('account'));
    await page.locator('[data-sbs-action="open"]').click();
    await page.locator('#sb-vue-account-settings[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    const settingsPage = page.locator('#sbs-page[data-sb-vue-settings]');
    await settingsPage.waitFor({ state: 'visible' });
    if (await page.locator('#sbs-compact').count() !== 1 ||
        await page.locator('#sbs-start option').count() !== 6 ||
        await settingsPage.locator('[data-sbs-action="backup"]').count() !== 1) {
      throw new Error('Vue account settings omitted preferences or backup action');
    }
    await page.locator('#sbs-compact').check();
    await page.locator('#sbs-largeText').check();
    await page.locator('#sbs-start').selectOption('studio');
    const savedPrefs118 = await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')));
    if (savedPrefs118.compact !== true || savedPrefs118.largeText !== true ||
        savedPrefs118.startPage !== 'studio' ||
        !await page.evaluate(() => document.documentElement.classList.contains('sb-ui-compact'))) {
      throw new Error('Original browser settings did not persist Vue changes');
    }
    await page.locator('#sbs-name').fill('Vue Settings 118');
    await page.locator('[data-sbs-action="save-name"]').click();
    await page.locator('#sb-vue-account-settings[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-v1')).profileName) !== 'Vue Settings 118' ||
        await page.locator('#sbs-name').inputValue() !== 'Vue Settings 118') {
      throw new Error('Vue profile editor did not preserve original save handler');
    }
    // v0.123: the same saved setting drives dark, light and OS appearance.
    await page.locator('#sbs-theme').selectOption('light');
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')).theme) !== 'light' ||
        !await page.evaluate(() => document.documentElement.classList.contains('sb-theme-light')) ||
        await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme) !== 'light') {
      throw new Error('Vue light theme did not apply or persist');
    }
    const lightBackground = await page.locator('.side').evaluate(el => getComputedStyle(el).backgroundColor);
    if (lightBackground !== 'rgb(255, 255, 255)') {
      throw new Error('Light theme did not recolor the app navigation: ' + lightBackground);
    }
    await page.reload({ waitUntil: 'domcontentloaded' });
    if (!await page.evaluate(() => document.documentElement.classList.contains('sb-theme-light'))) {
      throw new Error('Saved light theme was not restored on page load');
    }
    await page.evaluate(() => go('account'));
    await page.locator('[data-sbs-action="open"]').click();
    await page.locator('#sb-vue-account-settings[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#sbs-theme').inputValue() !== 'light') {
      throw new Error('Vue theme selector lost the saved preference');
    }
    // v0.153: Pink must recolor actual cards/controls and survive reload,
    // not merely appear as another entry in the settings dropdown.
    await page.locator('#sbs-theme').selectOption('pink');
    const pinkSettings153 = await page.evaluate(() => {
      const style = el => getComputedStyle(document.querySelector(el));
      return {
        selected: document.documentElement.dataset.sbTheme,
        saved: JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')).theme,
        panel: style('.sbs-panel').backgroundImage,
        sidebar: style('.side').backgroundColor,
        accent: getComputedStyle(document.documentElement).getPropertyValue('--sb-theme-accent').trim()
      };
    });
    if (pinkSettings153.selected !== 'pink' || pinkSettings153.saved !== 'pink' ||
        pinkSettings153.accent !== '#ff8acc' ||
        !pinkSettings153.panel.includes('linear-gradient') ||
        pinkSettings153.sidebar !== 'rgb(62, 26, 55)') {
      throw new Error('Pink theme did not recolor original Vue settings and navigation: ' +
        JSON.stringify(pinkSettings153));
    }
    await page.evaluate(() => go('home'));
    const pinkHome153 = await page.locator('.dash-head').evaluate(el => getComputedStyle(el).backgroundImage);
    if (!pinkHome153.includes('linear-gradient')) {
      throw new Error('Pink home hero did not use the theme gradient');
    }
    await page.evaluate(() => go('catalog'));
    const pinkAcademy153 = await page.locator('.genre-family-intro').evaluate(el => getComputedStyle(el).backgroundImage);
    if (!pinkAcademy153.includes('linear-gradient')) {
      throw new Error('Pink Academy did not use the theme gradient');
    }
    await page.reload({ waitUntil: 'domcontentloaded' });
    if (await page.evaluate(() => document.documentElement.dataset.sbTheme) !== 'pink') {
      throw new Error('Pink theme was not restored before the next page render');
    }
    await page.evaluate(() => go('account'));
    await page.locator('[data-sbs-action="open"]').click();
    await page.locator('#sb-vue-account-settings[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#sbs-theme').inputValue() !== 'pink') {
      throw new Error('Pink theme was lost in the Vue settings selector');
    }
    // v0.154: Independent pastel-pink theme uses light contrast and real
    // pink surfaces across settings, home, Academy and player.
    await page.locator('#sbs-theme').selectOption('pink-pastel');
    const pastel154 = await page.evaluate(() => {
      const css = selector => getComputedStyle(document.querySelector(selector));
      return {
        mode: document.documentElement.dataset.sbTheme,
        persisted: JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')).theme,
        light: document.documentElement.classList.contains('sb-theme-light'),
        scheme: getComputedStyle(document.documentElement).colorScheme,
        side: css('.side').backgroundColor,
        panel: css('.sbs-panel').backgroundImage,
        label: css('.sbs-panel-head h2').color,
        action: css('.sbs-primary').backgroundImage
      };
    });
    if (pastel154.mode !== 'pink-pastel' || pastel154.persisted !== 'pink-pastel' ||
        !pastel154.light || pastel154.scheme !== 'light' ||
        pastel154.side !== 'rgb(255, 250, 253)' ||
        !pastel154.panel.includes('linear-gradient') ||
        !pastel154.action.includes('linear-gradient')) {
      throw new Error('Pastel pink Vue settings should be light and visibly pink: ' +
        JSON.stringify(pastel154));
    }
    await page.evaluate(() => go('home'));
    const pastelHome154 = await page.locator('.dash-head').evaluate(el => getComputedStyle(el).backgroundImage);
    if (!pastelHome154.includes('linear-gradient')) {
      throw new Error('Pastel pink did not recolor home hero');
    }
    await page.evaluate(() => go('catalog'));
    const pastelAcademy154 = await page.locator('.genre-family-intro').evaluate(el => getComputedStyle(el).backgroundImage);
    if (!pastelAcademy154.includes('linear-gradient')) {
      throw new Error('Pastel pink did not recolor Academy');
    }
    await page.evaluate(() => go('player'));
    if (await page.locator('.sbp-main').count()) {
      const pastelPlayer154 = await page.locator('.sbp-main').evaluate(el => getComputedStyle(el).backgroundImage);
      if (!pastelPlayer154.includes('linear-gradient')) {
        throw new Error('Pastel pink did not recolor player cards');
      }
    }
    await page.reload({ waitUntil: 'domcontentloaded' });
    if (await page.evaluate(() => document.documentElement.dataset.sbTheme) !== 'pink-pastel') {
      throw new Error('Pastel pink not restored on page reload');
    }
    await page.evaluate(() => go('account'));
    await page.locator('[data-sbs-action="open"]').click();
    await page.locator('#sb-vue-account-settings[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#sbs-theme').inputValue() !== 'pink-pastel') {
      throw new Error('Pastel pink selector did not retain chosen appearance');
    }
    await page.locator('#sbs-theme').selectOption('system');
    await page.emulateMedia({ colorScheme: 'light' });
    await page.waitForFunction(() => document.documentElement.classList.contains('sb-theme-light'), null, { timeout: 10000 });
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.waitForFunction(() => !document.documentElement.classList.contains('sb-theme-light'), null, { timeout: 10000 });
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')).theme) !== 'system') {
      throw new Error('System theme choice was overwritten when OS appearance changed');
    }
    await page.locator('#sbs-theme').selectOption('light');

    await page.locator('[data-sbs-action="reset"]').click();
    await page.locator('#sb-vue-account-settings[data-v-app]').waitFor({ state: 'attached' });
    await page.locator('[data-sbs-action="cancel-reset"]').click();
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')).compact) !== true) {
      throw new Error('Cancelling the Vue reset changed saved preferences');
    }
    await page.locator('[data-sbs-action="reset"]').click();
    await page.locator('[data-sbs-action="confirm-reset"]').click();
    await page.locator('#sb-vue-account-settings[data-v-app]').waitFor({ state: 'attached' });
    const resetPrefs118 = await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')));
    if (resetPrefs118.theme !== 'dark' ||
        await page.evaluate(() => document.documentElement.classList.contains('sb-theme-light')) ||
        await page.locator('#sbs-theme').inputValue() !== 'dark') {
      throw new Error('Reset preferences did not restore the default dark theme');
    }
    if (resetPrefs118.compact || resetPrefs118.largeText || resetPrefs118.startPage !== 'home' ||
        await page.locator('#sbs-compact').isChecked() ||
        await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-v1')).profileName) !== 'Vue Settings 118') {
      throw new Error('Vue reset modified profile data or failed to reset preferences');
    }
    await page.locator('[data-sbs-action="backup"]').click();
    if (await page.locator('#sb-vue-account-settings').count() ||
        await page.locator('.account-settings [data-action="export"]').count() !== 1) {
      throw new Error('Original backup section is not reachable from Vue settings');
    }

    // v0.119: standalone Player LAB UI is Vue-owned but audio/file handling,
    // MediaSession, drag/drop and independent A/B engines remain legacy.
    await page.evaluate(() => go('player'));
    const player = page.locator('#sb-vue-player-lab');
    await page.locator('#sb-vue-player-lab[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await player.locator('[data-sb-vue-player-lab]').count() !== 1 ||
        await player.locator('#sbp-seek:disabled').count() !== 1 ||
        await player.locator('.sbp-track').count() !== 0 ||
        await page.locator('.sbab-modes [data-mode="compare"]').count() !== 1) {
      throw new Error('Vue Player LAB initial state or legacy A/B switcher is missing');
    }
    await player.locator('#sbp-file').setInputFiles({
      name: 'vue-player-119.wav', mimeType: 'audio/wav',
      buffer: Buffer.from([82,73,70,70,36,0,0,0,87,65,86,69,102,109,116,32,16,0,0,0,1,0,1,0,64,31,0,0,128,62,0,0,2,0,16,0,100,97,116,97,0,0,0,0])
    });
    await page.waitForFunction(() => document.querySelectorAll('#sb-vue-player-lab .sbp-track').length === 1, null, { timeout: 10000 });
    if (await player.locator('#sbp-title').textContent() !== 'vue-player-119' ||
        await page.evaluate(() => window.SUNOBOOM_PLAYER_LAB?.getTrackCount()) !== 1) {
      throw new Error('Vue Player LAB did not render the imported WAV track');
    }
    await player.locator('[data-sbp-action="shuffle"]').click();
    if (await player.locator('#sbp-shuffle').getAttribute('aria-pressed') !== 'true') {
      throw new Error('Vue Player LAB shuffle did not use existing settings');
    }
    await player.locator('[data-sbp-action="repeat"]').click();
    if (await player.locator('#sbp-repeat').getAttribute('aria-label') !== 'Повтор списка') {
      throw new Error('Vue Player LAB repeat cycle is broken');
    }
    await player.locator('#sbp-rate').selectOption('1.25');
    if (await page.evaluate(() => window.SUNOBOOM_PLAYER_LAB?.getAudioElement()?.playbackRate) !== 1.25) {
      throw new Error('Vue Player LAB rate change did not reach the audio engine');
    }
    if (await player.locator('#sbp-volume').count()) {
      await player.locator('#sbp-volume').fill('45');
      const volume = await page.evaluate(() => window.SUNOBOOM_PLAYER_LAB?.getAudioElement()?.volume);
      if (Math.abs(volume - 0.45) > 0.001) throw new Error('Vue player volume did not reach Audio API');
    }
    await player.locator('[data-sbp-action="demo"]').click();
    await page.waitForFunction(() => document.querySelectorAll('#sb-vue-player-lab .sbp-track').length === 4, null, { timeout: 10000 });
    await player.locator('[data-sbp-action="select"][data-index="2"]').click();
    await page.waitForFunction(() => window.SUNOBOOM_PLAYER_LAB?.getCurrentTitle() === 'Мягкие клавиши', null, { timeout: 10000 });
    if (await player.locator('.sbp-track.is-current').count() !== 1 ||
        !(await player.locator('#sbp-counter').textContent()).includes('3 / 4')) {
      throw new Error('Vue queue did not update the selected demo track');
    }
    await player.locator('[data-sbp-action="remove"][data-index="0"]').click();
    await page.waitForFunction(() => document.querySelectorAll('#sb-vue-player-lab .sbp-track').length === 3, null, { timeout: 10000 });
    await page.locator('.sbab-modes [data-mode="compare"]').click();
    if (await page.evaluate(() => window.SUNOBOOM_AB_COMPARE?.getMode()) !== 'compare' ||
        !(await page.locator('#sbab-compare').isVisible())) {
      throw new Error('Legacy A/B comparison failed after Vue Player LAB mount');
    }
    // v0.120: the independent comparator is Vue-owned without taking over audio.
    await page.locator('#sb-vue-player-ab[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    const ab = page.locator('#sb-vue-player-ab');
    if (await ab.locator('[data-sb-vue-player-ab]').count() !== 1 ||
        await ab.locator('#sbab-play:disabled').count() !== 1 ||
        await ab.locator('[data-sbab-card]').count() !== 2) {
      throw new Error('Vue A/B comparator initial state is incomplete');
    }
    await ab.locator('[data-sbab-action="demo"]').click();
    await page.waitForFunction(() => window.SUNOBOOM_AB_COMPARE?.hasBoth() &&
      document.querySelector('#sbab-ready-A')?.textContent === 'Файл добавлен' &&
      document.querySelector('#sbab-ready-B')?.textContent === 'Файл добавлен', null, { timeout: 10000 });
    if (await ab.locator('#sbab-play:enabled').count() !== 1) {
      throw new Error('Vue A/B comparator did not enable playback after demo tracks');
    }
    await ab.locator('[data-sbab-action="select"][data-side="B"]').click();
    await page.waitForFunction(() => window.SUNOBOOM_AB_COMPARE?.getActive() === 'B');
    if (await ab.locator('.sbab-btn-b').getAttribute('aria-pressed') !== 'true') {
      throw new Error('Vue A/B did not react to legacy version switching');
    }
    await ab.locator('[data-sbab-action="loop"]').click();
    if (!(await ab.locator('#sbab-status').textContent()).includes('Отметь начало и конец')) {
      throw new Error('Vue A/B missing fragment marker validation');
    }
    await ab.locator('[data-sbab-score="A:vocal"]').selectOption('4');
    await ab.locator('[data-sbab-score="B:mix"]').selectOption('5');
    await ab.locator('#sbab-note-A').fill('Сильный вокал в A');
    await ab.locator('[data-sbab-action="reset-review"]').click();
    if (await ab.locator('[data-sbab-score="A:vocal"]').inputValue() !== '0' ||
        await ab.locator('[data-sbab-score="B:mix"]').inputValue() !== '0' ||
        await ab.locator('#sbab-note-A').inputValue() !== '') {
      throw new Error('Vue A/B review reset failed to clear ratings and notes');
    }
    await ab.locator('[data-sbab-action="remove"][data-side="B"]').click();
    if (await ab.locator('#sbab-ready-B').textContent() !== 'Ожидает файл' ||
        await page.evaluate(() => window.SUNOBOOM_AB_COMPARE?.hasBoth())) {
      throw new Error('Vue A/B removal did not update the original engine');
    }

    await page.locator('.sbab-modes [data-mode="player"]').click();
    if (!(await page.locator('#sb-vue-player-lab').isVisible())) {
      throw new Error('Vue Player LAB must reappear when leaving A/B comparison');
    }
    if (await page.evaluate(() => window.SUNOBOOM_AB_COMPARE?.getMode()) !== 'player' ||
        await player.locator('.sbp-track').count() !== 3) {
      throw new Error('A/B return unexpectedly reset the Vue player queue');
    }
    await player.locator('[data-sbp-action="clear"]').click();
    await page.waitForFunction(() => document.querySelectorAll('#sb-vue-player-lab .sbp-track').length === 0, null, { timeout: 10000 });
    if (await page.evaluate(() => window.SUNOBOOM_PLAYER_LAB?.getTrackCount()) !== 0 ||
        await player.locator('#sbp-play:disabled').count() !== 1) {
      throw new Error('Vue Player LAB did not clear its original audio queue');
    }

    // v0.122: the Master list is Vue-owned, while the producer workflow,
    // filtering input, all actions, and local browser storage remain original.
    await page.evaluate(() => go('producer'));
    await page.locator('#sbpc-list[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#sbpc-list[data-v-app]').count() !== 1 ||
        await page.locator('[data-pc-action="create"]').count() !== 1) {
      throw new Error('Vue Master list failed to mount or creation tools were lost');
    }
    await page.locator('#sbpc-new-title').fill('Vue Master 122');
    await page.locator('[data-pc-action="create"]').click();
    await page.locator('#sbpc-list[data-v-app] .sbpc-song.active').waitFor({ timeout: 10000 });
    if (!(await page.locator('#sbpc-list .sbpc-song.active').textContent()).includes('Vue Master 122') ||
        await page.evaluate(() => data.productions.some(w => w.title === 'Vue Master 122')) !== true) {
      throw new Error('Master failed to create a working card through the old storage');
    }
    // v0.125: the complete Master workspace is Vue-owned while the original
    // saving, link validation, stage transitions and history remain functional.
    const masterDetail = page.locator('#sb-vue-producer-detail[data-v-app]');
    await masterDetail.waitFor({ state: 'attached', timeout: 10000 });
    if (await masterDetail.locator('[data-sb-vue-producer-detail]').count() !== 1 ||
        await masterDetail.locator('.sbpc-panel').count() !== 5 ||
        await masterDetail.locator('[data-pc-stage]').count() !== 6 ||
        await masterDetail.locator('[data-pc-link]').count() !== 6 ||
        await masterDetail.locator('[data-pc-action="capture-arrangement"]').count() !== 1 ||
        await masterDetail.locator('[data-pc-action="restore-arrangement"]').count() !== 0) {
      throw new Error('Vue Master detail omitted panels, stages, links or arrangement controls');
    }
    const masterId125 = await page.evaluate(() =>
      data.productions.find(w => w.title === 'Vue Master 122')?.id);
    await masterDetail.locator('#sbpc-title').fill('Vue Master 122 Revised');
    await masterDetail.locator('#sbpc-artist').fill('Artist Vue 125');
    await masterDetail.locator('#sbpc-notes').fill('Сохраняем реальный текст карточки через старые обработчики.');
    await masterDetail.locator('[data-pc-action="save-details"]').click();
    await page.locator('#sb-vue-producer-detail[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    const savedMasterDetails = await page.evaluate(id => {
      const w = data.productions.find(p => p.id === id);
      return { title:w?.title, artist:w?.artist, notes:w?.notes };
    }, masterId125);
    if (savedMasterDetails.title !== 'Vue Master 122 Revised' ||
        savedMasterDetails.artist !== 'Artist Vue 125' ||
        !savedMasterDetails.notes.includes('реальный текст') ||
        await page.locator('#sbpc-title').inputValue() !== 'Vue Master 122 Revised') {
      throw new Error('Vue Master detail did not save and restore original song fields');
    }
    await page.locator('#sbpc-history-note').fill('Контрольная заметка Vue 125');
    await page.locator('[data-pc-action="add-note"]').click();
    if (!(await page.locator('#sb-vue-producer-detail .sbpc-log').textContent()).includes('Контрольная заметка Vue 125') ||
        !await page.evaluate(id => data.productions.find(w => w.id === id)?.history?.[0]?.text.includes('Контрольная заметка Vue 125'), masterId125)) {
      throw new Error('Vue Master history editor failed to persist the note');
    }
    await page.evaluate(() => {
      data.projects.push({ id: 'vue-master-project-125', title: 'Проект Vue 125' });
      persist();
      render();
    });
    await page.locator('#sb-vue-producer-detail[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    await page.locator('#sbpc-projectId').selectOption('vue-master-project-125');
    await page.locator('[data-pc-action="save-links"]').click();
    if (await page.evaluate(id => data.productions.find(w => w.id === id)?.projectId, masterId125) !== 'vue-master-project-125' ||
        await page.locator('#sbpc-projectId').inputValue() !== 'vue-master-project-125') {
      throw new Error('Vue Master linked materials were not saved through legacy validation');
    }
    await page.locator('[data-pc-stage="lyrics"]').selectOption('working');
    if (await page.evaluate(id => data.productions.find(w => w.id === id)?.steps?.lyrics, masterId125) !== 'working') {
      throw new Error('Vue Master stage selector did not update the original record');
    }
    await page.locator('[data-pc-stage="lyrics"]').selectOption('todo');

    await page.locator('#sbpc-search').fill('no-match-vue-122');
    if (await page.locator('#sbpc-list .sbpc-song').count() ||
        !(await page.locator('#sbpc-list .sbpc-empty').textContent()).includes('Поиск не дал результатов')) {
      throw new Error('Vue Master list failed to react to the original search field');
    }
    await page.locator('#sbpc-search').fill('Vue Master');
    if (await page.locator('#sbpc-list .sbpc-song').count() !== 1) {
      throw new Error('Vue Master search did not restore the song');
    }
    await page.locator('[data-pc-stage="idea"]').selectOption('done');
    await page.locator('#sbpc-list[data-v-app] .sbpc-song-meta b').waitFor({ timeout: 10000 });
    if ((await page.locator('#sbpc-list .sbpc-song-meta b').textContent()).trim() !== '1/6' ||
        await page.evaluate(id => data.productions.find(w => w.id === id)?.steps.idea, masterId125) !== 'done') {
      throw new Error('Master stage update did not return to the Vue list');
    }
    page.once('dialog', dialog => { void dialog.accept(); });
    await page.locator('[data-pc-action="delete"]').click();
    if (await page.evaluate(id => data.productions.some(w => w.id === id), masterId125) ||
        await page.locator('#sbpc-list[data-v-app]').count() !== 1) {
      throw new Error('Master deletion or Vue remount did not preserve the workflow');
    }

    // v0.152: Master history records each working song separately and keeps
    // the list search when navigating between two song cards.
    await page.locator('#sbpc-search').fill('');
    await page.locator('#sbpc-new-title').fill('History Master 152 A');
    await page.locator('[data-pc-action="create"]').click();
    const masterA152 = await page.evaluate(() => data.productions.find(
      work => work.title === 'History Master 152 A')?.id);
    await page.waitForFunction(id => window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.path ===
      '/producer/detail/' + id, masterA152);
    await page.locator('#sbpc-new-title').fill('History Master 152 B');
    await page.locator('[data-pc-action="create"]').click();
    const masterB152 = await page.evaluate(() => data.productions.find(
      work => work.title === 'History Master 152 B')?.id);
    await page.waitForFunction(id => window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.path ===
      '/producer/detail/' + id, masterB152);
    await page.locator('#sbpc-search').fill('History Master 152');
    if (await page.locator('#sbpc-list .sbpc-song').count() !== 2) {
      throw new Error('Master history fixture search must show both working cards');
    }
    await page.locator('#sbpc-list .sbpc-song[data-id="' + masterA152 + '"]').click();
    await page.waitForFunction(id => window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.context?.id === id &&
      window.SUNOBOOM_VUE_ROUTE.routerSnapshot().path === '/producer/detail/' + id, masterA152);
    await page.locator('[data-sb-vue-history] [data-sb-history-back]').click();
    await page.waitForFunction(id => window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.context?.id === id &&
      document.querySelector('#sbpc-title')?.value === 'History Master 152 B', masterB152);
    if (await page.locator('#sbpc-search').inputValue() !== 'History Master 152') {
      throw new Error('Master Back lost the list search');
    }
    await page.locator('[data-sb-vue-history] [data-sb-history-forward]').click();
    await page.waitForFunction(id => window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.context?.id === id &&
      document.querySelector('#sbpc-title')?.value === 'History Master 152 A', masterA152);
    await page.evaluate(ids => {
      data.productions = data.productions.filter(work => !ids.includes(work.id));
      persist();
      go('studio');
    }, [masterA152, masterB152]);

    // v0.126: Vue owns only passport filters/cards; the old editor, detail,
    // version manager, release calculation and persistence must still work.
    const beforeLegacyReplace134 = await page.evaluate(() => window.SUNOBOOM_VUE_ROUTE?.routerSnapshot().menuPushes);
    await page.evaluate(() => go('tracks'));
    await page.waitForFunction(() => {
      const route = window.SUNOBOOM_VUE_ROUTE?.snapshot();
      return route?.route === 'tracks' && route.active === 'account';
    });
    await page.waitForFunction(expected => {
      const route = window.SUNOBOOM_VUE_ROUTE?.routerSnapshot();
      return route?.path === '/account/tracks' && route.transition === 'replace' &&
        route.menuPushes === expected;
    }, beforeLegacyReplace134);
    await page.waitForFunction(() => window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.path === '/account/tracks');
    await page.waitForFunction(() => ['[data-sb-vue-sidebar]', '[data-sb-vue-mobile]']
      .every(selector => document.querySelector(selector + ' button[data-nav="account"]')
        ?.getAttribute('data-vue-router-path') === '/account/tracks'));
    if (await page.locator('[data-sb-vue-sidebar] button[data-nav="account"][aria-current="page"]').count() !== 1 ||
        await page.locator('[data-sb-vue-mobile] button[data-nav="account"][aria-current="page"]').count() !== 1) {
      throw new Error('Nested track page failed to activate Account in both Vue menus');
    }
    const trackList = page.locator('#sb-vue-track-list');
    await page.locator('#sb-vue-track-list[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await trackList.locator('[data-action="tp-filter"]').count() !== 8 ||
        await page.locator('[data-action="tp-new"]').count() !== 1 ||
        await page.evaluate(() => typeof window.SUNOBOOM_LEGACY_TRACK_LIST?.snapshot) !== 'function') {
      throw new Error('Vue passport list is not mounted or original actions missing');
    }
    await page.locator('[data-action="tp-new"]').click();
    // v0.129: Vue owns only the passport form; old save and validation remain.
    const trackEditor129 = page.locator('#sb-vue-track-editor[data-v-app]');
    await trackEditor129.waitFor({ state: 'attached', timeout: 10000 });
    if (await trackEditor129.locator('#sb-track-form[data-sb-vue-track-editor-view]').count() !== 1 ||
        await trackEditor129.locator('#tp-status option').count() !== 7 ||
        await trackEditor129.locator('#tp-genre option').count() < 20 ||
        await trackEditor129.locator('#tp-project option').count() < 1 ||
        await trackEditor129.locator('#tp-idea option').count() < 1 ||
        await trackEditor129.locator('#tp-prompt option').count() < 1 ||
        await page.evaluate(() => typeof window.SUNOBOOM_LEGACY_TRACK_EDITOR?.date7) !== 'function') {
      throw new Error('Vue track passport editor missing fields/options or original date engine');
    }
    if (await page.locator('#sb-vue-track-list').count() !== 0 ||
        await page.locator('#sb-track-form #tp-title').count() !== 1) {
      throw new Error('Passport form fields missing from the Vue editor');
    }
    await page.locator('#tp-title').fill('Vue Passport 126');
    await page.locator('#tp-artist').fill('Исполнитель Vue');
    await page.locator('#tp-status').selectOption('publisher');
    await page.locator('#tp-submitted').fill('2026-11-12');
    if (await trackEditor129.locator('#tp-release').inputValue() !== '2026-11-19' ||
        await trackEditor129.locator('#tp-release').isEnabled() ||
        !(await trackEditor129.locator('#tp-date-hint').textContent()).includes('19.11.2026')) {
      throw new Error('Vue passport date preview did not use the legacy 7-day rule');
    }
    await trackEditor129.locator('#tp-override').check();
    if (!await trackEditor129.locator('#tp-release').isEnabled()) {
      throw new Error('Vue passport manual date toggle did not enable release input');
    }
    await trackEditor129.locator('#tp-release').fill('2026-11-21');
    await trackEditor129.locator('#tp-override').uncheck();
    if (await trackEditor129.locator('#tp-release').inputValue() !== '2026-11-19' ||
        await trackEditor129.locator('#tp-release').isEnabled()) {
      throw new Error('Vue passport editor did not restore automatic release after manual selection');
    }
    await page.locator('#tp-cover').fill('https://example.com/cover-vue128.png');
    await page.locator('#tp-audio').fill('https://example.com/audio-vue128.wav');
    await page.locator('#tp-authors').fill('Автор Vue 128');
    await page.locator('#tp-arrangement').fill('Vue arrangement 128');
    await page.locator('#tp-lyrics').fill('Vue lyrics 128');
    await page.locator('#tp-style').fill('Vue Style 128');
    await page.locator('#tp-notes').fill('Vue notes 128');
    await page.locator('[data-action="tp-save"]').click();
    const track126 = await page.evaluate(() => {
      const item = data.tracks.find(t => t.title === 'Vue Passport 126');
      const saved = JSON.parse(localStorage.getItem('sunoboom-v1') || '{}');
      return { id:item?.id, status:item?.status, release:item?.releaseAt,
        persisted:saved.tracks?.some(t => t.id === item?.id && t.title === 'Vue Passport 126') };
    });
    if (!track126.id || track126.status !== 'publisher' ||
        track126.release !== '2026-11-19' || !track126.persisted ||
        await page.locator('.sb-track-detail').count() !== 1) {
      throw new Error('Original passport save, release and persistence failed: '+JSON.stringify(track126));
    }
    // v0.128: after saving a passport, Vue owns ONLY its complete detail UI.
    const trackDetail128 = page.locator('#sb-vue-track-detail[data-v-app]');
    await trackDetail128.waitFor({ state: 'attached', timeout: 10000 });
    if (await trackDetail128.locator('[data-sb-vue-track-detail-view]').count() !== 1 ||
        await trackDetail128.locator('.sb-track-fact').count() !== 6 ||
        await trackDetail128.locator('.sb-track-linked').count() !== 3 ||
        await trackDetail128.locator('.sb-track-sectionbox').count() !== 4 ||
        await trackDetail128.locator('[data-action="tp-version-add"]').count() !== 1 ||
        await trackDetail128.locator('.sb-track-hero h2').textContent() !== 'Vue Passport 126') {
      throw new Error('Vue passport detail omitted existing metadata, sections, links, or version controls');
    }
    if (await trackDetail128.locator('.sb-track-cover img').getAttribute('src') !== 'https://example.com/cover-vue128.png' ||
        await trackDetail128.locator('.sb-track-buttons a[href="https://example.com/audio-vue128.wav"]').count() !== 1 ||
        !(await trackDetail128.locator('.sb-track-sectionbox').first().textContent()).includes('Vue arrangement 128')) {
      throw new Error('Vue passport detail lost cover/audio or arrangement text');
    }
    await trackDetail128.locator('[data-action="tp-event"]').click();
    if (!await page.evaluate(id =>
      data.events.some(e => e.id === 'track-release-' + id && e.date === '2026-11-19'), track126.id)) {
      throw new Error('Vue detail calendar action failed to save the original release event');
    }
    await page.locator('#tp-version-title').fill('Финальная версия 126');
    await page.locator('#tp-version-url').fill('https://example.com/track126.wav');
    await page.locator('[data-action="tp-version-add"]').click();
    await trackDetail128.waitFor({ state: 'attached', timeout: 10000 });
    if (await trackDetail128.locator('.sb-track-version').count() !== 1 ||
        !await page.evaluate(id =>
      data.tracks.find(t => t.id === id)?.versions?.some(v => v.label === 'Финальная версия 126'), track126.id)) {
      throw new Error('Original passport version add failed');
    }
    // The existing editor remains HTML and must return to the Vue detail.
    await trackDetail128.locator('[data-action="tp-edit"]').click();
    await trackEditor129.waitFor({ state: 'attached', timeout: 10000 });
    if (await trackEditor129.locator('#tp-title').inputValue() !== 'Vue Passport 126' ||
        await trackEditor129.locator('#tp-submitted').inputValue() !== '2026-11-12' ||
        await trackEditor129.locator('#tp-release').inputValue() !== '2026-11-19' ||
        await page.locator('#sb-track-form #tp-title').count() !== 1 ||
        await page.locator('#sb-vue-track-detail').count() !== 0) {
      throw new Error('Vue passport editor did not restore saved values');
    }
    await page.locator('#tp-artist').fill('Исполнитель Vue 128');
    await trackEditor129.locator('#tp-cover').fill('http://invalid.example/cover.png');
    await trackEditor129.locator('[data-action="tp-save"]').click();
    if (await page.locator('#sb-vue-track-editor[data-v-app]').count() !== 1 ||
        await page.evaluate(id => data.tracks.find(t => t.id === id)?.artist, track126.id) === 'Исполнитель Vue 128') {
      throw new Error('Original HTTPS validation was bypassed by the Vue editor');
    }
    await trackEditor129.locator('#tp-cover').fill('https://example.com/cover-vue128.png');
    await trackEditor129.locator('[data-action="tp-save"]').click();
    await trackDetail128.waitFor({ state: 'attached', timeout: 10000 });
    if (await trackDetail128.locator('.sb-track-hero p').textContent() !== 'Исполнитель Vue 128' ||
        await page.evaluate(id => data.tracks.find(t => t.id === id)?.artist, track126.id) !== 'Исполнитель Vue 128') {
      throw new Error('Passport edit failed to return to Vue detail with saved data');
    }
    await page.locator('[data-action="tp-list"]').click();
    await page.locator('#sb-vue-track-list[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await trackList.locator('.sb-track-tile[data-id="'+track126.id+'"]').count() !== 1) {
      throw new Error('Vue passport list did not show the saved track');
    }
    await trackList.locator('[data-filter="released"]').click();
    await page.locator('#sb-vue-track-list[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await trackList.locator('.sb-track-tile[data-id="'+track126.id+'"]').count() ||
        await trackList.locator('[data-filter="released"]').getAttribute('aria-pressed') !== 'true') {
      throw new Error('Vue passport filter did not honor legacy state');
    }
    await trackList.locator('[data-filter="publisher"]').click();
    await page.locator('#sb-vue-track-list[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await trackList.locator('.sb-track-tile[data-id="'+track126.id+'"]').count() !== 1) {
      throw new Error('Vue passport filter could not restore the track');
    }
    await trackList.locator('.sb-track-tile[data-id="'+track126.id+'"]').click();
    await trackDetail128.waitFor({ state: 'attached', timeout: 10000 });
    // v0.138: real Vue buttons restore the filtered list and its specific passport.
    await page.waitForFunction(id => {
      const route = window.SUNOBOOM_VUE_ROUTE?.routerSnapshot();
      return route?.path === '/account/tracks/detail' &&
        route.context?.kind === 'track' && route.context.id === id;
    }, track126.id);
    try {
      await page.waitForFunction(() =>
        !document.querySelector('[data-sb-vue-history] [data-sb-history-back]')?.disabled,
        undefined, { timeout: 8000 });
    } catch {
      const diagnostic = await page.evaluate(() => ({
        route: window.SUNOBOOM_VUE_ROUTE?.routerSnapshot(),
        snapshot: window.SUNOBOOM_LEGACY_NAV?.snapshot(),
        button: document.querySelector('[data-sb-vue-history] [data-sb-history-back]')?.outerHTML
      }));
      throw new Error('Passport history Back unavailable: ' + JSON.stringify(diagnostic));
    }
    await page.locator('[data-sb-vue-history] [data-sb-history-back]').click();
    await page.waitForFunction(() =>
      view.nav === 'tracks' && !view.sbTrackSelected &&
      window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.path === '/account/tracks');
    await page.locator('#sb-vue-track-list[data-v-app]').waitFor({ state: 'attached' });
    if (await trackList.locator('[data-filter="publisher"]').getAttribute('aria-pressed') !== 'true') {
      throw new Error('Passport history Back lost the active list filter');
    }
    await page.waitForFunction(() =>
      !document.querySelector('[data-sb-vue-history] [data-sb-history-forward]')?.disabled);
    await page.locator('[data-sb-vue-history] [data-sb-history-forward]').click();
    await page.waitForFunction(id =>
      view.sbTrackSelected === id &&
      window.SUNOBOOM_VUE_ROUTE?.routerSnapshot()?.context?.id === id, track126.id);
    await trackDetail128.waitFor({ state: 'attached', timeout: 10000 });
    if (page.url() !== BASE) throw new Error('Passport memory history modified the browser URL');
    if (await trackDetail128.locator('.sb-track-version').count() !== 1 ||
        await page.locator('#sb-vue-track-list').count() !== 0) {
      throw new Error('Vue passport detail/versions did not open from Vue list');
    }
    page.once('dialog', dialog => { void dialog.accept(); });
    await page.locator('[data-action="tp-delete"]').click();
    if (await page.evaluate(id => data.tracks.some(t => t.id === id), track126.id) ||
        await page.locator('#sb-vue-track-list[data-v-app]').count() !== 1) {
      throw new Error('Original passport delete did not remount Vue list');
    }

    // v0.124: gear shortcut next to notifications opens the existing settings.
    await page.evaluate(() => go('studio'));
    const headerButtons = page.locator('.top .top-right');
    const shortcut = headerButtons.locator('button.sb-settings-shortcut[data-sbs-action="open-top"]');
    const notification = headerButtons.locator('button[data-action="sb-notice-toggle"]');
    if (await shortcut.count() !== 1 || await notification.count() !== 1 ||
        await shortcut.locator('svg').count() !== 1) {
      throw new Error('Header gear shortcut or notification bell is missing');
    }
    const headerGeometry = await headerButtons.evaluate(node => {
      const bell = node.querySelector('button[data-action="sb-notice-toggle"]');
      const gear = node.querySelector('button.sb-settings-shortcut');
      const avatar = node.querySelector('button.account-shortcut');
      const b = bell?.getBoundingClientRect(), g = gear?.getBoundingClientRect(),
        a = avatar?.getBoundingClientRect();
      const top = node.closest('.top')?.getBoundingClientRect();
      return { order: Boolean(b && g && a && b.right <= g.left + 1 && g.right <= a.left + 1),
        widthsEqual: Boolean(b && g && Math.abs(b.width - g.width) < 1),
        fits: Boolean(top && g && a && g.left >= top.left - 1 && a.right <= top.right + 1),
        sameBackground: Boolean(bell && gear &&
          getComputedStyle(bell).backgroundImage === getComputedStyle(gear).backgroundImage),
        overflow: document.documentElement.scrollWidth > window.innerWidth + 1 };
    });
    if (!headerGeometry.order || !headerGeometry.widthsEqual ||
        !headerGeometry.fits || !headerGeometry.sameBackground ||
        (mobile && headerGeometry.overflow)) {
      throw new Error('Header gear button does not match or fit by the bell: ' +
        JSON.stringify(headerGeometry));
    }
    await shortcut.click();
    await page.locator('#sb-vue-account-settings[data-v-app]').waitFor({ state: 'attached', timeout: 10000 });
    if (await page.locator('#sbs-page[data-sb-vue-settings]').count() !== 1 ||
        await page.locator('#sbs-theme option').count() !==
        await page.evaluate(() => window.SUNOBOOM_LEGACY_SETTINGS?.snapshot()?.themes?.length) ||
        await page.evaluate(() => view.nav) !== 'account') {
      throw new Error('Header settings shortcut did not open the original Vue settings');
    }
    await page.locator('[data-sbs-action="close"]').click();

    const version = await page.locator('.sb-app-version').first().textContent();
    if (!/^v?\d+\.\d+$/.test(String(version || '').trim())) throw new Error('Version display missing or malformed');

    const bad = errors.filter(error => /Vue navigation unavailable|Vue mount failed|Failed to resolve module/i.test(error));
    if (bad.length) throw new Error('Vue startup failure: ' + bad.join('; '));
    console.log((mobile ? 'Mobile' : 'Desktop') + ' Vue navigation smoke PASS');
  } finally {
    await context.close();
  }
}

async function checkEditorFallback() {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.route('**/dist/vue/**', route => route.abort());
  try {
    await page.goto(BASE, { waitUntil: 'domcontentloaded' });
    // The optional Vue toolbar is never a prerequisite for the HTML fallback.
    if (await page.locator('[data-sb-vue-history] button').count()) {
      throw new Error('History Vue buttons appeared with the compiled bundle blocked');
    }
    // Gear shortcut also opens the original settings with the bundle blocked.
    if (await page.locator('.top .sb-settings-shortcut').count() !== 1) {
      throw new Error('Settings gear missing in legacy header');
    }
    await page.locator('.top .sb-settings-shortcut').click();
    if (await page.locator('#sbs-page').count() !== 1 ||
        await page.locator('#sb-vue-account-settings[data-v-app]').count() ||
        await page.locator('#sbs-theme option').count() !==
        await page.evaluate(() => window.SUNOBOOM_LEGACY_SETTINGS?.snapshot()?.themes?.length)) {
      throw new Error('Settings gear did not open HTML fallback preferences');
    }
    await page.locator('[data-sbs-action="close"]').click();
    // Without the Vue bundle the original mobile navigation still carries
    // exactly one Mixer caption (single text node beneath its SVG icon).
    const legacyMixer = await page.locator('.mobile-nav button[data-nav="mixer"]').evaluate(button => ({
      text: button.textContent.trim(),
      spans: button.querySelectorAll(':scope > span').length,
      repetitions: (button.textContent.match(/миксер/gi) || []).length
    }));
    if (legacyMixer.text !== 'Миксер' || legacyMixer.spans !== 1 ||
        legacyMixer.repetitions !== 1) {
      throw new Error('Legacy Mixer caption duplicated: ' + JSON.stringify(legacyMixer));
    }
    const fallbackStyle = await page.locator('.mobile-nav button[data-nav="mixer"] span')
      .evaluate(span => ({
        pseudoText: getComputedStyle(span, '::after').content,
        fontSize: getComputedStyle(span).fontSize
      }));
    if (/миксер/i.test(fallbackStyle.pseudoText || '') ||
        parseFloat(fallbackStyle.fontSize) === 0) {
      throw new Error('Legacy Mixer caption obscured by CSS: ' + JSON.stringify(fallbackStyle));
    }

    await page.evaluate(() => go('myideas'));
    await page.locator('#custom-idea-title').fill('Fallback song');
    await page.locator('#custom-idea-lyrics').fill('Куплет 1:\nНаши слова остаются с нами');
    await page.locator('[data-action="format-idea-lyrics"]').click();
    const output = await page.locator('#custom-idea-tagged').inputValue();
    await page.locator('[data-action="save-manual-idea"]').click();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-v1')).manualIdeas.at(-1));
    if (!output.includes('Наши слова') || saved.sunoLyrics !== output ||
        await page.locator('#sb-vue-idea-fields[data-v-app]').count()) {
      throw new Error('Original editor fallback failed without the Vue bundle');
    }
    await page.evaluate(() => go('saved'));
    if (await page.locator('#sb-vue-library-collection[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-library-collection .genre-card').count() === 0) {
      throw new Error('Original library fallback failed without Vue');
    }
    // Vue may be unavailable: the original card grid, search, and actions must survive.
    await page.evaluate(() => localStorage.setItem('sunoboom-my-songs-v1', JSON.stringify([
      { id: 'song-fallback', title: 'Fallback WAV', artist: 'Legacy Studio', genre: 'Pop',
        updatedAt: Date.now(), createdAt: Date.now(), hasAudio: false, hasCover: false }
    ])));
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.evaluate(() => window.SUNOBOOM_MY_SONGS.openLibrary());
    if (await page.locator('#sb-vue-song-cards[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-song-cards .sbsong-card').count() !== 1) {
      throw new Error('Original My Songs card grid fallback failed without Vue');
    }
    await page.locator('#sbsong-search').fill('does-not-exist');
    if (!(await page.locator('#sb-vue-song-cards').textContent()).includes('По этому запросу песен нет')) {
      throw new Error('Original My Songs search fallback failed without Vue');
    }
    await page.locator('#sbsong-search').fill('');
    await page.locator('#sb-vue-song-cards [data-sbsong-action="open"][data-id="song-fallback"]').first().click();
    if (await page.locator('#sb-vue-song-detail[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-song-detail .sbsong-detail h2').textContent() !== 'Fallback WAV' ||
        await page.locator('#sb-vue-song-detail [data-sbsong-action="version-add"]').count() !== 1) {
      throw new Error('Original song detail fallback failed without Vue');
    }
    await page.locator('[data-sbsong-action="new"]').click();
    if (await page.locator('#sb-vue-song-editor[data-v-app]').count() !== 0 ||
        await page.locator('#sbsong-save-form').count() !== 1) {
      throw new Error('Original song creation fallback did not render without Vue');
    }
    await page.locator('#sbsong-save-form [name="title"]').fill('Saved without Vue 114');
    await page.locator('#sbsong-save-form [name="artist"]').fill('Fallback Artist');
    await page.locator('#sbsong-save-form #sbsong-submit').click();
    await page.waitForFunction(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).some(s => s.title === 'Saved without Vue 114'), null, { timeout: 10000 });
    if (await page.locator('#sb-vue-song-detail .sbsong-detail').count() !== 1) {
      throw new Error('Original song create and detail fallback failed');
    }
    // v0.115: the original manager and its delegated actions remain usable
    // with the production Vue bundle intentionally blocked.
    await page.locator('[data-sbsong-action="artists-manage"]').click();
    const oldManager = page.locator('#sb-vue-artist-manager');
    if (await page.locator('#sb-vue-artist-manager[data-v-app]').count() !== 0 ||
        await oldManager.locator('#sbsong-artist-manager-add').count() !== 1) {
      throw new Error('Original artist manager fallback is missing without Vue');
    }
    await oldManager.locator('#sbsong-artist-manager-add').fill('Original Artist 115');
    await oldManager.locator('[data-sbsong-action="artist-manager-add"]').click();
    await page.waitForFunction(() => (data.songArtists || []).some(a => a.name === 'Original Artist 115') &&
      document.querySelector('#sbsong-artist-manager-results')?.textContent?.includes('Original Artist 115'), null, { timeout: 10000 });
    await oldManager.locator('#sbsong-artist-manager-filter').fill('no-match-115');
    if (!(await oldManager.textContent()).includes('Ничего не найдено')) {
      throw new Error('Original artist manager search fallback failed');
    }
    await oldManager.locator('#sbsong-artist-manager-filter').fill('');
    const legacyArtistId = await page.evaluate(() => data.songArtists.find(a => a.name === 'Original Artist 115')?.id);
    page.once('dialog', dialog => { void dialog.accept(); });
    await oldManager.locator('[data-sbsong-action="artist-remove"][data-id="' + legacyArtistId + '"]').click();
    await page.waitForFunction(() => !(data.songArtists || []).some(a => a.name === 'Original Artist 115'), null, { timeout: 10000 });
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-my-songs-v1')).some(s => s.title === 'Saved without Vue 114')) !== true) {
      throw new Error('Original artist deletion changed a previously saved song');
    }
    // Vue bundle is blocked: the artist DNA collection, form and detail must
    // all remain usable through the original HTML and handlers.
    await page.evaluate(() => {
      view.sbDnaSelected = null;
      view.sbDnaEdit = null;
      go('artists');
    });
    if (await page.locator('#sb-vue-dna-view[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-dna-view').count() !== 1) {
      throw new Error('Original DNA collection fallback is missing');
    }
    await page.locator('[data-action="dna-new"]').click();
    await page.locator('#dna-editor').waitFor({ state: 'visible' });
    if (await page.locator('#sb-vue-dna-editor[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-dna-editor #dna-editor').count() !== 1) {
      throw new Error('Original DNA editor fallback is missing');
    }
    await page.locator('#dna-name').fill('Legacy DNA 116');
    await page.locator('#dna-timbre').fill('clear soft voice');
    if (!(await page.locator('#dna-style-preview').textContent()).includes('clear soft voice')) {
      throw new Error('Original DNA Style preview failed without Vue');
    }
    await page.locator('[data-action="dna-save"]').click();
    await page.waitForFunction(() => JSON.parse(localStorage.getItem('sunoboom-v1')).artistDNAs.some(a => a.name === 'Legacy DNA 116'), null, { timeout: 10000 });
    if (await page.locator('#sb-vue-dna-view .sb-dna-detail').count() !== 1 ||
        await page.locator('#sb-vue-dna-view[data-v-app]').count() !== 0) {
      throw new Error('Original DNA detail failed without Vue');
    }
    await page.locator('[data-action="dna-list"]').click();
    if (await page.locator('#sb-vue-dna-view .sb-dna-card').count() < 1) {
      throw new Error('Original DNA card list failed without Vue');
    }
    // v0.118: the same settings page and original event handlers work without Vue.
    await page.evaluate(() => go('account'));
    await page.locator('[data-sbs-action="open"]').click();
    if (await page.locator('#sb-vue-account-settings[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-account-settings #sbs-compact').count() !== 1) {
      throw new Error('Legacy settings page fallback is missing');
    }
    if (await page.locator('#sbs-theme option').count() !==
        await page.evaluate(() => window.SUNOBOOM_LEGACY_SETTINGS?.snapshot()?.themes?.length)) {
      throw new Error('HTML settings fallback is missing theme options');
    }
    await page.locator('#sbs-theme').selectOption('light');
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')).theme) !== 'light' ||
        !await page.evaluate(() => document.documentElement.classList.contains('sb-theme-light'))) {
      throw new Error('HTML fallback theme selector failed to save light appearance');
    }
    await page.locator('#sbs-reduceMotion').check();
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')).reduceMotion) !== true) {
      throw new Error('Legacy settings fallback failed to persist checkbox changes');
    }
    await page.locator('[data-sbs-action="reset"]').click();
    await page.locator('[data-sbs-action="confirm-reset"]').click();
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')).reduceMotion) !== false) {
      throw new Error('Legacy settings fallback reset failed');
    }
    if (await page.evaluate(() => JSON.parse(localStorage.getItem('sunoboom-ui-settings-v1')).theme) !== 'dark' ||
        await page.evaluate(() => document.documentElement.classList.contains('sb-theme-light'))) {
      throw new Error('Legacy settings fallback failed to restore dark theme');
    }
    await page.locator('[data-sbs-action="close"]').click();
    if (await page.locator('.account-settings [data-action="export"]').count() !== 1) {
      throw new Error('Legacy settings fallback cannot return to backup tools');
    }
    // v0.119: with the Vue bundle blocked the original transport, queue and
    // A/B comparator must still be operable without touching local records.
    await page.evaluate(() => go('player'));
    if (await page.locator('#sb-vue-player-lab[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-player-lab #sbp-play').count() !== 1) {
      throw new Error('Original Player LAB transport fallback is missing');
    }
    await page.locator('#sbp-demo').click();
    if (await page.locator('#sb-vue-player-lab .sbp-track').count() !== 3 ||
        await page.evaluate(() => window.SUNOBOOM_PLAYER_LAB?.getTrackCount()) !== 3) {
      throw new Error('Original Player LAB queue did not render without Vue');
    }
    await page.locator('.sbab-modes [data-mode="compare"]').click();
    if (await page.evaluate(() => window.SUNOBOOM_AB_COMPARE?.getMode()) !== 'compare' ||
        await page.locator('#sb-vue-player-ab[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-player-ab #sbab-play:disabled').count() !== 1) {
      throw new Error('Original A/B comparison fallback is missing without Vue');
    }
    if (await page.locator('#sb-vue-player-lab').isVisible()) {
      throw new Error('Vue Player LAB must be hidden while A/B comparison is active');
    }
    await page.locator('#sbab-compare [data-sbab-action="demo"]').click();
    if (!await page.evaluate(() => window.SUNOBOOM_AB_COMPARE?.hasBoth()) ||
        await page.locator('#sbab-compare #sbab-play:enabled').count() !== 1) {
      throw new Error('Original A/B comparison demo failed without Vue');
    }
    await page.locator('.sbab-modes [data-mode="player"]').click();
    await page.locator('#sbp-clear').click();
    if (await page.evaluate(() => window.SUNOBOOM_PLAYER_LAB?.getTrackCount()) !== 0) {
      throw new Error('Original Player LAB clear failed without Vue');
    }
    // A blocked Vue bundle must leave the original Master list fully usable.
    await page.evaluate(() => go('producer'));
    if (await page.locator('#sbpc-list[data-v-app]').count() ||
        await page.locator('#sbpc-new-title').count() !== 1) {
      throw new Error('Master legacy fallback is missing');
    }
    await page.locator('#sbpc-new-title').fill('Fallback Master 122');
    await page.locator('[data-pc-action="create"]').click();
    if (await page.locator('#sbpc-list .sbpc-song.active').count() !== 1 ||
        await page.evaluate(() => data.productions.some(w => w.title === 'Fallback Master 122')) !== true) {
      throw new Error('Master fallback creation failed');
    }
    // The complete original detail must remain editable without the Vue bundle.
    const legacyDetail = page.locator('#sb-vue-producer-detail');
    if (await legacyDetail.count() !== 1 ||
        await page.locator('#sb-vue-producer-detail[data-v-app]').count() ||
        await legacyDetail.locator('[data-pc-stage]').count() !== 6 ||
        await legacyDetail.locator('[data-pc-link]').count() !== 6) {
      throw new Error('Original Master detail fallback lost stages or link selectors');
    }
    await legacyDetail.locator('#sbpc-artist').fill('Fallback Artist 125');
    await legacyDetail.locator('#sbpc-notes').fill('Backup detail editing works');
    await legacyDetail.locator('[data-pc-action="save-details"]').click();
    if (await page.evaluate(() => data.productions.find(w => w.title === 'Fallback Master 122')?.artist) !== 'Fallback Artist 125') {
      throw new Error('Original Master fallback failed to save song details');
    }
    await page.locator('[data-pc-stage="idea"]').selectOption('done');
    if (await page.evaluate(() => data.productions.find(w => w.title === 'Fallback Master 122')?.steps?.idea) !== 'done') {
      throw new Error('Original Master fallback failed to update stage status');
    }
    await page.locator('#sbpc-search').fill('not-in-master-122');
    if (await page.locator('#sbpc-list .sbpc-song').count() ||
        !(await page.locator('#sbpc-list').textContent()).includes('Поиск не дал результатов')) {
      throw new Error('Master legacy fallback search failed');
    }
    await page.locator('#sbpc-search').fill('');
    // v0.126: blocked Vue bundle leaves working passport filters and editor.
    await page.evaluate(() => go('tracks'));
    if (await page.locator('#sb-vue-track-list[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-track-list [data-action="tp-filter"]').count() !== 8) {
      throw new Error('Original passport list fallback is missing');
    }
    await page.locator('[data-action="tp-new"]').click();
    if (await page.locator('#sb-vue-track-editor[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-track-editor #sb-track-form').count() !== 1 ||
        await page.locator('#sb-vue-track-editor #tp-release:disabled').count() !== 1) {
      throw new Error('Original passport editor fallback missing with Vue blocked');
    }
    await page.locator('#tp-submitted').fill('2026-11-12');
    if (await page.locator('#tp-release').inputValue() !== '2026-11-19') {
      throw new Error('Original passport date calculation broke without Vue');
    }
    await page.locator('#tp-title').fill('Fallback Passport 126');
    await page.locator('#tp-status').selectOption('lyrics');
    await page.locator('[data-action="tp-save"]').click();
    if (await page.evaluate(() =>
      data.tracks.some(t => t.title === 'Fallback Passport 126' && t.status === 'lyrics')) !== true ||
        await page.locator('#sb-vue-track-detail .sb-track-detail').count() !== 1 ||
        await page.locator('#sb-vue-track-detail[data-v-app]').count() !== 0 ||
        await page.locator('#sb-vue-track-detail [data-action="tp-version-add"]').count() !== 1) {
      throw new Error('Original passport fallback could not save/display a track');
    }
    await page.locator('[data-action="tp-list"]').click();
    await page.locator('#sb-vue-track-list [data-filter="lyrics"]').click();
    if (await page.locator('#sb-vue-track-list [data-action="tp-open"]').count() !== 1 ||
        !(await page.locator('#sb-vue-track-list').textContent()).includes('Fallback Passport 126')) {
      throw new Error('Original passport filter fallback did not work');
    }
    console.log('Original song editor, library, My Songs, artist manager, DNA, settings, player, Master and passports without Vue PASS');
  } finally { await context.close(); }
}

try {
  await ready();
  browser = await chromium.launch({ headless: true });
  await checkLayout(false);
  await checkLayout(true);
  await checkEditorFallback();
} finally {
  await browser?.close();
  server.kill('SIGTERM');
}

