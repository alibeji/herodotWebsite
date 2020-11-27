export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: {
    color: 'rgba(25, 167, 166, 0.4)',
    height: '3px'
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/style.scss'
    ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{src: '~/plugins/bootstrap-vue', mode: 'client' }, {src: '~/plugins/gtm'}],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'vue-social-sharing/nuxt',
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap',
    // [
    //   "nuxt-cookie-control",
    //   {
    //     css: true,
    //     barDescription: 'We use third-party cookies so that we can better understand how you use our website, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
    //     barPosition: "bottom-right",
    //     blockIframe: true,
    //     colors: {
    //       barTextColor: "#fff",
    //       barBackground: "#13272E",
    //       barButtonColor: "#fff",
    //       barButtonBackground: "#16363c",
    //       barButtonHoverColor: "#fff",
    //       barButtonHoverBackground: "#216b6d",
    //       modalButtonBackground: "#16363c",
    //       modalButtonHoverColor: "#fff",
    //       controlButtonBackground: "#16363c",
    //       controlButtonHoverBackground: "#216b6d",
    //       controlButtonIconHoverColor: "#fff",
    //       controlButtonIconColor: "#fff",
    //       modalButtonHoverBackground: "#216b6d",
    //       checkboxActiveBackground: "#2e495e",
    //       checkboxInactiveBackground: "#ede1e1",
    //       checkboxActiveCircleBackground: "#00c58e",
    //       checkboxInactiveCircleBackground: "#f44336",
    //       checkboxDisabledBackground: "#ddd",
    //       checkboxDisabledCircleBackground: "#fff"
    //     }
    //   }
    // ]
  ],
  gtm: {
    id: 'GTM-N94MJ4C',
    enabled: true,
    layer: 'dataLayer',
    pageTracking: true,
    autoInit: true
  },
  sitemap: {
      hostname: 'https://www.playbygone.com',
      gzip: true,
      exclude: [
        '/404',
        '/cookies'
      ],
      routes: [
        {
          url: '/devlog',
          changefreq: 'weekly',
          priority: 0.6,
        },
        {
          url: '/devlog/**',
          changefreq: 'weekly',
          priority: 0.8,
        },
        {
          url: '/',
          changefreq: 'monthly',
          priority: 1,
        }
      ]
    },
  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: 'Default Cookies'
        },
        //else
        name:  'Default Cookies',
        //if multilanguage
        description: {
          en:  'Used for cookie control.'
        },
        //else
        description:  'Used for cookie control.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name:  'Google Tag Manager',
        description:  'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
        src:  'https://www.googletagmanager.com/gtag/js?id',
        async:  true,
        accepted: () =>{
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        },
        declined: () =>{
        }
      }
    ]
  },  
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }
  },
}
