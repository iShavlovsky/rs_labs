import { TStore } from '@/store';

export default (useSeoStore: TStore['seo'], document: Document) => {
    const seoStore = useSeoStore;
    seoStore.afterPageUpdated(function () {
        const {
            title,
            description,
            keywords,
            author,
            robots,
            ogType,
            siteName,
            ogImage,
            baseUrl
        } = seoStore.seoState.value;

        const titleElement = document.querySelector('title');
        if (titleElement) titleElement.innerHTML = title;

        setMetaAttribute('description', description);
        setMetaAttribute('keywords', keywords);
        setMetaAttribute('author', author);
        setMetaAttribute('robots', robots);

        setMetaProperty('og:type', ogType);
        setMetaProperty('og:site_name', siteName);
        setMetaProperty('og:image', ogImage);

        const canonicalElement = document.querySelector('link[rel="canonical"]');
        if (canonicalElement) canonicalElement.setAttribute('href', `${baseUrl}`);
    });

    function setMetaAttribute(name: string, value: string) {
        const element = document.querySelector(`meta[name="${name}"]`);
        if (element) element.setAttribute('content', value);
    }

    function setMetaProperty(property: string, value: string) {
        const element = document.querySelector(`meta[property="${property}"]`);
        if (element) element.setAttribute('content', value);
    }

    // same stories^ yam, ga -> send event page
};
