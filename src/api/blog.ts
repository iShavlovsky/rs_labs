import { AxiosInstance } from 'axios';
import createErrorAlertConfig from '@/utils/fallback';

export default (http: AxiosInstance) => ({
    async loadPosts() {
        const fallbackConfig = createErrorAlertConfig<Article>('Get posts: ');
        const response = await http.get<Article[]>(
            '/api/articles',
            fallbackConfig as CustomRequestConfig<Article>
        );
        return response.data;
    }
});
