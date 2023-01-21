<template>
  <div class="container">
    <NavBar/>
    <Nuxt/>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  name: 'layout',
  components: {
    NavBar,
    FooterBar
  },

  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

.container {
  margin: 0 auto;
  background: #EFF0F3;
}

</style>
