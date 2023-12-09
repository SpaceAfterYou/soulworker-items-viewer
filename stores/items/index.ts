import type { InventoryType } from "~/enums/inventory-type";
import type { GainType } from "~/enums/gain-type";
import type { SlotType } from "~/enums/slot-type";

import { parts } from "./__generated__/items-count";

type Item = {
  inventoryType: InventoryType;
  slotType: SlotType;
  gainType: GainType;
  class: number;
  icon: string;
  id: string;
};
type Items = Item[];

export const useItemStore = defineStore("items-store", () => {
  const items = ref<Items>([]);

  for (const part of Array.from({ length: parts }).keys()) {
    const url = useRequestURL();
    const base = `items/part${part}.json`;

    useFetch<Items>(new URL(base, url).href).then(({ data }) => {
      if (data.value) {
        items.value.push(...data.value);
      }
    });
  }

  const selectedItemsTypes = ref(new Set<number>());

  return {
    selectedItemsTypes,
    items,
  };
});
