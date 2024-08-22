import { createRouter, createWebHistory } from 'vue-router';


import ProjectHome from './pages/ProjectHome.vue';
import ProjectAbout from './pages/ProjectAbout.vue';
import ProjectShow from './pages/ProjectShow.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'project-home',
            component: ProjectHome
        },
        {
            path: '/about',
            name: 'project-about',
            component: ProjectAbout
        },
        {
            path: '/show',
            name: 'project-show',
            component: ProjectShow
        },
    ]
});
export { router };