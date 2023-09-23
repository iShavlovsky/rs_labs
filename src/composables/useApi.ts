import { inject } from 'vue';
import ApiInjection from '@injections/apiInject';

function useApi() {
    const api = inject(ApiInjection);

    if (!api) {
        throw new Error('Api not provide from root app!');
    }

    return api;
}

export default useApi;
