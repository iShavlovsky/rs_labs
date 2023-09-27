<template>
  <component :is="icon!"
             class="fill-current"
  />
</template>
<script lang="ts" setup>
/// <reference types="vite-svg-loader" />
import {
    computed,
    ComputedRef,
    defineAsyncComponent,
    DefineComponent,
    shallowRef,
    watchEffect
} from 'vue';
import { getByDotName, ValidKeys } from '@components/USvgIcon/USvgIkon.types';

const props = defineProps({
    name: {
        type: String as () => ValidKeys,
        required: true
    }
});
const { folder, name } = getByDotName(props.name);
const path: ComputedRef<string> = computed(() => {
    return (folder != 'svg') ? `${folder}/${name}` : `${name}`;
});

const iconList = import.meta.glob('@assets/images/svg/**/*.svg');


const icon = shallowRef<DefineComponent | null>(null);
watchEffect(() => {
    if (iconList[`/src/assets/images/svg/${path.value}.svg`]) {
        icon.value = defineAsyncComponent(() =>
            iconList[`/src/assets/images/svg/${path.value}.svg`]
            () as Promise<DefineComponent>
        );
    }
});
</script>

