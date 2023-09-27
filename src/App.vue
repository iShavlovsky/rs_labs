<template>
  <MainNavBar />
  <main>
    <RouterView />
  </main>
  <MainFooter />
</template>

<script lang="ts" setup>

import MainNavBar from '@components/MainNavBar.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<style lang="scss">
@import "main";
</style>
