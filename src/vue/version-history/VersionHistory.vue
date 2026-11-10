<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { formatReleaseDate, historyResults } from './version-model.js';

const props = defineProps({
  model: { type: Object, required: true }
});

const tab = ref('major');
const size = ref('all');
const search = ref('');
const result = computed(() => historyResults(props.model.releases, {
  tab: tab.value, size: size.value, search: search.value
}));
const content = ref(null);
const closeButton = ref(null);
const hasSearch = computed(() => Boolean(search.value.trim()));

function scrollTop() { content.value?.scrollTo({ top: 0, behavior: 'instant' }); }
function selectTab(next) { tab.value = next; scrollTop(); }
function selectSize(next) { size.value = next; scrollTop(); }
function showMinors() { search.value = ''; tab.value = 'minor'; size.value = 'all'; scrollTop(); }
function keyboardTab(event, options, current, callback) {
  const index = options.indexOf(current);
  let next = index;
  if (event.key === 'ArrowRight') next = (index + 1) % options.length;
  else if (event.key === 'ArrowLeft') next = (index + options.length - 1) % options.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = options.length - 1;
  else return;
  event.preventDefault();
  callback(options[next]);
  nextTick(() => {
    const selector = options.length === 2 ? '#sb-vh-tabs [aria-selected="true"]'
      : '#sb-vh-minor-tabs [aria-selected="true"]';
    document.querySelector(selector)?.focus();
  });
}
onMounted(() => nextTick(() => closeButton.value?.focus({ preventScroll: true })));
</script>

