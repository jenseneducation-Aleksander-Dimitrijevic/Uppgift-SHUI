<template>
  <div>
    <app-content>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button>Log in</button>
      </form>
    </app-content>
  </div>
</template>

<script>
import AppContent from "@/components/main/AppContent.vue";
import useFormSubmit from "@/use/useFormSubmit";
import { toRefs, reactive } from "@vue/composition-api";
export default {
  name: "Login",
  components: {
    AppContent,
  },
  setup(_, { root }) {
    let credentials = reactive({
      username: null,
      password: null,
    });
    const { handleSubmit } = useFormSubmit("/api/login", credentials, root);
    return { ...toRefs(credentials), handleSubmit };
  },
};
</script>

<style lang="scss" scoped></style>
