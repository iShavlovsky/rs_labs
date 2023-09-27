<template>
  <button :disabled="props.disabled"
          class="main-big-button accent-big-btn"
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

</style>
