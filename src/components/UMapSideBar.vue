<template>
<div class="map-side-bar">
  <div class="chapters-and-block-name-w">
    <div class="map-chapters-w">
      <p class="mono-s">Chapter 1</p>
      <p class="mono-s">Revenue Share Labs</p>
    </div>
    <div class="block-names-w">
      <p class="mono-s">mission</p>
      <p class="mono-s">mission</p>
      <p class="mono-s">mission</p>
      <p class="mono-s">mission</p>
    </div>
  </div>

  <div class="map-grid">
    <a class="map-pointer current"></a>
    <div></div>
    <div></div>
    <a class="map-pointer"></a>
    <a class="map-pointer"></a>
    <a class="map-pointer"></a>
    <div></div>
    <a class="map-pointer"></a>
    <a class="map-pointer"></a>
    <div></div>
    <a class="map-pointer"></a>
    <div></div>
    <div></div>
    <a class="map-pointer"></a>
    <div></div>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.map-side-bar {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: em(40);
  left: auto;
  top: auto;
  width: em(153);
  right: 0%;
  bottom: em(94);
}
.chapters-and-block-name-w{
  display: flex;
  flex-direction: column;
  gap: em(16);
}
.block-names-w{
  max-height: em(42);
  overflow: hidden;
}
.map-grid {
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: em(17) em(17) em(17);
  grid-template-rows: auto auto;
}

.map-pointer{
  width: em(17);
  height: em(17);
  background-image: url("@/assets/images/svg/map-point.svg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.current{
  background-image: url("@/assets/images/svg/map-current-point.svg");
}

</style>