<template>
  <footer class="footer">
    <img :src="require('@/assets/footer.png')" alt="footer image" />
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  setup() {},
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  display: block;
}
</style>
