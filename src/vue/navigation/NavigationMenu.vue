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
    <span v-if="mobile">{{ item.shortLabel }}</span>
    <template v-else>{{ item.label }}</template>
  </button>
</template>

<style>
.sb-vue-nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}
</style>
