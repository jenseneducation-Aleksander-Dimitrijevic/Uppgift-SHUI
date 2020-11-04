<template>
  <div v-if="user">
    <app-content>
      <h1>Hello there, {{ user.username }}</h1>
    </app-content>
  </div>
</template>

<script>
import axios from "axios";
import AppContent from "@/components/main/AppContent.vue";
import { ref, onMounted } from "@vue/composition-api";
export default {
  name: "Dashboard",
  components: {
    AppContent,
  },
  setup() {
    const user = ref(null);
    onMounted(async () => {
      const RESPONSE = await axios.get("/api/dashboard");
      user.value = RESPONSE.data;
    });

    return { user };
  },
};
</script>

<style lang="scss" scoped>
/deep/ .main img {
  display: none;
}
</style>
