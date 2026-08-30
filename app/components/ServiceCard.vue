<template>
  <article class="card">
    <!-- 用几何图形取代图库照片：不受原图比例限制，也不依赖素材质量 -->
    <svg
      class="glyph"
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      aria-hidden="true"
    >
      <template v-if="glyph === 'grid'">
        <rect
          x="1"
          y="1"
          width="20"
          height="20"
          stroke="currentColor"
          stroke-width="1.2"
        />
        <rect
          x="31"
          y="1"
          width="20"
          height="20"
          stroke="var(--dx-color-muted)"
          stroke-width="1.2"
        />
        <rect
          x="1"
          y="31"
          width="20"
          height="20"
          stroke="var(--dx-color-muted)"
          stroke-width="1.2"
        />
        <rect
          x="31"
          y="31"
          width="20"
          height="20"
          stroke="var(--dx-color-muted)"
          stroke-width="1.2"
        />
        <path
          d="M21 11h10M11 21v10M41 21v10M21 41h10"
          stroke="currentColor"
          stroke-width="1.2"
        />
      </template>
      <template v-else-if="glyph === 'layers'">
        <rect
          x="1"
          y="7"
          width="30"
          height="38"
          stroke="var(--dx-color-muted)"
          stroke-width="1.2"
        />
        <rect
          x="19"
          y="16"
          width="32"
          height="24"
          stroke="currentColor"
          stroke-width="1.2"
        />
        <path d="M19 24h32" stroke="currentColor" stroke-width="1.2" />
        <circle cx="24" cy="20" r="1.4" fill="currentColor" />
      </template>
      <template v-else>
        <path
          d="M2 40C10 40 12 12 22 12s12 28 22 28"
          stroke="currentColor"
          stroke-width="1.2"
        />
        <path
          d="M2 48C10 48 12 26 22 26s12 22 22 22"
          stroke="var(--dx-color-muted)"
          stroke-width="1.2"
        />
        <circle
          cx="22"
          cy="12"
          r="2.6"
          stroke="currentColor"
          stroke-width="1.2"
        />
        <circle
          cx="44"
          cy="40"
          r="2.6"
          stroke="var(--dx-color-muted)"
          stroke-width="1.2"
        />
      </template>
    </svg>

    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span v-if="aiNote" class="ai_tag">{{ aiNote }}</span>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  glyph: "grid" | "layers" | "flow";
  title: string;
  description: string;
  aiNote?: string;
}>();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: var(--dx-space-lg) var(--dx-space-md) var(--dx-space-xl);
  background-color: var(--dx-color-ink);
  transition: background-color var(--dx-duration) var(--dx-ease);

  &:hover {
    background-color: var(--dx-color-surface);
  }
}

.glyph {
  display: block;
  margin-bottom: var(--dx-space-md);
  color: var(--dx-color-accent);
}

h3 {
  margin: 0 0 var(--dx-space-xs);
  font-size: var(--dx-text-h3);
  line-height: var(--dx-leading-tight);
  letter-spacing: var(--dx-tracking-tight);
  font-weight: 600;
}

p {
  margin: 0;
  font-size: var(--dx-text-sm);
  line-height: var(--dx-leading-relaxed);
  color: var(--dx-color-muted);
}

.ai_tag {
  align-self: flex-start;
  margin-top: var(--dx-space-md);
  padding-bottom: 2px;
  font-family: var(--dx-font-mono);
  font-size: var(--dx-text-xs);
  letter-spacing: 0.08em;
  color: var(--dx-color-accent-dim);
  border-bottom: 1px solid rgb(224 164 88 / 28%);
}
</style>
