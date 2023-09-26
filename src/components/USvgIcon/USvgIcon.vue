<template>
  <component :is="icon!"
             class="fill-current"
  />
</template>
<script lang="ts" setup>
/// <reference types="vite-svg-loader" />
import { defineAsyncComponent, DefineComponent, shallowRef, watchEffect } from 'vue';
import type { IconNames } from '@components/USvgIcon/USvgIkon.types';

const props = defineProps({
    name: {
        type: String as () => IconNames,
        required: true
    }
});

const iconList = import.meta.glob('@assets/images/svg/*.svg');

const icon = shallowRef<DefineComponent | null>(null);
watchEffect(() => {
    if (iconList[`/src/assets/images/svg/${props.name}.svg`]) {
        icon.value = defineAsyncComponent(() =>
            iconList[`/src/assets/images/svg/${props.name}.svg`]
            () as Promise<DefineComponent>
        );
    }
});
</script>

