<template>
  <section>
    <div class="container">

      <div class="grid-12col-w">

        <div class="home-s5-span-1">
          <h2 class="h2 h2-indent">Revenue share is nota new concept— big names adopt it</h2>
        </div>

        <div class="home-s5-span-2">
          <UAccordions />
          <UAccordions />
          <UAccordions />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UAccordions from "@components/UAccordions.vue";


</script>

<style lang="scss">
.home-s5-span-1{
	grid-column: span 9;
}

.home-s5-span-2{
  grid-column: span 12;
}

</style>
