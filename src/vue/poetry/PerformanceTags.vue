<script setup>
import { computed, onMounted, onUnmounted, shallowRef } from 'vue';

const props = defineProps({ api: { type: Object, required: true } });
const snapshot = shallowRef(props.api.snapshot());
const prefs = computed(() => snapshot.value?.prefs || {});
const draft = computed(() => snapshot.value?.draft || null);
const modes = [['smart', 'Интеллектуальный · Gemini'],
  ['rules', 'Автоматический · без API'], ['manual', 'Ручной · по секциям']];
const densities = [['minimal', 'Минимально'], ['balanced', 'Сбалансированно'],
  ['detailed', 'Подробно']];
const sources = [['auto', 'Авто: готовая Lyrics, если есть'],
  ['original', 'Оригинальный текст'], ['tagged', 'Готовая версия Lyrics']];
const toggles = [
  ['melisma', 'Мелизмы'], ['falsetto', 'Фальцет'],
  ['harmonies', 'Гармонии'], ['noWhisper', 'Без шёпота'], ['noRasp', 'Без хрипотцы']
];
function sync() {
  const next = props.api.snapshot();
  if (next) snapshot.value = next;
}
onMounted(() => window.addEventListener('sunoboom:tags-updated', sync));
onUnmounted(() => window.removeEventListener('sunoboom:tags-updated', sync));
</script>

<template>
  <div class="sb-vt-header">
    <span class="sb-vt-symbol">🎭</span>
    <div>
      <h3>Генератор тегов исполнения</h3>
      <p>Вокальная драматургия по секциям. Без изменения слов песни;
        результат можно проверить и применить только вручную.</p>
    </div>
  </div>
  <div class="sb-vt-field">
    <label for="sb-vt-mode">Способ генерации</label>
    <select id="sb-vt-mode" data-vt-pref="mode" :value="prefs.mode">
      <option v-for="[value, label] in modes" :key="value" :value="value">{{ label }}</option>
    </select>
  </div>
  <p class="sb-vt-hint" id="sb-vt-mode-hint">{{ snapshot.modeHint }}</p>
  <div class="sb-vt-grid">
    <div class="sb-vt-field">
      <label for="sb-vt-source">Источник текста</label>
      <select id="sb-vt-source" data-vt-pref="source" :value="prefs.source">
        <option v-for="[value, label] in sources" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
    </div>
    <div class="sb-vt-field">
      <label for="sb-vt-density">Детализация метатегов</label>
      <select id="sb-vt-density" data-vt-pref="density" :value="prefs.density">
        <option v-for="[value, label] in densities" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
    </div>
  </div>
  <div v-if="snapshot.artists?.length" class="sb-vt-field">
    <label for="sb-vt-artist">Учесть «ДНК артиста» (необязательно)</label>
    <select id="sb-vt-artist" data-vt-pref="artistId" :value="prefs.artistId">
      <option value="">Без привязки к артисту</option>
      <option v-for="artist in snapshot.artists" :key="artist.id" :value="artist.id">
        {{ artist.name }}
      </option>
    </select>
  </div>
  <div class="sb-vt-intensity">
    <div class="sb-vt-between">
      <label for="sb-vt-intensity">Максимальная интенсивность исполнения</label>
      <strong id="sb-vt-intensity-label">{{ prefs.intensity }} / 5</strong>
    </div>
    <input type="range" id="sb-vt-intensity" min="1" max="5" step="1"
      :value="prefs.intensity" data-vt-pref="intensity">
    <div class="sb-vt-between sb-vt-scale">
      <span>Сдержанная</span><span>Экспрессивная</span>
    </div>
  </div>
  <div class="sb-vt-options">
    <label v-for="[key, label] in toggles" :key="key">
      <input type="checkbox" :data-vt-pref="key" :checked="prefs[key]"> {{ label }}
    </label>
  </div>
  <label v-if="snapshot.hasEndpoint" class="sb-vt-consent" id="sb-vt-consent-row">
    <input type="checkbox" id="sb-vt-consent">
    Разрешаю отправить выбранный текст песни на защищённый сервер для анализа Gemini.
  </label>
  <div class="sb-vt-buttons">
    <button type="button" class="btn primary" data-action="vt-generate"
      :disabled="snapshot.busy">✨ Создать предпросмотр</button>
    <span class="sb-vt-note">Никакого автоматического применения к Lyrics.</span>
  </div>
  <div id="sb-vt-notice" class="sb-vt-notice" :class="snapshot.notice?.kind"
    role="status" aria-live="polite">{{ snapshot.notice?.text }}</div>
  <div id="sb-vt-result" aria-live="polite">
    <div v-if="draft" class="sb-vt-draft">
      <div class="sb-vt-draft-head">
        <h4>Предпросмотр · {{ draft.sections.length }} секций</h4>
        <span class="sb-vt-method">{{ draft.method }}</span>
      </div>
      <p class="sb-vt-small">
        Проверь каждую секцию. Теги можно выбрать из списка или переписать вручную.
        Оригинальные строки песни остаются неизменными.
      </p>
      <div class="sb-vt-section-list">
        <div v-for="(section, i) in draft.sections" :key="section.id" class="sb-vt-section">
          <div class="sb-vt-section-heading">
            <strong>{{ section.label }}</strong><span>{{ i + 1 }}/{{ draft.sections.length }}</span>
          </div>
          <div class="sb-vt-section-controls">
            <select :data-vt-preset="i" :value="draft.tags[i]"
              :aria-label="'Готовые теги для ' + section.label">
              <option v-for="[value, label] in snapshot.presets" :key="value" :value="value">
                {{ label }}
              </option>
            </select>
            <input :data-vt-cue="i" :value="draft.tags[i]"
              maxlength="165" placeholder="Например: Warm Emotional Vocals"
              :aria-label="'Тег исполнения ' + section.label">
          </div>
        </div>
      </div>
      <div class="sb-vt-field">
        <label for="sb-vt-preview">
          Готовый Lyrics — разрешено редактировать только инструкции, не слова песни
        </label>
        <textarea id="sb-vt-preview" spellcheck="false" rows="13"
          maxlength="25000" :value="draft.preview"></textarea>
      </div>
      <p class="sb-vt-small" id="sb-vt-preview-state">{{ snapshot.previewState }}</p>
      <div class="sb-vt-draft-actions">
        <button type="button" class="btn primary" data-action="vt-apply">
          ✓ Применить к Lyrics
        </button>
        <button type="button" class="btn ghost" data-action="vt-copy">
          Копировать предпросмотр
        </button>
        <button type="button" class="btn ghost" data-action="vt-refresh">
          Обновить предпросмотр
        </button>
        <button type="button" class="btn ghost" data-action="vt-cancel">
          Отменить
        </button>
      </div>
    </div>
  </div>
</template>
