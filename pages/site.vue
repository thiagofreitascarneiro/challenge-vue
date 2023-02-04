<template>
  <div class="container-site">
    <Home />
    <div data-aos="fade-up" data-aos-delay="500">
      <Package />
    </div>

    <div data-aos="fade-down" data-aos-delay="500">
      <Live />
    </div>

    <div data-aos="fade-up-right" data-aos-delay="500">
      <Price />
    </div>

    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <Client />
    </div>

    <Education />
  </div>
</template>

<script>
import Home from "@/components/site/Home.vue";
import Package from "@/components/site/Package.vue";
import Live from "~/components/site/Live.vue";
import Price from "@/components/site/Price.vue";
import Client from "@/components/site/Client.vue";
import Education from "@/components/site/Education.vue";

export default {
  name: "web-site",
  components: {
    Home,
    Package,
    Live,
    Price,
    Client,
    Education,
  },
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";

.container-site {
  background: $white;
}
</style>
