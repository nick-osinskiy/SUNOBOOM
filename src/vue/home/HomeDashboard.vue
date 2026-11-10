<script setup>
import { useLegacyUiStore } from '../state/legacy-ui-store.js';
const ui = useLegacyUiStore();
// The current dashboard's data and navigation still belong to legacy index.html.
// This component only renders the snapshot; data-action stays delegated to legacy handlers.
defineProps({
  model: { type: Object, required: true },
  navigate: { type: Function, required: true }
});
</script>

<template>
  <div class="sb-vue-dashboard" data-sb-vue-dashboard
    :data-sb-applied-theme="ui.appearance.resolvedTheme">
    <div class="dash-head">
      <div class="dash-eyebrow">ЛИЧНАЯ МУЗЫКАЛЬНАЯ МАСТЕРСКАЯ</div>
      <h1>Твоя музыкальная <span>лаборатория.</span></h1>
      <p>{{ model.profileName }}, здесь твои последние идеи, промпты и музыкальные события — всё под рукой.</p>
      <div class="dash-actions">
        <button type="button" class="btn primary" data-action="nav" data-nav="myideas" @click.stop="navigate('myideas')">＋ Новая идея</button>
        <button type="button" class="btn ghost" data-action="nav" data-nav="myprompts" @click.stop="navigate('myprompts')">＋ Новый промпт</button>
        <button type="button" class="btn ghost" data-action="nav" data-nav="events" @click.stop="navigate('events')">＋ Событие</button>
      </div>
    </div>

    <div class="dash-metrics">
      <div class="dash-metric"><b>{{ ui.dashboardStats.ideaCount }}</b><span>Мои идеи</span></div>
      <div class="dash-metric"><b>{{ ui.dashboardStats.promptCount }}</b><span>Мои промпты</span></div>
      <div class="dash-metric"><b>{{ ui.dashboardStats.eventCount }}</b><span>Мои события</span></div>
    </div>

    <div class="dash-layout">
      <section class="dash-panel">
        <header class="dash-panel-head">
          <div><span class="dash-kicker">💡 ЛИЧНАЯ БИБЛИОТЕКА</span><h2>Мои последние идеи</h2></div>
          <button type="button" class="dash-view-all" data-action="nav" data-nav="myideas" @click.stop="navigate('myideas')">Все идеи →</button>
        </header>
        <div class="dash-list">
          <article v-for="idea in model.ideas" :key="idea.kind + ':' + idea.key" class="dash-entry">
            <div class="dash-entry-meta">{{ idea.label }}</div>
            <h3>{{ idea.title }}</h3>
            <p>{{ String(idea.pitch).slice(0, 180) }}</p>
            <button type="button" class="dash-entry-link" data-action="dash-open-idea"
              :data-kind="idea.kind" :data-id="String(idea.key)">Открыть идею →</button>
          </article>
          <div v-if="!model.ideas.length" class="dash-empty">
            <span>💡</span><strong>Пока нет сохранённых идей</strong>
            <p>Добавь идею в личном кабинете или сохрани сюжет из Idea Lab.</p>
            <button type="button" class="btn ghost small" data-action="nav" data-nav="myideas" @click.stop="navigate('myideas')">Добавить идею →</button>
          </div>
        </div>
      </section>

      <section class="dash-panel">
        <header class="dash-panel-head">
          <div><span class="dash-kicker">🎛️ SUNO STUDIO</span><h2>Мои последние промпты</h2></div>
          <button type="button" class="dash-view-all" data-action="nav" data-nav="myprompts" @click.stop="navigate('myprompts')">Все промпты →</button>
        </header>
        <div class="dash-list">
          <article v-for="prompt in model.prompts" :key="String(prompt.id)" class="dash-entry">
            <div class="dash-entry-meta">{{ prompt.genre || 'Suno Studio' }}{{ prompt.date ? ' · ' + prompt.date : '' }}</div>
            <h3>{{ prompt.title || ((prompt.genre || 'Промпт') + ' · ' + (prompt.mood || 'студия')) }}</h3>
            <p>{{ String(prompt.text || '').slice(0, 180) }}</p>
            <div class="dash-entry-actions">
              <button type="button" class="dash-entry-link" data-action="dash-open-prompt"
                :data-id="String(prompt.id)">Открыть промпт →</button>
              <button type="button" class="dash-copy" data-action="copy-saved"
                :data-id="String(prompt.id)">Копировать</button>
            </div>
          </article>
          <div v-if="!model.prompts.length" class="dash-empty">
            <span>🎛️</span><strong>Пока нет сохранённых промптов</strong>
            <p>Сохрани промпт в Suno Studio или создай собственный.</p>
            <button type="button" class="btn ghost small" data-action="nav" data-nav="myprompts" @click.stop="navigate('myprompts')">Добавить промпт →</button>
          </div>
        </div>
      </section>

      <section class="dash-panel dash-panel-events">
        <header class="dash-panel-head">
          <div><span class="dash-kicker">🗓️ ТВОРЧЕСКИЙ КАЛЕНДАРЬ</span><h2>Мои события</h2></div>
          <button type="button" class="dash-view-all" data-action="nav" data-nav="events" @click.stop="navigate('events')">Все события →</button>
        </header>
        <div class="dash-list">
          <article v-for="event in model.events" :key="String(event.id)" class="dash-entry dash-event">
            <div class="dash-event-date">
              <strong>{{ event.formattedDate }}</strong><span>{{ event.time || 'Весь день' }}</span>
            </div>
            <div class="dash-event-main">
              <div class="dash-entry-meta">{{ event.typeLabel }}{{ event.past ? ' · Прошедшее' : '' }}</div>
              <h3>{{ event.title }}</h3>
              <p v-if="event.notes">{{ String(event.notes).slice(0, 160) }}</p>
            </div>
            <button type="button" class="dash-entry-link" data-action="dash-open-event"
              :data-id="String(event.id)">Подробнее →</button>
          </article>
          <div v-if="!model.events.length" class="dash-empty">
            <span>🗓️</span><strong>Событий пока нет</strong>
            <p>Добавь даты релизов, записи, встречи и другие планы своей музыкальной работы.</p>
            <button type="button" class="btn ghost small" data-action="nav" data-nav="events" @click.stop="navigate('events')">Добавить событие →</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
