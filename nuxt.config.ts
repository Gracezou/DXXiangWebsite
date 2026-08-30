// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: "Mighty Elephant 大小象",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Mighty Elephant 大小象",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // 旧链接重定向。注意：静态托管（nuxi generate）下本规则不产生真正的 301，
  // 仅对 dev/preview 及部分托管平台的 _redirects 编译有效。
  // 真正的 301 须在托管层配置，详见 README「部署」章节。
  routeRules: {
    "/abort": { redirect: { to: "/about", statusCode: 301 } },
  },

  // css
  css: ["~/assets/scss/index.scss"],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/color-mode",
  ],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: "",
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/global.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
  },
});
