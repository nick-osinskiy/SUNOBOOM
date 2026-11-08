<script setup>
import { onBeforeUnmount, onMounted, nextTick, ref } from 'vue';

const props = defineProps({ api: { type: Object, required: true } });
const model = ref(props.api.snapshot() || { items: [], total: 0 });
function refresh() {
  const snapshot = props.api.snapshot();
  if (!snapshot) return;
  model.value = snapshot;
  // Local IndexedDB covers are resolved by the original media reader.
  void nextTick(() => props.api.hydrateCovers());
}
onMounted(() => {
  window.addEventListener('sunoboom:songs-search', refresh);
  void nextTick(() => props.api.hydrateCovers());
});
onBeforeUnmount(() => window.removeEventListener('sunoboom:songs-search', refresh));
</script>

<template>
  <div v-if="model.items.length" class="sbsong-grid">
    <article v-for="song in model.items" :key="song.id" class="sbsong-card">
      <button type="button" class="sbsong-art-button" data-sbsong-action="open" :data-id="song.id"
        :aria-label="'Открыть ' + song.title">
        <img v-if="song.hasCover" alt="" :data-sbsong-cover="song.id" loading="lazy">
        <img v-else-if="song.coverUrl" alt="" :src="song.coverUrl" style="display:block" loading="lazy">
        <span class="sbsong-no-cover" aria-hidden="true">♫</span>
      </button>
      <div class="sbsong-card-text">
        <small>{{ song.genre }}</small>
        <h3>{{ song.title }}</h3>
        <p>{{ song.artist }}</p>
        <div class="sbsong-card-flags"><span>{{ song.status }}</span></div>
        <div class="sbsong-card-actions">
          <button type="button" data-sbsong-action="open" :data-id="song.id">Открыть</button>
          <button type="button" data-sbsong-action="edit" :data-id="song.id">Изменить</button>
          <button type="button" data-sbsong-action="share" :data-id="song.id">Поделиться</button>
        </div>
      </div>
    </article>
  </div>
  <div v-else class="sbsong-empty">{{ model.total ? 'По этому запросу песен нет.' : 'Песен пока нет. Добавь первую карточку и загрузи аудиофайл.' }}</div>
</template>
