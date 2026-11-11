<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';
const props = defineProps({ initial: { type: Object, required: true }, api: { type: Object, required: true } });
const area = ref(null);
const ui = useLegacyUiStore();
const publish = () => {
  if (area.value) ui.publishPoetrySourceSummary(area.value.value);
};
// The original setRangeText() accent action does not fire input.
// Observe that existing button after the delegated native handler runs.
const onNativeAccent = event => {
  if (event.target.closest?.('[data-action="sb-poetry-accent"]')) publish();
};
// The native textarea remains authoritative for caret operations, setRangeText
// and the existing stress mirror. No reactive patch can replace those edits.
onMounted(() => {
  if (props.initial.highlighted) props.api.enableHighlight(area.value);
  publish();
  document.addEventListener('click', onNativeAccent);
});
onBeforeUnmount(() => document.removeEventListener('click', onNativeAccent));
</script>

<template>
  <label for="custom-idea-lyrics">Оригинальный текст (необязательно)</label>
  <textarea id="custom-idea-lyrics" ref="area" :value="initial.values.lyrics" @input="publish" rows="12" maxlength="20000" placeholder="Куплет 1:&#10;Текст первого куплета...&#10;&#10;Припев:&#10;Текст припева..."></textarea>
  <p v-if="ui.poetrySourceSummary.ready" class="sub" data-sb-vue-poetry-source-count>
    Исходный текст: {{ ui.poetrySourceSummary.charCount }} / 20000 символов · {{ ui.poetrySourceSummary.lineCount }} непустых строк
  </p>
</template>
