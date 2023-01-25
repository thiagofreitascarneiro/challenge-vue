<template>
<div class="container">
  <div class="loading" v-if="loading">
    <PageLoading/>
  </div>
  <div class='content' v-else>
    <div class="content-product" >
      <div class='title-and-description'>

        <h1>{{content.title}}</h1>
        <p>{{content.description}}</p>
      </div>

      <picture class="image-product">
        <img src="../../assets/images/select.svg">
      </picture>
    </div>

    <LinkContent
      :linkProps="content"
      v-if="content.type == 'link'"
      :key="content.id"
    />

    <VideoContent
      :videoProps="content"
      v-if="content.type == 'video'"
      :key="content.id"
    />

    <ImageContent
      :imgProps="content"
      v-if="content.type == 'image'"
      :key="content.id"
    />

    <SlideContent
      :slideProps="content"
      v-if="content.type == 'document'"
      :key="content.id"
    />

  </div>
</div>

</template>

<script>
import gql from 'graphql-tag';
import PageLoading from '@/components/PageLoading';

export default {
  name: 'contentCard',
  components: {
    PageLoading,
    LinkContent: () => import('@/components/LinkContent'),
    ImageContent: () => import('@/components/ImageContent'),
    VideoContent: () => import('@/components/VideoContent'),
    SlideContent: () => import('@/components/SlideContent')
  },
  data() {
    return {
      content: null,
      loading: false,

    }
  },

  async created() {
    this.loading = true
    const {data} = await this.$apollo.query({
    query: gql`
    query getProductId($id: String!) {
      getContent(id: $id) {
        id
        title
        description
        allow_download
        embeddable
        url
        type
        }
      }
    `,
    variables:{
      id: this.$route.params.id
      }
    })
    this.content = data.getContent
    this.loading = false

  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/main";

.container {
  display: flex;
  flex-direction: column;
  background: #EFF0F3;
  margin-top: 5px;
  margin-bottom: 120px;

  .loading {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;

    .image {
      display: flex;
      margin: 0 auto;
      img {
        margin: 0 auto;
        width: 900px;
      }
    }

    .content-product {
    width: 835px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0px;
    background: #FFFFFF;
    border-radius: 24px;
    margin: 20px auto;

    .title-and-description {
       h1 {
      margin-top: 32px;
      margin-left: 32px;
      margin-bottom: 8px;
      width: 564px;
      height: 100%;
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      color: #111111;

    }
    p {
      width: 764px;
      height: 100%;
      margin-left: 32px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 32px;

    }
    }

    .image-product {
      position: relative;
      img {
         right: 32px;
         top: 32px;
         position: absolute;
         z-index: 0;
      }
    }

  }

  }
}

@media(max-width: 768px) {
.container {
  .content {
    .content-product {
      width: 635px;

    .title-and-description {
       h1 {
            width: 464px;
    }
    p {
     width: 564px;

    }
    }
    .image-product {
      position: relative;
      img {
         right: 32px;
         top: 32px;
         position: absolute;
      }
    }

    }
  }
  }
}

@media(max-width: 650px) {
.container {
  .content {
    .content-product {
      width: 435px;

    .title-and-description {
       h1 {
            width: 364px;
    }
    p {
     width: 364px;

    }
    }
    .image-product {
      position: relative;
      img {
        right: -24px;
        top: 21px;
      }
    }
  }
  }
  }
}

@media(max-width: 450px) {
.container {
  .content {
    .content-product {
      width: 300px;

    .title-and-description {
      h1 {
          width: 264px;
        }
      p {
        width: 264px;
      }
    }
    .image-product {
      position: relative;
      img {
        right: 14px;
        top: 5px;
      }
    }
  }
  }
  }
}

</style>
