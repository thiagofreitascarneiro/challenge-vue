<template>
  <div class="container">
    <div>
      <a :href="linkProps.url" target="_blank">
        <button class="button">visualizar o conteúdo</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkContent',
  props: {
    linkProps: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/main';
</style>
