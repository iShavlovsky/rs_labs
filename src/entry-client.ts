import createApp from './app';

(async function () {

    const { app, router, stores } = await createApp(false);

    // stores.blog.load({ sort: 'date:desc' });
    await router.isReady();

    app.mount('#app', import.meta.env.PROD);


})();
