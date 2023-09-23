import { inject } from 'vue';
import StoreInjection from '@injections/storeInject';

function useStore() {
    const store = inject(StoreInjection);

    if (!store) {
        throw new Error('Store not provide from root app!');
    }

    return store;
}

export default useStore;
