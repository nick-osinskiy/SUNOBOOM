<script setup>
import { reactive, onMounted, nextTick } from 'vue';

const props = defineProps({
  model: { type: Object, required: true }
});
// The original account-settings.js still owns storage, validation and actions.
// Preserve IDs and data-sbs-* attributes for its document-level handlers.
const settings = reactive({ ...props.model.settings });
const name = reactive({ value: props.model.name });
const options = [
  { key: 'compact', title: 'Компактный интерфейс', desc: 'Уменьшает отступы и высоту карточек. Больше материалов помещается на экране.' },
  { key: 'largeText', title: 'Увеличенный текст', desc: 'Делает основной пояснительный текст в каталогах, карточках и инструментах крупнее.' },
  { key: 'reduceMotion', title: 'Меньше анимации', desc: 'Отключает декоративные движения и плавные переходы, не влияя на воспроизведение музыки.' }
];
onMounted(() => {
  if (props.model.resetPending) nextTick(() => document.querySelector('#sb-vue-account-settings .sbs-confirm-button')?.focus());
});
</script>

<template>
  <section id="sbs-page" class="sbs-page" data-sb-vue-settings>
    <header class="sbs-heading">
      <button type="button" class="sbs-back" data-sbs-action="close">← Вернуться в кабинет</button>
      <div class="sbs-eyebrow">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div>
      <div class="sbs-heading-row">
        <div>
          <h1>Настройки</h1>
          <p>Настрой музыкальную мастерскую под себя. Изменения применяются сразу и сохраняются в этом браузере.</p>
        </div>
        <span class="sbs-badge">⚙️ ПЕРСОНАЛИЗАЦИЯ</span>
      </div>
    </header>
    <div class="sbs-layout">
      <div class="sbs-main-column">
        <section class="sbs-panel">
          <div class="sbs-panel-head">
            <span class="sbs-symbol" aria-hidden="true">🎨</span>
            <div><h2>Внешний вид</h2><p>Удобная работа на компьютере и телефоне</p></div>
          </div>
          <label class="sbs-field sbs-theme-field" for="sbs-theme">
            <span>Тема приложения</span>
            <select id="sbs-theme" v-model="settings.theme" data-sbs-setting="theme" aria-label="Тема приложения">
              <option v-for="theme in model.themes" :key="theme.id" :value="theme.id">{{ theme.title }}</option>
            </select>
          </label>
          <p class="sbs-help sbs-theme-help">Выбери палитру: тёмную, светлую, системную или одну из четырёх цветных тем. Изменения сохраняются.</p>
          <label v-for="option in options" :key="option.key" class="sbs-option" :for="'sbs-' + option.key">
            <span class="sbs-option-text"><strong>{{ option.title }}</strong><small>{{ option.desc }}</small></span>
            <span class="sbs-switch">
              <input :id="'sbs-' + option.key" v-model="settings[option.key]" type="checkbox"
                :data-sbs-setting="option.key" role="switch" :aria-label="option.title">
              <span class="sbs-switch-track" aria-hidden="true"></span>
            </span>
          </label>
        </section>
        <section class="sbs-panel">
          <div class="sbs-panel-head">
            <span class="sbs-symbol" aria-hidden="true">🏠</span>
            <div><h2>При открытии сайта</h2><p>Выбери стартовый раздел SUNOBOOM</p></div>
          </div>
          <label class="sbs-field" for="sbs-start">
            <span>Стартовая страница</span>
            <select id="sbs-start" v-model="settings.startPage" data-sbs-setting="startPage">
              <option v-for="page in model.pages" :key="page.id" :value="page.id">{{ page.title }}</option>
            </select>
          </label>
          <p class="sbs-help">Применяется при следующем открытии или обновлении сайта. Ссылки на конкретные карточки жанров сохраняют свой переход.</p>
        </section>
        <section class="sbs-panel">
          <div class="sbs-panel-head">
            <span class="sbs-symbol" aria-hidden="true">👤</span>
            <div><h2>Профиль</h2><p>Имя отображается только в локальном кабинете</p></div>
          </div>
          <label class="sbs-field" for="sbs-name">
            <span>Имя в кабинете</span>
            <input id="sbs-name" v-model="name.value" type="text" maxlength="60"
              autocomplete="off" placeholder="Твоё имя">
          </label>
          <button type="button" class="sbs-primary" data-sbs-action="save-name">Сохранить имя</button>
        </section>
      </div>
      <aside class="sbs-side-column">
        <section class="sbs-panel">
          <div class="sbs-panel-head">
            <span class="sbs-symbol" aria-hidden="true">🔒</span>
            <div><h2>Данные и приватность</h2></div>
          </div>
          <p class="sbs-info">Сейчас SUNOBOOM работает как локальный прототип: твои проекты и настройки сохраняются в браузере. Синхронизации между устройствами пока нет.</p>
          <p class="sbs-info">GitHub Pages остаётся публичной демонстрационной площадкой — полноценный закрытый вход по приглашениям ещё не подключён.</p>
          <button type="button" class="sbs-secondary" data-sbs-action="backup">↓ Перейти к резервным копиям</button>
        </section>
        <section class="sbs-panel sbs-reset-panel">
          <div class="sbs-panel-head">
            <span class="sbs-symbol" aria-hidden="true">↺</span>
            <div><h2>Сброс предпочтений</h2></div>
          </div>
          <p class="sbs-info">Вернуть стандартные параметры отображения. Песни, проекты, избранное и имя профиля не удаляются.</p>
          <div v-if="model.resetPending" class="sbs-confirm">
            <strong>Сбросить настройки интерфейса?</strong>
            <div>
              <button type="button" class="sbs-secondary" data-sbs-action="cancel-reset">Отмена</button>
              <button type="button" class="sbs-confirm-button" data-sbs-action="confirm-reset">Да, сбросить</button>
            </div>
          </div>
          <button v-else type="button" class="sbs-secondary" data-sbs-action="reset">Сбросить настройки</button>
        </section>
      </aside>
    </div>
    <p id="sbs-message" class="sbs-message" role="status" aria-live="polite" :hidden="!model.message">{{ model.message }}</p>
  </section>
</template>
