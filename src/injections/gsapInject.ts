import { InjectionKey } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const GsapInject = Symbol('Gsap') as InjectionKey<typeof gsap>;
export const ScrollTriggerInject = Symbol('ScrollTrigger') as InjectionKey<typeof ScrollTrigger>;
