<template>
  <div class="home">
    <ElCarousel trigger="click">
      <ElCarouselItem>
        <Image
          src="/images/carousel_1.jpg"
          :alt="$t('alt.carousel1')"
          loading="eager"
          fetchpriority="high"
          sizes="sm:640px md:768px lg:1024px xl:1280px xxl:1920px"
          class="carousel_image"
          width="1280"
          height="920"
        />
        <div class="title_wrapper">
          <h2>{{ $t("home.carousel.slide1.title") }}</h2>
          <p>{{ $t("home.carousel.slide1.desc") }}</p>
        </div>
      </ElCarouselItem>
      <ElCarouselItem>
        <Image
          src="/images/carousel_2.jpg"
          :alt="$t('alt.carousel2')"
          sizes="sm:640px md:768px lg:1024px xl:1280px xxl:1920px"
          class="carousel_image"
          width="1280"
          height="920"
        />
        <div class="title_wrapper">
          <h2>{{ $t("home.carousel.slide2.title") }}</h2>
          <p>{{ $t("home.carousel.slide2.desc") }}</p>
        </div>
      </ElCarouselItem>
      <ElCarouselItem>
        <Image
          src="/images/carousel_3.jpg"
          :alt="$t('alt.carousel3')"
          sizes="sm:640px md:768px lg:1024px xl:1280px xxl:1920px"
          class="carousel_image"
          width="1280"
          height="920"
        />
        <div class="title_wrapper">
          <h2>{{ $t("home.carousel.slide3.title") }}</h2>
          <p>{{ $t("home.carousel.slide3.desc") }}</p>
        </div>
      </ElCarouselItem>
    </ElCarousel>

    <section class="part_content main">
      <h1>{{ $t("home.tech.title") }}</h1>
      <p>{{ $t("home.tech.p1") }}</p>
      <p>{{ $t("home.tech.p2") }}</p>
      <p>{{ $t("home.tech.p3") }}</p>
      <p>{{ $t("home.tech.p4") }}</p>
    </section>

    <section class="part_content">
      <h1>{{ $t("home.oneStop.title") }}</h1>
      <p>{{ $t("home.oneStop.p1") }}</p>
      <p>{{ $t("home.oneStop.p2") }}</p>
      <p>{{ $t("home.oneStop.p3") }}</p>
      <Image
        src="/images/one_stop_solution.jpg"
        :alt="$t('alt.oneStop')"
        class="content_image"
        sizes="sm:640px md:800px lg:800px xl:800px xxl:800px"
        width="800"
        height="200"
      />
    </section>

    <section class="part_content solution">
      <h1>{{ $t("home.solutions.title") }}</h1>
      <SolutionTab />
    </section>

    <section class="slogan part_content">
      <Image
        src="/images/parallax_home.jpg"
        :alt="$t('alt.slogan')"
        class="slogan_image"
        sizes="sm:640px md:768px lg:1024px xl:1280px xxl:1920px"
        width="1920"
        height="814"
      />
      <p>{{ $t("home.slogan") }}</p>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/Image.vue";
import SolutionTab from "~/components/Solution.vue";
import CallToAction from "~/components/CallToAction.vue";

definePageMeta({ layout: "home" });

const { t } = useI18n();
const { site } = useAppConfig();
const ogImage = "https://www.daxiaoxiang.com/images/og-cover.jpg";

useSeoMeta({
  title: () => t("seo.home.title"),
  description: () => t("seo.home.description"),
  ogTitle: () => t("seo.home.title"),
  ogDescription: () => t("seo.home.description"),
  ogType: "website",
  ogImage,
  twitterCard: "summary_large_image",
  twitterTitle: () => t("seo.home.title"),
  twitterDescription: () => t("seo.home.description"),
  twitterImage: ogImage,
});

// Organization 结构化数据。字段全部取自 v1.0 现有页面内容，
// 未补充成立年份、员工规模、社交账号等站点未提供的信息。
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        alternateName: "Mighty Elephant",
        url: site.url,
        logo: `${site.url}/favicon.ico`,
        telephone: "+86 185 2159 5792",
        address: [
          {
            "@type": "PostalAddress",
            addressCountry: "CN",
            addressLocality: "青岛",
          },
          {
            "@type": "PostalAddress",
            addressCountry: "CN",
            addressLocality: "杭州",
          },
        ],
      }),
    },
  ],
});
</script>

<style lang="scss" scoped>
.home {
  position: relative;

  // 轮播高度由 CSS 控制（替代 v1.0 的 window.innerHeight 计算）：
  // dvh 在移动端浏览器地址栏收起时表现更好，vh 作为降级
  :deep(.el-carousel__container) {
    height: 100vh;
    height: 100dvh;
  }

  .el-carousel__item {
    height: 100%;
  }

  .carousel_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -50%);
    width: 45%;
    text-align: left;
    color: var(--dx-color-on-image);

    // 移动端改为居中、加宽，避免文案被挤成窄条
    @include tablet-down {
      left: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      text-align: center;
    }

    h2 {
      font-size: var(--dx-text-display);
      line-height: var(--dx-leading-tight);
      margin: 0 0 var(--dx-space-sm);
    }

    p {
      font-size: var(--dx-text-body);
      line-height: var(--dx-leading-relaxed);
      margin: 0 0 var(--dx-space-sm);
    }
  }

  section.part_content {
    padding: var(--dx-space-4xl) var(--dx-space-md);
    text-align: center;
    font-size: var(--dx-text-body);

    @include mobile {
      padding: var(--dx-space-2xl) var(--dx-space-md);
    }

    h1 {
      margin-top: 0;
      font-size: var(--dx-text-h2);
      line-height: var(--dx-leading-tight);
      color: var(--dx-color-heading);
    }

    p {
      max-width: 900px;
      margin: 0 auto var(--dx-space-sm);
      color: var(--dx-color-text);
      font-size: var(--dx-text-body);
      line-height: var(--dx-leading-relaxed);
    }
  }

  .part_content.main {
    padding-top: var(--dx-space-5xl);
    padding-bottom: var(--dx-space-5xl);

    @include mobile {
      padding-top: var(--dx-space-3xl);
      padding-bottom: var(--dx-space-3xl);
    }

    h1 {
      font-size: var(--dx-text-h1);
      margin-bottom: var(--dx-space-xl);
    }
  }

  .slogan.part_content {
    position: relative;
    padding: 0;
    height: 320px;

    @include mobile {
      height: 220px;
    }

    .slogan_image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    p {
      position: absolute;
      width: 100%;
      max-width: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      padding: 0 var(--dx-space-md);
      font-size: var(--dx-text-h2);
      color: var(--dx-color-on-image);
    }
  }

  > section:nth-of-type(even) {
    padding-top: var(--dx-space-2xl);
    background-color: var(--dx-color-surface);
  }

  .content_image {
    width: 100%;
    max-width: 800px;
    margin: var(--dx-space-md) auto 0;
    border-radius: var(--dx-radius-md);
  }
}
</style>
