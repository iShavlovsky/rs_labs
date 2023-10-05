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
            cause an addiction. consult your inner mind and make a wise choice.
          </p>
        </div>
      </div>

      <div class="grid-12col-w mt-160">
        <figure class="home-s6-lines-w horizmobile-hide">
          <div class="s6-1-line-w">
            <div :ref="lines[0]"
                 class="s6-1-line"
            ></div>
          </div>
          <div class="s6-2-line-w">
            <div :ref="lines[1]"
                 class="s6-1-line"
            ></div>
          </div>
        </figure>

        <div class="s6-subtitle-w">
          <button type="button"
                  @click="animImages"
          >
            masks
          </button>
          <button type="button"
                  @click="animlines"
          >
            lines
          </button>
          <p class="mono-s">
            Revenue share labs was established in 2023 and build web3 products using innovating
            revenue share technology
          </p>
        </div>

        <figure class="home-s6-lines-w s6-second-linse-w">
          <div class="s6-1-line-w horizmobile-hide">
            <div :ref="lines[2]"
                 class="s6-1-line"
            ></div>
          </div>
          <div class="s6-3-line-w">
            <div :ref="lines[3]"
                 class="s6-1-line"
            ></div>
          </div>
          <div class="s6-4-line-w">
            <div :ref="lines[4]"
                 class="s6-1-line"
            ></div>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import USvgIcon from '@components/USvgIcon/USvgIcon.vue';
import { ComponentPublicInstance, onMounted, onUnmounted, Ref, ref } from 'vue';
import useGsap from '@composables/useGsap';

let masks: Array<Ref<ComponentPublicInstance | null>> = Array(3).fill(null).map(() => ref(null));
let lines: Array<Ref<ComponentPublicInstance | null>> = Array(5).fill(null).map(() => ref(null));
const { gsap, timeLine } = useGsap();

const animImages = () => {
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
const properties = ['width', 'height', 'width', 'height', 'width'];
const animlines = () => {
    const time = 1;
    // const ease = 'Power0.easeIn';

    timeLine?.to(lines[0].value,
        {
            duration: time - .5,
            width: `${100}%`
        }
    );
    timeLine?.to(lines[1].value,
        {
            duration: time,
            height: `${100}%`
        }
    );
    timeLine?.to(lines[2].value,
        {
            duration: time,
            width: `${100}%`
        }, '<'
    );
    timeLine?.to(lines[3].value,
        {
            duration: time,
            height: `${100}%`
        }
    );
    timeLine?.to(lines[4].value,
        {
            duration: time,
            width: `${100}%`
        }, '<'
    );
};
onMounted(() => {
    lines.forEach((line, index) => {
        gsap?.set(line.value, {
            [properties[index]]: '0%'
        });
    });
});
onUnmounted(() => {
    masks = [];
    lines = [];
});
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

/* ----------------------- tablet ------------------------------ */
@include tablet {

  .home-s6-disclaimer-w {
    .disclaimer-w {
      max-width: em(810);
    }
  }


}

/* ----------------------- horizmobile ------------------------------ */
@include horizmobile {

}

/* ----------------------- mobile ------------------------------ */
@include mobile {

}
</style>
