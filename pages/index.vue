<script lang="ts" setup>
definePageMeta({ layout: "items" });

import { useItemStore } from "~/stores/items";

const { items } = useItemStore();

const iconOf = (id: string) => ({
  backgroundImage: `url(./${id}), url(./GUI/Icon/Item/Dummy.png)`,
});
</script>

<template>
  <section class="flex flex-wrap gap-2" v-if="items !== null">
    <button
      class="h-12 w-12 border border-transparent transition-all hover:border-pink-500 hover:opacity-50"
      v-for="{ icon, id } of items.slice(0, 1000)"
      :style="iconOf(icon)"
      :key="id"
    />
  </section>
</template>
