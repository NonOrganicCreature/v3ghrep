import { ApiInstance } from "@/api"
import { REPOSITORIES_PER_PAGE } from '@/constants'

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
                    .get(`/users/${rootGetters['search/searchValue']}/repos?per_page=${REPOSITORIES_PER_PAGE}`)
                commit('SET_REPOSITORIES_ARRAY', response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
}