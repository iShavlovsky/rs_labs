<template>
  <section>
    <div class="container">
      <div class="grid-12col-w">

        <div class="joinus-header-w">
          <div class="joinus-h2-w">
            <h2 class="mono-m">Join us</h2>
          </div>
          <p class="h1 h1-indent">Join the team of visionaries to build revenue share  economy   </p>
        </div>

        <div class="joinus-btn-w mt-90 w-1col-40gap">
          <div class="max-width-217">
            <p class="mono-l">We are constantly looking for talents who push the boundaries</p>
          </div>
          <UButtonMain title="Join us"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UButtonMain from './UButtonMain.vue';


</script>

<style lang="scss">
.joinus-header-w{
  position: relative;
  max-width: em(1119);
  grid-column: span 10;
}
.joinus-h2-w{
  position: absolute;
  left: 0%;
}

.joinus-btn-w{
  grid-column: span 3;
  grid-column-start: 4;
  grid-column-end: 7;
}
</style>

