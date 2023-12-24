import { urlToUrl } from "~/helpers/url-to-url";

type InventoryTypes = ReadonlyArray<number>;

export const useInventoryTypes = defineStore("inventory-types-store", () => {
  const { data } = useFetch<InventoryTypes>(urlToUrl("inventoryTypes.json"));

  return {
    inventoryType: (data ?? ref([])) as Ref<InventoryTypes>,
  };
});
