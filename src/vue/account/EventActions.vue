<script setup>
defineProps({ model: { type: Object, required: true } });
</script>

<template>
  <button type="button" class="btn primary" data-action="event-save">{{ model.editing ? 'Сохранить изменения' : 'Сохранить событие' }}</button>
  <button v-if="model.editing" type="button" class="btn ghost" data-action="event-cancel">Отменить</button>
</template>
