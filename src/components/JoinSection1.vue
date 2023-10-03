<template>
  <section class="section-head height-100vh">
    <div class="container flex-column justify-space-between height-100prc">
      <div></div>

      <div class="grid-12col-w">

        <div class="join-s1-span-1">
          <h1 class="h1 h1-indent">
            Shape the future of web3 with RSC Labs
          </h1>
        </div>

        <div class="join-s1-span-2">
          <p class="mono-m">
            Become a part of a visionary lab and build a revenue share economy with us.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.join-s1-span-1 {
  grid-column: span 10;
}

.join-s1-span-2 {
  grid-column-start: 4;
  grid-column-end: 6;
}

/* ----------------------- tablet ------------------------------ */
@include tablet {


}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {

}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
