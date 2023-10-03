<template>
  <section class="height-100vh">
    <div class="container flex-column justify-space-between height-100prc">
      <div class="grid-12col-w">
        <div class="mission-s3-header-w">
          <h2 class="h1">
            Work ethics
          </h2>
        </div>

        <div class="mission-s3-span-1">
          <p class="body-l">
            We are driven to do our best to achieve the success and sustainable growth of the
            revenue share ecosystem. We are committed to principles of transparency, collaboration,
            fairness, and user empowerment.
          </p>
        </div>
      </div>


      <div class="grid-12col-w mt-80">
        <div class="w-2col-8gap mission-s3-card">
          <h3 class="mono-l">
            Transparency
          </h3>
          <p class="body-m t-gray-70">
            We prioritise open communication and provide full access to
            information to all participants.
          </p>
        </div>

        <div class="w-2col-8gap mission-s3-card mt-80">
          <h3 class="mono-l">
            Collaboration
          </h3>
          <p class="body-m t-gray-70">
            We foster a culture of collaboration, encouraging the
            community to contribute to the development of revenue share technology.
          </p>
        </div>

        <div class="w-2col-8gap mission-s3-card mt-80">
          <h3 class="mono-l">
            Fairness
          </h3>
          <p class="body-m t-gray-70">
            We ensure a fair distribution of generated revenue, valuing
            any contribution and involving the community in decision-making.
          </p>
        </div>

        <div class="w-2col-8gap mission-s3-card mt-80">
          <h3 class="mono-l">
            User empowerment
          </h3>
          <p class="body-m t-gray-70">
            Revenue share technology built by RS Labs is compatible with
            the blockchain products on the market. No need to alter beloved user interfaces; magic
            goes under the hood.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


</script>

<style lang="scss">

.mission-s3-header-w {
  grid-column: span 8;
}

.mission-s3-span-1 {
  grid-column-start: 4;
  grid-column-end: 8;
}

.mission-s3-card {
  grid-column-start: 4;
  grid-column-end: 10;
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
