<template>
  <section class="container">
    <div class="home">
      <div class="right-learning-home">
        <div>
          <p class="welcome">Bem vindo!</p>
          <h1>Melhores oportunidades de aprendizagem</h1>
          <p class="goal">
            Nosso objetivo é fazer com que a educação online funcione para
            todos.
          </p>
        </div>
        <div class="button-home">
          <button class="button" style="margin-right: 10px">Cursos</button>
          <button class="transparent-button">Aprenda Mais</button>
        </div>
      </div>
      <picture class="left-photo-home">
        <img src="../../assets/images/atriz.png" />
      </picture>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogHome',
  props: {},
};
</script>

<style scoped lang="scss">
@import '../../assets/css/main';

.container {
  width: 100%;
  height: 100%;
  background: $colorPrimary;

  .home {
    display: flex;
    justify-content: space-evenly;
    .right-learning-home {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      .welcome {
        width: 77px;
        height: 24px;
        font-family: $font;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: $colorSecondary;
        margin-left: 220px;
        white-space: nowrap;
        margin-bottom: 30px;
      }

      .goal {
        width: 338px;
        height: 60px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
        letter-spacing: 0.2px;
        color: #737373;
        margin-top: 100px;
        margin-left: 100px;
      }

      h1 {
        width: 542px;
        height: 160px;
        font-family: $font;
        font-style: normal;
        font-weight: 700;
        font-size: 58px;
        line-height: 80px;
        letter-spacing: 0.4px;
        color: #252b42;
      }

      .button-home {
        display: flex;
        justify-content: center;
        margin-top: 30px;
      }
    }

    .left-photo-home {
      justify-content: flex-end;
      img {
        margin-top: 115px;
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    .home {
      display: flex;
      flex-direction: column;
      .right-learning-home {
        display: flex;
        text-align: center;
        flex-direction: column;

        .welcome {
          width: 100%;
          height: 24px;
          font-family: $font;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          color: $colorSecondary;
          margin-left: 0px;
          white-space: nowrap;
          margin-bottom: 30px;
          margin-top: 30px;
        }

        .goal {
          width: 70%;
          height: 40px;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 30px;
          letter-spacing: 0.2px;
          color: #737373;
          margin: 0px auto;
        }

        h1 {
          width: 100%;
          height: 130px;
          font-family: $font;
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          line-height: 40px;
          letter-spacing: 0.4px;
          color: #252b42;
          @media (max-width: 684px) {
            font-size: 30px;
            height: 100px;
            line-height: 37px;
          }

          @media (max-width: 640px) {
            font-size: 25px;
            height: 70px;
            line-height: 33px;
            word-break: break-word;
          }

          @media (max-width: 548px) {
            font-size: 1.5em;
            height: 70px;
            line-height: 30px;
            word-break: break-word;
          }

          @media (max-width: 420px) {
            // font-size: 28px;
            height: 100px;
            line-height: 40px;
          }
        }

        .button-home {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin: 50px auto;
        }
      }

      .left-photo-home {
        justify-content: center;
        margin: 0 auto;

        img {
          width: 65vw;
          margin-top: 0px;
        }
      }
    }
  }
}
</style>
