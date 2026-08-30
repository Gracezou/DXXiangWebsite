// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    // title / description 由 i18n 提供（见 app.vue），完整 SEO 元信息在 B4-04 补齐
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
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
      routes: [
        "/",
        "/about",
        "/solution",
        "/contact",
        "/policy",
        "/en",
        "/en/about",
        "/en/solution",
        "/en/contact",
        "/en/policy",
      ],
    },
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
    "@nuxtjs/i18n",
  ],

  // 中英双语。中文为默认语言且不带前缀，英文为 /en/*。
  i18n: {
    locales: [
      { code: "zh-CN", language: "zh-CN", name: "中文", file: "zh-CN.json" },
      { code: "en", language: "en", name: "English", file: "en.json" },
    ],
    defaultLocale: "zh-CN",
    strategy: "prefix_except_default",
    // hreflang 与 canonical 需要绝对 URL，故必须配置 baseUrl
    baseUrl: "https://www.daxiaoxiang.com",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      redirectOn: "root",
      alwaysRedirect: false,
    },
  },

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
