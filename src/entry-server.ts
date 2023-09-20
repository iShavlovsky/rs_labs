import createApp from './app';

interface ServerAppContext {
    url: string
}

export default async function (context: ServerAppContext) {
    const { app, router, stores } = await createApp(true);

    // await stores.content.load();
    await router.push(context.url);
    await router.isReady();


    return { app, stores };
}
