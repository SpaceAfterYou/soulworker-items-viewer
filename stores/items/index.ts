import { urlToUrl } from "~/helpers/url-to-url";

import type { Items } from "./types/items";

import { parts } from "./__generated__/items-count";

export const useItemStore = defineStore("items-store", () => {
  const items = ref<Items>([]);

  for (const part of Array.from({ length: parts }).keys()) {
    const base = `items/part${part}.json`;

    useFetch<Items>(urlToUrl(base)).then(({ data }) => {
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
