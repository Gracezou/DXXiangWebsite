<template>
  <!--
    Hero 背景构成：延续服务卡片的几何语言（节点、连线、矩形框），
    不是装饰性的抽象图案 —— 三个节点对应三条业务线，连线指向中心，
    呼应「把技术能力落进业务流程」这句主张。
    纯静态 SVG，不做动画：动起来会喧宾夺主，也会吃掉性能分。
  -->
  <svg
    class="hero_figure"
    viewBox="0 0 520 520"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <g class="grid">
      <rect x="60" y="60" width="400" height="400" />
      <rect x="140" y="140" width="240" height="240" />
      <rect x="220" y="220" width="80" height="80" />
    </g>

    <g class="links">
      <path d="M100 100 L260 260" />
      <path d="M420 100 L260 260" />
      <path d="M260 460 L260 260" />
    </g>

    <g class="nodes">
      <circle cx="100" cy="100" r="7" />
      <circle cx="420" cy="100" r="7" />
      <circle cx="260" cy="460" r="7" />
    </g>

    <circle class="core" cx="260" cy="260" r="13" />
  </svg>
</template>

<style lang="scss" scoped>
.hero_figure {
  width: 100%;
  height: auto;
  max-width: 520px;
}

.grid rect {
  stroke: rgb(232 237 242 / 10%);
  stroke-width: 1;
}

.links path {
  stroke: rgb(224 164 88 / 34%);
  stroke-width: 1;
  stroke-dasharray: 3 5;
}

.nodes circle {
  fill: var(--dx-color-ink);
  stroke: var(--dx-color-muted);
  stroke-width: 1.2;
}

.core {
  fill: var(--dx-color-ink);
  stroke: var(--dx-color-accent);
  stroke-width: 1.4;
}
</style>
