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

  // 静态生成：站点无动态数据，全部页面预渲染为 HTML 后部署到 CDN / 对象存储。
  // 英文路由待 B3 接入 i18n 后需在 routes 中显式补齐（语言切换由 JS 驱动，crawlLinks 爬不到）。
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/about", "/solution", "/contact", "/policy"],
    },
  },

  // css
  css: ["~/assets/scss/index.scss"],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: ["@vueuse/nuxt", "@unocss/nuxt", "@element-plus/nuxt"],

  // vueuse
  vueuse: {
    ssrHandlers: true,
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
