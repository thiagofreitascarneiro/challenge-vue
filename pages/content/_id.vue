<template>
<div class="container">
  <NavBar/>
  <h2 v-if="loading">Loading...</h2>

  <div class="content-product" v-else>
    <h1>{{content.title}}</h1>
    <!-- <h2>{{content.description}}</h2> -->
  </div>


</div>

</template>

<script>
import gql from 'graphql-tag';
import NavBar from '../../components/NavBar'


export default {
  name: 'contentCard',
  components: {
    NavBar
  },
  data() {
    return {
      content: null,
      loading: false,
    }
  },

  async created() {
    this.loading = true
    const {data} = await this.$apollo.query({
    query: gql`
    query getProductId($id: String!) {
      getContent(id: $id) {
        id
        title
        description
        allow_download
        embeddable
        url
        }
      }
    `,
    variables:{
      id: this.$route.params.id
      }
    })
    this.content = data.getContent
    this.loading = false
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/main";

.container {
  display: flex;
  flex-direction: column;
  .content-product {
    h1 {
      margin: 15px auto;
      text-align: center;
      color: $colorSecundary;
    }
    h2 {
    margin: 15px auto;
    text-align: center;
    }
  }

}

</style>
