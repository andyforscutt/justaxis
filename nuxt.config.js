export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  server: {
    port: "3000",
    host: "0.0.0.0",
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    htmlAttrs: {
      lang: "en-GB",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "JusTaxis Taxi Company Glastonbury Somerset",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      {
        hid: "og:locale",
        property: "og:locale",
        content: "en_GB",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Taxi Cab in Glastonbury, Somerset",
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "Taxi Cab in Glastonbury, Somerset",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "fb:app_id",
        property: "fb:app_id",
        content: "579694722720207",
      },
      {
        hid: "article:publisher",
        name: "article:publisher",
        content: "https://www.facebook.com/justaxis.biz",
      },
      {
        hid: "article:author",
        name: "article:author",
        content: "https://www.facebook.com/justaxis.biz",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/Poppins-Regular.woff2",
        crossorigin: "anonymous",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css", "~/assets/scss/index.scss"],
  styleResources: {
    scss: ["~/assets/scss/*.scss"],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
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
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/juliomrqz/nuxt-optimized-images
    "@aceforth/nuxt-optimized-images",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    //Doc: https://github.com/nuxt-community/robots-module
    "@nuxtjs/robots",
    // Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
    "@nuxtjs/sitemap",
  ],
  robots: {
    UserAgent: "*",
    Allow: "/",
    Disallow: "/contact-us-success",
    Sitemap: "https://justaxis.biz/sitemap.xml",
  },
  sitemap: {
    hostname: "https://justaxis.biz",
    gzip: true,
    exclude: ["/contact-us-success"],
  },
  optimizedImages: {
    optimizeImages: true,
    imagesName: ({ isDev }) =>
      isDev
        ? "[path][name][hash:optimized].[ext]"
        : "img/[name].[contenthash:7].[ext]",
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
