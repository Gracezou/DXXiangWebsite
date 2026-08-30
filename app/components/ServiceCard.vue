<template>
  <article class="service_card">
    <div class="media">
      <Image
        :src="image"
        :alt="alt"
        :width="imageWidth"
        :height="imageHeight"
        sizes="sm:640px md:400px lg:440px xl:480px xxl:520px"
        class="media_img"
      />
    </div>
    <div class="body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import Image from "~/components/Image.vue";

defineProps<{
  image: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string;
}>();
</script>

<style lang="scss" scoped>
.service_card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--dx-color-card);
  border: 1px solid var(--dx-color-card-border);
  border-radius: var(--dx-radius-md);
  box-shadow: var(--dx-shadow-card);
  transition:
    box-shadow var(--dx-duration) var(--dx-ease),
    transform var(--dx-duration) var(--dx-ease);

  &:hover {
    box-shadow: var(--dx-shadow-card-hover);
    transform: translateY(-2px);
  }
}

.media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--dx-color-surface);
}

.media_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.body {
  padding: var(--dx-space-md);

  h3 {
    margin: 0 0 var(--dx-space-2xs);
    font-size: var(--dx-text-h3);
    line-height: var(--dx-leading-tight);
    color: var(--dx-color-heading);
  }

  p {
    margin: 0;
    font-size: var(--dx-text-body);
    line-height: var(--dx-leading-relaxed);
    color: var(--dx-color-text);
  }
}
</style>
