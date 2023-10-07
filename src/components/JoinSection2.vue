<template>
  <section class="height-100vh">
    <div class="container flex-column justify-space-between height-100prc">
      <div class="grid-12col-w">
        <div class="join-s2-span-1">
          <h2 class="h2 h2-indent">
            Become a part of a dedicated community
          </h2>
        </div>

        <div class="join-s2-span-2">
          <p class="body-l">
            Join our lab for a unique opportunity to become a frontrunner in the Web3 evolution.
          </p>
        </div>
      </div>

      <div>
        <div class="grid-12col-w mt-80">
          <div class="misiion-s2-card1-w">
            <div class="w-1col-16gap">
              <h3 class="mono-l">
                Innovation
              </h3>
              <p class="body-m t-gray-70">
                As a team, we are committed to pushing the boundaries of what is possible in the
                Web3 ecosystem, and your contributions will be integral to the success of the
                revenue share narrative.
              </p>
            </div>
          </div>

          <div class="misiion-s2-card2-w">
            <div class="w-1col-16gap">
              <h3 class="mono-l">
                Impactful Work
              </h3>
              <p class="body-m t-gray-70">
                By joining our team, you will be working on cutting-edge technologies and
                contributing to the development of a revenue share ecosystem that empowers
                individuals in the Web3 space. Your work will have a direct impact on reshaping the
                digital economy.
              </p>
            </div>
          </div>

          <div class="misiion-s2-card3-w mt-24">
            <div class="w-1col-16gap">
              <h3 class="mono-l">
                Collaborative Environment
              </h3>
              <p class="body-m t-gray-70">
                We foster a collaborative and inclusive work culture where ideas are shared, and
                everyone's contribution is valued. You will have the opportunity to collaborate with
                like-minded professionals who are passionate about the decentralized revenue share
                economy.
              </p>
            </div>
          </div>

          <figure class="join-s2-img-w">
            <img alt=""
                 src=""
            >
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


</script>

<style lang="scss">

.join-s2-span-1 {
  grid-column: span 8;
}

.join-s2-span-2 {
  grid-column-start: 4;
  grid-column-end: 8;
}

.join-s2-img-w {
  grid-column-start: 11;
  grid-column-end: 13;
}

.misiion-s2-card1-w {
  grid-column-start: 4;
  grid-column-end: 6;
}

.misiion-s2-card2-w {
  grid-column-start: 6;
  grid-column-end: 10;
}

.misiion-s2-card3-w {
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
