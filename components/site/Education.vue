<template>
  <section class="container">
    <div class="education">
        <div class="watch-cources">
            <p>Time</p>
            <h1>Obtenha educação de qualidade</h1>
            <p>Estude com os melhores professores do mercado em diversas aréas para
                você aprender com situaçoes reais.</p>
        </div>
        <div class="teacher">
            <div class="teacher-1">
                <picture>
                    <img src="../../assets/images/teacher-1.png"/>
                </picture>
                <p>Julian Jameson</p>
                <p>DevOps</p>
                <picture>
                    <img src="../../assets/images/social-media.png">
                </picture>
            </div>
            <div class="teacher-2">
                <picture>
                    <img src="../../assets/images/teacher-2.png"/>
                </picture>
                <p>Billy Jack</p>
                <p>Software Engineer</p>
                <picture>
                    <img src="../../assets/images/social-media.png">
                </picture>

            </div>
            <div class="teacher-3">
                <picture>
                    <img src="../../assets/images/teacher-3.png"/>
                </picture>
                <p>Vanessa Albuquerque</p>
                <p>Cyber Security</p>
                <picture>
                    <img src="../../assets/images/social-media.png">
                </picture>
            </div>
            <div class="teacher-4">
                <picture>
                    <img src="../../assets/images/teacher-4.png"/>
                </picture>
                <p>Flavia Slapelis</p>
                <p>Designer</p>
                <picture>
                    <img src="../../assets/images/social-media.png">
                </picture>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'BlogEducation'
}
</script>

<style scoped lang="scss">
@import '../../assets/css/main';

.container {
    width: 100%;
    height: 849px;

    .education {
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
                width: 49px;
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
                margin-top: 60px;

            }
        }
        .teacher {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 375px;
            margin-top: 112px;
            .teacher-1 {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0px;
                width: 238px;
                height: 375px;
                box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
                border-radius: 20px;
                picture {
                    img {
                        border-radius: 20px 20px 0px 0px;
                    }
                }
                :nth-child(2) {
                    width: 132px;
                    height: 24px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    letter-spacing: 0.1px;
                    color: #252B42;
                    margin-top: 20px;
                }

                :nth-child(3) {
                    width: 65px;
                    height: 16px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                    text-align: center;
                    letter-spacing: 0.2px;
                    color: #737373;
                    margin-top: 10px;
                }
                :nth-child(4) {
                    margin-top: 10px;
                    img {

                    }
                }
            }
            .teacher-2 {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0px;
                width: 238px;
                height: 375px;
                box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
                border-radius: 20px;
                margin-left: 30px;

                picture {
                    img {
                        border-radius: 20px 20px 0px 0px;
                    }
                }
                :nth-child(2) {
                    width: 132px;
                    height: 24px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    letter-spacing: 0.1px;
                    color: #252B42;
                    margin-top: 20px;
                }

                :nth-child(3) {
                    width: 95px;
                    height: 16px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                    text-align: center;
                    letter-spacing: 0.2px;
                    color: #737373;
                    margin-top: 10px;
                }
                :nth-child(4) {
                    margin-top: 10px;
                    img {

                    }
                }
            }
            .teacher-3 {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0px;
                width: 238px;
                height: 375px;
                box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
                border-radius: 20px;
                margin-left: 30px;

                picture {
                    img {
                        border-radius: 20px 20px 0px 0px;
                    }
                }
                :nth-child(2) {
                    width: 170px;
                    height: 24px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    letter-spacing: 0.1px;
                    color: #252B42;
                    margin-top: 20px;
                }

                :nth-child(3) {
                    width: 80px;
                    height: 16px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                    text-align: center;
                    letter-spacing: 0.2px;
                    color: #737373;
                    margin-top: 10px;
                }
                :nth-child(4) {
                    margin-top: 10px;
                    img {

                    }
                }
            }
            .teacher-4 {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0px;
                width: 238px;
                height: 375px;
                box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
                border-radius: 20px;
                margin-left: 30px;

                picture {
                    img {
                        border-radius: 20px 20px 0px 0px;
                    }
                }
                :nth-child(2) {
                    width: 132px;
                    height: 24px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    letter-spacing: 0.1px;
                    color: #252B42;
                    margin-top: 20px;
                }

                :nth-child(3) {
                    width: 65px;
                    height: 16px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                    text-align: center;
                    letter-spacing: 0.2px;
                    color: #737373;
                    margin-top: 10px;
                }
                :nth-child(4) {
                    margin-top: 10px;
                    img {

                    }
                }
            }
        }
    }
}

@media(max-width: 768px) {
    .container {
    width: 100%;
    height: 1800px;
    margin-top: 250px;

    .education {
        display: flex;
        flex-direction: column;
        .watch-cources {
            width: 400px;
            height: 134px;
            margin: 40px auto;
            width: 391px;

            :nth-child(1) {

            }

            h1 {

            }
            :nth-child(3) {

            }
        }
        .teacher {
           flex-direction: column;
           margin-top: 600px;
           margin: 50px auto;
           width: 300px;
           justify-content: space-between;
            .teacher-1 {
                margin: 0 auto;
                picture {
                    img {

                    }
                }
                :nth-child(2) {

                }

                :nth-child(3) {

                }
                :nth-child(4) {

                    img {

                    }
                }
            }
            .teacher-2 {
                margin: 30px auto;

                picture {
                    img {

                    }
                }
                :nth-child(2) {

                }

                :nth-child(3) {

                }
                :nth-child(4) {

                    img {

                    }
                }
            }
            .teacher-3 {

                margin: 30px auto;

                picture {
                    img {

                    }
                }
                :nth-child(2) {

                }

                :nth-child(3) {

                }
                :nth-child(4) {

                    img {

                    }
                }
            }
            .teacher-4 {
                margin: 30px auto;
                picture {
                    img {

                    }
                }
                :nth-child(2) {
                }

                :nth-child(3) {

                }
                :nth-child(4) {

                    img {

                    }
                }
            }
        }
    }
}
}

@media(max-width: 568px) {
    .container {


    .education {

        .watch-cources {
            width: 400px;
            height: 134px;
            margin: 40px auto;
            width: 291px;

            :nth-child(1) {

            }

            h1 {
               width: 291px;
               font-size: 30px;
               line-height: 40px;
            }
            :nth-child(3) {
                width: 291px;
            }
        }
    }
}
}

</style>
