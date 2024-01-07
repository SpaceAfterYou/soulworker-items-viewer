<script lang="ts" setup>
import type { Items } from "~/stores/items/types/items";
import type { Item } from "~/stores/items/types/item";

import { useItem } from "~/stores/items";

type FilterProperty = "description" | "name" | "id";

type WhereType = {
  filters: { prop: FilterProperty; from: FromType }[];
  value: SelectionWhere;
  name: string;
};

type MethodType = {
  key: keyof Pick<String, "startsWith" | "includes">;
  value: SelectionType;
  name: string;
};

type Props = {
  request: string;
};

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

const maxResults = [
  { name: "25", count: 25, value: 0 },
  { name: "50", count: 50, value: 1 },
  { name: "75", count: 75, value: 2 },
  { name: "100", count: 100, value: 3 },
];

const selectedMaxResults = ref(0);

const methods = [
  {
    value: SelectionType.Includes,
    name: "Includes",
    key: "includes",
  },
  {
    value: SelectionType.StartsWith,
    name: "Starts with",
    key: "startsWith",
  },
] satisfies MethodType[];

const wheres = [
  {
    filters: [
      { from: FromType.Object, prop: "id" },
      { from: FromType.Locale, prop: "name" },
      { from: FromType.Locale, prop: "description" },
    ],
    value: SelectionWhere.AnyOf,
    name: "Any of",
  },
  {
    filters: [{ from: FromType.Object, prop: "id" }],
    value: SelectionWhere.Id,
    name: "Id",
  },
  {
    filters: [{ from: FromType.Locale, prop: "name" }],
    value: SelectionWhere.Name,
    name: "Name",
  },
  {
    filters: [{ from: FromType.Locale, prop: "description" }],
    value: SelectionWhere.Description,
    name: "Description",
  },
] satisfies WhereType[];

const selectedMethod = ref(methods[0].value);
const selectedWhere = ref(wheres[0].value);

const { items } = useItem();

function* getItemValues(item: Item) {
  const { filters } = wheres[selectedWhere.value];
  const { key } = methods[selectedMethod.value];

  console.log(`keys: ${filters.map((e) => e.prop)}`);
  console.log(`method: ${key}`);

  for (const { from, prop } of filters) {
    if (from === FromType.Object && String(item[prop])[key](request)) {
      yield item;
    }
  }
}

const results = reactive<Items>([]);

watch(
  () => [request, selectedMethod, selectedWhere, selectedMaxResults],
  () => filter(items),
  { deep: true }
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

      if (results.length >= maxResults[selectedMaxResults.value].count) {
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
              <ItemsSearchSelectOption v-for="{ name: name, value } of methods" :value="value" :key="value">
                {{ name }}
              </ItemsSearchSelectOption>
            </ItemsSearchSelect>
          </template>
        </ItemsSearchSelectBadge>

        <ItemsSearchSelectBadge>
          <template #head> where </template>

          <template #body>
            <ItemsSearchSelect v-model="selectedWhere">
              <ItemsSearchSelectOption v-for="{ name, value } of wheres" :value="value" :key="value">
                {{ name }}
              </ItemsSearchSelectOption>
            </ItemsSearchSelect>
          </template>
        </ItemsSearchSelectBadge>

        <ItemsSearchSelectBadge>
          <template #head> max results </template>

          <template #body>
            <ItemsSearchSelect v-model="selectedMaxResults">
              <ItemsSearchSelectOption v-for="{ name, value } of maxResults" :value="value" :key="value">
                {{ name }}
              </ItemsSearchSelectOption>
            </ItemsSearchSelect>
          </template>
        </ItemsSearchSelectBadge>
      </div>
    </template>

    <template #items>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] gap-2" v-if="results.length > 0">
        <ItemsButton v-for="item of results" :key="item.id" :item="item" />
      </div>
    </template>
  </ItemsSearchPlate>
</template>
