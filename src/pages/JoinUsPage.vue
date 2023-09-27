<template>
  <section>
    <div class="container">
      <div class="grid-12col-w">
        <div class="home-s1-span-2">
          <h1 class="h2">
            Join Us
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
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
