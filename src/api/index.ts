// import createOpportunityApi from './opportunity'
import createCartAuth from './auth';
import type { AxiosInstance } from 'axios';

const createApi = (http: AxiosInstance) => {
    // let opportunity = createOpportunityApi(http);
    const auth = createCartAuth(http);

    return {
    // opportunity,
        auth
    };
};
export default createApi;
export type TApi = ReturnType<typeof createApi>;
