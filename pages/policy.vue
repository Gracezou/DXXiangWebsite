<template>
  <div class="policy_wrapper">
    <Breadcrumb :current="$t('breadcrumb.policy')" />
    <div class="content">
      <p>{{ $t("policy.p1") }}</p>
      <p>{{ $t("policy.p2") }}</p>
      <p>{{ $t("policy.p3") }}</p>
      <p>{{ $t("policy.p4") }}</p>
      <p>{{ $t("policy.p5") }}</p>
      <p>{{ $t("policy.disclaimerTitle") }}</p>
      <p>{{ $t("policy.disclaimer") }}</p>
      <p>{{ $t("policy.lawTitle") }}</p>
      <p>{{ $t("policy.law") }}</p>
      <p>{{ $t("policy.updateTitle") }}</p>
      <p>{{ $t("policy.update") }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "~~/components/Breadcrumb.vue";

const { t } = useI18n();
const ogImage = "https://www.daxiaoxiang.com/images/og-cover.jpg";

useSeoMeta({
  title: () => t("seo.policy.title"),
  description: () => t("seo.policy.description"),
  ogTitle: () => t("seo.policy.title"),
  ogDescription: () => t("seo.policy.description"),
  ogType: "website",
  ogImage,
  twitterCard: "summary_large_image",
  twitterTitle: () => t("seo.policy.title"),
  twitterDescription: () => t("seo.policy.description"),
  twitterImage: ogImage,
});
</script>

<style lang="scss" scoped>
.policy_wrapper {
  .content {
    padding: var(--dx-space-md) var(--dx-space-xl) var(--dx-space-2xl);
    background-color: var(--dx-color-surface);

    @include mobile {
      padding: var(--dx-space-md) var(--dx-space-md) var(--dx-space-lg);
    }
  }

  p {
    max-width: 1000px;
    font-size: var(--dx-text-body);
    line-height: var(--dx-leading-relaxed);
    color: var(--dx-color-text);
  }
}
</style>
