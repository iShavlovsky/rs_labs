<template>
  <div class="map-arrow-nav-w">
    <div class="container">
      <div class="map-side-bar">
        <div class="chapters-and-block-name-w">
          <div class="map-chapters-w">
            <p class="mono-s">
              Chapter {{ isActive.chapter }}
            </p>
            <Swiper :allow-touch-move="false"
                    :auto-height="false"
                    :centered-slides="false"
                    :direction="'vertical'"
                    :grab-cursor="false"
                    :observer="true"
                    :resize-observer="true"
                    :round-lengths="true"
                    :simulated-touch="false"
                    :slides-per-view="1"
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
                   aria-hidden="true"
                   class="mono-s"
                   role="presentation"
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

                  @click="selectedMap(i, true)"
                  @mouseleave="hoverMap(i, false)"
                  @mouseover="hoverMap(i, true)"
            />
            <g v-for="(rect, i) in positions"
               :key="i"
               :class="['map-rects-selected', {'active': rect.active, 'hover': rect.hover }]"
               color="white"
            >
              <path :d="`${rect.path.a}${rect.path.b}${rect.path.c}${rect.path.d}`"
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

      <div class="grid-12col-w">
        <div class="left-arrows-w w-1col-8gap">
          <div class="map-arrow-btn">
            <transition name="fade">
              <USvgIcon v-show="Object.keys(isActive.arrows).includes('up-left')"
                        :style="{transform: `rotate(-90deg)`}"
                        name="arrows.arrowBtn"
                        @click="clickArrow('up-left')"
                        @mouseleave="hoverArrow('up-left', false)"
                        @mouseover="hoverArrow('up-left', true)"
              />
            </transition>
          </div>

          <div class="bot-arrows-w">
            <div class="map-arrow-btn">
              <transition name="fade">
                <USvgIcon v-show="Object.keys(isActive.arrows).includes('down-left')"
                          :style="{transform: `rotate(180deg)`}"
                          name="arrows.arrowBtn"
                          @click="clickArrow('down-left')"
                          @mouseleave="hoverArrow('down-left', false)"
                          @mouseover="hoverArrow('down-left', true)"
                />
              </transition>
            </div>

            <div class="map-arrow-btn">
              <transition name="fade">
                <USvgIcon v-show="Object.keys(isActive.arrows).includes('left')"
                          :style="{transform: `rotate(-135deg)`}"
                          name="arrows.arrowBtn"
                          @click="clickArrow('left')"
                          @mouseleave="hoverArrow('left', false)"
                          @mouseover="hoverArrow('left', true)"
                />
              </transition>
            </div>
          </div>
        </div>

        <div class="scroll-indicator-holder w-1col-8gap">
          <p class="mono-s">
            Scroll for usual behaviour
          </p>

          <div class="scroll-indicator-w">
            <figure :style="progressStyles"
                    class="scroll-line-indicator"
            ></figure>

            <figure class="indicator-bg"></figure>
          </div>
        </div>

        <div class="mid-arrows-w bot-arrows-w">
          <div class="map-arrow-btn">
            <transition name="fade">
              <USvgIcon v-show="Object.keys(isActive.arrows).includes('up')"
                        :style="{transform: `rotate(-45deg)`}"
                        name="arrows.arrowBtn"
                        @click="clickArrow('up')"
                        @mouseleave="hoverArrow('up', false)"
                        @mouseover="hoverArrow('up', true)"
              />
            </transition>
          </div>
          <div class="map-arrow-btn">
            <transition name="fade">
              <USvgIcon v-show="Object.keys(isActive.arrows).includes('down')"
                        :style="{transform: `rotate(135deg)`}"
                        name="arrows.arrowBtn"
                        @click="clickArrow('down')"
                        @mouseleave="hoverArrow('down', false)"
                        @mouseover="hoverArrow('down', true)"
              />
            </transition>
          </div>
        </div>

        <div class="right-arrows-w w-1col-8gap">
          <div class="map-arrow-btn">
            <transition name="fade">
              <USvgIcon v-show="Object.keys(isActive.arrows).includes('up-right')"
                        :style="{transform: `rotate(0)`}"
                        name="arrows.arrowBtn"
                        @click="clickArrow('up-right')"
                        @mouseleave="hoverArrow('up-right', false)"
                        @mouseover="hoverArrow('up-right', true)"
              />
            </transition>
          </div>

          <div class="bot-arrows-w">
            <div class="map-arrow-btn">
              <transition name="fade">
                <USvgIcon v-show="Object.keys(isActive.arrows).includes('right')"
                          :style="{transform: `rotate(45deg)`}"
                          name="arrows.arrowBtn"
                          @click="clickArrow('right')"
                          @mouseleave="hoverArrow('right', false)"
                          @mouseover="hoverArrow('right', true)"
                />
              </transition>
            </div>

            <div class="map-arrow-btn">
              <transition name="fade">
                <USvgIcon v-show="Object.keys(isActive.arrows).includes('down-right')"
                          :style="{transform: `rotate(90deg)`}"
                          name="arrows.arrowBtn"
                          @click="clickArrow('down-right')"
                          @mouseleave="hoverArrow('down-right', false)"
                          @mouseover="hoverArrow('down-right', true)"
                />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
    computed,
    ComputedRef,
    CSSProperties,
    onMounted,
    onUnmounted,
    reactive,
    Ref,
    ref,
    watch
} from 'vue';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import useScrollPosition from '@composables/useScrollPosition';
import USvgIcon from '@/components/USvgIcon/USvgIcon.vue';
import { arrowsDirection, Positions, sectionsName } from './UMapSideBar.types';

