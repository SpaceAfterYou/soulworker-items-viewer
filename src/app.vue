<template v-if="itemsCount() > 0">
  <aside class="sidebar">
    <h1>Sort</h1>

    <FilterComponent
      :values="slotTypesGet()"
      :filters="filters"
      :name="'slot-type'"
    />

    <FilterComponent
      :values="inventoryTypesGet()"
      :filters="filters"
      :name="'inventory-type'"
    />

    <FilterComponent
      :values="gainTypesGet()"
      :filters="filters"
      :name="'gain-type'"
    />
  </aside>

  <div class="content">
    <div class="pages">
      <span
        v-for="(index, key) in Math.ceil(itemsCount() / limit)"
        :class="['page', { 'selected-page': key == offset }]"
        :key="key"
        @click="pageChange(key)"
      >
        {{ index }}
      </span>
    </div>

    <div class="table-items">
      <div
        class="table-item"
        v-for="item of itemsGet()({ offset, limit, filters: filters.values() })"
        :key="item.id"
        @click.prevent="select(item)"
        :style="iconStyle(item)"
      />
    </div>

    <div
      class="selected-wrapper"
      v-if="selected !== null"
      @click.self.prevent="selected = null"
    >
      <div class="selected">
        <div class="selected-icon" :style="iconStyle(selected)" />
        <span class="selected-id" v-text="selected.id" />
        <span class="selected-name" v-html="selected.name" />
        <span class="selected-description" v-html="selected.description" />
      </div>
    </div>
  </div>

  <footer class="footer">
    <a class="link" href="https://github.com/sawich/soulworker-items-viewer"
      >GitHub</a
    >
    <a class="link" href="http://discord.gg/SequFJP">Discord</a>
  </footer>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { SWItem } from "./store";

export default defineComponent({
  name: "App",

  data() {
    return {
      filters: new Map<string, (item: SWItem) => boolean>(),

      offset: 0,
      limit: 1000,

      selected: null as SWItem | null,
    };
  },

  methods: {
    ...mapMutations([
      "itemsSet",
      "slotTypesSet",
      "inventoryTypesSet",
      "gainTypesSet",
    ]),
    ...mapGetters([
      "itemsCount",
      "itemsGet",
      "slotTypesGet",
      "inventoryTypesGet",
      "gainTypesGet",
    ]),

    filterBySlotType(value: number) {
      const id = `slot-type-${value}`;
      const functor = (item: SWItem) => item.slotType == value;

      if (this.filters.has(id)) {
        this.filters.delete(id);
        console.log(`disable filterBySlotType: ${value}`);
      } else {
        this.filters.set(id, functor);
        console.log(`enable filterBySlotType: ${value}`);
      }
    },

    filterByInventoryType(value: number) {
      const id = `inventory-type-${value}`;
      const functor = (item: SWItem) => item.inventoryType == value;

      if (this.filters.has(id)) {
        this.filters.delete(id);
        console.log(`disable filterByInventoryType: ${value}`);
      } else {
        this.filters.set(id, functor);
        console.log(`enable filterByInventoryType: ${value}`);
      }
    },

    filterByGainType(value: number) {
      const id = `gain-type-${value}`;
      const functor = (item: SWItem) => item.gainType == value;

      if (this.filters.has(id)) {
        this.filters.delete(id);
        console.log(`disable filterByGainType: ${value}`);
      } else {
        this.filters.set(id, functor);
        console.log(`enable filterByGainType: ${value}`);
      }
    },

    pageChange(offset: number) {
      this.offset = offset;
    },

    iconStyle(item: SWItem) {
      return {
        backgroundImage: `url(./${item.icon}), url(./GUI/Icon/Item/Dummy.png)`,
      };
    },

    select(item: SWItem) {
      this.selected = item;
    },
  },

  components: {
    FilterComponent: defineAsyncComponent(
      () => import("@/components/filter-component.vue")
    ),
  },

  async created() {
    const [items, inventoryTypes, slotTypes, gainTypes] = await Promise.all([
      fetch("./data.json").then((r) => r.json()),
      fetch("./inventoryTypes.json").then((r) => r.json()),
      fetch("./slotTypes.json").then((r) => r.json()),
      fetch("./gainTypes.json").then((r) => r.json()),
    ]);

    this.itemsSet({ items });
    this.inventoryTypesSet({ inventoryTypes });
    this.slotTypesSet({ slotTypes });
    this.gainTypesSet({ gainTypes });
  },
});
</script>

<style lang="scss">
@use "@/styles/reset.scss";
@use "@/styles/typography.scss";

:root {
  --bg-color: rgb(29, 29, 29);
  --font-color: rgb(194, 201, 207);
  --progress-color: #00bfff;
  --pink-color: rgb(255, 0, 64);

  --header-bg-color: #111111;
  --header-font-color: #535353;
  --header-link-bg-hover-color: rgba(194, 201, 207, 0.04);
  --header-active-link-border-color: #00bfff;

  --animation-very-short-time: 0.11s;
  --animation-short-time: 0.33s;
  --animation-middle-time: 0.77s;
  --animation-long-time: 1.33s;
  --animation-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

h1 {
  font-size: 22rem;
  text-align: center;
  font-weight: bold;
}

h2 {
  font-size: 18rem;
  font-weight: bold;
  padding: 10px 20px;
}

#app {
  color: var(--font-color);
  background-color: var(--bg-color);

  padding: 4px;
  display: grid;
  grid-template-columns: 200px 1fr;
}
</style>

<style lang="scss" scoped>
.pages {
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
}

.page {
  text-align: center;
  flex-basis: 40px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.068);

  transition: var(--animation-long-time) var(--animation-function);
  cursor: pointer;

  &:hover {
    background-color: var(--pink-color);
    transition: var(--animation-very-short-time) var(--animation-function);
  }
}

.selected-page {
  cursor: default;
  transition: unset;
  background-color: var(--pink-color);
  pointer-events: none;
}
</style>

<style lang="scss" scoped>
@import "@/styles/globals.scss";

$borderSize: 1;
$cellBaseSize: $iconSize;
$cellSize: $cellBaseSize + ($borderSize * 2);

.table-items {
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, #{$cellSize}px);
  gap: 4px;
}

.table-item {
  cursor: pointer;
  height: #{$cellSize}px;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  border: #{$borderSize}px solid transparent;
  transition: var(--animation-long-time) var(--animation-function);

  &:hover {
    border-color: var(--pink-color);
    background-color: var(--pink-color);
    transition: var(--animation-very-short-time) var(--animation-function);
    filter: grayscale(70%) saturate(70%);
  }
}
</style>

<style lang="scss" scoped>
@import "@/styles/globals.scss";

.selected-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(24, 24, 24, 0.7);
  display: flex;
  place-content: center;
  place-items: center;
}

.selected {
  width: 440px;
  background-color: rgba(24, 24, 24, 0.9);
  padding: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}

.selected-icon {
  background-repeat: no-repeat;
  background-size: contain;
  margin: 10px;

  $size: #{$iconSize}px;
  width: $size;
  height: $size;

  grid-column: 1;
  grid-row: 1 / 3;
}

.selected-id,
.selected-name {
  grid-column: 2;
}

.selected-description {
  grid-column: 1 / 3;
}
</style>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 100px 0;

  grid-column: 1 / 3;
}

.link {
  padding: 10px;
  transition: var(--animation-long-time) var(--animation-function);
  cursor: pointer;

  &:hover {
    color: var(--pink-color);
    transition: var(--animation-very-short-time) var(--animation-function);
  }
}
</style>
