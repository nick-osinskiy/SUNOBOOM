<script setup>
import { reactive, watch } from 'vue';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';
const props = defineProps({ initial: { type: Object, required: true } });
const fields = reactive({ ...props.initial.values });
const ui = useLegacyUiStore();
watch(() => [fields.title, fields.genre, fields.text, fields.hook], () =>
  ui.publishIdeaDraftSummary(fields), { immediate:true });
</script>

<template>
  <div class="field"><label for="custom-idea-title">Название песни</label><input id="custom-idea-title" v-model="fields.title" maxlength="100" placeholder="Например, Город на ладони"></div>
  <div class="field"><label for="custom-idea-genre">Музыкальный жанр</label><select id="custom-idea-genre" v-model="fields.genre"><option v-for="genre in initial.genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option></select></div>
  <div class="field"><label for="custom-idea-text">Сюжет и основная идея</label><textarea id="custom-idea-text" v-model="fields.text" rows="5" maxlength="3000" placeholder="О чём песня и что происходит с героем?"></textarea></div>
  <p class="sub" data-sb-vue-idea-draft-progress>Сюжет: {{ ui.ideaDraftSummary.ideaLength }} / 3000 · Название: {{ ui.ideaDraftSummary.titleLength }} / 100</p>
  <p v-if="ui.promptDraftSummary.ready" class="sub" data-sb-vue-last-prompt-draft>Последний открытый черновик промпта: {{ ui.promptDraftSummary.textLength }} / 1000 символов</p>
  <div class="field"><label for="custom-idea-hook">Фраза для припева (необязательно)</label><input id="custom-idea-hook" v-model="fields.hook" maxlength="240" placeholder="Запоминающаяся строчка"></div>
</template>
