<script setup>
import { reactive } from 'vue';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';
const props = defineProps({ initial: { type: Object, required: true } });
const fields = reactive({ ...props.initial.values });
const switches = reactive({ ...props.initial.switches });
const ui = useLegacyUiStore();
const tagModeLabel = {smart:'Smart',rules:'По правилам',manual:'Ручной'};
const presets = [['power', 'Сильный, качающий припев'], ['emotional', 'Эмоциональная песня'], ['dance', 'Танцевальный трек'], ['epic', 'Эпический финал'], ['soft', 'Мягкое звучание']];
const toggles = [['build', 'Нарастание перед припевом'], ['harmonies', 'Бэк-вокал и гармонии в припеве'], ['final', 'Усиленный финальный припев'], ['drop', 'Дроп после припева (для танцевального)'], ['short', 'Короткое вступление']];
</script>

<template>
  <p v-if="ui.poetrySourceSummary.ready" class="workbench-note" data-sb-vue-poetry-tools-count>
    Исходник для аранжировки: {{ ui.poetrySourceSummary.lineCount }} строк, {{ ui.poetrySourceSummary.wordCount }} слов
  </p>
  <p v-if="ui.poetryAnalysisSummary.analyzed" class="workbench-note" data-sb-vue-poetry-analysis-count>
    Последний анализ: {{ ui.poetryAnalysisSummary.rowCount }} строк ·
    {{ ui.poetryAnalysisSummary.stressMarkCount }} меток ударения ·
    {{ ui.poetryAnalysisSummary.suggestionCount }} рекомендаций
  </p>
  <p v-if="ui.poetryAmbiguitySummary.ready" class="workbench-note" data-sb-vue-poetry-ambiguity-count>
    Предпросмотр ударений: {{ ui.poetryAmbiguitySummary.occurrenceCount }} неоднозначных вхождений ·
    {{ ui.poetryAmbiguitySummary.distinctCount }} разных слов
  </p>
  <p v-if="ui.performanceTagsSummary.ready" class="workbench-note" data-sb-vue-tags-summary>
    Теги исполнения: {{ tagModeLabel[ui.performanceTagsSummary.mode] }} ·
    интенсивность {{ ui.performanceTagsSummary.intensity }}/5 ·
    {{ ui.performanceTagsSummary.enabledTechniques }} приёмов ·
    {{ ui.performanceTagsSummary.busy ? 'идёт генерация' :
      (ui.performanceTagsSummary.previewOpen ?
        ui.performanceTagsSummary.sectionCount + ' секций в предпросмотре' : 'предпросмотр закрыт') }}
    <span v-if="ui.performanceTagsSummary.previewOpen" data-sb-vue-tags-freshness role="status">
      · {{ ui.performanceTagsSummary.previewFresh ? 'Текст и настройки не изменены; проверь теги перед применением.' : 'Предпросмотр устарел — создай новый.' }}
      <span v-if="ui.performanceTagsSummary.sourceChanged"> Изменён исходник.</span>
      <span v-if="ui.performanceTagsSummary.targetChanged"> Изменено готовое поле Lyrics.</span>
      <span v-if="ui.performanceTagsSummary.settingsChanged"> Изменены настройки.</span>
    </span>
  </p>
  <div class="field"><label for="lyrics-tag-preset">Характер аранжировки</label><select id="lyrics-tag-preset" v-model="fields.preset"><option v-for="[value, label] in presets" :key="value" :value="value">{{ label }}</option></select></div>
  <div class="workbench-switches"><label v-for="[key, label] in toggles" :key="key"><input :id="'lyrics-' + key" v-model="switches[key]" type="checkbox"> {{ label }}</label></div>
  <button type="button" class="btn ghost" data-action="format-idea-lyrics">✨ Создать теги и усилители</button>
  <p class="workbench-note">Разметка примерная: если в тексте нет названий секций, куплеты и припевы определяются по абзацам. Проверь расположение тегов перед копированием.</p>
  <div class="field"><label for="custom-idea-tagged">Готовая версия для поля Lyrics в Suno (можно исправить вручную)</label><textarea id="custom-idea-tagged" v-model="fields.tagged" rows="13" maxlength="25000" placeholder="[Verse 1]&#10;...&#10;&#10;[Chorus - powerful melodic hook]&#10;..."></textarea></div>
  <div class="detail-actions"><button type="button" class="btn ghost" data-action="copy-current-lyrics"><span v-html="initial.copyIcon"></span> Копировать Lyrics</button></div>
  <div class="field"><label for="custom-idea-style">Дополнительное описание для поля Style (до 1000 символов)</label><textarea id="custom-idea-style" v-model="fields.style" rows="4" maxlength="1000" placeholder="Описание жанра, вокала и динамики для Suno"></textarea></div>
  <div class="detail-actions"><button type="button" class="btn ghost" data-action="copy-current-style"><span v-html="initial.copyIcon"></span> Копировать Style</button></div>
</template>
