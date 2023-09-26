<template>
  <section>
    <div class="container">
      <h2 class="mono-m">
        Backed by {{ onHover }}
      </h2>
      <div class="logos-stripe-w mt-50"
           @mouseenter="handleMouseEnter"
           @mouseleave="handleMouseLeave"
      >
        <Swiper :autoplay="{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }"
                :centered-slides="false"
                :free-mode="true"
                :grab-cursor="true"
                :loop="true"
                :modules="modules"
                :slides-per-view="'auto'"
                :speed="2000"
                :watch-slides-progress="true"
                class="swiper-stripe"
                @swiper="onSwiperStripe"
        >
          <SwiperSlide v-for="(el, i) in items"
                       :key="i"
          >
            <figure class="logo-w">
              <svg fill="none"
                   height="100%"
                   viewBox="0 0 147 20"
                   width="100%"
                   xmlns="http://www.w3.org/2000/svg"
              >
                <path clip-rule="evenodd"
                      d="M76.1792 3.58144C77.1319 3.58144 77.8983 2.78317 77.8983 1.79072C77.8983 0.798271 77.1319 0 76.1792 0C75.2264 0 74.46 0.798271 74.46 1.79072C74.4808 2.78317 75.2471 3.58144 76.1792 3.58144ZM74.8536 15.5124H77.5462V5.26429H74.8536V15.5124ZM69.717 14.3689C69.2613 15.0378 68.2464 15.7497 66.8794 15.7497C64.2696 15.7497 62.2606 13.2686 62.2606 10.3776C62.2606 7.48652 64.2696 5.02697 66.8794 5.02697C68.2464 5.02697 69.2613 5.76052 69.717 6.40777V0.129458H72.4095V15.5124H69.717V14.3689ZM64.9739 10.3991C64.9739 12.0173 65.968 13.1823 67.4593 13.1823C68.9506 13.1823 69.9448 12.0173 69.9448 10.3991C69.9448 8.78102 68.9506 7.61597 67.4593 7.61597C65.968 7.61597 64.9739 8.78102 64.9739 10.3991ZM39.9535 15.5124H37.0746L37.0953 3.77563H33.3671V0.949304H43.7232V3.77563H39.9535V15.5124ZM46.4157 15.5124H43.7232V5.2643H46.4157V6.904C46.8093 5.84683 47.7828 5.13485 48.8598 5.13485C49.1705 5.13485 49.4812 5.178 49.7711 5.2643V8.1122C49.3776 7.96118 48.9633 7.89645 48.5491 7.89645C47.2649 7.89645 46.4157 8.91047 46.4157 10.6149V15.5124ZM54.9285 15.7497C56.2955 15.7497 57.3104 15.0378 57.766 14.3689V15.5124H60.4586V5.2643H57.766V6.40777C57.3104 5.76052 56.2955 5.02698 54.9285 5.02698C52.3187 5.02698 50.3097 7.48653 50.3097 10.3776C50.3097 13.2686 52.3187 15.7497 54.9285 15.7497ZM55.5084 13.1823C54.0171 13.1823 53.0229 12.0173 53.0229 10.3991C53.0229 8.78102 54.0171 7.61597 55.5084 7.61597C56.9997 7.61597 57.9939 8.78102 57.9939 10.3991C57.9939 12.0173 56.9997 13.1823 55.5084 13.1823ZM82.6206 15.5124H79.928L79.9073 5.28587H82.5999V6.45092C83.1384 5.63107 84.1326 5.04855 85.4168 5.04855C87.8194 5.04855 89.2278 6.83927 89.2278 9.51457V15.5124H86.5352V9.96764C86.5352 8.50054 85.9139 7.59439 84.7954 7.59439C83.5527 7.59439 82.6206 8.54369 82.6206 10.507V15.5124ZM96.1043 12.8587C94.7166 12.8803 93.5774 11.7152 93.5567 10.2481C93.536 8.8026 94.6544 7.61597 96.0629 7.5944C97.4506 7.57282 98.5897 8.73787 98.6105 10.205V10.2265C98.6519 11.6505 97.5749 12.8155 96.2079 12.8587H96.1043ZM95.7936 20C98.7969 20 101.096 18.4035 101.096 14.7141V5.2643H98.4033V6.40777C97.8648 5.6095 96.8085 5.02698 95.5451 5.02698C92.956 5.02698 90.9055 7.31392 90.9055 10.205C90.9055 13.096 92.9767 15.383 95.5451 15.383C96.8085 15.383 97.8648 14.7789 98.4033 14.0237V14.7141C98.4033 16.3538 97.3677 17.5189 95.7729 17.5189C94.6337 17.5405 93.5153 17.0658 92.7075 16.246L91.2369 18.3387C92.3347 19.5038 94.0745 20 95.7936 20ZM109.339 15.5124H106.792L101.034 0.949304H104.12L108.076 11.068L111.97 0.949304H115.118L109.339 15.5124ZM117.604 3.58144C118.556 3.58144 119.323 2.78317 119.323 1.79072C119.323 0.798271 118.556 0 117.604 0C116.651 0 115.884 0.798271 115.884 1.79072C115.884 2.78317 116.651 3.58144 117.604 3.58144ZM118.95 15.5124V5.26429H116.257V15.5124H118.95ZM130.486 13.4628C129.575 14.8436 128.001 15.7497 125.93 15.7497C123.009 15.7497 120.71 13.6354 120.69 10.3991C120.69 7.35707 122.864 5.04855 125.868 5.04855C128.457 5.04855 130.714 6.75297 130.714 10.0971C130.735 10.4207 130.714 10.7443 130.673 11.068H123.32C123.465 12.4488 124.625 13.2039 125.93 13.2039C127.173 13.2039 128.022 12.6214 128.477 11.9094L130.486 13.4628ZM125.806 7.35707C124.811 7.35707 123.672 7.89644 123.424 9.14779H128.022C127.794 7.91802 126.8 7.35707 125.806 7.35707ZM140.843 15.5124H143.514L146.766 5.2643H143.867L142.023 11.8231L140.014 5.2643H137.943L135.954 11.8231L134.09 5.2643H131.211L134.484 15.5124H137.156L138.978 9.68716L140.843 15.5124ZM5.57133 15.4908H10.9979V0.949304H0.124023V6.60195H5.57133V15.4908ZM21.8718 15.4908H15.6582L21.4783 0.949304H27.6919L21.8718 15.4908ZM18.765 4.16398C18.765 5.95131 17.374 7.40022 15.6582 7.40022C13.9423 7.40022 12.5513 5.95131 12.5513 4.16398C12.5513 2.37665 13.9423 0.927734 15.6582 0.927734C17.374 0.927734 18.765 2.37665 18.765 4.16398Z"
                      fill="#343339"
                      fill-rule="evenodd"
                />
              </svg>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Parallax } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/autoplay';


