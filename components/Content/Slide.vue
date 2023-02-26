<template>
  <div class="slides">
    <iframe :src="slideProps.url"></iframe>
  </div>
</template>

<script>
export default {
  name: "SlideContent",
  props: {
    slideProps: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main";

.slides {
  iframe {
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 920px;
    height: 615px;
  }
}

@media (max-width: 768px) {
  .slides {
    iframe {
      width: 600px;
      height: 400px;
    }
  }
}

@media (max-width: 650px) {
  .slides {
    iframe {
      width: 420px;
      height: 400px;
    }
  }
}

@media (max-width: 450px) {
  .slides {
    iframe {
      width: 250px;
      height: 400px;
    }
  }
}
</style>
