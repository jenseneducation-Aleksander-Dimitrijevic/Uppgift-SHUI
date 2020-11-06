<template>
  <div v-if="user">
    <Settings />
    <add-stream />
    <back-drop />
    <app-content>
      <h1>Hello there, {{ user.username }}</h1>
      <h2>Dina streams</h2>
      <app-list :streams="streams" />
      <button class="btn-primary" @click="toggleForm">Add streams</button>
    </app-content>
  </div>
</template>

<script>
import AppContent from "@/components/main/AppContent.vue";
import Settings from "@/components/main/Settings.vue";
import AddStream from "@/components/main/AddStream.vue";
import BackDrop from "@/components/layout/BackDrop.vue";
import useFetchStreams from "@/use/useFetchStreams";
import AppList from "@/components/ui/AppList.vue";
export default {
  name: "Dashboard",
  components: {
    AppContent,
    Settings,
    AddStream,
    BackDrop,
    AppList,
  },
  setup(_, { root }) {
    const toggleForm = () => root.$store.commit("TOGGLE_ADD_STREAM");
    const { user, streams } = useFetchStreams();
    return { user, toggleForm, streams };
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
  img {
    display: none;
  }
  /deep/ ul {
    margin-top: 1rem;
  }
}
</style>
