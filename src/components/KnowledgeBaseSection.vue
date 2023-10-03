<template>
  <section>
    <figure class="mid-line"></figure>
    <div class="container">
      <div class="knowledge-base-title-holder">
        <div class="knowledge-base-title-w">
          <h2 class="mono-s">
            Knowledge base
          </h2>
          <p class="h3">
            Explore the theoretical side of revenue share technology
          </p>
        </div>
      </div>
      <div class="mt-120">
        <div class="knowledge-base-articles-collection-w">
          <UArticleCard v-for="(post, i) in posts"
                        :key="i"
                        :article-date="post.date"
                        :article-subtitle="post.subtitle"
                        :article-type="post.type"
                        :image-alt="post.image.alt"
                        :image-src="post.image.src"
          />
        </div>
      </div>

      <div class="grid-12col-w mt-40">
        <div class="read-more-btn-w">
          <UButtonMainStroke :title="'Read more'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UArticleCard from '@/components/UArticleCard.vue';
import UButtonMainStroke from './UButtonMainStroke.vue';

const posts = [
    {
        type: 'Tech article',
        date: '08 July',
        subtitle: 'Revenue Share model expands the crypto world. Visionary approach to new economic environment',
        image: {
            src: '/src/assets/images/webp/Article-Placeholder.webp',
            alt: 'Tech article'
        }
    },
    {
        type: 'Tech article',
        date: '08 July',
        subtitle: 'Revenue Share model expands the crypto world. Visionary approach to new economic environment',
        image: {
            src: '/src/assets/images/webp/Article-Placeholder.webp',
            alt: 'Tech article'
        }
    },
    {
        type: 'Tech article',
        date: '08 July',
        subtitle: 'Revenue Share model expands the crypto world. Visionary approach to new economic environment',
        image: {
            src: '/src/assets/images/webp/Article-Placeholder.webp',
            alt: 'Tech article'
        }
    }
];
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

.knowledge-base-articles-collection-w {
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: em(8);
  grid-row-gap: em(80);
  grid-template-columns: em(330) 1fr em(330);
}

.mid-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: em(1);
  height: 100%;
  background-color: $c-gray-100;
  z-index: -1;
}

.read-more-btn-w {
  grid-column-start: 4;
  grid-column-end: 10;
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
}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {
  .read-more-btn-w {
    grid-column-start: 1;
    grid-column-end: 7;
  }

  .knowledge-base-articles-collection-w {
    grid-template-columns: 0.5fr 1fr 0.5fr;
  }
}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
