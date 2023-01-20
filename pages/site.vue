<template>
  <div>
    <NavBar/>
    <Home/>
    <Package/>
    <Video/>
    <Price/>
    <Client/>
    <Education/>
    <FooterBar/>
  </div>
</template>

<script>
import Home from '@/components/site/Home.vue';
import Package from '@/components/site/Package.vue';
import Video from '@/components/site/Video.vue';
import Price from '@/components/site/Price.vue';
import Client from '@/components/site/Client.vue';
import Education from '@/components/site/Education.vue';
import FooterBar from '@/components/FooterBar.vue';
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'site',
   components: {
    Home,
    Package,
    Video,
    Price,
    Client,
    Education,
    FooterBar,
    NavBar,
  }
}
</script>

<style lang="scss">
@import "../assets/css/main.scss"

</style>
