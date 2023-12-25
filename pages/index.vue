<script lang="ts" setup>
definePageMeta({ layout: "items" });

import { useSettingsStore } from "~/stores/settings";
import { useSideFilter } from "~/stores/side-filter";

const { page } = storeToRefs(useSettingsStore());
const { filtered } = storeToRefs(useSideFilter());

const currentPage = ref(0);
const start = computed(() => currentPage.value * page.value.size);
const end = computed(() => start.value + page.value.size);

watch(filtered, () => {
  currentPage.value = 0;
});
</script>

<template>
  <section class="flex flex-col gap-4">
    <div class="grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] gap-2">
      <ItemsButton v-for="item of filtered.slice(start, end)" :key="item.id" :item="item" />
    </div>

    <ItemsPagination :count="filtered.length" v-model="currentPage" />
  </section>
</template>
