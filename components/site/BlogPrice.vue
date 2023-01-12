<template>
  <section class="container">
    <div class="pricing">
        <div class="pratice-advice">
            <p>Conselhos práticos</p>
            <h1>Pacotes Disponíveis</h1>
            <p>Formações com conteúdo do mercado de trabalho:
             sequências de cursos e conteúdo para você
             se capacitar todos os dias.</p>
        </div>
        <div class="package">
            <div class="free">
                <div class="header">
                    <h2>FREE</h2>
                    <p>Acesso a 100 videos introdutórios da paltaforma</p>
                </div>
                <div class="price">
                    <p>0</p>
                    <p>R$</p>
                    <p>Por Mês</p>
                </div>
                <div class="products">
                    <p>Introdução a desenvolvimento de Software</p>
                    <p>Tratamento de dados LGPD</p>
                    <p>Segurança de dados</p>
                </div>
                <button class="button">Assine Agora</button>
            </div>
            <div class="standard">
                <div class="header">
                    <h2>STANDARD</h2>
                    <p>Acesso a TODOS os videos e lives com professores da plataforma.</p>
                </div>
                <div class="price">
                    <p>200</p>
                    <p>R$</p>
                    <p>Ano</p>
                </div>
                <div class="products">
                    <p>Todos os cursos</p>
                    <p>Tratamento de dados LGPD</p>
                    <p>Segurança de dados</p>
                    <p>Lives com professores</p>
                    <p>chat de dúvidas</p>
                </div>
                <button class="button" style="background: #ffffff; color:#5434af">
                    Assine Agora
                </button>
            </div>
            <div class="business">
                <div class="header">
                    <h2>BUSINESS</h2>
                    <p>Acesso a TODOS os videos e lives com professores da plataforma.</p>
                </div>
                <div class="price">
                    <p>20</p>
                    <p>R$</p>
                    <p>Por Mês</p>
                </div>
                <div class="products">
                    <p>Todos os cursos</p>
                    <p>Tratamento de dados LGPD</p>
                    <p>Segurança de dados</p>
                    <p>Lives com professores</p>
                    <p>chat de dúvidas</p>
                </div>
                <button class="button">Assine Agora</button>
            </div>
        </div>

    </div>
  </section>
</template>

<script>
export default {
    name: 'BlogPrice',
}
</script>

<style scoped lang="scss">
@import '../../assets/css/main';

