import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import { RouteNamesEnum } from '@/router/router.types';
import HomeView from '@pages/IndexPage.vue';
// const HomeView = () => import('@views/HomeView.vue');
export default (isSsr: boolean) => {
    const createHistory = isSsr ? createMemoryHistory : createWebHistory;
    const routes = [
        {
            path: '/',
            component: HomeView,
            name: RouteNamesEnum.home,
            meta: { content: 'home' }
        },
        {
            path: '/mission',
            name: RouteNamesEnum.mission,
            component: () => import('@pages/MissionPage.vue'),
            meta: { content: 'mission' }
        },
        {
            path: '/join-us',
            name: RouteNamesEnum.joinUs,
            component: () => import('@pages/JoinUsPage.vue'),
            meta: { content: 'joinUs' }
        },
        {
            path: '/articles',
            name: RouteNamesEnum.articles,
            component: () => import('@pages/ArticlesBasePage.vue'),
            meta: { content: 'articles' }
        },
        {
            path: '/article/:slug',
            name: RouteNamesEnum.article,
            props: true,
            component: () => import('@pages/ArticlePage.vue'),
            meta: { content: 'article' }
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@pages/NotFoundPage.vue')
        }
    ];

    return createRouter({
        routes,
        history: createHistory(import.meta.env.BASE_URL),
        scrollBehavior() {
            return { top: 0 }; // прокрутка страницы в начало
        }
    });
};

