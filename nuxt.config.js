export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: 'server',
  head: {
    title: 'YUMA-SMART',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:title',
        content: 'YUMA-POS – система автоматизации для ресторана, кафе, доставки еды',
        vmid: 'og:title',
        hid: 'og:title'
      },
      { hid: 'og:description', property: 'og:description', vmid: 'og:description',
        content: '' 
      },
      {
        property: 'og:image',
        content: '//yuma.biz/yuma_logo.png',
        vmid: 'og:image',
        hid: 'og:image'
      },
      {
        property: 'og:type',
        content: 'website',
        vmid: 'og:type',
        hid: 'og:type'
      },
      {
        property: 'og:site_name',
        content: 'YUMA-SMART',
        vmid: 'og:site_name',
        hid: 'og:site_name'
      },
      {
        property: 'og:locale',
        content: 'ru_RU',
        vmid: 'og:locale',
        hid: 'og:locale'
      },
      {
        property: 'og:locale:alternate',
        content: 'en_US',
        vmid: 'og:locale:alternate',
        hid: 'og:locale:alternate'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },
  serverMiddleware: [
    '~/api/contact.js'
  ],

  generate: {
    fallback: '404.html'
  },


  server: {
    port: 8882,
    host: '0.0.0.0',
    timing: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/lightGallery.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-lazy-load',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '90798219',
        webvisor: true,
        clickmap: true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        ecommerce:"dataLayer"
      }
    ],
    ['@nuxtjs/google-analytics', {
      id: 'G-YCDRYLNREC'
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
