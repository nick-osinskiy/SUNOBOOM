<script setup>
import { computed, onMounted, onUnmounted, shallowRef } from 'vue';

const props = defineProps({ api: { type: Object, required: true } });
const snapshot = shallowRef(props.api.snapshot());
const picker = computed(() => snapshot.value?.picker || {
  selected: '', open: false, filter: 'all', query: '',
  genreCount: 0, groups: []
});
function sync() {
  const next = props.api.snapshot();
  if (next) snapshot.value = next;
}
onMounted(() => window.addEventListener('sunoboom:arranger-updated', sync));
onUnmounted(() => window.removeEventListener('sunoboom:arranger-updated', sync));
</script>

<template>
  <span class="sba-preset-caption">Шаблон композиции / жанр</span>
  <button type="button" id="sba-presets" class="sba-preset-trigger"
    data-sba-action="menu-toggle" aria-haspopup="dialog"
    :aria-expanded="picker.open" aria-controls="sba-preset-menu">
    <span id="sba-picked-label">{{ picker.selected }}</span>
    <span class="sba-preset-chevron" aria-hidden="true">⌄</span>
  </button>
  <div id="sba-preset-menu" class="sba-preset-menu" role="dialog"
    aria-label="Поиск шаблона или жанра" :hidden="!picker.open">
    <div class="sba-preset-search-row">
      <input type="search" id="sba-preset-search" autocomplete="off" :value="picker.query"
        placeholder="Найти жанр или шаблон..." aria-label="Поиск жанра">
      <button type="button" data-sba-action="menu-close" aria-label="Закрыть меню">×</button>
    </div>
    <div class="sba-preset-filters" role="group" aria-label="Тип вариантов">
      <button v-for="item in [
        { id: 'all', title: 'Все' },
        { id: 'templates', title: 'Шаблоны' },
        { id: 'genres', title: 'Жанры Академии (' + picker.genreCount + ')' }
      ]" :key="item.id" type="button"
        data-sba-action="menu-filter" :data-filter="item.id"
        :aria-pressed="picker.filter === item.id">{{ item.title }}</button>
    </div>
    <div id="sba-preset-results" class="sba-preset-results" role="listbox"
      aria-label="Доступные шаблоны и жанры">
      <template v-for="group in picker.groups" :key="group.title">
        <div class="sba-preset-group-title">
          {{ group.title }} <small v-if="group.count !== null">{{ group.count }}</small>
        </div>
        <button v-for="item in group.items" :key="item.key"
          type="button" role="option"
          :aria-selected="item.key === picker.selectedKey"
          data-sba-action="menu-choose" :data-choice="item.key">
          <span>{{ item.title }}</span>
          <small>{{ item.subtitle }}</small>
        </button>
      </template>
      <p v-if="!picker.groups.length" class="sba-preset-no-results">
        Ничего не найдено. Попробуй другое название или направление.
      </p>
    </div>
  </div>
</template>
