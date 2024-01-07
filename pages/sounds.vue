<script lang="ts" setup>
definePageMeta({ layout: "sounds" });

import { useSoundsContainers } from "~/stores/sounds";

const { selected, active } = storeToRefs(useSoundsContainers());

// const { page } = storeToRefs(useSettingsStore());

// const currentPage = ref(0);
// const start = computed(() => currentPage.value * page.value.size);
// const end = computed(() => start.value + page.value.size);
</script>

<template>
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <template v-if="!active"> Loading </template>
      <template v-else-if="active.length === 0">Empty</template>
      <template v-else>
        selected: {{ selected }}
        <span v-for="{ name } of active" type="button" :key="name">{{ name }}.wav</span>
      </template>
    </div>

    <!-- <ItemsPagination :count="filtered.length" v-model="currentPage" /> -->
  </section>
</template>
