<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { t } = useI18n();
// useLocaleHead 提供 html lang、hreflang 互指与 og:locale，随语言自动切换
const localeHead = useLocaleHead({ seo: true });

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: localeHead.value.link,
  meta: localeHead.value.meta,
  title: t("site.title"),
}));
</script>
