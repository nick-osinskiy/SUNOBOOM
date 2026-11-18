<script setup>
import { nextTick, ref, watch } from 'vue';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';
import GenreOverview from './GenreOverview.vue';
import GenreArtists from './GenreArtists.vue';
import GenreIdeas from './GenreIdeas.vue';
import GenrePrompts from './GenrePrompts.vue';

const props = defineProps({
  genre: { type: Object, required: true },
  tabContent: { type: Function, required: true },
  selectTab: { type: Function, default: null },
  artistCatalog: { type: Object, default: null },
  artistProfiles: { type: Object, default: null }
});

const tabs = [
  { id: 'overview', label: 'Обзор' },
  { id: 'ideas', label: 'Идеи песен' },
  { id: 'prompts', label: 'Промпты Suno' },
  { id: 'artists', label: 'Исполнители' }
];
const ui = useLegacyUiStore();
const activeTab = ref(props.genre.tab);
watch(activeTab, tab => ui.publishAcademyFocus(props.genre.id, tab), { immediate:true });
const legacyContent = tab => !props.selectTab || (tab==='artists'&&!props.artistCatalog) ? props.tabContent(props.genre.id,tab) : '';
const contentHtml = ref(legacyContent(activeTab.value) || '');

async function chooseTab(tab) {
  if (activeTab.value === tab || !tabs.some(item => item.id === tab)) return;
  if(props.selectTab&&!props.selectTab(props.genre.id,tab))return;
  const content = legacyContent(tab);
  if (typeof content !== 'string') return;
  activeTab.value = tab;
  contentHtml.value = content;
  await nextTick();
  if (window.innerWidth <= 850) {
    document.getElementById('genre-nav-content')?.scrollIntoView({
      block: 'start', behavior: 'smooth'
    });
  }
}
</script>

<template>
  <div class="genre-bright" :class="['alternative-rock', 'indie-rock', 'grunge', 'punk-rock', 'progressive-rock', 'pop-rock', 'hard-rock', 'folk-rock', 'rock-and-roll', 'folk-russian', 'folk-kazakh', 'folk-belarusian', 'folk-modern', 'folk-pop', 'folk-electro', 'folk-nordic', 'orthodox-devotional'].includes(genre.id) ? 'genre-bright--' + genre.id : null" :style="{ '--accent': genre.color }">
    <div class="gb-hero" :class="['alternative-rock', 'indie-rock', 'grunge', 'punk-rock', 'progressive-rock', 'pop-rock', 'hard-rock', 'folk-rock', 'rock-and-roll', 'folk-russian', 'folk-kazakh', 'folk-belarusian', 'folk-modern', 'folk-pop', 'folk-electro', 'folk-nordic', 'orthodox-devotional'].includes(genre.id) ? 'gb-hero--poster gb-hero--' + genre.id : null">
      <div class="gb-top">
        <button type="button" class="back" data-action="academy-back"
          aria-label="Назад к разделу Академии">← Назад</button>
        <small>SUNOBOOM · MUSIC ATLAS</small>
      </div>
      <div class="gb-content">
        <div>
          <div class="gb-eyebrow">{{ genre.family }} · {{ genre.era }}</div>
          <h1 class="gb-title">{{ genre.name }}</h1>
          <p class="gb-desc">{{ genre.description }}</p>
          <div class="gb-tags">
            <span>{{ genre.tagline }}</span>
            <span>{{ genre.bpm[0] }}–{{ genre.bpm[1] }} BPM</span>
            <span>{{ genre.ideasCount }} идеи</span>
          </div>
          <div class="gb-buttons">
            <button type="button" class="btn primary" data-action="use-genre" :data-id="genre.id">
              <span v-html="genre.icons.studio" aria-hidden="true"></span> Создать в Suno
            </button>
            <button type="button" class="btn ghost" data-action="favorite" :data-id="genre.id">
              <span v-html="genre.icons.heart" aria-hidden="true"></span>
              {{ genre.favorite ? 'В избранном' : 'В избранное' }}
            </button>
          </div>
        </div>
        <div class="gb-vinyl" aria-hidden="true">
          <div class="gb-equalizer"><i v-for="n in 9" :key="n"></i></div>
        </div>
      </div>
      <div class="gb-facts">
        <div class="gb-fact"><small>История</small><strong>{{ genre.era }}</strong></div>
        <div class="gb-fact"><small>Темп</small><strong>{{ genre.bpm[0] }}–{{ genre.bpm[1] }} BPM</strong></div>
        <div class="gb-fact"><small>Треки</small><strong>{{ genre.ideasCount }} сюжетных идеи</strong></div>
        <div class="gb-fact"><small>Артисты</small><strong>{{ genre.artistCount }} ориентиров</strong></div>
      </div>
    </div>

    <div class="genre-detail-layout">
      <aside class="genre-side-nav" aria-label="ЖАНР-НАВ — меню жанра">
        <div class="genre-side-head"><span>ЖАНР-НАВ</span><small>Разделы карточки</small></div>
        <nav class="genre-side-links" aria-label="Разделы жанра">
          <button v-for="tab in tabs" :key="tab.id" type="button"
            :class="['genre-side-item', { active: activeTab === tab.id }]"
            :data-tab="tab.id" aria-controls="genre-nav-content"
            :aria-current="activeTab === tab.id ? 'page' : 'false'"
            @click="chooseTab(tab.id)">
            <span class="genre-side-icon" v-html="genre.icons[tab.id]" aria-hidden="true"></span>
            <span>{{ tab.label }}</span>
            <span class="genre-side-chevron" aria-hidden="true">›</span>
          </button>
        </nav>
      </aside>
      <section class="genre-detail-content" id="genre-nav-content" aria-label="Содержимое раздела жанра">
        <GenreOverview v-if="activeTab === 'overview'" :genre="genre" @select-tab="chooseTab" />
        <GenreArtists v-else-if="activeTab === 'artists' && artistCatalog"
          :genre="genre" :catalog="artistCatalog" :profiles="artistProfiles" />
        <GenreIdeas v-else-if="activeTab === 'ideas'" :genre="genre" />
        <GenrePrompts v-else-if="activeTab === 'prompts'" :genre="genre" />
        <!-- Legacy HTML output is retained only as a defensive fallback for
             an unavailable extension; all four core tabs use Vue components. -->
        <div v-else v-html="contentHtml"></div>
      </section>
    </div>
  </div>
</template>
