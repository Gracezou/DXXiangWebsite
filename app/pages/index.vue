<template>
  <div class="home">
    <!-- Hero：单一主张 + 主次 CTA，替代 v2.0 的三屏轮播。
         轮播会稀释主张且绝大多数访客只看第一屏。 -->
    <section class="hero">
      <Image
        src="/images/carousel_1.jpg"
        :alt="$t('alt.carousel1')"
        loading="eager"
        fetchpriority="high"
        sizes="sm:640px md:768px lg:1024px xl:1280px xxl:1920px"
        width="1280"
        height="920"
        class="hero_bg"
      />
      <div class="hero_inner">
        <h1>{{ $t("hero.title") }}</h1>
        <p class="hero_sub">{{ $t("hero.subtitle") }}</p>
        <div class="hero_actions">
          <NuxtLink :to="localePath('/solution')" class="btn btn--primary">
            {{ $t("hero.primaryCta") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="btn btn--ghost">
            {{ $t("hero.secondaryCta") }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 服务卡片：承接原轮播三屏的内容，并列呈现而非依次播放 -->
    <section class="section section--light">
      <div class="container">
        <header class="section_head">
          <h2>{{ $t("home.servicesTitle") }}</h2>
          <p>{{ $t("home.servicesIntro") }}</p>
        </header>
        <div class="card_grid">
          <ServiceCard
            :image="'/images/technology_solution_provider.jpg'"
            :alt="$t('alt.solutionProvider')"
            :image-width="800"
            :image-height="200"
            :title="$t('solution.provider.title')"
            :description="$t('solution.provider.p1')"
          />
          <ServiceCard
            :image="'/images/solution_web_app.jpg'"
            :alt="$t('alt.webApp')"
            :image-width="800"
            :image-height="340"
            :title="$t('solution.webApp.title')"
            :description="$t('solution.webApp.p1')"
          />
          <ServiceCard
            :image="'/images/carousel_3.jpg'"
            :alt="$t('alt.carousel3')"
            :image-width="1280"
            :image-height="920"
            :title="$t('solution.dataHunter.title')"
            :description="$t('solution.dataHunter.p2')"
          />
        </div>
      </div>
    </section>

    <!-- 网络技术驱动：正文阅读区，浅色 -->
    <section class="section">
      <div class="container container--narrow">
        <header class="section_head">
          <h2>{{ $t("home.tech.title") }}</h2>
        </header>
        <div class="prose">
          <p>{{ $t("home.tech.p1") }}</p>
          <p>{{ $t("home.tech.p2") }}</p>
          <p>{{ $t("home.tech.p3") }}</p>
          <p>{{ $t("home.tech.p4") }}</p>
        </div>
      </div>
    </section>

    <!-- 一站式需求解决：图文并置，打破清一色的居中段落节奏 -->
    <section class="section section--light">
      <div class="container">
        <div class="split">
          <div class="split_text">
            <h2>{{ $t("home.oneStop.title") }}</h2>
            <p>{{ $t("home.oneStop.p1") }}</p>
            <p>{{ $t("home.oneStop.p2") }}</p>
            <p>{{ $t("home.oneStop.p3") }}</p>
          </div>
          <div class="split_media">
            <Image
              src="/images/one_stop_solution.jpg"
              :alt="$t('alt.oneStop')"
              sizes="sm:640px md:520px lg:560px xl:600px xxl:640px"
              width="800"
              height="200"
              class="split_img"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- slogan：深色横幅 -->
    <section class="slogan">
      <Image
        src="/images/parallax_home.jpg"
        :alt="$t('alt.slogan')"
        sizes="sm:640px md:768px lg:1024px xl:1280px xxl:1920px"
        width="1920"
        height="814"
        class="slogan_bg"
      />
      <p>{{ $t("home.slogan") }}</p>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/Image.vue";
import ServiceCard from "~/components/ServiceCard.vue";
import CallToAction from "~/components/CallToAction.vue";

definePageMeta({ layout: "home" });

const { t } = useI18n();
const { site } = useAppConfig();
const localePath = useLocalePath();
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

// Organization 结构化数据。字段全部取自现有页面内容，
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
// ---------- Hero ----------
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  background-color: var(--dx-color-brand-deep);
}

.hero_bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.42;
}

.hero_inner {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--dx-space-3xl) var(--dx-space-xl);

  @include mobile {
    padding: var(--dx-space-2xl) var(--dx-space-md);
  }

  h1 {
    max-width: 16em;
    margin: 0 0 var(--dx-space-md);
    font-size: var(--dx-text-display);
    line-height: var(--dx-leading-tight);
    color: var(--dx-color-on-image);
  }
}

