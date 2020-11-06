<template>
  <div v-if="user">
    <Settings />
    <add-stream />
    <back-drop />
    <app-content>
      <h1>Hello there, {{ user.username }}</h1>
      <h2>Dina streams</h2>
      <ul class="list">
        <li class="list-item" v-for="stream in streams" :key="stream._id">
          <p>{{ stream.date }}</p>
          <h3>{{ stream.content }}</h3>
          <p v-for="(tag, index) in stream.tag" :key="index">#{{ tag }}</p>
        </li>
      </ul>
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
    const streams = ref([]);
    onMounted(async () => {
      const RESPONSE = await axios.get("/api/dashboard");
      user.value = RESPONSE.data.user;
      streams.value = RESPONSE.data.streams;
    });

    const toggleForm = () => root.$store.commit("TOGGLE_ADD_STREAM");

    return { user, toggleForm, streams };
  },
};
</script>

<style lang="scss" scoped>
/deep/ .main {
  img {
    display: none;
  }
}

.list {
  list-style: none;

  .list-item {
    padding: 5px;
    margin: 1rem 0;
    background: #fff;
  }
}
</style>
