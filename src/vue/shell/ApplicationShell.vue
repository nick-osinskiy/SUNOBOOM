<script setup>
import {defineComponent,h,onErrorCaptured,Teleport} from 'vue';
import NavigationMenu from '../navigation/NavigationMenu.vue';
import TopHeader from '../navigation/TopHeader.vue';
import VueHistoryControls from '../navigation/VueHistoryControls.vue';
import Notifications from '../workspace/Notifications.vue';
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
   <div data-sb-vue-sidebar data-v-app data-sb-shell-owned style="display:contents"><NavigationMenu :items="state.frame.navigation" :onNavigate="resources.navigate" /></div>
   <div class="side-bottom"><strong><i class="mini-dot"></i> Творческая лаборатория</strong><p>Прототип без сервера. Данные хранятся на твоём устройстве.</p></div>
  </aside>
  <main class="main">
   <div class="top" data-sb-vue-top data-v-app data-sb-shell-owned><TopHeader :model="state.frame.header" /></div>
   <div data-sb-vue-history data-v-app data-sb-shell-owned class="sb-vue-history-host"><VueHistoryControls :canRestore="resources.canGo" :onRestore="resources.restore" /></div>
   <div data-sb-vue-page data-v-app :data-sb-page-fallback="state.pageError?'':undefined" style="display:contents">
    <RouterView v-slot="{Component}"><component :is="Component" :key="state.revision" :model="state.page" :revision="state.revision" :resources="resources" /></RouterView>
   </div>
   <div v-if="state.frame.noticeOpen" data-sb-workspace="notice-panel" data-v-app data-sb-shell-owned style="display:contents"><Notifications :initial="state.frame.notices" /></div>
   <div class="footer">SUNOBOOM · независимая творческая лаборатория · не является продуктом Suno</div>
  </main>
  <nav class="mobile-nav" data-sb-vue-mobile data-v-app data-sb-shell-owned><NavigationMenu :items="state.frame.navigation" :mobile="true" :onNavigate="resources.navigate" /></nav>
 </div>
 <Teleport v-for="entry in portals" :key="entry.id" :to="entry.target"><PortalFeature :entry="entry" /></Teleport>
</template>
