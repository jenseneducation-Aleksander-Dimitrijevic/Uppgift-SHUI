<template>
  <article class="streams" :class="{ show: isOpen }">
    <h1>Streams</h1>
  </article>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  setup(_, { root }) {
    const isOpen = computed(() => root.$store.state.isOpen);
    return { isOpen };
  },
};
</script>

<style lang="scss" scoped>
.streams {
  top: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  width: 100%;
  color: #fff;
  height: 100vh;
  position: fixed;
  padding: 6rem 1rem;
  background: $orange;
  transform: translate3d(0, -100%, 0);
  &.show {
    opacity: 1;
    transition: all 0.3s ease;
    transform: translate3d(0, 0, 0);
  }
}
</style>
