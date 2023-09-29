<template>
  <section class="section-home-head height-100vh">
    <div class="container flex-column justify-space-between height-100prc">
      <div class="grid-12col-w">
        <div class="home-s1-span-1">
          <p class="mono-m">
            Revenue share contracts labs
          </p>
        </div>
        <div class="home-s1-span-2">
          <h1 class="h2">
            We build future of web3 economy
          </h1>
        </div>

        <div class="home-s1-span-3">
          <p class="mono-m">
            We are scaling blockchain ecosystem based on revenue share
            principles.
          </p>
        </div>
      </div>

      <div class="grid-12col-w">
        <div class="home-s1-span-4">
          <p class="mono-s">
            click on arrows or use map to explore the journey
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

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

/* ----------------------- tablet ------------------------------ */
@include tablet {
  .section-home-head {
    padding-top: px(88);
  }

  .home-s1-span-1 {
    max-width: px(150);
    grid-column: span 2;
    align-self: last baseline;
  }

  .home-s1-span-2 {
    max-width: px(440);
    grid-column-start: 3;
    grid-column-end: 9;
  }

  .home-s1-span-3 {
    max-width: px(210);
    grid-column-start: 3;
    grid-column-end: 6;
  }

  .home-s1-span-4 {
    grid-column: span 4;
    grid-column-start: 1;
    grid-column-end: 5;
    padding: px(24) px(82) px(328) em(0);
  }

}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {

}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
