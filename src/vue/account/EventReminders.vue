<script setup>
import { reactive } from 'vue';
const props = defineProps({ initial: { type: Object, required: true } });
// Draft controls only. sbN37FormDays remains the validator and save source.
const draft = reactive({ ...props.initial.values, selected: [...props.initial.values.selected] });
</script>

<template>
  <fieldset class="sb-reminder-picker">
    <legend>🔔 Когда напомнить?</legend>
    <p class="sb-reminder-help">Выбери один или несколько сроков. Убери все галочки, чтобы отключить уведомления.</p>
    <div class="sb-reminder-choices">
      <label v-for="preset in initial.presets" :key="preset.days" class="sb-reminder-choice"><input v-model="draft.selected" type="checkbox" name="event-reminder-preset" :value="preset.days"> <span>{{ preset.label }}</span></label>
    </div>
    <label class="sb-reminder-custom-label"><input id="event-reminder-custom" v-model="draft.custom" type="checkbox"> Свой срок до события</label>
    <div id="event-reminder-custom-wrap" class="sb-reminder-custom-input" :hidden="!draft.custom">
      <label for="event-reminder-custom-days">За сколько дней?</label><input id="event-reminder-custom-days" v-model="draft.customDays" type="number" min="1" max="365" step="1" inputmode="numeric"><span>дней до события</span>
    </div>
  </fieldset>
</template>
