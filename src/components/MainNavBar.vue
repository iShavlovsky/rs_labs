<template>
  <header class="navbar-holder">
    <nav class="navbar-w">
      <RouterLink to="/"
                  class="navbar-logo"
      >
        <USvgIcon name="logoDeals" />
      </RouterLink>

      <div class="navbar-menu">
        <ul class="navbar-links">
          <li v-for="routeName in RouteNamesEnum "
              :key="routeName"
          >
            <RouterLink :to="{ name: routeName }">
              {{ routeName }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {RouteNamesEnum} from "@router/router.types";
import USvgIcon from "@components//USvgIcon/USvgIcon.vue";

console.log(RouteNamesEnum)
</script>

<style lang="scss">
.navbar-w {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.navbar-logo {
  width: em(140);
}

.navbar-menu, .navbar-links {
  display: flex;
}
</style>
