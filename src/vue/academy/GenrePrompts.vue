<script setup>
defineProps({
  genre: { type: Object, required: true }
});

// Keep original text and studio action semantics. The prompt constructor
// (including user-selected vocals, language, mood and tempo) is still managed
// by SUNOBOOM's existing tools.
</script>

<template>
  <div class="panel" data-sb-vue-prompts>
    <h3>Шаблоны звучания</h3>
    <p>Начни с одного из вариантов. Он перенесёт настройки жанра в конструктор — там можно выбрать вокал, настроение и язык.</p>
    <div class="idea-grid">
      <div class="idea">
        <div class="idea-badge">Оригинальное звучание</div>
        <h3>{{ genre.name }}</h3>
        <p>{{ genre.style }}.</p>
        <button type="button" class="btn primary small"
          data-action="use-genre" :data-id="genre.id">
          Настроить в студии <span aria-hidden="true" v-html="genre.icons.arrow"></span>
        </button>
      </div>
      <div class="idea">
        <div class="idea-badge">Альтернативная версия</div>
        <h3>Мягкая атмосфера</h3>
        <p>{{ genre.style }}, restrained dynamics, warm intimate production, emotional melodies.</p>
        <button type="button" class="btn ghost small"
          data-action="use-soft" :data-id="genre.id">
          Настроить в студии <span aria-hidden="true" v-html="genre.icons.arrow"></span>
        </button>
      </div>
    </div>
  </div>
</template>
