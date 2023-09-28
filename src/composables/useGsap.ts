import { inject, onUnmounted } from 'vue';
import { GsapInject, ScrollTriggerInject } from '@injections/gsapInject';

interface UseGsapReturn {
    timeLine: GSAPTimeline | null;
    gsap: GSAP | undefined;
    scrollTrigger: typeof ScrollTrigger | undefined;
}

export default function (): UseGsapReturn {
    const isSsr: boolean | undefined = inject('isSsr');
    const gsap: GSAP | undefined = inject(GsapInject);
    const scrollTrigger: typeof ScrollTrigger | undefined = inject(ScrollTriggerInject);
    let timeLine: GSAPTimeline | null = gsap ? gsap.timeline() : null;


    if (!isSsr) {
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
