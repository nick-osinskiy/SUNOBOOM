<script setup>
import { computed, onMounted, onUnmounted, shallowRef } from 'vue';

const props = defineProps({ api: { type: Object, required: true } });
const snapshot = shallowRef(props.api.snapshot());
const result = computed(() => snapshot.value?.result || {
  tab: 'lyrics', text: '', count: '', transfer: null, message: ''
});
function sync() {
  const next = props.api.snapshot();
  if (next) snapshot.value = next;
}
onMounted(() => window.addEventListener('sunoboom:arranger-updated', sync));
onUnmounted(() => window.removeEventListener('sunoboom:arranger-updated', sync));
</script>

<template>
  <div class="sba-result-header">
    <span class="sba-eyebrow">ПРЕДПРОСМОТР</span>
    <h3>Результат для Suno</h3>
    <p>Lyrics — теги по секциям; Style — короткое описание динамики.</p>
  </div>
  <div class="sba-preview-tabs" role="group" aria-label="Тип результата">
    <button type="button" data-sba-action="tab" data-tab="lyrics"
      :aria-pressed="result.tab === 'lyrics'">Теги Lyrics</button>
    <button type="button" data-sba-action="tab" data-tab="style"
      :aria-pressed="result.tab === 'style'">Style</button>
  </div>
  <textarea id="sba-preview" readonly spellcheck="false"
    aria-label="Готовые теги структуры песни" :value="result.text"></textarea>
  <div class="sba-preview-count" id="sba-preview-count">{{ result.count }}</div>
  <div class="sba-result-actions">
    <button type="button" class="sba-btn sba-copy-btn" data-sba-action="copy">
      Копировать результат
    </button>
    <button type="button" class="sba-btn sba-transfer-btn" data-sba-action="prepare-transfer">
      Перенести стиль в Studio
    </button>
  </div>
  <div id="sba-transfer-confirm" aria-live="polite">
    <div v-if="result.transfer" class="sba-transfer-preview">
      <strong>Предпросмотр переноса в Style</strong>
      <p>Добавим описание аранжировки в дополнительные инструкции Suno Studio,
         не удаляя твои записи.</p>
      <code>{{ result.transfer.candidate }}</code>
      <div class="sba-preview-buttons">
        <button type="button" data-sba-action="transfer-accept">Подтвердить перенос</button>
        <button type="button" data-sba-action="transfer-cancel">Отмена</button>
      </div>
      <small>Итоговый промпт Studio: {{ result.transfer.promptLength }} / 1000 символов</small>
    </div>
  </div>
  <p id="sba-message" class="sba-message" role="status" aria-live="polite"
    :hidden="!result.message">{{ result.message }}</p>
  <div class="sba-help">
    <strong>Как применять</strong>
    <p>Теги секций вставляй в поле <b>Lyrics</b> в Suno рядом с текстом песни.
      Краткую динамику можно добавить в <b>Style</b> через Suno Studio после подтверждения.</p>
    <p>Ориентир длительности рассчитан по 4/4 и BPM Studio,
      это не гарантия точной длины аудио.</p>
  </div>
</template>
