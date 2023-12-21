<script lang="ts" setup>
import type { Item } from "~/stores/items/types/item";

import { useSideItemsSearch } from "~/stores/items-search";

type Props = {
  token: keyof Pick<Item, "inventoryType" | "slotType" | "gainType">;
  values: ReadonlyArray<number>;
  selected: Set<number>;
};

const { selected, token } = defineProps<Props>();
const { useFilter } = useSideItemsSearch();

const { set, del } = useFilter(token);

function toggle(id: number) {
  if (!selected.delete(id)) {
    selected.add(id);

    set({ callable: (e: Item) => e[token] === id, id });
  } else {
    del({ id });
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
          :is-active="selected.has(value)"
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
</template>
