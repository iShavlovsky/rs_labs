import { inject, onMounted, onUnmounted } from 'vue';
import { GsapInject } from '@plugins/gsapCreate';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

interface UseGsapReturn {
    timeLine: GSAPTimeline | null;
    gsap: GSAP | undefined;
    ScrollTrigger: typeof ScrollTrigger;
    ScrollToPlugin: GSAPPlugin;
    MotionPathPlugin: GSAPPlugin;
}

export default function (): UseGsapReturn {
    const isSsr: boolean | undefined = inject('isSsr');
    const gsap: GSAP | undefined = inject(GsapInject);
    let timeLine: GSAPTimeline | null = gsap ? gsap.timeline() : null;
    gsap?.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);
    if (!isSsr) {
        onMounted(() => {
        });
        onUnmounted(() => {
            if (timeLine) {
                timeLine.kill();
                timeLine = null;
            }
            ScrollTrigger.getAll().forEach(st => st.kill());
        });
    }

    return {
        MotionPathPlugin,
        ScrollToPlugin,
        ScrollTrigger,
        timeLine,
        gsap
    };
}
