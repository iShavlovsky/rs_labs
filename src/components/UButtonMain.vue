<template>
  <button type="button"
          class="main-big-button accent-big-btn"
          :disabled="props.disabled"
  >
    <span class="mono-m"> {{ props.title }} </span>

    <span class="ico-16px-w">
      <USvgIcon name="btnArrow" />
    </span>
  </button>
</template>

<script setup lang="ts">
import USvgIcon from '@components/USvgIcon/USvgIcon.vue';

const props = defineProps({
    title:{
        type: String,
        default: 'Button1'
    },
    disabled:{
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss">

</style>
