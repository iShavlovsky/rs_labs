<template>
  <HomeSection1 :ref="sections[0]"
                data-section-name="0"
  />
  <HomeSection2 :ref="sections[1]"
                data-section-name="1"
  />
  <HomeSection3 :ref="sections[2]"
                data-section-name="2"
  />
  <HomeSection4 :ref="sections[3]"
                data-section-name="3"
  />
  <HomeSection5 :ref="sections[4]"
                data-section-name="4"
  />
  <HomeSection6 :ref="sections[5]"
                data-section-name="5"
  />
  <KnowledgeBaseSection :ref="sections[6]"
                        data-section-name="6"
  />
  <BackedBy />
  <JoinUs :ref="sections[7]"
          data-section-name="7"
  />

  <UMapSideBar :current-section="currentVisibleSection"
               @map-position="handleScrollToBlock"
  />
</template>

<script lang="ts" setup>
import { ComponentPublicInstance, onMounted, onUnmounted, Ref, ref } from 'vue';
import HomeSection1 from '@/components/HomeSection1.vue';
import HomeSection2 from '@/components/HomeSection2.vue';
import HomeSection3 from '@/components/HomeSection3.vue';
import HomeSection4 from '@/components/HomeSection4.vue';
import HomeSection5 from '@/components/HomeSection5.vue';
import HomeSection6 from '@/components/HomeSection6.vue';
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection.vue';
import BackedBy from '@/components/BackedBy.vue';
import UMapSideBar from '@/components/UMapSideBar/UMapSideBar.vue';
import JoinUs from '@/components/JoinUs.vue';
import useStore from '@/composables/useStore';
import useGsap from '@/composables/useGsap';

const { seo } = useStore();

const { timeLine, gsap, ctx } = useGsap();
const currentVisibleSection = ref<number>(0);
let sections: Array<Ref<ComponentPublicInstance | null>> = Array(8).fill(null).map(() => ref(null));
let observer: IntersectionObserver | null = null;

const handleScrollToBlock = (chapter: number) => {
    const time: number = 0.50;

    const currentSection = sections[currentVisibleSection.value].value?.$el;
    const nextSection = sections[chapter - 1].value?.$el;
    ctx?.add(() => {
        timeLine?.to(currentSection, {
            duration: time,
            opacity: .1,
            x: `${-100}%`,
            ease: 'Power0.easeIn',
            onComplete: () => {
                gsap?.fromTo(nextSection,
                    {
                        duration: 0,
                        opacity: .1,
                        x: `${100}%`,
                        ease: 'Power0.easeIn'
                    },
                    {
                        duration: time,
                        opacity: 1,
                        x: `${0}%`,
                        ease: 'Power0.easeIn'
                    }
                );
                if (nextSection) nextSection.scrollIntoView();
            }
        });
        timeLine?.to(currentSection, {
            duration: 0,
            opacity: 1,
            x: '0%',
            ease: 'Power0.easeIn'
        });
    });
};


onMounted(() => {
    const options = {
        root: null,
        rootMargin: '0px 0px 0px 0px', // Отрицательный отступ сверху на 10%
        threshold: 0.69
    };

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
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
</style>
