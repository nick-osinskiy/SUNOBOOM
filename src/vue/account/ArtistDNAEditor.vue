<script setup>
import { computed, reactive } from 'vue';

const props = defineProps({
  model: { type: Object, required: true },
  api: { type: Object, required: true }
});
// Fields are edited by Vue but the original dna-save/dna-copy-form actions
// still read them by ID. No duplicate storage or save implementation exists.
const fields = reactive({ ...props.model.fields });
const style = computed(() => props.api.stylePreview(fields));

const textFields = [
  { id: 'timbre', key: 'timbre', label: 'Тембр голоса', max: 350, rows: 3 },
  { id: 'delivery', key: 'delivery', label: 'Манера исполнения', max: 350, rows: 3 },
  { id: 'mood', key: 'mood', label: 'Настроение и энергетика', max: 250, rows: 3 },
  { id: 'instruments', key: 'instruments', label: 'Фирменные инструменты и грув', max: 550, rows: 3 },
  { id: 'production', key: 'production', label: 'Продакшн и звучание', max: 500, rows: 3 },
  { id: 'signature', key: 'signature', label: 'Узнаваемая музыкальная особенность', max: 450, rows: 3 }
];
const rules = [
  { id: 'whisper', key: 'noWhisper', label: 'Без шёпота' },
  { id: 'rasp', key: 'noRasp', label: 'Без хрипотцы' },
  { id: 'live', key: 'noLive', label: 'Без шума публики и концерта' },
  { id: 'choir', key: 'noChoir', label: 'Без хора' }
];
const images = [
  { id: 'themes', key: 'themes', label: 'Типичные темы песен (не добавляются в Style автоматически)', max: 800, rows: 3 },
  { id: 'visual', key: 'visual', label: 'Внешность, одежда, обложки, палитра', max: 1500, rows: 3 }
];
</script>

<template>
  <div id="dna-editor" class="panel sb-dna-editor" data-sb-vue-dna-editor>
    <div class="sb-dna-formheader">
      <div>
        <h2>{{ model.editing ? 'Редактирование ДНК' : 'Новый артист' }}</h2>
        <p>Сохрани характер звучания — он будет доступен в Suno Studio и «Паспорте трека».</p>
      </div>
      <button type="button" class="btn ghost small" data-action="dna-cancel">Закрыть</button>
    </div>

    <div class="sb-dna-fields">
      <div class="field">
        <label for="dna-name">Имя артиста *</label>
        <input id="dna-name" v-model="fields.name" maxlength="120" placeholder="Название музыкального проекта">
      </div>
      <div class="field">
        <label for="dna-project">Связанный проект</label>
        <select id="dna-project" v-model="fields.projectId">
          <option v-for="project in model.projects" :key="project.id" :value="project.id">{{ project.title }}</option>
        </select>
      </div>
      <div class="field">
        <label for="dna-genre">Основной жанр</label>
        <select id="dna-genre" v-model="fields.genre">
          <option v-for="genre in model.genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
      </div>
      <div class="field">
        <label for="dna-othergenres">Дополнительные жанры</label>
        <input id="dna-othergenres" v-model="fields.otherGenres" maxlength="240" placeholder="Например, pop, R&B, electropop">
      </div>
      <div class="field">
        <label for="dna-vocal">Тип вокала</label>
        <select id="dna-vocal" v-model="fields.vocal">
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
          <option value="duet">Дуэт</option>
        </select>
      </div>
      <div class="field">
        <label for="dna-language">Язык песни</label>
        <select id="dna-language" v-model="fields.language">
          <option value="Russian">Русский</option>
          <option value="English">Английский</option>
          <option value="Spanish">Испанский</option>
          <option value="Kazakh">Казахский</option>
        </select>
      </div>
    </div>

    <h3 class="sb-dna-formsection">Голос и музыкальный почерк</h3>
    <template v-for="field in textFields" :key="field.id">
      <div v-if="field.id === 'mood'" class="sb-dna-fields">
        <div class="field">
          <label for="dna-tempo-min">Темп от (BPM)</label>
          <input id="dna-tempo-min" v-model="fields.tempoMin" maxlength="3" placeholder="Например, 90">
        </div>
        <div class="field">
          <label for="dna-tempo-max">Темп до (BPM)</label>
          <input id="dna-tempo-max" v-model="fields.tempoMax" maxlength="3" placeholder="Например, 120">
        </div>
      </div>
      <div class="field">
        <label :for="'dna-' + field.id">{{ field.label }}</label>
        <textarea :id="'dna-' + field.id" v-model="fields[field.key]" :maxlength="field.max"
          :rows="field.rows"></textarea>
      </div>
    </template>

    <h3 class="sb-dna-formsection">Запреты и ограничения</h3>
    <div class="sb-dna-checkboxes">
      <label v-for="rule in rules" :key="rule.id">
        <input :id="'dna-' + rule.id" v-model="fields[rule.key]" type="checkbox"> {{ rule.label }}
      </label>
    </div>
    <div class="field">
      <label for="dna-extra">Дополнительные требования к аранжировке</label>
      <textarea id="dna-extra" v-model="fields.extra" rows="3" maxlength="650"></textarea>
    </div>

    <h3 class="sb-dna-formsection">Творческий образ</h3>
    <div v-for="field in images" :key="field.id" class="field">
      <label :for="'dna-' + field.id">{{ field.label }}</label>
      <textarea :id="'dna-' + field.id" v-model="fields[field.key]" :rows="field.rows"
        :maxlength="field.max"></textarea>
    </div>
    <div class="field">
      <label for="dna-portrait">Ссылка на портрет (HTTPS)</label>
      <input id="dna-portrait" v-model="fields.portrait" maxlength="2000" placeholder="https://…">
    </div>

    <h3 class="sb-dna-formsection">Промпт ДНК для Suno</h3>
    <div class="sb-dna-previewbox">
      <div id="dna-style-preview">{{ style }}</div>
      <span id="dna-style-count">{{ style.length }} / 1000</span>
    </div>
    <div class="sb-dna-actions">
      <button type="button" class="btn primary" data-action="dna-save">Сохранить ДНК артиста</button>
      <button type="button" class="btn ghost" data-action="dna-copy-form">Копировать промпт</button>
    </div>
    <p class="sb-dna-muted">
      Описания и запреты — подсказки для генерации, а не гарантия идентичного голоса.
      Все данные пока хранятся локально в браузере.
    </p>
  </div>
</template>
