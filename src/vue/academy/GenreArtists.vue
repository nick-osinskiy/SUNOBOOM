<script setup>
import { computed, onUnmounted, ref, shallowRef } from 'vue';

const props = defineProps({
  genre: { type: Object, required: true },
  catalog: { type: Object, required: true },
  profiles: { type: Object, default: null }
});

const favorites = shallowRef(new Set(props.profiles?.favoriteKeys() || []));
const unsubscribe = props.profiles?.subscribe(() => { favorites.value = new Set(props.profiles.favoriteKeys()); });
onUnmounted(() => unsubscribe?.());
const isFavorite = name => favorites.value.has(props.profiles?.key(name));
function openProfile(artist, button) {
  props.profiles?.openProfile(artist.name, {genre:props.genre.id,locale:scene.value,period:artist.period,bio:artist.bio,track:artist.track}, button);
}
const scene = ref(props.catalog.initialScene());
const query = ref('');
const selectedFilter = ref('all');
const data = computed(() => props.catalog.getScene(props.genre.id, scene.value));
const groups = computed(() => (data.value?.groups || []).map(section => ({
  ...section,
  artists: section.artists.filter(artist => {
    const matchesSearch = !query.value.trim() ||
      [artist.name, artist.period || 'Музыкальная сцена', artist.label,
       artist.bio || 'Музыкальное направление и характерный творческий почерк.',
       artist.track].join(' ').toLocaleLowerCase('ru').includes(query.value.toLocaleLowerCase('ru').trim());
    const matchesFilter = selectedFilter.value === 'all' ||
      (selectedFilter.value === 'adjacent' ? artist.group === 'adjacent' : artist.group !== 'adjacent');
    return matchesSearch && matchesFilter;
  })
})));
const shownCount = computed(() => groups.value.reduce((n, group) => n + group.artists.length, 0));
const totalCount = computed(() => (data.value?.groups || []).reduce((n,group) => n + group.artists.length,0));

function selectScene(nextScene) {
  if (nextScene !== 'ru' && nextScene !== 'world') return;
  scene.value = nextScene;
  props.catalog.setScene(nextScene);
  query.value = '';
  selectedFilter.value = 'all';
}
function profileFavoriteLabel(artist) {
  return 'Добавить в избранное: ' + artist.name;
}
</script>

<template>
  <div id="sb-artist-expanded" class="ahx-wrap" data-sb-vue-artists v-if="data">
    <div class="ahx-intro">
      <div class="gb-eyebrow">АКАДЕМИЯ SUNOBOOM · {{ genre.name }}</div>
      <h2>Исполнители и композиторы</h2>
      <p>{{ data.description }}</p>
    </div>
    <div class="ahx-toolbar" role="group" aria-label="Музыкальные сцены">
      <button type="button" data-vue-artist-scene="world" :aria-pressed="scene === 'world'"
        :class="{ on: scene === 'world' }" @click="selectScene('world')">
        🌍 Мировая сцена <span>{{ data.worldCount }}</span>
      </button>
      <button type="button" data-vue-artist-scene="ru" :aria-pressed="scene === 'ru'"
        :class="{ on: scene === 'ru' }" @click="selectScene('ru')">
        🎤 Русскоязычные <span>{{ data.ruCount }}</span>
      </button>
    </div>
    <template v-if="totalCount">
      <div class="ahx-filters">
        <label class="ahx-search">
          <span aria-hidden="true" v-html="genre.icons.overview"></span>
          <input v-model="query" type="search" data-vue-artist-search
            placeholder="Найти исполнителя или произведение…" aria-label="Поиск по исполнителям">
        </label>
        <div class="ahx-filter-buttons" role="group" aria-label="Фильтр исполнителей">
          <button v-for="item in [{id:'all',label:'Все'},{id:'main',label:'По жанру'},{id:'adjacent',label:'Смежные'}]"
            :key="item.id" type="button" :data-vue-artist-filter="item.id"
            :aria-pressed="selectedFilter === item.id" @click="selectedFilter = item.id">
            {{ item.label }}
          </button>
        </div>
      </div>
      <p id="ahx-count" class="ahx-count" aria-live="polite">Показано {{ shownCount }} из {{ totalCount }} исполнителей.</p>
      <section v-for="section in groups" v-show="section.artists.length" :key="section.index"
        class="ahx-section" data-ahx-section>
        <div class="ahx-section-head">
          <div>
            <span class="ahx-eyebrow">0{{ section.index+1 }} / ИСПОЛНИТЕЛИ</span>
            <h3>{{ section.index ? 'Современная сцена и продолжатели' : 'Классика и предшественники' }}</h3>
          </div>
          <span class="ahx-num">{{ section.artists.length }}</span>
        </div>
        <div class="ahx-grid">
          <article v-for="artist in section.artists" :key="artist.key"
            class="ahx-card" :data-ahx-group="artist.group">
            <div class="ahx-card-top">
              <span class="ahx-avatar" aria-hidden="true">{{ artist.initials }}</span>
              <div class="ahx-title">
                <h4>{{ artist.name }}</h4>
                <span class="ahx-era">{{ artist.period || 'Музыкальная сцена' }}</span>
              </div>
            </div>
            <span :class="['ahx-role', {'ahx-role-neighbor':artist.group==='adjacent'}]">{{ artist.label }}</span>
            <p>{{ artist.bio || 'Музыкальное направление и характерный творческий почерк.' }}</p>
            <div class="ahx-track" v-if="artist.track">
              <small>Ориентир для прослушивания</small><strong>♫ {{ artist.track }}</strong>
            </div>
            <div v-if="profiles" class="sb-ap-inline-actions">
              <button type="button" class="sb-ap-inline-open" data-sb-ap-action="profile" :data-name="artist.name" @click.stop="openProfile(artist,$event.currentTarget)">Полный профиль →</button>
              <button type="button" class="sb-ap-inline-star" data-sb-ap-action="favorite" :data-name="artist.name" :aria-label="profileFavoriteLabel(artist)" :aria-pressed="isFavorite(artist.name)" @click.stop="profiles.toggleFavorite(artist.name)">{{ isFavorite(artist.name) ? '★' : '☆' }}</button>
            </div>
          </article>
        </div>
      </section>
      <div id="ahx-no-results" class="ahx-no-results" v-show="shownCount === 0">
        По заданному поиску исполнители не найдены. Попробуй другой запрос или выбери «Все».
      </div>
    </template>
    <div v-else class="ahx-empty">
      <strong>Русскоязычная подборка ещё уточняется</strong>
      <p>Для этого узкого направления пока нет достаточно подтверждённых примеров. Мы не будем подставлять артистов из других жанров без пояснения.</p>
      <button class="btn ghost" type="button" @click="selectScene('world')">Посмотреть мировую сцену</button>
    </div>
    <p class="ahx-footnote">В подборках могут встречаться близкие стили, кино- и игровая музыка, инструментальные коллективы. Их связь с жанром поясняется в карточке. Указанные произведения — ориентиры для знакомства, а не ссылки на конкретные релизы.</p>
  </div>
</template>
