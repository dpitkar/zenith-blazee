export default defineNuxtConfig({
  compatibilityDate: '2025-05-30',

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Playfair Display': {
        wght: [400, 500, 600, 700],
        ital: [400]
      }
    },
    display: 'swap',
    preconnect: true
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      htmlAttrs: { lang: 'en' },
      title: 'Zenith Blazee | Mutual Fund Distributor',
      meta: [
        { name: 'theme-color', content: '#0D1B2A' }
      ]
    }
  }
})
