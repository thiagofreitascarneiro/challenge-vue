<template>
  <div class="container-site">
    <Home />
    <Package />
    <Live />
    <Price />
    <Client />
    <Education />
  </div>
</template>

<script>
import Home from '@/components/site/Home.vue';
import Package from '@/components/site/Package.vue';
import Live from '~/components/site/Live.vue';
import Price from '@/components/site/Price.vue';
import Client from '@/components/site/Client.vue';
import Education from '@/components/site/Education.vue';

export default {
  name: 'web-site',
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
@import '../assets/css/main.scss';

.container-site {
  background: $white;
}
</style>
