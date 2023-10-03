<template>
  <button :disabled="props.disabled"
          class="small-arrow-button"
          type="button"
  >
    <span class="mono-m"> {{ props.title }} </span>

    <span class="ico-16px-w">
      <USvgIcon name="arrows.arrowBtn" />
    </span>
  </button>
</template>

<script lang="ts" setup>
import USvgIcon from '@components/USvgIcon/USvgIcon.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Button1'
    },
    disabled: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss">
.small-arrow-button {
  background-color: transparent;
  font-size: em(16);
  color: $c-gray-100;
  display: flex;
  flex-direction: row;
  gap: em(4);
  border-width: em(0);
  cursor: pointer;
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
