<template>
  <div class="box">
    <transition-group name="item"
                      tag="div"
    >
      <div v-for="alert in alertStore.alerts.value"
           :key="alert.id"
           class="item"
      >
        {{ alert.text }}
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import useStore from '@/composables/useStore';

const { alerts } = useStore();
const alertStore = computed(() => alerts);

</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  padding: 10px 10px 0 0;
}

.item {
  margin: 0 0 10px;
  background: #fd0000;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 15px;
}

.item-enter-active {
  animation: fade-in 0.5s;
}

.item-leave-active {
  animation: fade-out 0.5s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
