<template>
  <div class="tabs_wrapper">
    <Image
      src="/images/data_analyse.webp"
      :alt="$t('alt.dataAnalyse')"
      sizes="sm:640px md:360px lg:420px xl:480px xxl:520px"
      width="843"
      height="843"
    />
    <Image
      src="/images/gis.png"
      :alt="$t('alt.gis')"
      sizes="sm:640px md:360px lg:420px xl:480px xxl:520px"
      width="843"
      height="843"
    />
    <Image
      src="/images/web_solution.png"
      :alt="$t('alt.webSolution')"
      sizes="sm:640px md:360px lg:420px xl:480px xxl:520px"
      width="1024"
      height="1024"
    />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/Image.vue";
</script>

<style lang="scss" scoped>
.tabs_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dx-space-md);
  padding: var(--dx-space-md) var(--dx-space-xl);

  @include mobile {
    flex-direction: column;
    padding: var(--dx-space-md);
  }

  // v1.0 此处写的是 `+ &`，会展开成无效选择器 `+ .tabs_wrapper > div`，
  // 导致图片间距从未生效（Dart Sass 已就此发出 bogus-combinators 弃用警告）。
  // 现改用 gap 控制间距。
  :deep(.dx_image),
  :deep(.image_slot) {
    flex: 1 1 240px;
    aspect-ratio: 10 / 8;
    object-fit: cover;
    border-radius: var(--dx-radius-lg);
    cursor: pointer;
  }
}
</style>
