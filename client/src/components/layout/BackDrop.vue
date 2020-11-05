<template>
  <div
    class="backdrop"
    :class="{ show: isForm }"
    @click="$store.commit('TOGGLE_ADD_STREAM')"
  ></div>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  name: "BackDrop",
  setup(_, { root }) {
    const isForm = computed(() => root.$store.state.isForm);
    return { isForm };
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  transition: all 0.3s ease;
  &.show {
    top: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(#000, 0.8);
  }
}
</style>
