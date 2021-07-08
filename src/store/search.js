export default {
    namespaced: true,
    state: {
        searchValue: ''
    },
    mutations: {
        SET_SEARCH_VALUE(state, value) {
            state.searchValue = value
        }
    },
    getters: {
        searchValue: state => state.searchValue
    },
    actions: {
        setSearchValue({ commit }, value) {
            commit('SET_SEARCH_VALUE', value)
        }
    }
}