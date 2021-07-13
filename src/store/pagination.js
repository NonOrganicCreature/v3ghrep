import { ApiInstance } from '@/api'
export default {
    namespaced: true,
    state: {
        selectedPage: 1,
        itemsPerPage: 5,
        totalPagesCount: 10
    },
    mutations: {
        SET_SELECTED_PAGE(state, selectedPage) {
            state.selectedPage = selectedPage
        },
        SET_TOTAL_PAGES(state, totalPagesCount) {
            state.totalPagesCount = totalPagesCount
        },
    },
    getters: {
        getSelectedPage: state => state.selectedPage,
        getItemsPerPage: state => state.itemsPerPage,
        getPagesToShow: state => state.totalPagesCount

    },
    actions: {
        setSelectedPage({ state, commit }, page) {
            if (page <= 1) {
                commit('SET_SELECTED_PAGE', 1)
                return
            }

            if (page >= state.totalPagesCount) {
                commit('SET_SELECTED_PAGE', totalPagesCount)
                return
            }
            commit('SET_SELECTED_PAGE', page)
        },
        setTotalPage({ commit }, value) {
            commit('SET_TOTAL_PAGES', value)
        }
    }
}