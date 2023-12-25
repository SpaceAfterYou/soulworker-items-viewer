<script lang="ts" setup>
type Props = { value: string | number };

defineProps<Props>();
</script>

<template>
  <option :value="value">
    <slot />
  </option>
</template>
