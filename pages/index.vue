<template>
  <div class="home">
    <ElCarousel trigger="click">
      <ElCarouselItem>
        <Image src="/images/carousel_1.jpg" />
        <div class="title_wrapper">
          <h2>{{ $t("home.carousel.slide1.title") }}</h2>
          <p>{{ $t("home.carousel.slide1.desc") }}</p>
        </div>
      </ElCarouselItem>
      <ElCarouselItem>
        <Image src="/images/carousel_2.jpg" />
        <div class="title_wrapper">
          <h2>{{ $t("home.carousel.slide2.title") }}</h2>
          <p>{{ $t("home.carousel.slide2.desc") }}</p>
        </div>
      </ElCarouselItem>
      <ElCarouselItem>
        <Image src="/images/carousel_3.jpg" />
        <div class="title_wrapper">
          <h2>{{ $t("home.carousel.slide3.title") }}</h2>
          <p>{{ $t("home.carousel.slide3.desc") }}</p>
        </div>
      </ElCarouselItem>
    </ElCarousel>
    <section class="part_content main">
      <h1>{{ $t("home.tech.title") }}</h1>
      <p>{{ $t("home.tech.p1") }}</p>
      <p>{{ $t("home.tech.p2") }}</p>
      <p>{{ $t("home.tech.p3") }}</p>
      <p>{{ $t("home.tech.p4") }}</p>
    </section>
    <section class="part_content">
      <h1>{{ $t("home.oneStop.title") }}</h1>
      <p>{{ $t("home.oneStop.p1") }}</p>
      <p>{{ $t("home.oneStop.p2") }}</p>
      <p>{{ $t("home.oneStop.p3") }}</p>

      <Image
        src="/images/one_stop_solution.jpg"
        class="content_image"
        width="800px"
      />
    </section>
    <section class="part_content solution">
      <h1>{{ $t("home.solutions.title") }}</h1>
      <SolutionTab />
    </section>
    <section class="slogan part_content">
      <Image src="/images/parallax_home.jpg" class="slogan_image" />
      <p>{{ $t("home.slogan") }}</p>
    </section>
  </div>
</template>
<script setup lang="ts">
import Image from "~~/components/Image.vue";
import SolutionTab from "~~/components/Solution.vue";

definePageMeta({ layout: "home" });
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  position: relative;
  // 轮播高度改由 CSS 控制，替代原先的 window.innerHeight 计算：
  // dvh 在移动端浏览器地址栏收起时表现更好，vh 作为降级。
  :deep(.el-carousel__container) {
    height: 100vh;
    height: 100dvh;
  }
  .el-carousel__item {
    height: 100%;
    //q: 让 title_wrapper 居中偏左展示
    .title_wrapper {
      position: absolute;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-100%, -50%);
      width: 45%;
      text-align: left;
      color: #fff;
      h2 {
        font-size: 60px;
        margin-bottom: 14px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 14px;
      }
    }
  }
  section.part_content {
    padding: 120px 0;
    text-align: center;
    font-size: 16px;
    h1 {
      margin-top: 0;
      font-size: 36px;
      color: #34495e;
    }
    p {
      margin-top: 0;
      color: #848e97;
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 14px;
    }
  }
  .part_content.main {
    padding: 150px 0;
    h1 {
      font-size: 48px;
      margin-bottom: 54px;
    }
  }
  .slogan.part_content {
    position: relative;
    padding: 0;
    height: 320px;
    p {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 36px;
      color: #fff;
    }
  }
  > section:nth-of-type(even) {
    padding-top: 60px;
    background-color: #f2f5f8;
  }
  .content_image {
    aspect-ratio: auto 800 / 220;
    margin-bottom: 20px;
    border-radius: 10px;
    :deep(.image-slot) {
      background-color: #fff;
    }
  }
}
</style>
