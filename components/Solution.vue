<template>
  <div class="tabs_wrapper">
    <Image src="/images/data_analyse.webp" />
    <Image src="/images/gis.png" />
    <Image src="/images/web_solution.png" />
  </div>
</template>
<script setup lang="ts">
import Image from "~~/components/Image.vue";
</script>
<style lang="scss">
.tabs_wrapper {
  padding: 20px 50px;
  display: flex;
  > div {
    flex: 1;
    // 高宽比例
    aspect-ratio: 10/8;
    border-radius: 20px;
    cursor: pointer;
    + & {
      margin-left: 20px;
    }
  }
}
</style>
