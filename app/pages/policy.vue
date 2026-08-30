<template>
  <div>
    <Breadcrumb :current="$t('breadcrumb.policy')" />

    <section class="section">
      <div class="container container--narrow">
        <h1>{{ $t("breadcrumb.policy") }}</h1>
        <div class="prose">
          <p>{{ $t("policy.p1") }}</p>
          <h2>{{ $t("policy.p2") }}</h2>
          <p>{{ $t("policy.p3") }}</p>
          <p>{{ $t("policy.p4") }}</p>
          <p>{{ $t("policy.p5") }}</p>
          <h2>{{ $t("policy.disclaimerTitle") }}</h2>
          <p>{{ $t("policy.disclaimer") }}</p>
          <h2>{{ $t("policy.lawTitle") }}</h2>
          <p>{{ $t("policy.law") }}</p>
          <h2>{{ $t("policy.updateTitle") }}</h2>
          <p>{{ $t("policy.update") }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";

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
@use "~/assets/scss/page" as *;

h1 {
  margin: 0 0 var(--dx-space-lg);
  font-size: var(--dx-text-h1);
  line-height: var(--dx-leading-tight);
  letter-spacing: var(--dx-tracking-heading);
  font-weight: 600;
}
</style>
