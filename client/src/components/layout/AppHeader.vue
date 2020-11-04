<template>
  <nav class="navbar">
    <img
      :src="require('@/assets/header-logo.png')"
      alt="icon"
      @click="$router.push({ name: 'Home' }).catch(() => {})"
    />
    <span
      class="lnr lnr-user"
      v-show="$route.name === 'login'"
      @click="$router.push({ name: 'signup' })"
    ></span>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;

  span.lnr-user {
    color: #fff;
    padding: 10px;
    font-size: 1.3rem;
    border-radius: 50%;
    align-self: flex-end;
    border: 2px solid #fff;
  }
}
</style>
