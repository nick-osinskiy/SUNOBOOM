import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createPinia } from 'pinia';
import { useLegacyUiStore } from '../src/vue/state/legacy-ui-store.js';
import { normalizeLegacyAppearance } from '../src/vue/state/appearance-model.js';
import { normalizeTopHeader } from '../src/vue/navigation/top-header-model.js';
import { observeLegacyIsland } from '../src/vue/legacy/observeLegacyIsland.js';
import { observeLegacyIslands } from '../src/vue/legacy/observeLegacyIslands.js';
import { normalizeAcademyCatalog, normalizeAcademyFocus, normalizeAcademyTree } from '../src/vue/state/academy-ui-model.js';
import { normalizeStudioSummary, normalizeMixerSummary, normalizeAuditorSummary, normalizeArrangerSummary } from '../src/vue/state/production-ui-model.js';
import { normalizePlayerLabSummary, normalizePlayerAbSummary } from '../src/vue/state/player-ui-model.js';
import { normalizeMasterListSummary, normalizePassportListSummary, normalizeMasterDetailSummary, normalizePassportDetailSummary } from '../src/vue/state/workflow-ui-model.js';
import { normalizeSongCollectionSummary, normalizeSongDetailSummary } from '../src/vue/state/song-ui-model.js';
import { normalizeArtistManagerSummary, normalizeArtistDnaSummary } from '../src/vue/state/artist-ui-model.js';
import { normalizeLibrarySummary } from '../src/vue/state/library-ui-model.js';
import { normalizeIdeaDraftSummary, normalizePromptDraftSummary } from '../src/vue/state/editor-ui-model.js';
import { normalizePoetrySourceSummary, normalizePoetryAnalysisSummary, normalizePoetryAmbiguitySummary } from '../src/vue/state/poetry-ui-model.js';
import { normalizePerformanceTagsSummary } from '../src/vue/state/performance-tags-ui-model.js';
import { treeSearch, nextTreeZoom, connectedTreeEdges } from '../src/vue/academy/genre-tree-model.js';
import { groupMajorVersions, historyResults, formatReleaseDate } from '../src/vue/version-history/version-model.js';
import { activeNavigationRoute, navigationSnapshot } from '../src/vue/navigation/nav-model.js';
import { currentRoute, syncLegacyRoute } from '../src/vue/navigation/route-state.js';
import { navigateFromVueMenu, navigateFromVueShortcut } from '../src/vue/navigation/navigation-dispatch.js';
import { canRestoreLegacyMenuHistory, restoreLegacyMenuHistory } from '../src/vue/navigation/legacy-history-restore.js';
import {
  activeRouteFromMemoryPath, legacyMemoryHistoryCandidate, legacyRouteFromMemoryPath,
  legacyMirrorRouter, legacyRouterSnapshot, memoryHistoryRevision, routeToMemoryPath, whenLegacyRouterSettled
} from '../src/vue/navigation/legacy-router-mirror.js';

test('genre details highlight the Academy menu', () => {
  assert.equal(activeNavigationRoute('detail'), 'catalog');
});

test('nested account screens keep Account highlighted', () => {
  for (const route of ['projects', 'saved', 'myideas', 'myprompts', 'events', 'tracks', 'artists']) {
    assert.equal(activeNavigationRoute(route), 'account');
  }
});

test('the existing Master route is retained, not renamed technically', () => {
  const items = navigationSnapshot({
    active: 'producer',
    items: [
      { id: 'studio', label: 'Suno Studio', iconHtml: '<svg></svg>' },
      { id: 'producer', label: 'Мастер', iconHtml: '<svg></svg>' },
      { id: 'account', label: 'Личный кабинет', iconHtml: '<svg></svg>' }
    ]
  });
  assert.deepEqual(items.map(item => item.id), ['studio', 'producer', 'account']);
  assert.equal(items[1].active, true);
  assert.equal(items[2].shortLabel, 'Кабинет');
});

test('mobile labels match the old menu and duplicate ids are discarded', () => {
  const items = navigationSnapshot({
    active: 'home',
    items: [
      { id: 'home', label: 'Главная' },
      { id: 'ideas', label: 'Идеи песен' },
      { id: 'studio', label: 'Suno Studio' },
      { id: 'home', label: 'Duplicate' }
    ]
  });
  assert.deepEqual(items.map(item => item.shortLabel), ['Главная', 'Идеи', 'Студия']);
  assert.equal(items.filter(item => item.active).length, 1);
});


test('mobile navigation shows one concise Mixer entry even when legacy labels repeat', () => {
  const items = navigationSnapshot({
    active: 'mixer',
    items: [
      { id: 'studio', label: 'Suno Studio' },
      { id: 'mixer', label: 'Жанровый миксер' },
      { id: 'legacy-mix', label: 'Миксер' },
      { id: 'producer', label: 'Мастер' },
      { id: 'account', label: 'Личный кабинет' }
    ]
  });
  assert.deepEqual(items.map(item => item.id), ['studio', 'mixer', 'producer', 'account']);
  assert.equal(items.filter(item => item.shortLabel === 'Миксер').length, 1);
  assert.equal(items.find(item => item.id === 'mixer')?.active, true);
});

test('the shared Vue route reflects legacy route changes without duplicate revisions', () => {
  const initial = currentRoute.value.revision;
  const detail = syncLegacyRoute('detail');
  assert.equal(detail.route, 'detail');
  assert.equal(detail.active, 'catalog');
  assert.equal(syncLegacyRoute('detail').revision, detail.revision);
  const tracks = syncLegacyRoute('tracks');
  assert.equal(tracks.active, 'account');
  assert.equal(tracks.revision, detail.revision + 1);
  const producer = syncLegacyRoute('producer');
  assert.equal(producer.active, 'producer');
  assert.equal(producer.revision, initial + 3);
  assert.equal(Object.isFrozen(currentRoute.value), true);
  syncLegacyRoute('home');
});

test('the shared route defaults to home and allows future legacy route IDs', () => {
  assert.equal(syncLegacyRoute(null).active, 'home');
  assert.equal(syncLegacyRoute('future-route').active, 'future-route');
  syncLegacyRoute('home');
});

test('Vue Router resolves the legacy screens without touching browser history', () => {
  assert.equal(routeToMemoryPath('home'), '/home');
  assert.equal(routeToMemoryPath('catalog'), '/catalog');
  assert.equal(routeToMemoryPath('detail'), '/catalog/detail');
  assert.equal(routeToMemoryPath('tracks'), '/account/tracks');
  assert.equal(routeToMemoryPath('myideas'), '/account/myideas');
  assert.equal(routeToMemoryPath('producer'), '/producer');
  assert.equal(routeToMemoryPath('future-section'), '/future-section');
  assert.equal(routeToMemoryPath(''), '/home');
});

test('Vue Router mirrors rapid legacy transitions using memory history', async () => {
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  assert.equal(legacyMirrorRouter.currentRoute.value.path, '/home');
  syncLegacyRoute('studio');
  syncLegacyRoute('detail');
  syncLegacyRoute('tracks');
  await whenLegacyRouterSettled();
  assert.equal(legacyMirrorRouter.currentRoute.value.path, '/account/tracks');
  assert.equal(legacyRouterSnapshot().active, 'account');
  assert.equal(legacyRouterSnapshot().name, 'legacy-view');
  syncLegacyRoute('detail');
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/catalog/detail');
  assert.equal(legacyRouterSnapshot().active, 'catalog');
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/home');
});

test('Vue Router maps settled paths to the appropriate active menu', () => {
  assert.equal(activeRouteFromMemoryPath('/home'), 'home');
  assert.equal(activeRouteFromMemoryPath('/studio'), 'studio');
  assert.equal(activeRouteFromMemoryPath('/producer'), 'producer');
  assert.equal(activeRouteFromMemoryPath('/catalog/detail'), 'catalog');
  assert.equal(activeRouteFromMemoryPath('/account/tracks'), 'account');
  assert.equal(activeRouteFromMemoryPath('/account/myideas'), 'account');
  assert.equal(activeRouteFromMemoryPath('/future-route'), 'future-route');
  assert.equal(activeRouteFromMemoryPath('/'), 'home');
  assert.equal(activeRouteFromMemoryPath('/%broken'), 'home');
});

test('Vue Router navigation adapter delegates exactly one click to legacy go()', () => {
  const navigations = [];
  const resolved = [];
  const synced = [];
  let route = 'home';
  const api = {
    snapshot: () => ({ active: route, items: [
      { id: 'home', label: 'Главная' },
      { id: 'producer', label: 'Мастер' },
      { id: 'studio', label: 'Студия' }
    ] }),
    navigate: id => { navigations.push(id); route = id; }
  };
  const router = { resolve: path => { resolved.push(path); return { path }; } };
  const syncRoute = (id, options) => synced.push({ id, historyMode: options?.historyMode });
  assert.equal(navigateFromVueMenu('producer', { router, legacyApi: api, syncRoute }), true);
  assert.deepEqual(navigations, ['producer']);
  assert.deepEqual(resolved, ['/producer']);
  assert.deepEqual(synced, [{ id: 'producer', historyMode: 'push' }]);
  assert.equal(navigateFromVueMenu('studio', { router, legacyApi: api, syncRoute }), true);
  assert.deepEqual(navigations, ['producer', 'studio']);
  assert.deepEqual(resolved, ['/producer', '/studio']);
  assert.deepEqual(synced, [
    { id: 'producer', historyMode: 'push' },
    { id: 'studio', historyMode: 'push' }
  ]);
});

test('Vue menu adapter rejects unknown/duplicate hidden routes without dispatch', () => {
  let count = 0;
  const api = {
    snapshot: () => ({ active: 'home', items: [{ id: 'mixer', label: 'Миксер' }] }),
    navigate: () => { count++; }
  };
  const router = { resolve: path => ({ path }) };
  const opts = { legacyApi: api, router, syncRoute: () => {} };
  assert.equal(navigateFromVueMenu('mixer-copy-test', opts), false);
  assert.equal(navigateFromVueMenu('', opts), false);
  assert.equal(navigateFromVueMenu(null, opts), false);
  assert.equal(navigateFromVueMenu('mixer', opts), true);
  assert.equal(count, 1);
});

test('Vue navigation adapter falls back to legacy when router resolution fails', () => {
  let active = 'home', count = 0, mirrored = null;
  const api = {
    snapshot: () => ({ active, items: [{ id: 'account', label: 'Кабинет' }] }),
    navigate: id => { active = id; count++; }
  };
  const router = { resolve: () => { throw new Error('memory router unavailable'); } };
  const originalWarn = console.warn;
  console.warn = () => {};
  try {
    assert.equal(navigateFromVueMenu('account', { legacyApi: api, router,
      syncRoute: (id, options) => { mirrored = { id, mode: options.historyMode }; } }), true);
    assert.equal(count, 1);
    assert.equal(active, 'account');
    assert.deepEqual(mirrored, { id: 'account', mode: 'replace' });
  } finally {
    console.warn = originalWarn;
  }
});

