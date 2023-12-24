<script lang="ts" setup>
import type { Item } from "~/stores/items/types/item";

type Props = {
  item: Item;
};

type Keys = ReadonlyArray<keyof Pick<Item, "inventoryType" | "gainType" | "slotType">>;

defineProps<Props>();

const tokens = ["gainType", "inventoryType", "slotType"] satisfies Keys;
const [state, toggle] = useToggle();
</script>

<template>
  <ItemsIcon @click="toggle()" :icon="item.icon">
    <ItemsModal @on-close="toggle(false)" v-if="state">
      <div class="grid grid-cols-[auto_1fr] gap-x-2 gap-y-4">
        <ItemsIcon :icon="item.icon" />

        <div class="grow self-center">
          <div>{{ item.id }}</div>
          <div>{{ $t(`items.${item.id}.name`) }}</div>
        </div>

        <div class="col-span-full">
          <ul class="flex justify-evenly gap-4 text-center">
            <li class="w-full rounded bg-pink-500/50 px-4 py-2" v-for="token of tokens" :key="token">
              <h4 class="font-bold uppercase">{{ $t(`${token}.name`) }}</h4>
              <div class="flex justify-center gap-4">
                <span class="text-white/50">{{ item[token] }}</span>
                <p>{{ $t(`${token}.values.${item[token]}`) }}</p>
              </div>
            </li>
          </ul>
        </div>

        <div v-html="$t(`items.${item.id}.description`)" class="col-span-full whitespace-pre-wrap" />
      </div>
    </ItemsModal>
  </ItemsIcon>
</template>
