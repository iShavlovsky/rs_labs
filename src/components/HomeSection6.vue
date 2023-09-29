<template>
  <section class="height-100vh">
    <div class="container flex-column height-100prc">
      <div class="home-s6-disclaimer-w flex-column justify-center">
        <p class="disclaimer align-justify">
          You are leaving the world of unfair distribution. fair economic could
          cause an addiction. consult your inner mind and make a wise choice.
        </p>
      </div>

      <div class="grid-12col-w mt-160">
        <figure class="home-s6-lines-w">
          <figure class="s6-1-line"></figure>
          <figure class="s6-2-line"></figure>
        </figure>

        <div class="s6-subtitle-w">
          <p class="mono-s">
            Revenue share labs was established in 2023 and build web3 products using innovating
            revenue share technology
          </p>
        </div>

        <figure class="home-s6-lines-w s6-second-linse-w">
          <figure class="s6-1-line"></figure>
          <figure class="s6-3-line"></figure>
          <figure class="s6-4-line"></figure>
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


</script>

<style lang="scss">
.s6-subtitle-w {
  grid-column: span 2;
}

.home-s6-disclaimer-w {
  color: #DAE9FF;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}

.home-s6-lines-w {
  display: flex;

}

.s6-1-line {
  width: 100%;
  height: em(1);
  background-color: $c-gray-100;
}

.s6-2-line {
  width: em(1);
  max-height: 100%;
  background-color: $c-gray-100;
  margin-top: em(4);
  margin-left: em(4);
}

.s6-second-linse-w {
  grid-column-start: 4;
  grid-column-end: 13;
}

.s6-3-line {
  width: em(1);
  max-height: 100%;
  background-color: $c-gray-100;
  margin-top: em(4);
  margin-left: em(4);
  margin-right: em(4);
}

.s6-4-line {
  width: em(105);
  height: em(1);
  background-color: $c-gray-100;
}

/* ----------------------- tablet ------------------------------ */
@include tablet {

  .s6-second-linse-w {
    grid-column-start: 4;
    grid-column-end: 9;
  }

  .s6-1-line {
    height: px(1);
  }

  .s6-2-line {
    width: px(1);
    margin-top: px(4);
    margin-left: px(4);
  }

  .s6-3-line {
    width: px(1);
    margin-top: px(4);
    margin-left: px(4);
    margin-right: px(4);
  }

  .s6-4-line {
    width: em(186);
    height: px(1);
  }

}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {

}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
