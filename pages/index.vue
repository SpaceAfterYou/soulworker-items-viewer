<script lang="ts" setup>
definePageMeta({ layout: "items" });

import { useItemStore } from "~/stores/items";

const { items } = useItemStore();

const iconOf = (icon: string) => ({
  backgroundImage: `url(./${icon}), url(./GUI/Icon/Item/Dummy.png)`,
});
</script>

<template>
  <section class="flex flex-wrap gap-2" v-if="items !== null">
    <div
      class="border border-transparent transition-all hover:border-pink-500"
      v-for="{ icon, id } of items.slice(0, 1000)"
      :key="id"
    >
      <button
        class="h-12 w-12 bg-cover bg-center bg-no-repeat transition-all hover:opacity-50"
        :style="iconOf(icon)"
      />
    </div>
  </section>
</template>
