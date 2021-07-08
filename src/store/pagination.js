import { ApiInstance } from '@/api'
export default {
    namespaced: true,
    state: {
        currentPage: 1,
        selectedPage: 1,
        maxPageCount: 5,
        totalPageCount: 10
    },
    mutations: {
        SET_CURRENT_PAGE(state, currentPage) {
            state.currentPage = currentPage
        },
        SET_SELECTED_PAGE(state, selectedPage) {
            state.selectedPage = selectedPage
        },
        SET_TOTAL_PAGE(state, totalPageCount) {
            state.totalPageCount = totalPageCount
        },
    },
    getters: {
        getCurrentPage: state => state.currentPage,
        getPagesToShow: state =>
            [...Array(state.maxPageCount).keys()]
                .map(arrayIndexKey => (arrayIndexKey + 1) + currentPage)

    },
    actions: {
        setCurrentPage({ commit }, page) {
            commit('SET_CURRENT_PAGE', page)
        },
        setSelectedPage({ commit }, selectedPage) {
            commit('SET_SELECTED_PAGE', selectedPage)
        },
        async setTotalPage({ commit }) {
            const response = 
                    await ApiInstance
                    .get(`/users/${rootGetters['search/searchValue']}`)
                    
            commit('SET_TOTAL_PAGE', response.data.public_repos)
        },
        
    }
}