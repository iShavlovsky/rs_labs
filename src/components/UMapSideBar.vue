<template>
  <div class="map-side-bar">
    <div class="chapters-and-block-name-w">
      <div class="map-chapters-w">
        <p class="mono-s">
          Chapter {{ isActive.chapter }}
        </p>
        <Swiper :allow-touch-move="false"
                :auto-height="false"
                :centered-slides="false"
                :coverflow-effect="{
                  rotate: 20,
                  stretch:0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }"
                :direction="'vertical'"
                :effect="'coverflow'"
                :grab-cursor="false"
                :observer="true"
                :resize-observer="true"
                :round-lengths="true"
                :simulated-touch="false"
                :slides-offset-after="0"
                :slides-offset-before="0"
                :slides-per-view="1"
                :space-between="0"
                :update-on-window-resize="true"
                class="swiper-map"
                @swiper="onSwiper"
        >
          <SwiperSlide v-for="(el, i) in positions"
                       :key="i"
          >
            <p :class="['chapters', {
                 'active': el.active,
                 'next-1': i === activeIndex+1 ,
                 'next-2': i === activeIndex+2,
                 'next-3': i === activeIndex+3,
               }]"
               class="mono-s"
            >
              {{ el.title }}
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>


    <div class="map-wrapper">
      <svg fill="transparent"
           height="100%"
           viewBox="0 0 50 82"
           width="100%"
           xmlns="http://www.w3.org/2000/svg"
      >
        <path v-for="(line, i) in positions"
              :key="i"
              :d="line.line"
              class="map-line"
              stroke="#343339"
              stroke-width="0.5"
        />

        <rect v-for="(rect, i) in positions"
              :key="i"
              :class="['map-rects', {'active': rect.active, 'hover': rect.hover }]"
              :x="rect.rectMap.x"
              :y="rect.rectMap.y"
              class="map-rects"
              fill="transparent"
              height="16"
              stroke="#97969C"
              stroke-width="0.5"
              width="16"

              @click="clickMap(i)"
              @mouseleave="hoverMap(i, false)"
              @mouseover="hoverMap(i, true)"
        />
        <g v-for="(rect, i) in positions"
           :key="i"
           :class="['map-rects-selected', {'active': rect.active, 'hover': rect.hover }]"
           color="white"
        >
          <path :d="`
          ${rect.path.a}
          ${rect.path.b}
          ${rect.path.c}
          ${rect.path.d}
          `"
                class="map-line"
                stroke="currentColor"
          />
          <rect :transform="`rotate(90 ${rect.rectSelected.x} ${rect.rectSelected.y})`"
                :x="rect.rectSelected.x"
                :y="rect.rectSelected.y"
                class="map-line"
                fill="currentColor"
                height="4"
                width="4"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ComputedRef, reactive, ref } from 'vue';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// import 'swiper/css';

interface Rect {
    chapter: number;
    title: string;
    line: string;
    rectMap: {
        x: number,
        y: number
    };
    rectSelected: {
        x: number,
        y: number
    };
    path: {
        a: string;
        b: string;
        c: string;
        d: string;
    };
    active: boolean;
    hover: boolean;
}

const swiperInstance = ref();

function onSwiper(swiper: SwiperType) {
    swiperInstance.value = swiper;
}

const positions = reactive<Rect[]>([
    {
        chapter: 1,
        title: 'Revenue Share Labs',
        line: 'M9 1V33',
        rectMap: { x: 1, y: 1 },
        rectSelected: { x: 11, y: 7 },
        path: {
            a: 'M6.33333 1H1V6.33333',
            b: 'M6.33333 17H1V11.6667',
            c: 'M11.6667 1H17V6.33333',
            d: 'M11.6667 17H17V11.6667'
        },
        active: true,
        hover: false
    },
    {
        chapter: 2,
        title: 'mission',
        line: 'M41 17V49',
        rectMap: { x: 1, y: 17 },
        rectSelected: { x: 11, y: 23 },
        path: {
            a: 'M6.33333 17H1V22.33333',
            b: 'M6.33333 33H1V27.6667',
            c: 'M11.6667 17H17V22.33333',
            d: 'M11.6667 33H17V27.6667'
        },
        active: false,
        hover: false
    },
    {
        chapter: 3,
        title: 'about',
        line: 'M49 25L0.999999 25',
        rectMap: { x: 17, y: 17 },
        rectSelected: { x: 27, y: 23 },
        path: {
            a: 'M22.3333 17H17V22.3333',
            b: 'M22.3333 33H17V27.6667',
            c: 'M27.6667 17H33V22.3333',
            d: 'M27.6667 33H33V27.6667'
        },
        active: false,
        hover: false
    },
    {
        chapter: 4,
        title: 'technology',
        line: 'M49 41H17',
        rectMap: { x: 33, y: 17 },
        rectSelected: { x: 43, y: 23 },
        path: {
            a: 'M38.3333 17H33V22.3333',
            b: 'M38.3333 33H33V27.6667',
            c: 'M43.6667 17H49V22.3333',
            d: 'M43.6667 33H49V27.6667'
        },
        active: false,
        hover: false
    },
    {
        chapter: 5,
        title: 'team',
        line: 'M33 57H17',
        rectMap: { x: 17, y: 33 },
        rectSelected: { x: 27, y: 39 },
        path: {
            a: 'M22.3333 33H17V38.3333',
            b: 'M22.3333 49H17V43.6667',
            c: 'M27.6667 33H33V38.3333',
            d: 'M27.6667 49H33V43.6667'
        },
        active: false,
        hover: false
    },
    {
        chapter: 6,
        title: 'knowledge base',
        line: 'M33 73H17',
        rectMap: { x: 33, y: 33 },
        rectSelected: { x: 43, y: 39 },
        path: {
            a: 'M38.3333 33H33V38.3333',
            b: 'M38.3333 49H33V43.6667',
            c: 'M43.6667 33H49V38.3333',
            d: 'M43.6667 49H49V43.6667'
        },
        active: false,
        hover: false
    },
    {
        chapter: 7,
        title: 'mission2',
        line: 'M25 81L25 17',
        rectMap: { x: 17, y: 49 },
        rectSelected: { x: 27, y: 55 },
        path: {
            a: 'M22.3333 49H17V54.3333',
            b: 'M22.3333 65H17V59.6667',
            c: 'M27.6667 49H33V54.3333',
            d: 'M27.6667 65H33V59.6667'
        },
        active: false,
        hover: false
    },
    {
        chapter: 8,
        title: 'mission3',
        line: 'M17 9L0.999999 9',
        rectMap: { x: 17, y: 65 },
        rectSelected: { x: 27, y: 71 },
        path: {
            a: 'M22.3333 65H17V70.3333',
            b: 'M22.3333 81H17V75.6667',
            c: 'M27.6667 65H33V70.3333',
            d: 'M27.6667 81H33V75.6667'
        },
        active: false,
        hover: false
    }
]);

const isActive: ComputedRef<Rect> = computed(() => {
    return positions.find(el => el.active === true)!;
});

const activeIndex: ComputedRef<number> = computed(() => {
    return positions.findIndex(el => el.active === true);
});

function hoverMap(index: number, bool: boolean) {
    positions[index].hover = bool;
}

function clickMap(index: number) {
    positions.forEach(el => {
        el.active = false;
    });
    positions[index].active = true;
    swiperInstance.value.slideTo(index, 300);
}

</script>

<style lang="scss">
//@import 'swiper/css';

.map-side-bar {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: em(40);
  left: auto;
  top: auto;
  width: em(153);
  right: 0%;
  bottom: em(94);
}

.chapters-and-block-name-w {
  display: flex;
  flex-direction: column;
  gap: em(16);
}

.map-chapters-w {
  width: em(145);
  height: em(86);
  overflow: hidden;
}

.swiper-map {
  width: 100%;
  height: em(16);
  margin-top: em(16);
}

.chapters {
  opacity: 0;
  transition: opacity 0.25s $var-transition-timing,
  transform 0.3s $var-transition-timing;

  &.active {
    transform: translateY(-100%);
    opacity: 1;
  }

  &.next-1 {
    opacity: 0.6;
  }

  &.next-2 {
    opacity: 0.3;
  }

  &.next-3 {
    opacity: 0.1;
  }
}

.map-line {
  pointer-events: none;
}

.map-rects,
.map-rects-selected {
  cursor: pointer;
  transition: opacity 0.3s $var-transition-timing,
  visibility 0.3s $var-transition-timing;


  &-selected {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;

    &.active,
    &.hover {
      visibility: visible;
      pointer-events: auto;
    }

    &.active {
      opacity: 1;
    }

    &.hover {
      opacity: .7;
    }
  }
}

.map-wrapper {
  width: em(48);
}
</style>
