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
      >
        <nuxt-link to="/contentCard">
          <button :id="content.id" @click="selectId($event)">
            Clique aqui
          </button>
        </nuxt-link>


      </ProductCard>
      <div >


      </div>
    </div>

  </section>
</template>

<script>
import gql from 'graphql-tag'
import ProductCard from '../components/ProductCard.vue'
import NavBar from '../components/NavBar.vue'


export default {

  data() {
    return {
      productIdExample: "5d3bb1f7-0106-4733-aede-6a3c1c7f21c8",
      search: '',
      contentCard: '',
      targetId: ''
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

     getContent: {
      query: gql`
        query getProductId($id: String!) {
          getContent(id: $id) {
              id
              title
            }
          }
        `,
      variables() {
        return {
          id: this.productIdExample
        }
      }
    }
  },

  components: {
    ProductCard,
    NavBar,
  },

  computed: {
    filteredCards() {
      return this.contents.filter((content) => {
        return content.title.match(this.search)
      })
    },
  },

  methods: {
    selectId(event) {
       const id = event.currentTarget.id;
       this.$store.commit('SET_PRODUCT_ID', id)
    },
  },
  mounted() {
    // alert(this.getContent.id)
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/main";

.container {
  display: flex;
  flex-direction: column;
   h1 {
    margin-top: 50px;
    text-align: center;
    font-size: 35px;
    color: $colorSecundary;
   }

  .search-input {
    width: 700px !important;
    height: 30px;
    margin: 100px auto;
    padding: 10px;
    border: 1px solid rgb(30 60 90 / 10%);
    border-radius: $borderRadius;

    &:focus-visible {
      outline-color: $mainColor
    }
  }

  .contents {
    display: flex;
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
    h1 {
      font-size: 25px;
    }

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
