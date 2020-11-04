<template>
  <div>
    <app-content>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="username" placeholder="Användarnamn" />
        <input type="password" v-model="password" placeholder="Lösenord" />
        <input
          type="password"
          v-model="repeatPassword"
          placeholder="Repetera lösenord"
        />
        <button>Registrera</button>
      </form>
    </app-content>
  </div>
</template>

<script>
import AppContent from "@/components/main/AppContent.vue";
import useFormSubmit from "@/use/useFormSubmit";
import { reactive, toRefs } from "@vue/composition-api";
export default {
  name: "Signup",
  components: {
    AppContent,
  },
  setup() {
    let credentials = reactive({
      username: null,
      password: null,
      repeatPassword: null,
    });
    const { handleSubmit } = useFormSubmit("/api/register", credentials);
    return { ...toRefs(credentials), handleSubmit };
  },
};
</script>

<style lang="scss" scoped></style>
