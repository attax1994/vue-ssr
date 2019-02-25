import Vue from 'vue'

const fetchItem = (id) => Promise.resolve({
  id,
  item: 'item',
  title: `I am title for ${id}`,
})

const ItemStore = {
  namespaced: true,
  state: {
    items: {},
  },
  mutations: {
    setItem(state, {id, item}) {
      Vue.set(state.items, id, item)
    },
  },
  actions: {
    fetchItem({commit}, id) {
      return fetchItem(id)
        .then(item => {
          commit('setItem', {id, item})
        })
    },
  },
}

export default ItemStore
