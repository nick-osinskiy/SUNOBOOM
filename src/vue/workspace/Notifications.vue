<script setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
const props=defineProps({initial:{type:Object,required:true}});
const panel=ref(null),close=ref(null);
function keys(event){
  if(!panel.value)return;
  if(event.key==='Escape'){event.preventDefault();close.value?.click();return;}
  if(event.key!=='Tab')return;
  const buttons=[...panel.value.querySelectorAll('button:not(:disabled),a[href]')].filter(el=>el.getClientRects().length);
  const first=buttons[0],last=buttons.at(-1);
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
}
onMounted(()=>{if(props.initial.kind==='notice-panel'){close.value?.focus();document.addEventListener('keydown',keys);}});
onUnmounted(()=>{
  document.removeEventListener('keydown',keys);
  if(props.initial.kind==='notice-panel')nextTick(()=>{if(!document.querySelector('.sb-notice-panel'))document.querySelector('.sb-notice-bell[data-action="sb-notice-toggle"]')?.focus();});
});
</script>
<template>
  <template v-if="initial.kind==='notice-panel'">
    <button type="button" class="sb-notice-overlay" data-action="sb-notice-close" aria-label="Закрыть уведомления"></button>
    <aside ref="panel" class="sb-notice-panel" role="dialog" aria-label="Напоминания о событиях" aria-modal="true">
      <div class="sb-notice-panel-head"><div><div class="sb-notice-eyebrow">🔔 SUNOBOOM</div><h2>Уведомления</h2><p>Напоминания о твоих событиях</p></div><button ref="close" class="sb-notice-close" type="button" data-action="sb-notice-close" aria-label="Закрыть">✕</button></div>
      <div class="sb-notice-scroll">
        <article v-for="item in initial.items" :key="item.key" class="sb-notice-item" :class="{'sb-notice-read':item.read}">
          <div class="sb-notice-item-meta"><span class="sb-notice-when" :class="{'sb-notice-today':item.today}">{{ item.when }}{{ item.time ? ' · '+item.time : '' }}</span><span>{{ item.type }}</span></div>
          <h3>{{ item.title }}</h3><div class="sb-notice-period">{{ item.period }} · {{ item.date }}</div><p v-if="item.notes">{{ item.notes }}</p>
          <div class="sb-notice-item-actions"><button type="button" data-action="sb-notice-event" :data-id="item.id" :data-key="item.key">Открыть событие →</button><span v-if="item.read" class="sb-notice-seen">✓ Прочитано</span><button v-else type="button" data-action="sb-notice-read" :data-key="item.key">Прочитано</button></div>
        </article>
        <div v-if="!initial.items.length" class="sb-notice-none"><span>🔔</span><h3>Пока нет новых напоминаний</h3><p>Укажи сроки уведомлений при создании события — хоть за неделю, хоть в сам день.</p><button type="button" class="btn ghost small" data-action="sb-notice-create">Создать событие →</button></div>
      </div>
      <div v-if="initial.unread>1" class="sb-notice-panel-foot"><button type="button" data-action="sb-notice-read-all">Отметить все прочитанными</button></div>
      <div class="sb-notice-disclaimer">Напоминания показываются, когда SUNOBOOM открыт. При закрытом сайте push-уведомления пока не отправляются.</div>
    </aside>
  </template>
  <section v-else class="sb-notice-banner" aria-label="Новые напоминания"><span class="sb-notice-banner-icon" aria-hidden="true">🔔</span><div class="sb-notice-banner-info"><strong>{{ initial.title }}</strong><p>{{ initial.first.period }} · {{ initial.first.date }}{{ initial.first.time ? ' · '+initial.first.time : '' }}</p></div><div class="sb-notice-banner-actions"><button class="btn primary small" type="button" data-action="sb-notice-event" :data-id="initial.first.id" :data-key="initial.first.key">Открыть</button><button class="btn ghost small" type="button" data-action="sb-notice-toggle">Все ({{ initial.unread }})</button></div></section>
</template>
