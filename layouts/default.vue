<template>
  <div class="site_wrapper">
    <Header />
    <main class="site_main">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from "~~/components/Header.vue";
import Footer from "~~/components/Footer.vue";
</script>
<style lang="scss" scoped>
.site_wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}
.site_main {
  flex: 1;
}
</style>
