import createApp from './app';

(async function () {

    const { app, router } = await createApp(false);


    await router.isReady();

    app.mount('#app', import.meta.env.PROD);


})();
