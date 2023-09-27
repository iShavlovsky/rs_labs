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
      <div class="footer-disclaimer-w">
        <p class="disclaimer">You are leaving the world of unfair distribution. fair economic could cause an addiction. consult your inner mind and make a wise choice.</p>
      </div>
      <div class="bottom-footer-info mt-16 mono-m">
        <p>rs tech © 2023</p>
        <a>terms and privacy</a>
        <p>Designed by <a href="#">X</a></p>
        <p>Developed by <a href="#">X</a></p>
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

.footer-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer-disclaimer-w{
  margin-top: em(355);
}
.bottom-footer-info{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
