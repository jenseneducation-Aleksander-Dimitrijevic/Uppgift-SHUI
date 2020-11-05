<template>
  <nav class="navbar">
    <img
      :src="require('@/assets/header-logo.png')"
      alt="icon"
      @click="
        !$route.meta.requiresAuth
          ? $router.push({ name: 'Home' }).catch(() => {})
          : addStream()
      "
      :class="{ addShadow: isStream }"
    />
    <span
      class="lnr lnr-user user-action"
      v-show="$route.name === 'login'"
      @click="$router.push({ name: 'signup' })"
    ></span>
    <span
      class="lnr lnr-exit user-action"
      v-show="$route.meta.requiresAuth && !isStream"
      @click="logout"
    ></span>
  </nav>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  name: "AppHeader",
  setup(_, { root }) {
    const logout = () => {
      sessionStorage.removeItem("user");
      location.reload();
    };

    const isStream = computed(() => root.$store.state.isStream);

    const addStream = () => {
      root.$store.commit("TOGGLE_ADD_STREAM");
    };

    return { logout, addStream, isStream };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  position: fixed;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;

  span.user-action {
    color: #fff;
    padding: 10px;
    font-size: 1.3rem;
    border-radius: 50%;
    align-self: flex-end;
    border: 2px solid #fff;
  }

  img {
    transition: all 0.3s ease;
    &.addShadow {
      box-shadow: 0 0 10px rgba(#000, 0.2);
    }
  }
}
</style>
