<template>
  <section>
    <div class="container-anim"
         style="background: rgba(255,83,25,0.1);"
    >
      <figure class="mid-line">
        <div ref="line"
             class="s6-1-line"
        ></div>
      </figure>
      <div class="container">
        <div class="knowledge-base-title-holder">
          <div class="knowledge-base-title-w">
            <h2 class="mono-s">
              Knowledge base
            </h2>
            <button type="button"
                    @click="animlines"
            >
              lines
            </button>
            <p class="h3">
              Explore the theoretical side of revenue share technology
            </p>
          </div>
        </div>
        <div class="mt-120">
          <div class="grid-knowledge-base-12col-w">
            <UArticleCard v-for="post in articles"
                          :key="post.id"
                          :article-date="post.attributes.date"
                          :article-slug="post.attributes.slug"
                          :article-title="post.attributes.title"
                          :article-type="post.attributes.type"
                          :image-attributes="post.attributes.cover.data.attributes"
                          class="card-cols"
            />
          </div>
        </div>

        <div class="grid-12col-w mt-40">
          <div class="read-more-btn-w">
            <UButtonMainStroke :title="'Read more'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UArticleCard from '@/components/UArticleCard.vue';
import UButtonMainStroke from './UButtonMainStroke.vue';
import { computed, onMounted, ref } from 'vue';
import useGsap from '@/composables/useGsap';
import useStore from '@/composables/useStore';

const { gsap } = useGsap();
const { blog } = useStore();
const article = blog.hasArticle();
const line = ref(null);

if (article < 3) {
    blog.load({ sort: 'date:desc' });
}
const articles = computed(() => {
    if (blog.loading.value) {
        const allArticles = blog.articles.value[blog.pageArticles.value];
        return allArticles ? allArticles.slice(0, 3) : null;
    }
    return null;
});

const animlines = () => {
    const time = 3;
    // const ease = 'Power0.easeIn';

    gsap?.to(line.value,
        {
            duration: time - .5,
            height: `${100}%`
        }
    );

};
onMounted(() => {
    gsap?.set(line.value,
        {
            height: `${0}%`
        }
    );
});
</script>

<style lang="scss">
.knowledge-base-title-holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.knowledge-base-title-w {
  background-color: $c-gray-00;
  max-width: em(460);
  display: flex;
  flex-direction: column;
  gap: em(16);
  padding: em(8);
}

.mid-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: em(1);
  height: 100%;
  z-index: -1;
}

.read-more-btn-w {
  grid-column-start: 4;
  grid-column-end: 10;
}

.grid-knowledge-base-12col-w {
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: em(8);
  grid-row-gap: em(16);
  grid-template-columns: repeat(12, 1fr);

  .card-cols {
    &:first-child {
      grid-column: span 3;
    }

    &:nth-child(2) {
      grid-column: span 6;
    }

    &:last-child {
      grid-column: span 3;
    }
  }
}


/* ----------------------- tablet ------------------------------ */
@include tablet {
  .knowledge-base-title-w {
    max-width: px(520);
    gap: px(16);
    padding: px(8);
  }

  .read-more-btn-w {
    grid-column-start: 1;
    grid-column-end: 9;
  }

  .grid-knowledge-base-12col-w {
    grid-template-columns: repeat(8, 1fr);
    background-color: $c-gray-00;
    grid-row-gap: px(40);

    .card-cols {
      &:first-child {
        grid-column: span 8;
      }

      &:nth-child(2) {
        grid-column: span 4;
      }

      &:last-child {
        grid-column: span 4;
      }
    }
  }
}


/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {
  .read-more-btn-w {
    grid-column-start: 1;
    grid-column-end: 7;
  }
}

/* ----------------------- mobile ------------------------------ */
@include mobile {

  .grid-knowledge-base-12col-w {
    width: 100vw;
    margin-left: px(-16);
    padding-left: px(16);
    padding-right: px(16);
    display: flex;
    flex-direction: row;
    gap: px(8);
    flex-wrap: nowrap;
    overflow-x: auto;

    .card-cols {
      min-width: 90vw;
    }
  }

}
</style>
