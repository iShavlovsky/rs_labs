import { computed, ref, Ref } from 'vue';
import { Api } from '@/api';


export default function blog(blogApi: Api['blog']) {
    const articles: Ref<{
        [x: number]: Article[];
    }> = ref({});
    const metaData: Ref<Pagination | null> = ref(null);
    const loading: Ref<boolean> = ref(false);
    const pageArticles: Ref<number> = ref(1);
    const limitArticles: Ref<number> = ref(5);

    const totalArticles = computed(() => metaData.value?.pagination?.total);
    const totalPages = computed(() => {
        const totalValue = metaData.value?.pagination?.pageCount;
        return totalValue
            ? Array.from({ length: totalValue }, (_, index) => index + 1)
            : [1];
    });

    function hasArticle(): number {
        const { length } = Object.entries(articles.value);
        if (length === 0) {
            return length;
        } else {
            return Object.entries(articles.value[pageArticles.value]).length;
        }
    }

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


    async function load(requests?: ApiParameters): Promise<void> {
        const imgFields = { fields: ['name', 'alternativeText', 'url', 'width', 'height', 'formats'] as MediaAttributeKeys[] };
        const params: ApiParameters = {
            ...requests,
            populate: {
                cover: imgFields
            },
            pagination: {
                page: pageArticles.value,
                pageSize: limitArticles.value
            }
        };
        //TODO: Искусственная задержка в 2 секунды (2000 миллисекунд)
        await new Promise(resolve => setTimeout(resolve, 2000));
        const { data, meta } = await blogApi.loadPosts(params);

        if (data && meta && meta.pagination) {
            const { page } = meta.pagination;
            articles.value = { [page]: data };
            metaData.value = meta;
            console.log(data);
            loading.value = true;
        } else {
            loading.value = false;
        }
        return;
    }

    return {
        articles,
        loading,
        pageArticles,
        limitArticles,
        metaData,
        hasArticle,
        totalArticles,
        totalPages,
        getArticle,
        load
    };
}
