<template>
  <section class="height-100vh">
    <div class="container flex-column justify-space-between height-100prc">
      <div class="grid-12col-w article-top-w">
        <div class="side-article-info">
          <div class="article-info-w">
            <div class="time-to-reed-w">
              <div class="w-1col-8gap">
                <p class="mono-m t-gray-70">
                  Article
                </p>
                <p class="mono-m">
                  {{ article?.attributes.timeRead }} min read
                </p>
              </div>
            </div>

            <div class="article-author-w">
              <div class="w-1col-8gap">
                <p class="mono-m t-gray-70">
                  Written By
                </p>
                <p class="mono-m">
                  {{ article?.attributes.writtenBy }}
                </p>
              </div>
            </div>
          </div>

          <div class="social-share-w">
            <svg fill="none"
                 height="24"
                 viewBox="0 0 24 24"
                 width="24"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.1687 5H5.83125C5.61129 5.00164 5.40081 5.08974 5.24527 5.24527C5.08974 5.40081 5.00164 5.61129 5 5.83125V19.1687C5.00164 19.3887 5.08974 19.5992 5.24527 19.7547C5.40081 19.9103 5.61129 19.9984 5.83125 20H13.0125V14.2H11.0625V11.9313H13.0125V10.2625C13.0125 8.325 14.1937 7.26875 15.9312 7.26875C16.5125 7.26875 17.0938 7.26875 17.675 7.35625V9.375H16.4813C15.5375 9.375 15.3562 9.825 15.3562 10.4813V11.925H17.6062L17.3125 14.1937H15.3562V20H19.1687C19.3887 19.9984 19.5992 19.9103 19.7547 19.7547C19.9103 19.5992 19.9984 19.3887 20 19.1687V5.83125C19.9984 5.61129 19.9103 5.40081 19.7547 5.24527C19.5992 5.08974 19.3887 5.00164 19.1687 5Z"
                    fill="white"
              />
            </svg>
            <svg fill="none"
                 height="24"
                 viewBox="0 0 24 24"
                 width="24"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.1687 5H5.83125C5.61129 5.00164 5.40081 5.08974 5.24527 5.24527C5.08974 5.40081 5.00164 5.61129 5 5.83125V19.1687C5.00164 19.3887 5.08974 19.5992 5.24527 19.7547C5.40081 19.9103 5.61129 19.9984 5.83125 20H13.0125V14.2H11.0625V11.9313H13.0125V10.2625C13.0125 8.325 14.1937 7.26875 15.9312 7.26875C16.5125 7.26875 17.0938 7.26875 17.675 7.35625V9.375H16.4813C15.5375 9.375 15.3562 9.825 15.3562 10.4813V11.925H17.6062L17.3125 14.1937H15.3562V20H19.1687C19.3887 19.9984 19.5992 19.9103 19.7547 19.7547C19.9103 19.5992 19.9984 19.3887 20 19.1687V5.83125C19.9984 5.61129 19.9103 5.40081 19.7547 5.24527C19.5992 5.08974 19.3887 5.00164 19.1687 5Z"
                    fill="white"
              />
            </svg>
          </div>
        </div>
        <figure class="article-header-image">
          <!--TODO: надо как то поменять http://localhost:1337-->
          <img :alt="article?.attributes.cover.data.attributes.alternativeText"
               :src="`http://localhost:1337${article?.attributes.cover.data.attributes.url}`"
               class="articles-card-img"
          >
        </figure>
      </div>

      <div class="grid-12col-w mt-48">
        <div class="article-heading-w">
          <RouterLink :to="{ name: RouteNamesEnum.articles }"
                      class="lb-article-back"
          >
            <figure class="ico-16px-w">
              <USvgIcon name="arrows.arrowBack" />
            </figure>
            <p class="mono-m">
              Back
            </p>
          </RouterLink>
          <h1 class="h2 h2-small-indent">
            {{ article?.attributes.title }}
          </h1>
        </div>
        <!--TODO: попробовать маркдаун-->
        <div v-once
             class="rich-block"
             v-html="article?.attributes.body"
        >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import USvgIcon from '@/components/USvgIcon/USvgIcon.vue';
import useStore from '@composables/useStore';
import { useRoute } from 'vue-router';
import { computed, ComputedRef } from 'vue';
import { RouteNamesEnum } from '@router/router.types';

const { seo, blog } = useStore();
const route = useRoute();
// const router = useRouter();
// const goBack = async () => {
//     router.go(-1);
// };
const slug: ComputedRef<string> = computed(() => route.params.slug as string);
const article = computed(() => blog.getArticle(slug.value));

const articleParams: ApiParameters = {
    filters: {
        slug: {
            $eq: slug.value
        }
    }
};
if (!article.value) {
    await blog.load(articleParams);
}

seo.setPage({
    title: 'RSLabs | Article',
    ogImage: 'http://localhost:3000/OG/OG-Home.webp'
});
seo.status.value = 200;
</script>

<style lang="scss">


.rich-block {
  grid-column-start: 4;
  grid-column-end: 10;

  br {
    margin: em(1);
  }
}

.article-top-w {
  flex-grow: 1;

}

.article-info-w {
  display: flex;
  flex-direction: column;
  gap: em(16);
}

.time-to-reed-w {
  border-left: solid;
  border-left-width: em(1);
  border-left-color: $c-gray-100;
  padding-left: em(8);
  padding-bottom: em(32);
}

.side-article-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: span 2;
}

.social-share-w {
  display: flex;
  flex-direction: row;
  gap: em(8);
}

.article-heading-w {
  position: relative;
  grid-column-start: 3;
  grid-column-end: 13;
}

.lb-article-back {
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: row;
  gap: em(4);
  padding: em(4) em(0);
}

.article-header-image {
  height: 100%;
  min-height: 50vh;
  background-color: aliceblue;
  grid-column-start: 3;
  grid-column-end: 13;
}

/* ----------------------- tablet ------------------------------ */
@include tablet {

}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {

}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
