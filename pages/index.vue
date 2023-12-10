<script lang="ts" setup>
definePageMeta({ layout: "items" });

import { useSettingsStore } from "~/stores/settings";
import { useItemStore } from "~/stores/items";

const { page } = storeToRefs(useSettingsStore());
const { items } = useItemStore();

const currentPage = ref(0);
</script>

<template>
  <section class="flex flex-wrap gap-2">
    <div class="flex flex-wrap gap-2" v-if="items !== null">
      <ItemsButton
        v-for="item of items.slice(
          currentPage * page.size,
          currentPage * page.size + page.size
        )"
        :key="item.id"
        :item="item"
      />
      <ItemsPagination :count="items.length" v-model="currentPage" />
    </div>
  </section>
</template>
