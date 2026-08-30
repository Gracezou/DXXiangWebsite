<template>
  <section class="cta">
    <p class="cta_title">{{ $t("cta.title") }}</p>
    <NuxtLink :to="localePath('/contact')" class="cta_button">
      {{ $t("cta.button") }}
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--dx-space-md);
  padding: var(--dx-space-2xl) var(--dx-space-md);
  text-align: center;
  background-color: var(--dx-color-brand);

  @include mobile {
    padding: var(--dx-space-xl) var(--dx-space-md);
  }
}

.cta_title {
  margin: 0;
  max-width: 720px;
  font-size: var(--dx-text-h3);
  line-height: var(--dx-leading-tight);
  color: var(--dx-color-on-brand);
}

.cta_button {
  display: inline-flex;
  align-items: center;
  padding: var(--dx-space-xs) var(--dx-space-lg);
  font-size: var(--dx-text-body);
  font-weight: 500;
  color: var(--dx-color-brand);
  background-color: var(--dx-color-on-brand);
  border-radius: var(--dx-radius-sm);
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
}
</style>
