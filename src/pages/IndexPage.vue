<template>
  <div class="blur"></div>
  <HomeSection1 :ref="sections[0]"
                data-section-name="0"
  />
  <HomeSection2 :ref="sections[1]"
                class="section-anim"
                data-section-name="1"
  />
  <HomeSection3 :ref="sections[2]"
                class="section-anim"
                data-section-name="2"
  />
  <HomeSection4 :ref="sections[3]"
                class="section-anim"
                data-section-name="3"
  />
  <HomeSection5 :ref="sections[4]"
                class="section-anim"
                data-section-name="4"
  />
  <HomeSection6 :ref="sections[5]"
                class="section-anim"
                data-section-name="5"
  />
  <KnowledgeBaseSection :ref="sections[6]"
                        class="section-anim"
                        data-section-name="6"
  />
  <BackedBy ref="backed" />
  <JoinUs :ref="sections[7]"
          class="section-anim"
          data-section-name="7"
  />

  <UMapSideBar :current-section="currentVisibleSection"
               @map-position="handleScrollToBlock"
  />
</template>

<script lang="ts" setup>
import { ComponentPublicInstance, onMounted, onUnmounted, Ref, ref } from 'vue';
import HomeSection1 from '@components/HomeSection/HomeSection1.vue';
import HomeSection2 from '@components/HomeSection/HomeSection2.vue';
import HomeSection3 from '@components/HomeSection/HomeSection3.vue';
import HomeSection4 from '@components/HomeSection/HomeSection4.vue';
import HomeSection5 from '@components/HomeSection/HomeSection5.vue';
import HomeSection6 from '@components/HomeSection/HomeSection6.vue';
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection.vue';
import UMapSideBar from '@/components/UMapSideBar/UMapSideBar.vue';
import BackedBy from '@components/BackedBy.vue';
import JoinUs from '@/components/JoinUs.vue';
import useStore from '@/composables/useStore';
import useGsap from '@/composables/useGsap';


const { seo } = useStore();

const { timeLine, gsap, ctx } = useGsap();
const currentVisibleSection = ref<number>(0);
let sections: Array<Ref<ComponentPublicInstance | null>> = Array(8).fill(null).map(() => ref(null));
const backed: Ref<ComponentPublicInstance | null> = ref(null);
let observer: IntersectionObserver | null = null;


const animationScroll = () => {

    const CONTAINERS = gsap?.utils.toArray('.container-anim') as HTMLElement[];
    const SHIFTS = [...CONTAINERS];
    SHIFTS.forEach((_, index) => {

        const currentContainer = SHIFTS[index];
        const nextContainer = SHIFTS[index + 1];
        const triggerSection = sections[index].value?.$el;

        let tl;
        if (index === sections.length - 1) {

            tl = gsap?.timeline({
                scrollTrigger: {
                    trigger: triggerSection,
                    start: 'clamp(0% 35%)',
                    end: 'clamp(100% 35%)',
                    scrub: .2,
                    markers: true
                }
            });
            tl?.fromTo(currentContainer, {
                transformOrigin: 'bottom',
                filter: 5,
                rotationX: 80,
                yPercent: -50,
                ease: 'sine.out'
            },
            {
                rotationX: 0,
                yPercent: 0
            }, '<');
            tl?.to('.blur', { blur: 0 }, '+.25');
            tl?.set(currentContainer, { rotationX: 0 }, '<');
        } else if (index === sections.length - 2) {
            tl = gsap?.timeline({
                scrollTrigger: {
                    trigger: triggerSection,
                    start: 'clamp(70% 35%)',
                    end: 'clamp(150% 35%)',
                    scrub: .2,
                    markers: true
                }
            });
            tl?.to('.blur', { blur: 3 });
            tl?.to(currentContainer, {
                transformOrigin: 'top',
                rotationX: -80,
                ease: 'sine.out'
            }, '<');
            tl?.fromTo(nextContainer, {
                transformOrigin: 'bottom',
                rotationX: 80,
                yPercent: -50,
                ease: 'sine.out'
            },
            {
                rotationX: 0,
                yPercent: 0
            }, '<');
            tl?.to('.blur', { blur: 0 }, '<');
            tl?.fromTo(backed.value?.$el, {
                transformOrigin: 'center',
                yPercent: -90,
                scale: 1.4,
                ease: 'sine.out'
            },
            {
                scale: 1,
                yPercent: 0
            });

        } else if (index === sections.length - 4) {
            tl = gsap?.timeline({
                scrollTrigger: {
                    trigger: triggerSection,
                    start: 'clamp(60% 35%)',
                    end: 'clamp(150% 35%)',
                    scrub: .2,
                    markers: true
                }
            });
            tl?.to('.blur', { blur: 3 });
            tl?.to(currentContainer, {
                transformOrigin: 'top',
                rotationY: -80,
                ease: 'sine.out'
            }, '<');
            tl?.fromTo(nextContainer, {
                transformOrigin: 'bottom',
                rotationY: 80,
                xPercent: -50,
                ease: 'sine.out'
            },
            {
                rotationY: 0,
                xPercent: 0
            }, '<');
            tl?.to('.blur', { blur: 0 }, '+.25');
            tl?.to(currentContainer, { rotationY: 0 }, '<');
        } else {
            tl = gsap?.timeline({
                scrollTrigger: {
                    trigger: triggerSection,
                    start: 'clamp(55% 35%)',
                    end: 'clamp(150% 35%)',
                    scrub: .2,
                    markers: true
                }
            });
            tl?.to('.blur', { blur: 3 });
            tl?.to(currentContainer, { transformOrigin: 'top', rotationX: -80 }, '<');
            tl?.fromTo(nextContainer, {
                transformOrigin: 'bottom',
                rotationX: 80,
                yPercent: -50,
                ease: 'sine.out'
            },
            {
                rotationX: 0,
                yPercent: 0
            }, '<');
            tl?.to('.blur', { blur: 0 }, '+.25');
            tl?.to(currentContainer, { rotationX: 0 }, '<');
        }
    });
    return;
};

