<template>
  <div class="showcase">
    <Image
      src="/images/data_analyse.webp"
      :alt="$t('alt.dataAnalyse')"
      sizes="sm:640px md:360px lg:420px xl:480px xxl:520px"
      width="843"
      height="843"
      class="showcase_img"
    />
    <Image
      src="/images/gis.png"
      :alt="$t('alt.gis')"
      sizes="sm:640px md:360px lg:420px xl:480px xxl:520px"
      width="843"
      height="843"
      class="showcase_img"
    />
    <Image
      src="/images/web_solution.png"
      :alt="$t('alt.webSolution')"
      sizes="sm:640px md:360px lg:420px xl:480px xxl:520px"
      width="1024"
      height="1024"
      class="showcase_img"
    />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/Image.vue";
</script>

<style lang="scss" scoped>
.showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1px;
  background-color: var(--dx-line);
  border: 1px solid var(--dx-line);
}

.showcase_img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 10 / 8;
  object-fit: cover;
  // 图库照片去饱和压暗，作为纹理而非主视觉
  filter: grayscale(0.72) brightness(0.8) contrast(1.06);
  mix-blend-mode: luminosity;
  opacity: 0.88;
  transition: opacity var(--dx-duration) var(--dx-ease);

  &:hover {
    opacity: 1;
  }
}
</style>
