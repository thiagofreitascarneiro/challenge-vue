<template>
  <div class="video">
    <iframe :src="videoProps.url"></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoContent",
  props: {
    videoProps: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main";

.video {
  iframe {
    margin: 20px auto;
    width: 620px;
    height: 415px;
  }
}

@media (max-width: 768px) {
  .video {
    iframe {
      width: 450px;
    }
  }
}

@media (max-width: 650px) {
  .video {
    iframe {
      width: 350px;
    }
  }
}

@media (max-width: 450px) {
  .video {
    iframe {
      width: 270px;
      height: 200px;
    }
  }
}
</style>
