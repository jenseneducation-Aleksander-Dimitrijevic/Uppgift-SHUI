<template>
  <div>
    <app-content>
      <form @submit.prevent>
        <input type="text" placeholder="Användarnamn" />
        <input type="password" placeholder="Lösenord" />
        <input type="password" placeholder="Repetera lösenord" />
        <button>Registrera</button>
      </form>
    </app-content>
  </div>
</template>

<script>
import AppContent from "@/components/main/AppContent.vue";
export default {
  name: "Signup",
  components: {
    AppContent,
  },
};
</script>

<style lang="scss" scoped></style>
