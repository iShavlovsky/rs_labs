import { inject, onMounted, onUnmounted, Ref } from 'vue';

export default function useClickOutside(
    el: Ref<HTMLElement | null>,
    callback: (event: Event) => void
): void {
    const isSsr: boolean | undefined = inject('isSsr');

    const handleClickOutside = (event: Event) => {
        if (!event.composedPath().includes(el.value as Node)) {
            callback(event);
        }
    };

    if (!isSsr) {
        onMounted(() => window.addEventListener('click', handleClickOutside));
        onUnmounted(() => window.removeEventListener('click', handleClickOutside));
    }
}
