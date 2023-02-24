<template>
  <div class="container">
    <NavBar />
    <Nuxt />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "layoutPage",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  background: #eff0f3;
}
</style>
