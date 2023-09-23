import initAlertsStore from './alerts';
import initSeoStore from './seo';
import { TApi } from '@/api';
import { IStorage } from '@plugins/storage/storage.types';

const createStore = (api: TApi, storage: IStorage) => {
    const alerts = initAlertsStore();
    const seo = initSeoStore();

    return {
        alerts,
        seo
    };
};
export default createStore;
export type TStore = ReturnType<typeof createStore>;
