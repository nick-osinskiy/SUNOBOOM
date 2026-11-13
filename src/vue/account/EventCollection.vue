<script setup>
defineProps({ model: { type: Object, required: true } });
</script>

<template>
  <template v-for="group in model.groups" :key="group.key">
    <div class="section-title"><h2>{{ group.title }} ({{ group.items.length }})</h2></div>
    <div v-if="group.items.length" class="dash-event-list">
      <article v-for="event in group.items" :key="event.id" class="dash-event-row">
        <div class="dash-event-date"><strong>{{ event.date }}</strong><span>{{ event.time }}</span></div>
        <div class="dash-event-main">
          <div class="dash-entry-meta">{{ event.type }}</div>
          <h3>{{ event.title }}</h3>
          <p v-if="event.notes">{{ event.notes }}</p>
          <div class="sb-event-reminder-summary">{{ event.reminder }}</div>
        </div>
        <div class="dash-event-controls">
          <button type="button" class="btn ghost small" data-action="event-edit" :data-id="event.id">Изменить</button>
          <button type="button" class="btn danger small" data-action="event-delete" :data-id="event.id">Удалить</button>
        </div>
      </article>
    </div>
    <div v-else class="dash-simple-empty">{{ group.empty }}</div>
  </template>
</template>