const props = defineProps<{
    currentSection: number | null;
}>();

const swiperInstance: Ref<SwiperType | null> = ref(null);

const onSwiper = (swiper: SwiperType): void => {
    swiperInstance.value = swiper;
};

const positions = reactive<Positions[]>([
    {
        chapter: 1,
        title: sectionsName.S1,
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
        hover: false,
        arrows: {
            'down': 2,
            'down-right': 3
        }
    },
    {
        chapter: 2,
        title: sectionsName.S2,
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
        hover: false,
        arrows: {
            'up': 1,
            'right': 3,
            'down-right': 5
        }
    },
    {
        chapter: 3,
        title: sectionsName.S3,
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
        hover: false,
        arrows: {
            'down': 5,
            'left': 2,
            'right': 4,
            'up-left': 1,
            'down-right': 6
        }
    },
    {
        chapter: 4,
        title: sectionsName.S4,
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
        hover: false,
        arrows: {
            'down': 6,
            'left': 3,
            'down-left': 5
        }
    },
    {
        chapter: 5,
        title: sectionsName.S5,
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
        hover: false,
        arrows: {
            'up': 3,
            'down': 7,
            'right': 6,
            'up-left': 2,
            'up-right': 4
        }
    },
    {
        chapter: 6,
        title: sectionsName.S6,
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
        hover: false,
        arrows: {
            'up': 4,
            'left': 5,
            'up-left': 3,
            'down-left': 7
        }
    },
    {
        chapter: 7,
        title: sectionsName.S7,
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
        hover: false,
        arrows: {
            'up': 5,
            'down': 8
        }
    },
    {
        chapter: 8,
        title: sectionsName.S8,
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
        hover: false,
        arrows: {
            'up': 7
        }
    }
]);

const isActive: ComputedRef<Positions> = computed(() => {
    return positions.find(el => el.active === true)!;
});

const activeIndex: ComputedRef<number> = computed(() => {
    return positions.findIndex(el => el.active === true);
});

const body: Ref<HTMLElement | undefined> = ref(undefined);
const scrollPage = useScrollPosition(body, 12, false);

const progressStyles: ComputedRef<CSSProperties> = computed(() => {
    return {
        width: (scrollPage.value * 100) + '%'
    };
});

const emit = defineEmits<{
    (
        event: 'map-position',
        value: number,
    ): void;
}>();

function hoverArrow(direction: arrowsDirection, bool: boolean) {
    const value = isActive.value.arrows[direction];
    if (value !== undefined) {
        hoverMap(value - 1, bool);
    } else {
        return;
    }
}

function clickArrow(direction: arrowsDirection) {
    const value = isActive.value.arrows[direction];
    if (value !== undefined) {
        selectedMap(value - 1, true);
        hoverMap(value - 1, false);
    } else {
        return;
    }
}

function hoverMap(index: number, bool: boolean) {
    positions[index].hover = bool;
}

function selectedMap(index: number, eventEmit: boolean) {
    positions.forEach(el => {
        el.active = false;
    });
    positions[index].active = true;
    swiperInstance.value?.slideTo(index, 300);
    if (eventEmit) emit('map-position', isActive.value.chapter);
}

watch(() => props.currentSection, (newSection: number | null) => {
    if (newSection !== null) {
        selectedMap(newSection, false);
    }
});
onMounted(() => {
    body.value = document.documentElement || document.body;
});
onUnmounted(() => {
    body.value = undefined;
});
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s $var-transition-timing,
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.map-arrow-nav-w {
  position: fixed;
  bottom: em(24);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 10;
}

.map-arrow-btn {
  width: em(16);
  height: em(16);
  cursor: pointer;
  color: $c-gray-60;
  transition: color 0.25s $var-transition-timing,
}

.map-arrow-btn:hover {
  color: $c-gray-100;
}

.bot-arrows-w {
  display: flex;
  flex-direction: row;
  gap: em(16);
  padding-bottom: em(6);
}

.mid-arrows-w {
  align-self: flex-end;
  grid-column-start: 9;
}

.right-arrows-w {
  justify-items: end;
  justify-self: end;
  grid-column-start: 12;
}

.scroll-indicator-holder {
  align-self: flex-end;
  grid-column-start: 4;
  grid-column-end: 6;
}

.scroll-indicator-w {
  display: flex;
  flex-direction: row;
  width: 100%;
}

// толкаем её
.scroll-line-indicator {
  height: em(1);
  background-color: $c-gray-100;
  width: 0;
  margin-right: em(4);
  transition: width 0.25s $var-transition-timing,
}

.indicator-bg {
  height: em(1);
  background-color: $c-gray-100;
  opacity: 0.2;
  flex: 1 1 0;
}

// right map
.map-side-bar {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: em(40);
  inset: auto 0 em(104) auto;
  width: em(153);
}

.chapters-and-block-name-w {
  display: flex;
  flex-direction: column;
  gap: em(16);
}

.map-chapters-w {
  width: em(145);
  height: em(90);
  overflow: hidden;
}

.swiper-map {
  width: 100%;
  height: em(16);
  margin-top: em(16);
  overflow: visible;
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
    opacity: 0.7;
  }

  &.next-2 {
    opacity: 0.4;
  }

  &.next-3 {
    opacity: 0.2;
  }
}

.map-line {
  pointer-events: none;
}

.map-rects,
.map-rects-selected {
  cursor: pointer;
  transition: opacity 0.3s $var-transition-timing;

  &-selected {
    opacity: 0;
    pointer-events: none;

    &.active,
    &.hover {
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

.g {
  color: #7B0404;
}

</style>
