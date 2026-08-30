# 大小象科技官网

大小象互联网科技（青岛）有限公司的官方网站，中英双语，静态生成后部署到 CDN / 对象存储。

- 正式域名：<https://www.daxiaoxiang.com>
- 当前版本：v2.0（升级任务书见 [docs/v2.0-upgrade-plan.md](docs/v2.0-upgrade-plan.md)）

## 技术栈

| 项 | 选型 |
| --- | --- |
| 框架 | Nuxt 3（静态生成 / `nuxi generate`） |
| 语言 | TypeScript |
| 样式 | SCSS + 设计令牌（CSS 自定义属性） |
| 国际化 | `@nuxtjs/i18n`，简体中文（默认）+ 英文 |
| 图片 | `@nuxt/image`，自动 WebP 与响应式 srcset |
| SEO | `@nuxtjs/sitemap` + `@nuxtjs/robots` |
| UI 组件 | 仅保留 Element Plus 的轮播，其余为原生实现 |
| 包管理 | pnpm 10 |

## 目录结构

```
├── app.config.ts          站点配置（ICP 备案号在此填写）
├── app.vue                根组件：title 模板、html lang、hreflang
├── error.vue              404 / 错误页
├── nuxt.config.ts         Nuxt 配置：i18n、预渲染路由、sitemap、robots
├── uno.config.ts          UnoCSS 配置
├── assets/scss/
│   ├── _tokens.scss       ★ 设计令牌：字体、间距、字号、色板
│   ├── _mixins.scss       响应式断点 mixin（mobile / tablet-down / tablet-up）
│   ├── index.scss         全局样式入口
│   └── global.scss        Element Plus 主题变量
├── components/            Header、Footer、Breadcrumb、Divider、Image、CallToAction…
├── i18n/locales/
│   ├── zh-CN.json         ★ 中文文案（默认语言）
│   ├── en.json            ★ 英文文案
│   └── README.md          翻译说明与待人工校对项
├── layouts/               default（内页）、home（首页，Header 悬浮透明）
├── pages/                 首页、关于、解决方案、联系我们、隐私政策
└── public/images/         图片源文件
```

## 本地开发

```bash
pnpm install
```

```bash
pnpm dev
```

开发服务器：<http://localhost:3000>

其他命令：

| 命令 | 说明 |
| --- | --- |
| `pnpm generate` | **主构建命令**，产出静态站点到 `.output/public` |
| `pnpm build` | 构建 Node 服务端产物（本项目一般不用） |
| `pnpm lint` / `pnpm lint:fix` | ESLint 检查 / 自动修复 |
| `pnpm format` / `pnpm format:check` | Prettier 格式化 / 检查 |

## 维护指南

### 改文案

**不要改 `.vue` 文件。** 所有对外文案都在 `i18n/locales/` 下：

- 中文改 `zh-CN.json`
- 英文改 `en.json`

两个文件的键必须一一对应，新增时两边同时加。

> ⚠️ `@`、`|`、`$` 是 vue-i18n 的保留语法字符。文案中出现 `@`（例如邮箱）必须转义成 `{'@'}`，否则构建会直接失败。

### 改配色 / 间距 / 字号

全部集中在 `assets/scss/_tokens.scss`。页面与组件中不允许出现裸色值或魔法数字。

### 加图片

放入 `public/images/`，通过 `components/Image.vue` 使用。**`alt` 是必填属性**，且 alt 文案要加进 i18n 的 `alt.*` 段。

`sizes` 属性必须用明确像素值的断点语法，例如：

```
sizes="sm:640px md:768px lg:1024px xl:1280px xxl:1920px"
```

不要用 `sizes="100vw"` —— `@nuxt/image` 会把它解析成 1–2 像素宽。

## 部署

站点为**纯静态托管**，无 Node 运行时。

```bash
pnpm generate
```

产物在 `.output/public`，整个目录上传到 CDN / 对象存储 / Nginx 即可。

### 托管层必须配置的两项

静态产物本身无法处理服务端重定向与错误页路由，以下两项必须在托管层配置：

| 项 | 配置 |
| --- | --- |
| 旧链接 301 | `/abort` → `/about`（v1.0 的路由拼写错误，v2.0 已更名） |
| 404 页面 | 指向产物中的 `404.html` |

Nginx 示例：

```nginx
location = /abort {
    return 301 /about;
}

error_page 404 /404.html;
```

> `nuxt.config.ts` 中的 `routeRules` 重定向只在 `pnpm dev` / `pnpm preview` 下生效。静态产物中它会被编译成一个 `<meta http-equiv="refresh">` 页面，那**不是** 301，对 SEO 不传递权重。托管层配置好后该文件不会被读到。

## 上线前检查清单

- [ ] **填入 ICP 备案号**：`app.config.ts` 的 `site.icp` 字段。留空时页脚不渲染备案行，填入即生效，无需改组件代码。
- [ ] **开放搜索引擎抓取**：`nuxt.config.ts` 的 `robots` 配置目前是 `Disallow: /`（备案未通过前不应被收录），上线时改为允许。
- [ ] **英文文案人工校对**：`i18n/locales/en.json` 为机器初翻，待确认项见 `i18n/locales/README.md`。**英文隐私政策属对外法律文本，建议法务确认后再上线。**
- [ ] **托管层配置** `/abort` 的 301 与 404 指向（见上）。
- [ ] **跑一次 Lighthouse**，确认 Performance ≥ 85、Accessibility ≥ 90。
