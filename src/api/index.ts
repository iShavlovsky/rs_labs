import createBlog from './blog';
import type { AxiosInstance } from 'axios';

const createApi = (http: AxiosInstance) => {
    const blog = createBlog(http);
    return {
        blog
    };
};
export default createApi;
export type Api = ReturnType<typeof createApi>;
