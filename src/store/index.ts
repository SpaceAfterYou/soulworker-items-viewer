import { createStore } from 'vuex';

type SWItem = {
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
    getItemsBy: (state) => (predicate: (value: SWItem) => boolean, offset: number, limit: number, perPage = 200) => {
      const _offset = offset * perPage;
      return state.items.filter(predicate).slice(_offset, _offset + limit);
    },

    getItemsPage: (state) => (offset: number, limit: number, perPage = 200) => {
      const _offset = offset * perPage;
      return state.items.slice(_offset, _offset + limit);
    }
  },

  mutations: {
    setItems: (state) => ({ items }: { items: SWItem[]; }) => {
      state.items = items;
    }
  },

  actions: {
  },

  modules: {
  }
});
