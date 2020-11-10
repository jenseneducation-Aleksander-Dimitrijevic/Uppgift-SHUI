<template>
  <div v-if="user">
    <Settings />
    <add-stream />
    <app-content>
      <h1>Hello there, {{ user.username }}</h1>
      <p v-if="!streams.length">
        You dont follow any channels
      </p>
      <h2 v-else>Dina streams</h2>
      <app-list :streams="streams" />
      <button class="btn-primary" @click="addStream()">Add streams</button>
    </app-content>
  </div>
</template>

<script>
import AppContent from "@/components/main/AppContent.vue";
import Settings from "@/components/main/Settings.vue";
import AddStream from "@/components/main/AddStream.vue";
import useFetchStreams from "@/use/useFetchStreams";
import AppList from "@/components/ui/AppList.vue";
import axios from "axios";
import { computed, onMounted } from "@vue/composition-api";
export default {
  name: "Dashboard",
  components: {
    AppContent,
    Settings,
    AddStream,
    AppList,
  },
  setup(_, { root }) {
    const addStream = () => {
      root.$store.commit("TOGGLE_SETTINGS");
    };
    const { user } = useFetchStreams();
    const streams = computed(() => root.$store.state.channels);
    onMounted(async () => {
      const RESPONSE = await axios.get("/api/dashboard");
      root.$store.commit("SET_SUBSCRIPTION", RESPONSE.data);
    });
    return { user, streams, addStream };
  },
};
</script>

<style lang="scss" scoped>
/deep/ .main {
  h2 {
    color: #fff;
    font-size: 1.3rem;
    margin: 2rem 0 0 0;
  }
  p {
    color: #fff;
    margin-top: 1rem;
    text-align: center;
  }
  img {
    display: none;
  }
  /deep/ ul {
    margin-top: 1rem;

    p {
      color: #333;
      margin-top: 0;
      text-align: left;

      .remove-tag {
        display: none;
      }
    }
  }
}
</style>
