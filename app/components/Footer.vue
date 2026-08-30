<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_main">
        <div class="footer_brand">
          <p class="brand_mark">Mighty <span>Elephant</span></p>
          <p class="brand_note">{{ $t("footer.policyNote") }}</p>
        </div>

        <nav class="footer_nav" :aria-label="$t('footer.sitemap')">
          <p class="col_title">{{ $t("footer.sitemap") }}</p>
          <NuxtLink :to="localePath('/')">{{ $t("nav.home") }}</NuxtLink>
          <NuxtLink :to="localePath('/about')">{{ $t("nav.about") }}</NuxtLink>
          <NuxtLink :to="localePath('/solution')">
            {{ $t("nav.solution") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')">
            {{ $t("nav.contact") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/policy')">
            {{ $t("footer.policyLink") }}
          </NuxtLink>
        </nav>

        <div class="footer_col">
          <p class="col_title">{{ $t("nav.contact") }}</p>
          <p class="phone">{{ $t("footer.phone") }}</p>
          <p>{{ $t("footer.hours") }}</p>
          <p>{{ $t("footer.address") }}</p>
        </div>

        <div class="footer_col">
          <p class="col_title">{{ $t("footer.appTitle") }}</p>
          <p>{{ $t("footer.appDesc") }}</p>
        </div>
      </div>

      <div class="copyright">
        <span>© {{ year }} {{ $t("site.company") }}</span>
        <a
          v-if="site.icp"
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener"
        >
          {{ site.icp }}
        </a>
        <a
          v-if="site.police"
          :href="`http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${site.police}`"
          target="_blank"
          rel="noopener"
        >
          {{ $t("footer.policeLabel", { code: site.police }) }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { site } = useAppConfig();
const localePath = useLocalePath();
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/page" as *;

.footer {
  padding: var(--dx-space-3xl) 0 var(--dx-space-xl);
  border-top: 1px solid var(--dx-line);
  background-color: var(--dx-color-ink);

  @include mobile {
    padding: var(--dx-space-2xl) 0 var(--dx-space-lg);
  }
}

.footer_main {
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: var(--dx-space-xl);

  @include tablet-down {
    grid-template-columns: 1fr 1fr;
    gap: var(--dx-space-lg);
  }

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.brand_mark {
  margin: 0 0 var(--dx-space-xs);
  font-family: var(--dx-font-display);
  font-size: var(--dx-text-lg);
  font-weight: 600;
  letter-spacing: var(--dx-tracking-tight);
  color: var(--dx-color-text);

  span {
    color: var(--dx-color-accent);
  }
}

.brand_note {
  margin: 0;
  max-width: 32ch;
  font-size: var(--dx-text-sm);
  color: var(--dx-color-muted);
}

.col_title {
  margin: 0 0 var(--dx-space-sm);
  font-family: var(--dx-font-mono);
  font-size: var(--dx-text-xs);
  letter-spacing: var(--dx-tracking-label);
  text-transform: uppercase;
  color: var(--dx-color-muted);
}

.footer_nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--dx-space-2xs);

  a {
    font-size: var(--dx-text-sm);
    color: var(--dx-color-muted);
    text-decoration: none;
    transition: color var(--dx-duration) var(--dx-ease);

    &:hover {
      color: var(--dx-color-accent);
    }
  }
}

.footer_col {
  p {
    margin: 0 0 var(--dx-space-2xs);
    font-size: var(--dx-text-sm);
    color: var(--dx-color-muted);
  }

  .phone {
    font-family: var(--dx-font-mono);
    font-size: var(--dx-text-body);
    color: var(--dx-color-text);
  }
}

.copyright {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dx-space-2xs) var(--dx-space-md);
  margin-top: var(--dx-space-2xl);
  padding-top: var(--dx-space-md);
  border-top: 1px solid var(--dx-line);
  font-family: var(--dx-font-mono);
  font-size: var(--dx-text-xs);
  color: var(--dx-color-muted);

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--dx-color-accent);
    }
  }
}
</style>
