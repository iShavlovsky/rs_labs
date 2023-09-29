<template>
  <header class="navbar-holder">
    <div class="container">
      <nav class="grid-12col-w">
        <RouterLink aria-label="Home page"
                    class="navbar-logo"
                    to="/"
        >
          <USvgIcon name="svg.rsLabsLogo" />
        </RouterLink>

        <div class="nav-bar-btn-w">
          <UButtonSmall :title="'Join us'" />
        </div>

        <div class="navbar-menu">
          <ul class="navbar-links">
            <li class="mono-s">
              <RouterLink :to="{ name: 'Mission' }">
                mission
              </RouterLink>
            </li>
            <li class="mono-s">
              <RouterLink to="/">
                team
              </RouterLink>
            </li>
            <li class="mono-s">
              <RouterLink :to="{ name: 'Articles' }">
                knowledge base
              </RouterLink>
            </li>
          </ul>
          <UButtonSmallArrow :title="'rs tech'" />
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import USvgIcon from '@components//USvgIcon/USvgIcon.vue';
import UButtonSmall from '@components/UButtonSmall.vue';
import UButtonSmallArrow from '@components/UButtonSmallArrow.vue';
</script>

<style lang="scss">

.navbar-holder {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: em(4) em(48) em(4) em(48);
}

.nav-bar-btn-w {
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

.navbar-menu {
  grid-column-start: 9;
  grid-column-end: 13;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
}

.navbar-links {
  display: flex;
  flex-direction: row;
  gap: em(24);
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
