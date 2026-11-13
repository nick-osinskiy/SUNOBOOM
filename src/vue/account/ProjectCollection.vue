<script setup>
defineProps({ model: { type: Object, required: true } });
</script>

<template>
  <div class="section-title"><h2>Мои проекты ({{ model.items.length }})</h2></div>
  <template v-if="model.items.length">
    <div v-for="project in model.items" :key="project.id"
      class="project-card" :class="{ selected: project.id === model.selectedId }"
      data-action="select-project" :data-id="project.id" role="button" tabindex="0"
      :aria-pressed="project.id === model.selectedId">
      <h3>{{ project.title }}</h3>
      <p>{{ project.genre }} · {{ project.date }}</p>
    </div>
  </template>
  <div v-else class="empty"><span style="display:contents" aria-hidden="true" v-html="model.musicIcon"></span><strong>Проектов пока нет</strong>Создай первый проект выше.</div>
</template>
