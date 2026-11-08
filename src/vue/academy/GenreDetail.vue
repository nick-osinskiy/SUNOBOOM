<script setup>
import { nextTick, ref } from 'vue';
import GenreOverview from './GenreOverview.vue';
import GenreArtists from './GenreArtists.vue';

const props = defineProps({
  genre: { type: Object, required: true },
  tabContent: { type: Function, required: true },
  artistCatalog: { type: Object, default: null },
  enhanceArtistProfiles: { type: Function, default: null }
});

const tabs = [
  { id: 'overview', label: 'Обзор' },
  { id: 'ideas', label: 'Идеи песен' },
  { id: 'prompts', label: 'Промпты Suno' },
  { id: 'artists', label: 'Исполнители' }
];
const activeTab = ref(props.genre.tab);
const contentHtml = ref(props.tabContent(props.genre.id, activeTab.value) || '');

async function chooseTab(tab) {
  if (activeTab.value === tab || !tabs.some(item => item.id === tab)) return;
  const content = props.tabContent(props.genre.id, tab);
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
  <div class="genre-bright" :style="{ '--accent': genre.color }">
    <div class="gb-hero">
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
          :genre="genre" :catalog="artistCatalog" :enhance-profiles="enhanceArtistProfiles" />
        <!-- The song ideas and Suno prompt editors remain fully compatible with
             their established trusted HTML generators and delegated actions. -->
        <div v-else v-html="contentHtml"></div>
      </section>
    </div>
  </div>
</template>
