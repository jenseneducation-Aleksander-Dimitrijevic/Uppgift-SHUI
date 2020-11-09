<template>
  <div class="spinner" :class="{ spin: isLoading }"></div>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  name: "AppSpinner",
  setup(_, { root }) {
    const isLoading = computed(() => root.$store.state.isLoading);
    return { isLoading };
  },
};
</script>

<style lang="scss" scoped>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  &.spin {
    &::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50px;
      height: 50px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border-top: 2px solid #07d;
      border-right: 2px solid transparent;
      animation: spinner 0.6s linear infinite;
    }
  }
}
</style>
