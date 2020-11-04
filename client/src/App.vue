<template>
  <div id="app">
    <app-header />
    <vue-page-transition name="fade-in-right">
      <router-view />
    </vue-page-transition>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
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
  justify-content: space-between;
}
</style>
