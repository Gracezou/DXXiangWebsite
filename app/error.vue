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
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dx-color-surface);
  font-family: var(--dx-font-sans);
}

.error_content {
  text-align: center;
  padding: 0 var(--dx-space-md);

  .status_code {
    margin: 0;
    font-size: var(--dx-text-hero);
    font-weight: bold;
    line-height: 1;
    color: var(--dx-color-brand);
  }

  h1 {
    margin: var(--dx-space-md) 0 var(--dx-space-sm);
    font-size: var(--dx-text-h2);
    font-weight: 600;
    color: var(--dx-color-heading);
  }

  .desc {
    margin: 0 0 var(--dx-space-xl);
    font-size: var(--dx-text-body);
    line-height: var(--dx-leading-relaxed);
    color: var(--dx-color-text);
  }

  .home_btn {
    padding: var(--dx-space-xs) var(--dx-space-lg);
    font-size: var(--dx-text-body);
    font-family: inherit;
    color: var(--dx-color-on-brand);
    background-color: var(--dx-color-brand);
    border: none;
    border-radius: var(--dx-radius-sm);
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
