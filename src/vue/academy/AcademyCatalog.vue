<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';
import GenreCards from './GenreCards.vue';

const props = defineProps({
  snapshot: { type: Object, required: true },
  search: { type: Function, required: true },
  setExpanded: { type: Function, required: true },
  searchIcon: { type: String, default: '' }
});

const ui = useLegacyUiStore();
const query = ref(props.snapshot.query || '');
const expanded = reactive({
  family: { ...(props.snapshot.expanded?.family || {}) },
  religion: { ...(props.snapshot.expanded?.religion || {}) },
  branch: { ...(props.snapshot.expanded?.branch || {}) }
});

const selection = computed(() => props.search(query.value));
const searching = computed(() => Boolean(query.value.trim()));
const filteredFamilies = computed(() => {
  const ids = selection.value.ids == null ? null : new Set(selection.value.ids);
  return (props.snapshot.families || []).map(family => ({
    ...family,
    genres: family.genres.filter(genre => !ids || ids.has(genre.id))
  })).filter(family => family.genres.length);
});
const total = computed(() => filteredFamilies.value.reduce((count, family) => count + family.genres.length, 0));
const searchHint = computed(() => {
  if (!searching.value) return 'Поиск работает при вводе';
  return ({
    name: 'По названиям жанров',
    family: 'По направлениям',
    artist: 'По исполнителям',
    description: 'По описаниям и звучанию'
  })[selection.value.mode] || '';
});
const sacredFamily = computed(() => filteredFamilies.value.find(f => f.name === 'Религиозная музыка'));
const sacredOverview = computed(() => sacredFamily.value?.genres.find(g => g.id === 'sacred-music'));
const sacredReligions = computed(() => {
  if (!sacredFamily.value) return [];
  const genres = new Map(sacredFamily.value.genres.map(genre => [genre.id, genre]));
  return (props.snapshot.sacred || []).map(religion => {
    const branches = religion.branches.map(branch => ({
      ...branch,
      genres: branch.ids.map(id => genres.get(id)).filter(Boolean)
    })).filter(branch => branch.genres.length);
    return { ...religion, branches, count: branches.reduce((n,b) => n + b.genres.length,0) };
  }).filter(religion => religion.branches.length);
});

const totalInAcademy = props.snapshot.families.reduce((n,family) => n + family.genres.length, 0);
watch([query, selection, total], ([value, selected, found]) => {
  ui.publishAcademyCatalog({query:value, results:found, total:totalInAcademy, mode:selected?.mode || ''});
}, { immediate:true });
// This action uses the original data-action='genre' route; the shared store
// holds only the last valid genre ID and tab, never the GENRES catalog itself.
const lastGenre = computed(() => (props.snapshot.families || [])
  .flatMap(family => family.genres)
  .find(genre => genre.id === ui.academyFocus.genreId) || null);

function isOpen(kind, id) {
  return searching.value || Boolean(expanded[kind][id]);
}
function rememberToggle(kind, id, event) {
  if (searching.value) return;
  const value = event.currentTarget.open;
  if (expanded[kind][id] === value) return;
  expanded[kind][id] = value;
  props.setExpanded(kind, id, value);
}
function genreNoun(n) {
  return n === 1 ? 'жанр' : n >= 2 && n <= 4 ? 'жанра' : 'жанров';
}
function religiousNoun(n) {
  return n === 1 ? 'направление' : n >= 2 && n <= 4 ? 'направления' : 'направлений';
}
</script>

