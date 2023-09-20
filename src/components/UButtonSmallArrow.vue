<template>
  <button type="button"
          class="small-arrow-button"
          :disabled="props.disabled"
  >
    <span class="mono-m"> {{ props.title }} </span>
    
    <span class="ico-16px-w">
      <USvgIcon name="btnArrow" />
    </span>
    
  </button>
</template>

<script setup lang="ts">
import USvgIcon from "@components/USvgIcon/USvgIcon.vue";

const props = defineProps({
  title:{
    type: String,
    default: 'Button1'
  },
  disabled:{
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.small-arrow-button{
  background-color: transparent;
	font-size: em(16);
	color: $c-gray-100;
	display: flex;
  flex-direction: row;
  gap: em(4);
	border-width: em(0);
	cursor: pointer;
}

.ico-16px-w{
  width: em(16);
  height: em(16);
}
</style>
