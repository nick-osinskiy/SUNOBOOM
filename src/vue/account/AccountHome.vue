<script setup>
import { onMounted, reactive, ref } from 'vue';
import AccountSummary from './AccountSummary.vue';
const props = defineProps({ initial: { type: Object, required: true }, api: { type: Object, required: true } });
const draft = reactive({ name: props.initial.profileName });
const stats = ref(null);
const syncStats = () => props.api.syncStats(stats.value);
onMounted(syncStats);
</script>

<template>
  <header class="heading"><div class="eyebrow">ЛИЧНОЕ ПРОСТРАНСТВО</div><h1>Личный кабинет</h1><p>Твои музыкальные проекты, избранные материалы и резервные копии — всё в одном месте.</p></header>
  <div id="sb-vue-account-profile" class="account-head panel"><AccountSummary :model="initial.summary" kind="profile" /></div>
  <div id="sb-vue-account-stats" ref="stats" class="account-stats" @scroll.passive="syncStats"><AccountSummary :model="initial.summary" kind="stats" /></div>
  <div class="account-grid">
    <button v-for="tile in initial.tiles" :key="tile.key" v-bind="tile.attrs">
      <template v-for="(part, index) in tile.parts" :key="index">
        <component :is="part.tag" v-if="part.icon" v-bind="part.attrs" v-html="part.html" />
        <component :is="part.tag" v-else v-bind="part.attrs">{{ part.text }}</component>
      </template>
    </button>
  </div>
  <div class="two-col account-settings">
    <div class="panel"><h3>👤 Настройки профиля</h3><p>Это отображаемое имя только для этого устройства, без регистрации и пароля.</p>
      <div class="field"><label for="profile-name">Имя в кабинете</label><input id="profile-name" v-model="draft.name" type="text" maxlength="60" autocomplete="off" placeholder="Как тебя называть?"></div>
      <button type="button" class="btn primary" data-action="save-profile"><span style="display:contents" aria-hidden="true" v-html="initial.icons.check"></span> Сохранить имя</button>
    </div>
    <div class="panel"><h3>💾 Резервная копия</h3><p>Сохраняй проекты и избранное в JSON-файл или восстанавливай данные из ранее созданной копии.</p>
      <div class="detail-actions">
        <button type="button" class="btn ghost" data-action="export"><span style="display:contents" aria-hidden="true" v-html="initial.icons.download"></span> Экспорт данных</button>
        <button type="button" class="btn ghost" data-action="import"><span style="display:contents" aria-hidden="true" v-html="initial.icons.plus"></span> Импорт данных</button>
        <input id="import-file" type="file" accept=".json,application/json" style="display:none">
      </div>
    </div>
  </div>
  <div class="account-notice">🔒 Этот кабинет пока не является защищённой учётной записью. Данные сохраняются локально в браузере и не синхронизируются между устройствами. Адрес сайта GitHub Pages остаётся публичным.</div>
</template>
