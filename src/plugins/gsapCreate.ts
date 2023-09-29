import { gsap } from 'gsap';
import { App, InjectionKey } from 'vue';

export const GsapInject = Symbol('Gsap') as InjectionKey<typeof gsap>;

export default (isSsr: boolean) => {
    return {
        install: (app: App) => {
            app.provide(GsapInject, gsap);
        }
    };
};
