<script setup>
// Only display is Vue-owned. Original tp-* actions still handle all mutations,
// calendar events, route navigation, version changes and local storage.
defineProps({ model: { type: Object, required: true } });
</script>

<template>
  <div class="sb-track-detail" data-sb-vue-track-detail-view>
    <div class="sb-track-buttons">
      <button type="button" class="btn ghost small" data-action="tp-list">← К списку</button>
      <button type="button" class="btn primary small" data-action="tp-edit" :data-id="model.id">Изменить</button>
      <button type="button" class="btn ghost small" data-action="tp-event" :data-id="model.id">В календарь релизов</button>
      <button type="button" class="btn danger small" data-action="tp-delete" :data-id="model.id">Удалить</button>
    </div>

    <div class="sb-track-hero">
      <div class="sb-track-cover">
        <img v-if="model.cover" :src="model.cover" alt="Обложка" loading="lazy">
        <template v-else>♫</template>
      </div>
      <div>
        <span class="sb-track-phase">{{ model.phase }}</span>
        <h2>{{ model.title }}</h2>
        <p>{{ model.artist }}</p>
      </div>
    </div>

    <div class="sb-track-facts">
      <div v-for="fact in model.facts" :key="fact.label" class="sb-track-fact">
        <span>{{ fact.label }}</span>
        <strong>{{ fact.value || 'Не указано' }}</strong>
      </div>
    </div>

    <div class="sb-track-buttons">
      <a v-if="model.audio" class="btn ghost" :href="model.audio"
        rel="noopener noreferrer" target="_blank">Прослушать ↗</a>
      <a v-if="model.cover" class="btn ghost" :href="model.cover"
        rel="noopener noreferrer" target="_blank">Обложка ↗</a>
    </div>

    <h3 class="sb-track-section">Связанные материалы</h3>
    <div class="sb-track-linkgrid">
      <button v-if="model.links[0].exists" type="button" class="sb-track-linked"
        :data-action="model.links[0].action" :data-id="model.links[0].id">
        <small>{{ model.links[0].label }}</small>
        <strong>{{ model.links[0].title }}</strong>
        <span>Открыть →</span>
      </button>
      <div v-else class="sb-track-linked sb-track-linked-empty">
        <small>{{ model.links[0].label }}</small><strong>Не привязан</strong>
      </div>
      <button v-if="model.links[1].exists" type="button" class="sb-track-linked"
        :data-action="model.links[1].action" :data-id="model.links[1].id">
        <small>{{ model.links[1].label }}</small>
        <strong>{{ model.links[1].title }}</strong>
        <span>Открыть →</span>
      </button>
      <div v-else class="sb-track-linked sb-track-linked-empty">
        <small>{{ model.links[1].label }}</small><strong>Не привязан</strong>
      </div>
      <button v-if="model.links[2].exists" type="button" class="sb-track-linked"
        :data-action="model.links[2].action" :data-id="model.links[2].id">
        <small>{{ model.links[2].label }}</small>
        <strong>{{ model.links[2].title }}</strong>
        <span>Открыть →</span>
      </button>
      <div v-else class="sb-track-linked sb-track-linked-empty">
        <small>{{ model.links[2].label }}</small><strong>Не привязан</strong>
      </div>
    </div>

    <section v-for="section in model.sections" :key="section.label" class="sb-track-sectionbox">
      <h3>{{ section.label }}</h3>
      <pre>{{ section.text }}</pre>
    </section>

    <h3 class="sb-track-section">Версии трека ({{ model.versions.length }})</h3>
    <template v-if="model.versions.length">
      <div v-for="version in model.versions" :key="version.id" class="sb-track-version">
        <div>
          <strong>{{ version.label }}</strong>
          <small>{{ version.date }}</small>
          <p v-if="version.notes">{{ version.notes }}</p>
        </div>
        <div>
          <a v-if="version.url" :href="version.url" rel="noopener noreferrer"
            target="_blank">Прослушать ↗</a>
          <button type="button" class="btn danger small" data-action="tp-version-remove"
            :data-id="model.id" :data-version="version.id"
            :aria-label="'Удалить версию ' + version.label">×</button>
        </div>
      </div>
    </template>
    <p v-else class="sb-track-disclaimer">Версий пока нет.</p>

    <div class="sb-track-versionform">
      <div class="field">
        <label for="tp-version-title">Название новой версии</label>
        <input id="tp-version-title" maxlength="100" placeholder="Демо 2 / Финальный мастер">
      </div>
      <div class="field">
        <label for="tp-version-url">Ссылка (HTTPS)</label>
        <input id="tp-version-url" type="url" maxlength="2000" placeholder="https://…">
      </div>
      <div class="field">
        <label for="tp-version-notes">Что изменилось?</label>
        <input id="tp-version-notes" maxlength="300" placeholder="Необязательно">
      </div>
      <button type="button" class="btn ghost" data-action="tp-version-add"
        :data-id="model.id">+ Добавить версию</button>
    </div>
    <p class="sb-track-disclaimer">
      Связанный текст и промпт показываются из оригинальных разделов.
      Расчётные даты — ориентир, окончательная дата определяется издательством.
    </p>
  </div>
</template>
