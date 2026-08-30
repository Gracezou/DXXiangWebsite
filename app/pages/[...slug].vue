<script setup lang="ts">
// Catch-all 路由：捕获所有未匹配的路径，交由 error.vue 渲染 404。
//
// 静态托管下，直接访问未知 URL 时由托管层决定返回什么：
//   - 返回 404.html          → 服务器层面的 404，本路由不参与
//   - 返回 200.html（SPA fallback）→ 客户端路由匹配到本页，渲染 404 页面
// 客户端导航（站内点击到失效链接）也会落到这里。
// 两种情况都能得到一致的 404 界面，不会出现空白页或托管商的默认错误页。
const { t } = useI18n();

throw createError({
  statusCode: 404,
  statusMessage: t("error.notFoundTitle"),
  fatal: true,
});
</script>