const handleScrollToBlock = (chapter: number) => {
    // const time: number = 0.50;
    //
    // const currentSection = sections[currentVisibleSection.value].value?.$el;
    const nextSection = sections[chapter - 1].value?.$el;
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
    // ctx?.add(() => {
    //     timeLine?.to(currentSection, {
    //         duration: time,
    //         opacity: .1,
    //         x: `${-100}%`,
    //         ease: 'sine.out',
    //         onComplete: () => {
    //             gsap?.fromTo(nextSection,
    //                 {
    //                     duration: 0,
    //                     opacity: .1,
    //                     x: `${100}%`,
    //                     ease: 'sine.out'
    //                 },
    //                 {
    //                     duration: time,
    //                     opacity: 1,
    //                     x: `${0}%`,
    //                     ease: 'sine.out'
    //                 }
    //             );
    //             if (nextSection) nextSection.scrollIntoView();
    //         }
    //     });
    //     timeLine?.to(currentSection, {
    //         duration: 0,
    //         opacity: 1,
    //         x: '0%',
    //         ease: 'sine.out'
    //     });
    // });
};


onMounted(() => {
    animationScroll();
    const options = {
        root: null,
        rootMargin: '0px 0px 0px 0px', // Отрицательный отступ сверху на 10%
        threshold: 0.69
    };

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // entry.target.classList.toggle('pivot-top');
                const numberSection = entry.target?.getAttribute('data-section-name');
                currentVisibleSection.value = Number(numberSection);
            }
        });
    }, options);

    sections.forEach(section => {
        if (section.value) {
            observer?.observe(section.value.$el);
        }
    });
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
    sections = [];
});


seo.setPage({
    title: 'RSLabs | Home',
    ogImage: 'http://localhost:3000/OG/OG-Home.webp'
});
seo.status.value = 200;
</script>

<style lang="scss">

section {
  perspective: 50vh;
}

.section-anim {
  padding: em(16) em(48) em(80) em(48);
  justify-content: space-around
}

.container-anim {
  transform-style: flat;
  transition: all 0.2s $var-transition-timing;
}

.blur {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
}

@include tablet {
  .section-anim {
    padding: px(16) px(48) px(80) px(48);
    justify-content: space-around
  }
}

@include mobile {
  .section-anim {
    padding: px(16) px(16) px(80) px(16);
    justify-content: space-around
  }
}
</style>
