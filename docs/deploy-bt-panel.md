# 宝塔面板部署步骤

面向 **v2.1.0** 的构建产物。站点是纯静态文件，宝塔上不需要装 Node、不需要配 PM2，只用 Nginx 托管静态目录即可。

预计耗时 20–30 分钟（含证书签发等待）。

---

## 前置

- 一台已装宝塔面板的服务器（新加坡）
- 域名 `www.daxiaoxiang.com` 与 `daxiaoxiang.com` 的 A 记录已解析到该服务器 IP
- 宝塔【软件商店】已安装 **Nginx**

> 服务器在境外、不做 ICP 备案的前提下，域名可直接解析使用。

---

## 一、下载构建产物

1. 打开仓库的 **Releases** 页面
2. 找到 `v2.1.0`，下载附件 `daxiaoxiang-site-v2.1.0.tar.gz`
3. （建议）核对校验和，与附件里的 `.sha256` 比对：

   ```bash
   shasum -a 256 daxiaoxiang-site-v2.1.0.tar.gz
   ```

---

## 二、创建站点

宝塔左侧 **网站** → 顶部保持在 **「PHP 项目」标签** → 点 **添加站点**。

> **不要选「Node 项目」。** 这里最容易搞反：项目用 Nuxt 开发、属于 Node 生态，
> 但 `pnpm generate` 产出的是预渲染好的 HTML，部署时**不需要 Node 运行时**。
> 选 Node 项目宝塔会要求填启动命令与端口并起 PM2 守护进程，产物里根本没有
> 可启动的服务端入口，只会失败。
>
> 宝塔的标签是按运行时分类的，「PHP 项目」这个名字有误导性 —— 它实际承载
> 所有由 Nginx 直接托管的站点，选「纯静态」就不会启动任何 PHP 进程。

弹窗里填：

| 字段 | 填写 |
| --- | --- |
| 域名 | `www.daxiaoxiang.com`<br>`daxiaoxiang.com`（换行分隔，两个都填） |
| 根目录 | 默认生成的即可，记住这个路径，下一步要用 |
| FTP | 不创建 |
| 数据库 | 不创建 |
| **PHP 版本** | **纯静态** ← 关键，不要选任何具体 PHP 版本 |

提交后宝塔会自动生成站点目录与 Nginx 配置。

---

## 三、上传并解压产物

**文件** → 进入上一步的站点根目录（通常是 `/www/wwwroot/www.daxiaoxiang.com`）：

1. 删除宝塔自动生成的 `index.html`、`404.html`、`.user.ini` 等默认文件（`.user.ini` 删不掉可忽略，不影响）
2. 点【上传】选择 `daxiaoxiang-site-v2.1.0.tar.gz`
3. 上传完成后右键该文件 → **解压** → 解压到当前目录
4. 解压后删除 tar.gz 本身

**确认目录结构**是这样（注意是产物内容直接在根目录，不是套一层文件夹）：

```
<站点根目录>/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── _nuxt/
├── _ipx/
├── fonts/
├── images/
├── about/
├── solution/
├── contact/
├── policy/
└── en/
```

如果解压后多套了一层目录，把里面的内容移到根目录。

---

## 四、申请 SSL 证书

站点设置 → **SSL** → **Let's Encrypt**：

1. 勾选两个域名，选择「文件验证」
2. 点【申请】，等待签发（约 1 分钟）
3. 签发成功后打开 **强制 HTTPS**

---

## 五、配置 Nginx（关键一步）

> **这一步不能省。** 实测同一份产物，缺少压缩与缓存配置时 Lighthouse Performance 只有 **79**，配好后是 **93**。

站点设置 → **配置文件**，在 `server { }` 块内、`location / ` 之前粘贴以下内容，然后保存：

