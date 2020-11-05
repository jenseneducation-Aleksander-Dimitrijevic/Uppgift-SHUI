<template>
  <div id="app">
    <app-bar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppBar from "@/components/layout/AppBar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppBar,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
