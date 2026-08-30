<template>
  <div>
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
  gap: 1px;
  background-color: var(--dx-line);
  border: 1px solid var(--dx-line);
}

.office {
  padding: var(--dx-space-lg) var(--dx-space-md);
  background-color: var(--dx-color-ink);
  transition: background-color var(--dx-duration) var(--dx-ease);

  &:hover {
    background-color: var(--dx-color-surface);
  }
}

.office_name {
  margin: 0 0 var(--dx-space-md);
  font-size: var(--dx-text-h3);
  line-height: var(--dx-leading-tight);
  letter-spacing: var(--dx-tracking-tight);
  font-weight: 600;
  color: var(--dx-color-text);
}

dl {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--dx-space-2xs) var(--dx-space-md);
  margin: 0;
  font-size: var(--dx-text-sm);
}

dt {
  font-family: var(--dx-font-mono);
  font-size: var(--dx-text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dx-color-muted);
  padding-top: 2px;
}

dd {
  margin: 0;
  color: var(--dx-color-text);
  overflow-wrap: anywhere;
}

.hours_note {
  margin: var(--dx-space-lg) 0 0;
  font-family: var(--dx-font-mono);
  font-size: var(--dx-text-xs);
  color: var(--dx-color-muted);
}
</style>
