<template>
  <footer class="footer_wrapper">
    <div class="content">
      <div class="content_main">
        <div class="policy_box">
          <p>{{ $t("footer.policyNote") }}</p>
          <NuxtLink
            :to="localePath('/policy')"
            class="footer_link footer_link--info"
          >
            {{ $t("footer.policyLink") }}
          </NuxtLink>
        </div>
        <div class="menu_box">
          <p class="box_title">{{ $t("footer.sitemap") }}</p>
          <NuxtLink :to="localePath('/')" class="footer_link">
            {{ $t("nav.home") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/about')" class="footer_link">
            {{ $t("nav.about") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/solution')" class="footer_link">
            {{ $t("nav.solution") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="footer_link">
            {{ $t("nav.contact") }}
          </NuxtLink>
        </div>
        <div class="contact_box">
          <p class="phone">{{ $t("footer.phone") }}</p>
          <p class="hours">{{ $t("footer.hours") }}</p>
          <p class="address">{{ $t("footer.address") }}</p>
        </div>
        <div class="app_box">
          <p class="box_title">{{ $t("footer.appTitle") }}</p>
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
.footer_wrapper {
  padding-top: var(--dx-space-3xl);
  background-color: var(--dx-color-brand);
  color: var(--dx-color-text);
  font-size: var(--dx-text-sm);

  @include mobile {
    padding-top: var(--dx-space-xl);
  }

  .content {
    background-color: var(--dx-color-surface);
    padding: var(--dx-space-2xl) var(--dx-space-xl) var(--dx-space-lg);

    @include mobile {
      padding: var(--dx-space-lg) var(--dx-space-md) var(--dx-space-md);
    }

    p {
      margin-top: 0;
    }
  }
}

.content_main {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dx-space-2xl);

  @include mobile {
    flex-direction: column;
    gap: var(--dx-space-lg);
  }
}

.policy_box {
  flex: 1 1 240px;
  max-width: 320px;

  @include mobile {
    max-width: none;
  }
}

.menu_box {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: var(--dx-leading-relaxed);
}

.contact_box {
  flex: 1 1 240px;

  .phone {
    font-size: var(--dx-text-h3);
    font-weight: bold;
    color: var(--dx-color-text-strong);
    margin-bottom: var(--dx-space-2xs);
  }
  .hours {
    margin-bottom: var(--dx-space-md);
  }
  .address {
    font-size: var(--dx-text-body);
    font-weight: bold;
    color: var(--dx-color-text-strong);
  }
}

.app_box {
  flex: 1 1 200px;
  line-height: var(--dx-leading-relaxed);
}

.box_title {
  font-size: var(--dx-text-body);
  font-weight: bold;
  color: var(--dx-color-text-strong);
}

.footer_link {
  display: inline-flex;
  align-items: center;
  color: var(--dx-color-brand);
  font-size: var(--dx-text-sm);
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &--info {
    color: var(--dx-color-text);
  }
}

.copyright {
  margin-top: var(--dx-space-lg);
  padding-top: var(--dx-space-md);
  border-top: 1px solid var(--dx-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--dx-space-2xs) var(--dx-space-md);
  font-size: var(--dx-text-xs);

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--dx-color-text-strong);
    }
  }
}
</style>
