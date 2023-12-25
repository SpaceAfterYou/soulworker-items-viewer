<script lang="ts" setup>
import type { Items } from "~/stores/items/types/items";
import type { Item } from "~/stores/items/types/item";

import { useItem } from "~/stores/items";

type FilterProperty = "description" | "name" | "id";

type WhereType = {
  filter: () => { key: FilterProperty; from: FromType }[];
  value: SelectionWhere;
  name: string;
};

type MethodType = {
  filter: keyof Pick<String, "startsWith" | "includes">;
  value: SelectionType;
  name: string;
};

type Props = {
  request: string;
};

const MAX_RESULTS = 30;

const { request } = defineProps<Props>();

const enum SelectionType {
  Includes,
  StartsWith,
}

const enum SelectionWhere {
  AnyOf,
  Id,
  Name,
  Description,
}

const enum FromType {
  Object,
  Locale,
}

const method = [
  {
    value: SelectionType.Includes,
    filter: "includes",
    name: "Includes",
  },
  {
    value: SelectionType.StartsWith,
    filter: "startsWith",
    name: "Starts with",
  },
] satisfies MethodType[];

const where = [
  {
    filter: () => [
      { from: FromType.Object, key: "id" },
      { from: FromType.Locale, key: "name" },
      { from: FromType.Locale, key: "description" },
    ],
    value: SelectionWhere.AnyOf,
    name: "Any of",
  },
  {
    filter: () => [{ from: FromType.Object, key: "id" }],
    value: SelectionWhere.Id,
    name: "Id",
  },
  {
    filter: () => [{ from: FromType.Locale, key: "name" }],
    value: SelectionWhere.Name,
    name: "Name",
  },
  {
    filter: () => [{ from: FromType.Locale, key: "description" }],
    value: SelectionWhere.Description,
    name: "Description",
  },
] satisfies WhereType[];

const selectedMethod = ref(method[0].value);
const selectedWhere = ref(where[0].value);

const { items } = useItem();

function* getItemValues(item: Item) {
  const keys = where[selectedWhere.value].filter();
  const m = method[selectedMethod.value].filter;

  console.log(`keys: ${keys.map((e) => e.key)}`);
  console.log(`method: ${m}`);

  for (const { from, key } of keys) {
    if (from === FromType.Object && String(item[key])[m](request)) {
      yield item;
    }
  }
}

const results = reactive<Items>([]);

watch(
  () => request,
  () => filter(items)
);

const filter = useDebounceFn((items: Items) => {
  console.log(`use request with value: ${request}`);

  results.splice(0, results.length);

  if (request === "") {
    console.log(`skip user request`);
    return;
  }

  for (const item of items) {
    for (const value of getItemValues(item)) {
      results.push(value);

      if (results.length >= MAX_RESULTS) {
        return;
      }
    }
  }
});
</script>

<template>
  <ItemsSearchPlate class="absolute w-full bg-black/50 backdrop-blur-md">
    <template #settings>
      <div class="flex flex-wrap gap-4">
        <ItemsSearchSelectBadge>
          <template #head> method </template>

          <template #body>
            <ItemsSearchSelect v-model="selectedMethod">
              <ItemsSearchSelectOption v-for="{ name, value } of method" :value="value" :key="value">
                {{ name }}
              </ItemsSearchSelectOption>
            </ItemsSearchSelect>
          </template>
        </ItemsSearchSelectBadge>

        <ItemsSearchSelectBadge>
          <template #head> where </template>

          <template #body>
            <ItemsSearchSelect v-model="selectedWhere">
              <ItemsSearchSelectOption v-for="{ name, value } of where" :value="value" :key="value">
                {{ name }}
              </ItemsSearchSelectOption>
            </ItemsSearchSelect>
          </template>
        </ItemsSearchSelectBadge>
      </div>
    </template>

    <template #items>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] gap-2">
        <ItemsButton v-for="item of results" :key="item.id" :item="item" />
      </div>
    </template>
  </ItemsSearchPlate>
</template>
