import { urlToUrl } from "~/helpers/url-to-url";

import type { Items } from "./types/items";

import { parts } from "./__generated__/items-count";

async function* fromRemove() {
  for (let part = 0; part < parts; ++part) {
    const base = `items/part${part}.json`;
    const url = urlToUrl(base);

    const { data } = await useFetch<Items>(url);
    if (data.value) {
      yield data.value;
    }
  }
}

export const useItem = defineStore("items-store", () => {
  const items = reactive<Items>([]);

  async function populate() {
    for await (const values of fromRemove()) {
      items.push(...values);
    }
  }

  const selectedItemsTypes = ref(new Set<number>());

  return {
    selectedItemsTypes,
    populate,
    items,
  };
});
