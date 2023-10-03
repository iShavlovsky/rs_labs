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
        <div class="grid-knowledge-base-12col-w">
          <UArticleCard v-for="(post, i) in posts"
                        :key="i"
                        :article-date="post.date"
                        :article-subtitle="post.subtitle"
                        :article-type="post.type"
                        :image-alt="post.image.alt"
                        :image-src="post.image.src"
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