<template>
  <div class="sb-vh-vue-layout" data-sb-vue-version-history>
    <header class="sb-vh-header">
      <div>
        <div class="sb-vh-kicker">SUNOBOOM · РАЗВИТИЕ ПРОЕКТА</div>
        <h2 id="sb-vh-title">История версий</h2>
        <p>Текущая версия <strong>v{{ model.currentVersion }}</strong>. Версии сгруппированы по номеру.</p>
      </div>
      <button ref="closeButton" type="button" class="sb-vh-close" aria-label="Закрыть историю версий"
        @click="model.close()">×</button>
    </header>

    <div id="sb-vh-tabs" class="sb-vh-tabs" role="tablist" aria-label="Части номера версии"
      @keydown="keyboardTab($event, ['major', 'minor'], tab, selectTab)">
      <button v-for="option in [{ id: 'major', label: 'Мажорная версия' }, { id: 'minor', label: 'Минорные версии' }]"
        :key="option.id" type="button" class="sb-vh-tab" role="tab"
        :class="{ active: tab === option.id }" :aria-selected="tab === option.id"
        :tabindex="tab === option.id ? 0 : -1" aria-controls="sb-vh-content"
        @click="selectTab(option.id)">{{ option.label }}</button>
    </div>

    <div v-if="tab === 'minor' && !hasSearch" id="sb-vh-minor-tabs" class="sb-vh-minor-tabs"
      role="tablist" aria-label="Масштаб минорных обновлений"
      @keydown="keyboardTab($event, ['all', 'large', 'small'], size, selectSize)">
      <button v-for="option in [{ id: 'all', label: 'Все обновления' }, { id: 'large', label: 'Крупные обновления' }, { id: 'small', label: 'Мелкие обновления' }]"
        :key="option.id" type="button" class="sb-vh-size-tab" role="tab"
        :class="{ active: size === option.id }" :aria-selected="size === option.id"
        :tabindex="size === option.id ? 0 : -1" aria-controls="sb-vh-content"
        @click="selectSize(option.id)">{{ option.label }}</button>
    </div>

    <p id="sb-vh-legend" class="sb-vh-legend">{{ result.legend }}</p>
    <div class="sb-vh-controls">
      <label class="sb-vh-search-label" for="sb-vue-vh-search">
        <span class="sb-vh-visually-hidden">Поиск по истории версий</span>
        <input id="sb-vue-vh-search" v-model="search" type="search" autocomplete="off"
          placeholder="Поиск по всем версиям и вкладкам…" @input="scrollTop">
      </label>
      <span id="sb-vh-subcount" class="sb-vh-count" role="status">{{ result.count }}</span>
    </div>
    <div id="sb-vh-content" ref="content" class="sb-vh-content" role="tabpanel" aria-labelledby="sb-vh-tabs">
      <div v-if="result.mode === 'search' && (result.majors.length || result.large.length || result.small.length)"
        class="sb-vh-search-all">
        <section v-if="result.majors.length" class="sb-vh-search-group">
          <h3>Мажорные версии <span>{{ result.majors.length }}</span></h3>
          <article v-for="group in result.majors" :key="'major-' + group.major"
            class="sb-vh-release sb-vh-major-release">
            <span class="sb-vh-release-no">v{{ group.major }}</span>
            <div class="sb-vh-release-text">
              <p>Мажорная версия {{ group.major }}</p>
              <p class="sb-vh-version-range">
                От v{{ group.items[group.items.length - 1][0] }} до v{{ group.items[0][0] }}
              </p>
            </div>
          </article>
        </section>
        <section v-for="group in [{ title: 'Крупные обновления', entries: result.large, badge: 'Крупное' }, { title: 'Мелкие обновления', entries: result.small, badge: 'Мелкое' }]"
          v-show="group.entries.length" :key="group.title" class="sb-vh-search-group">
          <h3>{{ group.title }} <span>{{ group.entries.length }}</span></h3>
          <div class="sb-vh-release-list">
            <article v-for="release in group.entries" :key="release[0]" class="sb-vh-release">
              <span class="sb-vh-release-no">v{{ release[0] }}</span>
              <div class="sb-vh-release-text">
                <p>{{ release[1] }}</p>
                <div class="sb-vh-search-meta">
                  <time :datetime="release[2]">{{ formatReleaseDate(release[2]) }}</time>
                  <span class="sb-vh-search-tag">{{ group.badge }}</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
      <p v-else-if="result.mode === 'search'" class="sb-vh-empty">
        По запросу совпадений нет ни в одном разделе истории.
      </p>

      <div v-else-if="result.mode === 'major'" class="sb-vh-release-list sb-vh-major-list">
        <article v-for="group in result.majors" :key="group.major" class="sb-vh-release sb-vh-major-release">
          <span class="sb-vh-release-no">v{{ group.major }}</span>
          <div class="sb-vh-release-text">
            <h3>Мажорная версия {{ group.major }}</h3>
            <p>Ветка v{{ group.major }}.x — {{ group.items.length }} сохранённых минорных обновлений.</p>
            <p class="sb-vh-version-range">
              От v{{ group.items[group.items.length - 1][0] }}
              ({{ formatReleaseDate(group.items[group.items.length - 1][2]) }})
              до v{{ group.items[0][0] }} ({{ formatReleaseDate(group.items[0][2]) }})
            </p>
            <button type="button" class="sb-vh-view-minors" @click="showMinors">Просмотреть минорные версии</button>
          </div>
        </article>
      </div>

      <div v-else-if="result.mode === 'minor' && result.entries.length" class="sb-vh-release-list">
        <article v-for="release in result.entries" :key="release[0]" class="sb-vh-release">
          <span class="sb-vh-release-no">v{{ release[0] }}</span>
          <div class="sb-vh-release-text">
            <p>{{ release[1] }}</p>
            <div class="sb-vh-search-meta">
              <time :datetime="release[2]">{{ formatReleaseDate(release[2]) }}</time>
              <span v-if="size === 'all'" class="sb-vh-search-tag">
                {{ release[3] === 'large' ? 'Крупное' : 'Мелкое' }}
              </span>
            </div>
          </div>
        </article>
      </div>
      <p v-else class="sb-vh-empty">По запросу минорные версии не найдены.</p>
    </div>
  </div>
</template>

<style scoped>
.sb-vh-vue-layout { display:flex; flex-direction:column; flex:1 1 auto; min-height:0; min-width:0; }
</style>
