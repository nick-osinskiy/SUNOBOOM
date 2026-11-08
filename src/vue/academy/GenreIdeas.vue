<script setup>
defineProps({
  genre: { type: Object, required: true }
});

// The legacy SUNOBOOM data-action handlers still own the actual save,
// persistence and "move to Studio" operations.
</script>

<template>
  <div class="idea-grid" data-sb-vue-ideas>
    <div v-for="idea in genre.allIdeas" :key="idea.index" class="idea">
      <div class="idea-badge">{{ genre.name }} · {{ idea.mood }}</div>
      <h3>{{ idea.title }}</h3>
      <p>{{ idea.pitch }}</p>
      <div class="actions">
        <button type="button" class="btn primary small"
          data-action="idea-use" :data-id="genre.id" :data-i="idea.index">
          <span aria-hidden="true" v-html="genre.icons.studio"></span> В студию
        </button>
        <button type="button" class="btn ghost small"
          data-action="idea-save" :data-id="genre.id" :data-i="idea.index"
          :aria-pressed="idea.saved ? 'true' : 'false'">
          <span aria-hidden="true" v-html="genre.icons.heart"></span>
          {{ idea.saved ? 'Сохранено' : 'Сохранить' }}
        </button>
      </div>
    </div>
  </div>
</template>