```nginx
    # ---------- 压缩 ----------
    # 服务器在新加坡、访客主体在国内，跨境带宽是瓶颈，压缩不能省
    gzip              on;
    gzip_vary         on;
    gzip_comp_level   6;
    gzip_min_length   1024;
    gzip_types
        text/plain text/css text/xml
        application/javascript application/json application/xml
        image/svg+xml;

    # ---------- 旧链接 301 ----------
    # v1.0 的路由拼写错误。静态产物本身不含真正的 301，
    # Nitro 只会生成 meta refresh 页面，对 SEO 不传递权重
    location = /abort  { return 301 /about; }
    location = /abort/ { return 301 /about; }
    location = /en/abort { return 301 /en/about; }

    # ---------- 带指纹的资源：长缓存 ----------
    location ^~ /_nuxt/  { expires 1y; add_header Cache-Control "public, max-age=31536000, immutable"; access_log off; }
    location ^~ /_ipx/   { expires 1y; add_header Cache-Control "public, max-age=31536000, immutable"; access_log off; }
    location ^~ /_i18n/  { expires 1y; add_header Cache-Control "public, max-age=31536000, immutable"; access_log off; }
    location ^~ /fonts/  { expires 1y; add_header Cache-Control "public, max-age=31536000, immutable"; add_header Access-Control-Allow-Origin "*"; access_log off; }
    location ^~ /images/ { expires 30d; add_header Cache-Control "public, max-age=2592000"; access_log off; }
    location = /favicon.ico { expires 30d; add_header Cache-Control "public, max-age=2592000"; access_log off; }

    # ---------- 不缓存 ----------
    # _payload.json 是页面数据，必须与 HTML 同策略：
    # 缓存了旧 payload 而 HTML 是新的，会导致数据与结构对不上
    location ~* \.html$          { add_header Cache-Control "public, max-age=0, must-revalidate"; }
    location ~* /_payload\.json$ { add_header Cache-Control "public, max-age=0, must-revalidate"; }

    # sitemap 与 robots
    location ~* /(sitemap.*\.xml|robots\.txt|style\.xsl)$ { expires 1h; add_header Cache-Control "public, max-age=3600"; }
```

然后把默认的 `location /` 改成：

```nginx
    location / {
        try_files $uri $uri/ $uri/index.html =404;
    }

    error_page 404 /404.html;
```

> **为什么需要 `try_files`**：预渲染产物是「目录 + index.html」结构，访问 `/about/` 要能落到 `/about/index.html`。宝塔默认配置对静态站通常够用，但显式写上更保险。

保存后宝塔会自动 `nginx -t` 校验并重载。**如果报错，先看错误提示，不要强行保存。**

---

## 六、验证

在**本地终端**（不是服务器上）执行：

```bash
curl -I https://www.daxiaoxiang.com/
```

逐项核对：

| 检查项 | 期望结果 |
| --- | --- |
| 首页 | `200` |
| `curl -I https://www.daxiaoxiang.com/abort` | **`301`**，`Location: /about` |
| `curl -I https://www.daxiaoxiang.com/en/` | `200` |
| `curl -sI -H 'Accept-Encoding: gzip' https://www.daxiaoxiang.com/ \| grep -i encoding` | `Content-Encoding: gzip` |
| `curl -sI https://www.daxiaoxiang.com/_nuxt/*.js \| grep -i cache` | 含 `immutable` |
| 浏览器打开首页 | 深色页面、琥珀色按钮、中英切换正常 |

**`/abort` 返回 200 而不是 301** 说明第五步的配置没生效——回去检查是否粘贴到了正确的 `server` 块内。

---

## 七、后续更新流程

代码更新后：

1. 在 GitHub 发布新的 Release（CI 自动构建并附上产物）
2. 下载新的 `tar.gz`
3. 宝塔【文件】→ 进入站点目录 → 上传 → 解压覆盖
4. **不需要重启 Nginx**，静态文件即时生效
5. 如果只换了资源没换 HTML，浏览器可能有缓存，Ctrl+F5 强刷确认

> **建议先备份**：更新前把现有目录压缩一份放到 `/www/backup/`，出问题可以直接解压回滚。

---

## 常见问题

**页面能开但样式全丢**
`_nuxt/` 目录没上传完整。检查该目录下是否有 `.js` 和 `.css` 文件。

**中文字体显示正常但英文不对**
`fonts/` 目录缺失。产物里应有 5 个 `.woff2` 文件。

**访问 `/about` 报 404，但 `/about/` 正常**
`try_files` 没配好，回到第五步。

**图片不显示**
检查 `_ipx/` 目录是否完整（约 115 个文件）。站点的图片全部走这个目录，`images/` 下的原图只有 OG 分享图在用。

**HTTPS 证书签发失败**
先确认域名解析已生效（`ping www.daxiaoxiang.com` 应返回服务器 IP），且 80 端口未被防火墙拦截。

---

## 关于国内访问速度

服务器在新加坡而访客主体在国内（客户为银行、证券、基金、保险、政府，办公地在青岛与杭州），跨境延迟约 60–100ms 且带宽有波动。

上线后建议从国内网络实测首页加载时间。如果明显偏慢，可考虑：

- 在国内厂商开通 CDN，源站指向新加坡服务器（**注意：国内 CDN 通常要求域名已备案**）
- 或使用支持中国大陆节点的境外 CDN

缓存策略照搬第五步的那张表即可。
