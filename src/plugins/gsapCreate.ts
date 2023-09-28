import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { App } from 'vue';
import { GsapInject, ScrollTriggerInject } from '@injections/gsapInject';


export default (isSsr: boolean) => {
    const triggerInstance = isSsr ? null : ScrollTrigger;
    return {
        install: (app: App) => {
            app.provide(GsapInject, gsap);
            app.provide(ScrollTriggerInject, triggerInstance);
        }
    };
};