test('menu transitions push in Vue Router memory while legacy routes replace', async () => {
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  const originalPushCount = legacyRouterSnapshot().menuPushes;
  const api = {
    active: 'home',
    snapshot() { return { active: this.active, items: [
      { id: 'home', label: 'Главная' },
      { id: 'producer', label: 'Мастер' },
      { id: 'studio', label: 'Студия' }
    ] }; },
    navigate(id) { this.active = id; }
  };
  assert.equal(navigateFromVueMenu('producer', {
    router: legacyMirrorRouter, legacyApi: api
  }), true);
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/producer');
  assert.equal(legacyRouterSnapshot().transition, 'push');
  assert.equal(legacyRouterSnapshot().menuPushes, originalPushCount + 1);

  // A render of the same legacy route cannot push again.
  syncLegacyRoute('producer');
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().menuPushes, originalPushCount + 1);

  // A programmatic old go() replaces the current memory entry.
  syncLegacyRoute('tracks');
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/account/tracks');
  assert.equal(legacyRouterSnapshot().transition, 'replace');
  assert.equal(legacyRouterSnapshot().menuPushes, originalPushCount + 1);

  assert.equal(navigateFromVueMenu('studio', {
    router: legacyMirrorRouter, legacyApi: api
  }), true);
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/studio');
  assert.equal(legacyRouterSnapshot().menuPushes, originalPushCount + 2);

  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('cancelled or redirected legacy menu action does not push an incorrect route', () => {
  const invoked = [];
  const api = {
    snapshot: () => ({ active: 'home', items: [{ id: 'studio', label: 'Студия' }] }),
    navigate: id => invoked.push(id)
  };
  const observed = [];
  assert.equal(navigateFromVueMenu('studio', {
    router: { resolve: path => ({ path }) },
    legacyApi: api,
    syncRoute: (id, options) => observed.push({ id, mode: options.historyMode })
  }), true);
  assert.deepEqual(invoked, ['studio']);
  assert.deepEqual(observed, [{ id: 'home', mode: 'replace' }]);
});

test('memory history restores a safe legacy top-level route exactly once', async () => {
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  let current = 'home';
  const calls = [];
  const options = ['home', 'producer', 'studio', 'account'];
  const legacyApi = {
    snapshot: () => ({ active: current, items: options.map(id => ({ id, label: id })) }),
    navigate: id => { calls.push(id); current = id; }
  };
  navigateFromVueMenu('producer', { router: legacyMirrorRouter, legacyApi });
  await whenLegacyRouterSettled();
  navigateFromVueMenu('studio', { router: legacyMirrorRouter, legacyApi });
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/studio');
  assert.equal(legacyRouterSnapshot().canGoBack, true);
  assert.equal(legacyMemoryHistoryCandidate('back').path, '/producer');

  assert.equal(await restoreLegacyMenuHistory('back', { legacyApi }), true);
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/producer');
  assert.equal(legacyRouterSnapshot().transition, 'back');
  assert.equal(current, 'producer');
  assert.equal(legacyRouterSnapshot().canGoForward, true);

  assert.equal(await restoreLegacyMenuHistory('forward', { legacyApi }), true);
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/studio');
  assert.equal(legacyRouterSnapshot().transition, 'forward');
  assert.deepEqual(calls, ['producer', 'studio', 'producer', 'studio']);
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('memory restore refuses nested or unknown routes without navigating legacy app', async () => {
  assert.equal(legacyRouteFromMemoryPath('/catalog/detail'), null);
  assert.equal(legacyRouteFromMemoryPath('/account/tracks'), null);
  assert.equal(legacyRouteFromMemoryPath('/producer'), 'producer');
  assert.equal(legacyRouteFromMemoryPath('/%broken'), null);
  assert.equal(await restoreLegacyMenuHistory('sideways', {}), false);
  assert.equal(await restoreLegacyMenuHistory('back', {}), false);
});

test('history toolbar availability matches guarded restore rules', async () => {
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  let active = 'home';
  const api = {
    snapshot: () => ({ active, items: [
      { id: 'home' }, { id: 'producer' }, { id: 'studio' }
    ] }),
    navigate: id => { active = id; }
  };
  navigateFromVueMenu('producer', { router: legacyMirrorRouter, legacyApi: api });
  await whenLegacyRouterSettled();
  navigateFromVueMenu('studio', { router: legacyMirrorRouter, legacyApi: api });
  await whenLegacyRouterSettled();
  assert.equal(canRestoreLegacyMenuHistory('back', { legacyApi: api }), true);
  assert.equal(canRestoreLegacyMenuHistory('forward', { legacyApi: api }), false);

  // An editor or programmatic legacy transition makes the history out of sync.
  active = 'tracks';
  assert.equal(canRestoreLegacyMenuHistory('back', { legacyApi: api }), false);
  active = 'studio';
  assert.equal(await restoreLegacyMenuHistory('back', { legacyApi: api }), true);
  await whenLegacyRouterSettled();
  assert.equal(canRestoreLegacyMenuHistory('forward', { legacyApi: api }), true);
  assert.equal(canRestoreLegacyMenuHistory('back', { legacyApi: {
    snapshot: () => ({ active: 'producer', items: [{ id: 'studio' }] })
  } }), false);
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('genre detail memory entry restores its exact selected genre and Vue tab', async () => {
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  let active = 'catalog';
  let selected = null;
  let tab = null;
  syncLegacyRoute('catalog', { historyMode: 'push' });
  await whenLegacyRouterSettled();
  const api = {
    snapshot: () => ({
      active,
      detail: active === 'detail' ? { id: selected, tab } : null,
      items: [{ id: 'catalog' }, { id: 'home' }]
    }),
    navigate: id => { active = id; },
    canRestoreGenre: (id, t) => id === 'reggae-ska' && ['overview', 'ideas', 'prompts', 'artists'].includes(t),
    restoreGenre(id, t) { selected = id; tab = t; active = 'detail'; return true; }
  };
  api.restoreGenre('reggae-ska', 'overview');
  syncLegacyRoute('detail', { historyMode: 'push',
    context: { kind: 'genre', id: 'reggae-ska', tab: 'overview' } });
  await whenLegacyRouterSettled();
  tab = 'artists';
  syncLegacyRoute('detail', { context: { kind: 'genre', id: 'reggae-ska', tab } });
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().context.tab, 'artists');
  assert.equal(canRestoreLegacyMenuHistory('back', { legacyApi: api }), true);
  assert.equal(await restoreLegacyMenuHistory('back', { legacyApi: api }), true);
  await whenLegacyRouterSettled();
  assert.equal(active, 'catalog');
  assert.equal(legacyRouterSnapshot().path, '/catalog');
  assert.equal(canRestoreLegacyMenuHistory('forward', { legacyApi: api }), true);
  selected = null; tab = null; // prove that the stored context drives restore
  assert.equal(await restoreLegacyMenuHistory('forward', { legacyApi: api }), true);
  await whenLegacyRouterSettled();
  assert.equal(active, 'detail');
  assert.equal(selected, 'reggae-ska');
  assert.equal(tab, 'artists');
  assert.equal(legacyRouterSnapshot().path, '/catalog/detail');
  assert.equal(legacyRouterSnapshot().context.tab, 'artists');
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('unrecorded or invalid nested context never enables history restoration', async () => {
  const api = {
    snapshot: () => ({ active: 'catalog', items: [{ id: 'catalog' }] }),
    navigate: () => { throw new Error('must not navigate'); },
    canRestoreGenre: () => false,
    restoreGenre: () => { throw new Error('must not restore'); }
  };
  assert.equal(canRestoreLegacyMenuHistory('sideways', { legacyApi: api }), false);
  assert.equal(canRestoreLegacyMenuHistory('forward', { legacyApi: api }), false);
});

test('history Back from a genre uses the Academy context-preserving return', async () => {
  syncLegacyRoute('catalog');
  await whenLegacyRouterSettled();
  const state = { active: 'catalog', id: 'reggae-ska', tab: 'overview', search: 'ска' };
  const events = [];
  const api = {
    snapshot() { return {
      active: state.active,
      detail: state.active === 'detail' ? { id: state.id, tab: state.tab } : null,
      items: [{ id: 'catalog' }, { id: 'home' }]
    }; },
    navigate(id) { events.push(['navigate', id]); state.active = id; state.search = ''; },
    canRestoreGenre: (id, tab) => id === 'reggae-ska' && tab === 'overview',
    restoreGenre: (id, tab) => { state.active = 'detail'; state.id = id; state.tab = tab; return true; },
    returnToAcademy() { events.push(['academyBack']); state.active = 'catalog'; return true; }
  };
  api.restoreGenre('reggae-ska', 'overview');
  syncLegacyRoute('detail', { historyMode: 'push',
    context: { kind: 'genre', id: 'reggae-ska', tab: 'overview' } });
  await whenLegacyRouterSettled();
  assert.equal(await restoreLegacyMenuHistory('back', { legacyApi: api }), true);
  await whenLegacyRouterSettled();
  assert.equal(state.active, 'catalog');
  assert.equal(state.search, 'ска');
  assert.deepEqual(events, [['academyBack']]);
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});


test('passport detail memory history returns to filtered list and restores only an existing track', async () => {
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  let selected = null;
  let editing = false;
  let exists = true;
  let filter = 'publisher';
  const id = 'tr-1762680000000-abcde';
  const api = {
    snapshot: () => ({ active: 'tracks', track: selected ? { id: selected } : null,
      trackEditing: editing, items: [{ id: 'account' }] }),
    navigate: () => { throw new Error('Nested passport history must not call menu navigate'); },
    canRestoreTrackList: () => !editing,
    restoreTrackList: () => { if (editing) return false; selected = null; return true; },
    canRestoreTrack: candidate => !editing && exists && candidate === id,
    restoreTrack: candidate => {
      if (editing || !exists || candidate !== id) return false;
      selected = candidate; return true;
    }
  };
  syncLegacyRoute('tracks');
  await whenLegacyRouterSettled();
  selected = id;
  syncLegacyRoute('tracks', { historyMode: 'push', context: { kind: 'track', id } });
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/account/tracks/detail');
  assert.deepEqual(legacyRouterSnapshot().context, { kind: 'track', id });
  assert.equal(legacyRouterSnapshot().menuPushes >= 0, true);
  assert.equal(canRestoreLegacyMenuHistory('back', { legacyApi: api }), true);
  editing = true;
  assert.equal(canRestoreLegacyMenuHistory('back', { legacyApi: api }), false);
  editing = false;
  assert.equal(await restoreLegacyMenuHistory('back', { legacyApi: api }), true);
  await whenLegacyRouterSettled();
  assert.equal(selected, null);
  assert.equal(filter, 'publisher');
  assert.equal(legacyRouterSnapshot().path, '/account/tracks');
  exists = false;
  assert.equal(canRestoreLegacyMenuHistory('forward', { legacyApi: api }), false);
  exists = true;
  assert.equal(await restoreLegacyMenuHistory('forward', { legacyApi: api }), true);
  await whenLegacyRouterSettled();
  assert.equal(selected, id);
  assert.equal(legacyRouterSnapshot().path, '/account/tracks/detail');
  assert.equal(legacyRouterSnapshot().context.id, id);
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('Master history creates separate entries per song and refuses deleted records', async () => {
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  const first = 'production-first-152', second = 'production-second-152';
  const records = new Set([first, second]);
  let selected = first;
  let query = 'автор';
  const api = {
    snapshot: () => ({ active: 'producer', production: { id: selected },
      items: [{ id: 'producer' }] }),
    navigate: () => { throw new Error('Master history must use the guarded detail restorer'); },
    canRestoreProduction: id => records.has(id),
    restoreProduction: id => {
      if (!records.has(id)) return false;
      selected = id;
      return true;
    }
  };
  assert.equal(routeToMemoryPath('producer', { kind: 'production', id: first }),
    '/producer/detail/' + first);
  assert.equal(activeRouteFromMemoryPath('/producer/detail/' + first), 'producer');
  syncLegacyRoute('producer', { historyMode: 'push', context: { kind: 'production', id: first } });
  await whenLegacyRouterSettled();
  selected = second;
  syncLegacyRoute('producer', { historyMode: 'push', context: { kind: 'production', id: second } });
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/producer/detail/' + second);
  assert.deepEqual(legacyRouterSnapshot().context, { kind: 'production', id: second });
  assert.equal(canRestoreLegacyMenuHistory('back', { legacyApi: api }), true);
  assert.equal(await restoreLegacyMenuHistory('back', { legacyApi: api }), true);
  await whenLegacyRouterSettled();
  assert.equal(selected, first);
  assert.equal(legacyRouterSnapshot().path, '/producer/detail/' + first);
  assert.equal(canRestoreLegacyMenuHistory('forward', { legacyApi: api }), true);
  assert.equal(await restoreLegacyMenuHistory('forward', { legacyApi: api }), true);
  await whenLegacyRouterSettled();
  assert.equal(selected, second);
  assert.equal(query, 'автор');
  records.delete(first);
  assert.equal(canRestoreLegacyMenuHistory('back', { legacyApi: api }), false);
  assert.equal(routeToMemoryPath('producer', { kind: 'production', id: '../invalid' }), '/producer');
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('invalid passport context is not retained as a restorable memory entry', async () => {
  syncLegacyRoute('tracks');
  await whenLegacyRouterSettled();
  syncLegacyRoute('tracks', { historyMode: 'push',
    context: { kind: 'track', id: '../bad-id' } });
  await whenLegacyRouterSettled();
  assert.equal(legacyRouterSnapshot().path, '/account/tracks');
  assert.equal(legacyRouterSnapshot().context, null);
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('history revision updates after the ledger commits, not only on route changes', async () => {
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  const before = memoryHistoryRevision.value;
  syncLegacyRoute('tracks');
  await whenLegacyRouterSettled();
  syncLegacyRoute('tracks', { historyMode: 'push',
    context: { kind: 'track', id: 'tr-1762680000000-abcde' } });
  await whenLegacyRouterSettled();
  assert.ok(memoryHistoryRevision.value > before, 'Vue history controls must see committed entries');
  const afterPush = memoryHistoryRevision.value;
  syncLegacyRoute('tracks', { context: { kind: 'track', id: 'tr-1762680000000-other' } });
  await whenLegacyRouterSettled();
  assert.ok(memoryHistoryRevision.value > afterPush, 'same-path context changes must be reactive');
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('v0.161 Vue version history matches numeric major/minor, size tabs, and global search', () => {
  const rows = [
    ['0.161', 'Редактор истории версий', '2026-11-10', 'small'],
    ['0.160', 'Новый звук и плеер', '2026-11-10', 'large'],
    ['0.99', 'Поэзия', '2026-11-08', 'large'],
    ['1.0', 'Крупная версия 1', '2026-11-12', 'large']
  ];
  assert.deepEqual(groupMajorVersions(rows).map(group => group.major), ['0', '1']);
  assert.equal(groupMajorVersions(rows)[0].items.length, 3);
  assert.equal(formatReleaseDate(rows[0][2]), '10.11.2026');
  assert.equal(historyResults(rows, { tab: 'major' }).majors.length, 2);
  assert.equal(historyResults(rows, { tab: 'minor', size: 'all' }).entries.length, 4);
  assert.deepEqual(historyResults(rows, { tab: 'minor', size: 'small' }).entries.map(r => r[0]), ['0.161']);
  assert.equal(historyResults(rows, { tab: 'minor', size: 'large' }).entries.length, 3);
  const global = historyResults(rows, { tab: 'major', search: 'РЕДАКТОР' });
  assert.equal(global.mode, 'search');
  assert.deepEqual(global.small.map(r => r[0]), ['0.161']);
  assert.equal(global.count, 'Найдено: 1');
  assert.equal(historyResults(rows, { tab: 'minor', size: 'small', search: 'плеер' }).large.length, 1);
  assert.equal(historyResults(rows, { search: 'v1' }).majors.length, 1);
  assert.equal(historyResults(rows, { search: 'нет совпадений' }).count, 'Найдено: 0');
});

test('v0.163 genre-tree projections include entire Academy and cross-map search', () => {
  const genres = [
    { id: 'ska', name: 'Ска', family: 'Регги' },
    { id: 'ska-punk', name: 'Ска-панк', family: 'Рок' },
    { id: 'folk', name: 'Фолк', family: 'Фолк' }
  ];
  const trees = [
    { id: 'all', columns: [['ska'], ['ska-punk'], ['folk']] },
    { id: 'ska', columns: [['ska']] }
  ];
  assert.deepEqual(treeSearch(genres, trees, 'ска', 'ska').items.map(x => x.id), ['ska', 'ska-punk']);
  assert.equal(treeSearch(genres, trees, 'ПАНК', 'all').items[0].tree, 'all');
  assert.equal(treeSearch(genres, trees, 'none', 'all').count, 0);
  assert.equal(nextTreeZoom(1, 'zoom-in'), 1.15);
  assert.equal(nextTreeZoom(1, 'zoom-out'), 0.85);
  assert.equal(nextTreeZoom(1.5, 'zoom-in'), 1.5);
  assert.equal(nextTreeZoom(.75, 'zoom-out'), .75);
  assert.equal(nextTreeZoom(1.15, 'zoom-reset'), 1);
  const edges = [['ska','ska-punk','fusion'], ['folk','ska-punk','influence']];
  assert.equal(connectedTreeEdges({ id: 'all', edges }, 'ska').length, 1);
  assert.equal(connectedTreeEdges({ id: 'ska', edges }, 'ska').length, 2);
});

test('v0.164 dashboard shortcuts share the guarded Vue navigation dispatcher', () => {
  const called = [], synced = [];
  let active = 'home';
  const api = {
    snapshot: () => ({ active, items: [{ id: 'home' }] }),
    navigate: id => called.push('menu:' + id),
    navigateWorkspace: id => { called.push('workspace:' + id); active = id; }
  };
  const opts = {
    legacyApi: api,
    router: { resolve: path => ({ path }) },
    syncRoute: (route, options) => synced.push({ route, mode: options.historyMode, source: options.source })
  };
  for (const id of ['myideas', 'myprompts', 'events'])
    assert.equal(navigateFromVueShortcut(id, opts), true);
  for (const id of ['tracks', 'producer', '../myideas', '', null])
    assert.equal(navigateFromVueShortcut(id, opts), false);
  assert.deepEqual(called, ['workspace:myideas','workspace:myprompts','workspace:events']);
  assert.deepEqual(synced, ['myideas','myprompts','events'].map(route => ({
    route, mode: 'push', source: 'shortcut'
  })));
  assert.equal(navigateFromVueMenu('myideas', opts), false);
});

test('v0.164 dashboard shortcuts support guarded internal Back/Forward restoration', async () => {
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
  let active = 'home';
  const calls = [];
  const legacyApi = {
    snapshot: () => ({ active, items: [{ id: 'home' }, { id: 'account' }] }),
    navigate(id) { calls.push('menu:' + id); active = id; },
    navigateWorkspace(id) { calls.push('workspace:' + id); active = id; }
  };
  const before = legacyRouterSnapshot();
  assert.equal(navigateFromVueShortcut('myideas', { legacyApi, router: legacyMirrorRouter }), true);
  await whenLegacyRouterSettled();
  const after = legacyRouterSnapshot();
  assert.equal(after.path, '/account/myideas');
  assert.equal(after.menuPushes, before.menuPushes);
  assert.equal(after.shortcutPushes, before.shortcutPushes + 1);
  assert.equal(canRestoreLegacyMenuHistory('back', { legacyApi }), true);
  assert.equal(await restoreLegacyMenuHistory('back', { legacyApi }), true);
  await whenLegacyRouterSettled();
  assert.equal(active, 'home');
  assert.equal(canRestoreLegacyMenuHistory('forward', { legacyApi }), true);
  assert.equal(await restoreLegacyMenuHistory('forward', { legacyApi }), true);
  await whenLegacyRouterSettled();
  assert.equal(active, 'myideas');
  assert.deepEqual(calls, ['workspace:myideas','menu:home','workspace:myideas']);
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('v0.165 one Pinia UI store serves all Vue islands without storing user records', async () => {
  const pinia = createPinia();
  const sidebar = useLegacyUiStore(pinia);
  const mobile = useLegacyUiStore(pinia);
  const dashboard = useLegacyUiStore(pinia);
  assert.strictEqual(sidebar, mobile);
  assert.strictEqual(mobile, dashboard);
  assert.strictEqual(sidebar.route.route, currentRoute.value.route);
  const original = navigationSnapshot({
    active: 'home',
    items: [{ id: 'home', label: 'Главная' }, { id: 'account', label: 'Личный кабинет' }]
  });
  assert.equal(sidebar.publishNavigation(original), true);
  assert.equal(mobile.publishNavigation(original), false);
  assert.deepEqual(dashboard.navigationItems.map(item => item.id), ['home', 'account']);
  assert.equal(dashboard.publishDashboardStats({ideaCount: 3, promptCount: 2, eventCount: 4,
    lyrics: 'NEVER INCLUDE PERSONAL TEXT'}), true);
  assert.deepEqual({ ...mobile.dashboardStats }, {
    ideaCount: 3, promptCount: 2, eventCount: 4, revision: 1
  });
  assert.equal(mobile.dashboardStats.lyrics, undefined);
  assert.equal(sidebar.publishDashboardStats({ ideaCount: 3, promptCount: 2, eventCount: 4 }), false);
  assert.equal(mobile.publishDashboardStats({ ideaCount: 4, promptCount: -1, eventCount: 4 }), true);
  assert.deepEqual({ ...sidebar.dashboardStats }, {
    ideaCount: 4, promptCount: 0, eventCount: 4, revision: 2
  });
  syncLegacyRoute('myideas');
  await whenLegacyRouterSettled();
  assert.equal(sidebar.route.route, 'myideas');
  assert.equal(mobile.route.active, 'account');
  assert.equal(sidebar.route.revision, currentRoute.value.revision);
  syncLegacyRoute('home');
  await whenLegacyRouterSettled();
});

test('v0.166 Pinia appearance validates all nine legacy themes and system resolution', () => {
  const themeIds = ['dark','light','system','ocean','forest','sunset','amethyst','pink','pink-pastel'];
  const pageIds = ['home','catalog','ideas','studio','player','account'];
  const base = {
    settings: {theme:'dark',compact:false,largeText:false,reduceMotion:false,startPage:'home'},
    resolvedTheme:'dark', themes:themeIds.map(id=>({id,title:id})),
    pages:pageIds.map(id=>({id,title:id}))
  };
  const pinia=createPinia(), ui=useLegacyUiStore(pinia);
  assert.strictEqual(ui,useLegacyUiStore(pinia));
  const model=(theme,resolvedTheme=theme,edit={})=>({
    ...base,settings:{...base.settings,theme,...edit},resolvedTheme
  });
  for (const id of themeIds) {
    const snapshot=model(id,id==='system'?'dark':id);
    assert.equal(normalizeLegacyAppearance(snapshot)?.theme,id);
    assert.equal(ui.publishAppearance(snapshot),id!=='dark');
    assert.equal(ui.appearance.theme,id);
    assert.equal(ui.appearance.resolvedTheme,id==='system'?'dark':id);
    assert.equal(ui.publishAppearance(snapshot),false);
  }
  assert.equal(ui.publishAppearance(model('system','light',{
    compact:true,largeText:true,reduceMotion:true,startPage:'catalog'
  })),true);
  assert.deepEqual({
    theme:ui.appearance.theme,resolved:ui.appearance.resolvedTheme,
    compact:ui.appearance.compact,large:ui.appearance.largeText,
    reduce:ui.appearance.reduceMotion,start:ui.appearance.startPage
  },{theme:'system',resolved:'light',compact:true,large:true,reduce:true,start:'catalog'});
  assert.equal(ui.publishAppearance(model('system','dark',{
    compact:true,largeText:true,reduceMotion:true,startPage:'catalog'
  })),true);
  assert.equal(ui.publishAppearance(model('bogus')),false);
  assert.equal(ui.publishAppearance(model('pink','dark')),false);
  assert.equal(ui.publishAppearance(model('pink','pink',{startPage:'bogus'})),false);
  assert.equal(ui.publishAppearance({settings:{theme:'pink'}}),false);
  assert.equal(ui.appearance.theme,'system');
  assert.equal(ui.appearance.resolvedTheme,'dark');
  assert.equal(ui.appearance.name,undefined);
});

test('v0.167 Pinia shares Academy catalog, last genre and genealogy cursors, never content', () => {
  const pinia = createPinia();
  const catalog = useLegacyUiStore(pinia);
  const genre = useLegacyUiStore(pinia);
  const tree = useLegacyUiStore(pinia);
  assert.strictEqual(catalog,genre);
  assert.strictEqual(genre,tree);

  assert.deepEqual(normalizeAcademyCatalog({query:'ска',results:2,total:180,mode:'name'}),
    {query:'ска',results:2,total:180,mode:'name'});
  assert.equal(catalog.publishAcademyCatalog({query:'ска',results:2,total:180,mode:'name'}),true);
  assert.equal(genre.academyCatalog.query,'ска');
  assert.equal(tree.academyCatalog.results,2);
  assert.equal(catalog.publishAcademyCatalog({query:'ска',results:2,total:180,mode:'name'}),false);
  assert.equal(catalog.publishAcademyCatalog({query:'invalid',results:182,total:180,mode:'name'}),false);
  assert.equal(catalog.publishAcademyCatalog({query:'a'.repeat(161),results:1,total:5,mode:'artist'}),false);

  assert.deepEqual(normalizeAcademyFocus('reggae-ska','artists'),
    {genreId:'reggae-ska',tab:'artists'});
  assert.equal(genre.publishAcademyFocus('reggae-ska','overview'),true);
  assert.equal(genre.publishAcademyFocus('reggae-ska','artists'),true);
  assert.equal(catalog.academyFocus.genreId,'reggae-ska');
  assert.equal(catalog.academyFocus.tab,'artists');
  assert.equal(genre.publishAcademyFocus('reggae-ska','artists'),false);
  assert.equal(genre.publishAcademyFocus('bad/id','artists'),false);
  assert.equal(genre.publishAcademyFocus('reggae-ska','unknown'),false);

  assert.deepEqual(normalizeAcademyTree({tree:'all',selected:'reggae-ska',zoom:1.15,query:'ска'}),
    {tree:'all',selected:'reggae-ska',zoom:1.15,query:'ска'});
  assert.equal(tree.publishAcademyTree({tree:'all',selected:'reggae-ska',zoom:1.15,query:'ска'}),true);
  assert.equal(catalog.academyTree.zoom,1.15);
  assert.equal(genre.academyTree.selected,'reggae-ska');
  assert.equal(tree.publishAcademyTree({tree:'all',selected:'reggae-ska',zoom:1.15,query:'ска'}),false);
  assert.equal(tree.publishAcademyTree({tree:'all',selected:'reggae-ska',zoom:2,query:'ска'}),false);
  assert.equal(tree.publishAcademyTree({tree:'../home',selected:'reggae-ska',zoom:1,query:''}),false);
  assert.equal(catalog.academyCatalog.lyrics,undefined);
  assert.equal(genre.academyFocus.description,undefined);
  assert.equal(tree.academyTree.genreData,undefined);
});

test('v0.168 production tools share bounded numeric indicators without source text', () => {
  const pinia=createPinia();
  const studio=useLegacyUiStore(pinia), mixer=useLegacyUiStore(pinia), audit=useLegacyUiStore(pinia);
  assert.strictEqual(studio,mixer);
  assert.strictEqual(mixer,audit);
  const studioShot={
    settings:{genre:'reggae-ska',tempo:124,theme:'PERSONAL LYRICS',extra:'PRIVATE INSTRUCTIONS'},
    genre:{id:'reggae-ska',name:'Ska'},
    prompt:'A'.repeat(240)
  };
  assert.deepEqual(normalizeStudioSummary(studioShot),
    {ready:true,genreId:'reggae-ska',tempo:124,promptLength:240});
  assert.equal(studio.publishStudioSummary(studioShot),true);
  assert.equal(studio.publishStudioSummary(studioShot),false);
  assert.equal(mixer.studioSummary.genreId,'reggae-ska');
  assert.equal(mixer.studioSummary.promptLength,240);
  assert.equal(mixer.studioSummary.prompt,undefined);
  assert.equal(mixer.studioSummary.theme,undefined);
  assert.equal(studio.publishStudioSummary({...studioShot,settings:{genre:'../../attack',tempo:124}}),false);
  assert.equal(studio.publishStudioSummary({...studioShot,settings:{genre:'reggae-ska',tempo:300}}),false);
  assert.equal(studio.publishStudioSummary({...studioShot,prompt:'A'.repeat(1001)}),false);
  const mixShot={
    rows:[{id:'reggae-ska',weight:75,title:'SECRET'},{id:'afropop',weight:25}],
    tempo:119,prompt:'B'.repeat(412),
    saved:[{id:'secret',title:'PERSONAL FORMULA'}]
  };
  assert.deepEqual(normalizeMixerSummary(mixShot),{
    ready:true,genreCount:2,tempo:119,promptLength:412
  });
  assert.equal(mixer.publishMixerSummary(mixShot),true);
  assert.equal(audit.mixerSummary.genreCount,2);
  assert.equal(audit.mixerSummary.rows,undefined);
  assert.equal(audit.mixerSummary.saved,undefined);
  assert.equal(mixer.publishMixerSummary(mixShot),false);
  assert.equal(mixer.publishMixerSummary({...mixShot,rows:[
    {id:'reggae-ska',weight:80},{id:'afropop',weight:25}
  ]}),false);
  assert.equal(mixer.publishMixerSummary({...mixShot,rows:[
    {id:'reggae-ska',weight:50},{id:'reggae-ska',weight:50}
  ]}),false);
  assert.equal(mixer.publishMixerSummary({...mixShot,rows:[]}),false);
  const report={mode:'manual',manual:'TOP SECRET PROMPT',report:{
    score:67,length:91,issues:[{title:'PRIVATE ISSUE'}],status:'Внимание'
  }};
  assert.deepEqual(normalizeAuditorSummary(report),{
    ready:true,mode:'manual',score:67,checkedLength:91
  });
  assert.equal(audit.publishAuditorSummary(report),true);
  assert.equal(audit.publishAuditorSummary(report),false);
  assert.equal(studio.auditorSummary.mode,'manual');
  assert.equal(studio.auditorSummary.checkedLength,91);
  assert.equal(studio.auditorSummary.manual,undefined);
  assert.equal(audit.publishAuditorSummary({...report,report:{score:101,length:91}}),false);
  assert.equal(audit.publishAuditorSummary({...report,mode:'unsupported'}),false);
});

test('v0.169 arranger UI summary is shared, bounded and never stores draft content', () => {
  const pinia = createPinia();
  const a = useLegacyUiStore(pinia), b = useLegacyUiStore(pinia);
  assert.strictEqual(a,b);
  const snapshot = {blocks:[
    {id:'private-one', bars:8, energy:4, hasTransition:true,
      instruments:'PRIVATE INSTRUMENTS', customName:'PERSONAL SONG'},
    {id:'private-two', bars:12, energy:3, hasTransition:false, transitionHTML:'PRIVATE TAGS'}
  ], result:{text:'PRIVATE LYRICS'}, picker:{query:'SECRET SEARCH'}};
  const expected = {ready:true, blockCount:2, barCount:20, averageEnergy:3.5, transitionCount:1};
  assert.deepEqual(normalizeArrangerSummary(snapshot), expected);
  assert.equal(a.publishArrangerSummary(snapshot),true);
  assert.equal(b.publishArrangerSummary(snapshot),false);
  assert.deepEqual({...b.arrangerSummary}, {...expected,revision:1});
  assert.equal(b.arrangerSummary.blocks,undefined);
  assert.equal(b.arrangerSummary.instruments,undefined);
  assert.equal(b.arrangerSummary.text,undefined);
  assert.equal(b.publishArrangerSummary({...snapshot,blocks:[{bars:9,energy:3,hasTransition:false}]}),false);
  assert.equal(b.publishArrangerSummary({...snapshot,blocks:[{bars:8,energy:7,hasTransition:false}]}),false);
  assert.equal(b.publishArrangerSummary({...snapshot,blocks:new Array(65).fill(snapshot.blocks[0])}),false);
  assert.deepEqual(normalizeArrangerSummary({blocks:[]}),
    {ready:true,blockCount:0,barCount:0,averageEnergy:0,transitionCount:0});
  assert.equal(a.publishArrangerSummary({blocks:[]}),true);
  assert.equal(b.arrangerSummary.blockCount,0);
  assert.equal(b.arrangerSummary.revision,2);
});

test('v0.170 Player LAB UI projection updates one shared Pinia without audio metadata', () => {
  const pinia=createPinia(), a=useLegacyUiStore(pinia), b=useLegacyUiStore(pinia);
  assert.strictEqual(a,b);
  const s={count:2,currentIndex:1,playing:true,shuffle:true,repeat:'one',
    tracks:[{name:'PRIVATE TRACK',url:'blob:SECRET'}],title:'PRIVATE TITLE',artist:'SECRET'};
  const summary={ready:true,queueCount:2,selectedPosition:2,playing:true,shuffle:true,repeat:'one'};
  assert.deepEqual(normalizePlayerLabSummary(s),summary);
  assert.equal(a.publishPlayerLabSummary(s),true);
  assert.equal(b.publishPlayerLabSummary(s),false);
  assert.deepEqual({...b.playerLabSummary},{...summary,revision:1});
  for(const key of ['tracks','title','artist','url','audio']) assert.equal(b.playerLabSummary[key],undefined);
  assert.equal(a.publishPlayerLabSummary({...s,count:0}),false);
  assert.equal(a.publishPlayerLabSummary({...s,currentIndex:3}),false);
  assert.equal(a.publishPlayerLabSummary({...s,repeat:'random'}),false);
  assert.equal(a.publishPlayerLabSummary({...s,playing:'yes'}),false);
  assert.deepEqual(normalizePlayerLabSummary({count:0,currentIndex:-1,playing:false,shuffle:false,repeat:'off'}),
    {ready:true,queueCount:0,selectedPosition:0,playing:false,shuffle:false,repeat:'off'});
});

test('v0.170 A/B UI projection excludes filenames, private reviews and audio buffers', () => {
  const pinia=createPinia(), a=useLegacyUiStore(pinia), b=useLegacyUiStore(pinia);
  const s={mode:'compare',active:'B',playing:true,loop:true,hasBoth:true,
    files:{A:{ready:true,name:'PRIVATE A'},B:{ready:true,url:'blob:SECRET'}},
    notes:{A:'SECRET NOTE'},scores:{A:{vocal:5}}};
  const summary={ready:true,mode:'compare',active:'B',readyCount:2,hasBoth:true,playing:true,loop:true};
  assert.deepEqual(normalizePlayerAbSummary(s),summary);
  assert.equal(a.publishPlayerAbSummary(s),true);
  assert.equal(b.publishPlayerAbSummary(s),false);
  assert.deepEqual({...b.playerAbSummary},{...summary,revision:1});
  for(const key of ['files','notes','scores','url','name']) assert.equal(b.playerAbSummary[key],undefined);
  assert.equal(a.publishPlayerAbSummary({...s,mode:'bad'}),false);
  assert.equal(a.publishPlayerAbSummary({...s,active:'C'}),false);
  assert.equal(a.publishPlayerAbSummary({...s,hasBoth:false}),false);
  assert.equal(a.publishPlayerAbSummary({...s,files:{A:{ready:true},B:{ready:false}}}),false);
  assert.equal(a.publishPlayerAbSummary({...s,playing:false,loop:false,hasBoth:false,
    files:{A:{ready:true},B:{ready:false}}}),true);
  assert.equal(b.playerAbSummary.readyCount,1);
  assert.equal(b.playerAbSummary.revision,2);
});

test('v0.171 Master list exposes only aggregate progress through one Pinia store', () => {
  const pinia=createPinia(), master=useLegacyUiStore(pinia), passport=useLegacyUiStore(pinia);
  assert.strictEqual(master,passport);
  const data={query:'PRIVATE SEARCH',selectedId:'a',hasRecords:true,records:[
    {id:'a',title:'PRIVATE SONG',artist:'SECRET',notes:'UNPUBLISHED',done:6,total:6,percent:100,searchText:'PERSONAL'},
    {id:'b',title:'ANOTHER SONG',done:2,total:6,percent:33}
  ]};
  const expected={ready:true,workCount:2,finishedCount:1,hasSelection:true};
  assert.deepEqual(normalizeMasterListSummary(data),expected);
  assert.equal(master.publishMasterListSummary(data),true);
  assert.equal(passport.publishMasterListSummary(data),false);
  assert.deepEqual({...passport.masterListSummary},{...expected,revision:1});
  for(const key of ['records','title','artist','notes','selectedId','query','searchText'])
    assert.equal(passport.masterListSummary[key],undefined);
  assert.equal(master.publishMasterListSummary({...data,hasRecords:false}),false);
  assert.equal(master.publishMasterListSummary({...data,records:[{done:7,total:6,percent:117}]}),false);
  assert.equal(master.publishMasterListSummary({...data,records:[{done:1,total:6,percent:50}]}),false);
  assert.equal(master.publishMasterListSummary({hasRecords:false,records:[]}),true);
  assert.equal(passport.masterListSummary.workCount,0);
  assert.equal(passport.masterListSummary.hasSelection,false);
});

test('v0.171 passport filter summary updates safely without copying track records', () => {
  const pinia=createPinia(), master=useLegacyUiStore(pinia), passport=useLegacyUiStore(pinia);
  const all={active:'all',hasRecords:true,filters:[{key:'all',label:'Все'}],
    records:[{id:'p1',title:'PRIVATE',artist:'SECRET',statusLabel:'У издательства'}]};
  const expected={ready:true,visibleCount:1,hasRecords:true,filter:'all'};
  assert.deepEqual(normalizePassportListSummary(all),expected);
  assert.equal(passport.publishPassportListSummary(all),true);
  assert.equal(master.publishPassportListSummary(all),false);
  assert.deepEqual({...master.passportListSummary},{...expected,revision:1});
  for(const key of ['records','title','artist','id','filters'])
    assert.equal(master.passportListSummary[key],undefined);
  assert.equal(passport.publishPassportListSummary({...all,active:'unsafe'}),false);
  assert.equal(passport.publishPassportListSummary({...all,hasRecords:false}),false);
  assert.equal(passport.publishPassportListSummary({active:'released',hasRecords:true,records:[]}),true);
  assert.equal(master.passportListSummary.visibleCount,0);
  assert.equal(master.passportListSummary.filter,'released');
  assert.equal(master.passportListSummary.revision,2);
});

test('v0.172 Master detail shares verified progress only, not lyrics, IDs or links', () => {
  const pinia=createPinia(), a=useLegacyUiStore(pinia), b=useLegacyUiStore(pinia);
  const stages=['done','working','todo','todo','todo','todo'].map((status,i)=>({
    key:'PRIVATE STAGE '+i,status,hasMaterial:i<2,desc:'PRIVATE NOTES'
  }));
  const links=Array.from({length:6},(_,i)=>({
    field:'PRIVATE FIELD',value:i===0?'SECRET ID':'',available:i===0,options:['PRIVATE OPTIONS']
  }));
  const snapshot={id:'PERSONAL ID',title:'PRIVATE TITLE',artist:'PRIVATE ARTIST',
    notes:'PRIVATE NOTES',done:1,total:6,percent:17,
    stages,links,arrangement:{count:3,blocks:[{lyrics:'SECRET'}]},
    history:[{text:'SECRET HISTORY'}]};
  const summary={ready:true,done:1,total:6,percent:17,
    materialCount:2,linkedCount:1,arrangementBlocks:3,historyCount:1};
  assert.deepEqual(normalizeMasterDetailSummary(snapshot),summary);
  assert.equal(a.publishMasterDetailSummary(snapshot),true);
  assert.equal(b.publishMasterDetailSummary(snapshot),false);
  assert.deepEqual({...b.masterDetailSummary},{...summary,revision:1});
  for(const k of ['id','title','artist','notes','stages','links','arrangement','history'])
    assert.equal(b.masterDetailSummary[k],undefined);
  assert.equal(a.publishMasterDetailSummary({...snapshot,percent:18}),false);
  assert.equal(a.publishMasterDetailSummary({...snapshot,done:2}),false);
  assert.equal(a.publishMasterDetailSummary({...snapshot,links:[...links,{value:'',available:false}]}),false);
  assert.equal(a.publishMasterDetailSummary({...snapshot,history:new Array(81).fill({text:'private'})}),false);
  assert.equal(a.publishMasterDetailSummary({...snapshot,stages:stages.map((s,i)=>({...s,status:i<2?'done':'todo'})),
    done:2,percent:33}),true);
  assert.equal(b.masterDetailSummary.done,2);
  assert.equal(b.masterDetailSummary.revision,2);
});

test('v0.172 passport detail shares safe version/link indicators across Vue islands', () => {
  const pinia=createPinia(), master=useLegacyUiStore(pinia), passport=useLegacyUiStore(pinia);
  const snapshot={id:'PRIVATE ID',title:'PRIVATE TITLE',artist:'PERSONAL ARTIST',
    audio:'https://secret.example/audio.wav',cover:'',facts:new Array(6).fill({value:'PRIVATE FACT'}),
    links:[{exists:true,id:'SECRET ID',title:'PRIVATE'}, {exists:false},{exists:false}],
    sections:[{label:'Текст',text:'PRIVATE LYRICS'}],
    versions:[{id:'SECRET',label:'PRIVATE VERSION',url:'https://secret.example/version.wav'}]};
  const summary={ready:true,versionCount:1,linkedCount:1,sectionCount:1,hasAudio:true,hasCover:false};
  assert.deepEqual(normalizePassportDetailSummary(snapshot),summary);
  assert.equal(passport.publishPassportDetailSummary(snapshot),true);
  assert.equal(master.publishPassportDetailSummary(snapshot),false);
  assert.deepEqual({...master.passportDetailSummary},{...summary,revision:1});
  for(const k of ['id','title','artist','audio','cover','facts','links','sections','versions'])
    assert.equal(master.passportDetailSummary[k],undefined);
  assert.equal(passport.publishPassportDetailSummary({...snapshot,links:[{exists:true}]}),false);
  assert.equal(passport.publishPassportDetailSummary({...snapshot,audio:42}),false);
  assert.equal(passport.publishPassportDetailSummary({...snapshot,sections:new Array(5).fill(snapshot.sections[0])}),false);
  assert.equal(passport.publishPassportDetailSummary({...snapshot,versions:[]}),true);
  assert.equal(master.passportDetailSummary.versionCount,0);
  assert.equal(master.passportDetailSummary.revision,2);
});

test('v0.173 My Songs collection shares counts only with strict validation', () => {
  const pinia=createPinia(), a=useLegacyUiStore(pinia), b=useLegacyUiStore(pinia);
  const data={total:3,query:'PRIVATE QUERY',items:[
    {id:'secret-a',title:'PERSONAL SONG',coverUrl:'https://private/cover',hasCover:true},
    {id:'secret-b',artist:'PRIVATE NAME',hasCover:false}
  ]};
  const expected={ready:true,totalCount:3,visibleCount:2,localCoverCount:1};
  assert.deepEqual(normalizeSongCollectionSummary(data),expected);
  assert.equal(a.publishSongCollectionSummary(data),true);
  assert.equal(b.publishSongCollectionSummary(data),false);
  assert.deepEqual({...b.songCollectionSummary},{...expected,revision:1});
  for(const key of ['items','query','title','artist','id','coverUrl'])
    assert.equal(b.songCollectionSummary[key],undefined);
  assert.equal(a.publishSongCollectionSummary({...data,total:1}),false);
  assert.equal(a.publishSongCollectionSummary({...data,items:[{hasCover:'yes'}]}),false);
  assert.equal(a.publishSongCollectionSummary({...data,total:10001}),false);
  assert.equal(a.publishSongCollectionSummary({...data,items:[]}),true);
  assert.equal(b.songCollectionSummary.visibleCount,0);
  assert.equal(b.songCollectionSummary.revision,2);
});
test('v0.173 My Songs detail shares take status without private metadata or audio', () => {
  const pinia=createPinia(), a=useLegacyUiStore(pinia), b=useLegacyUiStore(pinia);
  const data={id:'secret',title:'PRIVATE TITLE',description:'PRIVATE LYRICS',
    hasAudio:true,hasCover:true,hasPlayableAudio:true,compareOpen:true,
    listenUrl:'https://private/audio.wav',versions:[
      {id:'secret-a',fileName:'private.wav',notes:'PRIVATE NOTE',isMain:true,isPlaying:false},
      {id:'secret-b',fileName:'private.mp3',notes:'PRIVATE NOTE',isMain:false,isPlaying:true}
    ]};
  const expected={ready:true,versionCount:2,hasPrimary:true,hasLocalAudio:true,
    canPlay:true,hasCover:true,comparisonAvailable:true,comparisonOpen:true};
  assert.deepEqual(normalizeSongDetailSummary(data),expected);
  assert.equal(a.publishSongDetailSummary(data),true);
  assert.equal(b.publishSongDetailSummary(data),false);
  assert.deepEqual({...b.songDetailSummary},{...expected,revision:1});
  for(const key of ['id','title','description','versions','fileName','notes','listenUrl'])
    assert.equal(b.songDetailSummary[key],undefined);
  assert.equal(a.publishSongDetailSummary({...data,compareOpen:'yes'}),false);
  assert.equal(a.publishSongDetailSummary({...data,versions:[data.versions[0]]}),false);
  assert.equal(a.publishSongDetailSummary({...data,versions:new Array(1001).fill(data.versions[0])}),false);
  assert.equal(a.publishSongDetailSummary({...data,versions:[],compareOpen:false,hasAudio:false,hasCover:false,hasPlayableAudio:false}),true);
  assert.equal(b.songDetailSummary.versionCount,0);
  assert.equal(b.songDetailSummary.comparisonAvailable,false);
  assert.equal(b.songDetailSummary.revision,2);
});

test('v0.174 custom artist counts are validated and content-free', () => {
  const a=useLegacyUiStore(createPinia());
  const data={artists:[{id:'private1',name:'SECRET ONE'},{id:'private2',name:'SECRET TWO'}],
    filter:'PRIVATE QUERY',dnaCount:1};
  const expected={ready:true,artistCount:2,visibleCount:1,dnaCount:1};
  assert.deepEqual(normalizeArtistManagerSummary(data,1),expected);
  assert.equal(a.publishArtistManagerSummary(data,1),true);
  assert.equal(a.publishArtistManagerSummary(data,1),false);
  assert.deepEqual({...a.artistManagerSummary},{...expected,revision:1});
  for(const k of ['artists','filter','id','name'])assert.equal(a.artistManagerSummary[k],undefined);
  assert.equal(a.publishArtistManagerSummary(data,3),false);
  assert.equal(a.publishArtistManagerSummary({...data,dnaCount:-1},1),false);
  assert.equal(a.publishArtistManagerSummary({...data,artists:'broken'},1),false);
  assert.equal(a.publishArtistManagerSummary(data,0),true);
  assert.equal(a.artistManagerSummary.visibleCount,0);
  assert.equal(a.artistManagerSummary.revision,2);
});

test('v0.174 DNA summary never shares names, style text or related record IDs', () => {
  const a=useLegacyUiStore(createPinia());
  const data={profiles:[{id:'secret',name:'PRIVATE',portrait:'https://private'}],
    detail:{id:'secret',name:'PRIVATE',style:'PRIVATE STYLE',
      related:[{id:'PRIVATE',title:'PRIVATE TRACK'}],forbids:['PRIVATE RULE'],
      facts:[{label:'PRIVATE',value:'PRIVATE'}],
      textFields:[{label:'PRIVATE',value:'PRIVATE TEXT'}]}};
  const expected={ready:true,profileCount:1,detailOpen:true,linkedTrackCount:1,
    restrictionsCount:1,factCount:1,sectionCount:1};
  assert.deepEqual(normalizeArtistDnaSummary(data),expected);
  assert.equal(a.publishArtistDnaSummary(data),true);
  assert.equal(a.publishArtistDnaSummary(data),false);
  assert.deepEqual({...a.artistDnaSummary},{...expected,revision:1});
  for(const k of ['profiles','detail','id','name','style','related','portrait','textFields'])
    assert.equal(a.artistDnaSummary[k],undefined);
  assert.equal(a.publishArtistDnaSummary({...data,profiles:'broken'}),false);
  assert.equal(a.publishArtistDnaSummary({...data,detail:{...data.detail,related:'broken'}}),false);
  assert.equal(a.publishArtistDnaSummary({...data,detail:{...data.detail,forbids:new Array(33).fill('private')}}),false);
  assert.equal(a.publishArtistDnaSummary({...data,detail:null}),true);
  assert.equal(a.artistDnaSummary.detailOpen,false);
  assert.equal(a.artistDnaSummary.linkedTrackCount,0);
  assert.equal(a.artistDnaSummary.revision,2);
});

test('v0.175 shared library snapshot contains five counts and no saved writing', () => {
  const pinia=createPinia(), a=useLegacyUiStore(pinia), b=useLegacyUiStore(pinia);
  assert.strictEqual(a,b);
  const snapshot={backLabel:'PRIVATE BACK BUTTON',
    genres:[{id:'SECRET GENRE',name:'PRIVATE'}],
    ideas:[{key:'SECRET IDEA',title:'PRIVATE TITLE',pitch:'PRIVATE PITCH'}],
    own:[{id:'SECRET OWN',title:'PRIVATE WRITING',lyrics:'SECRET LYRICS'}],
    generated:[{id:'SECRET GENERATED',hook:'SECRET HOOK'}],
    prompts:[{id:'SECRET PROMPT',text:'PRIVATE STYLE'}]};
  const expected={ready:true,genreCount:1,academyIdeaCount:1,ownIdeaCount:1,
    generatedIdeaCount:1,promptCount:1,totalIdeaCount:3};
  assert.deepEqual(normalizeLibrarySummary(snapshot),expected);
  assert.equal(a.publishLibrarySummary(snapshot),true);
  assert.equal(b.publishLibrarySummary(snapshot),false);
  assert.deepEqual({...b.librarySummary},{...expected,revision:1});
  for(const key of ['genres','ideas','own','generated','prompts','title','lyrics','text','pitch','id','backLabel'])
    assert.equal(b.librarySummary[key],undefined);
  assert.equal(JSON.stringify(b.librarySummary).includes('SECRET'),false);
  assert.equal(a.publishLibrarySummary({...snapshot,genres:undefined}),false);
  assert.equal(a.publishLibrarySummary({...snapshot,own:[null]}),false);
  assert.equal(a.publishLibrarySummary({...snapshot,prompts:'bad'}),false);
  assert.equal(a.publishLibrarySummary({...snapshot,generated:new Array(10001).fill({title:'SECRET'})}),false);
  assert.equal(b.librarySummary.revision,1);
  assert.equal(a.publishLibrarySummary({...snapshot,ideas:[],generated:[],prompts:[]}),true);
  assert.equal(b.librarySummary.totalIdeaCount,1);
  assert.equal(b.librarySummary.promptCount,0);
  assert.equal(b.librarySummary.revision,2);
  assert.equal(Object.isFrozen(b.librarySummary),true);
});


test('v0.176 idea editor publishes bounded counts only', () => {
  const a=useLegacyUiStore(createPinia());
  const v={title:'PRIVATE TITLE',genre:'SECRET GENRE',text:'SECRET SONG PLOT',hook:'PRIVATE HOOK',lyrics:'SECRET LYRICS'};
  const expected={ready:true,titleLength:13,ideaLength:16,hookLength:12,
    hasTitle:true,hasGenre:true,hasIdea:true,hasHook:true};
  assert.deepEqual(normalizeIdeaDraftSummary(v),expected);
  assert.equal(a.publishIdeaDraftSummary(v),true);
  assert.equal(a.publishIdeaDraftSummary(v),false);
  assert.deepEqual({...a.ideaDraftSummary},{...expected,revision:1});
  for(const k of ['title','genre','text','hook','lyrics'])assert.equal(a.ideaDraftSummary[k],undefined);
  assert.equal(a.publishIdeaDraftSummary({...v,text:'x'.repeat(3001)}),false);
  assert.equal(a.publishIdeaDraftSummary({...v,title:'x'.repeat(101)}),false);
  assert.equal(a.publishIdeaDraftSummary({...v,hook:null}),false);
  assert.equal(a.publishIdeaDraftSummary({...v,title:' ',hook:''}),true);
  assert.equal(a.ideaDraftSummary.hasTitle,false);
  assert.equal(a.ideaDraftSummary.hasHook,false);
  assert.equal(a.ideaDraftSummary.revision,2);
});
test('v0.176 prompt editor publishes bounded length and mode only', () => {
  const a=useLegacyUiStore(createPinia());
  const v={title:'My PRIVATE prompt',genre:'SECRET GENRE',text:'secret vocals',notes:'SECRET NOTES'};
  const expected={ready:true,editing:false,titleLength:17,textLength:13,hasTitle:true,hasGenre:true,hasPrompt:true};
  assert.deepEqual(normalizePromptDraftSummary(v,false),expected);
  assert.equal(a.publishPromptDraftSummary(v,false),true);
  assert.equal(a.publishPromptDraftSummary(v,false),false);
  assert.deepEqual({...a.promptDraftSummary},{...expected,revision:1});
  for(const k of ['title','genre','text','notes'])assert.equal(a.promptDraftSummary[k],undefined);
  assert.equal(a.publishPromptDraftSummary({...v,text:'x'.repeat(1001)},false),false);
  assert.equal(a.publishPromptDraftSummary({...v,title:null},false),false);
  assert.equal(a.publishPromptDraftSummary(v,'yes'),false);
  assert.equal(a.publishPromptDraftSummary({...v,text:'   '},true),true);
  assert.equal(a.promptDraftSummary.editing,true);
  assert.equal(a.promptDraftSummary.hasPrompt,false);
  assert.equal(a.promptDraftSummary.revision,2);
});

test('v0.177 poetry source counts words and nonempty lines without keeping lyrics', () => {
  const p=createPinia(), a=useLegacyUiStore(p), b=useLegacyUiStore(p);
  const original='Куплет 1:\r\nЯ вижу замок\n\nПрипев:\nТы рядом';
  const expected={ready:true,charCount:original.length,lineCount:4,wordCount:8,hasText:true};
  assert.deepEqual(normalizePoetrySourceSummary(original),expected);
  assert.equal(a.publishPoetrySourceSummary(original),true);
  assert.equal(b.publishPoetrySourceSummary(original),false);
  assert.deepEqual({...b.poetrySourceSummary},{...expected,revision:1});
  for(const key of ['text','lyrics','source','lines','title','genre','id','accentedWords'])
    assert.equal(b.poetrySourceSummary[key],undefined);
  assert.equal(JSON.stringify(b.poetrySourceSummary).includes('замок'),false);
  assert.equal(a.publishPoetrySourceSummary(null),false);
  assert.equal(a.publishPoetrySourceSummary('x'.repeat(20001)),false);
  assert.equal(a.publishPoetrySourceSummary('  \n \n'),true);
  assert.equal(b.poetrySourceSummary.charCount,5);
  assert.equal(b.poetrySourceSummary.lineCount,0);
  assert.equal(b.poetrySourceSummary.wordCount,0);
  assert.equal(b.poetrySourceSummary.hasText,false);
  assert.equal(b.poetrySourceSummary.revision,2);
  assert.equal(normalizePoetrySourceSummary('за\u0301мок').wordCount,1);
  assert.equal(Object.isFrozen(b.poetrySourceSummary),true);
});

test('v0.178 poetry analysis publishes only bounded counts and clears stale results', () => {
  const pinia=createPinia(), a=useLegacyUiStore(pinia), b=useLegacyUiStore(pinia);
  const report={
    analyzed:true, rowCount:4, markedStress:2,
    stanzas:[{id:'SECRET STANZA',section:'PRIVATE CHORUS'}],
    lines:[{text:'SECRET LYRICS',syllables:9}], frequent:[{word:'SECRET WORD'}],
    suggestions:['SECRET SUGGESTION'], stats:[{value:4,label:'строк'}]
  };
  const expected={ready:true,analyzed:true,rowCount:4,previewStanzaCount:1,
    stressMarkCount:2,suggestionCount:1};
  assert.deepEqual(normalizePoetryAnalysisSummary(report),expected);
  assert.equal(a.publishPoetryAnalysisSummary(report),true);
  assert.equal(b.publishPoetryAnalysisSummary(report),false);
  assert.deepEqual({...b.poetryAnalysisSummary},{...expected,revision:1});
  for (const key of ['lines','stanzas','suggestions','stats','frequent','text','word','section','id'])
    assert.equal(b.poetryAnalysisSummary[key],undefined);
  assert.equal(JSON.stringify(b.poetryAnalysisSummary).includes('SECRET'),false);
  assert.equal(a.publishPoetryAnalysisSummary(null),false);
  assert.equal(a.publishPoetryAnalysisSummary({...report,rowCount:20001}),false);
  assert.equal(a.publishPoetryAnalysisSummary({...report,markedStress:-1}),false);
  assert.equal(a.publishPoetryAnalysisSummary({...report,stanzas:new Array(19).fill({})}),false);
  assert.equal(a.publishPoetryAnalysisSummary({...report,suggestions:[null]}),false);
  assert.equal(b.poetryAnalysisSummary.revision,1);
  assert.equal(a.publishPoetryAnalysisSummary({analyzed:false,message:'PRIVATE LYRICS'}),true);
  assert.deepEqual({...b.poetryAnalysisSummary},{
    ready:true,analyzed:false,rowCount:0,previewStanzaCount:0,
    stressMarkCount:0,suggestionCount:0,revision:2
  });
  assert.equal(a.publishPoetryAnalysisSummary({analyzed:false,message:'OTHER PRIVATE LYRICS'}),false);
  assert.equal(Object.isFrozen(b.poetryAnalysisSummary),true);
});

test('v0.179 ambiguity preview publishes counts only and clears on dismissal', () => {
  const pinia=createPinia(), a=useLegacyUiStore(pinia), b=useLegacyUiStore(pinia);
  const draft={
    count:3, total:2,
    words:[
      {key:'PRIVATE HOMOGRAPH',count:2,variants:['SECRET ACCENT A','SECRET ACCENT B']},
      {key:'ANOTHER PRIVATE WORD',count:1,variants:['SECRET VARIANT']}
    ]
  };
  const expected={ready:true,occurrenceCount:3,distinctCount:2,visibleCount:2};
  assert.deepEqual(normalizePoetryAmbiguitySummary(draft),expected);
  assert.equal(a.publishPoetryAmbiguitySummary(draft),true);
  assert.equal(b.publishPoetryAmbiguitySummary(draft),false);
  assert.deepEqual({...b.poetryAmbiguitySummary},{...expected,revision:1});
  for(const key of ['words','variants','key','source','text','lyrics','accent','id'])
    assert.equal(b.poetryAmbiguitySummary[key],undefined);
  assert.equal(JSON.stringify(b.poetryAmbiguitySummary).includes('PRIVATE'),false);
  assert.equal(a.publishPoetryAmbiguitySummary(null),false);
  assert.equal(a.publishPoetryAmbiguitySummary({...draft,count:-1}),false);
  assert.equal(a.publishPoetryAmbiguitySummary({...draft,count:20001}),false);
  assert.equal(a.publishPoetryAmbiguitySummary({...draft,total:4}),false);
  assert.equal(a.publishPoetryAmbiguitySummary({...draft,words:draft.words.slice(0,1)}),false);
  assert.equal(a.publishPoetryAmbiguitySummary({...draft,words:[null,draft.words[1]]}),false);
  assert.equal(a.publishPoetryAmbiguitySummary({...draft,words:[{...draft.words[0],count:5},draft.words[1]]}),false);
  assert.equal(b.poetryAmbiguitySummary.revision,1);
  assert.equal(a.publishPoetryAmbiguitySummary({
    count:1,total:1,words:[{key:'SECRET WORD',count:1,variants:[]}]
  }),true);
  assert.equal(b.poetryAmbiguitySummary.occurrenceCount,1);
  assert.equal(a.publishPoetryAmbiguitySummary({count:0,total:0,words:[]}),true);
  assert.equal(b.poetryAmbiguitySummary.occurrenceCount,0);
  assert.equal(b.poetryAmbiguitySummary.distinctCount,0);
  assert.equal(a.clearPoetryAmbiguitySummary(),true);
  assert.equal(b.poetryAmbiguitySummary.ready,false);
  assert.equal(b.poetryAmbiguitySummary.occurrenceCount,0);
  assert.equal(a.clearPoetryAmbiguitySummary(),false);
  assert.equal(b.poetryAmbiguitySummary.revision,4);
  assert.equal(Object.isFrozen(b.poetryAmbiguitySummary),true);
});

test('v0.180 performance tags share only valid settings and preview counts', () => {
  const pinia=createPinia(), a=useLegacyUiStore(pinia), b=useLegacyUiStore(pinia);
  const settings={mode:'smart',source:'auto',density:'balanced',intensity:3,
    melisma:true,falsetto:true,harmonies:true,noWhisper:true,noRasp:true,
    artistId:'PRIVATE ARTIST'};
  const snapshot={prefs:settings,busy:false,draft:null,
    freshness:{previewFresh:false,sourceChanged:false,targetChanged:false,settingsChanged:false},
    notice:{text:'PRIVATE NOTICE'},previewState:'PRIVATE LYRICS',
    artists:[{id:'PRIVATE ARTIST',name:'PRIVATE NAME'}]};
  const expected={ready:true,mode:'smart',source:'auto',density:'balanced',
    intensity:3,enabledTechniques:3,vocalRestrictions:2,
    busy:false,previewOpen:false,sectionCount:0,
    previewFresh:false,sourceChanged:false,targetChanged:false,settingsChanged:false};
  assert.deepEqual(normalizePerformanceTagsSummary(snapshot),expected);
  assert.equal(a.publishPerformanceTagsSummary(snapshot),true);
  assert.strictEqual(a,b);
  assert.equal(b.publishPerformanceTagsSummary(snapshot),false);
  assert.deepEqual({...a.performanceTagsSummary},{...expected,revision:1});
  for(const key of ['prefs','lyrics','tags','preview','draft','sections','artist','artistId',
    'sourceText','notice','artists','modeHint','previewState'])
    assert.equal(a.performanceTagsSummary[key],undefined);
  assert.equal(JSON.stringify(a.performanceTagsSummary).includes('PRIVATE'),false);
  assert.equal(a.publishPerformanceTagsSummary(null),false);
  assert.equal(a.publishPerformanceTagsSummary({...snapshot,prefs:{...settings,mode:'unknown'}}),false);
  assert.equal(a.publishPerformanceTagsSummary({...snapshot,prefs:{...settings,source:'private'}}),false);
  assert.equal(a.publishPerformanceTagsSummary({...snapshot,prefs:{...settings,intensity:6}}),false);
  assert.equal(a.publishPerformanceTagsSummary({...snapshot,prefs:{...settings,noWhisper:'yes'}}),false);
  assert.equal(a.publishPerformanceTagsSummary({...snapshot,busy:'false'}),false);
  assert.equal(a.publishPerformanceTagsSummary({...snapshot,draft:{sections:new Array(20001).fill({})}}),false);
  assert.equal(a.performanceTagsSummary.revision,1);
  const preview={...snapshot,freshness:{...snapshot.freshness,previewFresh:true},prefs:{...settings,mode:'rules',source:'original',density:'detailed',intensity:4,
    melisma:false},draft:{sections:[{id:'SECRET 1',label:'PRIVATE CHORUS',body:'PRIVATE WORDS'},
    {id:'SECRET 2',label:'PRIVATE BRIDGE'}],tags:['SECRET CUE'],preview:'PRIVATE LYRICS'}};
  assert.equal(b.publishPerformanceTagsSummary(preview),true);
  assert.equal(a.performanceTagsSummary.mode,'rules');
  assert.equal(a.performanceTagsSummary.sectionCount,2);
  assert.equal(a.performanceTagsSummary.enabledTechniques,2);
  assert.equal(a.performanceTagsSummary.previewOpen,true);
  assert.equal(a.performanceTagsSummary.revision,2);
  assert.equal(JSON.stringify(a.performanceTagsSummary).includes('SECRET'),false);
  assert.equal(a.clearPerformanceTagsSummary(),true);
  assert.equal(a.performanceTagsSummary.ready,false);
  assert.equal(a.performanceTagsSummary.sectionCount,0);
  assert.equal(a.performanceTagsSummary.previewOpen,false);
  assert.equal(b.clearPerformanceTagsSummary(),false);
  assert.equal(a.performanceTagsSummary.revision,3);
  assert.equal(Object.isFrozen(a.performanceTagsSummary),true);
});

test('v0.181 freshness rejects missing, contradictory and non-boolean flags without exposing draft data', () => {
  const ui=useLegacyUiStore(createPinia());
  const snapshot={prefs:{mode:'rules',source:'original',density:'balanced',intensity:3,
    melisma:true,falsetto:true,harmonies:true,noWhisper:true,noRasp:true},busy:false,
    draft:{sections:[{label:'PRIVATE'}],preview:'PRIVATE LYRICS'},
    freshness:{previewFresh:true,sourceChanged:false,targetChanged:false,settingsChanged:false,
      source:'PRIVATE SOURCE',targetSnapshot:'PRIVATE TARGET',settingsSnapshot:'PRIVATE ARTIST'}};
  assert.equal(ui.publishPerformanceTagsSummary(snapshot),true);
  assert.equal(ui.publishPerformanceTagsSummary(snapshot),false);
  assert.equal(ui.performanceTagsSummary.revision,1);
  assert.equal(JSON.stringify(ui.performanceTagsSummary).includes('PRIVATE'),false);
  for (const key of ['sourceChanged','targetChanged','settingsChanged']) {
    const stale={...snapshot,freshness:{...snapshot.freshness,previewFresh:false,[key]:true}};
    assert.equal(ui.publishPerformanceTagsSummary(stale),true);
    assert.equal(ui.performanceTagsSummary[key],true);
    assert.equal(ui.performanceTagsSummary.previewFresh,false);
    assert.equal(ui.publishPerformanceTagsSummary(stale),false);
    assert.equal(ui.publishPerformanceTagsSummary(snapshot),true);
    assert.equal(ui.performanceTagsSummary.previewFresh,true);
  }
  const revision=ui.performanceTagsSummary.revision;
  for (const freshness of [undefined,null,[],{},
    {...snapshot.freshness,previewFresh:1}, {...snapshot.freshness,sourceChanged:'false'},
    {...snapshot.freshness,targetChanged:null}, {...snapshot.freshness,settingsChanged:true},
    {...snapshot.freshness,previewFresh:false}]) {
    assert.equal(ui.publishPerformanceTagsSummary({...snapshot,freshness}),false);
  }
  assert.equal(ui.publishPerformanceTagsSummary({...snapshot,draft:null}),false);
  assert.equal(ui.publishPerformanceTagsSummary({...snapshot,draft:null,
    freshness:{previewFresh:false,sourceChanged:true,targetChanged:false,settingsChanged:false}}),false);
  assert.equal(ui.performanceTagsSummary.revision,revision);
  assert.equal(ui.clearPerformanceTagsSummary(),true);
  for (const key of ['previewOpen','previewFresh','sourceChanged','targetChanged','settingsChanged'])
    assert.equal(ui.performanceTagsSummary[key],false);
  assert.equal(ui.clearPerformanceTagsSummary(),false);
});

test('v0.183 header view model validates bounded display data without personal records', () => {
  const safe={breadcrumb:'Личный кабинет / Мои идеи',
    logoSrc:'data:image/png;base64,abc',version:'0.183',avatarInitial:'М',
    unreadCount:0,noticeOpen:false,
    profileName:'PRIVATE NAME',reminders:[{title:'PRIVATE EVENT'}]};
  const result=normalizeTopHeader(safe);
  assert.deepEqual(result,{breadcrumb:safe.breadcrumb,logoSrc:safe.logoSrc,
    version:'0.183',avatarInitial:'М',unreadCount:0,noticeOpen:false,
    noticeBadge:3,noticePreview:true});
  assert.equal(Object.isFrozen(result),true);
  assert.equal(JSON.stringify(result).includes('PRIVATE'),false);
  assert.deepEqual(normalizeTopHeader({...safe,unreadCount:125,noticeOpen:true}),{
    ...result,unreadCount:125,noticeOpen:true,noticeBadge:99,noticePreview:false
  });
  for(const bad of [null,[],{}, {...safe,unreadCount:-1},
    {...safe,unreadCount:1.5},{...safe,noticeOpen:'false'},
    {...safe,version:'private'}, {...safe,avatarInitial:'PRIVATE NAME'},
    {...safe,breadcrumb:'x'.repeat(161)}, {...safe,logoSrc:''},
    {...safe,logoSrc:'x'.repeat(20001)}]) {
    assert.equal(normalizeTopHeader(bad),null);
  }
});

test('v0.184 common island lifecycle remounts only changed connected host and disposes once', () => {
  let current = { isConnected:true, marker:'first' };
  const root = { querySelector: selector => selector === '#slot' ? current : null };
  const calls = [], seen = [];
  let notify, disconnected=false, observedOptions, snapshot={generation:1};
  const stop = observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#slot'),
    readSnapshot: () => { seen.push('read'); return snapshot; },
    mount: (node, model) => {
      calls.push('mount:'+node.marker+':'+model.generation);
      return () => calls.push('unmount:'+node.marker);
    },
    createObserver: callback => ({
      observe(node,options) {
        assert.strictEqual(node,root);
        notify=callback;
        observedOptions=options;
      },
      disconnect() { disconnected=true; }
    })
  });
  assert.deepEqual(observedOptions,{childList:true});
  assert.deepEqual(calls,['mount:first:1']);
  notify();notify();
  assert.deepEqual(calls,['mount:first:1']); // Vue child mutations cannot remount
  current.isConnected=false;
  current={isConnected:true,marker:'second'};
  snapshot={generation:2};
  notify();
  assert.deepEqual(calls,['mount:first:1','unmount:first','mount:second:2']);
  current=null;
  notify();
  assert.equal(calls.at(-1),'unmount:second');
  snapshot=null;
  current={isConnected:true,marker:'empty'};
  notify();
  assert.equal(calls.filter(x=>x.startsWith('mount:')).length,2);
  snapshot={generation:3};
  notify();
  assert.equal(calls.at(-1),'mount:empty:3');
  stop();
  stop();
  assert.equal(disconnected,true);
  assert.equal(calls.at(-1),'unmount:empty');
  const count=calls.length,reads=seen.length;
  current={isConnected:true,marker:'later'};
  notify();
  assert.equal(calls.length,count);
  assert.equal(seen.length,reads);
});

test('v0.184 lifecycle leaves HTML fallback untouched on absent snapshots or mount failure', () => {
  const node={isConnected:true,originalHTML:'legacy markup'};
  const root={querySelector: () => node};
  let available=false,failMount=true,notify;
  const calls=[];
  const stop=observeLegacyIsland({
    root,
    selectTarget: parent => parent.querySelector('#content'),
    readSnapshot: () => available ? { ready:true } : null,
    mount: () => {
      calls.push('attempt');
      if(failMount)return null;
      return () => calls.push('unmount');
    },
    createObserver: cb => ({observe(){notify=cb},disconnect(){calls.push('disconnect')}})
  });
  assert.equal(node.originalHTML,'legacy markup');
  assert.deepEqual(calls,[]);
  available=true;
  notify(); // Failed Vue mount leaves the existing HTML fallback available.
  assert.deepEqual(calls,['attempt']);
  assert.equal(node.originalHTML,'legacy markup');
  failMount=false;
  notify();
  assert.deepEqual(calls,['attempt','attempt']);
  stop();
  assert.deepEqual(calls,['attempt','attempt','disconnect','unmount']);
  assert.equal(node.originalHTML,'legacy markup');
  assert.equal(typeof observeLegacyIsland({root:null,selectTarget:()=>{},readSnapshot:()=>{},mount:()=>{}}),'function');
});


test('v0.185 library, artist and idea bridges reuse the same isolated lifecycle', () => {
  const configurations = [
    ['../src/vue/account/legacyLibraryBridge.js', '#sb-vue-library-collection', 'LibraryCollection'],
    ['../src/vue/account/legacyArtistManagerBridge.js', '#sb-vue-artist-manager', 'ArtistManager'],
    ['../src/vue/account/legacyArtistDNABridge.js', '#sb-vue-dna-view', 'ArtistDNA'],
    ['../src/vue/poetry/legacyIdeaCollectionsBridge.js', '#sb-vue-idea-collections', 'IdeaCollections']
  ];
  for (const [file, selector, component] of configurations) {
    const code = readFileSync(new URL(file, import.meta.url), 'utf8');
    assert.match(code, /observeLegacyIsland\(/, file);
    assert.ok(code.includes("parent.querySelector('" + selector + "')"), file);
    assert.ok(code.includes('readSnapshot: () => api.snapshot()'), file);
    assert.ok(code.includes('mountVueFeature(node, ' + component + ', { model })'), file);
    assert.doesNotMatch(code, /new MutationObserver|localStorage|indexedDB/i, file);
  }
});


test('v0.186 track and Master display bridges keep their original snapshot contracts', () => {
  for (const [file, selector, component, api] of [
    ['../src/vue/account/legacyTrackPassportListBridge.js', '#sb-vue-track-list[data-sb-vue-track-list]', 'TrackPassportList', 'SUNOBOOM_LEGACY_TRACK_LIST'],
    ['../src/vue/account/legacyTrackPassportDetailBridge.js', '#sb-vue-track-detail[data-sb-vue-track-detail]', 'TrackPassportDetail', 'SUNOBOOM_LEGACY_TRACK_DETAIL'],
    ['../src/vue/producer/legacyProducerSongListBridge.js', '#sbpc-list[data-sb-vue-producer-list]', 'ProducerSongList', 'SUNOBOOM_LEGACY_PRODUCER_LIST'],
    ['../src/vue/producer/legacyProducerSongDetailBridge.js', '#sb-vue-producer-detail[data-sb-vue-producer-host]', 'ProducerSongDetail', 'SUNOBOOM_LEGACY_PRODUCER_DETAIL']
  ]) {
    const source = readFileSync(new URL(file, import.meta.url), 'utf8');
    assert.ok(source.includes('observeLegacyIsland({'), file);
    assert.ok(source.includes('window.' + api), file);
    assert.ok(source.includes("parent.querySelector('" + selector + "')"), file);
    assert.ok(source.includes('readSnapshot: () => api.snapshot()'), file);
    assert.ok(source.includes('mountVueFeature(node, ' + component + ', { model })'), file);
    assert.doesNotMatch(source, /new MutationObserver|subtree:\s*true|localStorage|indexedDB/i, file);
  }
});


test('v0.187 song library and track editor bridges retain API and Vue props', () => {
  for (const [file, selector, component, api, props] of [
    ['../src/vue/account/legacySongCardsBridge.js', '#sb-vue-song-cards', 'SongCards', 'SUNOBOOM_LEGACY_SONG_CARDS', '{ api }'],
    ['../src/vue/account/legacySongDetailBridge.js', '#sb-vue-song-detail', 'SongDetail', 'SUNOBOOM_LEGACY_SONG_DETAIL', '{ api, model }'],
    ['../src/vue/account/legacySongEditorBridge.js', '#sb-vue-song-editor', 'SongEditor', 'SUNOBOOM_LEGACY_SONG_EDITOR', '{ api, model }'],
    ['../src/vue/account/legacyTrackPassportEditorBridge.js', '#sb-vue-track-editor[data-sb-vue-track-editor]', 'TrackPassportEditor', 'SUNOBOOM_LEGACY_TRACK_EDITOR', '{ model, api }']
  ]) {
    const source = readFileSync(new URL(file, import.meta.url), 'utf8');
    assert.ok(source.includes('observeLegacyIsland({'), file);
    assert.ok(source.includes('window.' + api), file);
    assert.ok(source.includes("parent.querySelector('" + selector + "')"), file);
    assert.ok(source.includes('readSnapshot: () => api.snapshot()'), file);
    assert.ok(source.includes('mountVueFeature(node, ' + component + ', ' + props + ')'), file);
    assert.doesNotMatch(source, /new MutationObserver|subtree:\s*true|localStorage|indexedDB/i, file);
  }
});


test('v0.188 Player LAB, A/B, Mixer and Auditor preserve lifecycle and props', () => {
  for (const [file, selector, component, api, props] of [
    ['../src/vue/player/legacyPlayerLabBridge.js', '#sb-vue-player-lab', 'PlayerLab', 'SUNOBOOM_LEGACY_PLAYER_LAB', '{ api, initialModel: model }'],
    ['../src/vue/player/legacyPlayerABBridge.js', '#sb-vue-player-ab', 'PlayerAB', 'SUNOBOOM_LEGACY_PLAYER_AB', '{ api, initialModel: model }'],
    ['../src/vue/studio/legacyMixerBridge.js', '#sb-vue-mixer-root', 'GenreMixer', 'SUNOBOOM_LEGACY_MIXER', '{ api }'],
    ['../src/vue/studio/legacyAuditorBridge.js', '#sbpa-auditor', 'PromptAuditor', 'SUNOBOOM_LEGACY_AUDITOR', '{ api }']
  ]) {
    const source = readFileSync(new URL(file, import.meta.url), 'utf8');
    assert.ok(source.includes('observeLegacyIsland({'), file);
    assert.ok(source.includes('window.' + api), file);
    assert.ok(source.includes("parent.querySelector('" + selector + "')"), file);
    assert.ok(source.includes('readSnapshot: () => api.snapshot()'), file);
    assert.ok(source.includes('mountVueFeature(node, ' + component + ', ' + props + ')'), file);
    assert.doesNotMatch(source, /new MutationObserver|subtree:\s*true|localStorage|indexedDB/i, file);
  }
});


test('v0.189 Academy, genre detail and editors share lifecycle without changing legacy API', () => {
  for (const [file, selector, component, api, props] of [
    ['../src/vue/account/legacyPromptEditorBridge.js', '#sb-vue-prompt-form', 'PromptEditor', 'SUNOBOOM_LEGACY_PROMPT_EDITOR', '{ initial: model }'],
    ['../src/vue/account/legacyArtistDNAEditorBridge.js', '#sb-vue-dna-editor', 'ArtistDNAEditor', 'SUNOBOOM_LEGACY_DNA_EDITOR', '{ model, api }'],
    ['../src/vue/academy/legacyAcademyBridge.js', '#sb-vue-academy-root', 'AcademyCatalog', 'SUNOBOOM_LEGACY_ACADEMY', 'snapshot: model'],
    ['../src/vue/academy/legacyGenreDetailBridge.js', '#sb-vue-genre-detail', 'GenreDetail', 'SUNOBOOM_LEGACY_GENRE', 'genre: model']
  ]) {
    const code = readFileSync(new URL(file, import.meta.url), 'utf8');
    assert.ok(code.includes('observeLegacyIsland({'), file);
    assert.ok(code.includes('window.' + api), file);
    assert.ok(code.includes("parent.querySelector('" + selector + "')"), file);
    assert.ok(code.includes('api.snapshot()'), file);
    assert.ok(code.includes('mountVueFeature(node, ' + component + ','), file);
    assert.ok(code.includes(props), file);
    assert.doesNotMatch(code, /new MutationObserver|subtree:\s*true|localStorage|indexedDB/i, file);
  }
  const catalog = readFileSync(new URL('../src/vue/academy/legacyAcademyBridge.js', import.meta.url), 'utf8');
  assert.ok(catalog.includes('!model?.families?.length'));
  for (const action of ['api.search(q)', 'api.setExpanded(kind, id, value)', "node.querySelector('label.search-box > svg')"])
    assert.ok(catalog.includes(action), action);
  const genre = readFileSync(new URL('../src/vue/academy/legacyGenreDetailBridge.js', import.meta.url), 'utf8');
  assert.ok(genre.includes('!model?.id'));
  assert.ok(genre.includes('api.tabContent(id, tab)'));
  assert.ok(genre.includes('SUNOBOOM_ARTIST_PROFILES?.enhanceCards?.()'));
});


test('v0.190 multi-island lifecycle shares one shallow observer, retries missing hosts and disposes once', () => {
  const a = { isConnected:true, id:'a0', originalHTML:'native a' };
  const b = { isConnected:true, id:'b0', originalHTML:'native b' };
  const c = { isConnected:true, id:'c0', originalHTML:'native c' };
  const slots = new Map([['a',a],['b',b],['c',c]]);
  const root = { querySelector: selector => slots.get(selector.slice(1)) || null };
  const available = new Map([['a',true],['b',false],['c',true]]);
  const events = [];
  let notify, observerCount=0, observedOptions, disconnected=0, failC=true;
  const stop = observeLegacyIslands({
    root,
    islands: ['a','b','c'].map(key => ({
      key,
      selectTarget: parent => parent.querySelector('#'+key),
      readSnapshot: () => available.get(key) ? { key } : null,
      mount: (node, snapshot) => {
        assert.equal(snapshot.key,key);
        events.push('mount:'+key+':'+node.id);
        if (key==='c' && failC) return null;
        return () => events.push('unmount:'+key+':'+node.id);
      }
    })),
    createObserver: callback => ({
      observe(node,options) { assert.equal(node,root); notify=callback; observedOptions=options; observerCount++; },
      disconnect() { disconnected++; }
    })
  });
  assert.deepEqual(observedOptions,{childList:true});
  assert.equal(observerCount,1);
  assert.deepEqual(events,['mount:a:a0','mount:c:c0']);
  assert.equal(b.originalHTML,'native b');
  assert.equal(c.originalHTML,'native c');
  available.set('b',true);
  failC=false;
  notify();
  assert.deepEqual(events.slice(-2),['mount:b:b0','mount:c:c0']);
  const before=events.length;
  notify();notify();
  assert.equal(events.length,before); // Native input/Vue descendants don't remount.
  const nextB={isConnected:true,id:'b1',originalHTML:'native b1'};
  b.isConnected=false;
  slots.set('b',nextB);
  notify();
  assert.deepEqual(events.slice(-2),['unmount:b:b0','mount:b:b1']);
  slots.delete('c');
  notify();
  assert.equal(events.at(-1),'unmount:c:c0');
  nextB.isConnected=false;
  slots.set('b',{isConnected:true,id:'b2',originalHTML:'native b2'});
  available.set('b',false);
  notify();
  assert.equal(events.at(-1),'unmount:b:b1');
  assert.ok(!events.includes('mount:b:b2'));
  stop();stop();
  assert.equal(disconnected,1);
  assert.equal(events.at(-1),'unmount:a:a0');
  const after=events.length;
  slots.set('a',{isConnected:true,id:'a1'});
  notify();
  assert.equal(events.length,after);
  assert.equal(typeof observeLegacyIslands({root:null,islands:[]}), 'function');
  assert.equal(typeof observeLegacyIslands({root,islands:[{key:'dup'},{key:'dup'}]}), 'function');
});

test('v0.190 Studio and three Idea Editor hosts preserve their unique native contracts', () => {
  const studio=readFileSync(new URL('../src/vue/studio/legacyStudioBridge.js', import.meta.url),'utf8');
  assert.match(studio,/observeLegacyIsland\(/);
  assert.ok(studio.includes("parent.querySelector('.studio-grid')"));
  assert.ok(studio.includes('mountVueFeature(node, StudioBuilder, { api })'));
  assert.ok(studio.includes("node.dataset.sbVueStudio = 'true'"));
  assert.ok(studio.includes('readSnapshot: () => api.snapshot()'));
  assert.doesNotMatch(studio,/new MutationObserver|localStorage|indexedDB|subtree:\s*true/);
  const ideas=readFileSync(new URL('../src/vue/poetry/legacyIdeaEditorBridge.js',import.meta.url),'utf8');
  assert.ok(ideas.includes('observeLegacyIslands({'));
  for (const [selector,component] of [
    ['sb-vue-idea-fields','IdeaFields'],
    ['sb-vue-lyrics-source','LyricsSource'],
    ['sb-vue-lyrics-tools','LyricsTools']
  ]) {
    assert.ok(ideas.includes("['"+selector+"', "+component+']'));
  }
  assert.ok(ideas.includes("parent.querySelector('#' + id)"));
  assert.ok(ideas.includes('readSnapshot: () => api.snapshot()'));
  assert.ok(ideas.includes('mountVueFeature(node, component, { api, initial })'));
  assert.doesNotMatch(ideas,/new MutationObserver|localStorage|indexedDB|subtree:\s*true/);
});


test('v0.191 arranger uses one shallow observer across six original hosts', () => {
  const code = readFileSync(new URL('../src/vue/studio/legacyArrangerBridge.js', import.meta.url), 'utf8');
  assert.ok(code.includes("import { observeLegacyIslands } from '../legacy/observeLegacyIslands.js';"));
  assert.ok(code.includes('observeLegacyIslands({'));
  assert.ok(code.replaceAll('\r\n', '\n').includes('root,\n    islands: targets.map('));
  for (const [selector, kind, component] of [
    ['#sba-cards','cards','ArrangementPanel'],
    ['#sba-snake-track','snake','ArrangementPanel'],
    ['#sba-transition-hub-list','transitions','ArrangementPanel'],
    ['#sba-energy-chart','energy','ArrangementPanel'],
    ['.sba-preset-picker','picker','ArrangementPicker'],
    ['.sba-result','result','ArrangementResult']
  ]) {
    assert.ok(code.includes("['" + selector + "', '" + kind + "'"), selector);
    if (component !== 'ArrangementPanel') assert.ok(code.includes(component), kind);
  }
  assert.ok(code.includes('key: kind'));
  assert.ok(code.includes('selectTarget: parent => parent.querySelector(selector)'));
  assert.ok(code.includes('readSnapshot: () => api.snapshot()'));
  assert.ok(code.includes("component === ArrangementPanel ? { api, kind } : { api }"));
  assert.doesNotMatch(code, /new MutationObserver|subtree:\s*true|localStorage|indexedDB|saveDraft|writeFile/i);
});

test('v0.191 six arranger islands remount independently and preserve fallback on missing snapshot', () => {
  const selectors = ['#sba-cards','#sba-snake-track','#sba-transition-hub-list',
    '#sba-energy-chart','.sba-preset-picker','.sba-result'];
  const hosts = new Map(selectors.map((selector,i) => [selector, { isConnected:true, name:'host'+i, html:'native '+i }]));
  const root = { querySelector: selector => hosts.get(selector) || null };
  const mounts = [], unmounts = [];
  let notify, option, disconnected=0, disabled = false;
  const stop = observeLegacyIslands({
    root,
    islands: selectors.map((selector,i) => ({
      key:'island'+i,
      selectTarget: parent => parent.querySelector(selector),
      readSnapshot: () => disabled ? null : { original:true },
      mount: (node,snapshot) => {
        assert.equal(snapshot.original,true);
        mounts.push(node.name);
        return () => unmounts.push(node.name);
      }
    })),
    createObserver: cb => ({
      observe(target,opts) { assert.equal(target,root); notify=cb; option=opts; },
      disconnect() { disconnected++; }
    })
  });
  assert.deepEqual(option,{childList:true});
  assert.deepEqual(mounts,['host0','host1','host2','host3','host4','host5']);
  notify();notify();
  assert.equal(mounts.length,6);
  // Changing a single panel must not reset the five other arrangements.
  const previous=hosts.get('#sba-snake-track');
  previous.isConnected=false;
  const replacement={isConnected:true,name:'newSnake',html:'native snake'};
  hosts.set('#sba-snake-track',replacement);
  notify();
  assert.deepEqual(unmounts,['host1']);
  assert.equal(mounts.at(-1),'newSnake');
  assert.equal(mounts.length,7);
  // Incomplete snapshots cannot erase the HTML fallback.
  disabled=true;
  const oldResult=hosts.get('.sba-result'); oldResult.isConnected=false;
  hosts.set('.sba-result',{isConnected:true,name:'newResult',html:'native result'});
  notify();
  assert.equal(unmounts.at(-1),'host5');
  assert.equal(mounts.length,7);
  assert.equal(hosts.get('.sba-result').html,'native result');
  disabled=false;
  notify();
  assert.equal(mounts.at(-1),'newResult');
  stop();stop();
  assert.equal(disconnected,1);
  // Two replaced hosts were unmounted earlier, then six active hosts at dispose.
  assert.equal(unmounts.length,8);
  assert.equal(unmounts.filter(name => name === 'host1').length,1);
  assert.equal(unmounts.filter(name => name === 'host5').length,1);
  const before=mounts.length;
  notify();
  assert.equal(mounts.length,before);
});


test('v0.192 poetry bridge retains original API, stress events and two Vue hosts', () => {
  const code = readFileSync(new URL('../src/vue/poetry/legacyPoetryBridge.js', import.meta.url), 'utf8');
  assert.ok(code.includes("import { observeLegacyIslands } from '../legacy/observeLegacyIslands.js';"));
  assert.ok(code.includes("['analysis', '#sb-poetry-result', PoetryAnalysis]"));
  assert.ok(code.includes("['ambiguities', '#sb-poetry-ambiguous-choices', PoetryAmbiguities]"));
  assert.ok(code.includes('readSnapshot: () => api'));
  assert.ok(code.includes('mount: node => mountVueFeature(node, component, { api })'));
  assert.ok(code.includes('subscribe: sync =>'));
  for (const event of ['sunoboom:poetry-stress-ready', 'sunoboom:poetry-stress-closed']) {
    assert.ok(code.includes(event));
    assert.ok(code.includes('window.addEventListener(event, sync)'));
    assert.ok(code.includes('window.removeEventListener(event, sync)'));
  }
  assert.doesNotMatch(code, /new MutationObserver|subtree:\s*true|localStorage|indexedDB|\.innerHTML\s*=/);
  const shared = readFileSync(new URL('../src/vue/legacy/observeLegacyIslands.js', import.meta.url), 'utf8');
  assert.ok(shared.includes("typeof subscribe === 'function' ? subscribe(sync) : null"));
  assert.ok(shared.includes("if (typeof unsubscribe === 'function') unsubscribe()"));
  assert.ok(shared.includes("observer.observe(root, { childList: true })"));
});

test('v0.192 nested poetry stress lifecycle mounts on ready, unmounts on closed and unsubscribes', () => {
  const analysis = { id:'analysis', isConnected:true, html:'original analysis' };
  const stress = { id:'stress', isConnected:true, html:'original dictionary choices' };
  const hosts = new Map([['#sb-poetry-result',analysis]]);
  const root = { querySelector: selector => hosts.get(selector) || null };
  const counts = { analysis:0, stress:0, unmountAnalysis:0, unmountStress:0 };
  const registrations = new Map();
  let notify, observeCount=0, disconnectCount=0, offCount=0;
  const api = { analysis:()=>({ analyzed:false }), ambiguities:()=>({ count:1 }) };
  let userLyrics='Я вижу замок на холме';
  const stop = observeLegacyIslands({
    root,
    islands: [
      { key:'analysis', selectTarget: p=>p.querySelector('#sb-poetry-result'),
        readSnapshot:()=>api, mount: (node,model)=>{
          assert.equal(node,analysis);assert.equal(model,api);counts.analysis++;
          return ()=>{counts.unmountAnalysis++;};
        } },
      { key:'stress', selectTarget: p=>p.querySelector('#sb-poetry-ambiguous-choices'),
        readSnapshot:()=>api, mount: (node,model)=>{
          assert.equal(node,stress);assert.equal(model,api);counts.stress++;
          return ()=>{counts.unmountStress++;};
        } }
    ],
    createObserver: callback => ({
      observe(node,options) { assert.equal(node,root);assert.deepEqual(options,{childList:true});notify=callback;observeCount++; },
      disconnect() { disconnectCount++; }
    }),
    subscribe: sync => {
      registrations.set('ready',sync);registrations.set('closed',sync);
      return ()=>{offCount++;registrations.clear();};
    }
  });
  assert.equal(observeCount,1);
  assert.deepEqual([counts.analysis,counts.stress],[1,0]);
  // The native FSA dictionary inserts the preview nested below #app.
  hosts.set('#sb-poetry-ambiguous-choices',stress);
  registrations.get('ready')();
  assert.deepEqual([counts.analysis,counts.stress],[1,1]);
  registrations.get('ready')();notify();
  assert.deepEqual([counts.analysis,counts.stress],[1,1]);
  // Applying or manually marking stress removes the preview without root mutation.
  hosts.delete('#sb-poetry-ambiguous-choices');stress.isConnected=false;
  registrations.get('closed')();
  assert.deepEqual([counts.unmountAnalysis,counts.unmountStress],[0,1]);
  assert.equal(analysis.html,'original analysis');
  assert.equal(userLyrics,'Я вижу замок на холме');
  registrations.get('closed')();notify();
  assert.equal(counts.unmountStress,1);
  stop();stop();
  assert.equal(disconnectCount,1);assert.equal(offCount,1);
  assert.equal(registrations.size,0);
  assert.deepEqual([counts.unmountAnalysis,counts.unmountStress],[1,1]);
  notify();
  assert.equal(counts.analysis,1);
});


test('v0.193 Genre Tree bridge preserves nested details host, original API and toggle subscriptions', () => {
  const code = readFileSync(new URL('../src/vue/academy/legacyGenreTreeBridge.js', import.meta.url), 'utf8');
  const lifecycle = readFileSync(new URL('../src/vue/legacy/observeLegacyIsland.js', import.meta.url), 'utf8');
  assert.ok(code.includes("import { observeLegacyIsland } from '../legacy/observeLegacyIsland.js';"));
  assert.ok(code.includes('observeLegacyIsland({'));
  assert.ok(code.includes("parent.querySelector('#sb-genre-tree')"));
  assert.ok(code.includes("details?.open ? details.querySelector('#sb-gt-inner') : null"));
  assert.ok(code.includes('snapshot?.trees?.length && snapshot?.genres?.length'));
  assert.ok(code.includes('mountVueFeature(node, GenreTree, { snapshot, treeApi: api })'));
  assert.ok(code.includes("document.addEventListener('toggle', onToggle, true)"));
  assert.ok(code.includes("document.addEventListener('click', onReveal)"));
  assert.ok(code.includes("document.removeEventListener('toggle', onToggle, true)"));
  assert.ok(code.includes("document.removeEventListener('click', onReveal)"));
  assert.ok(code.includes("queueMicrotask(sync)"));
  assert.ok(lifecycle.includes("typeof subscribe === 'function' ? subscribe(sync) : null"));
  assert.ok(lifecycle.includes("if (typeof unsubscribe === 'function') unsubscribe()"));
  assert.ok(lifecycle.includes("observer.observe(root, { childList: true })"));
  assert.doesNotMatch(code, /new MutationObserver|subtree:\s*true|localStorage|indexedDB|\.innerHTML\s*=/);
});

test('v0.193 single-island lifecycle reacts to native toggle and route replacement without remount leaks', () => {
  let treeOpen = false, nestedConnected = true, validSnapshot = true;
  let rootChanged, options, observeCount = 0, disconnectCount = 0, offCount = 0;
  let externalSync;
  const events = [];
  const oldHost = { id:'oldTree', get isConnected(){return nestedConnected;} };
  const nextHost = { id:'nextTree', isConnected:true };
  let target = oldHost;
  const root = { querySelector: selector => {
    if(selector==='#sb-genre-tree') return { open:treeOpen, querySelector:()=>target };
    return null;
  }};
  const stop = observeLegacyIsland({
    root,
    selectTarget: parent => {
      const details = parent.querySelector('#sb-genre-tree');
      return details?.open ? details.querySelector('#sb-gt-inner') : null;
    },
    readSnapshot:()=> validSnapshot ? { trees:[1], genres:[2] } : null,
    mount:(node,model)=>{
      assert.deepEqual(model,{ trees:[1], genres:[2] });
      events.push('mount:'+node.id);
      return ()=>events.push('unmount:'+node.id);
    },
    createObserver: callback => ({
      observe(node, opts){ assert.equal(node,root);rootChanged=callback;options=opts;observeCount++; },
      disconnect(){disconnectCount++;}
    }),
    subscribe: sync => { externalSync=sync;return ()=>{offCount++;}; }
  });
  assert.deepEqual(options,{childList:true});
  assert.equal(observeCount,1);
  assert.deepEqual(events,[]);
  treeOpen=true;
  externalSync();
  assert.deepEqual(events,['mount:oldTree']);
  externalSync();rootChanged();
  assert.deepEqual(events,['mount:oldTree']); // input/zoom/search do not remount
  treeOpen=false;
  externalSync();
  assert.deepEqual(events,['mount:oldTree','unmount:oldTree']);
  treeOpen=true;validSnapshot=false;
  externalSync();
  assert.equal(events.length,2); // native HTML survives invalid snapshot
  validSnapshot=true;
  externalSync();
  assert.equal(events.at(-1),'mount:oldTree');
  // The catalog replacement detaches the old tree and renders a new host.
  nestedConnected=false;target=nextHost;
  rootChanged();
  assert.deepEqual(events.slice(-2),['unmount:oldTree','mount:nextTree']);
  stop();stop();
  assert.equal(disconnectCount,1);
  assert.equal(offCount,1);
  assert.equal(events.at(-1),'unmount:nextTree');
  const previousLength=events.length;
  externalSync();rootChanged();
  assert.equal(events.length,previousLength);
});


test('v0.194 navigation revisions remount menus only, publish before mounts and retry failed hosts', () => {
  const root = {};
  let sync, revision = 'menu-a', disconnected = 0, fail = false;
  const events = [];
  const hosts = { sidebar:{isConnected:true}, mobile:{isConnected:true}, history:{isConnected:true} };
  const stop = observeLegacyIslands({
    root,
    beforeSync: () => events.push('publish'),
    islands: Object.keys(hosts).map(key => ({
      key, selectTarget: () => hosts[key],
      ...(key === 'history' ? {} : { readRevision: () => revision }),
      readSnapshot: () => ({revision}),
      mount: (_, snapshot) => {
        events.push('mount:'+key+':'+snapshot.revision);
        if (fail && key === 'mobile') return null;
        return () => events.push('unmount:'+key);
      }
    })),
    createObserver: callback => ({
      observe(node, options) { assert.equal(node,root); assert.deepEqual(options,{childList:true}); sync=callback; },
      disconnect() { disconnected++; }
    })
  });
  assert.deepEqual(events,['publish','mount:sidebar:menu-a','mount:mobile:menu-a','mount:history:menu-a']);
  events.length=0; sync();
  assert.deepEqual(events,['publish']);
  revision='menu-b'; fail=true; events.length=0; sync();
  assert.deepEqual(events,['publish','unmount:sidebar','mount:sidebar:menu-b','unmount:mobile','mount:mobile:menu-b']);
  fail=false; events.length=0; sync();
  assert.deepEqual(events,['publish','mount:mobile:menu-b']);
  hosts.sidebar={isConnected:true}; events.length=0; sync();
  assert.deepEqual(events,['publish','unmount:sidebar','mount:sidebar:menu-b']);
  hosts.mobile.isConnected=false; events.length=0; sync();
  assert.deepEqual(events,['publish','unmount:mobile']);
  events.length=0; stop(); stop(); sync();
  assert.equal(disconnected,1);
  assert.deepEqual(events.sort(),['unmount:history','unmount:sidebar']);
});

test('v0.194 navigation uses shared lifecycle after router settlement with structural menu revisions', () => {
  const code = readFileSync(new URL('../src/vue/navigation/legacyBridge.js', import.meta.url),'utf8');
  assert.ok(code.includes('beforeSync: publishNavigation'));
  assert.ok(code.includes('readRevision: () => signature'));
  assert.ok(code.includes('items.map(({ active, ...item }) => item)'));
  assert.ok(code.includes('whenLegacyRouterSettled().then(() => {'));
  assert.ok(code.includes('if (disposed) return;'));
  assert.ok(code.includes('stopIslands();'));
  assert.equal((code.match(/vueRouter: true/g)||[]).length,2);
  assert.doesNotMatch(code,/new MutationObserver|instances = new Map|subtree:\s*true/);
});


test('v0.194 disposing navigation before router settlement never mounts a late menu', async () => {
  const code = readFileSync(new URL('../src/vue/navigation/legacyBridge.js', import.meta.url),'utf8')
    .replace(/^import .*;\r?$/gm,'').replace('export function activateLegacyNavigation','function activateLegacyNavigation');
  let settle, observed=0, snapshots=0;
  const ready = new Promise(resolve => { settle=resolve; });
  const window = { SUNOBOOM_LEGACY_NAV: { snapshot: () => { snapshots++; return {active:'home'}; } } };
  const activate = new Function('window','document','observeLegacyIslands','syncLegacyRoute','whenLegacyRouterSettled',
    code+'; return activateLegacyNavigation;')(window,{getElementById:()=>({})},
    () => { observed++; return () => {}; }, () => {}, () => ready);
  const stop = activate({ sharedUi:{}, mountVueFeature:()=>{ throw new Error('late mount'); } });
  stop(); stop(); settle(); await ready; await Promise.resolve();
  assert.equal(observed,0);
  assert.equal(snapshots,1);
});


test('v0.195 feature mounting restores native HTML, cleans failures and ignores stale disposers', async () => {
  const { createFeatureMounter } = await import('../src/vue/legacy/createFeatureMounter.js');
  const attrs = new Map([['v-cloak','']]);
  const node = {nodeType:1, innerHTML:'<button>Native</button>',
    getAttribute:key=>attrs.get(key)??null, setAttribute:(key,value)=>attrs.set(key,value), removeAttribute:key=>attrs.delete(key)};
  const apps=[]; let failure=''; let warnings=0;
  const pinia={}, router={};
  const api = createFeatureMounter({host:{},pinia,router,resolveTarget:target=>target===node?node:null,
    warn:()=>warnings++, createApp:()=>{
      if(failure==='create') throw Error('create');
      const app={config:{},plugins:[],unmounts:0,
        use(plugin){this.plugins.push(plugin);if(failure==='plugin')throw Error('plugin');},
        mount(el){el.innerHTML='Vue';el.setAttribute('data-v-app','');el.removeAttribute('v-cloak');
          if(failure==='render')this.config.errorHandler(Error('render'));
          if(failure==='mount')throw Error('mount');},
        unmount(){this.unmounts++;node.innerHTML='';if(failure==='cleanup')throw Error('cleanup');}
      }; apps.push(app);return app;
    }});
  assert.equal(api.mountVueFeature(null,{}),null);
  const first=api.mountVueFeature(node,{}, {}, {vueRouter:true});
  assert.deepEqual(apps[0].plugins,[pinia,router]);
  const second=api.mountVueFeature(node,{});
  assert.equal(apps[0].unmounts,1);
  first(); assert.equal(node.innerHTML,'Vue');
  second();second();api.unmountVueFeature(node);
  assert.equal(apps[1].unmounts,1);
  assert.equal(node.innerHTML,'<button>Native</button>');
  assert.equal(attrs.get('v-cloak'),'');assert.equal(attrs.has('data-v-app'),false);
  for(const stage of ['create','plugin','render','mount']){
    failure='';const stale=api.mountVueFeature(node,{});
    failure=stage;assert.equal(api.mountVueFeature(node,{}),null);
    assert.equal(node.innerHTML,'<button>Native</button>');
    assert.equal(attrs.has('data-v-app'),false);
    if(stage!=='create')assert.equal(apps.at(-1).unmounts,1);
    stale();assert.equal(node.innerHTML,'<button>Native</button>');
    api.unmountVueFeature(node); // failed app has no retained ownership
  }
  failure='';const third=api.mountVueFeature(node,{});
  failure='cleanup';third();third();
  assert.equal(apps.at(-1).unmounts,1);
  assert.equal(node.innerHTML,'<button>Native</button>');
  assert.equal(warnings,5);
});
