import { inject } from 'vue';
import { GsapInject, ScrollTriggerInject } from '@injections/gsapInject';

function useGsap() {
    const gsap = inject(GsapInject);
    const scrollTrigger = inject(ScrollTriggerInject);
    // if (!gsap || !scrollTrigger) {
    //     throw new Error('Gsap not provide from root app!');
    // }

    return {
        gsap,
        scrollTrigger
    };
}

export default useGsap;
