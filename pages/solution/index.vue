<template>
  <div class="solution_wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: localePath('/') }">
        {{ $t("breadcrumb.home") }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t("breadcrumb.solution") }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-divider />
      <section class="part_content">
        <h1>{{ $t("solution.provider.title") }}</h1>
        <p>{{ $t("solution.provider.p1") }}</p>
        <p>{{ $t("solution.provider.p2") }}</p>
        <p>{{ $t("solution.provider.p3") }}</p>
        <Image
          src="/images/technology_solution_provider.jpg"
          class="solution_image"
          width="800px"
        />
      </section>

      <section class="part_content">
        <h1>{{ $t("solution.webApp.title") }}</h1>
        <p>{{ $t("solution.webApp.p1") }}</p>
        <p>{{ $t("solution.webApp.p2") }}</p>
        <p>{{ $t("solution.webApp.p3") }}</p>
        <Image
          src="/images/solution_web_app.jpg"
          class="solution_image"
          width="800px"
        />
      </section>

      <section class="part_content">
        <h1>{{ $t("solution.dataHunter.title") }}</h1>
        <p>{{ $t("solution.dataHunter.p1") }}</p>
        <p>{{ $t("solution.dataHunter.p2") }}</p>
        <p>{{ $t("solution.dataHunter.p3") }}</p>
        <Image
          src="/images/data_analyse.webp"
          class="solution_image"
          width="800px"
        />
      </section>
      <el-divider />
      <SolutionTab />
    </div>
  </div>
</template>
<script setup lang="ts">
import Image from "~~/components/Image.vue";
import SolutionTab from "~~/components/Solution.vue";

const localePath = useLocalePath();
</script>
<style lang="scss" scoped>
.solution_wrapper {
  .content {
    height: 100%;
    padding-bottom: 120px;
    > section:nth-of-type(even) {
      background-color: #f2f5f8;
    }
  }

  .solution_image {
    aspect-ratio: auto 800 / 220;
    margin-top: 60px;
    border-radius: 10px;
  }
  .part_content {
    padding: 50px 50px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #848e97;
    font-size: 16px;
    line-height: 26px;
    h1 {
      color: #34495e;
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 60px;
    }
    p {
      margin-top: 0;
    }
  }
}
</style>
