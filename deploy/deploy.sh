#!/usr/bin/env bash
#
# 大小象官网 — 构建并部署到远程静态托管目录
#
# 采用「上传到带时间戳的目录 + 原子切换软链」的方式：
# rsync 直接覆盖线上目录时，用户在传输过程中访问会拿到新旧混合的资源
# （比如新 HTML 引用了还没传完的 JS）。软链切换是瞬时的，不存在这个窗口。
#
# 用法：
#   ./deploy/deploy.sh                     # 用默认配置
#   REMOTE=user@1.2.3.4 ./deploy/deploy.sh # 覆盖目标主机
#
set -euo pipefail

REMOTE="${REMOTE:-deploy@www.daxiaoxiang.com}"
REMOTE_BASE="${REMOTE_BASE:-/var/www/daxiaoxiang}"
KEEP_RELEASES="${KEEP_RELEASES:-5}"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$ROOT/.output/public"
STAMP="$(date +%Y%m%d-%H%M%S)"

info() { printf '\033[36m▸\033[0m %s\n' "$1"; }
fail() { printf '\033[31m✗\033[0m %s\n' "$1" >&2; exit 1; }

# ---------- 构建 ----------
info "构建静态产物"
cd "$ROOT"
pnpm generate

[ -f "$DIST/index.html" ] || fail "产物缺少 index.html，构建可能失败"
[ -d "$DIST/_nuxt" ]      || fail "产物缺少 _nuxt 目录"

PAGES=$(find "$DIST" -name '*.html' | wc -l | tr -d ' ')
info "产物就绪：$PAGES 个页面，$(du -sh "$DIST" | cut -f1)"

# ---------- 上传 ----------
RELEASE="$REMOTE_BASE/releases/$STAMP"
info "上传到 $REMOTE:$RELEASE"

ssh "$REMOTE" "mkdir -p '$RELEASE'"
rsync -az --delete \
  --info=progress2 \
  "$DIST/" "$REMOTE:$RELEASE/"

# ---------- 原子切换 ----------
info "切换 current 软链"
ssh "$REMOTE" "ln -sfn '$RELEASE' '$REMOTE_BASE/current.tmp' && mv -Tf '$REMOTE_BASE/current.tmp' '$REMOTE_BASE/current'"

# ---------- 清理旧版本 ----------
info "保留最近 $KEEP_RELEASES 个版本，清理更早的"
ssh "$REMOTE" "cd '$REMOTE_BASE/releases' && ls -1t | tail -n +$((KEEP_RELEASES + 1)) | xargs -r rm -rf"

# ---------- 冒烟检查 ----------
info "线上冒烟检查"
FAILED=0
for path in / /about/ /solution/ /contact/ /policy/ /en/ /robots.txt /sitemap.xml; do
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "https://www.daxiaoxiang.com$path" || echo 000)
  if [ "$code" = "200" ]; then
    printf '  \033[32m✓\033[0m %-16s %s\n' "$path" "$code"
  else
    printf '  \033[31m✗\033[0m %-16s %s\n' "$path" "$code"
    FAILED=1
  fi
done

# 旧链接必须是真正的 301，不是 200
code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "https://www.daxiaoxiang.com/abort" || echo 000)
if [ "$code" = "301" ]; then
  printf '  \033[32m✓\033[0m %-16s 301\n' "/abort"
else
  printf '  \033[31m✗\033[0m %-16s %s（应为 301，检查 Nginx 是否加载了 deploy/nginx.conf）\n' "/abort" "$code"
  FAILED=1
fi

[ "$FAILED" = "0" ] || fail "冒烟检查未全部通过"
info "部署完成：$STAMP"
