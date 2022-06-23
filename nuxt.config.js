export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "beyond-canada-staging",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1,maximum-scale=1",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/swiper@8/swiper-bundle.min.css",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
        type: "text/javascript",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "https://unpkg.com/swiper@8/swiper-bundle.min.js",
        type: "text/javascript",
      },
    ],
  },
  router: {
    scrollBehavior: async function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve) => {
            if (x > 50) {
              return resolve(document.querySelector("#app"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
          console.log("scroll");
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0 };
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css", "~assets/scss/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/lazysizes", ssr: false },
    { src: "~/plugins/click-outside", ssr: false },
    "@/plugins/antd-ui",
    { src: "~/plugins/gmap", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/recaptcha",
  ],
  robots: {
    Sitemap: "https://beyondcanada.ca/sitemap.xml",
  },
  sitemap: {
    hostname: "https://beyondcanada.ca",
    i18n: true,
  },
  styleResources: {
    scss: ["./assets/scss/variables.scss", "./assets/scss/projects.scss", "./assets/scss/util.scss"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.API_URL || "https://beyond-canada-back-staging.herokuapp.com", // Used as fallback if no runtime config is provided
  },
  recaptcha: {
    siteKey: "6LefjHAfAAAAAJLPpUuFaJkXEkOnXTQsWuuzxzds", // Site key for requests
    version: 2,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "0.0.0.0",
    timing: false,
  },
};
