<template>
  <div class="footer_wrapper">
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
          <p>{{ $t("footer.sitemap") }}</p>
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
          <p>{{ $t("footer.phone") }}</p>
          <p>{{ $t("footer.hours") }}</p>
          <p class="address">{{ $t("footer.address") }}</p>
        </div>
        <div class="app_box">
          <p>{{ $t("footer.appTitle") }}</p>
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
  </div>
</template>

<script setup lang="ts">
const { site } = useAppConfig();
const localePath = useLocalePath();
const year = new Date().getFullYear();
</script>
<style lang="scss" scoped>
.footer_wrapper {
  background-color: #003153;
  padding-top: 90px;
  height: 100%;
  box-sizing: border-box;
  color: #848e97;
  font-size: 14px;
  .content {
    height: 100%;
    box-sizing: border-box;
    background-color: #f2f5f8;
    display: flex;
    flex-direction: column;
    padding: 60px 50px 40px;
    p {
      margin-top: 0;
    }
  }
  .content_main {
    display: flex;
  }
  .policy_box {
    width: 25%;
  }
  .menu_box {
    margin: 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 24px;
    p {
      font-size: 16px;
      font-weight: bold;
      color: #31384d;
    }
  }
  // 替代 el-link：保持原有配色与字重，改用 NuxtLink 以走客户端路由
  .footer_link {
    display: inline-flex;
    align-items: center;
    color: var(--el-color-primary);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
    &--info {
      color: var(--el-color-info);
    }
  }
  .app_box {
    line-height: 24px;
    p:first-child {
      font-size: 16px;
      font-weight: bold;
      color: #31384d;
    }
  }
  .contact_box {
    margin-right: 30px;
    p:first-child {
      font-size: 30px;
      font-weight: bold;
      color: #31384d;
      margin-bottom: 8px;
    }
    p:nth-child(2) {
      margin-bottom: 8px;
      margin-bottom: 30px;
    }
    .address {
      font-size: 16px;
      font-weight: bold;
      color: #31384d;
    }
  }
  .copyright {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #dfe5ec;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    font-size: 13px;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: #31384d;
      }
    }
  }
}
</style>
