export default {
  ssr: false,
  head: {
    title: "challenge-vue",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM Serif Display&display=swap",
      },
    ],
  },

  css: ["@/assets/css/main.scss"],

  components: true,

  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/apollo",
    "@nuxtjs/fontawesome",
    "@nuxtjs/google-fonts",
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  modules: ["@nuxtjs/apollo", "@nuxtjs/eslint-module"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          "https://us-central1-challenge-334613.cloudfunctions.net/api/graphql",
      },
    },
  },

  axios: {
    baseURL: "/",
  },

  styleResources: {
    scss: ["~assets/scss/mixins.scss", "~assets/scss/variables.scss"],
  },
};
