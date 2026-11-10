<script setup>
import { computed, nextTick, onMounted, ref } from 'vue';
import { connectedTreeEdges, nextTreeZoom, treeSearch } from './genre-tree-model.js';

const props = defineProps({
  snapshot: { type: Object, required: true },
  treeApi: { type: Object, required: true }
});
const treeId = ref(props.snapshot.tree);
const selectedId = ref(props.snapshot.selected);
const query = ref(props.snapshot.query || '');
const zoom = ref(props.snapshot.zoom || 1);
const groupJump = ref('');
const viewport = ref(null);
const canvas = ref(null);
const genres = props.snapshot.genres;
const byId = new Map(genres.map(item => [item.id, item]));
const allTrees = props.snapshot.trees;
const relations = props.snapshot.relations;
const stageLabels = props.snapshot.stageLabels;
const active = computed(() => allTrees.find(t => t.id === treeId.value) || allTrees[0]);
const all = computed(() => active.value.id === 'all');
const columns = computed(() => active.value.columns.map((ids, index) => ({
  index, group: all.value ? active.value.groups[index] : null,
  entries: ids.map(id => byId.get(id)).filter(Boolean)
})));
const nodeCount = computed(() => columns.value.reduce((count, column) => count + column.entries.length, 0));
const selected = computed(() => byId.get(selectedId.value) || byId.get(active.value.focus));
const related = computed(() => connectedTreeEdges(active.value, selectedId.value)
  .filter(([from, to]) => from === selectedId.value || to === selectedId.value)
  .map(([from, to, type, note]) => {
    const other = byId.get(from === selectedId.value ? to : from);
    return other ? {
      id: other.id, name: other.name, type, note,
      direction: from === selectedId.value ? '→' : '←'
    } : null;
  }).filter(Boolean));
const sameFamily = computed(() => all.value && selected.value
  ? genres.filter(item => item.id !== selectedId.value && item.family === selected.value.family).slice(0, 8)
  : []);
const matching = computed(() => treeSearch(genres, allTrees, query.value, treeId.value));
const dim = genre => Boolean(query.value.trim())
  && !genre.name.toLocaleLowerCase('ru').includes(query.value.trim().toLocaleLowerCase('ru'));

