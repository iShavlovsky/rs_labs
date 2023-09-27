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
  <MainFooter :ref="sections[7]"
              data-section-name="7"
  />
  <UMapSideBar :current-section="currentVisibleSection"
               @map-position="handleScrollToBlock"
  />
</template>

<script lang="ts" setup>
import HomeSection1 from '@components/HomeSection1.vue';
import HomeSection2 from '@components/HomeSection2.vue';
import HomeSection3 from '@components/HomeSection3.vue';
import HomeSection4 from '@components/HomeSection4.vue';
import HomeSection5 from '@components/HomeSection5.vue';
import HomeSection6 from '@components/HomeSection6.vue';
import KnowledgeBaseSection from '@components/KnowledgeBaseSection.vue';
import BackedBy from '@components/BackedBy.vue';
import MainFooter from '@components/MainFooter.vue';
import UMapSideBar from '@components/UMapSideBar/UMapSideBar.vue';
import useStore from '@composables/useStore';
import { ComponentPublicInstance, onMounted, onUnmounted, Ref, ref } from 'vue';

const currentVisibleSection = ref<number>(0);
let sections: Array<Ref<ComponentPublicInstance | null>> = Array(8).fill(null).map(() => ref(null));
let observer: IntersectionObserver | null = null;
const scrollToSection = (sectionRef: Ref<ComponentPublicInstance | null>) => {
    if (sectionRef.value) {
    // sectionRef.value.$el.scrollIntoView({ behavior: 'smooth' });
        sectionRef.value.$el.scrollIntoView();
    }
};

const handleScrollToBlock = (chapter: number) => {
    scrollToSection(sections[chapter - 1]);
};

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '0px',
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

const { seo } = useStore();
seo.setPage({
    title: 'RSLabs | Home',
    ogImage: 'http://localhost:3000/OG/OG-Home.webp'
});
seo.status.value = 200;
</script>

<style lang="scss">

</style>