.container {
    height:1200px;
    width: 100%;
    background: $colorPrimary;
    margin-top: 80px;
    .pricing {
        display: flex;
        flex-direction: column;
        .pratice-advice {
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
                width: 446px;
                height: 50px;
                font-family: $font;
                font-style: normal;
                font-weight: 700;
                font-size: 40px;
                line-height: 50px;
                letter-spacing: 0.2px;
                color: #252B42;
                text-align: start;
            }

            :nth-child(3) {
                width: 463px;
                height: 40px;
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0.2px;
                color: #737373;
                text-align: start;
                margin-top: 10px;;

            }
        }
        .package {
            display: flex;
            width: 1105px;
            height: 693px;
            margin-top: 100px;
            align-items: center;
            margin: 150px auto;

            .free {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 40px;
                gap: 30px;
                width: 335px;
                height: 430px;
                background: #FFFFFF;
                border: 1px solid #DEDEDE;
                box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
                border-radius: 10px;

                .header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0px;
                    width: 148px;
                    height: 80px;
                    h2 {
                        width: 51px;
                        height: 28px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 28px;
                        letter-spacing: 0.1px;
                        color: #252B42;
                    }
                    :nth-child(2) {
                        width: 148px;
                        height: 46px;
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 20px;
                        text-align: center;
                        letter-spacing: 0.1px;
                        color: #737373;
                        margin-top: 3px;
                    }
                }
                .price {
                    display: flex;
                    align-items: center;
                    padding: 0px;
                    width: 153px;
                    height: 61px;
                    justify-content: space-evenly;
                    position: relative;

                    :nth-child(1) {
                        width: 55px;
                        height: 84px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 74px;
                        line-height: 84px;
                        letter-spacing: 0.2px;
                        color: #252B42;
                    }
                    :nth-child(2) {
                        width: 13px;
                        height: 28px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 28px;
                        letter-spacing: 0.1px;
                        color: #252B42;
                        position: absolute;
                        top: 0px;
                    }
                    :nth-child(3) {
                        width: 78px;
                        height: 23px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 23px;
                        letter-spacing: 0.1px;
                        color: #374754;
                        margin-top: 8px;
                        margin-right: 13px;
                    }
                }

                .products {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0px;
                    width: 255px;
                    height: 140px;
                    justify-content: space-between;

                    p {
                        width: 200px;
                        height: 28px;
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 18px;
                        letter-spacing: 0.2px;
                        color: #252B42;
                    }
                }
            }
            .standard {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 83px 40px;
                gap: 30px;
                width: 335px;
                height: 450px;
                background: $colorSecondary;
                border: 1px solid #DEDEDE;
                box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
                border-radius: 10px;
                margin-left: 50px;
                margin-bottom: 50px;

                .header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0px;
                    width: 148px;
                    height: 80px;
                    h2 {
                        width: 81px;
                        height: 28px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 28px;
                        letter-spacing: 0.1px;
                        color: #ffffff;
                    }
                    :nth-child(2) {
                        width: 178px;
                        height: 46px;
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 20px;
                        text-align: center;
                        letter-spacing: 0.1px;
                        color: #ffffff;
                        margin-top: 3px;

                    }
                }
                .price {
                    display: flex;
                    align-items: center;
                    padding: 0px;
                    width: 153px;
                    height: 61px;
                    justify-content: space-evenly;
                    position: relative;

                    :nth-child(1) {
                        width: 55px;
                        height: 84px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 74px;
                        line-height: 84px;
                        letter-spacing: 0.2px;
                        color: #ffffff;
                    }
                    :nth-child(2) {
                        width: 13px;
                        height: 28px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 28px;
                        letter-spacing: 0.1px;
                        color: #ffffff;
                        position: absolute;
                        top: 0px;
                        left: 130px;
                    }
                    :nth-child(3) {
                        width: 78px;
                        height: 23px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 23px;
                        letter-spacing: 0.1px;
                        color: #ffffff;
                        margin-top: 8px;
                        margin-left: 75px;
                    }
                }

                .products {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0px;
                    width: 255px;
                    height: 240px;
                    justify-content: space-between;

                    p {
                        width: 189px;
                        height: 28px;
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 18px;
                        letter-spacing: 0.2px;
                        color: #ffffff

                    }
                }

            }
            .business {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 40px;
                gap: 30px;
                width: 335px;
                height: 450px;
                background: #FFFFFF;
                border: 1px solid #DEDEDE;
                box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
                border-radius: 10px;
                margin-left: 50px;
                margin-bottom: 20px;
                .header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0px;
                    width: 148px;
                    height: 80px;
                    h2 {
                        width: 81px;
                        height: 28px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 28px;
                        letter-spacing: 0.1px;
                        color: #252B42;
                    }
                    :nth-child(2) {
                        width: 178px;
                        height: 46px;
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 20px;
                        text-align: center;
                        letter-spacing: 0.1px;
                        color: #737373;
                        margin-top: 3px;
                    }
                }
                .price {
                    display: flex;
                    align-items: center;
                    padding: 0px;
                    width: 153px;
                    height: 61px;
                    justify-content: space-evenly;
                    position: relative;

                    :nth-child(1) {
                        width: 55px;
                        height: 84px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 74px;
                        line-height: 84px;
                        letter-spacing: 0.2px;
                        color: #252B42;
                    }
                    :nth-child(2) {
                        width: 13px;
                        height: 28px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 28px;
                        letter-spacing: 0.1px;
                        color: #252B42;
                        position: absolute;
                        top: 0px;
                        left: 100px;
                    }
                    :nth-child(3) {
                        width: 78px;
                        height: 23px;
                        font-family: $font;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 23px;
                        letter-spacing: 0.1px;
                        color: #374754;
                        margin-top: 8px;
                        margin-left: 39px;
                    }
                }

                .products {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0px;
                    width: 255px;
                    height: 240px;
                    justify-content: space-between;

                    p {
                        width: 189px;
                        height: 28px;
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 18px;
                        letter-spacing: 0.2px;
                        color: #252B42;

                    }
                }
            }
        }
    }
}

@media(max-width: 768px) {
    .container {
    height:100%;

    margin-top: 40px;
    .pricing {

        .pratice-advice {
            width: 400px;
            height: 134px;
            margin: 40px auto;

            :nth-child(1) {

            }

            h1 {

            }

            :nth-child(3) {
                width: 272px;
                height: 80px;
            }
        }
        .package {
            display: flex;
            width: 100%;
            height: 100%;
            margin-top: 100px;
            align-items: center;
            margin: 10px auto;
            flex-direction: column;

            .free {
                margin-bottom: 50px;
            }
            .standard {
                margin-left: 0px;
                margin-bottom: 50px;
            }
            .business {
                margin-left: 0px;
                margin-bottom: 20px;

            }
        }
    }
}
}

@media(max-width: 500px) {
    .container {
    height:100%;

    margin-top: 50px;
    .pricing {

        .pratice-advice {
            width: 280px;

            :nth-child(1) {

            }

            h1 {
                width: 280px;
                font-size: 30px;
                line-height: 30px;
            }

            :nth-child(3) {
                width: 272px;
                height: 80px;
            }
        }
        .package {
            display: flex;
            width: 100%;
            height: 100%;
            margin-top: 100px;
            align-items: center;
            margin: 10px auto;
            flex-direction: column;

            .free {
                margin-bottom: 50px;
                width: 200px;
            }
            .standard {
                margin-left: 0px;
                margin-bottom: 50px;
                width: 200px;
            }
            .business {
                margin-left: 0px;
                margin-bottom: 20px;
                width: 200px;

            }
        }
    }
}
}

</style>
