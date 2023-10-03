<template>
  <JoinSection1 />
  <JoinSection2 />
</template>

<script lang="ts" setup>
import JoinSection1 from '@/components/JoinSection1.vue';
import JoinSection2 from '@/components/JoinSection2.vue';
import useStore from '@composables/useStore';

const { seo } = useStore();


seo.setPage({
    title: 'RSLabs | Join Us',
    ogImage: 'http://localhost:3000/OG/OG-JoinUs.webp'

});
seo.status.value = 200;
</script>

<style lang="scss" scoped>

</style>
