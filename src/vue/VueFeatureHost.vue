<script setup>
defineProps({
  component: {
    type: [Object, Function],
    required: true
  },
  componentProps: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <component :is="component" v-bind="componentProps" />
</template>
