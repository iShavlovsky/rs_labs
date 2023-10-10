<template>
  <section>
    <div class="container">
      <div class="grid-12col-w">
        <div class="home-s3-span-1">
          <figure class="home-s3-img1-w">
            <USvgIcon :ref="masks[0]"
                      class="home-s3-anim1"
                      name="mask.left-figure-ovrl-min"
            />
            <img alt="decorative"
                 class="home-s3-img1"
                 src="../../assets/images/webp/interior6.webp"
            >
            <USvgIcon :ref="masks[1]"
                      class="home-s3-anim2"
                      name="mask.right-figure-ovrl-min"
            />
          </figure>
          <div class="max-width-330 mt-16">
            <p class="mono-s">
              revenue share labs build web3 products using innovating revenue share technology.
            </p>
          </div>
        </div>

        <div class="home-s3-span-2">
          <h2 class="h2">
            Meet revenue share labs
          </h2>
          <button type="button"
                  @click="anim"
          >
            animation
          </button>
          <div class="w-1col-16gap">
            <p class="body-l">
              The lab is dedicated to build a technological infrastructure to
              implement revenue share economics in practice.
            </p>
            <p class="body-m">
              Our team consists of both technical specialists and
              visionary individuals promoting the ideas of revenue share.
            </p>
          </div>
        </div>

        <div class="home-s3-span-3">
          <div class="home-s3-img2-w">
            <USvgIcon :ref="masks[2]"
                      class="home-s3-anim1"
                      name="mask.left-figure-ovrl-min"
            />

            <img alt="decorative"
                 class="home-s3-img2"
                 src="../../assets/images/webp/interior6.webp"
            >
            <USvgIcon :ref="masks[3]"
                      class="home-s3-anim2"
                      name="mask.right-figure-ovrl-min"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="trigger-3"></div>
  </section>
</template>

<script lang="ts" setup>
import { ComponentPublicInstance, ref, Ref } from 'vue';
import USvgIcon from '@components/USvgIcon/USvgIcon.vue';
import useGsap from '@composables/useGsap';

let masks: Array<Ref<ComponentPublicInstance | null>> = Array(4).fill(null).map(() => ref(null));
const { gsap } = useGsap();

const anim = () => {
    const time = 3;
    const ease = 'Power0.easeIn';
    gsap?.to(masks[0].value?.$el,
        {
            duration: time,
            x: `${-80}%`,
            ease: ease
        }
    );
    gsap?.to(masks[1].value?.$el,
        {
            duration: time,
            x: `${80}%`,
            ease: ease
        }
    );
    gsap?.to(masks[2].value?.$el,
        {
            duration: time,
            x: `${-80}%`,
            ease: ease
        }
    );
    gsap?.to(masks[3].value?.$el,
        {
            duration: time,
            x: `${80}%`,
            ease: ease
        }
    );
};
</script>

<style lang="scss">

.trigger-3 {
  position: absolute;
  height: 100vh;
  bottom: -100vh;
  border: 2px solid red;
}

.home-s3-img2-w {
  position: relative;
  overflow: hidden;
  max-height: em(269);
  display: flex;
}

.home-s3-img1-w {
  position: relative;
  overflow: hidden;
  min-height: em(596);
  display: flex;
}

.home-s3-anim1 {
  width: 110%;
  position: absolute;
  top: -1%;
  left: 0;
}

.home-s3-anim2 {
  width: 110%;
  position: absolute;
  bottom: -1%;
  left: 0;
}

.home-s3-img1, .home-s3-img2 {
  object-fit: cover;

}

.home-s3-span-1 {
  display: grid;
  grid-column: span 5;
}

.home-s3-span-2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column-start: 7;
  grid-column-end: 10;
  align-self: stretch;
}

.home-s3-span-3 {
  display: grid;
  grid-column-start: 11;
  grid-column-end: 13;
}

/* ----------------------- tablet ------------------------------ */
@include tablet {

  .home-s3-span-1 {
    margin-top: px(-56);
    grid-column: span 2;
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 2;
  }

  .home-s3-span-2 {
    gap: px(80);
    grid-column-start: 3;
    grid-column-end: 7;
  }

  .home-s3-span-3 {
    margin-top: px(64);
    grid-column: span 5;
    grid-row-start: 2;
  }

  .home-s3-img1-w {
    height: px(193);
    min-height: 30vh;
  }

}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {
  .home-s3-span-1 {
    margin-top: px(8);
    grid-column: span 2;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 2;
  }

  .home-s3-span-2 {
    gap: px(80);
    grid-column-start: 2;
    grid-column-end: 6;
  }

  .home-s3-span-3 {
    display: none;
  }

  .home-s3-img1-w {
    height: px(193);
    min-height: 30vh;
    width: 50%;
  }
}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
