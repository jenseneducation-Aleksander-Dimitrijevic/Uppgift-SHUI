<template>
  <div v-if="user">
    <Settings />
    <add-stream />
    <back-drop />
    <app-content>
      <h1>Hello there, {{ user.username }}</h1>
      <button class="btn-primary" @click="toggleForm">Add streams</button>
    </app-content>
  </div>
</template>

<script>
import axios from "axios";
import AppContent from "@/components/main/AppContent.vue";
import Settings from "@/components/main/Settings.vue";
import AddStream from "@/components/main/AddStream.vue";
import BackDrop from "@/components/layout/BackDrop.vue";
import { ref, onMounted } from "@vue/composition-api";
export default {
  name: "Dashboard",
  components: {
    AppContent,
    Settings,
    AddStream,
    BackDrop,
  },
  setup(_, { root }) {
    const user = ref(null);
    onMounted(async () => {
      const RESPONSE = await axios.get("/api/dashboard");
      user.value = RESPONSE.data.user;
    });

    const toggleForm = () => root.$store.commit("TOGGLE_ADD_STREAM");

    return { user, toggleForm };
  },
};
</script>

<style lang="scss" scoped>
/deep/ .main {
  img {
    display: none;
  }
}
</style>
