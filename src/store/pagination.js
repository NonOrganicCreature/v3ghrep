import { ApiInstance } from '@/api'
export default {
    namespaced: true,
    state: {
        selectedPage: 1,
        itemsPerPage: 5,
        totalItemsCount: 10
    },
    mutations: {
        SET_SELECTED_PAGE(state, selectedPage) {
            state.selectedPage = selectedPage
        },
        SET_TOTAL_ITEMS_PAGE(state, totalItemsCount) {
            state.totalItemsCount = totalItemsCount
        },
    },
    getters: {
        getSelectedPage: state => state.selectedPage,
        getItemsPerPage: state => state.itemsPerPage,
        getPagesToShow: state =>
            [...Array(Math.ceil(state.totalItemsCount / state.itemsPerPage)).keys()]
                .map(arrayIndexKey => arrayIndexKey + 1)

    },
    actions: {
        setSelectedPage({ state, commit }, page) {
            console.log(page)
            if (page <= 1) {
                commit('SET_SELECTED_PAGE', 1)
                return
            }

            const totalPageCount = Math.ceil(state.totalItemsCount / state.itemsPerPage)
            if (page >= totalPageCount) {
                commit('SET_SELECTED_PAGE', totalPageCount)
                return
            }
            commit('SET_SELECTED_PAGE', page)
        },
        async setTotalPage({ commit, rootGetters }) {
            try {
                const response =
                    await ApiInstance
                        .get(`/users/${rootGetters['search/getSearchValue']}`)
    
                commit('SET_TOTAL_ITEMS_PAGE', response.data.public_repos)
            } catch(error) {
                console.log(error)
            }
        },
        setForkTotalPage({ commit }, value) {
            commit('SET_TOTAL_ITEMS_PAGE', value)
        },

    }
}