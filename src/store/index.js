import { createStore } from 'vuex'
import repositories from './repositories'
import search from './search'
import pagination from './pagination'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    search, repositories, pagination
  }
})
