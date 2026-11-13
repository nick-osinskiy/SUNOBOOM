<script setup>
import { reactive } from 'vue';
const props = defineProps({ initial: { type: Object, required: true } });
// Draft fields only; validation, persistence and selection stay in legacy actions.
const draft = reactive({ ...props.initial.values });
</script>

<template>
  <h3>Новый проект</h3>
  <div class="field"><label for="p-title">Название</label><input id="p-title" v-model="draft.title" placeholder="Например, дебютный EP"></div>
  <div class="field"><label for="p-genre">Основной жанр</label><select id="p-genre" v-model="draft.genre">
    <option v-for="genre in initial.genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
  </select></div>
  <button type="button" class="btn primary" data-action="create-project"><span style="display:contents" aria-hidden="true" v-html="initial.plusIcon"></span> Создать проект</button>
</template>
