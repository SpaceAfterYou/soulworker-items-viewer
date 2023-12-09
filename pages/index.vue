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
    <ItemsButton
      v-for="item of items.slice(0, 1000)"
      :key="item.id"
      :item="item"
    />
  </section>
</template>
