<template>
  <NuxtLayout v-if="isHome" name="home">
    <NuxtPage />
  </NuxtLayout>
  <NuxtLayout v-else name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
// 判断当前页面是否是首页
const isHome = computed(() => route.path === "/");
</script>
