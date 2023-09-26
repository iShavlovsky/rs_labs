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
        description: 'We are unrealistically good at what we do and we are on fire with digital products. Develop something together!',
        keywords: 'software, engineers, develop',
        author: 'The RSLabs',
        robots: 'index, follow',
        ogType: 'website',
        siteName: 'RSLabs',
        ogImage: 'https://api.deployteam.ru/uploads/Basic_frane_7460e45f9b.jpg',
        baseUrl: ''
    });

    function setPage(newValues: Partial<SEOState>) {
        for (const [key, value] of Object.entries(newValues)) {
            if (value !== undefined) {
                const typedKey = key as keyof SEOState;
                seoState.value[typedKey] = value;
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
