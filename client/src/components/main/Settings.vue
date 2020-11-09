<template>
  <article class="streams" :class="{ show: isOpen }">
    <h1>Streams</h1>
    <p>Hottest streams to follow!</p>
    <app-list :streams="streams" @select-tag="addSubscription" />
    <ul class="tag-list" v-show="selectedTags.length">
      <li v-for="(tag, idx) in selectedTags" :key="idx">
        <span>{{ tag }}</span>
      </li>
    </ul>
    <button class="btn-primary" v-show="selectedTags.length" @click="subscribe">
      Subscribe
    </button>
  </article>
</template>

<script>
import { computed, ref } from "@vue/composition-api";
import useFetchStreams from "@/use/useFetchStreams";
import AppList from "@/components/ui/AppList.vue";
import axios from "axios";
export default {
  components: {
    AppList,
  },
  setup(_, { root }) {
    const selectedTags = ref([]);
    const isOpen = computed(() => root.$store.state.isOpen);
    const { streams } = useFetchStreams();

    const addSubscription = async (tag) => selectedTags.value.push(tag);
    const subscribe = async () => {
      await axios.post("/api/subscriptions", selectedTags.value);
      location.reload();
    };
    return { isOpen, streams, addSubscription, selectedTags, subscribe };
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

  .tag-list {
    gap: 1rem;
    width: 100%;
    display: grid;
    list-style: none;
    padding-top: 1rem;
    border-top: 1px solid #fff;
    grid-template-columns: repeat(3, 1fr);

    li {
      padding: 5px;
      border: 1px solid #fff;
      background: rgba(#fff, 0.3);
    }
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
        border: 1px solid #ccc;
        background: rgba(#fff, 0.1);
        justify-content: space-between;

        .remove-tag {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
