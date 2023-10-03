<template>
  <section>
    <div class="container">
      <h2 class="mono-m">
        Backed by.
      </h2>

      <div class="logos-stripe-w mt-50">
        <Vue3Marquee v-if="init"
                     :direction="'normal'"
                     :duration="50"
                     :gradient="true"
                     :gradient-color="[0,0,0]"
                     :gradient-length="'5%'"
                     :loop="0"
                     :pause-on-hover="true"
                     @on-pause="playState = 'paused'"
                     @on-resume="playState = 'playing'"
        >
          <figure v-for="svg in logosPartners"
                  :key="svg"
                  class="logo-w"
          >
            <USvgIcon :name="svg" />
          </figure>
        </Vue3Marquee>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee';
import USvgIcon from '@/components/USvgIcon/USvgIcon.vue';
import type { ValidKeys } from '@/components/USvgIcon/USvgIkon.types';
import { onMounted, ref } from 'vue';

const init = ref(false);
const playState = ref('playing');

const logosPartners: ValidKeys[] = [
    'logos.logo-12S',
    'logos.logo-CRIPTORG',
    'logos.logo-CT',
    'logos.logo-EF',
    'logos.logo-ES',
    'logos.logo-MD',
    'logos.logo-PF',
    'logos.logo-TON',
    'logos.logo-TV',
    'logos.logo-VELAS',
    'logos.logo-XLA',
    'logos.logo-XSOLLA'
];
onMounted(() => {
    init.value = true;
});
</script>

<style lang="scss">
.logo-w {
  color: $c-gray-20;
  width: 100%;
  height: em(24);
  display: flex;
  padding-left: em(40);
  padding-right: em(40);
  opacity: 0.2;
}

.logos-stripe-w {
  width: em(1440);
  max-width: 99vw;
  margin-left: em(-48);
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

/* ----------------------- tablet ------------------------------ */
@include tablet {
  .logos-stripe-w {
    width: 100vw;
    margin-left: px(-44);
  }
}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {
  .logos-stripe-w {
    margin-left: px(-14);
  }
}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>

