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
    await page.locator('[data-sb-vue-sidebar][data-v-app]').waitFor({ timeout: 20000 });
    await page.locator('[data-sb-vue-mobile][data-v-app]').waitFor({ timeout: 20000 });

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

    const version = await page.locator('.sb-app-version').first().textContent();
    if (!version?.includes('0.93')) throw new Error('Version display changed unexpectedly');

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
