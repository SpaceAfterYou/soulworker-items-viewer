import { createStore } from 'vuex';

export type SWItem = {
  id: number,
  type: number,
  name: string,
  description: string,
  icon: string,
  hero: number;
};

export default createStore({
  state: {
    items: [] as SWItem[]
  },

  getters: {
    itemsCount: (state) => state.items.length,

    itemsGetPage: (state) => (offset: number, limit = 200) => {
      const _offset = offset * limit;
      return state.items.slice(_offset, _offset + limit);
    },

    itemsGetBy: (state) => (predicate: (value: SWItem) => boolean, offset: number, limit: number, perPage = 200) => {
      const _offset = offset * perPage;
      return state.items.filter(predicate).slice(_offset, _offset + limit);
    },
  },

  mutations: {
    itemsSet: (state, { items }: { items: SWItem[]; }) => {
      state.items = items;
    }
  },

  actions: {
  },

  modules: {
  }
});
