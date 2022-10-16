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
        content: 'YUMA-SMART',
        vmid: 'og:title',
        hid: 'og:title'
      },
      {
        property: 'og:image',
        content: '//yuma-smart.ru/yuma_logo.png',
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
        name: 'yandex-verification',
        content: '79a60ea038531bcf'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },
  serverMiddleware: [
    '~/api/contact.js'
  ],

  generate: {
    fallback: '404.html'
  },


  server: {
    port: 8880,
    host: '0.0.0.0',
    timing: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '88835026',
        webvisor: true,
        clickmap: true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        ecommerce:"dataLayer"
      }
    ],
    ['@nuxtjs/google-analytics', {
      id: 'G-FNBBLE7K91'
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
