<template>
  <div class="article-card-w w-1col-16gap">
    <div class="article-type-and-date-w">
      <p class="mono-s">
        {{ articleType }}
      </p>
      <p class="mono-s">
        {{ articleDate }}
      </p>
    </div>

    <div class="article-card-subtitle-w">
      <p class="body-m">
        {{ articleSubtitle }}
      </p>
    </div>

    <figure class="articles-card-img-w">
      <img :alt="imageAlt"
           :src="imageSrc"
           class="articles-card-img"
      >
    </figure>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
    articleType: string;
    articleDate: string;
    articleSubtitle: string;
    imageSrc: string;
    imageAlt: string;
}>();

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
