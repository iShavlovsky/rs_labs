import '@/main.scss';

import createRouter from '@/router/index';
import createHttp from '@/plugins/httpCreate';
import createGsapPlugin from '@/plugins/gsapCreate';
import marqueeCreatePlugin from '@/plugins/marqueeCreate';
import createApi from '@/api';
import createStores from '@/store';
import createStorage from '@plugins/storage/storageCreate';
import seoTagsConnector from '@middlewares/seo-tags';
import { createPinia } from 'pinia';
import httpAlertsConnector from '@middlewares/http-alerts.middleware';

import StoreInject from '@injections/storeInject';
import ApiInject from '@injections/apiInject';
import { createApp, createSSRApp } from 'vue';
import App from './App.vue';

export default async (isSsr = false) => {
    const storageDriver: Pick<Storage, 'setItem' | 'getItem' | 'removeItem'> = isSsr
        ? {
            setItem: () => {
            },
            getItem: () => null,
            removeItem: () => {
            }
        }
        : localStorage;

    const storage = createStorage(storageDriver);
    const http = createHttp({ baseURL: import.meta.env.VITE_API_URL });
    const api = createApi(http);
    const stores = createStores(api, storage);
    const router = createRouter(isSsr);
    const gsapPlugin = createGsapPlugin(isSsr);
    const pinia = createPinia();

    httpAlertsConnector(http, stores.alerts);

    const createAppByMode = import.meta.env.DEV ? createApp : createSSRApp;
    const app = createAppByMode(App);

    marqueeCreatePlugin();
    app.use(pinia);
    app.use(router);
    // app.use(marquee);
    app.use(gsapPlugin);

    app.provide(StoreInject, stores);
    app.provide(ApiInject, api);
    app.provide('isSsr', isSsr);

    if (!isSsr) {
        console.log('isSsr', isSsr);
        seoTagsConnector(stores.seo, document);
    }

    return { app, stores, router };
};
