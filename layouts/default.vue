<template>
  <el-container class="wrapper">
    <el-header>
      <Header />
    </el-header>
    <el-main> <slot></slot> </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>
<script setup lang="ts">
import Header from "~~/components/Header.vue";
import Footer from "~~/components/Footer.vue";
</script>
<style lang="scss" scoped>
.wrapper {
  .el-header {
    padding: 0;
    height: 94px;
  }
  .el-main {
    padding: 0;
  }
  .el-footer {
    --el-footer-height: 380px;
    --el-footer-padding: 0;
  }
}
</style>
