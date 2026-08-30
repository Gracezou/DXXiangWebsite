# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 部署

> 本节在 v2.0 升级过程中逐步补充，完整版见任务 B5-03。

### 托管层必须配置的重定向

站点为静态托管，`nuxt.config.ts` 中的 `routeRules` 重定向在生产环境**不会生效**
（静态产物没有 Node 运行时来执行它）。以下重定向必须在托管层（Nginx / CDN / 对象存储回源规则）配置：

| 来源 | 目标 | 状态码 | 原因 |
| --- | --- | --- | --- |
| `/abort` | `/about` | 301 | v1.0 的路由拼写错误，v2.0 已更名 |

Nginx 配置示例：

```nginx
location = /abort {
    return 301 /about;
}
```
