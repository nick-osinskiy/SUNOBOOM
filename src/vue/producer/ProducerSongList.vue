<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

// This component owns only presentation. All records, navigation and updates
// continue to be managed by producer-center.js and sunoboom-v1.
const props = defineProps({
  model: { type: Object, required: true }
});
const query = ref(props.model.query || '');
const normalize = value => String(value ?? '').normalize('NFKC').toLocaleLowerCase('ru');
const filtered = computed(() => {
  const term = normalize(query.value.trim());
  return props.model.records.filter(record => normalize(record.searchText).includes(term));
});
function onSearch(event) {
  query.value = String(event.detail?.query ?? '');
}
onMounted(() => window.addEventListener('sunoboom:producer-search', onSearch));
onUnmounted(() => window.removeEventListener('sunoboom:producer-search', onSearch));
</script>

<template>
  <button v-for="record in filtered" :key="record.id"
    type="button" :class="['sbpc-song', { active: record.id === model.selectedId }]"
    data-pc-action="open" :data-id="record.id"
    :aria-pressed="record.id === model.selectedId">
    <span class="sbpc-song-main">
      <strong>{{ record.title }}</strong>
      <span>{{ record.artist }}</span>
    </span>
    <span class="sbpc-song-meta">
      <b>{{ record.done }}/{{ record.total }}</b>
      <small>{{ record.nextLabel ? 'Следующий этап: ' + record.nextLabel : 'Все этапы отмечены готовыми' }}</small>
    </span>
    <span class="sbpc-tiny-progress"><i :style="{ width: record.percent + '%' }"></i></span>
  </button>
  <p v-if="!filtered.length" class="sbpc-empty">
    {{ model.hasRecords ? 'Поиск не дал результатов. Измени запрос или создай новую рабочую карточку.' : 'Пока нет рабочих карточек. Начни с первой песни выше.' }}
  </p>
</template>
