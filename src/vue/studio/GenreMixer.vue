<script setup>
import { computed, onMounted, onUnmounted, shallowRef } from 'vue';

const props = defineProps({ api: { type: Object, required: true } });
const snapshot = shallowRef(props.api.snapshot());
const rows = computed(() => snapshot.value?.rows || []);
const genres = computed(() => snapshot.value?.genres || []);
const settings = computed(() => snapshot.value?.settings || {});
const opts = computed(() => snapshot.value?.options || {});
const saved = computed(() => snapshot.value?.saved || []);
const prompt = computed(() => snapshot.value?.prompt || '');
const tempo = computed(() => snapshot.value?.tempo || 115);
const title = computed(() => snapshot.value?.title || '');

function sync() {
  const next = props.api.snapshot();
  if (next) snapshot.value = next;
}
onMounted(() => window.addEventListener('sunoboom:mixer-updated', sync));
onUnmounted(() => window.removeEventListener('sunoboom:mixer-updated', sync));

// The original GENRES catalogue remains the only source of genre definitions.
function groupedOptions(index) {
  const used = new Set(rows.value.filter((_, i) => i !== index).map(row => row.id));
  const grouped = new Map();
  for (const genre of genres.value) {
    if (used.has(genre.id)) continue;
    const family = genre.family || 'Прочее';
    if (!grouped.has(family)) grouped.set(family, []);
    grouped.get(family).push(genre);
  }
  return [...grouped.entries()].sort(([a], [b]) => a.localeCompare(b, 'ru'))
    .map(([family, items]) => ({
      family, items: items.sort((a, b) => a.name.localeCompare(b.name, 'ru'))
    }));
}
const fields = computed(() => [
  { key: 'mood', label: 'Настроение', choices: opts.value.moods || [] },
  { key: 'energy', label: 'Энергия', choices: opts.value.energies || [] },
  { key: 'vocal', label: 'Вокал', choices: opts.value.vocals || [] },
  { key: 'language', label: 'Язык', choices: opts.value.languages || [] }
]);
const checks = [
  ['noLive', 'Студийный звук без публики'],
  ['noWhisper', 'Без шёпота'],
  ['noRasp', 'Без хрипотцы'],
  ['noChoir', 'Без хора'],
  ['noIntro', 'Без длинного интро']
];
</script>

