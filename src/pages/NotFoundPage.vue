<template>
  <section>
    <div class="container">
      <div class="grid-12col-w">
        <div class="home-s1-span-2">
          <h1 class="h2">
            404
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
    title: 'RSLabs | 404'
});
seo.status.value = 404;
</script>

<style lang="scss">

</style>
