<template>
  <div class="home_layout">
    <!-- 首页 Header 为悬浮透明态，脱离文档流 -->
    <div class="home_header">
      <Header />
    </div>
    <main class="site_main">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>
<style lang="scss" scoped>
.home_layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}
.home_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.site_main {
  flex: 1;
}
</style>
