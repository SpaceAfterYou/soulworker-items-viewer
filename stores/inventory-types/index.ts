type InventoryTypes = ReadonlyArray<number>;

export const useInventoryTypes = defineStore("inventory-types-store", () => {
  const { data } = useFetch<InventoryTypes>(
    new URL("inventoryTypes.json", useRequestURL()).href
  );

  const selectedInventoryTypes = ref(new Set<number>());

  return {
    inventoryType: (data ?? []) as Ref<InventoryTypes>,
    selectedInventoryTypes,
  };
});
