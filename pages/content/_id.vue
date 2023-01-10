<template>
<div class="container">
  <NavBar/>
  <h2 v-if="loading">Loading...</h2>
  <div class='content' v-else>
    <div class="content-product" >
      <div>
        <h1>{{content.title}}</h1>
        <p>{{content.description}}</p>
         <div v-if="content.type == 'link'">
          <a :href='content.url' target="_blank">
            <button class='button'>visualizar o conteúdo</button>
          </a>
      </div>
      </div>
      <picture class="image-product">
        <img src="../../assets/images/select.svg">
      </picture>
    </div>

    <div v-if="content.type == 'video'">
      <iframe style="margin: 20px auto" width="620" height="315"
      :src="content.url">
      </iframe>
    </div>
    <div class='image' v-if="content.type == 'image'">
     <img width='900px' style="margin: 20px auto" :src="content.url">
    </div>

    <div v-if="content.type == 'document'">
      <iframe style="margin: 20px auto; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; " width="820" height="515" :src="content.url">

      </iframe>
    </div>
  </div>
<FooterBar/>
</div>

</template>

<script>
import gql from 'graphql-tag';
import NavBar from '../../components/NavBar'
import FooterBar from '../../components/FooterBar.vue'


export default {
  name: 'contentCard',
  components: {
    NavBar,
    FooterBar
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
        type
        }
      }
    `,
    variables:{
      id: this.$route.params.id
      }
    })
    this.content = data.getContent
    this.loading = false
    console.log(this.content)
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/main";

.container {
  display: flex;
  flex-direction: column;
  background: #EFF0F3;

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;

    .content-product {
    width: 835px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0px;
    background: #FFFFFF;
    border-radius: 24px;
    margin: 20px auto;

    .button {
      margin-bottom: 30px;
      margin-left: 320px;
    }

    .image-product {
      position: relative;
      img {
         right: 32px;
         top: 32px;
         position: absolute;
      }
    }

    .image {
      display: flex;
      margin: 0 auto;
      iframe {
        margin: 0 auto;
      }
    }

    h1 {
      margin-top: 32px;
      margin-left: 32px;
      margin-bottom: 8px;
      width: 564px;
      height: 100%;
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      color: #111111;

    }
    p {
      width: 764px;
      height: 100%;
      margin-left: 32px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 32px;

    }
  }

  }
}

</style>
