<script lang="ts" setup>
type Props = { isActive: boolean };

defineProps<Props>();
</script>

<template>
  <button
    class="w-full whitespace-nowrap border border-transparent bg-black/40 px-4 py-2 text-start transition-all hover:border-pink-500 hover:bg-black/20 hover:opacity-50"
    :class="[{ 'bg-pink-500 ': isActive }]"
    type="button"
  >
    <slot />
  </button>
</template>
