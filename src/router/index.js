import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RepositoryForks from '../views/RepositoryForks.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/forks/:id',
        name: 'RepositoryForks',
        component: RepositoryForks
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
