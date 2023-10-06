<template>
  <picture>
    <source v-for="(source, i) in sources"
            :key="i"
            :media="source.media"
            :srcset="source.srcset"
            :type="mimeType"
    >
    <img :alt="imageAlt"
         :sizes="sizes"
         :src="imageSrc"
         :srcset="srcSet"
         :style="aspectRatio"
    >
  </picture>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    imageSrc: string;
    imageAlt?: 'decorative';
    imageSizes?: string;
    srcSet?: string;
    width?: number;
    height?: number;
    sources: Array<{
        srcset?: string,
        sizes: string,
        media: string
    }>;
}>();

const aspectRatio = computed(() => (
    { 'aspect-ratio': `${props.width} / ${props.height}` }
));

const mimeType = computed(() => {
    const ext = props.imageSrc.split('.').pop()?.toLowerCase();
    return ext === 'webp' ? 'image/webp' : `image/${ext}`;
});

const sizes = computed(() => {
    const sizesDefault = '(max-width: 479px) 200px, (max-width: 767px) 600px, (max-width: 991px) 800px, 1200px';
    return props.imageSizes ?? sizesDefault;
});

</script>

<!--<picture>-->
<!--<source srcset="homepage-person@desktop.png, homepage-person@desktop-2x.png 2x"-->
<!--        media="(min-width: 990px)">-->
<!--<source srcset="homepage-person@tablet.png, homepage-person@tablet-2x.png 2x"-->
<!--        media="(min-width: 750px)">-->
<!--<img srcset="homepage-person@mobile.png, homepage-person@mobile-2x.png 2x"-->
<!--     alt="Shopify Merchant, Corrine Anestopoulos">-->
<!--</picture>-->
