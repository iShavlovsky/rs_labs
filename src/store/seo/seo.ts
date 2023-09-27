import { ref, Ref } from 'vue';
import type { SEOState } from '@store/seo/seo.types';

export default function seo() {
    const status: Ref<number> = ref(200);
    const afterPageUpdatedListeners: Array<() => void> = [];

    function afterPageUpdated(callback: () => void) {
        afterPageUpdatedListeners.push(callback);
    }


    const seoState = ref<SEOState>({
        title: 'RSLabs',
        description: 'We build future of  web3  economy',
        keywords: 'technology, web3, economy, game, dev',
        author: 'The RSLabs',
        robots: 'index, follow',
        ogType: 'website',
        siteName: 'RSLabs',
        ogImage: 'http://localhost:3000/OG/OG-Home.webp',
        baseUrl: 'http://localhost:3000'
    });

    function setPage(newValues?: Partial<SEOState>) {
        if (newValues) {
            for (const [key, value] of Object.entries(newValues)) {
                if (value !== undefined) {
                    const typedKey = key as keyof SEOState;
                    seoState.value[typedKey] = value;
                }
            }
        }
        afterPageUpdatedListeners.forEach(listener => listener());
    }


    return {
        seoState,
        status,
        afterPageUpdated,
        setPage
    };
}
