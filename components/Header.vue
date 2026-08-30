<template>
  <el-menu
    class="menu_wrapper"
    mode="horizontal"
    :ellipsis="false"
    background-color="#003153"
    text-color="#e5ddd7"
    active-text-color="#e5ddd7E6"
    router
  >
    <NuxtLink to="/" class="brand">Mighty Elephant</NuxtLink>
    <div class="flex-grow" />
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
    <el-menu-item index="/solution">解决方案</el-menu-item>
    <el-menu-item index="/contact">联系我们</el-menu-item>
  </el-menu>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.menu_wrapper {
  padding: 0 55px;
  border-bottom: none;

  // 品牌位不参与菜单激活态，故不用 el-menu-item（同 index 会导致重复高亮）
  .brand {
    display: flex;
    align-items: center;
    height: var(--el-menu-item-height);
    padding: 0 20px;
    color: #e5ddd7;
    font-size: 18px;
    text-decoration: none;
  }
}
</style>
