import { AxiosInstance, AxiosResponse } from 'axios';
import { Store } from '@/store';

export default (http: AxiosInstance, useAlertsStore: Store['alerts']) => {
    http.interceptors.response.use(
        (response: AxiosResponse) => response,
        error => {

            if (!error.response) {
                error.response = {
                    status: 500
                };
            }

            if ('errorAlert' in error.config) {
                const {
                    text,
                    fallback,
                    critical,
                    exclude
                } = error.config.errorAlert;
                if (exclude === undefined || !exclude.includes(error.response.status)) {
                    useAlertsStore.add(
                        `${text}${error.response.data.error.message}`,
                        critical ?? false
                    );
                    return {
                        status: error.response.status,
                        config: { url: error.config.url },
                        data: error.response.data ? error.response.data : fallback
                    };
                }
            }

            return Promise.reject(error);
        }
    );
};
