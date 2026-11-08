<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  },
  mobile: {
    type: Boolean,
    default: false
  },
  onNavigate: {
    type: Function,
    required: true
  }
});
</script>

<template>
  <button
    v-for="item in items"
    :key="item.id"
    type="button"
    :class="mobile ? (item.active ? 'active' : '') : ['nav-button', { active: item.active }]"
    :data-nav="item.id"
    :aria-current="item.active ? 'page' : undefined"
    :aria-label="mobile ? item.label : undefined"
    :title="mobile ? item.label : undefined"
    @click="onNavigate(item.id)"
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
  font-size: 0;
  line-height: 0;
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
