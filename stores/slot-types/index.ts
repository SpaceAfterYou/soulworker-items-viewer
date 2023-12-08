type SlotTypes = ReadonlyArray<number>;

export const useSlotTypes = defineStore("slot-types-store", () => {
  const { data } = useFetch<SlotTypes>(
    new URL("slotTypes.json", useRequestURL()).href
  );

  const selectedSlotTypes = ref(new Set<number>());

  return {
    slotTypes: (data ?? []) as Ref<SlotTypes>,
    selectedSlotTypes,
  };
});
