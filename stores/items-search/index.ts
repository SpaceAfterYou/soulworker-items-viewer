import type { InventoryType } from "~/enums/inventory-type";
import type { GainType } from "~/enums/gain-type";
import type { SlotType } from "~/enums/slot-type";

import type { Items } from "../items/types/items";
import type { Item } from "../items/types/item";

import { useItemStore } from "../items";

export const useItemsSearch = defineStore("items-search-store", () => {
  type FilterCallable = (item: Item) => boolean;
  type SideFilter = Map<
    keyof Pick<Item, "inventoryType" | "slotType" | "gainType">,
    Map<number, FilterCallable>
  >;

  interface TypeParams<
    T extends keyof Pick<Item, "inventoryType" | "slotType" | "gainType">,
    TId = InventoryTypeParams | InventoryType,
  > {
    callable: (item: Item) => boolean;
    token: T;
    id: TId;
  }

  type GainTypeParams = TypeParams<"gainType", GainType>;
  type InventoryTypeParams = TypeParams<"inventoryType", InventoryType>;
  type SlotTypeParams = TypeParams<"slotType", SlotType>;

  type ApplySideFilterParams =
    | InventoryTypeParams
    | GainTypeParams
    | SlotTypeParams;

  type RemoveSideFilterParams = Pick<ApplySideFilterParams, "token" | "id">;

  const filtered = ref<Items>([]);

  const sideFilters = ref<SideFilter>(
    new Map([
      ["inventoryType", new Map()],
      ["gainType", new Map()],
      ["slotType", new Map()],
    ])
  );

  const searchFilters = ref({});

  function applySideFilter({ callable, token, id }: ApplySideFilterParams) {
    console.log(sideFilters.value.get(token)?.set(id, callable) ?? false);
  }

  function removeSideFilter({ token, id }: RemoveSideFilterParams) {
    sideFilters.value.get(token)?.delete(id);
  }

  const { items } = storeToRefs(useItemStore());

  watch(
    [sideFilters, searchFilters, items],
    ([side, search, items]) => {
      search;

      filtered.value = items;

      for (const sideFilterValues of side.values()) {
        if (sideFilterValues.size === 0) {
          continue;
        }

        const filters = Array.from(sideFilterValues.values());
        console.log(`filters: ${filters.length}`);

        filtered.value = filtered.value.filter((e) =>
          filters.some((f) => f(e))
        );

        console.log(`filtered: ${filtered.value.length}`);
      }
    },
    { immediate: true, deep: true }
  );

  return { removeSideFilter, applySideFilter, filtered };
});
