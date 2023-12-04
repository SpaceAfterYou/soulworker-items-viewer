<template>
  <aside class="sidebar">
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
import FilterComponent from '@/components/filter-component.vue'
import { useItemStore } from '@/stores/item-store'
import type { SWItem } from '@/stores/item-store/types/item'

const store = useItemStore()
defineProps<{ filters: Map<string, (item: SWItem) => boolean> }>()
</script>
