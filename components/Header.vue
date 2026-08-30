<template>
  <nav class="site_header" :aria-label="$t('nav.home')">
    <NuxtLink :to="localePath('/')" class="brand">
      {{ $t("site.brand") }}
    </NuxtLink>

    <button
      class="nav_toggle"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="site-nav"
      :aria-label="$t('nav.home')"
      @click="menuOpen = !menuOpen"
    >
      <span class="bar" />
      <span class="bar" />
      <span class="bar" />
    </button>

    <div id="site-nav" class="nav_panel" :class="{ 'is-open': menuOpen }">
      <ul class="nav_list">
        <li v-for="item in navItems" :key="item.to">
          <NuxtLink
            :to="localePath(item.to)"
            class="nav_link"
            active-class="is-active"
            @click="menuOpen = false"
          >
            {{ $t(item.label) }}
          </NuxtLink>
        </li>
      </ul>
      <div class="lang_switch">
        <NuxtLink
          v-for="l in locales"
          :key="l.code"
          :to="switchLocalePath(l.code)"
          class="lang_item"
          :class="{ 'is-current': l.code === locale }"
          @click="menuOpen = false"
        >
          {{ l.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const route = useRoute();

const menuOpen = ref(false);

const navItems = [
  { to: "/", label: "nav.home" },
  { to: "/about", label: "nav.about" },
  { to: "/solution", label: "nav.solution" },
  { to: "/contact", label: "nav.contact" },
];

// 路由变化时收起移动端抽屉
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  }
);
</script>

<style lang="scss" scoped>
.site_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 94px;
  padding: 0 var(--dx-space-xl);
  background-color: var(--dx-color-brand);
  color: var(--dx-color-on-brand);

  @include mobile {
    // 高度改为自适应：抽屉展开时由内容撑高，菜单才会落在 Header 的底色上
    height: auto;
    min-height: 64px;
    padding: 0 var(--dx-space-md);
    flex-wrap: wrap;
  }
}

.brand {
  display: flex;
  align-items: center;
  min-height: 64px;
  color: var(--dx-color-on-brand);
  font-size: var(--dx-text-lg);
  text-decoration: none;
  white-space: nowrap;
}

.nav_toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  .bar {
    display: block;
    width: 22px;
    height: 2px;
    margin: 0 auto;
    background-color: var(--dx-color-on-brand);
  }

  @include mobile {
    display: flex;
  }
}

.nav_panel {
  display: flex;
  align-items: center;

  @include mobile {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    padding-bottom: var(--dx-space-md);
    background-color: var(--dx-color-brand);

    &.is-open {
      display: flex;
    }
  }
}

.nav_list {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  @include mobile {
    flex-direction: column;
    align-items: stretch;
  }
}

.nav_link {
  display: flex;
  align-items: center;
  height: 94px;
  padding: 0 var(--dx-space-md);
  color: var(--dx-color-on-brand);
  font-size: var(--dx-text-lg);
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover,
  &.is-active {
    border-bottom-color: var(--dx-color-on-brand);
  }

  @include mobile {
    height: 48px;
    border-bottom: none;
    border-left: 2px solid transparent;

    &:hover,
    &.is-active {
      border-bottom-color: transparent;
      border-left-color: var(--dx-color-on-brand);
    }
  }
}

.lang_switch {
  display: flex;
  align-items: center;
  gap: var(--dx-space-xs);
  padding-left: var(--dx-space-md);
  font-size: var(--dx-text-sm);

  @include mobile {
    padding: var(--dx-space-sm) var(--dx-space-md) 0;
  }

  .lang_item {
    color: var(--dx-color-on-brand);
    opacity: 0.65;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }

    &.is-current {
      opacity: 1;
      font-weight: bold;
    }
  }
}
</style>
