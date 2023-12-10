<script lang="ts" setup>
import { useSettingsStore } from "~/stores/settings";

type Props = { count: number };

defineProps<Props>();

const { page } = storeToRefs(useSettingsStore());

const value = defineModel({ default: 0 });
</script>

<template>
  <section class="flex flex-wrap gap-2 bg-black/20 p-4">
    <button
      class="border border-transparent bg-black/40 px-4 py-2 transition-all hover:border-pink-500 hover:bg-black/20 hover:opacity-50"
      v-for="id of Array.from({ length: count / page.size }).keys()"
      :class="{ 'bg-pink-500': value === id }"
      @click="value = id"
      type="button"
      :key="id"
    >
      {{ id }}
    </button>
  </section>
</template>
