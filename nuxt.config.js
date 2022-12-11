
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'challenge-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Metropolis:400,700'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    // SCSS file in the project
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/apollo',
  ],
  // Apollo configuration
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://us-central1-challenge-334613.cloudfunctions.net/api/graphql',
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss'
    ]
  },


}
