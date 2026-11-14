<script setup>
import { onUnmounted, shallowRef } from 'vue';

const props = defineProps({ api: { type: Object, required: true } });
const model = shallowRef(props.api.hubSnapshot());
const unsubscribe = props.api.subscribe(() => { model.value = props.api.hubSnapshot(); });
onUnmounted(unsubscribe);
</script>

<template>
  <details id="sb-ap-hub" class="sb-ap-hub" data-sb-vue-profile-hub :open="model.open"
    @toggle="api.setOpen($event.currentTarget.open)">
    <summary><span class="sb-ap-sym">🎙️</span><span><strong>Профили исполнителей</strong><small>Мировая и русскоязычная сцены SUNOBOOM</small></span><span class="sb-ap-chevron">⌄</span></summary>
    <div id="sb-ap-hub-content" v-if="model.open">
      <div class="sb-ap-heading"><div><span class="sb-ap-overline">SUNOBOOM · МУЗЫКАЛЬНАЯ АКАДЕМИЯ</span><h2>Энциклопедия исполнителей</h2><p>Все существующие подборки артистов собраны в единый указатель. Профиль показывает сведения из Академии, а для отдельных исполнителей — расширенную редакционную справку.</p></div><div class="sb-ap-total">{{ model.total }} имён в базе</div></div>
      <div class="sb-ap-tools">
        <label>Поиск по имени или жанру<input id="sb-ap-search" type="search" placeholder="Например: Distemper или поп" autocomplete="off" :value="model.query" @input.stop="api.filter({query:$event.target.value})"></label>
        <label>Подборка<select id="sb-ap-locale" :value="model.locale" @change.stop="api.filter({locale:$event.target.value})"><option value="all">Все сцены</option><option value="ru">Русскоязычная сцена</option><option value="world">Мировая сцена</option></select></label>
        <label class="sb-ap-check"><input id="sb-ap-saved-only" type="checkbox" :checked="model.savedOnly" @change.stop="api.filter({savedOnly:$event.target.checked})"> Только избранные</label>
      </div>
      <p id="sb-ap-count" class="sb-ap-count" aria-live="polite">Найдено {{ model.count }} исполнителей · в избранном {{ model.favorites }}</p>
      <div id="sb-ap-results" class="sb-ap-index-grid">
        <article v-for="artist in model.artists" :key="artist.key" class="sb-ap-index-card">
          <div class="sb-ap-index-title"><span class="sb-ap-avatar">{{ artist.initials }}</span><div><strong>{{ artist.name }}</strong><small>{{ artist.scene }}</small></div></div>
          <p>{{ artist.overview }}</p><div class="sb-ap-chips"><span v-for="genre in artist.genres" :key="genre">{{ genre }}</span></div>
          <div class="sb-ap-card-actions">
            <button type="button" data-sb-ap-action="profile" :data-name="artist.name" @click.stop="api.openProfile(artist.name,null,$event.currentTarget)">Открыть профиль</button>
            <button type="button" data-sb-ap-action="favorite" :data-name="artist.name" :aria-pressed="artist.favorite" title="Сохранить профиль" :aria-label="'Сохранить профиль '+artist.name" @click.stop="api.toggleFavorite(artist.name)">{{ artist.favorite ? '★' : '☆' }}</button>
          </div>
        </article>
        <div v-if="!model.artists.length" class="sb-ap-empty">По этому запросу исполнители не найдены. Попробуй другое название или отключи фильтры.</div>
      </div>
      <button type="button" id="sb-ap-more" class="sb-ap-more" data-sb-ap-action="more" :hidden="!model.remaining" @click.stop="api.more()">Показать ещё · {{ model.remaining }}</button>
      <p class="sb-ap-disclaimer">Периоды в исходных карточках ориентировочные. Присутствие в подборке жанра не обязательно означает, что это единственное направление или прямое влияние на исполнителя.</p>
    </div>
  </details>
</template>
