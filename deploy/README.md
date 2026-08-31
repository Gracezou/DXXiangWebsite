# 部署说明

站点是**纯静态产物**，无 Node 运行时。构建产出 `.output/public`，整个目录即为可部署内容。

| 文件 | 用途 |
| --- | --- |
| `nginx.conf` | 独立 Nginx 的完整站点配置（含 HTTPS、裸域跳转） |
| `bt-nginx-site.conf` | **宝塔面板专用**：保留宝塔的标记注释与 include，可直接全文替换 |
| `deploy.sh` | 构建 → 上传 → 原子切换 → 冒烟检查 |
| `rollback.sh` | 回滚到上一个发布版本 |

---

## 一、缓存与压缩不是可选项

Lighthouse 实测：**同一份产物，缺少 gzip 与缓存头时 Performance 只有 79，配好之后是 93。**

`nginx.conf` 里的策略与实测环境一致，改动前请先理解每一档的理由：

| 路径 | 策略 | 理由 |
| --- | --- | --- |
| `/_nuxt/`、`/_ipx/`、`/fonts/`、`/_i18n/` | `max-age=31536000, immutable` | 文件名或路径含内容哈希，内容变了路径就变 |
| `/images/`、`/favicon.ico` | `max-age=2592000`（30 天） | 文件名固定，但更新频率极低 |
| `*.html` | `max-age=0, must-revalidate` | 内容更新须立刻生效，且 HTML 体积小 |
| `*/_payload.json` | `max-age=0, must-revalidate` | **必须与 HTML 同策略**：它是页面数据，缓存了旧 payload 而 HTML 是新的，会导致数据与结构对不上 |
| `sitemap*.xml`、`robots.txt`、`style.xsl` | `max-age=3600` | |

压缩方面 gzip 是底线。服务器在新加坡、访客主体在国内，**跨境带宽是实际瓶颈**，若 Nginx 已编译 `ngx_brotli`，把配置里 brotli 的注释打开。

## 二、托管层必须做的两件事

**1. `/abort` → `/about` 的 301。**
这是 v1.0 的路由拼写错误。静态产物**不含真正的 301** —— Nitro 会为它生成一个 `<meta http-equiv="refresh">` 页面，那对 SEO 不传递权重。`nginx.conf` 里已有对应的 `return 301`，换其他托管方式时必须自己补上。

**2. 404 指向 `404.html`。**
项目内另有 catch-all 路由兜底，所以即使漏配也不会白屏，但配上更好。

## 三、部署

首次需在服务器上准备目录并给部署账号写权限：

```bash
sudo mkdir -p /var/www/daxiaoxiang/releases && sudo chown -R deploy:deploy /var/www/daxiaoxiang
```

之后每次发布：

```bash
./deploy/deploy.sh
```

脚本做四件事：构建 → rsync 到 `releases/<时间戳>/` → 原子切换 `current` 软链 → 线上冒烟检查（含 `/abort` 是否真的返回 301）。

**为什么不直接 rsync 覆盖线上目录**：覆盖过程中访问会拿到新旧混合的资源（新 HTML 引用了还没传完的 JS）。软链切换是瞬时的，没有这个窗口。

回滚：

```bash
./deploy/rollback.sh
```

不带参数回滚到上一版；也可以指定版本目录名。默认保留最近 5 个版本。

## 四、换成对象存储 + CDN 时

如果不用 Nginx 而是走 OSS / COS / S3 + CDN，需要在 CDN 控制台等价地配置：

- 上面那张表的缓存策略（逐条对应）
- gzip / brotli 压缩
- `/abort` → `/about` 的 301 重定向规则
- 404 回源到 `404.html`
- 默认首页文档设为 `index.html`（目录访问要能落到 `<dir>/index.html`）

**选 CDN 时确认有国内节点的回源优化** —— 内容以中文为主、客户在国内（青岛与杭州办公，服务银行证券政府），而源站在新加坡，跨境延迟约 60–100ms 且带宽有波动。上线后建议实测国内访问速度。

## 五、上线前检查清单

- [ ] Nginx 配置已加载，`nginx -t` 通过
- [ ] HTTPS 证书就绪，裸域跳 www 生效
- [ ] `curl -I https://www.daxiaoxiang.com/abort` 返回 **301**（不是 200）
- [ ] 静态资源响应头含 `Cache-Control: ... immutable`
- [ ] HTML 响应头含 `Content-Encoding: gzip`
- [ ] 国内网络下实测首页加载速度
- [ ] **开放搜索引擎抓取**：目前 `nuxt.config.ts` 的 robots 为 `Disallow: /`，且每个页面带 `noindex` meta。确认要收录时改配置并重新构建 —— 两处会一并解除
- [ ] ICP 备案号：服务器在境外暂不需要；若日后迁回国内，填 `app.config.ts` 的 `site.icp` 即可，页脚会自动显示
