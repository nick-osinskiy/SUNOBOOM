<script setup>
import {defineComponent,h,onErrorCaptured,Teleport} from 'vue';
import {RouterView} from 'vue-router';
const props=defineProps({state:Object,portals:Array,resources:Object});
const PortalFeature=defineComponent({props:['entry'],setup(p){
 onErrorCaptured(error=>{p.entry.fail(error);return false;});
 return ()=>h(p.entry.component,p.entry.props);
}});
</script>
<template>
 <div class="app" data-sb-vue-shell>
  <aside class="side">
   <div class="brand"><div class="sb-brand-version-row"><img class="sb-brand-logo" :src="state.frame.logo" alt="SUNOBOOM — фирменный логотип"></div><div class="brand-sub sb-brand-tagline">Больше, чем музыка</div></div>
   <div class="side-heading">РАБОЧЕЕ ПРОСТРАНСТВО</div>
   <div data-sb-vue-sidebar style="display:contents"></div>
   <div class="side-bottom"><strong><i class="mini-dot"></i> Творческая лаборатория</strong><p>Прототип без сервера. Данные хранятся на твоём устройстве.</p></div>
  </aside>
  <main class="main">
   <div class="top" data-sb-vue-top></div>
   <div data-sb-vue-history class="sb-vue-history-host"></div>
   <div data-sb-vue-page data-v-app :data-sb-page-fallback="state.pageError?'':undefined" style="display:contents">
    <RouterView v-slot="{Component}"><component :is="Component" :key="state.revision" :model="state.page" :revision="state.revision" :resources="resources" /></RouterView>
   </div>
   <div v-if="state.frame.noticeOpen" data-sb-workspace="notice-panel" style="display:contents"></div>
   <div class="footer">SUNOBOOM · независимая творческая лаборатория · не является продуктом Suno</div>
  </main>
  <nav class="mobile-nav" data-sb-vue-mobile></nav>
 </div>
 <Teleport v-for="entry in portals" :key="entry.id" :to="entry.target"><PortalFeature :entry="entry" /></Teleport>
</template>
