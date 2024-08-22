import { createRouter, createWebHistory } from 'vue-router';


import ProjectHome from './pages/ProjectHome.vue';
import ProjectAbout from './pages/ProjectAbout.vue';
import ProjectShow from './pages/ProjectShow.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ProjectHome
        },
        {
            path: '/about',
            name: 'about',
            component: ProjectAbout
        },
        {
            path: '/show',
            name: 'show',
            component: ProjectShow
        },
    ]
});
export { router };