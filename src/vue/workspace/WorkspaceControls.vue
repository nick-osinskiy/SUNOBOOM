<script setup>
import { onUnmounted, shallowRef } from 'vue';
const props=defineProps({api:{type:Object,required:true},name:{type:String,required:true},initial:{type:Object,required:true}});
const model=shallowRef(props.initial);
const sync=()=>{const next=props.api.snapshot(props.name);if(next)model.value=next;};
if(props.initial.event)window.addEventListener(props.initial.event,sync);
onUnmounted(()=>{if(props.initial.event)window.removeEventListener(props.initial.event,sync);});
</script>

<template>
  <button v-if="model.kind==='academy-launch'" type="button" class="encyclopedia-section" :class="model.tree?'sb-gt-entry':'sb-ap-tile'" v-bind="model.tree?{'data-sb-gt-action':'reveal'}:{'data-sb-ap-action':'hub-open'}"><span class="encyclopedia-section-icon" aria-hidden="true">{{ model.tree ? '🕸️' : '🎙️' }}</span><span><strong>{{ model.tree ? 'Музыкальное древо' : 'Профили исполнителей' }}</strong><small>{{ model.tree ? 'Истоки, связи и влияние жанров' : 'История, звучание и важные произведения' }}</small></span><span class="encyclopedia-section-status">Открыть</span></button>
  <span v-if="model.kind==='quick-poetry'">✍️ Работа с текстом песни</span>
  <template v-if="model.kind==='actions'||model.kind==='quick-poetry'||model.kind==='prompt-auditor'||model.kind==='player-modes'">
    <button v-for="(item,i) in model.buttons" :key="i" v-bind="item.attrs"><span v-if="item.icon" v-html="item.icon" aria-hidden="true" style="display:contents"></span>{{ item.icon ? ' ' : '' }}{{ item.label }}<span v-if="item.badge">{{ item.badge }}</span></button>
    <span v-if="model.hint">{{ model.hint }}</span>
    <span v-if="model.kind==='prompt-auditor'">Переносит текст на проверку, не сохраняя и не изменяя текущую запись.</span>
  </template>
  <template v-else-if="model.kind==='producer-create'">
    <div><h2>Начать работу над песней</h2><p>Создай новую карточку или выбери существующую идею, песню либо паспорт.</p></div>
    <div class="sbpc-create-controls"><input type="text" id="sbpc-new-title" maxlength="120" :value="model.title" placeholder="Название новой песни (можно оставить пустым при выборе материала)">
      <select id="sbpc-new-source" aria-label="Исходный материал" :value="model.source"><option value="">Новая песня без привязки</option><optgroup v-for="group in model.groups" :key="group.type" :label="group.title"><option v-for="item in group.items" :key="item.id" :value="group.type+':'+item.id">{{ item.name }}</option></optgroup></select>
      <button type="button" class="sbpc-main-btn" data-pc-action="create">+ Создать рабочую карточку</button>
    </div>
  </template>
  <template v-else-if="model.kind==='producer-search'"><h2>Песни ({{ model.count }})</h2><input id="sbpc-search" type="search" :value="model.query" placeholder="Найти песню или артиста" aria-label="Поиск по песням"></template>
  <template v-else-if="model.kind==='songs-header'">
    <div class="sbsong-eyebrow">SUNOBOOM · ЛИЧНЫЙ КАБИНЕТ</div><button type="button" data-sbsong-action="back" class="sbsong-back">← В личный кабинет</button>
    <div class="sbsong-hero-row"><div><h1>Мои песни</h1><p>Личная коллекция песен: карточки, обложки, MP3, M4A, WAV и версии записей.</p></div><div class="sbsong-hero-tools"><button type="button" class="sbsong-artists-manage-btn" data-sbsong-action="artists-manage">♬ Мои артисты ({{ model.artists }})</button><button type="button" class="sbsong-main-btn" data-sbsong-action="new">+ Добавить песню</button></div></div>
    <div class="sbsong-stats"><span>{{ model.count }} песен</span><span>{{ model.versions }} аудиоверсий на устройстве</span><span>Хранение локально</span></div>
  </template>
  <template v-else-if="model.kind==='songs-search'"><h2>Коллекция</h2><input type="search" id="sbsong-search" :value="model.query" placeholder="Найти песню или исполнителя…" aria-label="Поиск песен"></template>
  <template v-else-if="model.kind==='mixer-banner'"><strong>{{ model.active ? '🎛️ Активен жанровый микс' : '🎚️ Жанровый миксер' }}</strong><span>{{ model.description }}</span><button class="btn ghost small" data-action="nav" data-nav="mixer">{{ model.active ? 'Изменить микс' : 'Открыть миксер →' }}</button><button v-if="model.active" class="btn ghost small" data-action="gm-unlink">Обычный жанр</button></template>
  <template v-else-if="model.kind==='arranger-jump'"><button type="button" class="sba-jump" data-sba-action="jump"><span>♬</span> Конструктор аранжировки <small>Создать структуру песни</small> <span>↓</span></button></template>
</template>
