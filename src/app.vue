<template v-if="itemsCount() > 0">
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
      v-for="item of itemsGetPage()(offset, limit)"
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { SWItem } from "./store";

export default defineComponent({
  name: "App",

  data() {
    return {
      offset: 0,
      limit: 1000,

      selected: null as SWItem | null,
    };
  },

  methods: {
    ...mapMutations(["itemsSet"]),
    ...mapGetters(["itemsCount", "itemsGetPage"]),

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

  components: {},

  async created() {
    const response = await fetch("./data.json");
    const items = await response.json();

    this.itemsSet({ items });
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

#app {
  color: var(--font-color);
  background-color: var(--bg-color);

  padding: 4px;
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
