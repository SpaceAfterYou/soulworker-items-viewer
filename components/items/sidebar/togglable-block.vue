<script lang="ts" setup>
import type { Item } from "~/stores/items/types/item";

import { useItemsSearch } from "~/stores/items-search";

type Props = {
  token: keyof Pick<Item, "inventoryType" | "slotType" | "gainType">;
  values: ReadonlyArray<number>;
  selected: Set<number>;
};

const { selected, token } = defineProps<Props>();
const { removeSideFilter, applySideFilter } = useItemsSearch();

function toggle(id: number) {
  if (!selected.delete(id)) {
    selected.add(id);

    applySideFilter({
      callable: (e: Item) => e[token] === id,
      token,
      id,
    });
  } else {
    removeSideFilter({ token, id });
  }
}
</script>

<template>
  <SidebarTitledBlock>
    <template #head> {{ $t(`${token}.name`) }} </template>

    <template #body>
      <section class="flex flex-wrap gap-2">
        <SidebarToggleButton
          :is-active="selected.has(value)"
          v-for="value of values"
          @click="toggle(value)"
          :key="value"
        >
          {{ $t(`${token}.values.${value}`) }}
        </SidebarToggleButton>
      </section>
    </template>
  </SidebarTitledBlock>
</template>
