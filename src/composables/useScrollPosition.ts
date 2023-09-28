import { inject, onMounted, onUnmounted, Ref, ref } from 'vue';
import { debounce } from '@/utils/debounce';

export default function (
    el: Ref<HTMLElement | undefined>,
    delay: number,
    onlyProgress = false
): Ref<number> {
    const isSsr: boolean | undefined = inject('isSsr');
    const positionScroll: Ref<number> = ref(0);

    const calculateScroll = () => {
        if (el.value !== undefined) {
            const newScroll = el.value.scrollTop / (el.value.scrollHeight - el.value.clientHeight);
            positionScroll.value = onlyProgress ? Math.max(positionScroll.value, newScroll) : newScroll;
        }
    };

    const debouncedHandler = debounce(calculateScroll, delay);

    if (!isSsr) {
        onMounted(() => window.addEventListener('scroll', debouncedHandler));
        onUnmounted(() => window.removeEventListener('scroll', debouncedHandler));
    }

    return positionScroll;
}
