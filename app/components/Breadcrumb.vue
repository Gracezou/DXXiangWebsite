<template>
  <nav class="breadcrumb" :aria-label="$t('breadcrumb.home')">
    <div class="container">
      <ol>
        <li>
          <NuxtLink :to="localePath('/')">{{ $t("breadcrumb.home") }}</NuxtLink>
        </li>
        <li aria-current="page">{{ current }}</li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{ current: string }>();
const localePath = useLocalePath();
const { t } = useI18n();
const { site } = useAppConfig();
const route = useRoute();

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
@use "~/assets/scss/page" as *;

.breadcrumb {
  padding: var(--dx-space-md) 0;
  font-family: var(--dx-font-mono);
  font-size: var(--dx-text-xs);

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
    color: var(--dx-color-muted);
    opacity: 0.6;
  }

  a {
    color: var(--dx-color-muted);
    text-decoration: none;
    transition: color var(--dx-duration) var(--dx-ease);

    &:hover {
      color: var(--dx-color-accent);
    }
  }

  li[aria-current="page"] {
    color: var(--dx-color-text);
  }
}
</style>
