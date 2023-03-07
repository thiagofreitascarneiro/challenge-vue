<template>
  <section class="container">
    <div class="client">
      <div class="watch-cources">
        <p>Depoimentos</p>
        <h1>Assistiram Nossos Cursos</h1>
        <p>Conheça os depoimentos e historias de quem estuda com a gente.</p>
      </div>
      <div class="testimony">
        <div class="first-testimony">
          <picture>
            <img src="../../assets/images/testimonial-1.png" />
          </picture>
          <p class="brief">
            A estratégia de comunicação é um tema chave para todos os negócios,
            hoje mais do que nunca. E a studytech é o maior exemplo disso.
          </p>
          <picture>
            <img src="../../assets/images/stars.png" />
          </picture>
          <p class="name">Regina Miles</p>
          <p class="profession">Designer</p>
        </div>
        <div class="second-testimony">
          <picture>
            <img src="../../assets/images/testimonial-2.png" />
          </picture>
          <p class="brief">
            Empresa comprometida com os nossos resultados e desempenho,
            comunicação clara, objetiva e certeira!!
          </p>
          <picture>
            <img src="../../assets/images/stars.png" />
          </picture>
          <p class="name">Rodrigo Carletti</p>
          <p class="profession">Software Engineer</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogClient",
};
</script>

<style scoped lang="scss">
@import "../../assets/css/main";

.container {
  width: 100%;
  height: 865px;
  background: #ffffff;

  .client {
    display: flex;
    flex-direction: column;
    .watch-cources {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 691px;
      height: 134px;
      margin-left: 100px;
      margin-top: 100px;

      :nth-child(1) {
        width: 117px;
        height: 24px;
        font-family: $font;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.2px;
        color: $colorSecondary;
        white-space: nowrap;
        margin-bottom: 10px;
      }

      h1 {
        width: 451px;
        height: 50px;
        font-family: $font;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 0.2px;
        color: #252b42;
        text-align: start;
      }

      :nth-child(3) {
        width: 463px;
        height: 40px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #737373;
        text-align: start;
        margin-top: 10px;
      }
    }
    .testimony {
      display: flex;
      align-items: center;
      width: 100%;
      height: 378.01px;
      margin-top: 96px;
      justify-content: center;
      .first-testimony {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 25px 0px;
        width: 508px;
        height: 378.01px;

        .brief {
          width: 320px;
          height: 60px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          letter-spacing: 0.2px;
          color: #737373;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .name {
          width: 108px;
          height: 24px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.1px;
          color: #252b42;
          margin-top: 15px;
        }
        .profession {
          width: 68px;
          height: 24px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.2px;
          color: #737373;
        }
      }
      .second-testimony {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 25px 0px;
        width: 508px;
        height: 378.01px;

        .brief {
          width: 320px;
          height: 60px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          letter-spacing: 0.2px;
          color: #737373;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .name {
          width: 115px;
          height: 24px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.1px;
          color: #252b42;
          margin-top: 15px;
        }
        .profession {
          width: 115px;
          height: 24px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.2px;
          color: #737373;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    height: 100%;
    .client {
      display: flex;
      flex-direction: column;
      .watch-cources {
        width: 400px;
        height: 134px;
        margin: 40px auto;

        :nth-child(1) {
        }

        h1 {
        }

        :nth-child(3) {
        }
      }
      .testimony {
        flex-direction: column;
        .first-testimony {
          margin-top: 70px;

          .brief {
          }
          .name {
          }
          .profession {
          }
        }
        .second-testimony {
          .brief {
          }
          .name {
          }
          .profession {
          }
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .container {
    height: 100%;
    .client {
      display: flex;
      flex-direction: column;
      .watch-cources {
        width: 200px;
        height: 134px;
        margin: 40px auto;

        :nth-child(1) {
        }

        h1 {
          width: 253px;
          line-height: 30px;
          font-size: 30px;
        }

        :nth-child(3) {
          width: 200px;
          margin-top: 20px;
        }
      }
      .testimony {
        flex-direction: column;
        .first-testimony {
          margin-top: 150px;
          width: 250px;

          .brief {
          }
          .name {
          }
          .profession {
          }
        }
        .second-testimony {
          width: 250px;
          margin-top: 30px;

          .brief {
          }
          .name {
          }
          .profession {
          }
        }
      }
    }
  }
}
</style>
