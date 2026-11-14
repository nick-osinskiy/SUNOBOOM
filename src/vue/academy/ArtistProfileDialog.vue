<script setup>
import { nextTick, onMounted, onUnmounted, ref, shallowRef } from 'vue';
const props = defineProps({ api: { type: Object, required: true } });
const model = shallowRef(props.api.profileSnapshot());
const close = ref(null);
const focusClose = () => nextTick(() => close.value?.focus());
const unsubscribe = props.api.subscribe(() => {
  const previous = model.value?.key;
  model.value = props.api.profileSnapshot();
  if (model.value && previous !== model.value.key) focusClose();
});
onMounted(focusClose);
onUnmounted(unsubscribe);
</script>

<template>
  <template v-if="model">
    <div class="sb-ap-dialog-title"><span>🎙️ Профиль исполнителя</span><button ref="close" type="button" data-sb-ap-action="close" class="sb-ap-close" aria-label="Закрыть профиль" @click.stop="api.closeProfile()">×</button></div>
    <div class="sb-ap-profile-hero"><div class="sb-ap-profile-logo">{{ model.initials }}</div><div><span class="sb-ap-overline">{{ model.scene }}</span><h2 id="sb-ap-dialog-heading">{{ model.name }}</h2><p>{{ model.editorial ? 'Редакционная справка SUNOBOOM' : 'Сведения из карточек Академии' }}</p></div></div>
    <div class="sb-ap-profile-fields">
      <section><small>{{ model.exactYears ? 'Годы активности' : 'Период в подборке' }}</small><strong>{{ model.period }}</strong></section>
      <section><small>Направлений в Академии</small><strong>{{ model.genres.length }}</strong></section>
      <section><small>Ориентиры для прослушивания</small><strong>{{ model.songs.length }}</strong></section>
    </div>
    <div class="sb-ap-profile-section"><h3>Биография и творческий путь</h3><p>{{ model.biography }}</p></div>
    <div class="sb-ap-profile-section"><h3>Особенности звучания</h3><p>{{ model.sound }}</p><p v-if="!model.editorial" class="sb-ap-fine">Описание относится к музыкальному направлению и не является подтверждённым персональным анализом артиста.</p></div>
    <div class="sb-ap-profile-section">
      <h3>{{ model.editorial ? 'Музыкальные влияния и стилистика' : 'Истоки музыкального направления' }}</h3>
      <div v-if="model.roots.length" class="sb-ap-pills"><span v-for="root in model.roots" :key="root">{{ root }}</span></div>
      <p v-else class="sb-ap-muted">Персональные музыкальные влияния ещё не документированы в этой карточке.</p>
      <p v-if="!model.editorial && model.roots.length" class="sb-ap-fine">Это контекст жанра, а не утверждение о личных влияниях музыканта.</p>
    </div>
    <div class="sb-ap-profile-section"><h3>Произведения для знакомства</h3><ul v-if="model.songs.length" class="sb-ap-songs"><li v-for="song in model.songs.slice(0,10)" :key="song">♫ {{ song }}</li></ul><p v-else class="sb-ap-muted">Список произведений пока не заполнен.</p></div>
    <div class="sb-ap-profile-section"><h3>Жанры и связанные подборки</h3><div v-if="model.genres.length" class="sb-ap-related"><button v-for="genre in model.genres.slice(0,15)" :key="genre.id" type="button" data-sb-ap-action="genre" :data-genre="genre.id" @click.stop="api.openGenre(genre.id)">{{ genre.name }} →</button></div><p v-else class="sb-ap-muted">Жанровые ссылки пока не добавлены.</p></div>
    <div class="sb-ap-profile-buttons">
      <button type="button" data-sb-ap-action="favorite" :data-name="model.name" :aria-pressed="model.favorite" class="sb-ap-fav-main" @click.stop="api.toggleFavorite(model.name)">{{ model.favorite ? '★ В избранном' : '☆ Сохранить в избранное' }}</button>
      <button type="button" data-sb-ap-action="copy" :data-name="model.name" class="sb-ap-copy" @click.stop="api.copy(model.name)">Скопировать справку</button>
    </div>
    <p class="sb-ap-fine">Профиль не связан с отдельной функцией «ДНК артиста». Это справочный материал Академии, не личный творческий проект пользователя.</p>
  </template>
</template>
