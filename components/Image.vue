<template>
  <ElImage :style="`width:${width};height:${height}`" v-bind="$attrs">
    <template #error>
      <div class="image-slot">
        <el-icon><Picture /></el-icon>
      </div>
    </template>
  </ElImage>
</template>
<script setup lang="ts">
import { Picture } from "@element-plus/icons-vue";
import { ElImage } from "element-plus";
const props = defineProps({
  width: { type: String, default: "100%" },
  height: { type: String, default: "100%" },
});
</script>
<style lang="scss" scoped>
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.image-slot .el-icon {
  font-size: 30px;
}
</style>
