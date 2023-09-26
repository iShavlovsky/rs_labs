<template>
  <button type="button"
          class="main-big-button"
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
.main-big-button{
	background-color: $c-primary-accent;
	font-size: em(16);
	color: $c-gray-100;
	display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
	padding: em(32) em(24) em(32) em(24);
	border-width: em(0);
  border-radius: em(2);
	cursor: pointer;
}

.ico-16px-w{
  width: em(16);
  height: em(16);
}
</style>
