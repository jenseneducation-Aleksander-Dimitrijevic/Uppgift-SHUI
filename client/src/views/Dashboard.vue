<template>
  <div v-if="user">
    <add-stream />
    <app-content>
      <h1>Hello there, {{ user.username }}</h1>
      <button class="btn-primary">Add streams</button>
    </app-content>
  </div>
</template>

<script>
import axios from "axios";
import AppContent from "@/components/main/AppContent.vue";
import AddStream from "@/components/main/AddStream.vue";
import { ref, onMounted } from "@vue/composition-api";
export default {
  name: "Dashboard",
  components: {
    AppContent,
    AddStream,
  },
  setup() {
    const user = ref(null);
    onMounted(async () => {
      const RESPONSE = await axios.get("/api/dashboard");
      user.value = RESPONSE.data.user;
    });

    return { user };
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
