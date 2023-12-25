<script lang="ts" setup>
const model = defineModel();
</script>

<template>
  <input
    class="h-full w-full rounded bg-neutral-700 px-4"
    placeholder="Search request..."
    v-model="model"
    type="text"
  />

  <!-- https://youtu.be/5pxpOYSERz4 -->
</template>
