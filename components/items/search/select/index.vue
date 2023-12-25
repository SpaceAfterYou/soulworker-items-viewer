<script lang="ts" setup>
const value = defineModel();
</script>

<template>
  <div class="flex gap-2 rounded bg-black/50">
    <select class="rounded bg-neutral-700 px-2 text-white" v-model="value">
      <slot />
    </select>
  </div>
</template>
