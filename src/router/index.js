import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
import Home from '../views/Home.vue'
import { HomeIcon, BellIcon, SearchIcon, HeartIcon, InboxIcon, UserIcon, HashtagIcon, LogoutIcon } from "@heroicons/vue/outline"

const routes = [
    {
        path: '/vite-js-twitter/',
        name: 'Perfil',
        component: Profile,
        icon: UserIcon,
        menuBar: true,
    },
    {
        path: '/vite-js-twitter/home',
        name: 'Página Inicial',
        component: Home,
        icon: HomeIcon,
        menuBar: true,
        mainMenu: true
    },
    {
        path: '/vite-js-twitter/explore',
        name: 'Explorar',
        component: Profile,
        icon: HashtagIcon,
        menuBar: true,
        mainMenu: true,
        celIcon: SearchIcon
    },
    {
        path: '/vite-js-twitter/notifications',
        name: 'Notificações',
        component: Profile,
        icon: BellIcon,
        menuBar: true,
        mainMenu: true
    },
    {
        path: '/vite-js-twitter/messages',
        name: 'Mensagens',
        component: Profile,
        icon: InboxIcon,
        menuBar: true,
        mainMenu: true
    },
    {
        path: '/vite-js-twitter/favorite',
        name: 'Favoritos',
        component: Profile,
        icon: HeartIcon,
        menuBar: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router