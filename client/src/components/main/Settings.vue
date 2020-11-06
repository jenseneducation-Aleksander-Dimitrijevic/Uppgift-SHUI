<template>
  <article class="streams" :class="{ show: isOpen }">
    <h1>Streams</h1>
    <p>Hetaste streams just nu!</p>
    <app-list :streams="streams" />
  </article>
</template>

<script>
import { computed } from "@vue/composition-api";
import useFetchStreams from "@/use/useFetchStreams";
import AppList from "@/components/ui/AppList.vue";
export default {
  components: {
    AppList,
  },
  setup(_, { root }) {
    const isOpen = computed(() => root.$store.state.isOpen);
    const { streams } = useFetchStreams();
    return { isOpen, streams };
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
  overflow: auto;
  position: fixed;
  padding: 5rem 2rem;
  background: $orange;
  transform: translate3d(0, -100%, 0);
  &.show {
    opacity: 1;
    transition: all 0.3s ease;
    transform: translate3d(0, 0, 0);
  }

  /deep/ ul {
    height: auto;
    .list-item {
      margin: 0;
      padding: 0;
      background: none;

      .date,
      .content {
        display: none;
      }

      .tags {
        display: flex;
        margin: 1rem 0;
        padding: 10px 15px;
        border-radius: 3px;
        align-items: center;
        letter-spacing: 2px;
        border: 1px solid #fff;
        background: rgba(#fff, 0.2);
        justify-content: space-between;

        .remove-tag {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
