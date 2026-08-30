<template>
  <div>
    <!-- Hero：视觉重量交给排版，几何构成提供焦点，不用图库照片铺底 -->
    <section class="hero">
      <div class="container hero_inner">
        <div class="hero_copy">
          <p class="eyebrow">Technology Solutions Provider</p>
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
        <div class="hero_visual" aria-hidden="true">
          <HeroFigure />
        </div>
      </div>

      <!-- 事实条：把原本埋在段落里的信息提到显眼位置 -->
      <div class="container">
        <dl class="facts">
          <div class="fact">
            <dt>{{ $t("facts.linesLabel") }}</dt>
            <dd>{{ $t("facts.linesValue") }}</dd>
          </div>
          <div class="fact">
            <dt>{{ $t("facts.industriesLabel") }}</dt>
            <dd>{{ $t("facts.industriesValue") }}</dd>
          </div>
          <div class="fact">
            <dt>{{ $t("facts.locationsLabel") }}</dt>
            <dd>{{ $t("facts.locationsValue") }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section_head">
          <p class="eyebrow">What we do</p>
          <h2>{{ $t("home.servicesTitle") }}</h2>
          <p>{{ $t("home.servicesIntro") }}</p>
        </div>

        <div class="card_grid">
          <ServiceCard
            glyph="grid"
            :title="$t('solution.provider.title')"
            :description="$t('solution.provider.p1')"
            :ai-note="$t('solution.provider.ai')"
          />
          <ServiceCard
            glyph="layers"
            :title="$t('solution.webApp.title')"
            :description="$t('solution.webApp.p1')"
            :ai-note="$t('solution.webApp.ai')"
          />
          <ServiceCard
            glyph="flow"
            :title="$t('solution.dataHunter.title')"
            :description="$t('solution.dataHunter.p2')"
            :ai-note="$t('solution.dataHunter.ai')"
          />
        </div>
      </div>
    </section>

    <AiSection />

    <section class="section">
      <div class="container">
        <div class="split">
          <div>
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

    <section class="section">
      <div class="container container--narrow">
        <div class="section_head">
          <h2>{{ $t("home.tech.title") }}</h2>
        </div>
        <div class="prose">
          <p>{{ $t("home.tech.p1") }}</p>
          <p>{{ $t("home.tech.p2") }}</p>
          <p>{{ $t("home.tech.p3") }}</p>
          <p>{{ $t("home.tech.p4") }}</p>
        </div>
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/Image.vue";
import ServiceCard from "~/components/ServiceCard.vue";
import AiSection from "~/components/AiSection.vue";
import CallToAction from "~/components/CallToAction.vue";
import HeroFigure from "~/components/HeroFigure.vue";

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
@use "~/assets/scss/page" as *;

.hero {
  padding: var(--dx-space-4xl) 0 var(--dx-space-3xl);

  @include mobile {
    padding: var(--dx-space-2xl) 0 var(--dx-space-xl);
  }

  h1 {
    max-width: var(--dx-measure-display);
    margin: 0 0 var(--dx-space-md);
    font-size: var(--dx-text-display);
    line-height: var(--dx-leading-display);
    letter-spacing: var(--dx-tracking-display);
    font-weight: 600;
  }
}

.hero_inner {
  position: relative;
}

.hero_copy {
  position: relative;
  z-index: 1;
}

// 几何构成是背景层次：绝对定位以免挤压标题宽度（占栏位时中文标题
// 会被压成三行且断在词中间），且相对文案区而非整个 hero 定位 ——
// 相对 hero 时垂直中心会落到事实条上，图形压住文字。
.hero_visual {
  position: absolute;
  top: 50%;
  right: 0;
  width: min(34vw, 380px);
  transform: translateY(-50%);
  pointer-events: none;
  opacity: 0.8;

  @include tablet-down {
    display: none;
  }
}

.hero_sub {
  max-width: var(--dx-measure-body);
  margin: 0 0 var(--dx-space-xl);
  font-size: var(--dx-text-lg);
  line-height: var(--dx-leading-relaxed);
  color: var(--dx-color-muted);
}

.hero_actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dx-space-xs);
}

.facts {
  display: flex;
  flex-wrap: wrap;
  margin: var(--dx-space-3xl) 0 0;
  border-top: 1px solid var(--dx-line);

  @include mobile {
    margin-top: var(--dx-space-xl);
  }
}

.fact {
  flex: 1 1 200px;
  padding: var(--dx-space-md) var(--dx-space-md) var(--dx-space-md) 0;
  border-right: 1px solid var(--dx-line);

  &:last-child {
    border-right: none;
  }

  @include mobile {
    flex-basis: 100%;
    border-right: none;
    border-bottom: 1px solid var(--dx-line);
    padding-right: 0;
  }

  dt {
    margin-bottom: var(--dx-space-2xs);
    font-family: var(--dx-font-mono);
    font-size: var(--dx-text-xs);
    letter-spacing: var(--dx-tracking-label);
    text-transform: uppercase;
    color: var(--dx-color-muted);
  }

  dd {
    margin: 0;
    font-family: var(--dx-font-display);
    font-size: var(--dx-text-lg);
    letter-spacing: var(--dx-tracking-tight);
    color: var(--dx-color-text);
  }
}

// 卡片网格：共用 1px 分隔线，不用独立投影
.card_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1px;
  background-color: var(--dx-line);
  border: 1px solid var(--dx-line);
}
</style>
