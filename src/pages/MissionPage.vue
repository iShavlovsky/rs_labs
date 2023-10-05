<template>
  <MissionSection1 />
  <MissionSection2 />
  <MissionSection3 />
  <MissionSection4 />
  <BackedBy />
  <JoinUs />
</template>

<script lang="ts" setup>

import MissionSection1 from '@/components/MissionSection1.vue';
import MissionSection2 from '@/components/MissionSection2.vue';
import MissionSection3 from '@/components/MissionSection3.vue';
import MissionSection4 from '@/components/MissionSection4.vue';
import BackedBy from '@/components/BackedBy.vue';
import JoinUs from '@/components/JoinUs.vue';
import useStore from '@/composables/useStore';

const { seo } = useStore();


seo.setPage({
    title: 'RSLabs | Mission',
    ogImage: 'http://localhost:3000/OG/OG-Mission.webp'
});
seo.status.value = 200;
</script>

<style lang="scss" scoped>

</style>
