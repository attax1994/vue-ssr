import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const fetchItem = (id) => Promise.resolve({
  id,
  item: 'item',
  title: `I am title for ${id}`,
})


export function createStore() {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
  })
}

