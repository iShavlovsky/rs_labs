<template>
  <div class="dd-accordion-w">
    <div class="grid-12col-w">
      <div class="dd-title-w">
        <p class="mono-s">
          01
        </p>
        <h3 class="h3">
          Big tech
        </h3>
      </div>

      <div class="dd-text-w">
        <p class="body-l">
          Apple AppleAppleApp leAppleAppleapplies revenue-sharing principles in its App Store, with
          developers sharing a percentage of their app earnings, typically at a 30% commission
          rate.
        </p>
      </div>

      <div class="dd-text-w dd-second-text">
        <p class="body-m">
          This arrangement benefits both parties, enabling developers to access a
          broad user base while Apple generates revenue from the platform.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.dd-accordion-w {
  padding: em(24) em(0) em(24) em(0);
  border-bottom: em(1) solid $c-gray-20;
}

.dd-title-w {
  display: flex;
  flex-direction: row;
  align-self: last baseline;
  gap: em(8);
  grid-column: span 3;
}

.dd-text-w {
  grid-column: span 3;
  overflow: hidden;
}

.dd-second-text {
  color: $c-gray-70;
  grid-column-start: 8;
  grid-column-end: 10;
  align-self: last baseline;
}
</style>
