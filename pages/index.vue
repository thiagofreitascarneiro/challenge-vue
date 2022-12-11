<template>
  <section class="container">
    <NavBar/>

    <h1>Minha Logo - com a minha logo seu conhecimento vai mais longe.</h1>

    <input class="search-input" type="text" v-model="search" placeholder="pesquisar..."/>
    <div class="contents">
      <ProductCard
        v-for="content in filteredCards"
        :key="content.id"
        :product="content"
      />
    </div>

  </section>
</template>

<script>
import gql from 'graphql-tag'
import ProductCard from '../components/ProductCard.vue'
import NavBar from '../components/NavBar.vue'
import Modal from '../components/Modal.vue'

export default {

  data() {
    return {
      contentId: '5d3bb1f7-0106-4733-aede-6a3c1c7f21c8',
    }
  },

  apollo: {
    contents: gql`
      query getAllProducts {
          contents {
             embeddable
             allow_download
             id
             title
             description
             url
             type
          }
        }
    `,
     getContent: gql`
      query getContent($id: ID) {
        getContent(id: $id) {
           id
           title

        }
      }
    `,
    variables() {
      return {
        id: this.contentId
      }
    }
  },

  components: {
    ProductCard,
    NavBar,
    Modal
  },
  data() {
    return {
      search: '',
      contentCard: '',
    }
  },
  computed: {
    filteredCards: function() {
      return this.contents.filter((content) => {
        return content.title.match(this.search)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/css/main";

.container {
  display: flex;
  flex-direction: column;

  .search-input {
    width: 400px !important;
    margin: 100px auto;
    padding: 10px;
    border: 1px solid rgb(30 60 90 / 10%);
    border-radius: $borderRadius;
    width: 500px;
    &:focus-visible {
      outline-color: $mainColor
    }
  }

  .contents {
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
}

@media(max-width: 768px) {
  .container {


  .search-input {
    width: 200px !important;
    padding: 15px;

    &:focus-visible {

    }
  }

  .contents {
    flex-direction: column;
  }
}
}

@media(max-width: 450px) {
  .container {


  .search-input {


    &:focus-visible {

    }
  }

  .contents {
    flex-direction: column;
  }
}
}


</style>
