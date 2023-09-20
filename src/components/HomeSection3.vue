<template>
  <section>
    <div class="container">

      <div class="grid-12col-w">

        <div class="home-s3-span-1">
          <figure class="home-s3-img1-w">
            <img/>
          </figure>
          <div class="max-width-330">
            <p class="mono-s">revenue share labs build web3 products using innovating revenue share technology.</p>
          </div>
        </div>

        <div class="home-s3-span-2">
          <h2 class="h2">Meet  revenue share labs</h2>

          <div class="w-1col-15gap">
            <p class="body-l">
              The lab is dedicated to build a technological infrastructure to 
              implement revenue share economics in practice.
            </p>
            <p class="body-m">
              Our team consists of both technical specialists and 
              visionary individuals promoting the ideas of revenue share.
            </p>
          </div>

        </div>

        <div class="home-s3-span-3">
          <figure class="home-s3-img2-w">
            <img/>
          </figure>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">



</script>

<style lang="scss">
.home-s3-img2-w{
  min-height: em(269);
}
.home-s3-img1-w{
  min-height: em(596);
}
.home-s3-span-1{
	grid-column: span 5;
}

.home-s3-span-2{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column-start: 7;
  grid-column-end: 10;
  align-self: stretch;
}

.home-s3-span-3{
  grid-column-start: 11;
  grid-column-end: 13;
}
</style>
