<template>
  <section class="ai">
    <div class="container">
      <div class="ai_grid">
        <div class="ai_head">
          <p class="eyebrow">AI</p>
          <h2>{{ $t("ai.title") }}</h2>
          <p class="ai_lead">{{ $t("ai.intro") }}</p>
        </div>

        <ul class="ai_list">
          <li v-for="key in itemKeys" :key="key" class="ai_item">
            <h3>{{ $t(`ai.items.${key}.title`) }}</h3>
            <p>{{ $t(`ai.items.${key}.desc`) }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// AI 是贯穿三条业务线的能力层，不是独立业务，故以横切板块呈现。
const itemKeys = ["app", "engineering", "assistant"] as const;
</script>

<style lang="scss" scoped>
@use "~/assets/scss/page" as *;

.ai {
  padding: var(--dx-space-3xl) 0;
  border-top: 1px solid var(--dx-line);
  // 品牌蓝作氛围光晕，是它在新版中的主要角色
  background:
    radial-gradient(
      ellipse 70% 130% at 12% 0%,
      rgb(0 49 83 / 55%),
      transparent 68%
    ),
    var(--dx-color-surface);

  @include mobile {
    padding: var(--dx-space-2xl) 0;
  }
}

.ai_grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: var(--dx-space-2xl);
  align-items: start;

  @include tablet-down {
    grid-template-columns: 1fr;
    gap: var(--dx-space-xl);
  }
}

.ai_head {
  h2 {
    margin: 0 0 var(--dx-space-sm);
    font-size: var(--dx-text-h1);
    line-height: var(--dx-leading-tight);
    letter-spacing: var(--dx-tracking-heading);
    font-weight: 600;
  }
}

.ai_lead {
  margin: 0;
  max-width: 40ch;
  font-size: var(--dx-text-lg);
  line-height: var(--dx-leading-relaxed);
  color: var(--dx-color-text);
  opacity: 0.9;
}

.ai_list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.ai_item {
  padding: var(--dx-space-md) 0;
  border-top: 1px solid var(--dx-line);

  &:first-child {
    border-top: none;
    padding-top: 0;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: var(--dx-space-2xs);
    margin: 0 0 var(--dx-space-2xs);
    font-size: var(--dx-text-h3);
    line-height: var(--dx-leading-tight);
    letter-spacing: var(--dx-tracking-tight);
    font-weight: 600;

    // 琥珀短线作标记，取代原来的紫色色条
    &::before {
      content: "";
      flex: none;
      width: 18px;
      height: 1px;
      background-color: var(--dx-color-accent);
    }
  }

  p {
    margin: 0;
    font-size: var(--dx-text-sm);
    line-height: var(--dx-leading-relaxed);
    color: var(--dx-color-muted);
  }
}
</style>
