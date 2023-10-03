import { inject, onMounted, onUnmounted } from 'vue';
import { GsapInject } from '@plugins/gsapCreate';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

interface UseGsapReturn {
    timeLine: GSAPTimeline | null;
    gsap: GSAP | undefined;
    ScrollTrigger: typeof ScrollTrigger;
    ScrollToPlugin: GSAPPlugin;
    MotionPathPlugin: GSAPPlugin;
    ctx: gsap.Context | undefined;
}

export default function (): UseGsapReturn {
    const isSsr: boolean | undefined = inject('isSsr');
    const gsap: GSAP | undefined = inject(GsapInject);
    let timeLine: GSAPTimeline | null = gsap ? gsap.timeline() : null;
    gsap?.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);
    const ctx: gsap.Context | undefined = gsap?.context(() => {
    });
    const mm = gsap?.matchMedia();
    if (!isSsr) {
        onMounted(() => {
        });
        onUnmounted(() => {
            if (timeLine) {
                timeLine.recent();
                timeLine.kill();
                timeLine = null;
            }
            ScrollTrigger.getAll().forEach(st => st.kill());
            ctx?.revert();
        });
    }

    return {
        MotionPathPlugin,
        ScrollToPlugin,
        ScrollTrigger,
        timeLine,
        gsap,
        ctx
    };
}
