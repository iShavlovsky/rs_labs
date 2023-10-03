<template>
  <section class="section-head height-100vh">
    <div class="container flex-column justify-space-between height-100prc">
      <div class="grid-12col-w">
        <div class="mission-s1-span-1">
          <p class="mono-m">
            We are building a new Internet economy that needs a different financial solution.
          </p>
        </div>
      </div>

      <div class="grid-12col-w">
        <div class="mission-s1-span-2">
          <h1 class="h1 h1-indent">
            Revenue share is the solution
          </h1>
        </div>

        <div class="mission-s1-span-3">
          <p class="mono-m">
            We aim to create relationships between people and companies for the new economy.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.mission-s1-span-1 {
  grid-column-start: 4;
  grid-column-end: 6;
}

.mission-s1-span-2 {
  grid-column: span 7;
}

.mission-s1-span-3 {
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
