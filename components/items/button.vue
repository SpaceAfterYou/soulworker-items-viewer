<script lang="ts" setup>
import type { Item } from "~/stores/items/types/item";

type Props = {
  item: Item;
};

defineProps<Props>();

const modal = ref(false);
</script>

<template>
  <div class="border border-transparent transition-all hover:border-pink-500">
    <button class="transition-all hover:opacity-50" @click="modal = !modal">
      <ItemsIcon :icon="item.icon">
        <ItemsModal @on-close="modal = false" v-if="modal">
          <div
            class="grid grid-cols-[auto_1fr] gap-2"
            @focusout="modal = false"
          >
            <ItemsIcon :icon="item.icon" />

            <div class="grow self-center">
              <div>{{ item.id }}</div>
              <div>{{ $t(`items.${item.id}.name`) }}</div>
            </div>

            <div
              v-html="$t(`items.${item.id}.description`)"
              class="col-span-full whitespace-pre-wrap"
            />
          </div>
        </ItemsModal>
      </ItemsIcon>
    </button>
  </div>
</template>
