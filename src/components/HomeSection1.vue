<template>
  <section class="section-home-head">
    <div class="container">
      <div class="grid-12col-w">
        <div class="home-s1-span-1">
          <p class="mono-m">
            Revenue share contracts labs
          </p>
        </div>

        <div class="home-s1-span-2">
          <h1 class="h2">
            We build future of web3 <br>economy
          </h1>
        </div>

        <div class="home-s1-span-3">
          <p class="mono-m">
            We are scaling blockchain ecosystem based on revenue share
            principles.
          </p>
        </div>

        <div class="home-s1-span-4">
          <p class="mono-s">
            click on arrows or use map to explore the journey
          </p>
        </div>
      </div>

      <div style="width: 40px;">
        <USvgIcon name="logoDeals" />
      </div>
      <p>HomeView</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import USvgIcon from '@components/USvgIcon/USvgIcon.vue';
</script>

<style lang="scss">
.section-home-head {
  padding-top: em(88);
  padding-bottom: em(0);
}

.home-s1-span-1 {
  grid-column: span 1;
}

.home-s1-span-2 {
  grid-column-start: 4;
  grid-column-end: 9;
}

.home-s1-span-3 {
  grid-column: span 2;
}

.home-s1-span-4 {
  grid-column: span 3;
  padding: em(24) em(113) em(328) em(0);
}
</style>
