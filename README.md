# 大小象科技官网

大小象互联网科技（青岛）有限公司的官方网站，中英双语，静态生成后部署到 CDN / 对象存储。

- 正式域名：<https://www.daxiaoxiang.com>
- 当前版本：**v2.1.0**
- 升级记录：[v2.0 任务书](docs/v2.0-upgrade-plan.md) · [v2.1 任务清单](docs/v2.1-plan.md)

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

产物在 `.output/public`，整个目录即可部署。

一键构建并发布（含原子切换与线上冒烟检查）：

```bash
./deploy/deploy.sh
```

**完整的部署说明、Nginx 配置与缓存策略见 [deploy/README.md](deploy/README.md)。**

两点必须知道：

- **缓存与压缩不是可选项**。同一份产物，缺少 gzip 与缓存头时 Lighthouse Performance 只有 79，配好后是 93。
- **`/abort` → `/about` 的 301 必须由托管层发出**。静态产物里 Nitro 只会生成一个 `<meta http-equiv="refresh">` 页面，那对 SEO 不传递权重。


## 上线前检查清单

- [ ] **填入 ICP 备案号**：`app.config.ts` 的 `site.icp` 字段。留空时页脚不渲染备案行，填入即生效，无需改组件代码。
- [ ] **开放搜索引擎抓取**：`nuxt.config.ts` 的 `robots` 配置目前是 `Disallow: /`（备案未通过前不应被收录），上线时改为允许。
- [ ] **托管层配置** `/abort` 的 301（见上）。404 已由项目内的 catch-all 路由兜底，托管层配置为可选增强。
- [ ] **跑一次 Lighthouse**，确认 Performance ≥ 85、Accessibility ≥ 90（计划在 v2.1 全部改造完成后执行）。

> 英文文案已由项目方确认无需人工校对，`i18n/locales/README.md` 中的待确认项保留作为参考记录。
