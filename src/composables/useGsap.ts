import { inject, onMounted, onUnmounted } from 'vue';
import { GsapInject, ScrollTriggerInject } from '@injections/gsapInject';

interface UseGsapReturn {
    timeLine: GSAPTimeline | null;
    gsap: GSAP | undefined;
    scrollTrigger: GSAPPlugin | undefined; // Типизируйте соответствующим образом
}

export default function (): UseGsapReturn {
    const isSsr: boolean | undefined = inject('isSsr');
    const gsap: GSAP | undefined = inject(GsapInject);
    const scrollTrigger: GSAPPlugin | undefined = inject(ScrollTriggerInject);
    let timeLine: GSAPTimeline | null = null;


    if (!isSsr) {
        onMounted(() => {
            timeLine = gsap ? gsap.timeline() : null;
        });
        onUnmounted(() => {
            if (timeLine) {
                timeLine.kill();
                timeLine = null;
            }
        });
    }


    return {
        timeLine,
        gsap,
        scrollTrigger
    };
}
