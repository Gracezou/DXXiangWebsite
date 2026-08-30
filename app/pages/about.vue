<template>
  <div class="about_wrapper">
    <Breadcrumb :current="$t('breadcrumb.about')" />
    <div class="content">
      <Divider />
      <section class="part_content">
        <h1>{{ $t("about.company.title") }}</h1>
        <Image
          src="/images/internet_company.jpg"
          :alt="$t('alt.company')"
          class="company_image"
          sizes="sm:640px md:960px lg:960px xl:960px xxl:960px"
          width="960"
          height="400"
        />
        <p>{{ $t("about.company.p1") }}</p>
        <p>{{ $t("about.company.p2") }}</p>
      </section>
      <section class="part_content">
        <h1>{{ $t("about.tech.title") }}</h1>
        <Image
          src="/images/technology_first.jpg"
          :alt="$t('alt.techFirst')"
          class="tech_image"
          sizes="sm:640px md:800px lg:800px xl:800px xxl:800px"
          width="800"
          height="200"
        />
        <p>{{ $t("about.tech.p1") }}</p>
        <p>{{ $t("about.tech.p2") }}</p>
        <p>{{ $t("about.tech.p3") }}</p>
        <p>{{ $t("about.tech.p4") }}</p>
      </section>
      <section class="part_content">
        <h1>{{ $t("about.team.title") }}</h1>
        <Image
          src="/images/team.jpg"
          :alt="$t('alt.team')"
          class="tech_image"
          sizes="sm:640px md:800px lg:800px xl:800px xxl:800px"
          width="800"
          height="200"
        />
        <p>{{ $t("about.team.p1") }}</p>
        <p>{{ $t("about.team.p2") }}</p>
        <p>{{ $t("about.team.p3") }}</p>
      </section>
    </div>
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/Image.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";
import Divider from "~/components/Divider.vue";
import CallToAction from "~/components/CallToAction.vue";

const { t } = useI18n();
const ogImage = "https://www.daxiaoxiang.com/images/og-cover.jpg";

useSeoMeta({
  title: () => t("seo.about.title"),
  description: () => t("seo.about.description"),
  ogTitle: () => t("seo.about.title"),
  ogDescription: () => t("seo.about.description"),
  ogType: "website",
  ogImage,
  twitterCard: "summary_large_image",
  twitterTitle: () => t("seo.about.title"),
  twitterDescription: () => t("seo.about.description"),
  twitterImage: ogImage,
});
</script>

<style lang="scss" scoped>
.about_wrapper {
  .content > section:nth-of-type(even) {
    background-color: var(--dx-color-surface);
  }

  .part_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--dx-space-2xl) var(--dx-space-md);
    color: var(--dx-color-text);
    font-size: var(--dx-text-body);
    line-height: var(--dx-leading-relaxed);

    @include mobile {
      padding: var(--dx-space-lg) var(--dx-space-md);
    }

    h1 {
      margin: 0;
      padding-top: var(--dx-space-2xl);
      padding-bottom: var(--dx-space-xl);
      font-size: var(--dx-text-h1);
      font-weight: 300;
      line-height: var(--dx-leading-tight);
      color: var(--dx-color-heading);
      text-align: center;

      @include mobile {
        padding-top: var(--dx-space-lg);
        padding-bottom: var(--dx-space-md);
      }
    }

    p {
      max-width: 900px;
      margin: 0 0 var(--dx-space-xs);
      text-align: center;
    }
  }

  .company_image {
    width: 100%;
    max-width: 960px;
    margin-bottom: var(--dx-space-md);
    border-radius: var(--dx-radius-md);
  }

  .tech_image {
    width: 100%;
    max-width: 800px;
    margin-bottom: var(--dx-space-md);
    border-radius: var(--dx-radius-md);
  }
}
</style>
