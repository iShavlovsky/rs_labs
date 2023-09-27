<template>
  <div class="article-card-w w-1col-16gap">
    <div class="article-type-and-date-w">
      <p class="mono-s">
        Tech article
      </p>
      <p class="mono-s">
        08 July
      </p>
    </div>

    <div class="article-card-subtitle-w">
      <p class="body-m">
        Revenue Share model expands the crypto world. Visionary approach to new
        economic environment
      </p>
    </div>

    <figure class="articles-card-img-w">
      <img alt=""
           src=""
      >
    </figure>
  </div>
</template>

<script lang="ts" setup>


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
}
</style>
