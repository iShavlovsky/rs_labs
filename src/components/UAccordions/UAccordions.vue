<template>
  <div ref="initial"
       :data-is-on-server-opened="props.initialOpenIndex"
  >
    <article v-for="(item, index) in props.arr"
             :key="index"
             ref="items"
             class="dd-accordion-w"
             @click="open(index)"
    >
      <div class="grid-12col-w">
        <div class="dd-title-w">
          <p class="mono-s">
            0{{ index + 1 }}
          </p>
          <h3 class="h3">
            {{ item.title }}
          </h3>
        </div>

        <div :class="['dd-text-w', { 'open': activeIndex === index }]">
          <p class="body-l">
            {{ item.text1 }}
          </p>
        </div>

        <div :class="['dd-text-w dd-second-text', { 'open': activeIndex === index }]">
          <p class="body-m">
            {{ item.text2 }}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type { AccordionProps } from '@components/UAccordions/UAccordions.types';

const props = defineProps<AccordionProps>();
const initial = ref<HTMLDetailsElement>();
// const items = ref<HTMLDetailsElement[]>([]);
const isOnServerOpened = ref<string | undefined>(undefined);
const activeIndex = ref<number | null>(null);
const open = (i: number) => {
    if (i === activeIndex.value && isOnServerOpened.value === undefined) {
        activeIndex.value = null;
    } else {
        activeIndex.value = i;
    }
};

onMounted(() => {
    isOnServerOpened.value = initial.value?.dataset?.isOnServerOpened;
    if (isOnServerOpened.value) {
        activeIndex.value = Number(isOnServerOpened.value);
    }

});
</script>

<style lang="scss">
.dd-accordion-w {
  padding: em(24) em(0) em(24) em(0);
  border-bottom-style: solid;
  border-bottom-width: em(1);
  border-bottom-color: $c-gray-20;
  cursor: pointer;
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
  height: 0;
  opacity: 0;
}

.dd-text-w {
  transition: opacity 0.35s $var-transition-timing,
  height 0.37s $var-transition-timing;

  &.open {
    height: auto;
    opacity: 1;
  }
}

.dd-second-text {
  color: $c-gray-70;
  grid-column-start: 8;
  grid-column-end: 10;
  align-self: last baseline;
}
</style>
