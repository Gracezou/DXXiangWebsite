#!/usr/bin/env bash
#
# 回滚到上一个发布版本。
# 依赖 deploy.sh 的 releases/ 目录结构与 current 软链。
#
set -euo pipefail

REMOTE="${REMOTE:-deploy@www.daxiaoxiang.com}"
REMOTE_BASE="${REMOTE_BASE:-/var/www/daxiaoxiang}"

info() { printf '\033[36m▸\033[0m %s\n' "$1"; }

info "远程可用版本："
ssh "$REMOTE" "ls -1t '$REMOTE_BASE/releases'" | head -10 | sed 's/^/  /'

CURRENT=$(ssh "$REMOTE" "basename \$(readlink '$REMOTE_BASE/current')")
info "当前版本：$CURRENT"

TARGET="${1:-$(ssh "$REMOTE" "ls -1t '$REMOTE_BASE/releases'" | sed -n '2p')}"
[ -n "$TARGET" ] || { echo "没有可回滚的版本" >&2; exit 1; }

info "回滚到：$TARGET"
ssh "$REMOTE" "ln -sfn '$REMOTE_BASE/releases/$TARGET' '$REMOTE_BASE/current.tmp' && mv -Tf '$REMOTE_BASE/current.tmp' '$REMOTE_BASE/current'"

code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "https://www.daxiaoxiang.com/" || echo 000)
info "首页返回 $code"
