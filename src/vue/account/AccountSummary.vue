<script setup>
defineProps({
  model: { type: Object, required: true },
  kind: { type: String, required: true }
});
</script>

<template>
  <template v-if="kind === 'profile'">
    <div class="account-avatar">{{ model.avatar }}</div>
    <div><h2>{{ model.name }}</h2><p>Локальный профиль · SUNOBOOM 0.55</p><span class="small-chip">Данные хранятся в этом браузере</span></div>
  </template>
  <template v-else>
    <div class="stat"><div><strong>{{ model.counts.projects }}</strong><span>моих проектов</span></div></div>
    <div class="stat"><div><strong>{{ model.counts.favorites }}</strong><span>любимых жанров</span></div></div>
    <div class="stat"><div><strong>{{ model.counts.saved }}</strong><span>сохранённых идей и промптов</span></div></div>
  </template>
</template>