.hero_sub {
  max-width: 34em;
  margin: 0 0 var(--dx-space-xl);
  font-size: var(--dx-text-lg);
  line-height: var(--dx-leading-relaxed);
  color: var(--dx-color-on-dark);
}

.hero_actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dx-space-sm);
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: var(--dx-space-xs) var(--dx-space-lg);
  font-size: var(--dx-text-body);
  font-weight: 500;
  border-radius: var(--dx-radius-sm);
  text-decoration: none;
  transition: all var(--dx-duration) var(--dx-ease);

  &--primary {
    color: var(--dx-color-brand-deep);
    background-color: var(--dx-color-accent);

    &:hover {
      filter: brightness(1.08);
    }
  }

  &--ghost {
    color: var(--dx-color-on-image);
    border: 1px solid rgb(255 255 255 / 45%);

    &:hover {
      background-color: rgb(255 255 255 / 12%);
      border-color: var(--dx-color-on-image);
    }
  }
}

// ---------- 通用区块 ----------
.section {
  padding: var(--dx-space-4xl) 0;

  @include mobile {
    padding: var(--dx-space-2xl) 0;
  }

  &--light {
    background-color: var(--dx-color-surface);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--dx-space-xl);

  @include mobile {
    padding: 0 var(--dx-space-md);
  }

  &--narrow {
    max-width: 820px;
  }
}

.section_head {
  margin-bottom: var(--dx-space-xl);

  h2 {
    margin: 0 0 var(--dx-space-xs);
    font-size: var(--dx-text-h1);
    line-height: var(--dx-leading-tight);
    color: var(--dx-color-heading);
  }

  p {
    max-width: 46em;
    margin: 0;
    font-size: var(--dx-text-lg);
    line-height: var(--dx-leading-relaxed);
    color: var(--dx-color-text);
  }
}

.card_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--dx-space-md);
}

.prose p {
  margin: 0 0 var(--dx-space-sm);
  font-size: var(--dx-text-body);
  line-height: var(--dx-leading-relaxed);
  color: var(--dx-color-text);
}

// ---------- 图文并置 ----------
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--dx-space-2xl);

  @include tablet-down {
    grid-template-columns: 1fr;
    gap: var(--dx-space-md);
  }

  h2 {
    margin: 0 0 var(--dx-space-md);
    font-size: var(--dx-text-h1);
    line-height: var(--dx-leading-tight);
    color: var(--dx-color-heading);
  }

  p {
    margin: 0 0 var(--dx-space-sm);
    font-size: var(--dx-text-body);
    line-height: var(--dx-leading-relaxed);
    color: var(--dx-color-text);
  }
}

.split_img {
  width: 100%;
  height: auto;
  border-radius: var(--dx-radius-md);
}

// ---------- slogan 横幅 ----------
.slogan {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  overflow: hidden;
  background-color: var(--dx-color-brand-deep);

  @include mobile {
    height: 220px;
  }

  p {
    position: relative;
    max-width: 24em;
    margin: 0;
    padding: 0 var(--dx-space-md);
    font-size: var(--dx-text-h2);
    line-height: var(--dx-leading-tight);
    text-align: center;
    color: var(--dx-color-on-image);
  }
}

.slogan_bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.38;
}
</style>
