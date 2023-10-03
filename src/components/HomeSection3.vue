<template>
  <section>
    <div class="container">
      <div class="grid-12col-w">
        <div class="home-s3-span-1">
          <figure class="home-s3-img1-w">
            <img alt="decorative"
                 class="home-s3-img1"
                 src="../assets/images/webp/interior6.webp"
            >
          </figure>
          <div class="max-width-330 mt-16">
            <p class="mono-s">
              revenue share labs build web3 products using innovating revenue share technology.
            </p>
          </div>
        </div>

        <div class="home-s3-span-2">
          <h2 class="h2">
            Meet revenue share labs
          </h2>

          <div class="w-1col-16gap">
            <p class="body-l">
              The lab is dedicated to build a technological infrastructure to
              implement revenue share economics in practice.
            </p>
            <p class="body-m">
              Our team consists of both technical specialists and
              visionary individuals promoting the ideas of revenue share.
            </p>
          </div>
        </div>

        <div class="home-s3-span-3">
          <div class="home-s3-img2-w">
            <img alt="decorative"
                 class="home-s3-img2"
                 src="../assets/images/webp/interior6.webp"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


</script>

<style lang="scss">
.home-s3-img2-w {
  min-height: em(269);
  display: flex;

}

.home-s3-img1-w {
  min-height: em(596);
  display: flex;
}

.home-s3-img1 {
  object-fit: cover;
}

.home-s3-span-1 {
  grid-column: span 5;
}

.home-s3-span-2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column-start: 7;
  grid-column-end: 10;
  align-self: stretch;
}

.home-s3-span-3 {
  grid-column-start: 11;
  grid-column-end: 13;
}

/* ----------------------- tablet ------------------------------ */
@include tablet {

  .home-s3-span-1 {
    margin-top: px(-56);
    grid-column: span 2;
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 2;
  }

  .home-s3-span-2 {
    gap: px(80);
    grid-column-start: 3;
    grid-column-end: 7;
  }

  .home-s3-span-3 {
    margin-top: px(64);
    grid-column: span 5;
    grid-row-start: 2;
  }

  .home-s3-img1-w {
    height: px(193);
    min-height: 30vh;
  }

}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {
  .home-s3-span-1 {
    margin-top: px(8);
    grid-column: span 2;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 2;
  }

  .home-s3-span-2 {
    gap: px(80);
    grid-column-start: 2;
    grid-column-end: 6;
  }

  .home-s3-span-3 {
    display: none;
  }

  .home-s3-img1-w {
    height: px(193);
    min-height: 30vh;
    width: 50%;
  }
}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
