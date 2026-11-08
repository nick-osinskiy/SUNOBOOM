<script setup>
import { computed, onMounted, onUnmounted, shallowRef } from 'vue';

const props = defineProps({ api: { type: Object, required: true } });
const snapshot = shallowRef(props.api.snapshot());
const manual = computed(() => snapshot.value?.mode === 'manual');
const report = computed(() => snapshot.value?.report || { score: 0, length: 0, issues: [], status: '' });
const genreId = computed(() => snapshot.value?.genreId || '');
const genres = computed(() => snapshot.value?.genres || []);
const proposalOpen = computed(() => !!snapshot.value?.proposalOpen);
const proposal = computed(() => snapshot.value?.proposal || { text: '', removed: [], complete: true });

function sync() {
  const next = props.api.snapshot();
  if (next) snapshot.value = next;
}
onMounted(() => window.addEventListener('sunoboom:auditor-updated', sync));
onUnmounted(() => window.removeEventListener('sunoboom:auditor-updated', sync));
</script>

<template>
  <header class="sbpa-head">
    <div>
      <span class="sbpa-eyebrow">SUNOBOOM · ПРОВЕРКА</span>
      <h2>Интеллектуальный аудитор промптов</h2>
      <p>Ищет повторы, противоречия, перегрузку и особенности жанра до отправки в Suno.</p>
    </div>
    <span class="sbpa-local">Проверка по правилам · без API</span>
  </header>
  <div class="sbpa-tabs" role="group" aria-label="Источник промпта">
    <button type="button" data-sbpa-action="studio"
      :class="{ active: !manual }" :aria-pressed="!manual">Текущий промпт Studio</button>
    <button type="button" data-sbpa-action="manual"
      :class="{ active: manual }" :aria-pressed="manual">Свой текст / вставка</button>
  </div>

  <div v-if="manual" class="sbpa-manual">
    <label for="sbpa-text">Текст промпта</label>
    <textarea id="sbpa-text" rows="5" spellcheck="false"
      placeholder="Вставь текст на русском или английском…"
      :value="snapshot.manual"></textarea>
    <label for="sbpa-genre">Жанр для сопоставления с Академией</label>
    <select id="sbpa-genre" :value="genreId">
      <option v-for="item in genres" :key="item.id" :value="item.id">{{ item.name }}</option>
    </select>
  </div>
  <p v-else class="sbpa-context">
    Проверяется актуальный промпт конструктора. Изменения настроек Studio отражаются здесь автоматически.
  </p>

  <div id="sbpa-results" aria-live="polite">
    <div class="sbpa-scoreline">
      <div class="sbpa-score" aria-label="Эвристическая оценка промпта">
        {{ report.score }}<small>/ 100</small>
      </div>
      <div class="sbpa-score-info">
        <strong>{{ report.status }}</strong>
        <span>Оценка ориентировочная: проверяется структура текста, а не качество будущей музыки.</span>
        <div class="sbpa-meter" role="progressbar" aria-label="Оценка промпта"
          :aria-valuenow="report.score" aria-valuemin="0" aria-valuemax="100">
          <span :style="{ width: report.score + '%' }"></span>
        </div>
      </div>
      <div class="sbpa-limit" :class="{ over: report.length > 1000 }">
        {{ report.length }} / 1000 символов
      </div>
    </div>
    <ul v-if="report.issues?.length" class="sbpa-issues">
      <li v-for="(item, i) in report.issues" :key="i"
        class="sbpa-item" :class="'sbpa-' + item.kind">
        <div>
          <strong>{{ item.title }}</strong>
          <p>{{ item.detail }}</p>
          <small>{{ item.fix }}</small>
        </div>
      </li>
    </ul>
    <p v-else class="sbpa-clear">
      Явных противоречий и повторов по проверяемым правилам не найдено.
    </p>
  </div>

  <div class="sbpa-actions">
    <button type="button" data-sbpa-action="preview" class="sbpa-primary">
      Показать улучшенный вариант
    </button>
    <button v-if="manual" type="button" data-sbpa-action="load-studio">
      Вставить текущий промпт Studio
    </button>
  </div>

  <div id="sbpa-proposal-slot">
    <div v-if="proposalOpen" class="sbpa-proposal">
      <h4>Предлагаемый вариант <small>{{ proposal.text.length }} / 1000</small></h4>
      <p v-if="!proposal.removed.length">Удалять нечего: текст уже без точных повторов.</p>
      <p v-else>Удалено фрагментов: {{ proposal.removed.length }}. Проверь смысл до копирования.</p>
      <details v-if="proposal.removed.length">
        <summary>Что изменилось</summary>
        <ul>
          <li v-for="(item, i) in proposal.removed" :key="i">
            <b>{{ item.reason }}:</b> {{ item.part }}
          </li>
        </ul>
      </details>
      <p v-if="!proposal.complete" class="sbpa-alert">
        Автоматического сокращения недостаточно. Уменьши текст вручную минимум на
        {{ proposal.text.length - 1000 }} символов.
      </p>
      <label for="sbpa-preview-text">Редактируемый предпросмотр</label>
      <textarea id="sbpa-preview-text" rows="5" spellcheck="false" :value="proposal.text"></textarea>
      <div class="sbpa-actions">
        <button type="button" data-sbpa-action="copy-preview" class="sbpa-primary">
          Подтвердить и скопировать
        </button>
        <button type="button" data-sbpa-action="close-preview">Закрыть</button>
      </div>
      <small>Исходный промпт и параметры Studio не меняются. Копируется только текст предпросмотра после нажатия.</small>
    </div>
  </div>
  <p class="sbpa-foot">
    Аудитор не вызывает Gemini и не оценивает реальный звук. Жанровые отклонения могут быть
    творческим решением, а рекомендации не изменяют исходник без твоего действия.
  </p>
</template>
