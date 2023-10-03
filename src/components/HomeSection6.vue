<template>
  <section class="height-100vh">
    <div class="animation-img-w">
      <USvgIcon :ref="masks[0]"
                class="anim-mask"
                name="mask.top-figure"
      />
      <USvgIcon :ref="masks[1]"
                class="anim-mask"
                name="mask.mid-figure"
      />
      <USvgIcon :ref="masks[2]"
                class="anim-mask"
                name="mask.bot-figure"
      />
    </div>
    <div class="container flex-column justify-space-between height-100prc">
      <div class="home-s6-disclaimer-w flex-column justify-center">
        <div class="disclaimer-w">
          <p class="disclaimer align-justify">
            You are leaving the world of unfair distribution. fair economic could
            cause an&nbsp;addiction. consult your inner mind and make a wise choice.
          </p>
        </div>
      </div>

      <div class="grid-12col-w mt-160">
        <figure class="home-s6-lines-w horizmobile-hide">
          <figure class="s6-1-line"></figure>
          <figure class="s6-2-line"></figure>
        </figure>

        <div class="s6-subtitle-w">
          <p class="mono-s">
            Revenue share labs was established in 2023 and build web3 products using innovating
            revenue share technology
          </p>
        </div>

        <figure class="home-s6-lines-w s6-second-linse-w">
          <figure class="s6-1-line horizmobile-hide"></figure>
          <figure class="s6-3-line"></figure>
          <figure class="s6-4-line"></figure>
        </figure>
      </div>
    </div>
    <button type="button"
            @click="anim"
    >
      animation
    </button>
  </section>
</template>

<script lang="ts" setup>
import USvgIcon from '@components/USvgIcon/USvgIcon.vue';
import { ComponentPublicInstance, ref, Ref } from 'vue';
import useGsap from '@composables/useGsap';

let masks: Array<Ref<ComponentPublicInstance | null>> = Array(3).fill(null).map(() => ref(null));

const { gsap } = useGsap();

const anim = () => {
    const time = 3;
    const ease = 'Power0.easeIn';
    gsap?.to(masks[0].value?.$el,
        {
            duration: time,
            y: `${-50}%`,
            scaleY: `${0}`,
            scaleX: `${1.2}`,
            rotateY: -2,
            ease: ease
        }
    );
    gsap?.to(masks[1].value?.$el,
        {
            duration: time - .6,
            scaleY: `${0}`,
            scaleX: `${1.2}`,
            rotateZ: 1,
            ease: ease
        }
    );
    gsap?.to(masks[2].value?.$el,
        {
            duration: time,
            y: `${50}%`,
            scaleY: `${0}`,
            scaleX: `${1.2}`,
            rotateY: 2,
            ease: ease
        }
    );
};
</script>

<style lang="scss">
.animation-img-w {
  height: 100%;
  position: absolute;
  width: em(1440);
  z-index: -1;
  left: 0;
  top: 0;
  background: url("../assets/images/webp/interior6.webp") no-repeat center center;
  background-size: cover;
  overflow: hidden;

  .anim-mask {
    transform: scaleY(2.3);
  }
}

.s6-subtitle-w {
  grid-column: span 2;
}

.home-s6-disclaimer-w {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #DAE9FF;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;

  .disclaimer-w {
    max-width: em(668);
    mix-blend-mode: difference;
  }
}


.home-s6-lines-w {
  display: flex;

}

.s6-1-line {
  width: 100%;
  height: em(1);
  background-color: $c-gray-100;
}

.s6-2-line {
  width: em(1);
  max-height: 100%;
  background-color: $c-gray-100;
  margin-top: em(4);
  margin-left: em(4);
}

.s6-second-linse-w {
  grid-column-start: 4;
  grid-column-end: 13;
}

.s6-3-line {
  width: em(1);
  max-height: 100%;
  background-color: $c-gray-100;
  margin-top: em(4);
  margin-left: em(4);
  margin-right: em(4);
}

.s6-4-line {
  width: em(105);
  height: em(1);
  background-color: $c-gray-100;
}

/* ----------------------- tablet ------------------------------ */
@include tablet {

  .home-s6-disclaimer-w {
    .disclaimer-w {
      max-width: em(810);
    }
  }

  .s6-second-linse-w {
    grid-column-start: 4;
    grid-column-end: 9;
  }

  .s6-1-line {
    height: px(1);
  }

  .s6-2-line {
    width: px(1);
    margin-top: px(4);
    margin-left: px(4);
  }

  .s6-3-line {
    width: px(1);
    margin-top: px(4);
    margin-left: px(4);
    margin-right: px(4);
  }

  .s6-4-line {
    width: em(186);
    height: px(1);
  }

}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {
  .s6-subtitle-w{
    grid-column-start: 1;
    grid-column-end: 6;
  }

  .s6-3-line{
    height: px(62);
  }

  .s6-4-line {
    width: 100%;
    height: px(1);
  }

  .s6-second-linse-w {
    margin-top: px(-8);
    margin-left: px(-4);
    grid-column-start: 1;
    grid-column-end: 7;
  }
}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
