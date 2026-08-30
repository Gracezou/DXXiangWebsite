<template>
  <el-menu
    class="menu_wrapper"
    mode="horizontal"
    :ellipsis="false"
    background-color="#003153"
    text-color="#e5ddd7"
    active-text-color="#e5ddd7E6"
    router
  >
    <NuxtLink :to="localePath('/')" class="brand">
      {{ $t("site.brand") }}
    </NuxtLink>
    <div class="flex-grow" />
    <el-menu-item :index="localePath('/')">{{ $t("nav.home") }}</el-menu-item>
    <el-menu-item :index="localePath('/about')">
      {{ $t("nav.about") }}
    </el-menu-item>
    <el-menu-item :index="localePath('/solution')">
      {{ $t("nav.solution") }}
    </el-menu-item>
    <el-menu-item :index="localePath('/contact')">
      {{ $t("nav.contact") }}
    </el-menu-item>
    <div class="lang_switch">
      <NuxtLink
        v-for="l in switchableLocales"
        :key="l.code"
        :to="switchLocalePath(l.code)"
        class="lang_item"
        :class="{ 'is-current': l.code === locale }"
      >
        {{ l.name }}
      </NuxtLink>
    </div>
  </el-menu>
</template>
<script setup lang="ts">
const { locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const switchableLocales = computed(() => locales.value);
</script>
<style lang="scss">
.menu_wrapper {
  padding: 0 55px;
  border-bottom: none;

  // 品牌位不参与菜单激活态，故不用 el-menu-item（同 index 会导致重复高亮）
  .brand {
    display: flex;
    align-items: center;
    height: var(--el-menu-item-height);
    padding: 0 20px;
    color: #e5ddd7;
    font-size: 18px;
    text-decoration: none;
  }
  .lang_switch {
    display: flex;
    align-items: center;
    height: var(--el-menu-item-height);
    padding-left: 20px;
    gap: 10px;
    font-size: 14px;
    .lang_item {
      color: #e5ddd7;
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
}
</style>
