<script setup>
import { computed, onUnmounted, ref, shallowRef } from 'vue';
const props=defineProps({api:{type:Object,required:true},kind:{type:String,required:true},initial:{type:Object,required:true}});
const snapshot=shallowRef(props.initial);
const state=computed(()=>snapshot.value.controls);
const type=ref(state.value.type);
const sync=()=>{snapshot.value=props.api.snapshot();};
window.addEventListener('sunoboom:arranger-updated',sync);
onUnmounted(()=>window.removeEventListener('sunoboom:arranger-updated',sync));
</script>
<template>
  <template v-if="kind==='composer'">
    <div class="sba-add-title"><strong>+ Новый блок</strong><span id="sba-add-placement" role="status">{{ state.placement }}</span></div>
    <div class="sba-add-row"><label for="sba-add-type">Тип фрагмента<select id="sba-add-type" v-model="type"><option v-for="section in snapshot.sections" :key="section.id" :value="section.id">{{ section.name }}</option></select></label><label id="sba-custom-name-wrap" for="sba-new-block-title" :hidden="type!=='custom'">Название своего блока<input id="sba-new-block-title" v-once :value="state.title" type="text" maxlength="48" placeholder="Например: Разговорный переход" autocomplete="off"></label></div>
    <div class="sba-add-row sba-add-controls"><button class="sba-btn sba-add-btn" data-sba-action="add" type="button">+ Добавить блок</button><button class="sba-btn sba-placement-reset" data-sba-action="reset-insert" type="button" :hidden="!state.inserting">Добавлять в конец</button></div><p class="sba-add-hint">Выбери куплет, припев, дроп или свой фрагмент. После добавления можно настроить такты, энергию, вокал и инструменты.</p>
  </template>
  <button v-else-if="kind==='apply'" type="button" data-sba-action="request-preset" class="sba-btn sba-preset-btn">Применить шаблон</button>
  <button v-else-if="kind==='expand'" type="button" id="sba-transition-hub-expand" class="sba-transition-hub-expand" data-sba-action="transition-hub-expand" :hidden="state.transitions<=3" :aria-expanded="snapshot.transitionHubExpanded">{{ snapshot.transitionHubExpanded ? 'Свернуть список' : 'Показать все ('+state.transitions+')' }}</button>
  <template v-else-if="kind==='snake-tools'"><span id="sba-snake-meta" class="sba-snake-meta">{{ state.snakeMeta }}</span><button type="button" id="sba-snake-toggle" data-sba-action="snake-toggle" :hidden="state.total<=state.previewCount" :aria-expanded="snapshot.snakeExpanded">{{ snapshot.snakeExpanded ? 'Свернуть' : 'Показать все ('+state.total+')' }}</button></template>
  <div v-else-if="kind==='preset-confirm' && state.pending" class="sba-confirm"><span>Заменить текущую структуру шаблоном «{{ state.pending }}»? Текущие блоки будут заменены.</span><button type="button" data-sba-action="preset-accept">Заменить</button><button type="button" data-sba-action="preset-cancel">Отмена</button></div>
  <button v-else-if="kind==='end-add'" type="button" class="sba-end-add" data-sba-action="insert-end">+ Добавить блок в конец</button>
</template>
