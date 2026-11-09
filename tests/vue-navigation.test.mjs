import test from 'node:test';
import assert from 'node:assert/strict';
import { activeNavigationRoute, navigationSnapshot } from '../src/vue/navigation/nav-model.js';
import { currentRoute, syncLegacyRoute } from '../src/vue/navigation/route-state.js';

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
