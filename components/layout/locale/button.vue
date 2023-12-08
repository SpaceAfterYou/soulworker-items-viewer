<script lang="ts" setup>
type Props = { isActive: boolean };
defineProps<Props>();
</script>

<template>
  <button :class="{ ['text-pink-500']: isActive }" type="button">
    <slot />
  </button>
</template>
