<template>
  <section class="container">
    <div class="package">
      <div class="left-content">
        <div class="line-red"></div>
        <h1>Pacotes Aprovados</h1>
        <p>
          Você vai estudar, praticar, discutir e se aprofundar em uma plataforma
          que respira tecnologia.
        </p>
        <div class="certified-content">
          <p>Nossos certificados</p>
          <img src="../../assets/images/seta.png" />
        </div>
      </div>
      <div class="right-content">
        <div class="certified">
          <picture>
            <img
              fill="#5434af"
              style="color: #5434af"
              src="../../assets/images/teacher.svg"
            />
          </picture>
          <h2>Professor Certificado</h2>
          <div class="line-red-certified"></div>
          <p>Cerficação com os melhores professores do mercado.</p>
        </div>
        <div class="certified">
          <picture>
            <img src="../../assets/images/expert.svg" />
          </picture>
          <h2>Especialista em Educação</h2>
          <div class="line-red-certified"></div>
          <p>
            Professores especialistas em ensinar, elaborar e compreender o
            método melhor pra cada aluno.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPackage',
};
</script>

<style scoped lang="scss">
@import '../../assets/css/main';

.container {
  height: 490px;
  width: 100%;
  margin-top: 183px;
  background: $white;
  .package {
    display: flex;
    justify-content: space-around;
    .left-content {
      display: flex;
      flex-direction: column;

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
        width: 344px;
        height: 50px;
        font-family: $font;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 0.2px;
        color: #252b42;
        margin-top: 35px;
        justify-content: flex-start;
      }

      p {
        width: 345px;
        height: 60px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #737373;
        margin-top: 35px;
        text-align: start;
      }
    }

    .right-content {
      display: flex;
      justify-content: space-around;
      .certified {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 35px 40px;
        gap: 20px;
        width: 249px;
        height: 252px;
        background: #ffffff;
        box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
        margin-right: 25px;

        h2 {
          width: 157px;
          height: 24px;
          font-family: $font;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: 0.1px;
          color: #252b42;
          white-space: nowrap;
        }
        .line-red-certified {
          width: 50px;
          height: 2px;
          background: #e74040;
        }
        p {
          width: 162px;
          height: 60px;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.2px;
          color: #737373;
          text-align: start;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    height: 671px;
    width: 100%;
    margin-top: 183px;
    .package {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .left-content {
        display: flex;
        flex-direction: column;
        margin: 0 auto;

        .line-red {
        }

        .certified-content {
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

      .right-content {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        .certified {
          margin: 30px auto;

          h2 {
          }
          .line-red-certified {
          }
          p {
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  @media (max-width: 768px) {
    .container {
      height: 671px;
      width: 100%;
      margin-top: 183px;
      .package {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        .left-content {
          display: flex;
          flex-direction: column;
          margin: 0 auto;

          .line-red {
          }

          .certified-content {
            p {
            }
            img {
            }
          }

          h1 {
            font-size: 28px;
            width: 244px;
            line-height: 30px;
          }

          p {
            width: 245px;
          }
        }

        .right-content {
          .certified {
            width: 209px;

            h2 {
            }
            .line-red-certified {
            }
            p {
            }
          }
        }
      }
    }
  }
}
</style>
