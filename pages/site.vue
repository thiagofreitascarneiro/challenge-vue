<template>
  <div>
    <Home/>
    <Package/>
    <Video/>
    <Price/>
    <Client/>
    <Education/>
  </div>
</template>

<script>
import Home from '@/components/site/Home.vue';
import Package from '@/components/site/Package.vue';
import Video from '@/components/site/Video.vue';
import Price from '@/components/site/Price.vue';
import Client from '@/components/site/Client.vue';
import Education from '@/components/site/Education.vue';



export default {
  name: 'site',
   components: {
    Home,
    Package,
    Video,
    Price,
    Client,
    Education,
  }
}
</script>

<style lang="scss">
@import "../assets/css/main.scss"

</style>
