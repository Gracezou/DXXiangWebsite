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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f5f8;
  font-family: "Microsoft YaHei";
}
.error_content {
  text-align: center;
  padding: 0 20px;
  .status_code {
    margin: 0;
    font-size: 96px;
    font-weight: bold;
    line-height: 1;
    color: #003153;
  }
  h1 {
    margin: 24px 0 14px;
    font-size: 36px;
    font-weight: 600;
    color: #34495e;
  }
  .desc {
    margin: 0 0 40px;
    font-size: 16px;
    line-height: 26px;
    color: #848e97;
  }
  .home_btn {
    padding: 12px 36px;
    font-size: 16px;
    color: #e5ddd7;
    background-color: #003153;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: inherit;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
