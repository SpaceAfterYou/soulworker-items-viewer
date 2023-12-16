<script lang="ts" setup>
definePageMeta({ layout: "items" });

import { useItemsSearch } from "~/stores/items-search";
import { useSettingsStore } from "~/stores/settings";

const { page } = storeToRefs(useSettingsStore());
const { filtered } = storeToRefs(useItemsSearch());

const currentPage = ref(0);
</script>

<template>
  <section class="flex flex-wrap gap-2">
    <div class="flex flex-wrap gap-2" v-if="filtered.length > 0">
      <ItemsButton
        v-for="item of filtered.slice(
          currentPage * page.size,
          currentPage * page.size + page.size
        )"
        :key="item.id"
        :item="item"
      />
      <ItemsPagination :count="filtered.length" v-model="currentPage" />
    </div>
  </section>
</template>
