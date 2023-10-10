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

interface PluginThisContext {
    target: GSAPTweenTarget;
    interp: (progress: number) => string;
}

export default function (): UseGsapReturn {
    const isSsr: boolean | undefined = inject('isSsr');
    const gsap: GSAP | undefined = inject(GsapInject);
    let timeLine: GSAPTimeline | null = gsap ? gsap.timeline() : null;
    gsap?.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);
    const ctx: gsap.Context | undefined = gsap?.context(() => {
    });
    const mm = gsap?.matchMedia();

    (function () {
        const blurProperty = gsap!.utils.checkPrefix('backdropFilter');
        const blurExp: RegExp = /blur\((.+)?px\)/;
        const getBlurMatch = (target: GSAPTweenTarget): RegExpMatchArray => {
            return <RegExpMatchArray>((gsap?.getProperty(target, blurProperty) as string) || '').match(blurExp) || [];
        };

        gsap?.registerPlugin({
            name: 'blur',
            get(this: PluginThisContext, target: GSAPTweenTarget): number {
                return +(getBlurMatch(target)[1]) || 0;
            },
            init(this: PluginThisContext, target: GSAPTweenTarget, endValue: number | string): void {
                let filter: string = gsap?.getProperty(target, blurProperty) as string;
                const endBlur: string = `blur(${endValue}px)`;
                const [match]: (string | undefined)[] = getBlurMatch(target);
                let index: number;

                if (filter === 'none') {
                    filter = '';
                }

                if (match) {
                    index = filter.indexOf(match);
                    endValue = `${filter.substring(0, index)}${endBlur}${filter.substring(index + match.length)}`;
                } else {
                    endValue = `${filter}${endBlur}`;
                    filter += filter ? ' blur(0px)' : 'blur(0px)';
                }

                this.target = target;
                this.interp = gsap?.utils.interpolate(filter, endValue as string);
            },
            render(progress: number, data: PluginThisContext): void {
                (data.target as HTMLElement).style[blurProperty as never] = data.interp(progress);
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