<template>
  <div class="genre-family-toolbar">
    <label class="search-box">
      <span v-html="searchIcon" aria-hidden="true"></span>
      <input id="genre-search" v-model="query" type="search" enterkeyhint="search"
        autocapitalize="off" spellcheck="false" aria-label="Поиск жанров"
        placeholder="Поиск жанра, поджанра или исполнителя…" autocomplete="off">
    </label>
    <span class="hint">{{ snapshot.families.length }} разделов · {{ snapshot.families.reduce((n, f) => n + f.genres.length, 0) }} жанров</span>
  </div>
  <div class="genre-family-summary">
    <h2 id="catalog-count">{{ searching ? 'Найдено жанров' : 'Музыкальные жанры' }} · {{ total }}</h2>
    <button v-if="lastGenre" type="button" class="btn ghost small"
      data-sb-last-genre data-action="genre" :data-id="lastGenre.id">
      ↶ Последний жанр: {{ lastGenre.name }}
    </button>
    <span class="hint" id="sb-academy-search-hint">{{ searchHint }}</span>
  </div>
  <div id="catalog-cards" class="genre-families">
    <template v-if="filteredFamilies.length">
      <details v-for="family in filteredFamilies" :key="family.name"
        class="genre-family" :data-family="family.name"
        :style="{ '--family-accent': family.meta.accent }"
        :open="isOpen('family', family.name)"
        @toggle="rememberToggle('family', family.name, $event)">
        <summary>
          <span class="genre-family-icon" aria-hidden="true">{{ family.meta.icon }}</span>
          <span class="genre-family-heading">
            <strong>{{ family.name }}</strong>
            <small>{{ family.meta.desc }}</small>
          </span>
          <span class="genre-family-right">
            <span class="genre-family-count">{{ family.genres.length }} {{ genreNoun(family.genres.length) }}</span>
            <svg class="genre-family-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="m5 9 7 7 7-7" />
            </svg>
          </span>
        </summary>
        <div class="genre-family-body">
          <template v-if="family.name === 'Религиозная музыка'">
            <div class="sb-sacred-index">
              <div class="sb-sacred-intro">
                <span class="sb-sacred-eyebrow">МУЗЫКА МИРОВЫХ РЕЛИГИЙ</span>
                <h3>Религии и музыкальные традиции</h3>
                <p>Открой религию, затем её направление или течение. Здесь представлены музыкальные традиции — их границы не всегда совпадают с конфессиональными.</p>
              </div>
              <div v-if="sacredOverview" class="sb-sacred-overview">
                <div class="sb-sacred-overview-label">📖 Обзор раздела</div>
                <div class="genre-grid"><GenreCards :genres="[sacredOverview]" /></div>
              </div>
              <div class="sb-sacred-religions">
                <details v-for="religion in sacredReligions" :key="religion.id"
                  class="sb-sacred-religion" :data-sb-religion="religion.id"
                  :open="isOpen('religion', religion.id)"
                  @toggle="rememberToggle('religion', religion.id, $event)">
                  <summary class="sb-sacred-religion-header">
                    <span class="sb-sacred-religion-icon" aria-hidden="true">{{ religion.icon }}</span>
                    <span class="sb-sacred-religion-label">
                      <strong>{{ religion.name }}</strong><small>{{ religion.description }}</small>
                    </span>
                    <span class="sb-sacred-count">{{ religion.count }}</span>
                    <span class="sb-sacred-chevron" aria-hidden="true">⌄</span>
                  </summary>
                  <div class="sb-sacred-religion-content">
                    <details v-for="branch in religion.branches" :key="branch.id"
                      class="sb-sacred-branch" :data-sb-branch="branch.id"
                      :open="isOpen('branch', branch.id)"
                      @toggle="rememberToggle('branch', branch.id, $event)">
                      <summary class="sb-sacred-branch-header">
                        <span class="sb-sacred-branch-label">
                          <strong>{{ branch.name }}</strong><small>{{ branch.description }}</small>
                        </span>
                        <span class="sb-sacred-count">{{ branch.genres.length }} {{ religiousNoun(branch.genres.length) }}</span>
                        <span class="sb-sacred-chevron" aria-hidden="true">⌄</span>
                      </summary>
                      <div class="sb-sacred-branch-content">
                        <div class="genre-grid"><GenreCards :genres="branch.genres" /></div>
                      </div>
                    </details>
                  </div>
                </details>
              </div>
            </div>
          </template>
          <div v-else class="genre-grid">
            <GenreCards :genres="family.genres" />
          </div>
        </div>
      </details>
    </template>
    <div v-else class="genre-family-empty">Ничего не найдено. Попробуй другой запрос.</div>
  </div>
</template>
