<template>
  <nav class="navbar">
    <img :src="require('@/assets/header-logo.png')" alt="icon" />
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
