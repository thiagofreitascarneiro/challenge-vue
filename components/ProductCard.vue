<template>

  <div class="card">
    <div class="header-card">
      <div  class="icon">
        <font-awesome-icon v-if="product.type == 'video'" class=" fa-7x" icon="fa-solid fa-video" />
        <font-awesome-icon v-if="product.type == 'image'" class=" fa-7x" icon="fa-solid fa-image" />
        <font-awesome-icon v-if="product.type == 'document'" class=" fa-7x" icon="fa-solid fa-file"/>
        <font-awesome-icon v-if="product.type == 'link'" class=" fa-7x" icon="fa-solid fa-link"/>
        <font-awesome-icon v-if="product.type == 'text'" class=" fa-7x" icon="fa-solid fa-book-open"/>
      </div>
    </div>
    <div class="body-card">
      <h3>{{product.title}}</h3>


    </div>
    <div class="footer-card">
      <slot></slot>
    </div>
  </div>

</template>

<script>



export default {
  name: 'ProductCard',
  props: ['product'],

  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/main";


  .card {
    background: #FFFFFF;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    width: 318px;
    height: 330px;
    border-radius: 16px;
    margin-top: 40px;


    .header-card {
        background: $bgHeaderCard;
        border-radius: 16px 16px 0px 0px;
        width: 318;
        border-radius: 16px;
        height: 168px;
        display: flex;
        justify-content: center;
        box-shadow: 25px 24px 64px rgba(0, 0, 0, 0.06);


        .icon {
          color:  #5434af;
          margin: 28px auto;


        }
      }

    .body-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;
      text-align: center;

      h3 {
        font-family: $font;
        margin-top: 15px;
      }

      p {
        color: $textColor;
        font-family: $font;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;
        width:40ch;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin:5px 0 0 0;
      }
    }

    .footer-card {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      button {
        font-family: $font;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        margin-top: 10px;
        color: $white;
        /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15); */
        border-radius: 20px;
        width: 150px;
        height: 40px;
        background: $colorSecundary;
        border: none;
      }

    }

  }





</style>
