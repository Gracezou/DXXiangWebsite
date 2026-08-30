<template>
  <div class="contact_wrapper">
    <Breadcrumb :current="$t('breadcrumb.contact')" />
    <div class="content">
      <section class="company">
        <p class="name">{{ $t("contact.qingdao.name") }}</p>
        <p>{{ $t("contact.qingdao.phone") }}</p>
        <p>{{ $t("contact.qingdao.email") }}</p>
      </section>

      <section class="company">
        <p class="name">{{ $t("contact.hangzhou.name") }}</p>
        <p>{{ $t("contact.hangzhou.phone") }}</p>
        <p>{{ $t("contact.hangzhou.email") }}</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";

const { t } = useI18n();
const ogImage = "https://www.daxiaoxiang.com/images/og-cover.jpg";

useSeoMeta({
  title: () => t("seo.contact.title"),
  description: () => t("seo.contact.description"),
  ogTitle: () => t("seo.contact.title"),
  ogDescription: () => t("seo.contact.description"),
  ogType: "website",
  ogImage,
  twitterCard: "summary_large_image",
  twitterTitle: () => t("seo.contact.title"),
  twitterDescription: () => t("seo.contact.description"),
  twitterImage: ogImage,
});
</script>

<style lang="scss" scoped>
.contact_wrapper {
  .content {
    padding: 0 var(--dx-space-xl) var(--dx-space-3xl);

    @include mobile {
      padding: 0 var(--dx-space-md) var(--dx-space-2xl);
    }
  }

  .company {
    margin-bottom: var(--dx-space-md);
    color: var(--dx-color-text);

    p {
      margin: 0;
      font-size: var(--dx-text-body);
      line-height: var(--dx-leading-relaxed);
    }

    .name {
      margin: var(--dx-space-xs) 0;
      font-size: var(--dx-text-h3);
      line-height: var(--dx-leading-tight);
      color: var(--dx-color-text-strong);
    }
  }
}
</style>
