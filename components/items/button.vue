<script lang="ts" setup>
import type { Item } from "~/stores/items/types/item";

type Props = {
  item: Item;
};

defineProps<Props>();

const modal = ref(false);
</script>

<template>
  <ItemsIcon @click="modal = !modal" :icon="item.icon">
    <ItemsModal @on-close="modal = false" v-if="modal">
      <div class="grid grid-cols-[auto_1fr] gap-2" @focusout="modal = false">
        <ItemsIcon :icon="item.icon" />

        <div class="grow self-center">
          <div>{{ item.id }}</div>
          <div>{{ $t(`items.${item.id}.name`) }}</div>
        </div>

        <div class="col-span-full -mx-4 bg-pink-500/50 p-4">
          <ul class="flex justify-between gap-2 text-center">
            <li
              v-for="name of ['gainType', 'inventoryType', 'slotType']"
              :key="name"
            >
              <h4 class="font-bold uppercase">{{ $t(`${name}.name`) }}</h4>
              <p>{{ $t(`${name}.values.${item.gainType}`) }}</p>
            </li>
          </ul>
        </div>

        <div
          v-html="$t(`items.${item.id}.description`)"
          class="col-span-full whitespace-pre-wrap"
        />
      </div>
    </ItemsModal>
  </ItemsIcon>
</template>
