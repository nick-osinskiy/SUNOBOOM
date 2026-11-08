<script setup>
defineProps({ model: { type: Object, required: true } });
</script>
<template>
  <div class="section-title"><h2>Сохранённые промпты ({{ model.items.length }})</h2></div>
  <div v-if="model.items.length" class="saved-list">
    <article v-for="item in model.items" :key="item.id" class="saved-item">
      <div class="row">
        <h3>{{ item.title }}</h3>
        <div class="actions">
          <button type="button" class="btn ghost small" data-action="copy-saved" :data-id="item.id"><span aria-hidden="true" v-html="model.icons.copy"></span> Копировать</button>
          <button type="button" class="btn ghost small" data-action="edit-manual-prompt" :data-id="item.id">Изменить</button>
          <button type="button" class="btn danger small" data-action="delete-saved" :data-id="item.id" :aria-label="'Удалить промпт «' + item.title + '»'"><span aria-hidden="true" v-html="model.icons.trash"></span></button>
        </div>
      </div>
      <p>{{ item.text }}</p>
      <span class="sub">{{ item.genre }} · {{ item.date }}</span>
    </article>
  </div>
  <div v-else class="empty"><span aria-hidden="true" v-html="model.icons.music"></span><strong>Промптов пока нет</strong>Сохрани первый здесь или в Suno Studio.</div>
</template>
