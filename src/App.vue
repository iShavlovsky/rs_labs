<template>
  <MainAlerts />
  <MainNavBar />
  <main>
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <!--TODO: сделать скелетон для страницы статьи-->
        <div>Loading...</div>
      </template>
    </Suspense>
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
