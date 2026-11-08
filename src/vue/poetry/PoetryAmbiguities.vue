<script setup>
import { computed, onMounted, onUnmounted, shallowRef } from 'vue';

const props = defineProps({ api: { type: Object, required: true } });
const snapshot = shallowRef(props.api.ambiguities());
const choices = computed(() => snapshot.value || { count: 0, words: [], total: 0 });
function sync() { snapshot.value = props.api.ambiguities(); }
onMounted(() => window.addEventListener('sunoboom:poetry-stress-updated', sync));
onUnmounted(() => window.removeEventListener('sunoboom:poetry-stress-updated', sync));
</script>

<template>
  <p v-if="!choices.count" class="sb-stress-ambig-clear">
    ✓ Все найденные неоднозначные слова проверены.
  </p>
  <template v-else>
    <div class="sb-stress-ambig-heading">
      🔴 Требуют проверки: {{ choices.count }} вхождений ({{ choices.total }} разных слов).
      Нажми нужный вариант для каждого вхождения.
    </div>
    <div v-for="item in choices.words" :key="item.key" class="sb-stress-ambig-choice">
      <strong>{{ item.key }}{{ item.count > 1 ? ' ×' + item.count : '' }}</strong>
      <div class="sb-stress-ambig-variants">
        <button v-for="variant in item.variants" :key="variant" type="button"
          data-action="sb-poetry-stress-choice" :data-word="item.key"
          :data-variant="variant" title="Указать ударение для следующего вхождения">
          {{ variant }}
        </button>
      </div>
    </div>
    <p v-if="choices.total > 30" class="sb-poetry-small">
      Показаны первые 30 разных слов; другие можно исправить вручную.
    </p>
  </template>
</template>
