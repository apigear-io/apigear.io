export default {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://content.nuxtjs.org/installation
    '@nuxt/content',
    '@nuxtjs/gtm',
    /* https://github.com/nuxt-community/sitemap-module */
    '@nuxtjs/sitemap'
  ],
  /*
   ** Google Tag Maanger configuration
   ** See https://github.com/nuxt-community/gtm-module
   */
  gtm: {
    id: 'GTM-KRBL7NF',
    pageTracking: true
  },
  sitemap: {
    hostname: 'https://apigear.io',
    gzip: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  // https://content.nuxtjs.org/configuration/
  content: {
    markdown: {
      prism: {
        theme: 'prismjs/themes/prism-coy.css'
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#6C63FF'
          //     secondary: '#673ab7',
          //     accent: '#ff5722',
          //     error: '#f44336',
          //     warning: '#ff9800',
          //     info: '#00bcd4',
          //     success: '#4caf50'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
