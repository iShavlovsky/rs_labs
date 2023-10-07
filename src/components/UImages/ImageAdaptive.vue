<template>
  <img :alt="imageAlt"
       :sizes="sizes"
       :src="imageSrc"
       :srcset="imageSrcset"
       :style="aspectRatio"
  >
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    imageSrc: string;
    imageAlt?: 'decorative';
    imageSizes?: string;
    imageSrcset?: string;
    imageWidth?: number;
    imageHeight?: number;
}>();

const aspectRatio = computed(() => (
    { 'aspect-ratio': `${props.imageWidth} / ${props.imageHeight}` }
));
const sizes = computed(() => {
    const sizesDefault = '(max-width: 479px) 200px, (max-width: 767px) 600px, (max-width: 991px) 800px, 1200px';
    return props.imageSizes ?? sizesDefault;
});
</script>
<!--<img src="cat.jpg" alt="cat"-->
<!--     srcset="cat-160.jpg 160w, cat-320.jpg 320w, cat-640.jpg 640w, cat-1280.jpg 1280w"-->
<!--     sizes="(max-width: 480px) 100vw, (max-width: 900px) 33vw, 254px">-->
