<template>
  <HomeSection1 />
  <HomeSection2 />
  <HomeSection3 />
  <HomeSection4 />
  <HomeSection5 />
  <HomeSection6 />
  <KnowledgeBaseSection />
  <BackedBy />

  <UMapSideBar @map-position="handleScrollToBlock" />
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

import UMapSideBar from '@components/UMapSideBar.vue';

const handleScrollToBlock = (position: string) => {
    console.log(position);
    // s5.value!.scrollIntoView({ behavior: 'smooth' });
};

// const { seo } = useStore();
// seo.setPage({ description: 'good' });
// seo.status.value = 200;
</script>

<style lang="scss">

</style>