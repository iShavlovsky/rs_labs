import type { AxiosInstance } from 'axios';
import createErrorAlertConfig from '@/utils/fallback';


export default (http: AxiosInstance) => ({
    async loadPosts(params: ApiParameters) {

        const fallbackConfig = createErrorAlertConfig<Payload>('Get posts: ');
        const config = {
            params: params,
            ...fallbackConfig
        };
        const response = await http.get<Payload>(
            '/api/articles',
            config
        );
        return response.data;
    }
});
