<template>
  <section>
    <div class="container">
      <figure class="mission-s4-img-w">
        <USvgIcon :ref="masks[0]"
                  class="mission-s4-anim1"
                  name="mask.mission-top-figure-min"
        />
        <img alt="decorative"
             class="mission-s4-img"
             src="../assets/images/webp/interior6.webp"
        >
        <USvgIcon :ref="masks[1]"
                  class="mission-s4-anim2"
                  name="mask.mission-bot-figure-min"
        />
      </figure>

      <div class="grid-12col-w mt-80">
        <div class="mission-s4-span-1">
          <figure class="s6-3-line-w s4-misiion-top-solo-line">
            <div class="s6-1-line"></div>
          </figure>
          <figure class="home-s6-lines-w s3-missions-first-linse-w">
            <figure class="s6-1-line-w mission-s4-first-line">
              <div class="s6-1-line"></div>
            </figure>
            <figure class="s6-3-line-w">
              <div class="s6-1-line"></div>
            </figure>
            <figure class="s6-1-line-w">
              <div class="s6-1-line"></div>
            </figure>
          </figure>
        </div>
        <div class="mission-s4-span-2 w-1col-16gap">
          <h2 class="h2">
            Team
          </h2>

          <p class="body-l">
            <button type="button"
                    @click="anim"
            >
              animation
            </button>
            As a team of visionary founders with extensive crypto experience and membership in the
            Ethereum advisory board, our goal is to empower individuals within the Web3 ecosystem.
            We have assembled a talented tech team, well-versed in Solidity and with contributions
            to the Ethereum Foundation, to bring our vision to life.
          </p>
        </div>

        <div class="mission-s4-span-3 w-1col-24gap">
          <p class="body-m">
            Together, we created an innovative revenue share technology that seamlessly integrated
            with popular Web3 applications. Our solution enabled users to actively participate and
            earn a fair share of revenue. We believed in leveling the playing field and giving equal
            opportunities to individuals from diverse backgrounds in the digital revolution.
          </p>

          <p class="body-m t-gray-70">
            Driven by our mission, we aimed to reshape the Web3 landscape. By empowering users and
            making them active stakeholders in the digital economy, we encourage a future where
            participation translated into tangible rewards. Our passion and expertise led us to
            create a revenue share solution that empowered individuals in the rapidly evolving Web3
            ecosystem.
          </p>
        </div>
      </div>

      <div class="grid-12col-w mt-4">
        <figure class="home-s6-lines-w s3-missions-first-linse-w">
          <figure class="s6-1-line-w">
            <div class="s6-1-line"></div>
          </figure>
          <figure class="s6-2-line-w">
            <div class="s6-1-line"></div>
          </figure>
        </figure>

        <div class="mission-s4-subtitle-w">
          <p class="mono-s">
            we are specialists and visionary individuals promoting revenue share ideas.
          </p>
        </div>

        <figure class="home-s6-lines-w s3-missions-second-linse-w">
          <figure class="s6-1-line-w horizmobile-hide">
            <div class="s6-1-line"></div>
          </figure>
          <figure class="s6-3-line-w">
            <div class="s6-1-line"></div>
          </figure>
          <figure class="s6-4-line-w mission-s4-4-line">
            <div class="s6-1-line"></div>
          </figure>
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


import { ComponentPublicInstance, ref, Ref } from 'vue';
import useGsap from '@composables/useGsap';
import USvgIcon from '@components/USvgIcon/USvgIcon.vue';

let masks: Array<Ref<ComponentPublicInstance | null>> = Array(2).fill(null).map(() => ref(null));
const { gsap } = useGsap();
const anim = () => {
    const time = 3;
    const ease = 'Power0.easeIn';
    gsap?.to(masks[0].value?.$el,
        {
            duration: time,
            y: `${-60}%`,
            scale: `${1}`,
            ease: ease
        }
    );
    gsap?.to(masks[1].value?.$el,
        {
            duration: time,
            y: `${60}%`,
            scale: `${1}`,
            ease: ease
        }
    );
};
</script>

<style lang="scss">

.mission-s4-img-w {
  width: 105%;
  margin-left: -2.5%;
  position: relative;
  overflow: hidden;
  height: em(600);

  .mission-s4-img {
    object-fit: cover;
  }

  .mission-s4-anim1 {
    transform: scaleY(1.5);
    position: absolute;
    top: -1%;
    left: -1%;
  }

  .mission-s4-anim2 {
    transform: scaleY(1.5);
    position: absolute;
    bottom: -1%;
    left: -1%;
  }
}


.mission-s4-span-1 {
  display: flex;
  flex-direction: column;
  grid-column: span 3;
}

.mission-s4-span-2 {
  grid-column: span 3;
  padding-top: em(50);
  align-self: start;
}

.mission-s4-span-3 {
  grid-column-start: 11;
  grid-column-end: 13;
  padding-bottom: em(80);
  padding-top: em(50);
}

.s3-missions-first-linse-w {
  height: 100%;
}

.s3-missions-second-linse-w {
  grid-column: span 9;
}

.mission-s4-subtitle-w {
  grid-column: span 2;
  padding-bottom: em(16);
}

.mission-s4-first-line {
  width: em(300);
  margin-left: em(-101);
}

.top-line-mission-s4-w {
  align-self: stretch;
}

.s4-misiion-top-solo-line {
  height: em(80);
  margin-left: em(104);
  margin-bottom: em(4);
}

.mission-s4-4-line {
  width: em(275);
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
