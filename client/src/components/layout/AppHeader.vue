<template>
  <nav class="navbar">
    <img
      :src="require('@/assets/header-logo.png')"
      alt="icon"
      @click="
        !$route.meta.requiresAuth
          ? $router.push({ name: 'Home' }).catch(() => {})
          : $router.push({ name: 'dashboard' }).catch(() => {})
      "
    />
    <span
      class="lnr lnr-user user-action"
      v-show="$route.name === 'login'"
      @click="$router.push({ name: 'signup' })"
    ></span>
    <span
      class="lnr lnr-exit user-action"
      v-show="$route.meta.requiresAuth"
      @click="logout"
    ></span>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  setup() {
    const logout = () => {
      sessionStorage.removeItem("user");
      location.reload();
    };

    return { logout };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
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
}
</style>
