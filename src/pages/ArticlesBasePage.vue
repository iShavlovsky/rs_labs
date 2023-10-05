<template>
  <section>
    <div class="container">
      <h1 class="h2 h2-indent">
        articles, case studies and technical documentation
      </h1>
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
        <!--TODO: скорее всего должна быть частью общего грида-->
        <div class="articles-highlight-w">
          <UArticleCard v-for="(post, i) in postsHighlight"
                        :key="i"
                        :article-date="post.date"
                        :article-slug="post.slug"
                        :article-title="post.subtitle"
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
          <!--TODO: скорее всего должы быть стики и не разделять грид-->
          <div class="input-checkbox-w">
            <input id="filter-check-reset"
                   v-model="reset"
                   :checked="reset"
                   :disabled="reset || !loading"
                   class="filter-checkbox"
                   name="filter"
                   type="checkbox"
            >
            <label :for="`filter-check-reset`">All </label>
          </div>
          <div v-for="(item, i) in filtersArticles"
               :key="`key-${i + 1}`"
               class="input-checkbox-w"
          >
            <input :id="`filter-check-${i + 1}`"
                   v-model="filtersArticles[i].check"
                   :checked="item.check"
                   :disabled="!loading"
                   :value="item.type"
                   class="filter-checkbox"
                   name="filter"
                   type="checkbox"
            >
            <label :for="`filter-check-${i + 1}`">
              {{ item.type }}
            </label>
          </div>
        </div>

        <div id="articles-grid-w"
             class="grid-3col-article-w"
        >
          <!--TODO: надо как то поменять http://localhost:1337-->
          <UArticleCard v-for="post in articles"
                        :key="post.id"
                        :article-date="post.attributes.date"
                        :article-slug="post.attributes.slug"
                        :article-title="post.attributes.title"
                        :article-type="post.attributes.type"
                        :image-alt="post.attributes.cover.data.attributes.alternativeText"
                        :image-src="`http://localhost:1337${post.attributes.cover.data.attributes.url}`"
                        class="aricles-base-card"
          />
        </div>
        <div class="grid-3col-article-w">
          <UButtonMainStroke v-if="loading"
                             :disabled="countArticles"
                             title="show more"
                             @click="loadMore"
          />
          <!--TODO: пагинация возможно не нужна, но пусть это функционал будет-->
          <div v-if="loading"
               class="article-pagination-link-w"
          >
            <div v-for="page in totalPages"
                 :key="page"
            >
              <a :class="[pageArticles === page ? 'pages-link-active' : '']"
                 class="pages-link"
                 href="#articles-grid-w"
                 @click="setPage(page)"
              >{{ page }}
              </a>
              <span v-if="page < totalPages.length">/</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UArticleCard from '@/components/UArticleCard.vue';
import useStore from '@composables/useStore';
import { computed, onMounted, reactive, Ref, ref, watch } from 'vue';
import { TypeArticle } from '@/types/enums';
import UButtonMainStroke from '@components/UButtonMainStroke.vue';

const { seo, blog } = useStore();
// TODO: сделать анимацию перестановки карточек
const reset: Ref<boolean> = ref(true);
const loading: Ref<boolean> = ref(false);
const pageArticles: Ref<number> = ref(1);
const limitArticles: Ref<number> = ref(3);
const filtersArticles = reactive([
    {
        check: false,
        type: TypeArticle.TechArticle
    },
    {
        check: false,
        type: TypeArticle.Announcement
    }
]);

const selectedFilters = computed(() =>
    filtersArticles.filter(item => item.check).map(item => item.type)
);
const hasFilters = computed(() => filtersArticles.some(element => element.check));
const totalArticles = computed(() => blog.metaData.value?.pagination?.total);
const countArticles = computed(() => totalArticles.value === articles.value?.length ?? false);
const totalPages = computed(() => {
    const totalValue = blog.metaData.value?.pagination?.pageCount;
    return totalValue
        ? Array.from({ length: totalValue }, (_, index) => index + 1)
        : [1];
});

const loadMore = async () => {
    if (pageArticles.value >= totalPages.value.length - 1) {
        pageArticles.value = 1;
    }
    limitArticles.value = limitArticles.value + 2;
    await loadAllArticles();
};

const setPage = async (pageNumber: number) => {
    pageArticles.value = pageNumber;
    await loadAllArticles();
};
// TODO: как не загружать если уже есть статьи в сторе?
const loadAllArticles = async () => {
    const articlesParams: ApiParameters = {
        filters: {
            type: {
                $containsi: selectedFilters.value
            }
        },
        sort: 'date:desc',
        pagination: {
            page: pageArticles.value,
            pageSize: limitArticles.value
        }
    };

    await blog.load(articlesParams).then(
        load => {
            loading.value = load;
        }
    );
};

const articles = computed(() => {
    if (loading.value) {
        return blog.articles.value[pageArticles.value];
    }
    return null;
});

const postsHighlight = [
    {
        type: 'Tech article',
        slug: 'streamers-talent-and-gamers-are-gearing-up-for-playgg-will-you-join',
        date: '08 July',
        subtitle: 'Revenue Share model expands the crypto world. Visionary approach to new economic environment',
        image: {
            src: '/src/assets/images/webp/Article-Placeholder.webp',
            alt: 'Tech article'
        }
    }
];

onMounted(() => {

});
watch(
    filtersArticles,
    async newFiltersBlog => {
        if (newFiltersBlog) {
            reset.value = !hasFilters.value;
            pageArticles.value = 1;
            await loadAllArticles();
        }
    },
    { immediate: true }
);
watch(reset, async newReset => {
    if (newReset) {
        filtersArticles.forEach(el => {
            el.check = false;
        });
    }
});

seo.setPage({
    title: 'RSLabs | Articles',
    ogImage: 'http://localhost:3000/OG/OG-Home.webp'
});
seo.status.value = 200;
</script>

<style lang="scss">
.input-checkbox-w {
  .filter-checkbox[type="checkbox"] {
    display: none;
  }

  .filter-checkbox[type="checkbox"] + label {
    cursor: pointer;
    border-bottom: em(2) solid $c-gray-20;
    color: $c-gray-100;
    background-color: $c-gray-00;
    transition: all 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
    text-transform: uppercase;
  }

  .filter-checkbox[type="checkbox"]:checked + label {
    color: $c-gray-00;
    background-color: $c-gray-100;
  }

  .filter-checkbox[type="checkbox"]:hover + label {
    color: $c-gray-00;
    background-color: $c-gray-100;
  }
}

.article-pagination-link-w {
  padding: em(11) em(32) em(11) em(32);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-flow: row nowrap;

  .pages-link {

    color: $c-gray-100;
    padding: em(11);

    &:hover {
      background: $c-gray-100;
      color: $c-gray-00;
    }

    &.pages-link-active {
      background: $c-gray-100;
      color: $c-gray-00;
    }
  }

  span {
    margin-right: em(11);
    margin-left: em(11);
  }
}

.articles-highlight-w {
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

.s1-articles-bot-lines-w {
  flex-grow: 1;
  flex-shrink: 1;
}

.highlight-card {
  display: flex;
  flex-direction: row;
  padding-left: em(24);
  gap: em(24);
  height: em(334);
}

.articles-sort-w {
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
