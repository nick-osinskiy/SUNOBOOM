<script setup>
import { computed, ref } from 'vue';

const props = defineProps({ model: { type: Object, required: true } });
const query = ref(props.model.filter || '');
const normalize = value => String(value || '').normalize('NFKC').toLocaleLowerCase('ru');
const filteredArtists = computed(() => props.model.artists.filter(a =>
  normalize(a.name).includes(normalize(query.value))));
</script>

<template>
  <section id="sbsong-artist-manager" class="sbsong-artist-manager" data-sb-vue-artist-manager>
    <div class="sbsong-subhead">
      <h2>Мои артисты</h2>
      <button type="button" data-sbsong-action="artists-manage">Закрыть ×</button>
    </div>
    <p>Создавай свой список исполнителей и музыкальных проектов. Артисты из «ДНК артиста»
      и сохранённых песен также доступны при выборе. Удаление из списка не меняет существующие песни.</p>
    <p v-if="model.dnaCount" class="sbsong-artist-hint">
      Профилей ДНК артиста доступно для выбора: {{ model.dnaCount }}.
      Они не удаляются при изменении этого списка.
    </p>
    <div class="sbsong-artist-manager-new">
      <input id="sbsong-artist-manager-add" type="text" maxlength="120"
        placeholder="Имя артиста или проекта" aria-label="Новый артист">
      <button type="button" class="sbsong-main-btn" data-sbsong-action="artist-manager-add">
        + Добавить артиста
      </button>
    </div>
    <input v-model="query" id="sbsong-artist-manager-filter" type="search"
      placeholder="Фильтр по имени…" aria-label="Фильтр моих артистов">
    <div id="sbsong-artist-manager-results">
      <div v-for="artist in filteredArtists" :key="artist.id" class="sbsong-artist-entry">
        <span>{{ artist.name }}</span>
        <button type="button" data-sbsong-action="artist-remove" :data-id="artist.id"
          :aria-label="'Удалить артиста ' + artist.name">Удалить</button>
      </div>
      <p v-if="!filteredArtists.length" class="sbsong-artist-hint">
        {{ model.artists.length ? 'Ничего не найдено.' : 'Пока нет добавленных вручную артистов.' }}
      </p>
    </div>
  </section>
</template>
