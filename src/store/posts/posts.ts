import { Ref, ref } from 'vue';
import { Api } from '@/api';


export default function blog(blogApi: Api['blog']) {
    const articles: Ref<{
        [x: number]: Article[];
    }> = ref({});

    const metaData: Ref<Pagination | null> = ref(null);

    function getArticle(slug: string): Article | null {
        const allArticles = articles.value;
        for (const pageNumber in allArticles) {
            const pageArticles: Article[] = allArticles[pageNumber];
            const article: Article | undefined = pageArticles.find(item => item.attributes.slug === slug);
            if (article) {
                return article;
            }
        }
        return null;
    }


    async function load(requests?: ApiParameters): Promise<boolean> {
        const imgFields = { fields: ['name', 'alternativeText', 'url', 'formats'] as MediaAttributeKeys[] };
        const params: ApiParameters = {
            ...requests,
            populate: {
                cover: imgFields
            }
        };
        //TODO: Искусственная задержка в 2 секунды (2000 миллисекунд)
        await new Promise(resolve => setTimeout(resolve, 2000));
        const { data, meta } = await blogApi.loadPosts(params);

        if (data && meta && meta.pagination) {
            const { page } = meta.pagination;
            articles.value = { [page]: data };
            metaData.value = meta;
            return true;
        } else {
            return false;
        }

    }

    return {
        articles,
        metaData,
        getArticle,
        load
    };
}
