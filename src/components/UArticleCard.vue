<template>
  <RouterLink :to="{
                name: RouteNamesEnum.article,
                params: { slug: props.articleSlug },
              }"
              class="article-card-w w-1col-16gap"
  >
    <div class="article-type-and-date-w">
      <p class="mono-s">
        {{ articleType }}
      </p>
      <p class="mono-s">
        {{ formattedDate }}
      </p>
    </div>

    <div class="article-card-subtitle-w">
      <p class="body-m">
        {{ articleTitle }}
      </p>
    </div>

    <figure class="articles-card-img-w">
      <ImageAdaptive :image-alt="imageAttributes.url"
                     :image-height="imageAttributes.height"
                     :image-src="`http://localhost:1337${imageAttributes.alternativeText}`"
                     :image-srcset="srcsetImages"
                     :image-width="imageAttributes.width"
                     class="articles-card-img"
                     image-sizes="(max-width: 479px) 200px, (max-width: 767px) 600px, (max-width: 991px) 800px, 1200px"
      />
    </figure>
  </RouterLink>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { RouteNamesEnum } from '@router/router.types';
import ImageAdaptive from '@components/UImages/ImageAdaptive.vue';

const props = defineProps<{
    articleSlug: string;
    articleType: string;
    articleDate: string | Date;
    articleTitle: string;
    imageAttributes: Media['attributes'];
}>();

const formattedDate = computed(() => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const date = new Date(props.articleDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];

    return `${day} ${month}`;
});

const srcsetImages = computed(() => {
    const { large, medium, small, thumbnail } = props.imageAttributes.formats;
    return `http://localhost:1337${large.url} 1200w,
    http://localhost:1337${medium.url} 800w,
    http://localhost:1337${small.url} 600w,
    http://localhost:1337${thumbnail.url} 200w`;
});

</script>

<style lang="scss">
.article-type-and-date-w {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: $c-gray-70;
  padding-right: em(24);
}

.article-card-subtitle-w {
  height: em(66);
  max-width: em(306);
}

.articles-card-img-w {
  height: em(220);
  margin-top: em(10);
  background-color: black;

  .articles-card-img {
    object-fit: cover;
  }
}

/* ----------------------- tablet ------------------------------ */
@include tablet {
  .articles-card-img-w {
    height: px(220);
    margin-top: px(24);
  }

  .article-card-subtitle-w {
    height: px(66);
    max-width: none;
    padding-right: px(24);
  }

  .article-type-and-date-w {
    padding-right: px(24);
  }
}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {

}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
