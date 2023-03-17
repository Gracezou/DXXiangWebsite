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
    <el-menu-item index="0">Mighty Elephant</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/abort">关于</el-menu-item>
    <el-menu-item index="/solution">解决方案</el-menu-item>
    <el-menu-item index="/contact">联系我们</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.menu_wrapper {
  padding: 0 55px;
}
</style>
