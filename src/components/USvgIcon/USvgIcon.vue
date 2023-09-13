<template>
  <component :is="Icon!"
             class="fill-current"
  />
</template>
<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import { shallowRef, defineAsyncComponent, DefineComponent, watchEffect } from "vue";
import type { IconNames } from "@components/USvgIcon/USvgIkon.types";
const props = defineProps({
  name: {
    type: String as () => IconNames,
    required: true
  }
});

const iconList = import.meta.glob(`@assets/images/svg/*.svg`);
const Icon = shallowRef<DefineComponent | null>(null);
watchEffect(() => {
  if (iconList[`/src/assets/images/svg/${props.name}.svg`]) {
    Icon.value = defineAsyncComponent(() =>
        iconList[`/src/assets/images/svg/${props.name}.svg`]
        () as Promise<DefineComponent>
    );
  }
});
</script>

