<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
const props = defineProps({ api: { type: Object, required: true }, initialModel: { type: Object, required: true } });
const model = ref(props.initialModel);
const sides = ['A', 'B'];
const fields = [
  { key: 'vocal', label: 'Вокал' },
  { key: 'arrangement', label: 'Аранжировка' },
  { key: 'mix', label: 'Сведение и мастеринг' }
];
const bars = Array.from({ length: 43 }, (_, i) => 15 + (i * i * 23 + i * 11) % 70 + '%');
function sync() { const next = props.api.snapshot(); if (next) model.value = next; }
onMounted(() => { window.addEventListener('sunoboom:player-ab-update', sync); sync(); });
onBeforeUnmount(() => window.removeEventListener('sunoboom:player-ab-update', sync));
</script>

<template>
  <section id="sbab-compare" class="sbab-shell"
    :class="{ 'sbab-is-playing': model.playing, 'sbab-has-files': model.hasBoth }"
    aria-label="Сравнение аудиоверсий A и B" data-sb-vue-player-ab>
    <header class="sbab-heading">
      <div><span class="sbab-kicker">SUNOBOOM · AUDIO TEST LAB</span>
        <h2>A/B-сравнение аудиоверсий</h2>
        <p>Загрузи два варианта песни и переключайся между ними в одной временной точке. Сравнивай вокал, аранжировку и финальное звучание.</p></div>
      <span class="sbab-lab-badge">A ↔ B</span>
    </header>
    <div class="sbab-files">
      <div v-for="side in sides" :key="side" class="sbab-file-card"
        :class="[side === 'A' ? 'sbab-card-a' : 'sbab-card-b', { 'sbab-active-card': model.active === side }]"
        :data-sbab-card="side">
        <div class="sbab-file-top">
          <span class="sbab-side-label">ВЕРСИЯ {{ side }}</span>
          <span class="sbab-loaded" :id="'sbab-ready-' + side">{{ model.files[side].ready ? 'Файл добавлен' : 'Ожидает файл' }}</span>
        </div>
        <strong class="sbab-filename" :id="'sbab-name-' + side">{{ model.files[side].name }}</strong>
        <p class="sbab-filesub" :id="'sbab-info-' + side">{{ model.files[side].info }}</p>
        <div class="sbab-file-bottom">
          <label class="sbab-upload" :for="'sbab-file-' + side">
            <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            {{ model.files[side].ready ? 'Заменить файл' : 'Выбрать файл' }}
          </label>
          <input type="file" :id="'sbab-file-' + side"
            accept="audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac,.opus" :data-sbab-file="side">
          <button type="button" data-sbab-action="remove" :data-side="side"
            class="sbab-remove" :disabled="!model.files[side].ready">Удалить</button>
          <span class="sbab-length" :id="'sbab-length-' + side">{{ model.files[side].duration }}</span>
        </div>
      </div>
    </div>
    <div class="sbab-demo-row">
      <p>Для первого теста можно создать два разных оригинальных коротких аудиофрагмента.</p>
      <button type="button" data-sbab-action="demo">Создать демо A и B</button>
    </div>
    <div class="sbab-console">
      <div class="sbab-console-top">
        <span class="sbab-kicker">АКТИВНОЕ ПРОСЛУШИВАНИЕ</span>
        <span id="sbab-active-label">Версия {{ model.active }}{{ model.playing ? ' · Воспроизведение' : '' }}</span>
      </div>
      <div class="sbab-wave">
        <div class="sbab-wave-bars" aria-hidden="true">
          <i v-for="(height, index) in bars" :key="index" :style="{ '--bar-height': height }"></i>
        </div>
        <div class="sbab-wave-center">A / B</div>
      </div>
      <div class="sbab-toggle" role="group" aria-label="Выбор версии для прослушивания">
        <button v-for="side in sides" :key="side" type="button"
          :class="side === 'A' ? 'sbab-btn-a' : 'sbab-btn-b'"
          data-sbab-action="select" :data-side="side"
          :aria-pressed="String(model.active === side)">
          {{ side }} <small>Версия {{ side }}</small>
        </button>
      </div>
      <div class="sbab-scrub">
        <label for="sbab-seek" class="sbab-sr">Перемотка A/B</label>
        <input type="range" id="sbab-seek" min="0" max="1000" step="1"
          :value="model.seek" :disabled="!model.canSeek">
        <div class="sbab-times">
          <span id="sbab-current">{{ model.currentTime }}</span>
          <span id="sbab-duration">{{ model.duration }}</span>
        </div>
      </div>
      <div class="sbab-transport">
        <button type="button" data-sbab-action="back" aria-label="На 5 секунд назад">
          <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M7 5v14M18 5 8 12l10 7V5Z" stroke="currentColor" stroke-width="2" fill="currentColor" stroke-linejoin="round" stroke-linecap="round"/></svg>
        </button>
        <button type="button" class="sbab-big-play" id="sbab-play" data-sbab-action="toggle"
          :disabled="!model.canPlay" :aria-label="model.playing ? 'Пауза' : 'Воспроизвести'">
          {{ model.playing ? '❚❚' : '▶' }}
        </button>
        <button type="button" data-sbab-action="forward" aria-label="На 5 секунд вперёд">
          <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M17 5v14M6 5l10 7-10 7V5Z" stroke="currentColor" stroke-width="2" fill="currentColor" stroke-linejoin="round" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div class="sbab-clip">
        <div class="sbab-clip-title"><strong>Повтор выбранного фрагмента</strong>
          <small>Например, только припев или куплет</small></div>
        <div class="sbab-clip-actions">
          <button type="button" data-sbab-action="mark-start">Начало: <span id="sbab-start">{{ model.start }}</span></button>
          <button type="button" data-sbab-action="mark-end">Конец: <span id="sbab-end">{{ model.end }}</span></button>
          <button type="button" data-sbab-action="loop" id="sbab-loop"
            :aria-pressed="String(model.loop)"
            :aria-label="model.loop ? 'Повтор фрагмента включён' : 'Повтор фрагмента выключен'">
            {{ model.loop ? '↻ Повтор включён' : '↻ Повтор выкл.' }}
          </button>
          <button type="button" data-sbab-action="clear-segment" aria-label="Очистить границы фрагмента">✕</button>
        </div>
      </div>
      <div class="sbab-volume">
        <span v-if="model.ios">📱 Громкость регулируется кнопками телефона</span>
        <template v-else>
          <label v-for="side in sides" :key="side" :for="'sbab-vol-' + side">
            Уровень {{ side }}
            <input :id="'sbab-vol-' + side" :data-sbab-vol="side"
              type="range" min="0" max="100" :value="model.volume[side]">
          </label>
        </template>
      </div>
      <p id="sbab-status" class="sbab-status" role="status" aria-live="polite"
        :hidden="!model.status">{{ model.status }}</p>
    </div>
    <section class="sbab-review">
      <header><h3>Оценка на слух</h3>
        <p>Субъективное сравнение. Оценки выставляешь ты — автоматического анализа качества здесь нет.</p>
      </header>
      <div class="sbab-rating-grid">
        <div class="sbab-rating-head">Параметр</div>
        <div class="sbab-rating-head">A</div>
        <div class="sbab-rating-head">B</div>
        <template v-for="field in fields" :key="field.key">
          <div class="sbab-rating-label">{{ field.label }}</div>
          <div v-for="side in sides" :key="side">
            <select :data-sbab-score="side + ':' + field.key"
              :aria-label="field.label + ' — версия ' + side"
              :value="model.scores[side][field.key]">
              <option :value="0">—</option>
              <option v-for="score in 5" :key="score" :value="score">{{ score }}/5</option>
            </select>
          </div>
        </template>
      </div>
      <div class="sbab-note-grid">
        <label v-for="side in sides" :key="side" :for="'sbab-note-' + side">
          Заметки по {{ side }}
          <textarea :id="'sbab-note-' + side" :data-sbab-note="side"
            rows="3" maxlength="1000"
            :placeholder="side === 'A' ? 'Сильные стороны, что улучшить…' : 'Вокал, баланс, пространство…'"
            :value="model.notes[side]"></textarea>
        </label>
      </div>
      <div class="sbab-review-actions">
        <button type="button" data-sbab-action="copy" class="sbab-review-copy">Скопировать результаты</button>
        <button type="button" data-sbab-action="reset-review" class="sbab-review-clear">Очистить оценки</button>
      </div>
    </section>
    <p class="sbab-footer-note">Файлы не передаются на сервер. При переключении используется одинаковая временная позиция в секундах; точное совпадение музыкальных моментов зависит от самих версий. Для честного сравнения выровняй их громкость. На телефоне переключение может иметь небольшую паузу из-за браузера.</p>
  </section>
</template>
