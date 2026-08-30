<template>
  <nav class="breadcrumb" :aria-label="$t('breadcrumb.home')">
    <ol>
      <li>
        <NuxtLink :to="localePath('/')">{{ $t("breadcrumb.home") }}</NuxtLink>
      </li>
      <li aria-current="page">{{ current }}</li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{ current: string }>();
const localePath = useLocalePath();
const { t } = useI18n();
const { site } = useAppConfig();
const route = useRoute();

// BreadcrumbList 结构化数据（B4-04），配合原生面包屑标记
useHead(() => ({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("breadcrumb.home"),
            item: `${site.url}${localePath("/")}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: props.current,
            item: `${site.url}${route.path}`,
          },
        ],
      }),
    },
  ],
}));
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: var(--dx-space-xl) var(--dx-space-xl) var(--dx-space-lg);
  font-size: var(--dx-text-sm);

  @include mobile {
    padding: var(--dx-space-md) var(--dx-space-md) var(--dx-space-sm);
  }

  ol {
    display: flex;
    flex-wrap: wrap;
    gap: var(--dx-space-2xs);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li + li::before {
    content: "/";
    margin-right: var(--dx-space-2xs);
    color: var(--dx-color-text);
  }

  a {
    color: var(--dx-color-brand-mid);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  li[aria-current="page"] {
    color: var(--dx-color-text);
  }
}
</style>
