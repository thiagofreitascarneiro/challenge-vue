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
      <p>Download</p>
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
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 318px;
    height: 330px;
    border-radius: 16px;
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;

    &:hover {
      transition:.5s;
      transform: translateY(-10px);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;


    }


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
        overflow: hidden; // Removendo barra de rolagem
        text-overflow: ellipsis; // Adicionando "..." ao final
        display: -webkit-box;
        -webkit-line-clamp: 2; // Quantidade de linhas
        -webkit-box-orient: vertical;
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

      p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        text-align: right;
        color: #007AE9;

      }

    }

  }



</style>
