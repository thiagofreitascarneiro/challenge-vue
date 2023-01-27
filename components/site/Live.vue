<template>
  <section class="container">
    <div class="video">
      <picture>
        <img src="../../assets/images/woman.png" />
      </picture>
      <div class="content-video">
        <div class="line-red"></div>
        <h1>Video in Live <br />ao Vivo</h1>
        <p>
          São diversos cursos e novos lançamentos todos os meses, além de
          atualizações e melhorias constantes.
        </p>
        <div class="certified-content">
          <p>Com certificados</p>
          <img src="../../assets/images/seta.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogVideo',
};
</script>

<style scoped lang="scss">
@import '../../assets/css/main';

.container {
  width: 100%;
  height: 669px;
  background: $white;
  .video {
    display: flex;
    justify-content: space-around;

    picture {
      justify-content: flex-end;
    }
    .content-video {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      width: 381px;
      height: 296px;
      .line-red {
        width: 94px;
        height: 7px;
        background: #e74040;
      }

      .certified-content {
        position: relative;
        p {
          width: 52px;
          height: 24px;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 17px;
          line-height: 24px;
          letter-spacing: 0.2px;
          color: $colorSecondary;
          white-space: nowrap;
        }
        img {
          position: absolute;
          bottom: 3px;
          left: 150px;
        }
      }
      h1 {
        width: 282px;
        height: 100px;
        font-family: $font;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 0.2px;
        color: #252b42;
        text-align: start;
        margin-top: 35px;
      }

      p {
        width: 345px;
        height: 60px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #737373;
        text-align: start;
        margin-top: 35px;
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    height: 817px;
    margin-top: 420px;
    .video {
      flex-flow: column;

      picture {
        order: 2;
        margin: 35px auto;
        img {
          width: 65vw;
        }
      }
      .content-video {
        margin: 0 auto;
        .line-red {
        }

        .certified-content {
          position: relative;
          p {
          }
          img {
          }
        }
        h1 {
        }

        p {
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .container {
    width: 100%;
    margin-top: 420px;
    height: 600px;
    .video {
      flex-flow: column;
      margin: 0 auto;
      picture {
        order: 2;
        margin-top: 0px;
        img {
          width: 65vw;
        }
      }
      .content-video {
        margin: 0 auto;
        align-items: none;
        width: 281px;
        .line-red {
        }

        h1 {
          line-height: 35px;
          width: 182px;
          font-size: 30px;
        }

        .certified-content {
          position: relative;
          p {
            text-align: center;
            white-space: none;
          }
          img {
            bottom: 35px;
            left: 140px;
          }
        }

        p {
          margin-top: 0px;
          width: 245px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
