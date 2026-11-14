import assert from 'node:assert/strict';

// User-visible regression F1: a real tile click must open the encyclopedia.
// Run unchanged with production Vue and with its bundle blocked.
export async function checkArtistProfiles(page, vue) {
  const key = 'sunoboom-artist-profile-favorites-v1';
  const saved = await page.evaluate(key => localStorage.getItem(key), key);
  const waitCatalog = async () => {
    await page.waitForFunction(vue => !!document.querySelector('#sb-vue-academy-root') &&
      document.querySelector('#sb-vue-academy-root').hasAttribute('data-v-app') === vue, vue);
  };
  const search = page.locator('#sb-ap-search');
  const cards = page.locator('#sb-ap-results .sb-ap-index-card');
  const overlay = page.locator('#sb-ap-overlay');
  const favorite = () => page.locator('#sb-ap-results [data-sb-ap-action="favorite"]').first();
  try {
    await page.evaluate(key => {
      localStorage.setItem(key, JSON.stringify(['кино']));
    }, key);
    // Reload reads a pre-existing favorite in the unchanged storage format.
    await page.reload({waitUntil:'domcontentloaded'});
    await page.evaluate(() => go('catalog'));
    await waitCatalog();
    await page.locator('[data-sb-ap-action="hub-open"]').click();
    await search.waitFor({state:'visible'});
    assert.equal(await cards.count(), 24, 'first page must contain 24 artists');
    assert.equal(await page.locator('#sb-ap-hub').count(), 1, 'one hub owner');
    if (vue) assert.equal(await page.locator('[data-sb-vue-profile-hub]').count(), 1);
    await page.locator('#sb-ap-more').click();
    await page.waitForFunction(() => document.querySelectorAll('#sb-ap-results .sb-ap-index-card').length === 48);
    await page.locator('#sb-ap-locale').selectOption('ru');
    await search.fill('Distemper');
    await page.waitForFunction(() => document.querySelectorAll('#sb-ap-results .sb-ap-index-card').length === 1);
    assert.match(await cards.textContent(), /Русскоязычная подборка/);
    await page.locator('#sb-ap-locale').selectOption('world');
    await page.locator('.sb-ap-empty').waitFor();
    await page.locator('#sb-ap-locale').selectOption('all');
    await search.fill('несуществующий исполнитель qzxqzx');
    await page.locator('.sb-ap-empty').waitFor();
    assert.equal(await page.locator('#sb-ap-more').isVisible(), false);
    await search.fill('Distemper');
    await favorite().waitFor();
    assert.equal(await favorite().getAttribute('aria-pressed'), 'false');
    await favorite().click();
    await page.waitForFunction(() => document.querySelector('#sb-ap-results [data-sb-ap-action="favorite"]').getAttribute('aria-pressed') === 'true');
    assert.deepEqual(await page.evaluate(key => JSON.parse(localStorage.getItem(key)), key), ['кино','distemper'], 'exactly one favorite write; preserve old entries');
    await page.locator('#sb-ap-saved-only').check();
    await page.locator('#sb-ap-results [data-sb-ap-action="profile"]').click();
    await overlay.waitFor({state:'visible'});
    if (vue) await page.locator('#sb-ap-dialog-body[data-v-app]').waitFor();
    assert.equal(await page.locator('#sb-ap-dialog-heading').textContent(), 'Distemper');
    assert.match(await overlay.textContent(), /Редакционная справка SUNOBOOM/);
    assert.match(await overlay.textContent(), /Российский коллектив ска-панка/);
    await page.evaluate(() => {
      window.__artistClipboardDescriptor = Object.getOwnPropertyDescriptor(navigator,'clipboard');
      Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async text => {window.__artistCopied=text;}}});
    });
    await overlay.locator('[data-sb-ap-action="copy"]').click();
    assert.match(await page.evaluate(() => window.__artistCopied), /^Distemper\n\nРоссийский коллектив/);
    const close = page.locator('#sb-ap-overlay button[data-sb-ap-action="close"]');
    await close.focus();await close.press('Shift+Tab');
    assert.equal(await overlay.locator('[data-sb-ap-action="copy"]').evaluate(node => document.activeElement === node), true, 'reverse focus trap');
    await page.keyboard.press('Tab');
    assert.equal(await close.evaluate(node => document.activeElement === node), true, 'forward focus trap');
    await overlay.locator('[data-sb-ap-action="favorite"]').click();
    await page.locator('.sb-ap-empty').waitFor();
    assert.equal(await overlay.locator('[data-sb-ap-action="favorite"]').getAttribute('aria-pressed'), 'false');
    await overlay.locator('[data-sb-ap-action="favorite"]').click();
    await page.keyboard.press('Escape');
    await overlay.waitFor({state:'hidden'});
    assert.equal(await page.evaluate(() => document.body.style.overflow), '', 'scroll unlocked');
    // Restore focus when the originating card remains connected.
    await page.locator('#sb-ap-results [data-sb-ap-action="profile"]').click();
    await close.click();
    assert.equal(await page.locator('#sb-ap-results [data-sb-ap-action="profile"]').evaluate(node => document.activeElement === node), true);
    // Repeated native render must not erase the Vue hub or its current filters.
    await page.evaluate(() => { render(); });await waitCatalog();
    await search.waitFor({state:'visible'});
    assert.equal(await search.inputValue(), 'Distemper');
    assert.equal(await page.locator('#sb-ap-saved-only').isChecked(), true);
    assert.equal(await cards.count(), 1);
    await page.locator('#genre-search').fill('ска');
    assert.equal(await cards.count(), 1, 'genre query must not destroy the encyclopedia');
    await page.locator('#sb-ap-results [data-sb-ap-action="profile"]').click();
    await overlay.waitFor({state:'visible'});
    const related = overlay.locator('[data-sb-ap-action="genre"]').first();
    const genre = await related.getAttribute('data-genre');
    await related.click();
    await page.waitForFunction(id => view.nav === 'detail' && view.selected === id && view.tab === 'artists', genre);
    await overlay.waitFor({state:'hidden'});
    if (vue) await page.locator('[data-sb-vue-artists]').waitFor();
    // Genre cards now own their real Vue buttons; no post-render DOM appends.
    const profile = page.locator('.ahx-card [data-sb-ap-action="profile"],.ah-card [data-sb-ap-action="profile"]').first();
    await profile.waitFor();
    const name = await profile.getAttribute('data-name');
    await profile.click();await overlay.waitFor({state:'visible'});
    await page.waitForFunction(name => document.querySelector('#sb-ap-dialog-heading')?.textContent === name, name);
    await close.click();
    await page.evaluate(() => go('home'));
    await page.evaluate(() => go('catalog'));await waitCatalog();
    await search.waitFor({state:'visible'});
    assert.equal(await search.inputValue(), 'Distemper');
    assert.equal(await cards.count(), 1);
    await page.locator('#sb-ap-saved-only').uncheck();
    await search.fill('');
    const ordinary = page.locator('#sb-ap-results [data-sb-ap-action="profile"]').first();
    const ordinaryName = await ordinary.getAttribute('data-name');
    await ordinary.click();await overlay.waitFor({state:'visible'});
    await page.waitForFunction(name => document.querySelector('#sb-ap-dialog-heading')?.textContent === name,ordinaryName);
    assert.match(await overlay.textContent(), /Сведения из карточек Академии/);
    assert.match(await overlay.textContent(), /не является подтверждённым персональным анализом/);
    await close.click();
    await page.locator('#sb-ap-hub summary').click();
    assert.equal(await search.isVisible(), false);
    await page.locator('[data-sb-ap-action="hub-open"]').click();
    await search.waitFor({state:'visible'});
    console.log(`Artist encyclopedia, favorites, profile and related genre ${vue?'Vue':'native'} PASS`);
  } finally {
    await page.evaluate(({key,saved}) => {
      window.SUNOBOOM_ARTIST_PROFILES?.closeProfile();
      if (window.__artistClipboardDescriptor) Object.defineProperty(navigator,'clipboard',window.__artistClipboardDescriptor);
      else delete navigator.clipboard;
      delete window.__artistClipboardDescriptor;delete window.__artistCopied;
      if (saved === null) localStorage.removeItem(key);else localStorage.setItem(key,saved);
      go('home');
    }, {key,saved});
  }
}