const swiperStripeInstance = ref();
const onHover = ref(false);
const modules = [Autoplay, Parallax];

const onSwiperStripe = (Swiper: SwiperType): void => {
    swiperStripeInstance.value = Swiper;
    swiperStripeInstance.value.autoplay.start();
};
const handleMouseEnter = () => {
    onHover.value = true;
    if (swiperStripeInstance.value) swiperStripeInstance.value.autoplay.start();
    console.log(swiperStripeInstance.value);
};
const handleMouseLeave = () => {
    onHover.value = false;
    if (swiperStripeInstance.value) swiperStripeInstance.value.autoplay.stop();
};

// mySwiper.on('resize', function() {
//   mySwiper.autoplay.stop();
//   mySwiper.autoplay.start();
// });


const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];
</script>

<style lang="scss">
.logo-w {
  height: em(24);
  margin-right: em(80);
}

.logos-stripe-w {
  width: em(1440);
  max-width: 99vw;
  margin-left: em(-48);
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.swiper-stripe {
  width: 100%;
  height: auto;
}

//.swiper-wrapper {
//  display: flex;
//  align-items: center;
//  transition-timing-function: linear !important;
//  position: relative;
//  user-select: none;
//  -webkit-touch-callout: none;
//  backface-visibility: hidden;
//}

.swiper-slide {
  width: auto !important;
}

</style>

