<script lang="ts" setup>
import { useItem } from "~/stores/items";

const { populate } = useItem();
await populate();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <section id="items-modal" />
</template>

<style>
* {
  @apply text-white/80 outline-none;
}
</style>
