import { urlToUrl } from "~/helpers/url-to-url";

type SlotTypes = ReadonlyArray<number>;

export const useSlotTypes = defineStore("slot-types-store", () => {
  const { data } = useFetch<SlotTypes>(urlToUrl("slotTypes.json"));

  return {
    slotTypes: (data ?? ref([])) as Ref<SlotTypes>,
  };
});
