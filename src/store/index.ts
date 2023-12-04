import { createStore } from "vuex";

export type SWItem = {
  inventoryType: number;
  description: string;
  slotType: number;
  gainType: number;
  name: string;
  icon: string;
  hero: number;
  id: number;
};

export default createStore({
  getters: {
    itemsGet:
      (state) =>
      ({
        filters,
        offset,
        limit,
      }: {
        filters?: ((value: SWItem) => boolean)[];
        offset: number;
        limit: number;
      }) => {
        let items = state.items;
        if (filters) {
          for (const filter of filters) {
            items = items.filter(filter);
          }
        }

        const _offset = offset * limit;
        return items.slice(_offset, _offset + limit);
      },

    inventoryTypesGet: (state) => state.inventoryTypes,

    itemsCount: (state) => state.items.length,

    slotTypesGet: (state) => state.slotTypes,

    gainTypesGet: (state) => state.gainTypes,
  },

  mutations: {
    inventoryTypesSet: (
      state,
      { inventoryTypes }: { inventoryTypes: number[] }
    ) => {
      state.inventoryTypes = inventoryTypes;
    },

    slotTypesSet: (state, { slotTypes }: { slotTypes: number[] }) => {
      state.slotTypes = slotTypes;
    },

    gainTypesSet: (state, { gainTypes }: { gainTypes: number[] }) => {
      state.gainTypes = gainTypes;
    },

    itemsSet: (state, { items }: { items: SWItem[] }) => {
      state.items = items;
    },
  },

  state: {
    inventoryTypes: [] as number[],
    slotTypes: [] as number[],
    gainTypes: [] as number[],
    items: [] as SWItem[],
  },

  actions: {},

  modules: {},
});
