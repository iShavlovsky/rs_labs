<template>
  <MainAlerts />
  <MainNavBar />
  <main>
    <RouterView />
  </main>
  <MainFooter />
</template>

<script lang="ts" setup>

import MainNavBar from '@components/MainNavBar.vue';
import MainFooter from '@components/MainFooter.vue';
import MainAlerts from '@components/MainAlerts.vue';
</script>

<style lang="scss">

</style>
