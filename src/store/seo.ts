import { ref, Ref } from 'vue';
import { IPageSettings } from '@/interfaces';

export default function seo() {
    const title: Ref<string> = ref('');
    const description: Ref<string> = ref('');
    const keywords: Ref<string> = ref('');
    const author: Ref<string> = ref('');
    const robots: Ref<string> = ref('');

    const ogType: Ref<string> = ref('');
    const siteName: Ref<string> = ref('');
    const ogImage: Ref<string> = ref('');

    const baseUrl: Ref<string> = ref('');
    const status: Ref<number> = ref(200);
    const afterPageUpdatedListeners: Array<() => void> = [];

    function afterPageUpdated(callback: () => void) {
        afterPageUpdatedListeners.push(callback);
    }

    function setPage({
        setTitle = '',
        setDescription = 'We are unrealistically good at what we do and we are on fire with digital products. Develop something together!',
        setKeywords = 'software, engineers, develop',
        setAuthor = 'The Deals',
        setRobots = 'index, follow',
        setOgType = 'website',
        setSiteName = 'The Deals',
        setOgImage = 'https://api.deployteam.ru/uploads/Basic_frane_7460e45f9b.jpg',
        setUrl = '',
        setStatus = 200
    }: IPageSettings) {
        const isServer = typeof window === 'undefined';
        const location = isServer ? 'server' : window.location;
        title.value = setTitle;
        description.value = setDescription;
        keywords.value = setKeywords;
        author.value = setAuthor;
        robots.value = setRobots;
        ogType.value = setOgType;
        siteName.value = setSiteName;
        ogImage.value = setOgImage;
        baseUrl.value = location + setUrl;
        status.value = setStatus;

        afterPageUpdatedListeners.forEach(listener => listener());
    }

    return {
        title,
        description,
        keywords,
        author,
        robots,

        ogType,
        siteName,
        ogImage,

        baseUrl,

        status,
        afterPageUpdated,
        setPage
    };
}
