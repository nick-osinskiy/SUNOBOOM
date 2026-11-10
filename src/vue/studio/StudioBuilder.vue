<script setup>
import { computed, onMounted, onUnmounted, shallowRef, watch } from 'vue';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';

const props = defineProps({
  api: { type: Object, required: true }
});

const snapshot = shallowRef(props.api.snapshot());
const ui = useLegacyUiStore();
watch(snapshot, value => ui.publishStudioSummary(value), { immediate:true });
const settings = computed(() => snapshot.value?.settings || {});
const genre = computed(() => snapshot.value?.genre || { name: '', family: '', bpm: [0, 0] });
const prompt = computed(() => String(snapshot.value?.prompt || ''));
const moods = [
  ['melancholic','Меланхоличное'],['energetic','Энергичное'],
  ['romantic','Романтичное'],['dark','Мрачное'],['uplifting','Воодушевляющее'],
  ['dreamy','Мечтательное'],['playful','Игривое'],['epic','Эпическое'],
  ['nostalgic','Ностальгическое']
];
const vocals = [['male','Мужской'],['female','Женский'],['duet','Дуэт']];
const languages = [['Russian','Русский'],['English','Английский'],['Spanish','Испанский'],['Kazakh','Казахский']];
const energies = [['soft','Мягкая'],['medium','Средняя'],['high','Мощная']];
const checks = [
  ['studio','Без публики и live-атмосферы'],
  ['noWhisper','Без шёпота'],
  ['noChoir','Без хора'],
  ['noIntro','Без длинного интро']
];

function sync() {
  const next = props.api.snapshot();
  if (next) snapshot.value = next;
}
function update(key, value) {
  props.api.update(key, value);
  sync();
}
onMounted(() => window.addEventListener('sunoboom:studio-updated', sync));
onUnmounted(() => window.removeEventListener('sunoboom:studio-updated', sync));
</script>

<template>
  <div class="panel">
    <h3>Параметры трека</h3>
    <div class="field">
      <label for="b-genre">Жанр</label>
      <select id="b-genre" :value="settings.genre" @change="update('genre', $event.target.value)">
        <option v-for="item in snapshot.genres" :key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
    </div>
    <div class="form-grid">
      <div class="field">
        <label for="b-mood">Настроение</label>
        <select id="b-mood" :value="settings.mood" @change="update('mood', $event.target.value)">
          <option v-for="[value, label] in moods" :key="value" :value="value">{{ label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="b-vocal">Вокал</label>
        <select id="b-vocal" :value="settings.vocal" @change="update('vocal', $event.target.value)">
          <option v-for="[value, label] in vocals" :key="value" :value="value">{{ label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="b-lang">Язык текста</label>
        <select id="b-lang" :value="settings.language" @change="update('language', $event.target.value)">
          <option v-for="[value, label] in languages" :key="value" :value="value">{{ label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="b-energy">Энергия</label>
        <select id="b-energy" :value="settings.energy" @change="update('energy', $event.target.value)">
          <option v-for="[value, label] in energies" :key="value" :value="value">{{ label }}</option>
        </select>
      </div>
    </div>
    <div class="field">
      <label for="b-tempo">Темп · <span id="tempo-num" style="color:#ffa8d5">{{ settings.tempo }}</span> BPM</label>
      <div class="range">
        <input type="range" id="b-tempo" min="65" max="200" step="1"
          :value="settings.tempo" @input="update('tempo', Number($event.target.value))">
        <output id="bpm-output">{{ settings.tempo }} BPM</output>
      </div>
      <span class="muted" style="font-size:11px">
        Обычно для «{{ genre.name }}»: {{ genre.bpm[0] }}–{{ genre.bpm[1] }} BPM
      </span>
    </div>
    <div class="field">
      <label for="b-theme">Тема / история трека</label>
      <textarea id="b-theme" rows="2" :value="settings.theme"
        @input="update('theme', $event.target.value)" placeholder="О чём будет песня?"></textarea>
    </div>
    <div class="field">
      <label for="b-extra">Дополнительные инструкции (необязательно)</label>
      <textarea id="b-extra" rows="2" :value="settings.extra"
        @input="update('extra', $event.target.value)"
        placeholder="Например: memorable chorus, short guitar solo"></textarea>
    </div>
    <div class="checkrow">
      <label v-for="[key, label] in checks" :key="key">
        <input type="checkbox" :checked="settings[key]"
          @change="update(key, $event.target.checked)">{{ label }}
      </label>
    </div>
  </div>
  <div class="panel" style="position:sticky;top:20px">
    <div class="eyebrow">Готово к Suno</div>
    <h3>Твой промпт</h3>
    <div class="output" id="prompt-output">{{ prompt }}</div>
    <div class="counter">
      <span>Максимум 1000 символов</span>
      <b id="prompt-count">{{ prompt.length }} / 1000</b>
    </div>
    <div class="two-col">
      <button class="btn primary" type="button" data-action="copy-prompt">
        <span aria-hidden="true" v-html="snapshot.icons.copy"></span> Копировать
      </button>
      <button class="btn ghost" type="button" data-action="save-prompt">
        <span aria-hidden="true" v-html="snapshot.icons.save"></span> Сохранить
      </button>
    </div>
    <div class="spacer"></div>
    <div v-if="ui.mixerSummary.ready" class="notice" data-sb-vue-mixer-recap>
      Последний микс: {{ ui.mixerSummary.genreCount }} жанра ·
      {{ ui.mixerSummary.tempo }} BPM · {{ ui.mixerSummary.promptLength }} / 1000 символов.
      <button type="button" class="link-action" data-action="nav" data-nav="mixer">Перейти в Миксер →</button>
    </div>
    <div class="notice"><strong>Подсказка:</strong> промпт задаёт стиль, а текст песни можно вводить отдельно в Suno. Результат генерации может отличаться от запроса.</div>
    <div class="spacer"></div>
    <div class="info-label">Музыкальный профиль</div>
    <div class="list-pills">
      <span>{{ genre.name }}</span><span>{{ genre.family }}</span>
      <span>{{ genre.bpm[0] }}–{{ genre.bpm[1] }} BPM</span>
    </div>
  </div>
</template>
