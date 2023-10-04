<template>
  <section class="height-100vh">
    <div class="container flex-column justify-space-between height-100prc">

      <div class="grid-12col-w mt-160">
        <figure class="home-s6-lines-w horizmobile-hide">
          <div class="s6-1-line-w">
            <div class="s6-1-line"
            ></div>
          </div>
          <div class="s6-2-line-w">
            <div class="s6-1-line"
            ></div>
          </div>
        </figure>

        <div class="s6-subtitle-w join-us-s3-subtitle-w">

          <p class="mono-s">
            Revenue share technology in practice
          </p>
        </div>

        <div class="join-us-s3-h2-w"> 
          <h2 class="h2">
            Products we have built
        </h2>
      </div>
      </div>

      <div class="grid-12col-w mt-80">

        <div class="join-us-s3-card">
          <figure class="join-us-s3-card-logo-w">
            <USvgIcon name="cardslogo.cardLogo-12Swap" />
          </figure>
          <div>
            <div class="w-1col-8gap mt-86">
              <h3 class="h3">12 Swap</h3>
              <p class="body-m">All-in-one dex and bridges aggregator.</p>
            </div>
            <UButtonSmallArrow  :class="'mt-40'"
                                :title="'Learn more'" />
          </div>
        </div>

        <div class="join-us-s3-card">
          <figure class="join-us-s3-card-logo-w">
            <USvgIcon name="cardslogo.cardLogo-Farm" />
          </figure>
          <div>
            <div class="w-1col-8gap mt-86">
              <h3 class="h3">What to farm</h3>
              <p class="body-m">Start with basics and learn about properties</p>
            </div>
            <UButtonSmallArrow  :class="'mt-40'"
                                :title="'Learn more'" />
          </div>
        </div>

        <div class="join-us-s3-card">
          <figure class="join-us-s3-card-logo-w">
            <USvgIcon name="cardslogo.cardLogo-Deals" />
          </figure>
          <div>
            <div class="w-1col-8gap mt-86">
              <h3 class="h3">The.Deals</h3>
              <p class="body-m">Start with basics and learn about properties</p>
            </div>
            <UButtonSmallArrow  :class="'mt-40'"
                                :title="'Learn more'" />
          </div>
        </div>

        <div class="join-us-s3-card">
          <figure class="join-us-s3-card-logo-w">
            <USvgIcon name="cardslogo.cardLogo-Revenly" />
          </figure>
          <div>
            <div class="w-1col-8gap mt-86">
              <h3 class="h3">Revenly</h3>
              <p class="body-m">Start with basics and learn about properties</p>
            </div>
            <UButtonSmallArrow  :class="'mt-40'"
                                :title="'Learn more'" />
          </div>
        </div>

        <div class="join-us-s3-card">
          <figure>
          </figure>
          <div>
            <div class="w-1col-8gap mt-86">
              <h3 class="h3">Next project</h3>
              <p class="body-m">You can be a part of our next project!</p>
            </div>
            <UButtonSmallArrow  :class="'mt-40'"
                                :title="'Learn more'" />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import USvgIcon from '@components//USvgIcon/USvgIcon.vue';
import UButtonSmallArrow from '@components/UButtonSmallArrow.vue';

</script>

<style lang="scss">

.join-us-s3-subtitle-w{
  grid-column: span 1;
}

.join-us-s3-h2-w{
  grid-column-start: 4;
  grid-column-end: 12;
}

.join-us-s3-card{
  padding: em(24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $c-primary-75;
  border: em(1) solid $c-primary-75;
}

.join-us-s3-card-logo-w{
  width: em(80);
  height: em(80);
  color: $c-primary-accent;
  background-color: $c-primary-50;
}

.grid-12col-w {

  .join-us-s3-card {
    &:first-child {
      grid-column-start: 4;
      grid-column-end: 13;
      margin-bottom: em(-8);
    }

    &:nth-child(2) {
      grid-column: span 3;
    }

    &:nth-child(3) {
      grid-column: span 3;
    }

    &:nth-child(4) {
      grid-column: span 3;
    }

    &:last-child {
      grid-column: span 3;
      background-color: $c-gray-00;
      border-color: $c-primary-accent;
    }
  }
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
