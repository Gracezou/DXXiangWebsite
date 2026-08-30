<template>
  <section class="cta">
    <div class="container">
      <div class="cta_inner">
        <p class="cta_title">{{ $t("cta.title") }}</p>
        <NuxtLink :to="localePath('/contact')" class="btn btn--primary">
          {{ $t("cta.button") }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/page" as *;

.cta {
  padding: var(--dx-space-3xl) 0;
  border-top: 1px solid var(--dx-line);

  @include mobile {
    padding: var(--dx-space-2xl) 0;
  }
}

.cta_inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--dx-space-md);
}

.cta_title {
  margin: 0;
  max-width: 24ch;
  font-family: var(--dx-font-display);
  font-size: var(--dx-text-h2);
  line-height: var(--dx-leading-tight);
  letter-spacing: var(--dx-tracking-heading);
  font-weight: 600;
  color: var(--dx-color-text);
}
</style>
