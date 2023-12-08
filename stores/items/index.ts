import type { InventoryType } from "~/enums/inventory-type";
import type { GainType } from "~/enums/gain-type";
import type { SlotType } from "~/enums/slot-type";

type Item = {
  inventoryType: InventoryType;
  slotType: SlotType;
  gainType: GainType;
  class: number;
  icon: string;
  id: string;
};
type Items = ReadonlyArray<Item>;

export const useItemStore = defineStore("items-store", () => {
  const { data } = useFetch<Items>(new URL("items.json", useRequestURL()).href);

  const selectedItemsTypes = ref(new Set<number>());

  return {
    selectedItemsTypes,
    items: data,
  };
});
