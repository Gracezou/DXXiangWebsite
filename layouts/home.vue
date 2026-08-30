<template>
  <div class="home_layout">
    <!-- Header 为悬浮透明态，脱离文档流，故置于 el-container 之外：
         el-container 会按子节点类型推断布局方向，混入裸 div 会造成 SSR 与客户端的节点差异 -->
    <div class="home_header">
      <Header />
    </div>
    <el-container class="home_wrapper">
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from "~~/components/Header.vue";
import Footer from "~~/components/Footer.vue";
</script>
<style lang="scss" scoped>
.home_layout {
  .home_header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .el-main {
    padding: 0;
  }
  .el-footer {
    --el-footer-height: auto;
    --el-footer-padding: 0;
  }
}
</style>
