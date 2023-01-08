<template>
<div class="container">
  <NavBar/>
  <h2 v-if="loading">Loading...</h2>

  <div class="content-product" v-else>
    <div>
      <h1>{{content.title}}</h1>
      <p>{{content.description}}</p>
    </div>
    <picture class="image-product">
      <img src="../../assets/images/select.svg">
    </picture>
  </div>
<div>
  <video></video>
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
  background: #EFF0F3;


  .content-product {
    width: 835px;
    height: 284px;
    display: flex;
    align-items: flex-start;
    padding: 0px;
    background: #FFFFFF;
    border-radius: 24px;
    margin: 20px auto;

    .image-product {
      position: relative;
      img {
         right: 32px;
         top: 32px;
         position: absolute;
      }
    }

    h1 {
      margin-top: 32px;
      margin-left: 32px;
      margin-bottom: 8px;
      width: 564px;
      height: 80px;
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      color: #111111;

    }
    p {
      width: 764px;
      height: 32px;
      margin-left: 32px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;

    }
  }

}

</style>
