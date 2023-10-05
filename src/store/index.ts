import initAlertsStore from './alerts/alerts';
import initSeoStore from './seo/seo';
import initPostsStore from './posts/posts';
import { Api } from '@/api';
import { IStorage } from '@/plugins/storage/storage.types';

const createStore = (api: Api, storage: IStorage) => {
    const alerts = initAlertsStore();
    const seo = initSeoStore();
    const posts = initPostsStore(api.blog);
    return {
        alerts,
        seo,
        posts
    };
};
export default createStore;
export type Store = ReturnType<typeof createStore>;
