// noinspection JSUnusedGlobalSymbols

import {createRouter, createWebHistory} from 'vue-router'
import Main from '@/views/MainPage.vue'
import About from '@/views/AboutPage.vue'
import Contact from '@/views/ContactPage.vue'
import Projects from '@/views/ProjectsPage.vue'

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})

export default router