function redraw() {
  nextTick(() => requestAnimationFrame(() => props.treeApi.drawLines()));
}
function setTree(id) {
  const next = props.treeApi.changeTree(id);
  if (!next) return;
  treeId.value = next.tree;
  selectedId.value = next.selected;
  query.value = '';
  groupJump.value = '';
  redraw();
}
function selectNode(id) {
  if (!byId.has(id) || !props.treeApi.select(id)) return;
  selectedId.value = id;
  redraw();
}
function changeZoom(action) {
  const value = nextTreeZoom(zoom.value, action);
  props.treeApi.setZoom(value);
  zoom.value = value;
  redraw();
}
function onSearch(event) {
  query.value = event.target.value;
  props.treeApi.setQuery(query.value);
}
function searchJump(item) {
  const next = props.treeApi.searchJump(item.tree, item.id);
  if (!next) return;
  treeId.value = next.tree;
  selectedId.value = next.selected;
  query.value = '';
  groupJump.value = '';
  nextTick(() => {
    const element = [...(canvas.value?.querySelectorAll('.sb-gt-node') || [])]
      .find(node => node.dataset.id === item.id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    redraw();
  });
}
function jumpToFamily(event) {
  groupJump.value = event.target.value;
  const target = [...(canvas.value?.querySelectorAll('[data-sb-gt-family]') || [])]
    .find(el => el.dataset.sbGtFamily === groupJump.value);
  target?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
}
onMounted(redraw);
</script>

<template>
  <div class="sb-gt-vue-content" data-sb-vue-genre-tree>
    <div class="sb-gt-head">
      <div>
        <span class="sb-gt-kicker">SUNOBOOM · ИСТОРИЯ МУЗЫКИ</span>
        <h2>От истоков к новым жанрам</h2>
        <p>Нажми на жанр в схеме, чтобы увидеть его историю и связи. Затем открой его существующую карточку в Академии.</p>
      </div>
      <div class="sb-gt-count">
        {{ nodeCount }} жанров{{ all ? ' · ' + active.groups.length + ' направлений' : ' в схеме' }}
      </div>
    </div>

    <div class="sb-gt-controls">
      <label for="sb-gt-tree-choice">Карта жанров</label>
      <select id="sb-gt-tree-choice" :value="treeId" aria-label="Выберите музыкальное древо"
        @change="setTree($event.target.value)">
        <option v-for="item in allTrees" :key="item.id" :value="item.id">
          {{ item.icon }} {{ item.label }}
        </option>
      </select>
      <template v-if="all">
        <label for="sb-gt-group-jump">Перейти к направлению</label>
        <select id="sb-gt-group-jump" :value="groupJump" aria-label="Перейти к музыкальному направлению"
          @change="jumpToFamily">
          <option value="">Выберите раздел…</option>
          <option v-for="(group, index) in active.groups" :key="group.name" :value="String(index)">
            {{ group.icon }} {{ group.name }} ({{ group.ids.length }})
          </option>
        </select>
      </template>
    </div>

    <div class="sb-gt-extra">
      <label class="sb-gt-search-label" for="sb-gt-search">
        Поиск жанра по древу
        <input id="sb-gt-search" :value="query" type="search"
          placeholder="Например: ска-панк" autocomplete="off" @input="onSearch">
      </label>
      <div class="sb-gt-zoom">
        <span>Масштаб карты</span>
        <button type="button" data-sb-gt-action="zoom-out" aria-label="Уменьшить масштаб"
          @click="changeZoom('zoom-out')">−</button>
        <output id="sb-gt-zoom-label">{{ Math.round(zoom * 100) }}%</output>
        <button type="button" data-sb-gt-action="zoom-in" aria-label="Увеличить масштаб"
          @click="changeZoom('zoom-in')">+</button>
        <button type="button" data-sb-gt-action="zoom-reset"
          @click="changeZoom('zoom-reset')">Сброс</button>
      </div>
    </div>
    <div id="sb-gt-search-results" class="sb-gt-search-results" aria-live="polite">
      <template v-if="query.trim()">
        <template v-if="matching.count">
          <div class="sb-gt-search-title">
            Найдено в коллекции: {{ matching.count }}{{ matching.count > 30 ? ' · показаны первые 30' : '' }}
          </div>
          <div class="sb-gt-search-links">
            <button v-for="item in matching.items" :key="item.id" type="button"
              data-sb-gt-action="search-jump" :data-id="item.id" :data-tree="item.tree"
              @click="searchJump(item)">{{ item.name }} <small>({{ item.family }})</small></button>
          </div>
        </template>
        <p v-else class="sb-gt-search-empty">Жанр не найден в коллекции Академии.</p>
      </template>
    </div>
    <p class="sb-gt-intro">{{ active.intro }}</p>
    <div class="sb-gt-legend">
      <span v-for="(relation, kind) in relations" :key="kind">
        <i :style="{ '--rel-color': relation.color }"></i>{{ relation.label }}
      </span>
    </div>

    <div ref="viewport" class="sb-gt-viewport" tabindex="0"
      :aria-label="all ? 'Все жанры Академии по музыкальным направлениям, горизонтальная прокрутка' : 'Схема связей: горизонтально прокручиваемая карта жанров'">
      <div ref="canvas" class="sb-gt-canvas" :class="{ 'sb-gt-canvas-all': all }"
        :style="{ zoom, '--sb-gt-family-count': all ? active.columns.length : 4 }">
        <svg class="sb-gt-lines" aria-hidden="true"></svg>
        <div class="sb-gt-columns" :class="{ 'sb-gt-columns-all': all }">
          <div v-for="column in columns" :key="treeId + ':' + column.index"
            class="sb-gt-column" :class="{ 'sb-gt-column-all': all }"
            :data-sb-gt-family="all ? String(column.index) : null">
            <div v-if="all" class="sb-gt-stage sb-gt-family-heading"
              :style="{ '--sb-gt-family-accent': column.group.accent }">
              <strong>{{ column.group.icon }} {{ column.group.name }}</strong>
              <span>{{ column.entries.length }}</span>
            </div>
            <div v-else class="sb-gt-stage"><span>0{{ column.index + 1 }}</span>{{ stageLabels[column.index] }}</div>
            <div class="sb-gt-node-list">
              <button v-for="genre in column.entries" :key="genre.id" type="button"
                class="sb-gt-node"
                :class="{ 'is-selected': selectedId === genre.id, 'sb-gt-search-dim': dim(genre) }"
                data-sb-gt-action="select" :data-id="genre.id"
                :aria-pressed="selectedId === genre.id" @click="selectNode(genre.id)">
                <span class="sb-gt-node-name">{{ genre.name }}</span>
                <span class="sb-gt-node-era">{{ genre.era || genre.family || '' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selected" id="sb-gt-description" class="sb-gt-detail" aria-live="polite">
      <div class="sb-gt-detail-top">
        <div>
          <div class="sb-gt-kicker">ВЫБРАННОЕ НАПРАВЛЕНИЕ</div>
          <h3>{{ selected.name }}</h3>
          <p class="sb-gt-sub">{{ selected.era || '' }} · {{ selected.family || '' }}</p>
        </div>
        <button type="button" class="btn primary sb-gt-open" data-sb-gt-action="open"
          :data-id="selected.id" @click="treeApi.openGenre(selected.id)">Открыть карточку ↗</button>
      </div>
      <p class="sb-gt-description">{{ selected.description || selected.tagline || 'Описание в карточке жанра.' }}</p>
      <template v-if="related.length">
        <h4>Исторические связи</h4>
        <div class="sb-gt-related">
          <button v-for="item in related" :key="item.id + ':' + item.type" type="button"
            class="sb-gt-related-btn" data-sb-gt-action="select" :data-id="item.id"
            @click="selectNode(item.id)">
            <span class="sb-gt-related-mark" :class="'sb-gt-' + item.type">{{ item.direction }}</span>
            <span><strong>{{ item.name }}</strong><small>{{ item.note }}</small></span>
          </button>
        </div>
      </template>
      <p v-else-if="!all" class="sb-gt-note">У этого узла пока нет нарисованных связей в выбранной схеме.</p>
      <template v-if="all && sameFamily.length">
        <h4>Другие жанры раздела «{{ selected.family }}»</h4>
        <div class="sb-gt-related">
          <button v-for="item in sameFamily" :key="item.id" type="button"
            class="sb-gt-related-btn" data-sb-gt-action="select" :data-id="item.id"
            @click="selectNode(item.id)">
            <span class="sb-gt-related-mark">♫</span>
            <span><strong>{{ item.name }}</strong></span>
          </button>
        </div>
      </template>
    </div>
    <p class="sb-gt-note">Схема показывает основные исторические влияния и стилистические пересечения. Жанры могут развиваться параллельно; стрелки не означают единственное происхождение.</p>
  </div>
</template>

<style scoped>
.sb-gt-vue-content { display:grid; gap:16px; min-width:0; }
</style>
