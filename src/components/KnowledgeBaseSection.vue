<template>
  <section>
    <figure class="mid-line"></figure>
    <div class="container">
      <div class="knowledge-base-title-w">
        <div class="w-1col-16gap bg-black-padding-top-bot-8px max-width-413">
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
          <UArticleCard />
          <UArticleCard />
          <UArticleCard />
        </div>
      </div>

      <div class="grid-12col-w mt-40">
        <div class="read-more-btn-w">
          <UButtonMain :title="'Read more'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UArticleCard from '@components/UArticleCard.vue';
import UButtonMain from '@components/UButtonMain.vue';
</script>

<style lang="scss">
.knowledge-base-title-w {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.bg-black-padding-top-bot-8px {
  padding-top: em(8);
  padding-bottom: em(8);
  background-color: $c-gray-00;
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
</style>
