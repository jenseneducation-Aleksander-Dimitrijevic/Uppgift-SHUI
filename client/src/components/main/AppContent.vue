<template>
  <main
    class="main"
    @click="$route.name === 'Home' && $router.push({ name: 'login' })"
  >
    <img :src="require('@/assets/app-logo.png')" alt="app logo" />
    <h1 v-show="!$route.meta.requiresAuth">Flow freely</h1>
    <slot />
  </main>
</template>

<script>
export default {
  name: "AppContent",
};
</script>

<style lang="scss" scoped>
.main {
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 0 2rem;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
}
img {
  width: 80px;
  margin: auto;
  display: block;
}

h1 {
  font-size: 1rem;
  font-weight: 100;
  color: $lightBlue;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>
