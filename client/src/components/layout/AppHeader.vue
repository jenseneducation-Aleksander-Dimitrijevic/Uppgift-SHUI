<template>
  <nav class="navbar">
    <img
      :src="require('@/assets/header-logo.png')"
      alt="icon"
      @click="$router.push({ name: 'Home' }).catch(() => {})"
    />
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0 2rem;
}
</style>
