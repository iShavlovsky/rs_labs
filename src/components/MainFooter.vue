<template>
  <footer class="footer-holder">
    <div class="container">
      <nav>
        <ul class="footer-links">
          <li class="mono-s">
            <RouterLink :to="{ name: 'Mission' }">
              mission
            </RouterLink>
          </li>
          <li class="mono-s">
            <RouterLink to="/">
              mission
            </RouterLink>
          </li>
          <li class="mono-s">
            <RouterLink :to="{ name: 'Articles' }">
              knowledge base
            </RouterLink>
          </li>
          <li>
            <UButtonSmallArrow :title="'rs tech'" />
          </li>
        </ul>
      </nav>
      <div class="footer-disclaimer-w t-gray-10">
        <p class="disclaimer align-justify">
          You are leaving the world of unfair distribution. fair economic could
          cause an addiction. consult your inner mind and make a wise choice.
        </p>
      </div>
      <div class="bottom-footer-info mt-16 mono-m">
        <p>rs tech © 2023</p>
        <a class="justify-self-end">terms and privacy</a>
        <p >Designed by <a href="#">X</a></p>
        <p class="justify-self-end">Developed by <a href="#">X</a></p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import UButtonSmallArrow from '@components/UButtonSmallArrow.vue';
</script>

<style lang="scss">

.footer-holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: em(24) em(48) em(24) em(48);
}

.footer-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer-disclaimer-w {
  margin-top: em(355);
}

.bottom-footer-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* ----------------------- tablet ------------------------------ */
@include tablet {

}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {
  .bottom-footer-info {
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: px(8);
    grid-row-gap: px(8);
    grid-template-columns: repeat(2, 1fr);
  }

  .justify-self-end{
    justify-self: end;
  }
}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
