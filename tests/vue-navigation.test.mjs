import test from 'node:test';
import assert from 'node:assert/strict';
import { activeNavigationRoute, navigationSnapshot } from '../src/vue/navigation/nav-model.js';

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
