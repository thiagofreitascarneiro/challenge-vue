<template>
  <div>
    <NavBar/>
    <BlogHome/>
    <BlogPackage/>
    <BlogVideo/>
    <BlogPrice/>
    <BlogClient/>
    <BlogEducation/>
    <FooterBar/>
  </div>
</template>

<script>
import BlogHome from '../components/site/BlogHome.vue';
import BlogPackage from '../components/site/BlogPackage.vue';
import BlogVideo from '../components/site/BlogVideo.vue';
import BlogPrice from '../components/site/BlogPrice.vue';
import BlogClient from '../components/site/BlogClient.vue';
import BlogEducation from '../components/site/BlogEducation.vue';
import FooterBar from '../components/FooterBar.vue';
import NavBar from '../components/NavBar.vue'

export default {
  name: 'site',
   components: {
    BlogHome,
    BlogPackage,
    BlogVideo,
    BlogPrice,
    BlogClient,
    BlogEducation,
    FooterBar,
    NavBar,
  }
}
</script>

<style lang="scss">
@import "../assets/css/main.scss"

</style>
