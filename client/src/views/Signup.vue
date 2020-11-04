<template>
  <div>
    <app-content>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <input
          type="password"
          v-model="repeatPassword"
          placeholder="Confirm password"
        />
        <button>Register</button>
        <router-link to="/login">Already have an account?</router-link>
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
  setup(_, { root }) {
    let credentials = reactive({
      username: null,
      password: null,
      repeatPassword: null,
    });
    const { handleSubmit } = useFormSubmit("/api/register", credentials, root);
    return { ...toRefs(credentials), handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #fff;
  display: block;
  text-align: center;
}
</style>
