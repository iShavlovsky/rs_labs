import { App } from 'vue';
import Vue3Marquee from 'vue3-marquee';

export default () => {
    return {
        install: (app: App) => {
            app.use(Vue3Marquee, { name: 'Vue3Marquee' });
        }
    };
};
