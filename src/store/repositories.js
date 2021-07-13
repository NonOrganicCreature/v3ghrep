import { ApiInstance } from "@/api"
import { getLastPageFromParams } from "@/utility"
export default {
    namespaced: true,
    state: {
        repositories: [],
        forks: [],
        selectedRepository: {}
    },
    mutations: {
        SET_REPOSITORIES_ARRAY(state, repositories) {
            state.repositories = [...repositories]
        },
        SET_FORKS_ARRAY(state, forks) {
            state.forks = [...forks]
        },
        SET_SELECTED_REPOSITORY(state, selectedRepository) {
            state.selectedRepository = selectedRepository
        },
    },
    getters: {
        getRepositories: state => state.repositories,
        getForks: state => state.forks,
        getSelectedRepository: state => state.selectedRepository,
    },
    actions: {
        async setRepositories({ commit, rootGetters, dispatch }) {
            try {
                if (rootGetters['search/getSearchValue']) {
                    const response =
                        await ApiInstance
                            .get(`/users/${rootGetters['search/getSearchValue']}/repos?per_page=${rootGetters['pagination/getItemsPerPage']}&page=${rootGetters['pagination/getSelectedPage']}`)
                    commit('SET_REPOSITORIES_ARRAY', response.data)
                    dispatch('pagination/setTotalPage', getLastPageFromParams(response.headers), { root: true })
                }
            } catch (error) {
                console.log(error)
            }
        },
        setSelectedRepository({ commit, state, dispatch }, repositoryId) {
            const selectedRepository = state.repositories.filter(repository => repository.id === repositoryId)[0]
            commit('SET_SELECTED_REPOSITORY', selectedRepository)
        },
        async setForks({ dispatch, commit, state, rootGetters }) {
            try {
                const response =
                    await ApiInstance
                        .get(state.selectedRepository.forks_url.replace(process.env.VUE_APP_API_URL, '') + `?per_page=${rootGetters['pagination/getItemsPerPage']}&page=${rootGetters['pagination/getSelectedPage']}`)
                
                dispatch('pagination/setTotalPage', getLastPageFromParams(response.headers), { root: true })
                commit('SET_FORKS_ARRAY', response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
}