<template>
  <div class="card">
    <div v-if="product.type == 'link'" class="card-header">
      <img src="../assets/images/Laptop.png" />
    </div>

    <div
      style="background: #d2ebf7"
      v-if="product.type == 'text' || product.type == 'document'"
      class="card-header"
    >
      <img src="../assets/images/Business.png" />
    </div>

    <div
      style="background: linear-gradient(135deg, #f395ba 0%, #fed182 100%)"
      v-if="product.type == 'image' || product.type == 'video'"
      class="card-header"
    >
      <img src="../assets/images/Group.png" />
    </div>

    <div class="card-body">
      <div class="activity">
        <p v-if="product.type == 'video'">MÍDIA</p>
        <p v-if="product.type == 'image'">IMAGEM</p>
        <p
          v-if="
            product.type == 'document' ||
            product.type == 'link' ||
            product.type == 'text'
          "
        >
          DOCUMENTO
        </p>
        <font-awesome-icon
          v-if="product.type == 'video'"
          class="fa-2x"
          icon="fa-solid fa-video"
        />
        <font-awesome-icon
          v-if="product.type == 'image'"
          class="fa-2x"
          icon="fa-solid fa-image"
        />
        <font-awesome-icon
          v-if="product.type == 'document'"
          class="fa-2x"
          icon="fa-solid fa-file"
        />
        <font-awesome-icon
          v-if="product.type == 'link'"
          class="fa-2x"
          icon="fa-solid fa-link"
        />
        <font-awesome-icon
          v-if="product.type == 'text'"
          class="fa-2x"
          icon="fa-solid fa-book-open"
        />
      </div>
      <div class="title-card">
        <p>{{ product.title }}</p>
        <p>
          {{ product.description }}
        </p>
      </div>
      <div class="footer-card">
        <div class="download" v-if="product.allow_download == true">
          <p>Visualizar Imagem</p>
        </div>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentId",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main";
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&family=Pacifico&family=Poppins:ital,wght@0,400;0,500;0,700;1,300&display=swap");

.card {
  width: 800px;
  height: 400px;
  background: $white;
  border-radius: 16px;
  display: flex;
  margin-top: 50px;

  .card-header {
    width: 350px;
    height: 400px;
    background: #bcd1ff;
    border-radius: 16px 0px 0px 16px;

    img {
      margin: 80px;
      margin-left: 55px;
    }
  }
  .card-body {
    width: 500px;
    .activity {
      font-family: "Open Sans";
      width: 400px;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 27px;
      color: #6e798c;
      margin-top: 30px;
      margin-left: 35px;
      display: flex;
      justify-content: space-between;

      :nth-child(2n) {
        font-weight: 400;
        font-size: 28px;
        line-height: 25px;
        text-align: right;
        color: $colorSecondary;
        justify-content: flex-end;
      }
    }

    .title-card {
      p {
        font-family: $font;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 46px;
        color: #081f32;
        margin-left: 35px;
        margin-top: 15px;
        overflow: hidden; // Removendo barra de rolagem
        text-overflow: ellipsis; // Adicionando "..." ao final
        display: -webkit-box;
        -webkit-line-clamp: 3; // Quantidade de linhas
        -webkit-box-orient: vertical;
      }

      :nth-child(2) {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #374a59;
      }
    }

    .footer-card {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .download {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        p {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 23px;
          line-height: 25px;
          text-align: right;
          color: #007ae9;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    .card {
      width: 450px;
      height: 650px;
      background: $white;
      border-radius: 16px;
      display: flex;
      margin-top: 50px;
      flex-direction: column;

      .card-header {
        width: 450px;
        height: 300px;
        background: #bcd1ff;
        border-radius: 16px;
        justify-content: center;
        align-items: center;
        img {
          margin: 40px;
          margin-left: 100px;
        }
      }
      .card-body {
        width: 350px;
        margin-bottom: 50px;
        align-items: center;
        justify-content: center;
        .activity {
          font-family: "Open Sans";
          width: 350px;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
          color: #6e798c;
          margin-top: 30px;
          margin-left: 35px;
          display: flex;
          justify-content: space-between;

          :nth-child(2n) {
            font-weight: 400;
            font-size: 18px;
            line-height: 15px;
            text-align: right;
            color: $colorSecondary;
            justify-content: flex-end;
          }
        }

        .title-card {
          width: 450px;
          justify-content: center;
          p {
            font-family: $font;
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 36px;
            color: #081f32;
            margin-left: 35px;
            margin-top: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }

          :nth-child(2) {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            color: #374a59;
          }
        }

        .footer-card {
          display: flex;
          justify-content: space-around;
          margin-left: 90px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .download {
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 40px;
            p {
              font-family: "Open Sans";
              font-style: normal;
              font-weight: 400;
              font-size: 23px;
              line-height: 25px;
              text-align: right;
              color: #007ae9;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 560px) {
  .container {
    .card {
      width: 350px;
      height: 480px;
      background: $white;
      border-radius: 16px;
      display: flex;
      margin-top: 50px;
      flex-direction: column;

      .card-header {
        width: 350px;
        height: 200px;
        background: #bcd1ff;
        border-radius: 16px;
        display: flex;
        img {
          width: 170px;
          margin: 10px auto;
        }
      }
      .card-body {
        width: 350px;

        align-items: center;
        justify-content: center;
        .activity {
          font-family: "Open Sans";
          width: 250px;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
          color: #6e798c;
          margin-top: 30px;
          margin-left: 35px;
          display: flex;
          justify-content: space-between;

          :nth-child(2n) {
            font-weight: 400;
            font-size: 18px;
            line-height: 15px;
            text-align: right;
            color: $colorSecondary;
            justify-content: flex-end;
          }
        }

        .title-card {
          width: 300px;
          justify-content: center;
          p {
            font-family: $font;
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
            color: #081f32;
            margin-left: 35px;
            margin-top: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          :nth-child(2) {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            color: #374a59;
          }
        }

        .footer-card {
          display: flex;
          justify-content: space-around;
          margin-left: 0px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .download {
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 0px;
            p {
            }
          }
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .container {
    .card {
      width: 300px;
      height: 420px;
      background: $white;
      border-radius: 16px;
      display: flex;
      margin-top: 50px;
      flex-direction: column;

      .card-header {
        width: 300px;
        height: 200px;

        img {
          width: 130px;
          margin: 10px auto;
        }
      }
      .card-body {
        width: 300px;

        .activity {
          :nth-child(2n) {
          }
        }

        .title-card {
          p {
          }

          :nth-child(2) {
          }
        }

        .footer-card {
          .download {
            p {
            }
          }
        }
      }
    }
  }
}
@media (max-width: 370px) {
  .container {
    .card {
      width: 250px;
      height: 350px;
      background: $white;
      border-radius: 16px;
      display: flex;
      margin-top: 50px;
      flex-direction: column;

      .card-header {
        width: 250px;
        height: 200px;

        img {
          width: 120px;
          margin: 10px auto;
        }
      }
      .card-body {
        width: 250px;

        .activity {
          width: 170px;
          font-size: 15px;
          margin: 10px auto;
          :nth-child(2n) {
          }
        }

        .title-card {
          width: 200px;
          p {
            margin-top: 4px;
            font-size: 20px;
            line-height: 23px;
          }

          :nth-child(2) {
          }
        }

        .footer-card {
          .download {
            p {
              font-size: 17px;
            }

            :nth-child(2) {
              width: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
