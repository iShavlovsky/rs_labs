<template>
  <section class="height-100vh">
    <div class="container flex-column justify-space-between height-100prc">
      <div class="grid-12col-w">
        <div class="home-s4-span-1">
          <h2 class="h1">
            Revenue share technology
          </h2>
        </div>

        <div class="home-s4-span-2">
          <p class="body-m">
            We are building economic relationships between companies
            and people based on revenue share principles using smart contracts.
          </p>
        </div>
      </div>

      <div class="grid-12col-w">
        <div class="home-s4-card">
          <div class="w-1col-8gap">
            <h3 class="h3">
              Revenue Share Contract
            </h3>
            <p class="body-m">
              Dive into technical specs of contract and embed into your app
            </p>
          </div>
          <UButtonMain :title="'Learn more'" />
        </div>

        <div class="home-s4-card">
          <div class="w-1col-8gap">
            <h3 class="h3">
              Revenue share Contract SDK
            </h3>
            <p class="body-m">
              Build your own revenue share mechanics with powerful SDK.
            </p>
          </div>
          <UButtonMain :title="'Learn more'"
                       class=" "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UButtonMain from '@components/UButtonMain.vue';
</script>

<style lang="scss">
.home-s4-span-1 {
  grid-column: span 6;
}

.home-s4-span-2 {
  grid-column-start: 11;
  grid-column-end: 13;
}

.home-s4-card {
  grid-column: span 6;
  height: em(330);
  padding: em(24);
  background-color: $c-primary-75;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* ----------------------- tablet ------------------------------ */
@include tablet {
  .home-s4-span-2 {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .home-s4-card {
    grid-column: span 4;
    height: px(320);
    padding: px(24);
  }

}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {

}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
