import { createStore } from 'vuex';

export type SWItem = {
  id: number,
  slotType: number;
  inventoryType: number;
  name: string,
  description: string,
  icon: string,
  hero: number;
};

export default createStore({
  state: {
    items: [] as SWItem[],
    inventoryTypes: [] as number[],
    slotTypes: [] as number[]
  },

  getters: {
    itemsCount: (state) => state.items.length,

    itemsGet: (state) => ({ offset, limit, filters }: { offset: number, limit: number, filters?: ((value: SWItem) => boolean)[]; }) => {
      let items = state.items;
      if (filters) {
        for (const filter of filters) {
          items = items.filter(filter);
        }
      }

      const _offset = offset * limit;
      return items.slice(_offset, _offset + limit);
    },

    slotTypesGet: (state) => state.slotTypes,

    inventoryTypesGet: (state) => state.inventoryTypes,
  },

  mutations: {
    itemsSet: (state, { items }: { items: SWItem[]; }) => {
      state.items = items;
    },

    slotTypesSet: (state, { slotTypes }: { slotTypes: number[]; }) => {
      state.slotTypes = slotTypes;
    },

    inventoryTypesSet: (state, { inventoryTypes }: { inventoryTypes: number[]; }) => {
      state.inventoryTypes = inventoryTypes;
    }
  },

  actions: {
  },

  modules: {
  }
});
