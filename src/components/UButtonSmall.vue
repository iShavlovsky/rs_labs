<template>
  <button type="button"
          class="main-small-button"
          :disabled="props.disabled"
  >
    <span class="mono-m"> {{ props.title }} </span>
  </button>
</template>

<script setup lang="ts">
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
.main-small-button{
  background-color: $c-primary-accent;
  font-size: em(16);
  color: $c-gray-100;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: em(8);
  border-width: em(0);
  border-radius: em(2);
  cursor: pointer;
}
</style>
