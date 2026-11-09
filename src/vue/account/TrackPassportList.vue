<script setup>
// UI only: source records, navigation, validation and persistence belong to index.html.
defineProps({ model: { type: Object, required: true } });
</script>

<template>
  <div class="sb-track-filters" role="group" aria-label="Фильтр паспортов по этапу">
    <button v-for="filter in model.filters" :key="filter.key" type="button"
      data-action="tp-filter" :data-filter="filter.key"
      :class="{ active: model.active === filter.key }"
      :aria-pressed="model.active === filter.key">
      {{ filter.label }}
    </button>
  </div>
  <div v-if="model.records.length" class="sb-track-list">
    <button v-for="track in model.records" :key="track.id" type="button"
      class="sb-track-tile" data-action="tp-open" :data-id="track.id">
      <span class="sb-track-note">♫</span>
      <span>
        <strong>{{ track.title }}</strong>
        <small>{{ track.artist }}</small>
        <small>{{ track.statusLabel }}{{ track.releaseLabel ? ' · ' + track.releaseLabel : '' }}</small>
      </span>
      <i aria-hidden="true">→</i>
    </button>
  </div>
  <div v-else class="sb-track-empty">
    {{ model.hasRecords ? 'В этой категории пока нет треков.' : 'Паспортов пока нет. Создай первый, чтобы объединить материалы песни.' }}
  </div>
</template>
