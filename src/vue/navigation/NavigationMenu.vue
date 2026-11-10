<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { useLegacyUiStore } from '../state/legacy-ui-store.js';
import { activeRouteFromMemoryPath, routeToMemoryPath } from './legacy-router-mirror.js';

// Vue Router is consumed directly here. Legacy state wins until the async
// memory mirror catches up, preserving instant highlights after go().
const route = useRoute();
const router = useRouter();
const ui = useLegacyUiStore();
const props = defineProps({
  items: { type: Array, required: true },
  mobile: { type: Boolean, default: false },
  onNavigate: { type: Function, required: true }
});
const sharedMenuItems = computed(() => ui.navigationItems.length ? ui.navigationItems : props.items);
function navigate(id) {
  // Pass the injected memory router to the one compatibility adapter; do not
  // call router.push() because the legacy shell still controls the page.
  props.onNavigate(id, router);
}
const isActive = id => {
  const legacy = ui.route;
  const active = route.path === routeToMemoryPath(legacy.route)
    ? activeRouteFromMemoryPath(route.path)
    : legacy.active;
  return active === id;
};
</script>

<template>
  <button
    v-for="item in sharedMenuItems"
    :key="item.id"
    type="button"
    :class="mobile ? (isActive(item.id) ? 'active' : '') : ['nav-button', { active: isActive(item.id) }]"
    :data-nav="item.id"
    :data-vue-router-path="route.path"
    :aria-current="isActive(item.id) ? 'page' : undefined"
    :aria-label="mobile ? item.label : undefined"
    :title="mobile ? item.label : undefined"
    @click="navigate(item.id)"
  >
    <span class="sb-vue-nav-icon" aria-hidden="true" v-html="item.iconHtml"></span>
    <!-- One text node for both layouts. Never render a desktop label in
         addition to the mobile caption. -->
    <span class="sb-vue-nav-label">{{ mobile ? item.shortLabel : item.label }}</span>
  </button>
</template>

<style>
.sb-vue-nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}
.mobile-nav button > .sb-vue-nav-icon {
  font-size: 0;
  line-height: 0;
  width: 21px;
  height: 21px;
  overflow: hidden;
}
.sb-vue-nav-label {
  min-width: 0;
}
.mobile-nav button .sb-vue-nav-label {
  display: block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
