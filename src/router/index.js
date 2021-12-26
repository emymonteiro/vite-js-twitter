import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'

const routes = [
    {
        path: '/vite-js-twitter/',
        name: 'Profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router