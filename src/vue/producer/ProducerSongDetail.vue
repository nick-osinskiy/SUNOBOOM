<script setup>
import { reactive, watch } from 'vue';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';

// Presentation only. The original producer-center.js owns all input actions,
// confirmation dialogs, validation and persistence in sunoboom-v1.
const props = defineProps({
  model: { type: Object, required: true }
});
const ui = useLegacyUiStore();
watch(() => props.model, snapshot => ui.publishMasterDetailSummary(snapshot), { immediate:true });
const fields = reactive({
  title: props.model.title,
  artist: props.model.artist,
  notes: props.model.notes
});
const links = reactive(Object.fromEntries(
  props.model.links.map(link => [link.field, link.value])
));
const statuses = reactive(Object.fromEntries(
  props.model.stages.map(stage => [stage.key, stage.status])
));
</script>

<template>
  <div class="sbpc-workspace" data-sb-vue-producer-detail>
    <section class="sbpc-panel sbpc-song-head">
      <div class="sbpc-head-top">
        <span class="sbpc-kicker">КАРТОЧКА ПРОДЮСИРОВАНИЯ</span>
        <span class="sbpc-completion">{{ model.percent }}% готовности</span>
      </div>
      <h2>{{ model.title || 'Без названия' }}</h2>
      <p>{{ model.artist || 'Исполнитель пока не указан' }}{{ model.projectTitle ? ' · ' + model.projectTitle : '' }}</p>
      <p class="sbpc-next">{{ model.nextLabel ? 'Следующий этап: ' + model.nextLabel : 'Все этапы отмечены готовыми' }}</p>
      <p v-if="ui.passportDetailSummary.ready" class="sbpc-help" data-sb-vue-passport-detail-recap>
        Последний открытый паспорт: {{ ui.passportDetailSummary.versionCount }} аудиоверсий · {{ ui.passportDetailSummary.linkedCount }} из 3 материалов связано
      </p>
      <div class="sbpc-meta-editor">
        <label>Название песни
          <input id="sbpc-title" v-model="fields.title" type="text" maxlength="120">
        </label>
        <label>Артист / проект
          <input id="sbpc-artist" v-model="fields.artist" type="text" maxlength="120">
        </label>
        <label class="sbpc-wide">Продюсерские заметки
          <textarea id="sbpc-notes" v-model="fields.notes" rows="3" maxlength="3500"
            placeholder="Что важно сохранить об этой песне?"></textarea>
        </label>
      </div>
      <div class="sbpc-head-actions">
        <button type="button" class="sbpc-main-btn" data-pc-action="save-details">Сохранить карточку</button>
        <button type="button" class="sbpc-delete-btn" data-pc-action="delete">Удалить рабочую карточку</button>
      </div>
      <p class="sbpc-help">Удаление рабочей карточки не удаляет идеи, паспорта, промпты и аудио.</p>
    </section>

    <section class="sbpc-panel">
      <header class="sbpc-panel-head">
        <h3>Маршрут песни</h3>
        <span>{{ model.done }} из {{ model.total }} этапов</span>
      </header>
      <div class="sbpc-progress" role="progressbar" aria-label="Готовность работы"
        aria-valuemin="0" aria-valuemax="100" :aria-valuenow="model.percent">
        <span :style="{ width: model.percent + '%' }"></span>
      </div>
      <div class="sbpc-stages">
        <article v-for="stage in model.stages" :key="stage.key" class="sbpc-stage" :data-status="statuses[stage.key]">
          <div class="sbpc-stage-index">{{ statuses[stage.key] === 'done' ? '✓' : stage.index }}</div>
          <div class="sbpc-stage-body">
            <div class="sbpc-stage-title"><strong>{{ stage.title }}</strong><small>{{ stage.desc }}</small></div>
            <div class="sbpc-stage-state">
              <span v-if="stage.hasMaterial" class="sbpc-resource-present">● {{ stage.materialLabel }}</span>
              <span v-else class="sbpc-resource-empty">○ Подтверждённых материалов нет</span>
            </div>
            <div class="sbpc-stage-actions">
              <label>Готовность
                <select v-model="statuses[stage.key]" :data-pc-stage="stage.key" :aria-label="'Этап ' + stage.title">
                  <option v-for="status in model.statuses" :key="status.id" :value="status.id">{{ status.label }}</option>
                </select>
              </label>
              <button type="button" data-pc-action="open-stage" :data-step="stage.key">Открыть инструмент ↗</button>
            </div>
          </div>
        </article>
      </div>
      <p class="sbpc-help">Готовность отмечается вручную. Наличие материала показано отдельно и не считается автоматически завершённым этапом.</p>
    </section>

    <section class="sbpc-panel">
      <header class="sbpc-panel-head"><h3>Связанные материалы</h3><span>Без копирования данных</span></header>
      <p class="sbpc-help">Свяжи существующие идеи, промпты, паспорт трека и карточку с аудио. Исходные записи останутся в своих разделах.</p>
      <div class="sbpc-links">
        <div v-for="link in model.links" :key="link.field" class="sbpc-link-field">
          <label :for="'sbpc-' + link.field">{{ link.label }}</label>
          <select :id="'sbpc-' + link.field" v-model="links[link.field]" :data-pc-link="link.field">
            <option v-for="option in link.options" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
          <button v-if="link.value" type="button" data-pc-action="open-link"
            :data-type="link.type" :data-id="link.value">
            {{ link.available ? 'Перейти к материалу' : 'Материал недоступен' }} ↗
          </button>
        </div>
      </div>
      <button type="button" class="sbpc-main-btn" data-pc-action="save-links">Сохранить связи</button>
    </section>

    <section class="sbpc-panel sbpc-arrangement">
      <header class="sbpc-panel-head">
        <h3>Аранжировка для этой песни</h3>
        <span>{{ model.arrangement.count ? model.arrangement.count + ' блоков сохранено' : 'Снимок ещё не сохранён' }}</span>
      </header>
      <p class="sbpc-help">Конструктор Suno Studio использует текущий рабочий черновик. Сохрани его сюда отдельно для песни; восстановление выполняется только по твоей команде.</p>
      <div class="sbpc-arrangement-actions">
        <button type="button" data-pc-action="capture-arrangement">Сохранить текущую аранжировку</button>
        <button v-if="model.arrangement.count" type="button" data-pc-action="restore-arrangement">Восстановить в Studio</button>
        <button type="button" data-pc-action="open-stage" data-step="arrangement">Открыть аранжировщик ↗</button>
      </div>
      <p v-if="model.arrangement.count" class="sbpc-subnote">
        Сохранено: {{ model.arrangement.savedAt }} · {{ model.arrangement.count }} блоков · {{ model.arrangement.duration || 'длительность не рассчитана' }}
      </p>
    </section>

    <section class="sbpc-panel">
      <header class="sbpc-panel-head"><h3>История работы</h3><span>{{ model.history.length }} событий</span></header>
      <div class="sbpc-log-input">
        <input id="sbpc-history-note" type="text" maxlength="350" placeholder="Добавить запись: что изменилось или что сделать дальше">
        <button type="button" data-pc-action="add-note">Добавить</button>
      </div>
      <ol v-if="model.history.length" class="sbpc-log">
        <li v-for="(item, index) in model.history" :key="index"><time>{{ item.date }}</time><span>{{ item.text }}</span></li>
      </ol>
      <p v-else class="sbpc-empty">История пока пуста.</p>
    </section>
  </div>
</template>
