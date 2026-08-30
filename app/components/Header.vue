<template>
  <nav class="site_header" :aria-label="$t('nav.home')">
    <div class="header_inner">
      <NuxtLink :to="localePath('/')" class="brand">
        Mighty <span>Elephant</span>
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
      </button>

      <div id="site-nav" class="nav_panel" :class="{ 'is-open': menuOpen }">
        <ul class="nav_list">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
              :to="localePath(item.to)"
              class="nav_link"
              active-class="is-active"
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
          >
            {{ l.name }}
          </NuxtLink>
        </div>
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

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  }
);
</script>

<style lang="scss" scoped>
.site_header {
  background-color: var(--dx-color-ink);
  border-bottom: 1px solid var(--dx-line);
}

.header_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 var(--dx-space-lg);
  min-height: 72px;

  @include mobile {
    flex-wrap: wrap;
    padding: 0 var(--dx-space-md);
    min-height: 60px;
  }
}

.brand {
  display: flex;
  align-items: center;
  min-height: 60px;
  font-family: var(--dx-font-display);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: var(--dx-tracking-tight);
  color: var(--dx-color-text);
  text-decoration: none;
  white-space: nowrap;

  span {
    color: var(--dx-color-accent);
    margin-left: 0.35em;
  }
}

.nav_toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  .bar {
    display: block;
    width: 20px;
    height: 1px;
    margin: 0 auto;
    background-color: var(--dx-color-text);
  }

  @include mobile {
    display: flex;
  }
}

.nav_panel {
  display: flex;
  align-items: center;
  gap: var(--dx-space-lg);

  @include mobile {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding-bottom: var(--dx-space-md);

    &.is-open {
      display: flex;
    }
  }
}

.nav_list {
  display: flex;
  align-items: center;
  gap: var(--dx-space-lg);
  margin: 0;
  padding: 0;
  list-style: none;

  @include mobile {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
}

.nav_link {
  display: inline-flex;
  align-items: center;
  font-size: var(--dx-text-sm);
  color: var(--dx-color-muted);
  text-decoration: none;
  transition: color var(--dx-duration) var(--dx-ease);

  &:hover,
  &.is-active {
    color: var(--dx-color-text);
  }

  @include mobile {
    min-height: 44px;
    border-bottom: 1px solid var(--dx-line);
  }
}

.lang_switch {
  display: flex;
  align-items: center;
  gap: var(--dx-space-xs);
  font-family: var(--dx-font-mono);
  font-size: var(--dx-text-xs);

  @include mobile {
    padding-top: var(--dx-space-md);
  }

  .lang_item {
    color: var(--dx-color-muted);
    text-decoration: none;
    transition: color var(--dx-duration) var(--dx-ease);

    &:hover {
      color: var(--dx-color-text);
    }

    &.is-current {
      color: var(--dx-color-accent);
    }
  }
}
</style>
