<template>
  <div class="container">
    <input
      class="search-input"
      type="text"
      v-model="search"
      placeholder="pesquisar..."
    />
    <div class="contents">
      <div v-if="loading">
        <PageLoading />
      </div>
      <Content
        v-for="content in filteredContent"
        :key="content.id"
        :product="content"
      >
        <nuxt-link :to="`/content/${content.id}`">
          <button class="button-purple">Clique Aqui</button>
        </nuxt-link>
      </Content>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Content from "@/components/Content";
import PageLoading from "@/components/PageLoading";

export default {
  name: "indexPage",

  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Content,
    PageLoading,
  },

  data() {
    return {
      search: "",
      contentCard: "",
      targetId: "",
      contents: null,
      loading: false,
    };
  },

  async created() {
    this.loading = true;
    const { data } = await this.$apollo.query({
      query: gql`
        query getAllContents {
          contents {
            embeddable
            allow_download
            id
            title
            description
            url
            type
          }
        }
      `,
    });
    this.contents = data.contents;
    this.loading = false;
  },

  computed: {
    filteredContent() {
      const regex = new RegExp(this.search, "i");
      return this.contents?.filter((content) => content.title.match(regex));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main";

.container {
  display: flex;
  flex-direction: column;
  background: #eff0f3;
  margin-top: 10px;
  margin-bottom: 120px;
  h1 {
    margin-top: 50px;
    text-align: center;
    font-size: 35px;
    color: $colorSecondary;
    font-family: $font;
  }

  .search-input {
    width: 700px !important;
    height: 30px;
    margin: 100px auto;
    padding: 10px;
    border: 1px solid rgb(30 60 90 / 10%);
    border-radius: $borderRadius;

    &:focus-visible {
      outline-color: $colorSecondary;
    }
  }

  .contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .container {
    .search-input {
      width: 400px !important;
      padding: 15px;
    }

    .contents {
      flex-direction: column;
      .button-purple {
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
      }
    }
  }
}

@media (max-width: 450px) {
  .container {
    h1 {
      font-size: 25px;
    }

    .search-input {
      width: 300px !important;
    }

    .contents {
      flex-direction: column;
    }
  }
}

@media (max-width: 370px) {
  .container {
    h1 {
      font-size: 25px;
    }

    .search-input {
      width: 250px !important;
    }

    .contents {
      flex-direction: column;

      .button-purple {
        width: 100px;
        height: 25px;
        margin-top: 5px;
      }
    }
  }
}
</style>
