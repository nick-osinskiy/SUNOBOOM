<script setup>
import { onBeforeUnmount, ref } from 'vue';
defineProps({ model: { type: Object, required: true } });
const audio = ref(null);
onBeforeUnmount(() => {
  // A replaced shared card must not keep playing or fetching detached media.
  if (audio.value) {
    audio.value.pause();
    audio.value.removeAttribute('src');
    audio.value.load();
  }
});
</script>

<template>
  <header class="sbsong-hero"><span class="sbsong-eyebrow">SUNOBOOM · КАРТОЧКА ПЕСНИ</span><h1>{{ model.song?.title || 'Карточка недоступна' }}</h1><p>{{ model.song?.artist || '' }}</p></header>
  <div v-if="model.song" class="sbsong-public-card">
    <img v-if="model.song.coverUrl" class="sbsong-public-art" style="object-fit:cover;width:100%;max-width:300px" alt="Обложка" :src="model.song.coverUrl">
    <div v-else class="sbsong-public-art">♫</div>
    <p class="sbsong-detail-tags"><span v-if="model.song.genre">{{ model.song.genre }}</span><span v-if="model.song.album">{{ model.song.album }}</span></p>
    <p v-if="model.song.description" class="sbsong-detail-description">{{ model.song.description }}</p>
    <audio v-if="model.song.audioUrl" ref="audio" controls preload="metadata" :src="model.song.audioUrl"></audio>
    <p v-if="model.song.listenUrl"><a :href="model.song.listenUrl" target="_blank" rel="noopener noreferrer">Послушать песню на внешнем сайте ↗</a></p>
    <p v-if="!model.song.audioUrl && !model.song.listenUrl" class="sbsong-public-notice">В этой ссылке есть информация о песне, но нет аудиозаписи. Автор может отправить MP3 отдельно.</p>
  </div>
  <p v-else class="sbsong-empty">Ссылка повреждена или карточка не найдена.</p>
  <button type="button" class="sbsong-main-btn" data-sbsong-action="shared-home">Открыть SUNOBOOM</button>
  <p class="sbsong-public-notice">Ссылка открывает выбранные автором сведения. Карточка не требует входа, поэтому её сможет посмотреть любой получатель ссылки.</p>
</template>
