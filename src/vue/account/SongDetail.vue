<script setup>
import { nextTick, onMounted } from 'vue';
import SongVersions from './SongVersions.vue';

const props = defineProps({ model: { type: Object, required: true }, api: { type: Object, required: true } });

// The original media loader must run AFTER Vue replaces the fallback markup.
// It resolves cover/audio blobs by their established IndexedDB keys and also
// initializes the two independent A/B players when comparison is expanded.
onMounted(() => {
  void nextTick(() => props.api.hydrateMedia());
});
</script>

<template>
  <section class="sbsong-detail">
    <div class="sbsong-subhead">
      <h2>{{ model.title }}</h2>
      <button type="button" data-sbsong-action="close-detail">Закрыть ×</button>
    </div>
    <div class="sbsong-detail-layout">
      <div class="sbsong-detail-cover">
        <img v-if="model.hasCover" :data-sbsong-cover="model.id" :alt="'Обложка песни ' + model.title">
        <img v-else-if="model.coverUrl" :src="model.coverUrl" :alt="'Обложка песни ' + model.title" style="display:block">
        <span v-else class="sbsong-no-cover" aria-hidden="true">♫</span>
      </div>
      <div>
        <p class="sbsong-detail-artist">{{ model.artist }}</p>
        <p class="sbsong-detail-tags">
          <span v-if="model.genre">{{ model.genre }}</span>
          <span v-if="model.album">{{ model.album }}</span>
        </p>
        <p v-if="model.description" class="sbsong-detail-description">{{ model.description }}</p>
        <div class="sbsong-audio-box" id="sbsong-audio-box">
          <audio v-if="model.hasPlayableAudio" controls preload="metadata" id="sbsong-audio-player"></audio>
          <p v-else>Аудио ещё не добавлено. Добавь первую версию в этой карточке.</p>
        </div>
        <!-- Vue owns the whole take manager UI; the original data and action
             handlers continue to control local files, A/B and persistence. -->
        <SongVersions
          :song-id="model.id"
          :versions="model.versions"
          :playing-label="model.playingLabel"
          :compare-open="model.compareOpen"
          :compare-a-id="model.compareAId"
          :compare-b-id="model.compareBId"
        />
        <div class="sbsong-detail-actions">
          <button type="button" class="sbsong-main-btn" data-sbsong-action="share" :data-id="model.id">🔗 Поделиться ссылкой</button>
          <button v-if="model.hasAudio" type="button" data-sbsong-action="share-file" :data-id="model.id">Отправить аудиофайл</button>
          <a v-if="model.listenUrl" :href="model.listenUrl" target="_blank" rel="noopener noreferrer">Открыть публичную запись ↗</a>
          <button type="button" data-sbsong-action="producer" :data-id="model.id">🎛 Мастер</button>
          <button type="button" data-sbsong-action="edit" :data-id="model.id">Изменить</button>
          <button type="button" class="sbsong-danger" data-sbsong-action="delete" :data-id="model.id">Удалить</button>
        </div>
        <div v-if="model.confirmDelete" class="sbsong-delete-confirm">
          <strong>Удалить карточку вместе с локальными файлами?</strong>
          <button type="button" data-sbsong-action="delete-confirm" :data-id="model.id">Да, удалить</button>
          <button type="button" data-sbsong-action="delete-cancel">Отмена</button>
        </div>
      </div>
    </div>
  </section>
</template>
