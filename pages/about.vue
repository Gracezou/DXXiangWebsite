<template>
  <div class="about_wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: localePath('/') }">
        {{ $t("breadcrumb.home") }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t("breadcrumb.about") }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-divider />
      <section class="part_content">
        <h1>{{ $t("about.company.title") }}</h1>
        <Image
          src="/images/internet_company.jpg"
          class="company_image"
          width="960px"
        />
        <p>{{ $t("about.company.p1") }}</p>
        <p>{{ $t("about.company.p2") }}</p>
      </section>
      <section class="part_content">
        <h1>{{ $t("about.tech.title") }}</h1>
        <Image
          src="/images/technology_first.jpg"
          class="tech_image"
          width="800px"
        />
        <p>{{ $t("about.tech.p1") }}</p>
        <p>{{ $t("about.tech.p2") }}</p>
        <p>{{ $t("about.tech.p3") }}</p>
        <p>{{ $t("about.tech.p4") }}</p>
      </section>
      <section class="part_content">
        <h1>{{ $t("about.team.title") }}</h1>
        <Image src="/images/team.jpg" class="tech_image" width="800px" />
        <p>{{ $t("about.team.p1") }}</p>
        <p>{{ $t("about.team.p2") }}</p>
        <p>{{ $t("about.team.p3") }}</p>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import Image from "~~/components/Image.vue";

const localePath = useLocalePath();
</script>
<style lang="scss">
.about_wrapper {
  .content {
    height: 100%;
    > section:nth-of-type(even) {
      background-color: #f2f5f8;
    }
  }
  .part_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;

    h1 {
      margin: 0;
      padding-top: 60px;
      padding-bottom: 50px;
      font-size: 48px;
      font-weight: 300;
    }
  }
  .company_image {
    width: 960px;
    aspect-ratio: auto 960 / 400;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .tech_image {
    width: 800px;
    aspect-ratio: auto 800 / 220;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .team_image_box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
