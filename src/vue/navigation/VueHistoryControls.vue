<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';
import { memoryHistoryRevision } from './legacy-router-mirror.js';

// The controls do not own any navigation or browser history. Their two actions
// invoke the same guarded restore adapter used in v0.135.
const props = defineProps({
  canRestore: { type: Function, required: true },
  onRestore: { type: Function, required: true }
});
const route = useRoute();
const ui = useLegacyUiStore();
const busy = ref(false);
const available = computed(() => {
  // Both route and legacy revisions are reactive; the memory ledger is read
  // only after the route has settled. No timers or polling.
  void route.path;
  void ui.route.revision;
  // The memory route changes before its async ledger is committed. Recompute
  // disabled states when that ledger settles, even if the path stays unchanged.
  void memoryHistoryRevision.value;
  return {
    back: !busy.value && props.canRestore('back'),
    forward: !busy.value && props.canRestore('forward')
  };
});

async function restore(direction) {
  if (!available.value[direction]) return;
  busy.value = true;
  try { await props.onRestore(direction); }
  finally { busy.value = false; }
}
</script>

<template>
  <div class="sb-vue-history-toolbar" role="group" aria-label="История разделов SUNOBOOM">
    <span class="sb-vue-history-caption">История разделов</span>
    <button type="button" class="sb-vue-history-button" data-sb-history-back
      :disabled="!available.back" aria-label="Назад по разделам"
      title="К предыдущему разделу" @click="restore('back')">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button type="button" class="sb-vue-history-button" data-sb-history-forward
      :disabled="!available.forward" aria-label="Вперёд по разделам"
      title="К следующему разделу" @click="restore('forward')">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.sb-vue-history-toolbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 7px;
  margin: -15px 0 17px;
  min-height: 32px;
}
.sb-vue-history-caption {
  font-size: 11px;
  color: #98a2bd;
  margin-right: 5px;
}
.sb-vue-history-button {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  border: 1px solid #555172;
  border-radius: 10px;
  background: #26243a;
  color: #f1deec;
  cursor: pointer;
  transition: background .15s, border-color .15s;
}
.sb-vue-history-button:not(:disabled):hover,
.sb-vue-history-button:not(:disabled):focus-visible {
  background: #483052;
  border-color: #e779b9;
  outline-offset: 2px;
}
.sb-vue-history-button:disabled {
  cursor: default;
  opacity: .35;
}
@media(max-width:700px) {
  .sb-vue-history-toolbar { margin: -12px 0 14px; }
  .sb-vue-history-caption { font-size: 10px; }
}
</style>
