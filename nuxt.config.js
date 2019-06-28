import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Vue and Me: Vue and Wine',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Vue and Me: Vue and Wine'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: pkg.description
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://vueand.me/logo.jpg'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://vueand.me'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Vue and Me: Vue and Wine'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://vueand.me/logo.jpg'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'en'
    }
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['~/plugins/vac.client.js'],
  modules: [],
  devModules: ['@nuxtjs/tailwindcss'],
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
