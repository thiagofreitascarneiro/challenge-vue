<template>
<div>
  <NavBar/>
  <h1>Conteudo</h1>

  <h2 v-if="loading">Loading...</h2>

  <h3 v-else>{{content.url}}</h3>

</div>

</template>

<script>
// import { mapState } from 'vuex';
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
    console.log(this)

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
console.log(data)
              this.content = data.getContent
this.loading = false
  },
  // mounted() {
  //   console.log(this.cardId)
  // },
  // computed: {
  //   ...mapState(['cardId']),
  // },

  // apollo: {
  //   getContent: {
  //     query: gql`
  //       query getProductId($id: String!) {
  //         getContent(id: $id) {
  //             id
  //             title
  //             description
  //             allow_download
  //             embeddable
  //             url
  //           }
  //         }
  //       `,
  //     variables:{
  //         id: this.cardId
  //       }
  //   }
  // }
}
</script>

<style>

</style>
