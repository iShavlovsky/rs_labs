import {createRouter, createWebHistory} from "vue-router";
import { RouteNamesEnum } from "@router/router.types";

const HomeView = () => import("@views/HomeView.vue");
export default () => {
    const routes = [
        {
            path: '/',
            component: HomeView,
            name: RouteNamesEnum.home,
            meta: { content: "home" }
        },
        {
            path: '/mission',
            name: RouteNamesEnum.mission,
            component: () => import("@views/MissionView.vue"),
            meta: { content: "mission" }
        },
        {
            path: '/join-us',
            name: RouteNamesEnum.joinUs,
            component: () => import("@views/JoinUsView.vue"),
            meta: { content: "joinUs" }
        },
        {
            path: '/articles-base',
            name: RouteNamesEnum.articles,
            component: () => import("@views/ArticlesBaseView.vue"),
            meta: { content: "articles" }
        },
        {
            path: '/article/:slug',
            name: "article.item",
            props: true,
            component: () => import("@views/ArticleView.vue"),
            meta: { content: "article" }
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import("@views/NotFoundView.vue")
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

