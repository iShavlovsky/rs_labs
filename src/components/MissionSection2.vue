<template>
  <section class="height-100vh">
    <div class="container flex-column justify-space-between height-100prc">
      <div class="max-width-1061">
        <h2 class="h2 h2-indent">
          Build a revenue share economy and accelerate its&nbsp;adoption on web3 and beyond
        </h2>
      </div>

      <div>
        <div class="grid-12col-w mt-80">

          <div class="misiion-s2-card1-w">
            <div class="w-1col-16gap">
              <h3 class="mono-l">Adoption</h3>
              <p class="body-m t-gray-70">
                We are creating technology for businesses and real—world use cases. The model is beneficial for everybody
              </p>
            </div>
          </div>

          <div class="misiion-s2-card2-w">
            <div class="w-1col-16gap">
              <h3 class="mono-l">Revenue share</h3>
              <p class="body-m t-gray-70">
                RS contracts are civilized contract that regulates the relationship between people and allows everyone to earn money together.            </p>
            </div>
          </div>

          <div class="misiion-s2-card3-w mt-24">
            <div class="w-1col-16gap">
              <h3 class="mono-l">Visionary</h3>
              <p class="body-m t-gray-70">
                We are ambitious people with a robust result-first mindset and obsession to make web3 a domain of honesty and fairness.            </p>
            </div>
          </div>

        </div>

        <div class="grid-12col-w mt-80">
          <figure class="home-s6-lines-w s2-missions-first-linse-w">
            <div class="mission-s2-rotate-90">
              <p class="mono-s">Mission</p>
            </div>
            <figure class="s6-1-line"></figure>
            <figure class="s6-2-line"></figure>
          </figure>

          <div class="s6-subtitle-w">
            <p class="mono-s">
              RSC Labs are dedicated to building technological infrastructure to implement revenue share economics in practice.
            </p>
          </div>

          <figure class="home-s6-lines-w s2-missions-second-linse-w">
            <figure class="s6-1-line horizmobile-hide"></figure>
            <figure class="s6-3-line"></figure>
            <figure class="s6-4-line"></figure>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


</script>

<style lang="scss">
.misiion-s2-card1-w{
  grid-column-start: 4;
  grid-column-end: 6;
}

.misiion-s2-card2-w{
  grid-column-start: 6;
  grid-column-end: 10;
}

.misiion-s2-card3-w{
  grid-column-start: 4;
  grid-column-end: 6;
}

.s2-missions-first-linse-w{
  grid-column: span 3;
}

.s2-missions-second-linse-w{
  grid-column: span 7;
}
.mission-s2-rotate-90{
  transform: rotate(90deg);
  padding-right: em(5);
  padding-top: em(10);
  margin-left: em(-35);
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