export async function checkArtistProfilesStartup(browser, base) {
  for (const failMount of [false,true]) {
    const context = await browser.newContext({viewport:{width:375,height:812}});
    let release;
    const gate = new Promise(resolve => { release = resolve; });
    await context.route('**/dist/vue/*.js*', async route => { await gate;await route.continue(); });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    try {
      await page.goto(base, {waitUntil:'domcontentloaded'});
      await page.evaluate(() => go('catalog'));
      await page.locator('[data-sb-ap-action="hub-open"]').click();
      await page.locator('#sb-ap-search').fill('Distemper');
      await page.locator('#sb-ap-results [data-sb-ap-action="profile"]').click();
      await page.locator('#sb-ap-dialog-heading').waitFor();
      if (failMount) await page.evaluate(() => {
        // Exercise production mount recovery, with a working native UI already open.
        const original = window.SUNOBOOM_ARTIST_PROFILES;
        window.SUNOBOOM_ARTIST_PROFILES = Object.freeze({
          ...window.SUNOBOOM_ARTIST_PROFILES,
          hubSnapshot(){throw Error('test: hub snapshot unavailable');},
          profileSnapshot(){return {...original.profileSnapshot(),songs:null};}
        });
      });
      release();
      await page.locator('[data-sb-vue-sidebar][data-v-app]').waitFor({state:'attached'});
      if (failMount) {
        // A failed hub setup restores its native subtree; a failed dialog
        // snapshot must not abort initialization of the other Vue features.
        await page.waitForFunction(() => document.querySelector('#sb-vue-academy-root') &&
          !document.querySelector('#sb-vue-academy-root').hasAttribute('data-v-app') &&
          document.querySelector('#sb-ap-search'));
        await page.locator('#sb-ap-overlay button[data-sb-ap-action="close"]').click();
        assert.equal(await page.locator('#sb-ap-search').inputValue(), 'Distemper', 'failed mount retains native query');
        await page.locator('#sb-ap-search').fill('Кино');
        await page.waitForFunction(() => document.querySelector('#sb-ap-results')?.textContent.includes('Кино'));
        const profile = page.locator('#sb-ap-results [data-sb-ap-action="profile"]').first();
        const name = await profile.getAttribute('data-name');
        await profile.click();
        await page.waitForFunction(name => document.querySelector('#sb-ap-dialog-heading')?.textContent === name,name);
      } else {
        await page.locator('#sb-vue-academy-root[data-v-app]').waitFor();
        await page.locator('#sb-ap-dialog-body[data-v-app]').waitFor();
        await page.locator('#sb-ap-overlay button[data-sb-ap-action="close"]').click();
        assert.equal(await page.locator('#sb-ap-search').inputValue(), 'Distemper', 'late mounting retains native query');
        assert.equal(await page.locator('#sb-ap-results .sb-ap-index-card').count(), 1);
        await page.locator('#sb-ap-results [data-sb-ap-action="profile"]').click();
        await page.waitForFunction(() => document.querySelector('#sb-ap-dialog-heading')?.textContent === 'Distemper');
      }
      assert.deepEqual(errors, [], 'no unhandled exception during hand-off or fallback');
      console.log(`Artist profiles ${failMount?'failed mount recovery':'delayed Vue hand-off'} PASS`);
    } finally { release();await context.close(); }
  }
}
