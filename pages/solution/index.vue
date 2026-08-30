<template>
  <div class="solution_wrapper">
    <Breadcrumb :current="$t('breadcrumb.solution')" />
    <div class="content">
      <Divider />
      <section class="part_content">
        <h1>{{ $t("solution.provider.title") }}</h1>
        <p>{{ $t("solution.provider.p1") }}</p>
        <p>{{ $t("solution.provider.p2") }}</p>
        <p>{{ $t("solution.provider.p3") }}</p>
        <Image
          src="/images/technology_solution_provider.jpg"
          :alt="$t('alt.solutionProvider')"
          class="solution_image"
          sizes="sm:640px md:800px lg:800px xl:800px xxl:800px"
        />
      </section>

      <section class="part_content">
        <h1>{{ $t("solution.webApp.title") }}</h1>
        <p>{{ $t("solution.webApp.p1") }}</p>
        <p>{{ $t("solution.webApp.p2") }}</p>
        <p>{{ $t("solution.webApp.p3") }}</p>
        <Image
          src="/images/solution_web_app.jpg"
          :alt="$t('alt.webApp')"
          class="solution_image"
          sizes="sm:640px md:800px lg:800px xl:800px xxl:800px"
        />
      </section>

      <section class="part_content">
        <h1>{{ $t("solution.dataHunter.title") }}</h1>
        <p>{{ $t("solution.dataHunter.p1") }}</p>
        <p>{{ $t("solution.dataHunter.p2") }}</p>
        <p>{{ $t("solution.dataHunter.p3") }}</p>
        <Image
          src="/images/data_analyse.webp"
          :alt="$t('alt.dataAnalyse')"
          class="solution_image"
          sizes="sm:640px md:800px lg:800px xl:800px xxl:800px"
        />
      </section>
      <Divider />
      <SolutionTab />
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from "~~/components/Image.vue";
import SolutionTab from "~~/components/Solution.vue";
import Breadcrumb from "~~/components/Breadcrumb.vue";
import Divider from "~~/components/Divider.vue";

const { t } = useI18n();
const ogImage = "https://www.daxiaoxiang.com/images/og-cover.jpg";

useSeoMeta({
  title: () => t("seo.solution.title"),
  description: () => t("seo.solution.description"),
  ogTitle: () => t("seo.solution.title"),
  ogDescription: () => t("seo.solution.description"),
  ogType: "website",
  ogImage,
  twitterCard: "summary_large_image",
  twitterTitle: () => t("seo.solution.title"),
  twitterDescription: () => t("seo.solution.description"),
  twitterImage: ogImage,
});
</script>

<style lang="scss" scoped>
.solution_wrapper {
  .content {
    padding-bottom: var(--dx-space-4xl);

    @include mobile {
      padding-bottom: var(--dx-space-2xl);
    }

    > section:nth-of-type(even) {
      background-color: var(--dx-color-surface);
    }
  }

  .part_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--dx-space-xl) var(--dx-space-xl) var(--dx-space-4xl);
    color: var(--dx-color-text);
    font-size: var(--dx-text-body);
    line-height: var(--dx-leading-relaxed);

    @include mobile {
      padding: var(--dx-space-lg) var(--dx-space-md) var(--dx-space-2xl);
    }

    h1 {
      margin-bottom: var(--dx-space-2xl);
      font-size: var(--dx-text-h1);
      font-weight: 600;
      line-height: var(--dx-leading-tight);
      color: var(--dx-color-heading);
      text-align: center;

      @include mobile {
        margin-bottom: var(--dx-space-md);
      }
    }

    p {
      max-width: 900px;
      margin-top: 0;
      text-align: center;
    }
  }

  .solution_image {
    width: 100%;
    max-width: 800px;
    margin-top: var(--dx-space-2xl);
    border-radius: var(--dx-radius-md);

    @include mobile {
      margin-top: var(--dx-space-md);
    }
  }
}
</style>
