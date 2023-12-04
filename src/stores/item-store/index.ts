import { defineStore } from "pinia";
import { ref } from "vue";
import type { SWItem } from "./types/item";

export const useItemStore = defineStore("item-store", () => {
  const inventoryTypes = ref<number[]>([]);
  const slotTypes = ref<number[]>([]);
  const gainTypes = ref<number[]>([]);
  const items = ref<SWItem[]>([]);

  type T = {
    filters?: IterableIterator<(value: SWItem) => boolean>;
    offset: number;
    limit: number;
  };

  function itemsGet({ filters, offset, limit }: T) {
    let values = items.value;

    if (filters) {
      for (const filter of filters) {
        values = values.filter(filter);
      }
    }

    const _offset = offset * limit;
    return values.slice(_offset, _offset + limit);
  }

  return {
    itemsGet,
    inventoryTypes,
    slotTypes,
    gainTypes,
    items,
  };
});
