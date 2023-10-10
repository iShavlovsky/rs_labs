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

    //TODO: привести к типам плагин для блюра
    (function () {
        const blurProperty = gsap.utils.checkPrefix('backdrop-filter'),
            blurExp = /blur\((.+)?px\)/,
            getBlurMatch = target => (gsap.getProperty(target, blurProperty) || '').match(blurExp) || [];

        gsap.registerPlugin({
            name: 'blur',
            get(target) {
                return +(getBlurMatch(target)[1]) || 0;
            },
            init(target, endValue) {
                let data = this,
                    filter = gsap.getProperty(target, blurProperty),
                    endBlur = 'blur(' + endValue + 'px)',
                    match = getBlurMatch(target)[0],
                    index;
                if (filter === 'none') {
                    filter = '';
                }
                if (match) {
                    index = filter.indexOf(match);
                    endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
                } else {
                    endValue = filter + endBlur;
                    filter += filter ? ' blur(0px)' : 'blur(0px)';
                }
                data.target = target;
                data.interp = gsap.utils.interpolate(filter, endValue);
            },
            render(progress, data) {
                data.target.style[blurProperty] = data.interp(progress);
            }
        });
    })();

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
