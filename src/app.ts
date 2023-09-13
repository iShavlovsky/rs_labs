import "@/main.scss";
import createRouter from "@/router/index";
// import createHttp from "@/plugins/httpCreate";
// import createFingerprintPlugin from "@/plugins/fingerprintCreate";
// import createGsapPlugin from "@/plugins/gsapCreate";
// import createApi from "@/api";
// import createStores from "@/store";
// import createStorage from "@plugins/storage/storageCreate";
// import authTokensConnector from "@middlewares/auth-tokens.middleware";
// import authPagesConnector from "@middlewares/auth-pages.middleware";
// import authNeedLoginConnector from "@middlewares/auth-need-login";
// import httpAlertsConnector from "@middlewares/http-alerts.middleware";
// import loadLayoutConnector from "@middlewares/load-layout.middleware";
// import seoTagsConnector from "@middlewares/seo-tags";
import { createPinia } from "pinia";

// import StoreInject from "@injections/storeInject";
// import ApiInject from "@injections/apiInject";

import { createApp } from "vue";
import App from "./App.vue";


// const storage = createStorage(localStorage);
// const http = createHttp({ baseURL: import.meta.env.VITE_API_URL });
// const api = createApi(http);
// const stores = createStores(api, storage);

const router = createRouter();
// router.beforeEach(loadLayoutConnector);
const pinia = createPinia();

// const fpPlugin = createFingerprintPlugin();
// const gsapPlugin = createGsapPlugin();

// authTokensConnector(http, storage);
// authPagesConnector(router, stores.auth);
// authNeedLoginConnector(http, () => router.push({ name: "login" }));
// httpAlertsConnector(http, stores.alerts);
// seoTagsConnector(stores.seo, document);

const app = createApp(App);

app.use(pinia);
app.use(router);
// app.use(fpPlugin);
// app.use(gsapPlugin);

// app.provide(StoreInject, stores);
// app.provide(ApiInject, api);

// stores.auth.init();
app.mount("#app");
