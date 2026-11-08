<script setup>
import { computed, onMounted, onUnmounted, shallowRef } from 'vue';

const props = defineProps({ api: { type: Object, required: true } });
const snapshot = shallowRef(props.api.analysis());
const report = computed(() => snapshot.value || { analyzed: false, message: '' });
function sync() {
  const next = props.api.analysis();
  if (next) snapshot.value = next;
}
onMounted(() => window.addEventListener('sunoboom:poetry-updated', sync));
onUnmounted(() => window.removeEventListener('sunoboom:poetry-updated', sync));
</script>

<template>
  <p v-if="!report.analyzed" class="sb-poetry-empty">{{ report.message }}</p>
  <template v-else>
    <div class="sb-poetry-stats">
      <div v-for="stat in report.stats" :key="stat.label" class="sb-poetry-stat">
        <strong>{{ stat.value }}</strong><span>{{ stat.label }}</span>
      </div>
    </div>
    <p class="sb-poetry-subline">
      Диапазон: {{ report.lower }}–{{ report.upper }} слогов на строку · меток ударения:
      {{ report.markedStress }}.
    </p>
    <div class="sb-poetry-sections">
      <h4>Строфы и предполагаемая рифмовка</h4>
      <div class="sb-poetry-stanzas">
        <div v-for="block in report.stanzas" :key="block.id" class="sb-poetry-stanza">
          <div class="sb-poetry-stanza-name">{{ block.section }} · строфа {{ block.position }}</div>
          <div class="sb-poetry-stanza-data">
            Схема {{ block.scheme }} <span>·</span> разброс {{ block.spread }} сл.
          </div>
        </div>
      </div>
    </div>
    <div class="sb-poetry-lines-head">
      <strong>Построчный анализ</strong><span>Слоги · рифма</span>
    </div>
    <div class="sb-poetry-lines">
      <div v-for="line in report.lines" :key="line.number" class="sb-poetry-line">
        <div class="sb-poetry-line-main">
          <span class="sb-poetry-index">{{ line.number }}.</span>
          <span class="sb-poetry-verse">{{ line.text }}</span>
        </div>
        <div class="sb-poetry-syllable" title="Оценка слогов">
          <span>{{ line.syllables }} сл.</span><i :style="{ width: line.width + '%' }"></i>
        </div>
        <span class="sb-poetry-letter" :class="{ 'sb-poetry-letter-match': line.rhyme }"
          :title="line.repeat ? 'Совпадение последнего слова' :
            line.rhyme ? 'Предполагаемая рифма' : 'Метка окончания'">
          {{ line.mark }}
        </span>
      </div>
    </div>
    <p v-if="report.rowCount > 120" class="sb-poetry-footnote">
      Показаны первые 120 строк из {{ report.rowCount }};
      статистика рассчитана по всему тексту.
    </p>
    <div v-if="report.frequent.length" class="sb-poetry-words">
      <strong>Повторяющиеся слова:</strong>
      <span v-for="entry in report.frequent" :key="entry.word">
        {{ entry.word }} · {{ entry.count }}
      </span>
    </div>
    <div class="sb-poetry-tips">
      <h4>На что обратить внимание</h4>
      <ul><li v-for="(tip, i) in report.suggestions" :key="i">{{ tip }}</li></ul>
    </div>
    <p class="sb-poetry-footnote">
      Анализ ориентировочный: счёт гласных не равен точной метрической скансии,
      совпадение окончаний не гарантирует рифму, а вокальная удобность зависит
      от темпа и мелодии. Исходный текст автоматически не изменяется.
    </p>
  </template>
</template>
