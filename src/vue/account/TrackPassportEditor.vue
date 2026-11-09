<script setup>
import { computed, reactive } from 'vue';

// All field ids and tp-* actions are the original contract: index.html alone
// validates HTTPS, creates/updates tracks, links resources and persists data.
const props = defineProps({
  model: { type: Object, required: true },
  api: { type: Object, required: true }
});
const fields = reactive({ ...props.model.fields });
const automaticDate = computed(() => props.api.date7(fields.submitted));
const dateHint = computed(() => automaticDate.value
  ? 'Автоматический расчёт: ' + props.api.dateLabel(automaticDate.value) + ' (через 7 календарных дней).'
  : 'Укажи дату передачи издательству: релиз автоматически через 7 дней.');

function syncDate() {
  if (!fields.override) fields.release = automaticDate.value;
}

const basicInputs = [
  { id: 'title', label: 'Название трека *', placeholder: 'Название песни', max: 120 },
  { id: 'artist', label: 'Исполнитель', placeholder: 'Например, Лада Искра', max: 120 },
  { id: 'publisher', label: 'Издательство / дистрибьютор', placeholder: 'Название издательства', max: 120 }
];
const mediaInputs = [
  { id: 'cover', label: 'Ссылка на обложку (HTTPS)', placeholder: 'https://…', max: 2000 },
  { id: 'audio', label: 'Ссылка на трек в Suno / облаке (HTTPS)', placeholder: 'https://…', max: 2000 },
  { id: 'authors', label: 'Авторы текста и музыки', placeholder: 'Необязательно', max: 250 },
  { id: 'isrc', label: 'ISRC', placeholder: 'Если уже присвоен', max: 24 }
];
const textAreas = [
  { id: 'arrangement', label: 'Аранжировка / вокал / звук', max: 4000, rows: 4 },
  { id: 'lyrics', label: 'Текст песни, если нет связанной идеи', max: 20000, rows: 6 },
  { id: 'style', label: 'Промпт Suno Style, если нет связанного промпта', max: 1000, rows: 4 },
  { id: 'notes', label: 'Продюсерские заметки', max: 5000, rows: 4 }
];
</script>

<template>
  <div id="sb-track-form" class="panel sb-track-form" data-sb-vue-track-editor-view>
    <div class="sb-track-formhead">
      <h2>{{ model.editing ? 'Редактировать паспорт' : 'Новый паспорт трека' }}</h2>
      <button type="button" class="btn ghost small" data-action="tp-cancel">Закрыть</button>
    </div>
    <div class="sb-track-fields">
      <div v-for="field in basicInputs.slice(0, 2)" :key="field.id" class="field">
        <label :for="'tp-' + field.id">{{ field.label }}</label>
        <input :id="'tp-' + field.id" v-model="fields[field.id]"
          :maxlength="field.max" :placeholder="field.placeholder">
      </div>
      <div class="field">
        <label for="tp-status">Этап работы</label>
        <select id="tp-status" v-model="fields.status">
          <option v-for="stage in model.stages" :key="stage.value" :value="stage.value">{{ stage.label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="tp-genre">Жанр</label>
        <select id="tp-genre" v-model="fields.genre">
          <option v-for="genre in model.genres" :key="genre.value" :value="genre.value">{{ genre.label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="tp-project">Мой проект / артист</label>
        <select id="tp-project" v-model="fields.project">
          <option value="">Без связи</option>
          <option v-for="item in model.projects" :key="item.value" :value="item.value">{{ item.label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="tp-idea">Идея и текст песни</label>
        <select id="tp-idea" v-model="fields.idea">
          <option value="">Без связи</option>
          <option v-for="item in model.ideas" :key="item.value" :value="item.value">{{ item.label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="tp-prompt">Мой промпт Suno</label>
        <select id="tp-prompt" v-model="fields.prompt">
          <option value="">Без связи</option>
          <option v-for="item in model.prompts" :key="item.value" :value="item.value">{{ item.label }}</option>
        </select>
      </div>
      <div class="field">
        <label for="tp-publisher">Издательство / дистрибьютор</label>
        <input id="tp-publisher" v-model="fields.publisher"
          maxlength="120" placeholder="Название издательства">
      </div>
    </div>

    <h3 class="sb-track-section">Даты релиза</h3>
    <div class="sb-track-fields">
      <div class="field">
        <label for="tp-submitted">Передано издательству</label>
        <input id="tp-submitted" v-model="fields.submitted" type="date" @change="syncDate">
      </div>
      <div class="field">
        <label for="tp-release">Дата выхода</label>
        <input id="tp-release" v-model="fields.release" type="date" :disabled="!fields.override">
        <label class="sb-track-manual">
          <input id="tp-override" v-model="fields.override" type="checkbox" @change="syncDate">
          Установить дату вручную
        </label>
      </div>
    </div>
    <p id="tp-date-hint" class="sb-track-hint">{{ dateHint }}</p>

    <h3 class="sb-track-section">Материалы и метаданные</h3>
    <div class="sb-track-fields">
      <div v-for="field in mediaInputs" :key="field.id" class="field">
        <label :for="'tp-' + field.id">{{ field.label }}</label>
        <input :id="'tp-' + field.id" v-model="fields[field.id]"
          :maxlength="field.max" :placeholder="field.placeholder">
      </div>
    </div>
    <div v-for="field in textAreas" :key="field.id" class="field">
      <label :for="'tp-' + field.id">{{ field.label }}</label>
      <textarea :id="'tp-' + field.id" v-model="fields[field.id]"
        :maxlength="field.max" :rows="field.rows"></textarea>
    </div>
    <div class="sb-track-buttons">
      <button type="button" class="btn primary" data-action="tp-save">Сохранить паспорт</button>
      <button type="button" class="btn ghost" data-action="tp-cancel">Отмена</button>
    </div>
    <p class="sb-track-disclaimer">
      Обложка и аудио пока прикрепляются ссылками. Загрузка файлов будет доступна после переноса на сервер.
      Данные сохраняются локально и попадают в резервную копию SUNOBOOM.
    </p>
  </div>
</template>
