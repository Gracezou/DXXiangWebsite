<template>
  <div class="page">
    <Breadcrumb :current="$t('breadcrumb.about')" />

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split_text">
            <h1>{{ $t("about.company.title") }}</h1>
            <p>{{ $t("about.company.p1") }}</p>
            <p>{{ $t("about.company.p2") }}</p>
          </div>
          <div class="split_media">
            <Image
              src="/images/internet_company.jpg"
              :alt="$t('alt.company')"
              sizes="sm:640px md:520px lg:560px xl:600px xxl:640px"
              width="960"
              height="400"
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
            <h2>{{ $t("about.tech.title") }}</h2>
            <p>{{ $t("about.tech.p1") }}</p>
            <p>{{ $t("about.tech.p2") }}</p>
            <p>{{ $t("about.tech.p3") }}</p>
            <p>{{ $t("about.tech.p4") }}</p>
          </div>
          <div class="split_media">
            <Image
              src="/images/technology_first.jpg"
              :alt="$t('alt.techFirst')"
              sizes="sm:640px md:520px lg:560px xl:600px xxl:640px"
              width="800"
              height="200"
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
            <h2>{{ $t("about.team.title") }}</h2>
            <p>{{ $t("about.team.p1") }}</p>
            <p>{{ $t("about.team.p2") }}</p>
            <p>{{ $t("about.team.p3") }}</p>
          </div>
          <div class="split_media">
            <Image
              src="/images/team.jpg"
              :alt="$t('alt.team')"
              sizes="sm:640px md:520px lg:560px xl:600px xxl:640px"
              width="800"
              height="200"
              class="split_img"
            />
          </div>
        </div>
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/Image.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";
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
@use "~/assets/scss/page" as *;
</style>
