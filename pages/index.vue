<template>
  <div class="container">
    <NavBar/>

    <h1>Minha Logo - Com a Studytech seu conhecimento vai mais longe.</h1>

    <input class="search-input" type="text" v-model="search" placeholder="pesquisar..."/>
    <div class="contents">
      <ProductCard
        v-for="content in filteredCards"
        :key="content.id"
        :product="content"
      >
        <nuxt-link :to="`/content/${content.id}`">
          <button :id="content.id" @click="selectId($event)">
            Clique aqui
          </button>
        </nuxt-link>
      </ProductCard>

    </div>
    <FooterBar/>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import ProductCard from '../components/ProductCard.vue'
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'

export default {

  data() {
    return {
      search: '',
      contentCard: '',
      targetId: '',
      contents: null
    }
  },

   async created() {
    const {data}= await this.$apollo.query({
       query: gql`
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
    })



     this.contents = data.contents
     console.log(this.contents)
     console.log(data)
   },

  // apollo: {
  //   contents: gql`
  //     query getAllProducts {
  //         contents {
  //            embeddable
  //            allow_download
  //            id
  //            title
  //            description
  //            url
  //            type
  //         }
  //       }
  //   `,
  // },

  components: {
    ProductCard,
    NavBar,
    FooterBar,
  },

  computed: {
    filteredCards() {
      console.log(this.contents)
      return this.contents?.filter((content) => {
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
