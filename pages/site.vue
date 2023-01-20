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
import BlogHome from '@/components/site/BlogHome';
import BlogPackage from '@/components/site/BlogPackage';
import BlogVideo from '@/components/site/BlogVideo';
import BlogPrice from '@/components/site/BlogPrice';
import BlogClient from '@/components/site/BlogClient';
import BlogEducation from '@/components/site/BlogEducation';
import FooterBar from '@/components/FooterBar';
import NavBar from '@/components/NavBar'

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
