<template>
  <aside class="sidebar">
    <div>
      <h1>locale</h1>

      <div class="lang-selector">
        <button @click="changeLocale('en')">English</button>
        <button @click="changeLocale('kr')">한국어</button>
        <button @click="changeLocale('twn')">汉语</button>
      </div>
    </div>

    <h1>Sort</h1>

    <FilterComponent
      :values="store.slotTypes"
      :filters="filters"
      :name="'Slot Type'"
    />

    <FilterComponent
      :values="store.inventoryTypes"
      :filters="filters"
      :name="'Inventory Type'"
    />

    <FilterComponent
      :values="store.gainTypes"
      :filters="filters"
      :name="'Gain Type'"
    />
  </aside>
</template>

<script lang="ts" setup>
import FilterComponent from "@/components/filter-component.vue";
import { useItemStore } from "@/stores/item-store";
import type { SWItem } from "@/stores/item-store/types/item";
import { useI18n } from "vue-i18n";

import { messages } from "@/locales/messages";

const store = useItemStore();
defineProps<{ filters: Map<string, (item: SWItem) => boolean> }>();

const { locale } = useI18n();

function changeLocale(value: keyof typeof messages) {
  locale.value = value;
}
</script>

<style scoped lang="scss">
.lang-selector {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
