<script lang="ts" setup>
import type { Item } from "~/stores/items/types/item";

import { useSideFilter } from "~/stores/side-filter";

type Props = {
  token: keyof Pick<Item, "inventoryType" | "slotType" | "gainType">;
  values: ReadonlyArray<number>;
};

const { token } = defineProps<Props>();
const { useFilter } = useSideFilter();

const { filters, set, del } = useFilter(token);

function toggle(id: number) {
  if (filters.has(id)) {
    del({ id });
  } else {
    set({ callable: (e: Item) => e[token] === id, id });
  }
}
</script>

<template>
  <SidebarTitledBlock>
    <template #head> {{ $t(`${token}.name`) }} </template>

    <template #body>
      <section class="flex flex-wrap gap-2">
        <SidebarToggleButton
          class="group flex justify-between gap-4"
          :is-active="filters.has(value)"
          v-for="value of values"
          @click="toggle(value)"
          :key="value"
        >
          <span>{{ $t(`${token}.values.${value}`) }}</span>
          <span class="opacity-10 transition-opacity group-hover:opacity-100">
            {{ value }}
          </span>
        </SidebarToggleButton>
      </section>
    </template>
  </SidebarTitledBlock>

  <!-- https://youtu.be/iyL27qtrW1o -->
</template>
