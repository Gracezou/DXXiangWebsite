<template>
  <div class="error_wrapper">
    <div class="error_content">
      <p class="status_code">{{ error?.statusCode || 500 }}</p>
      <h1>{{ title }}</h1>
      <p class="desc">{{ description }}</p>
      <button class="home_btn" type="button" @click="handleBack">
        {{ $t("error.backHome") }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
const { t } = useI18n();
const localePath = useLocalePath();

const isNotFound = computed(() => props.error?.statusCode === 404);

const title = computed(() =>
  isNotFound.value ? t("error.notFoundTitle") : t("error.genericTitle")
);

const description = computed(() =>
  isNotFound.value ? t("error.notFoundDesc") : t("error.genericDesc")
);

const handleBack = () => clearError({ redirect: localePath("/") });
</script>

<style lang="scss" scoped>
.error_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: var(--dx-color-ink);
  font-family: var(--dx-font-body);
}

.error_content {
  padding: 0 var(--dx-space-md);
  text-align: center;

  .status_code {
    margin: 0;
    font-family: var(--dx-font-display);
    font-size: var(--dx-text-hero);
    font-weight: 600;
    line-height: 1;
    letter-spacing: var(--dx-tracking-display);
    color: var(--dx-color-accent);
  }

  h1 {
    margin: var(--dx-space-md) 0 var(--dx-space-xs);
    font-size: var(--dx-text-h2);
    line-height: var(--dx-leading-tight);
    letter-spacing: var(--dx-tracking-heading);
    font-weight: 600;
    color: var(--dx-color-text);
  }

  .desc {
    margin: 0 auto var(--dx-space-xl);
    max-width: 44ch;
    font-size: var(--dx-text-body);
    line-height: var(--dx-leading-relaxed);
    color: var(--dx-color-muted);
  }

  .home_btn {
    padding: 13px var(--dx-space-md);
    font-family: var(--dx-font-body);
    font-size: 15px;
    font-weight: 500;
    color: var(--dx-color-on-accent);
    background-color: var(--dx-color-accent);
    border: none;
    border-radius: var(--dx-radius-sm);
    cursor: pointer;
    transition: background-color var(--dx-duration) var(--dx-ease);

    &:hover {
      background-color: var(--dx-color-accent-hover);
    }
  }
}
</style>
