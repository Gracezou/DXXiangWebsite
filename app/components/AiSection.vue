<template>
  <section class="ai">
    <div class="ai_container">
      <header class="ai_head">
        <p class="ai_eyebrow">AI</p>
        <h2>{{ $t("ai.title") }}</h2>
        <p class="ai_intro">{{ $t("ai.intro") }}</p>
      </header>

      <ul class="ai_list">
        <li v-for="key in itemKeys" :key="key" class="ai_item">
          <span class="ai_marker" aria-hidden="true" />
          <h3>{{ $t(`ai.items.${key}.title`) }}</h3>
          <p>{{ $t(`ai.items.${key}.desc`) }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
// AI 是贯穿三条业务线的能力层，不是独立业务，故以横切板块呈现。
// 本站无 AI 相关图片素材，此处刻意采用纯版式处理而非借用无关配图。
const itemKeys = ["app", "engineering", "assistant"] as const;
</script>

<style lang="scss" scoped>
.ai {
  padding: var(--dx-space-4xl) 0;
  background-color: var(--dx-color-brand-deep);
  // 极淡的紫色辉光，是全站唯一使用 AI 专用色的地方
  background-image: radial-gradient(
    ellipse 80% 60% at 50% 0%,
    rgb(124 58 237 / 22%),
    transparent 70%
  );

  @include mobile {
    padding: var(--dx-space-2xl) 0;
  }
}

.ai_container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--dx-space-xl);

  @include mobile {
    padding: 0 var(--dx-space-md);
  }
}

.ai_head {
  max-width: 46em;
  margin-bottom: var(--dx-space-2xl);

  h2 {
    margin: 0 0 var(--dx-space-sm);
    font-size: var(--dx-text-h1);
    line-height: var(--dx-leading-tight);
    color: var(--dx-color-on-image);
  }
}

.ai_eyebrow {
  margin: 0 0 var(--dx-space-xs);
  font-size: var(--dx-text-sm);
  font-weight: 600;
  letter-spacing: 0.16em;
  // 用提亮版：#7c3aed 在深色底上对比度仅 3.23，14px 文字需 ≥4.5
  color: var(--dx-color-ai-on-dark);
}

.ai_intro {
  margin: 0;
  font-size: var(--dx-text-lg);
  line-height: var(--dx-leading-relaxed);
  color: var(--dx-color-on-dark);
}

.ai_list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--dx-space-xl);
  margin: 0;
  padding: 0;
  list-style: none;
}

.ai_item {
  padding-top: var(--dx-space-md);
  border-top: 1px solid rgb(255 255 255 / 16%);

  h3 {
    margin: 0 0 var(--dx-space-2xs);
    font-size: var(--dx-text-h3);
    line-height: var(--dx-leading-tight);
    color: var(--dx-color-on-image);
  }

  p {
    margin: 0;
    font-size: var(--dx-text-body);
    line-height: var(--dx-leading-relaxed);
    color: var(--dx-color-on-dark-muted);
  }
}

.ai_marker {
  display: block;
  width: 32px;
  height: 2px;
  margin-bottom: var(--dx-space-md);
  background-color: var(--dx-color-ai);
}
</style>