<template>
  <header class="heading">
    <div class="eyebrow">Suno Studio · новый инструмент</div>
    <h1>Жанровый <span class="gm-highlight">миксер</span></h1>
    <p>Соединяй от 2 до 4 жанров из Академии SUNOBOOM, задавай пропорции и создавай готовый Style-промпт для Suno.</p>
  </header>
  <div class="gm-layout">
    <section class="gm-panel">
      <div class="gm-section-head">
        <div><h2>Формула звучания</h2><p>Меняй жанры и двигай ползунки — сумма всегда равна 100%.</p></div>
        <span class="gm-total">Σ 100%</span>
      </div>
      <div class="gm-stack">
        <article v-for="(row, index) in rows" :key="row.id" class="gm-row" :style="{ '--gm-color': row.color }">
          <div class="gm-row-top">
            <span class="gm-rank">{{ String(index + 1).padStart(2, '0') }}</span>
            <div class="gm-field gm-genre-select">
              <label :for="'gm-genre-' + index">Музыкальное направление</label>
              <select :id="'gm-genre-' + index" :value="row.id" :data-gm-genre="index">
                <optgroup v-for="group in groupedOptions(index)" :key="group.family" :label="group.family">
                  <option v-for="genre in group.items" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
                </optgroup>
              </select>
            </div>
            <span class="gm-percent" :data-gm-value="index">{{ row.weight }}%</span>
            <button type="button" class="gm-remove" data-action="gm-remove" :data-slot="index"
              :aria-label="'Убрать жанр ' + row.name" title="Убрать жанр" :disabled="rows.length <= 2">×</button>
          </div>
          <div class="gm-slider-line">
            <input type="range" min="5" :max="100 - 5 * (rows.length - 1)" step="1"
              :value="row.weight" :data-gm-weight="index" :aria-label="'Доля жанра ' + row.name">
            <div class="gm-meter"><span :data-gm-meter="index" :style="{ width: row.weight + '%' }"></span></div>
          </div>
          <p class="gm-sub">{{ row.family }} · {{ row.tagline }} · {{ row.instruments }}</p>
        </article>
      </div>
      <div class="gm-actions">
        <button type="button" class="btn ghost" data-action="gm-add" :disabled="rows.length >= 4">＋ Добавить жанр</button>
        <button type="button" class="btn ghost" data-action="gm-equal">Поровну</button>
      </div>
      <div class="gm-mixture" aria-label="Доли музыкальных жанров">
        <span v-for="row in rows" :key="row.id" :data-gm-mixbar="row.id"
          :style="{ width: row.weight + '%', background: row.color }" :title="row.name + ': ' + row.weight + '%'"></span>
      </div>
      <p class="gm-muted">Проценты — творческий ориентир для генерации, а не гарантия точного соотношения в готовой музыке.</p>
      <div class="gm-divider"></div><h2>Характер композиции</h2>
      <div class="gm-form-grid">
        <div v-for="field in fields" :key="field.key" class="gm-field">
          <label :for="'gm-' + field.key">{{ field.label }}</label>
          <select :id="'gm-' + field.key" :value="settings[field.key]" :data-gm-setting="field.key">
            <option v-for="[value, label] in field.choices" :key="value" :value="value">{{ label }}</option>
          </select>
        </div>
      </div>
      <div class="gm-tempo">
        <label><input type="checkbox" data-gm-setting="autoTempo" :checked="settings.autoTempo"> Определять темп по жанрам</label>
        <div class="gm-tempo-row">
          <input id="gm-tempo" type="range" min="65" max="200" :value="tempo"
            data-gm-setting="tempo" :disabled="settings.autoTempo">
          <b id="gm-bpm">{{ tempo }} BPM</b>
        </div>
      </div>
      <div class="gm-field">
        <label for="gm-theme">Тема песни (необязательно)</label>
        <textarea id="gm-theme" rows="2" maxlength="170" data-gm-setting="theme"
          :value="settings.theme" placeholder="Например: ночной город, встреча после долгой разлуки"></textarea>
      </div>
      <div class="gm-checks">
        <label v-for="[key, label] in checks" :key="key">
          <input type="checkbox" :data-gm-setting="key" :checked="settings[key]"> {{ label }}
        </label>
      </div>
    </section>
    <aside class="gm-panel gm-output-panel">
      <div class="eyebrow">Результат микширования</div><h2>Гибридный Style-промпт</h2>
      <div class="gm-output" id="gm-prompt" aria-live="polite">{{ prompt }}</div>
      <div class="gm-prompt-meta"><span>На английском · готово для Suno</span><b id="gm-count">{{ prompt.length }} / 1000</b></div>
      <div class="gm-output-actions">
        <button type="button" class="btn primary" data-action="gm-copy">Копировать</button>
        <button type="button" class="btn ghost" data-action="gm-to-studio">В Suno Studio</button>
      </div>
      <button type="button" class="btn ghost gm-full" data-action="gm-save-prompt">Сохранить в «Мои промпты»</button>
      <div class="gm-divider"></div><h3>Мои сочетания</h3>
      <div class="gm-field">
        <label for="gm-title">Название сочетания</label>
        <input id="gm-title" type="text" maxlength="90" data-gm-title :value="title"
          placeholder="Например: Северный электро-фолк">
      </div>
      <button type="button" class="btn ghost gm-full" data-action="gm-save-mix">Сохранить формулу</button>
      <div class="gm-saved-list">
        <p v-if="!saved.length" class="gm-muted">Сохранённых сочетаний пока нет. Придумай свой микс и сохрани его.</p>
        <article v-for="item in saved" :key="item.id" class="gm-saved">
          <div><strong>{{ item.title }}</strong><small>{{ item.summary }}</small></div>
          <div class="gm-saved-actions">
            <button type="button" class="btn ghost small" data-action="gm-load" :data-id="item.id">Открыть</button>
            <button type="button" class="btn danger small" data-action="gm-delete" :data-id="item.id"
              :aria-label="'Удалить ' + item.title">×</button>
          </div>
        </article>
      </div>
      <p class="gm-muted">Сохраняется в этом браузере и входит в общую JSON-копию данных SUNOBOOM. Подключение к ИИ для смешивания не требуется.</p>
    </aside>
  </div>
</template>
