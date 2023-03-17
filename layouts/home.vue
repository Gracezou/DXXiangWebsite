<template>
  <el-container class="home_wrapper">
    <el-main>
      <slot></slot>
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.home_wrapper {
  .el-main {
    padding: 0;
  }
  .el-footer {
    --el-footer-height: 380px;
    --el-footer-padding: 0;
  }
}
</style>
