<script setup>
import { computed, onMounted, onUnmounted, shallowRef } from 'vue';

const props = defineProps({
  api: { type: Object, required: true },
  kind: { type: String, required: true }
});
const snapshot = shallowRef(props.api.snapshot());
const blocks = computed(() => snapshot.value?.blocks || []);
const sections = computed(() => snapshot.value?.sections || []);
const voices = computed(() => snapshot.value?.voices || []);
const energies = computed(() => snapshot.value?.energies || {});
const transitions = computed(() => snapshot.value?.transitions || []);
const transitionTypes = computed(() => snapshot.value?.transitionTypes || []);
const transitionLengths = computed(() => snapshot.value?.transitionLengths || []);
const transitionStrengths = computed(() => snapshot.value?.transitionStrengths || []);
const visibleSnake = computed(() => snapshot.value?.snakeExpanded
  ? blocks.value : blocks.value.slice(0, 12));
const visibleTransitions = computed(() => snapshot.value?.transitionHubExpanded
  ? transitions.value : transitions.value.slice(0, 3));
const bars = [2, 4, 8, 12, 16, 24, 32];

function sync() {
  const next = props.api.snapshot();
  if (next) snapshot.value = next;
}
onMounted(() => window.addEventListener('sunoboom:arranger-updated', sync));
onUnmounted(() => window.removeEventListener('sunoboom:arranger-updated', sync));

function snakeRows(columns) {
  const rows = [];
  for (let start = 0; start < visibleSnake.value.length; start += columns) {
    rows.push({
      id: start,
      reverse: Math.floor(start / columns) % 2 === 1,
      continued: start + columns < visibleSnake.value.length,
      items: visibleSnake.value.slice(start, start + columns)
    });
  }
  return rows;
}
const snakeSummary = computed(() => visibleSnake.value.map((b, i) =>
  (i + 1) + '. ' + b.snakeLabel).join(' → '));
</script>

