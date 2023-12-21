<script lang="ts" setup>
import { useSettingsStore } from "~/stores/settings";

type Props = { count: number };

const { count } = defineProps<Props>();

const { page } = storeToRefs(useSettingsStore());

const value = defineModel({ default: 0 });
const length = computed(() => count / page.value.size);
</script>

<template>
  <section class="grid grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] gap-2 bg-black/20 p-4" v-if="length > 1">
    <button
      class="border border-transparent bg-black/40 py-2 transition-all hover:border-pink-500 hover:bg-black/20 hover:opacity-50"
      v-for="id of Array.from({ length }).keys()"
      :class="{ 'bg-pink-500': value === id }"
      @click="value = id"
      type="button"
      :key="id"
    >
      {{ id }}
    </button>
  </section>
</template>
