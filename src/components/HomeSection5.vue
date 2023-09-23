<template>
  <section>
    <div class="container">
      <div class="grid-12col-w">
        <div class="home-s5-span-1">
          <h2 class="h2 h2-indent">
            Revenue share is nota new concept— big names adopt it
          </h2>
        </div>

        <div class="home-s5-span-2">
          <UAccordions :arr="accordions"
                       :initial-open-index="0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UAccordions from '@components/UAccordions/UAccordions.vue';
import { AccordionItem } from '@components/UAccordions/UAccordions.types';

const accordions: AccordionItem[] = [
    {
        title: 'Big tech',
        text1: 'Apple applies revenue-sharing principles in its App Store, with developers sharing a percentage of their app earnings, typically at a 30% commission rate.',
        text2: 'This arrangement benefits both parties, enabling developers to access a broad user base while Apple generates revenue from the platform.'
    },
    {
        title: 'Game dev',
        text1: 'Apple applies revenue-sharing principles in its App Store, with developers sharing a percentage of their app earnings, typically at a 30% commission rate.',
        text2: 'This arrangement benefits both parties, enabling developers to access a broad user base while Apple generates revenue from the platform.'
    },
    {
        title: 'Music industry',
        text1: 'Apple applies revenue-sharing principles in its App Store, with developers sharing a percentage of their app earnings, typically at a 30% commission rate.',
        text2: 'This arrangement benefits both parties, enabling developers to access a broad user base while Apple generates revenue from the platform.'
    }
];
</script>

<style lang="scss">
.home-s5-span-1 {
  grid-column: span 9;
}

.home-s5-span-2 {
  grid-column: span 12;
}
</style>
