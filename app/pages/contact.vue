<template>
  <div class="page">
    <Breadcrumb :current="$t('breadcrumb.contact')" />

    <section class="section">
      <div class="container">
        <div class="office_grid">
          <article class="office">
            <h1 class="office_name">{{ $t("contact.qingdao.name") }}</h1>
            <dl>
              <dt>{{ $t("contact.labels.phone") }}</dt>
              <dd>{{ $t("contact.qingdao.phoneValue") }}</dd>
              <dt>{{ $t("contact.labels.email") }}</dt>
              <dd>{{ $t("contact.qingdao.emailValue") }}</dd>
            </dl>
          </article>

          <article class="office">
            <h2 class="office_name">{{ $t("contact.hangzhou.name") }}</h2>
            <dl>
              <dt>{{ $t("contact.labels.phone") }}</dt>
              <dd>{{ $t("contact.hangzhou.phoneValue") }}</dd>
              <dt>{{ $t("contact.labels.email") }}</dt>
              <dd>{{ $t("contact.hangzhou.emailValue") }}</dd>
            </dl>
          </article>
        </div>

        <p class="hours_note">{{ $t("footer.hours") }}</p>
      </div>
    </section>
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
@use "~/assets/scss/page" as *;

.office_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--dx-space-md);
}

.office {
  padding: var(--dx-space-lg);
  background-color: var(--dx-color-card);
  border: 1px solid var(--dx-color-card-border);
  border-radius: var(--dx-radius-md);
  box-shadow: var(--dx-shadow-card);
}

.office_name {
  margin: 0 0 var(--dx-space-md);
  font-size: var(--dx-text-h3);
  line-height: var(--dx-leading-tight);
  color: var(--dx-color-heading);
}

dl {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--dx-space-2xs) var(--dx-space-md);
  margin: 0;
  font-size: var(--dx-text-body);
  line-height: var(--dx-leading-relaxed);
}

dt {
  color: var(--dx-color-text);
}

dd {
  margin: 0;
  color: var(--dx-color-text-strong);
  overflow-wrap: anywhere;
}

.hours_note {
  margin: var(--dx-space-lg) 0 0;
  font-size: var(--dx-text-sm);
  color: var(--dx-color-text);
}
</style>
