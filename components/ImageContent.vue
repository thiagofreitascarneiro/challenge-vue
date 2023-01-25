<template>
  <div class='image'>
    <img :src="imgProps.url">
  </div>
</template>

<script>
export default {
name: 'ImageContent',
 props: {
  imgProps: {
    type: Object,
    required: true
  }
}
}
</script>

<style lang="scss" scoped>
@import "../assets/css/main";

.image {
  display: flex;
  margin: 0 auto;
  img {
    margin: 0 auto;
    width: 900px;
  }
}

@media(max-width: 768px) {
  .image {
    display: flex;
    margin: 0 auto;
    img {
      width: 65vh;
    }
    iframe {
      margin: 0 auto;
    }
  }
}

@media(max-width: 650px) {
  .image {
      img {
      width: 49vh;
    }
  }
}

@media(max-width: 450px) {
  .image {
      img {
      width: 35vh;
    }
  }
}

</style>
