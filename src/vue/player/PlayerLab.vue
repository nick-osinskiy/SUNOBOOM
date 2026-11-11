<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';

const props = defineProps({
  api: { type: Object, required: true },
  initialModel: { type: Object, required: true }
});
const state = ref(props.initialModel);
const ui = useLegacyUiStore();
watch(state, value => ui.publishPlayerLabSummary(value), { immediate:true });
function sync() {
  const snapshot = props.api.snapshot();
  if (snapshot) state.value = snapshot;
}
onMounted(() => {
  window.addEventListener('sunoboom:player-lab-update', sync);
  sync();
});
onBeforeUnmount(() => window.removeEventListener('sunoboom:player-lab-update', sync));
const heights = Array.from({ length: 37 }, (_, i) => ({
  index: i, height: (17 + ((i * 37 + i * i * 19) % 72)) + '%'
}));
const rates = ['0.75', '1', '1.25', '1.5', '2'];
</script>

<template>
  <div class="sbp-layout" data-sb-vue-player-lab>
    <section class="sbp-main" aria-label="Плеер">
      <div class="sbp-art" :class="{ 'is-playing': state.playing }">
        <div class="sbp-art-orb">♫</div>
        <div class="sbp-bars" aria-hidden="true">
          <i v-for="bar in heights" :key="bar.index"
            :style="{ '--sbp-i': bar.index, '--sbp-h': bar.height }"></i>
        </div>
        <span>SONIC LAB / PRIVATE PREVIEW</span>
      </div>
      <div class="sbp-title-area">
        <div>
          <div id="sbp-now-tag" class="sbp-now-tag">{{ state.nowTag }}</div>
          <h2 id="sbp-title">{{ state.title }}</h2>
          <p id="sbp-artist">{{ state.artist }}</p>
        </div>
        <span id="sbp-counter" class="sbp-counter">{{ state.counter }}</span>
      </div>
      <p v-if="ui.playerAbSummary.ready && ui.playerAbSummary.readyCount" class="sbp-now-tag"
        data-sb-vue-ab-recap>A/B: загружено {{ ui.playerAbSummary.readyCount }} из 2 · активна {{ ui.playerAbSummary.active }}</p>
      <div class="sbp-progress">
        <label for="sbp-seek" class="sbp-sr">Позиция воспроизведения</label>
        <input id="sbp-seek" type="range" min="0" max="1000" step="1"
          :value="state.seekValue" :disabled="state.seekDisabled"
          aria-label="Перемотка трека"
          :style="{ '--fill': (state.seekValue / 10) + '%' }">
        <div class="sbp-times">
          <span id="sbp-time-current">{{ state.currentTime }}</span>
          <span id="sbp-time-total">{{ state.totalTime }}</span>
        </div>
      </div>
      <div class="sbp-transport">
        <button type="button" class="sbp-secondary"
          :class="{ 'is-on': state.shuffle }" id="sbp-shuffle"
          data-sbp-action="shuffle" aria-label="Случайный порядок"
          :aria-pressed="String(state.shuffle)" title="Случайный порядок">⤨</button>
        <button type="button" class="sbp-secondary sbp-skip"
          data-sbp-action="prev" aria-label="Предыдущий трек">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6 5v14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M18 5 8 12l10 7V5Z" fill="currentColor"/>
          </svg>
        </button>
        <button type="button" class="sbp-play" id="sbp-play" data-sbp-action="play"
          :aria-label="state.playing ? 'Пауза' : 'Воспроизвести'"
          :disabled="!state.count">{{ state.playing ? '❚❚' : '▶' }}</button>
        <button type="button" class="sbp-secondary sbp-skip"
          data-sbp-action="next" aria-label="Следующий трек">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M18 5v14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="m6 5 10 7-10 7V5Z" fill="currentColor"/>
          </svg>
        </button>
        <button type="button" class="sbp-secondary"
          :class="{ 'is-on': state.repeat !== 'off' }"
          data-sbp-action="repeat" id="sbp-repeat" :title="state.repeatLabel"
          :aria-label="state.repeatLabel">{{ state.repeat === 'one' ? '↻₁' : '↻' }}</button>
      </div>
      <div class="sbp-extras">
        <div class="sbp-volume">
          <span v-if="state.ios" class="sbp-ios-volume">📱 Громкость регулируется кнопками телефона</span>
          <template v-else>
            <label for="sbp-volume">Громкость</label>
            <span id="sbp-volume-icon" aria-hidden="true">◖))</span>
            <input id="sbp-volume" type="range" min="0" max="100"
              :value="state.volume" aria-label="Громкость">
            <output id="sbp-volume-label">{{ state.volume }}%</output>
          </template>
        </div>
        <label class="sbp-speed" for="sbp-rate">
          Скорость
          <select id="sbp-rate" aria-label="Скорость воспроизведения" :value="state.rate">
            <option v-for="rate in rates" :key="rate" :value="rate">{{ rate }}×</option>
          </select>
        </label>
      </div>
      <div v-show="state.message" class="sbp-message" id="sbp-message"
        role="status" aria-live="polite">{{ state.message }}</div>
    </section>

    <aside class="sbp-side">
      <div class="sbp-side-head">
        <div>
          <h2>Очередь воспроизведения</h2>
          <small id="sbp-list-count">{{ state.count }} {{ state.count === 1 ? 'трек' : state.count > 1 && state.count < 5 ? 'трека' : 'треков' }}</small>
        </div>
        <button type="button" class="sbp-clear" data-sbp-action="clear"
          id="sbp-clear" :disabled="!state.count">Очистить</button>
      </div>
      <div class="sbp-dropzone" id="sbp-dropzone">
        <div class="sbp-drop-icon">↥</div>
        <strong>Загрузи свои треки</strong>
        <p>MP3, WAV, M4A, AAC, OGG, FLAC — если формат поддерживается браузером. Файлы никуда не отправляются.</p>
        <label class="sbp-upload-label" for="sbp-file">Выбрать аудиофайлы</label>
        <input id="sbp-file" type="file" accept="audio/*,.mp3,.m4a,.aac,.wav,.ogg,.flac,.opus" multiple>
      </div>
      <div class="sbp-demo-box">
        <div>
          <strong>Нет аудиофайлов?</strong>
          <p>Создать 3 коротких оригинальных демо-сигнала для проверки управления.</p>
        </div>
        <button type="button" data-sbp-action="demo" id="sbp-demo">+ Демо-треки</button>
      </div>
      <div class="sbp-track-list" id="sbp-list" aria-label="Список треков">
        <article v-for="track in state.tracks" :key="track.id" class="sbp-track"
          :class="{ 'is-current': track.isCurrent }" :data-sbp-item="track.id">
          <button type="button" class="sbp-track-play" data-sbp-action="select"
            :data-index="track.index" :aria-label="'Включить ' + track.name">
            <span class="sbp-track-index">{{ track.playLabel }}</span>
            <span class="sbp-track-meta">
              <strong>{{ track.name }}</strong>
              <small>{{ track.artist }} · {{ track.sourceLabel }}</small>
            </span>
          </button>
          <span class="sbp-track-duration">{{ track.durationLabel }}</span>
          <button type="button" class="sbp-track-remove" data-sbp-action="remove"
            :data-index="track.index" title="Удалить из списка"
            :aria-label="'Удалить ' + track.name">×</button>
        </article>
        <div v-if="!state.tracks.length" class="sbp-empty">
          Плейлист пока пуст. Добавь MP3 или нажми «Демо-треки», чтобы начать тест.
        </div>
      </div>
    </aside>
  </div>
</template>
