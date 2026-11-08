<script setup>
import { computed, reactive } from 'vue';

const props = defineProps({
  initial: { type: Object, required: true }
});
const fields = reactive({ ...props.initial.values });
const length = computed(() => fields.text.length);
</script>

<template>
  <h3>{{ initial.editing ? 'Редактирование промпта' : 'Новый промпт для Suno' }}</h3>
  <div class="field">
    <label for="custom-prompt-title">Название</label>
    <input id="custom-prompt-title" v-model="fields.title" maxlength="100"
      placeholder="Например, Романтичный афро-поп">
  </div>
  <div class="field">
    <label for="custom-prompt-genre">Жанр</label>
    <select id="custom-prompt-genre" v-model="fields.genre">
      <option v-for="genre in initial.genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
    </select>
  </div>
  <div class="field">
    <label for="custom-prompt-text">Текст промпта (до 1000 символов)</label>
    <textarea id="custom-prompt-text" v-model="fields.text" rows="7" maxlength="1000"
      aria-describedby="sb-prompt-char-count"
      placeholder="Modern Russian-language afropop, 105 BPM, clean vocals, groovy bass..."></textarea>
    <span id="sb-prompt-char-count" class="sub">{{ length }} / 1000 символов</span>
  </div>
</template>
