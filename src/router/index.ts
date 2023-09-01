import {createRouter, createWebHistory} from "vue-router";



import HomeView from '@views/HomeView.vue'
const View404 = () => import("@views/View404.vue");

export default () => {
    const routes = [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/:pathMatch(.*)*',
            component: View404
        }
    ]
    return createRouter({
        routes,
        history: createWebHistory(import.meta.env.BASE_URL),
        scrollBehavior() {
            return {top: 0}; // прокрутка страницы в начало
        }
    });
};

