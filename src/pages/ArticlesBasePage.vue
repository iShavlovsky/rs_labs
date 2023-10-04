<template>
  <section>
    <div class="container">

      <h1 class="h2 h2-indent">articles, case studies and&nbsp;technical documentation</h1>
      <div class="grid-12col-w">        
        <div class="articles-s1-span-1">
          <figure class="s6-3-line-w s1-articlest-top-solo-line">
            <div class="s6-1-line"></div>
          </figure>
          <figure class="home-s6-lines-w s1-articles-bot-lines-w">
            <figure class="s6-1-line-w mission-s4-first-line">
              <div class="s6-1-line"></div>
            </figure>
            <figure class="s6-3-line-w">
              <div class="s6-1-line"></div>
            </figure>
          </figure>
        </div>

        <div class="articles-highlight-w">
          <UArticleCard v-for="(post, i) in postsHighlight"
                        :key="i"
                        :article-date="post.date"
                        :article-subtitle="post.subtitle"
                        :article-type="post.type"
                        :image-alt="post.image.alt"
                        :image-src="post.image.src"
                        class="highlight-card"
          />
        </div>

      </div>
    </div>
  </section>

  <section>
    <div class="container">

      <div class="grid-12col-w">
        <div class="articles-sort-w">
          <p>dsfdsf 1</p>
          <p>dsfdsf 2</p>
          <p>dsfdsf 3</p>

        </div>

        <div class="grid-3col-article-w">
          <UArticleCard v-for="(post, i) in postsBase"
                        :key="i"
                        :article-date="post.date"
                        :article-subtitle="post.subtitle"
                        :article-type="post.type"
                        :image-alt="post.image.alt"
                        :image-src="post.image.src"
                        class="aricles-base-card"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UArticleCard from '@/components/UArticleCard.vue';
import useStore from '@composables/useStore';

const postsHighlight = [
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


const postsBase = [
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

const { seo } = useStore();

seo.setPage({
    title: 'RSLabs | Articles',
    ogImage: 'http://localhost:3000/OG/OG-Home.webp'
});
seo.status.value = 200;
</script>

<style lang="scss">
.articles-highlight-w{
  padding-top: em(120);
  grid-column: span 9;
}

.articles-s1-span-1 {
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-column: span 3;
}

.s1-articlest-top-solo-line {
  height: em(116);
  align-self: flex-end;
  margin-bottom: em(4);
}
.s1-articles-bot-lines-w{
  flex-grow: 1;
  flex-shrink: 1;
}

.highlight-card{
  display: flex;
  flex-direction: row;
  padding-left: em(24);
  gap: em(24);
  height: em(334);
}

.articles-sort-w{
  grid-column: span 2;
}
.grid-3col-article-w {
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: em(8);
  grid-row-gap: em(80);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-column-start: 4;
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
