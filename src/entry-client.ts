import createApp from './app';

(async function () {

    const { app, router, stores } = await createApp(false);

    // await stores.blog.load();
    await router.isReady();

    app.mount('#app', import.meta.env.PROD);


})();
