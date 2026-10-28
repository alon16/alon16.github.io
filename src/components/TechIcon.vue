<script setup>
import { computed } from 'vue'
import { getIcon } from '../data/icons'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 24 },
})

const icon = computed(() => getIcon(props.name))
</script>

<template>
  <svg
    v-if="icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path :d="icon.path" />
  </svg>
</template>
