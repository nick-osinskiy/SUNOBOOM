<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps({ initial: { type: Object, required: true }, api: { type: Object, required: true } });
const area = ref(null);
// The native textarea remains authoritative for caret operations, setRangeText
// and the existing stress mirror. No reactive patch can replace those edits.
onMounted(() => {
  if (props.initial.highlighted) props.api.enableHighlight(area.value);
});
</script>

<template>
  <label for="custom-idea-lyrics">Оригинальный текст (необязательно)</label>
  <textarea id="custom-idea-lyrics" ref="area" :value="initial.values.lyrics" rows="12" maxlength="20000" placeholder="Куплет 1:&#10;Текст первого куплета...&#10;&#10;Припев:&#10;Текст припева..."></textarea>
</template>
