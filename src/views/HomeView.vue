<template>
  <HomeSection1 />
  <HomeSection2 />
  <HomeSection3 />
  <HomeSection4 />
  <HomeSection5 />

  <UMapSideBar @map-position="handleScrollToBlock" />
</template>

<script lang="ts" setup>
import HomeSection1 from '@components/HomeSection1.vue';
import HomeSection2 from '@components/HomeSection2.vue';
import HomeSection3 from '@components/HomeSection3.vue';
import HomeSection4 from '@components/HomeSection4.vue';
import HomeSection5 from '@components/HomeSection5.vue';
import UMapSideBar from '@components/UMapSideBar.vue';
import useStore from '@composables/useStore';


const handleScrollToBlock = (position: string) => {
    console.log(position);
    // s5.value!.scrollIntoView({ behavior: 'smooth' });
};

const { seo } = useStore();
seo.setPage({ description: 'good' });
seo.status.value = 200;
</script>

<style lang="scss">

</style>
