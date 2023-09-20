<template>
  <header class="navbar-holder">
    <div class="container">
      <nav class="grid-12col-w">
        <RouterLink to="/"
                    class="navbar-logo"
        >
          <USvgIcon name="rsLabsLogo" />
        </RouterLink>

        <div class="nav-bar-btn-w">
          <UButtonSmall :title="'Join us'" />
        </div>

        <div class="navbar-menu">
          <ul class="navbar-links">
            <li class="mono-s" v-for="routeName in RouteNamesEnum "
                :key="routeName"
            >
              <RouterLink :to="{ name: routeName }">
                {{ routeName }}
              </RouterLink>
            </li>
          </ul>
          <UButtonSmallArrow :title="'Join us'" />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import {RouteNamesEnum} from "@router/router.types";
import USvgIcon from "@components//USvgIcon/USvgIcon.vue";
import UButtonSmall from "@components/UButtonSmall.vue";
import UButtonSmallArrow from "@components/UButtonSmallArrow.vue";

console.log(RouteNamesEnum)
</script>

<style lang="scss">

.navbar-holder{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: em(4) em(48) em(4) em(48);
}
.nav-bar-btn-w{
  grid-column-start: 4;
  grid-column-end: 6;
}
.navbar-logo {
  align-self: center;
  width: em(53);
}

.navbar-menu, .navbar-links {
  display: flex;
}

.navbar-menu{
  grid-column-start: 9;
  grid-column-end: 13;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
}

.navbar-links{
  display: flex;
  flex-direction: row;
  gap: em(24);
}
</style>
