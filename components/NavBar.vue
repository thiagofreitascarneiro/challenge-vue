<template>
  <div>
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <font-awesome-icon style="margin-top: 20px; margin-right: 20px;" icon="fa-solid fa-bars" />
      </label>
      <label class="logo">
        <img src="../assets/images/logo.png">
      </label>
      <ul>
        <li>
          <nuxt-link class="active" to="/">
            Início
          </nuxt-link>
        </li>
        <li><a href="#">Sobre</a></li>
      </ul>
	  </nav>
  </div>
</template>

<script>




export default {
  name:'NavBar'
}
</script>

<style lang="scss" scoped>
@import "../assets/css/main";

nav {
  background: $mainColor;
  height: 80px;
  width: 100%;
  box-shadow: 0 2px 12px -2px rgba(0,0,0,.9);

  ul {
    float: right;
    margin-right: 20px;

    li {
      display: inline-block;
      line-height: 80px;
      margin: 0 5px;

      a {
        color: $colorSecundary;
        font-size: 19px;
        font-weight: 700;
        padding: 7px 13px;
        border-radius: 3px;
        text-transform: uppercase;
        text-decoration: none;
        &:active{
          background: #1d075f;
          transition: .5s;
        }
        &:hover {
          background: #1d075f;
          transition: .5s;
          color: $white;
        }
      }
    }
  }
}

.logo {
  padding: 30px;
  line-height: 110px;
  img {


  }
}

.checkbtn {
  font-size: 30px;
  color: $white;
  float: right;
  line-height: 40px;
  cursor: pointer;
  display: none;

}

#check {
  display: none;
  svg {
    margin-top: 15px;
  }
}

@media(max-width: 952px) {
  .logo {
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a {
    font-size: 16px;
  }
}

@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }
  ul {
    position:fixed;
    width: 100%;
    height: 55vh;
    background: #1d075f;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
    z-index: 1;
  }

  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li {
    font-size: 20px;
  }

  a {
    font-size: 20px;
    &:active{
          background: none;
          color: #5434af;
        }
        &:hover {
          background: none;
          color: #5434af;
        }
    }

    #check:checked ~ ul {
      left: 0;
    }

}

@media (max-width: 350px) {
  .logo {
    img  {
      width: 20vh;
    }

  }
}
</style>
