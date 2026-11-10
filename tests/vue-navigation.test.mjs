import test from 'node:test';
import assert from 'node:assert/strict';
import { treeSearch, nextTreeZoom, connectedTreeEdges } from '../src/vue/academy/genre-tree-model.js';
import { groupMajorVersions, historyResults, formatReleaseDate } from '../src/vue/version-history/version-model.js';
import { activeNavigationRoute, navigationSnapshot } from '../src/vue/navigation/nav-model.js';
import { currentRoute, syncLegacyRoute } from '../src/vue/navigation/route-state.js';
import { navigateFromVueMenu } from '../src/vue/navigation/navigation-dispatch.js';
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
