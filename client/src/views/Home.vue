<template>
  <div @click="$router.push({ name: 'login' })">
    <app-content />
  </div>
</template>

<script>
import AppContent from "@/components/main/AppContent.vue";
export default {
  name: "Home",
  components: {
    AppContent,
  },
};
</script>

<style lang="scss" scoped>
/deep/ .main img {
  animation: pulse 1s infinite;
}
</style>
