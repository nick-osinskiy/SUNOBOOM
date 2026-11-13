<script setup>
import { ref } from 'vue';
const props = defineProps({ initial: { type: Object, required: true } });
const notes = ref(props.initial.project?.notes ?? '');
</script>

<template>
  <template v-if="initial.project">
    <div class="eyebrow">Рабочая карточка</div>
    <h3>{{ initial.project.title }}</h3>
    <p>{{ initial.project.genreName }} · создан {{ initial.project.date }}</p>
    <div class="field"><label for="project-notes">Заметки, треклист, идеи и задачи</label><textarea id="project-notes" v-model="notes" rows="12"></textarea></div>
    <div class="detail-actions">
      <button type="button" class="btn primary" data-action="save-project" :data-id="initial.project.id"><span style="display:contents" aria-hidden="true" v-html="initial.icons.check"></span> Сохранить заметки</button>
      <button type="button" class="btn ghost" data-action="use-genre" :data-id="initial.project.genre"><span style="display:contents" aria-hidden="true" v-html="initial.icons.studio"></span> В студию</button>
      <button type="button" class="btn danger" data-action="delete-project" :data-id="initial.project.id"><span style="display:contents" aria-hidden="true" v-html="initial.icons.trash"></span> Удалить</button>
    </div>
  </template>
  <div v-else class="empty"><strong>Начни со своего проекта</strong>Здесь появятся заметки и рабочая карточка выбранного проекта.</div>
</template>
