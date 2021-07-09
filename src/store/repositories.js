import { ApiInstance } from "@/api"

export default {
    namespaced: true,
    state: {
        repositories: []
    },
    mutations: {
        SET_REPOSITORIES_ARRAY(state, repositories) {
            state.repositories = [...repositories]
        }
    },
    getters: {
        getRepositories: state => state.repositories
    },
    actions: {
        async setRepositories({ commit, rootGetters }) {
            try {
                const response = 
                    await ApiInstance
                    .get(`/users/${rootGetters['search/getSearchValue']}/repos?per_page=${rootGetters['pagination/getItemsPerPage']}&page=${rootGetters['pagination/getSelectedPage']}`)
                commit('SET_REPOSITORIES_ARRAY', response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
}