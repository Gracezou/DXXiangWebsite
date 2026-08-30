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
  gap: var(--dx-space-md);
}

.showcase_img {
  width: 100%;
  height: auto;
  aspect-ratio: 10 / 8;
  object-fit: cover;
  border-radius: var(--dx-radius-md);
  border: 1px solid var(--dx-color-card-border);
}
</style>