<template>
  <template v-if="kind === 'cards'">
    <template v-for="(item, index) in blocks" :key="item.id">
      <article class="sba-block" :data-sba-id="item.id" :data-sba-energy="item.energy">
        <div class="sba-block-head">
          <span class="sba-drag" draggable="true" :data-sba-drag="item.id"
            title="Перетащить блок" :aria-label="'Перетащить ' + item.sectionName">⠿</span>
          <span class="sba-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="sba-emoji" aria-hidden="true">{{ item.icon }}</span>
          <strong>{{ item.label }}</strong>
          <span class="sba-head-energy">Энергия {{ item.energy }}/5</span>
          <div class="sba-block-actions">
            <button type="button" data-sba-action="up" :data-id="item.id"
              aria-label="Переместить вверх" :disabled="index === 0">↑</button>
            <button type="button" data-sba-action="down" :data-id="item.id"
              aria-label="Переместить вниз" :disabled="index === blocks.length - 1">↓</button>
            <button type="button" data-sba-action="duplicate" :data-id="item.id"
              aria-label="Дублировать блок">⧉</button>
            <button type="button" data-sba-action="remove" :data-id="item.id"
              aria-label="Удалить блок">×</button>
          </div>
        </div>
        <div class="sba-block-fields">
          <label>Раздел
            <select data-sba-field="type" :data-id="item.id" :value="item.type">
              <option v-for="section in sections" :key="section.id" :value="section.id">{{ section.name }}</option>
            </select>
          </label>
          <label>Тактов
            <select data-sba-field="bars" :data-id="item.id" :value="item.bars">
              <option v-for="count in bars" :key="count" :value="count">{{ count }}</option>
            </select>
          </label>
          <label>Вокал
            <select data-sba-field="vocal" :data-id="item.id" :value="item.vocal">
              <option v-for="voice in voices" :key="voice.id" :value="voice.id">{{ voice.name }}</option>
            </select>
          </label>
          <label class="sba-energy-field">Энергия
            <output :data-sba-output="item.id">{{ item.energy }}/5 · {{ energies[item.energy] }}</output>
            <input type="range" min="1" max="5" step="1" :value="item.energy"
              data-sba-field="energy" :data-id="item.id">
          </label>
          <div class="sba-instrument-field">
            <label :for="'sba-instruments-' + item.id">Инструменты / приём</label>
            <div class="sba-instrument-row">
              <input type="text" :id="'sba-instruments-' + item.id" maxlength="300"
                data-sba-field="instruments" :data-id="item.id" :value="item.instruments"
                placeholder="Введи вручную или выбери рекомендацию" autocomplete="off">
            </div>
            <!-- The Academy smart recommendations remain owned by their proven rule engine. -->
            <div class="sba-quick-sounds" :id="'sba-quick-' + item.id" v-html="item.quickSounds"></div>
            <div v-if="item.soundPanel" v-html="item.soundPanel" style="display:contents"></div>
          </div>
          <label v-if="item.type === 'custom'" class="sba-custom-label">Своё название
            <input type="text" maxlength="48" data-sba-field="customName"
              :data-id="item.id" :value="item.customName" placeholder="Название для тега Suno">
          </label>
        </div>
      </article>
      <!-- Transition editors continue to use the original validated rule sets. -->
      <div v-if="item.transitionHTML" style="display:contents" v-html="item.transitionHTML"></div>
      <button type="button" class="sba-between-add" data-sba-action="insert-after"
        :data-id="item.id" :aria-label="'Добавить блок после ' + item.label">
        <span aria-hidden="true">＋</span> Добавить после
      </button>
    </template>
    <div v-if="!blocks.length" class="sba-empty">Пока нет блоков. Добавь первый фрагмент снизу.</div>
  </template>

  <template v-else-if="kind === 'snake'">
    <template v-if="blocks.length">
      <div v-for="columns in [6, 3]" :key="columns"
        :class="columns === 6 ? 'sba-snake-desktop' : 'sba-snake-mobile'"
        role="group" :aria-label="'Схема блоков: ' + snakeSummary">
        <div v-for="line in snakeRows(columns)" :key="line.id" class="sba-snake-row"
          :class="{ 'sba-snake-reverse': line.reverse, 'sba-snake-continues': line.continued }">
          <button v-for="item in line.items" :key="item.id" type="button" draggable="true"
            class="sba-snake-chip" :data-sba-snake-id="item.id" :data-sba-energy="item.energy"
            :aria-label="'Переместить ' + item.snakeLabel + ', позиция ' + (item.index + 1) +
              ' из ' + blocks.length + ', энергия ' + item.energy + '/5'"
            :title="(item.index + 1) + '. ' + item.snakeLabel +
              ' · энергия ' + item.energy + '/5 · перетащи для перестановки'">
            <span class="sba-snake-num">{{ item.index + 1 }}</span>
            <span class="sba-snake-icon" aria-hidden="true">{{ item.icon }}</span>
            <span class="sba-snake-title">{{ item.snakeLabel }}</span>
            <span class="sba-snake-level">{{ item.energy }}/5</span>
            <span v-if="item.hasTransition" class="sba-snake-transition"
              :title="'Переход: ' + item.transitionLabel" aria-hidden="true">↝</span>
          </button>
        </div>
      </div>
      <p v-if="visibleSnake.length < blocks.length" class="sba-snake-more">
        … и ещё {{ blocks.length - visibleSnake.length }} блоков
      </p>
    </template>
    <p v-else class="sba-snake-empty">Добавь первый блок, и здесь появится схема композиции.</p>
  </template>

  <template v-else-if="kind === 'transitions'">
    <template v-if="transitions.length">
      <div v-for="item in visibleTransitions" :key="item.id" class="sba-transition-hub-row"
        :class="{ 'sba-transition-hub-active': item.current.type !== 'none' }"
        :data-sba-hub-from="item.id">
        <div class="sba-transition-hub-route">
          <span class="sba-transition-hub-number">{{ item.index + 1 }} → {{ item.index + 2 }}</span>
          <span class="sba-transition-hub-names">{{ item.from }} <b>→</b> {{ item.to }}</span>
        </div>
        <div class="sba-transition-hub-controls">
          <label>Эффект
            <select data-sba-transition="type" :data-id="item.id" :value="item.current.type"
              :aria-label="'Переход ' + (item.index + 1) + ' к ' + (item.index + 2)">
              <option v-for="option in transitionTypes" :key="option.id" :value="option.id">{{ option.name }}</option>
            </select>
          </label>
          <label>Длина
            <select data-sba-transition="length" :data-id="item.id" :value="item.current.length"
              :aria-label="'Длительность перехода ' + (item.index + 1)">
              <option v-for="option in transitionLengths" :key="option.id" :value="option.id">{{ option.name }}</option>
            </select>
          </label>
          <label>Сила
            <select data-sba-transition="strength" :data-id="item.id" :value="item.current.strength"
              :aria-label="'Выраженность перехода ' + (item.index + 1)">
              <option v-for="option in transitionStrengths" :key="option.id" :value="option.id">{{ option.name }}</option>
            </select>
          </label>
        </div>
        <div class="sba-transition-hub-actions">
          <button type="button" data-sba-action="transition-suggest" :data-id="item.id"
            :title="'Совет: ' + item.advice">✧ Совет</button>
          <button type="button" data-sba-action="transition-hub-jump" :data-id="item.id">Подробнее ↓</button>
        </div>
      </div>
    </template>
    <p v-else class="sba-transition-hub-empty">Добавь второй блок, и здесь можно будет настроить переходы.</p>
  </template>

  <template v-else-if="kind === 'energy'">
    <div v-for="item in blocks" :key="item.id" class="sba-chart-step"
      :title="item.label + ' · ' + item.energy + '/5'"
      :style="{ '--energy': item.energy, '--bar-width': 100 / blocks.length + '%' }">
      <div class="sba-chart-column"><i :style="{ '--level': item.energy }"></i></div>
      <small>{{ item.icon }}</small>
    </div>
  </template>
</template>
