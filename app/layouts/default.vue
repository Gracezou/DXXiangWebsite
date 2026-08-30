<template>
  <div class="site">
    <div class="glow" aria-hidden="true" />
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

// 氛围层：网格 + 品牌蓝光晕。纯色深底会显得廉价，这一层提供纵深。
//
// 注意网格的实际可见度是「线的透明度 × 图层 opacity」的乘积：
// 旧版 0.09 × 0.5 = 0.045，在深底上亮度差仅约 10/255，等于没有。
// 现改为直接给足对比并去掉外层 opacity 衰减。
.atmosphere {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgb(232 237 242 / 13%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(232 237 242 / 13%) 1px, transparent 1px);
  background-size: 76px 76px;
  mask-image: radial-gradient(
    ellipse 90% 62% at 50% 0%,
    #000 8%,
    transparent 72%
  );
}

// 品牌蓝在新版中的主要角色：氛围光晕而非色块
.glow {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse 58% 42% at 78% -6%,
      rgb(0 49 83 / 62%),
      transparent 64%
    ),
    radial-gradient(
      ellipse 42% 34% at 6% 4%,
      rgb(224 164 88 / 9%),
      transparent 62%
    );
}

.site > :not(.atmosphere):not(.glow) {
  position: relative;
  z-index: 1;
}

.site_main {
  flex: 1;
}
</style>
