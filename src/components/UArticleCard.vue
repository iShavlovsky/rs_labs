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
      <img :alt="imageAlt"
           :src="imageSrc"
           class="articles-card-img"
      >
    </figure>
  </RouterLink>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { RouteNamesEnum } from '@router/router.types';

const props = defineProps<{
    articleSlug: string;
    articleType: string;
    articleDate: string | Date;
    articleTitle: string;
    imageSrc: string;
    imageAlt: string;
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
