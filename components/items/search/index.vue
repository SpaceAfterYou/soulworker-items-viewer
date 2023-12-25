<script lang="ts" setup>
const request = ref("");
</script>

<template>
  <form class="group relative">
    <div class="h-full py-2">
      <ItemsSearchInput v-model="request" />
    </div>

    <ItemsSearchSuggs class="invisible hover:visible group-hover:visible" :request="request" />
  </form>

  <!-- https://youtu.be/5pxpOYSERz4 -->
</template>
