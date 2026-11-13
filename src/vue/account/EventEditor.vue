<script setup>
import { reactive } from 'vue';
const props = defineProps({ initial: { type: Object, required: true } });
const draft = reactive({ ...props.initial.values });
</script>

<template>
  <h2>{{ initial.editing ? 'Редактирование события' : 'Добавить событие' }}</h2>
  <div class="field"><label for="event-title">Название события</label><input id="event-title" v-model="draft.title" type="text" maxlength="120" placeholder="Например, релиз нового EP"></div>
  <div class="dash-event-fields">
    <div class="field"><label for="event-date">Дата</label><input id="event-date" v-model="draft.date" type="date"></div>
    <div class="field"><label for="event-time">Время (необязательно)</label><input id="event-time" v-model="draft.time" type="time"></div>
    <div class="field"><label for="event-type">Тип события</label><select id="event-type" v-model="draft.type"><option v-for="type in initial.types" :key="type.id" :value="type.id">{{ type.label }}</option></select></div>
  </div>
  <div class="field"><label for="event-notes">Описание (необязательно)</label><textarea id="event-notes" v-model="draft.notes" rows="3" maxlength="1200" placeholder="Детали, место или заметки"></textarea></div>
</template>
