// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

// 站点页面路径（不含语言前缀）
const PAGE_PATHS = ["/", "/about", "/solution", "/contact", "/policy"];

// 显式构造 sitemap 条目。静态生成时 sitemap 的路由自动发现与 autoI18n
// 均不生效（会产出空的 urlset），因此在此手动展开中英两套 URL 与 hreflang。
const SITEMAP_URLS = PAGE_PATHS.flatMap((path) => {
  const zh = path;
  const en = path === "/" ? "/en" : `/en${path}`;
  const alternatives = [
    { hreflang: "zh-CN", href: zh },
    { hreflang: "en", href: en },
    { hreflang: "x-default", href: zh },
  ];
  return [
    { loc: zh, alternatives },
    { loc: en, alternatives },
  ];
});

export default defineNuxtConfig({
  app: {
    // title / description 由 i18n 提供（见 app.vue），完整 SEO 元信息在 B4-04 补齐
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
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
    "@element-plus/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/eslint",
  ],

  site: {
    url: "https://www.daxiaoxiang.com",
    name: "Mighty Elephant 大小象",
  },

  // ⚠️ 备案通过、正式上线前，站点不应被搜索引擎收录。
  // 上线时把 disallow 改为 allow（见 docs/v2.0-upgrade-plan.md 上线前必查项）。
  robots: {
    groups: [{ userAgent: ["*"], disallow: ["/"] }],
  },

  // 备案前站点整体禁止抓取，sitemap 仍然生成以便上线时即刻可用
  sitemap: {
    autoI18n: false,
    urls: SITEMAP_URLS,
    exclude: ["/abort", "/en/abort", "/200.html", "/404.html"],
  },

  // 图片自动转 WebP 并生成响应式 srcset
  image: {
    format: ["webp"],
    quality: 80,
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

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
    // 静态站点必须关闭浏览器语言检测。
    // 预渲染的 HTML 对所有访客是同一份，若由 cookie 在客户端切换语言，
    // 会与服务端渲染的内容不一致，产生 hydration mismatch
    // （Nuxt 4 + i18n v10 下会实际触发，Nuxt 3 + v9 下被静默吞掉）。
    // 语言完全由 URL 决定：/ 为中文，/en 为英文，切换通过 Header 的链接。
    detectBrowserLanguage: false,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // global.scss 提供 Element Plus 主题变量；_mixins.scss 提供响应式断点，
          // 以 as * 注入使各组件可直接 @include mobile / tablet-down
          additionalData: `@use "@/assets/scss/global.scss" as element; @use "@/assets/scss/mixins" as *;`,
        },
      },
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
  },
});
