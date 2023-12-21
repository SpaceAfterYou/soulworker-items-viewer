import type { InventoryType } from "~/enums/inventory-type";
import type { GainType } from "~/enums/gain-type";
import type { SlotType } from "~/enums/slot-type";

import type { Items } from "../items/types/items";
import type { Item } from "../items/types/item";

import { useItem } from "../items";

export const useSideItemsSearch = defineStore("items-search-store", () => {
  type FilterCallable = (item: Item) => boolean;

  type SideFilterKey = keyof Pick<Item, "inventoryType" | "slotType" | "gainType">;
  type SideFilterValue = Map<number, FilterCallable>;
  type SideFilter = Map<SideFilterKey, SideFilterValue>;

  interface TypeParams<TId = InventoryType | GainType | SlotType> {
    callable: (item: Item) => boolean;
    id: TId;
  }

  type GainTypeParams = TypeParams<GainType>;
  type InventoryTypeParams = TypeParams<InventoryType>;
  type SlotTypeParams = TypeParams<SlotType>;

  type ApplySideFilterParams = InventoryTypeParams | GainTypeParams | SlotTypeParams;
  type RemoveSideFilterParams = Pick<ApplySideFilterParams, "id">;

  const filtered = ref<Items>([]);

  const sideFilters = reactive<SideFilter>(new Map());

  function useFilter(id: SideFilterKey) {
    const filters = reactive(new Map());
    sideFilters.set(id, filters);

    onBeforeUnmount(() => {
      console.log(`onBeforeUnmount: ${id}`);

      sideFilters.delete(id);
    });

    const set = ({ callable, id }: ApplySideFilterParams) => filters.set(id, callable);
    const del = ({ id }: RemoveSideFilterParams) => filters.delete(id);

    return { set, del };
  }

  const { items } = storeToRefs(useItem());

  if (process.client) {
    watch(
      sideFilters,
      (side) => {
        filtered.value = items.value;

        for (const [sideFilterKey, sideFilterValues] of side) {
          if (sideFilterValues.size === 0) {
            console.log(`skip side filter: ${sideFilterKey}`);
            continue;
          }

          console.log(`use filter: ${sideFilterKey}`);

          const filters = Array.from(sideFilterValues.values());
          console.log(`with values: ${filters}`);

          filtered.value = filtered.value.filter((e) => filters.some((f) => f(e)));

          console.log(`filtered count: ${filtered.value.length}`);
        }
      },
      { immediate: true, deep: true }
    );
  }

  return { useFilter, filtered };
});
