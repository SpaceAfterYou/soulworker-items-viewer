<template>
  <div class="filter-block">
    <h2>Slot Type</h2>
    <div class="filter-body">
      <span
        v-for="value of values"
        :class="['filter-value', { 'filter-selected': filters.has(id(value)) }]"
        :key="value"
        @click="filter(value)"
      >
        {{ value }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SWItem } from "@/store";

export default defineComponent({
  props: ["filters", "values", "name"],

  methods: {
    id(value: number | string) {
      return `${name}-${value}`;
    },

    filter(value: number) {
      const id = this.id(value);
      const functor = (item: SWItem) => item.slotType == value;

      if (this.filters.has(id)) {
        this.filters.delete(id);
        console.log(`disable filter: ${id} ${value}`);
      } else {
        this.filters.set(id, functor);
        console.log(`enable filter: ${id} ${value}`);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.filter-value {
  text-align: center;
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.068);

  transition: var(--animation-long-time) var(--animation-function);
  cursor: pointer;

  &:hover {
    background-color: var(--pink-color);
    transition: var(--animation-very-short-time) var(--animation-function);
  }
}

.filter-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  padding: 4px;
}

.filter-selected {
  background-color: var(--pink-color);

  &:hover {
    background-color: rgba(255, 255, 255, 0.493);
  }
}
</style>
