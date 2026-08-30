<template>
  <div class="page">
    <Breadcrumb :current="$t('breadcrumb.solution')" />

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split_text">
            <h1>{{ $t("solution.provider.title") }}</h1>
            <p>{{ $t("solution.provider.p1") }}</p>
            <p>{{ $t("solution.provider.p2") }}</p>
            <p>{{ $t("solution.provider.p3") }}</p>
            <p class="ai_note">{{ $t("solution.provider.ai") }}</p>
          </div>
          <div class="split_media">
            <Image
              src="/images/technology_solution_provider.jpg"
              :alt="$t('alt.solutionProvider')"
              sizes="sm:640px md:520px lg:560px xl:600px xxl:640px"
              width="800"
              height="200"
              class="split_img"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <div class="split split--reverse">
          <div class="split_text">
            <h2>{{ $t("solution.webApp.title") }}</h2>
            <p>{{ $t("solution.webApp.p1") }}</p>
            <p>{{ $t("solution.webApp.p2") }}</p>
            <p>{{ $t("solution.webApp.p3") }}</p>
            <p class="ai_note">{{ $t("solution.webApp.ai") }}</p>
          </div>
          <div class="split_media">
            <Image
              src="/images/solution_web_app.jpg"
              :alt="$t('alt.webApp')"
              sizes="sm:640px md:520px lg:560px xl:600px xxl:640px"
              width="800"
              height="340"
              class="split_img"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split_text">
            <h2>{{ $t("solution.dataHunter.title") }}</h2>
            <p>{{ $t("solution.dataHunter.p1") }}</p>
            <p>{{ $t("solution.dataHunter.p2") }}</p>
            <p>{{ $t("solution.dataHunter.p3") }}</p>
            <p class="ai_note">{{ $t("solution.dataHunter.ai") }}</p>
          </div>
          <div class="split_media">
            <Image
              src="/images/data_analyse.webp"
              :alt="$t('alt.dataAnalyse')"
              sizes="sm:640px md:520px lg:560px xl:600px xxl:640px"
              width="843"
              height="843"
              class="split_img"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <SolutionTab />
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/Image.vue";
import SolutionTab from "~/components/Solution.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";
import CallToAction from "~/components/CallToAction.vue";

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
@use "~/assets/scss/page" as *;

// AI 赋能补充说明：以左侧色条与主色区分，标明这是该业务的 AI 维度
.ai_note {
  margin-top: var(--dx-space-md);
  padding-left: var(--dx-space-sm);
  border-left: 2px solid var(--dx-color-ai);
  color: var(--dx-color-text-strong);
}
</style>
