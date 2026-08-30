<template>
  <div class="site">
    <div class="atmosphere" aria-hidden="true" />
    <Header />
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
.site {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}

// 氛围层：细网格 + 顶部遮罩。纯色深底会显得廉价，这一层提供质感。
.atmosphere {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--dx-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--dx-line) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(
    ellipse 100% 70% at 50% 0%,
    #000 20%,
    transparent 75%
  );
  opacity: 0.5;
}

.site > :not(.atmosphere) {
  position: relative;
  z-index: 1;
}

.site_main {
  flex: 1;
}
</style>
