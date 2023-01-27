<template>
  <section>
    <footer>
      <div class="boxs">
        <h2>Inicio</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Download</a></li>
        </ul>
      </div>
      <div class="boxs">
        <h2>Informações</h2>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Email</a></li>
        </ul>
      </div>
      <div class="boxs">
        <h2>Suporte</h2>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Telefone</a></li>
          <li><a href="#">Chat</a></li>
        </ul>
      </div>
      <div class="boxs">
        <h2>Sobre nós</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti
          autem unde inventore facilis officiis optio rerum tempora consequatur
          nulla distinctio odit, laborum laudantium repudiandae quidem fugiat
          eaque eveniet? Eum!
        </p>
      </div>
    </footer>
    <div class="footer">
      <label class="logo">
        <img src="../assets/images/logo.png" />
      </label>
      <div class="social-midia">
        <div class="social">
          <font-awesome-icon icon="fa-brands fa-whatsapp" class="fa-2x" />
        </div>
        <div class="social">
          <font-awesome-icon icon="fa-brands fa-instagram" class="fa-2x" />
        </div>
        <div class="social">
          <font-awesome-icon icon="fa-brands fa-twitter" class="fa-2x" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main";

footer {
  margin-top: 0px;
  width: 100%;
  min-height: 150px;
  background: $colorSecondary;
  display: flex;

  .boxs {
    width: 320px;
    min-height: 150px;
    padding: 20px;
    text-align: center;

    h2 {
      color: #fff;
    }

    p {
      color: #fff;
      text-align: center;
    }

    ul {
      li {
        margin: 10px 0px;
        list-style: none;
        a {
          color: #ddd;
          text-decoration: none;
        }
        a:hover {
          color: #fff;
        }
      }
    }
  }
  .boxs:nth-child(4) {
    width: 400px;
  }
}

.footer {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background: $mainColor;

  .logo {
    padding: 10px;
    line-height: 10px;
    img {
    }
  }

  h2 {
    color: #fff;
  }

  .social-midia {
    display: flex;
    .social {
      width: 40px;
      margin: 10px auto;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: $mainColor;
      margin: 10px;
      color: $colorSecondary;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s linear;

      a {
        color: #000;
        font-size: 1.5em;
        transition: color 0.3s linear;
      }
      .social:hover {
        background: #444;
        a {
          color: #fff;
        }
      }
    }
  }
}

@media (max-width: 950px) {
  footer {
    flex-direction: column;
    justify-content: center;
    .logo {
      font-size: 30px;
      padding-left: 50px;
    }
    .boxs {
      text-align: center;
      width: 100%;
      padding: 0px;
    }
    .boxs:nth-child(4) {
      width: 100%;
      text-align: center;
      padding: 0px;
    }
  }
}

@media (max-width: 415px) {
  footer {
    .logo {
      font-size: 10px;
      img {
        width: 20vh;
      }
    }
    .boxs {
    }
    .boxs:nth-child(4) {
    }
  }

  .footer {
    flex-direction: column;
    height: 120px;
    justify-content: center;
    text-align: center;
    .social-midia {
      justify-content: center;
    }
  }
}
</style>
