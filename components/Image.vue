<template>
  <NuxtImg
    v-if="!failed"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :fetchpriority="fetchpriority"
    :format="format"
    :sizes="sizes"
    class="dx_image"
    @error="failed = true"
  />
  <div v-else class="image_slot" role="img" :aria-label="alt">
    <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM8.5 11a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3ZM5 19l4-5l2.5 3L14.5 13L19 19H5Z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    /** 必填：无障碍与 SEO 都依赖它，B4-06 起不再允许省略 */
    alt: string;
    width?: string | number;
    height?: string | number;
    loading?: "lazy" | "eager";
    fetchpriority?: "high" | "low" | "auto";
    format?: string;
    sizes?: string;
  }>(),
  {
    width: undefined,
    height: undefined,
    loading: "lazy",
    fetchpriority: "auto",
    format: "webp",
    sizes: undefined,
  }
);

const failed = ref(false);
</script>

<style lang="scss" scoped>
.dx_image {
  display: block;
  max-width: 100%;
  height: auto;
}
.image_slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--dx-color-surface);
  color: var(--dx-color-text);
}
</style>
